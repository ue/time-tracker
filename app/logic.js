/* eslint import/prefer-default-export: 0, no-unused-expressions: 0, no-param-reassign: 0 */
// @flow

import { ipcMain } from "electron";
import moment from "moment";
import { prop, last, groupWith, compose, filter, length, reduce } from "ramda";
import { windows } from "./windows";

type WorkLog = {
  running: boolean, // true means started, flase means stopped
  date: Date
};
// we assume the first workLog running is true.
const workLogs: WorkLog[] = [];
let tickInterval = null;

export const setupStartStop = () => {
  ipcMain.on("init", handleInit);
  ipcMain.on("start-stop", handleStartStop);
};

const isRunning = () => prop("running", last(workLogs) || {});

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
      windows[name].webContents.send("start-stop", {
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
    // sum up durations between started and stopped dates
    reduce((acc, paired) => acc + paired[1].date - paired[0].date, 0),
    // remove those not paired, for example duplicate stopped!
    filter(log => length(log) === 2),
    // pair started and stopped together
    groupWith((log1, log2) => log1.running && !log2.running),
    // append stopped if currently running
    logs =>
      isRunning() ? [...logs, { running: false, date: moment.now() }] : logs
  )(workLogs);
