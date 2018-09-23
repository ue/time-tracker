/* eslint import/prefer-default-export: 0, no-unused-expressions: 0, no-param-reassign: 0 */

import { ipcMain } from 'electron';
import moment from 'moment';
import { prop, last } from 'ramda';
import { windows } from './windows';
// ipcMain.on('start-time', (event, value) => {
//   console.log(`@@@@@${value}`);
// });
const workLogs = [];
let tickInterval = null;

export const setupStartStop = () => {
  ipcMain.on('init', handleInit);
  ipcMain.on('timer-status', handleStartStop);
  // ipcMain.on('start-time', ugur);
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
  ipcMain.on('start-time', (event, value) => value);
