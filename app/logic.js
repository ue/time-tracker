/* eslint import/prefer-default-export: 0, no-unused-expressions: 0, no-param-reassign: 0 */
// @flow

import { ipcMain } from 'electron';
import moment from 'moment';
import { prop, last, groupWith, compose, filter, length, reduce } from 'ramda';
import { windows } from './windows';

const workLogs = [];
let tickInterval = null;

export const setupStartStop = () => {
  ipcMain.on('init', handleInit);
  ipcMain.on('timer-status', handleStartStop);
};

const isRunning = () => prop('running', last(workLogs) || {});

const handleInit = event => {
  event.returnValue = { duration: getDuration(), running: isRunning() };
};

const handleStartStop = () => {
  const running = !isRunning();
  notifyWindows({ running, duration: getDuration() });
  workLogs.push({ running, date: moment.now() });
  running ? startTick() : stopTick();
};

const notifyWindows = ({ running, duration }) => {
  Object.keys(windows).forEach(
    name =>
      windows[name] &&
      windows[name].webContents.send('timer-status', {
        running,
        duration
      })
  );
};

const stopTick = () => {
  if (tickInterval) clearInterval(tickInterval);
};
const startTick = () => {
  stopTick();
  tickInterval = setInterval(tick, 1000);
};
const tick = () => notifyWindows({ running: true, duration: getDuration() });

export const getDuration = () =>
  compose(
    reduce((acc, paired) => acc + paired[1].date - paired[0].date, 0),
    filter(log => length(log) === 2),
    groupWith((log1, log2) => log1.running && !log2.running),
    logs =>
      isRunning() ? [...logs, { running: false, date: moment.now() }] : logs
  )(workLogs);
