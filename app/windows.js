// @flow
import { BrowserWindow, remote, screen } from 'electron';
import MenuBuilder from './menu';

export type Windows = { [key: string]: BrowserWindow };
export const windows: Windows = {};

export const createMainWindow = () => {
  const main = new BrowserWindow({
    show: false,
    width: 520,
    height: 220,
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
  const screenSize = screen.getPrimaryDisplay();

  if (!windows.main) return;
  const options = {
    alwaysOnTop: true,
    x: screenSize.width - 100,
    y: screenSize.height - 100,
    backgroundColor: '#34495e',
    frame: false,
    height: 35,
    movable: true,
    resizable: false,
    width: 145
  };
  const widget = new BrowserWindow({
    ...options
  });
  widget.loadURL(`file://${__dirname}/app.html#/widget`);
  widget.on('closed', () => {
    windows.widget = null;
  });
  windows.widget = widget;
  return widget;
};

export const closeWindow = () => remote.getCurrentWindow().close();
