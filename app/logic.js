/*eslint-disable */
import { ipcMain } from 'electron';
import moment from 'moment';
import { prop, last, groupWith, compose, filter, length, reduce } from 'ramda';
import { windows } from './windows';

const workLogs = [];
let tickInterval = null;

export const setupStartStop = () => {
  ipcMain.on('initial', handleInit);
  ipcMain.on('timer-status', handleStart);
};

const handleInit = event => {
  event.returnValue = { duration: getMilliseconds(), isRunning: isActive() };
};

const isActive = () => prop('isRunning', last(workLogs) || {});

const handleStart = () => {
  const isRunning = !isActive();
  notifyWindows({ isRunning, duration: getMilliseconds() });
  workLogs.push({ isRunning, date: moment.now() });
  isRunning ? startTick() : stopTick();
};

const notifyWindows = ({ isRunning, duration }) => {
  Object.keys(windows).forEach(
    name =>
      windows[name] &&
      windows[name].webContents.send('timer-status', {
        isRunning,
        duration
      })
  );
};

const startTick = () => {
  stopTick();
  tickInterval = setInterval(tick, 1000);
};

const stopTick = () => {
  if (tickInterval) clearInterval(tickInterval);
};

const tick = () =>
  notifyWindows({ isRunning: true, duration: getMilliseconds() });

const getMilliseconds = () =>
  compose(
    reduce((acc, merged) => merged[1].date - merged[0].date, 0),
    filter(log => length(log) === 2),
    groupWith((log1, log2) => log1.isRunning && !log2.isRunning),
    logs =>
      isActive() ? [...logs, { isRunning: false, date: moment.now() }] : logs
  )(workLogs);
