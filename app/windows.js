// @flow
import { BrowserWindow, remote } from 'electron';
import MenuBuilder from './menu';

export type Windows = { [key: string]: BrowserWindow };
export const windows: Windows = {};

export const createMainWindow = () => {
  const main = new BrowserWindow({
    show: false,
    width: 550,
    height: 225,
    resizable: false
  });

  main.loadURL(`file://${__dirname}/app.html`);

  main.webContents.on('did-finish-load', () => {
    if (!main) {
      throw new Error('"main" is not defined');
    }
    main.show();
    main.focus();
  });

  main.on('closed', () => {
    windows.main = null;
  });

  const menuBuilder = new MenuBuilder();
  menuBuilder.buildMenu(main);

  windows.main = main;
  return windows;
};

export const createWidgetWindow = () => {
  if (!windows.main) return;
  const mainPos = windows.main.getPosition();
  const mainSize = windows.main.getSize();
  const options = {
    width: 145,
    height: 35,
    frame: false,
    movable: true,
    resizable: false,
    alwaysOnTop: true,
    backgroundColor: '#2b405b'
  };
  const widget = new BrowserWindow({
    ...options,
    x: mainPos[0] + mainSize[0] - options.width,
    y: mainPos[1] + mainSize[1]
  });
  widget.loadURL(`file://${__dirname}/app.html#/widget`);
  console.info('ugur');
  console.info(`file://${__dirname}/app.html#/widget`);
  widget.on('closed', () => {
    windows.widget = null;
  });
  windows.widget = widget;
  return widget;
};

export const closeWindow = () => remote.getCurrentWindow().close();
