/* eslint class-methods-use-this: 0 */
// @flow
import { app, Menu, BrowserWindow } from 'electron';
import { createWidgetWindow } from './windows';

export default class MenuBuilder {
  buildMenu(window: BrowserWindow) {
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.DEBUG_PROD === 'true'
    ) {
      this.setupDevelopmentEnvironment(window);
    }

    const template = this.buildTemplate();
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    return menu;
  }

  setupDevelopmentEnvironment(window: BrowserWindow) {
    window.openDevTools();
    window.webContents.on('context-menu', (e, props) => {
      const { x, y } = props;

      Menu.buildFromTemplate([
        {
          label: 'Inspect element',
          click: () => {
            window.inspectElement(x, y);
          }
        }
      ]).popup(window);
    });
  }

  buildTemplate() {
    const subMenuAbout = {
      label: 'Widget',
      submenu: [
        {
          label: 'Widget',
          click: () => {
            const widget = createWidgetWindow();
            if (
              process.env.NODE_ENV === 'development' ||
              process.env.DEBUG_PROD === 'true'
            ) {
              this.setupDevelopmentEnvironment(widget);
            }
          }
        },
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    };

    return [subMenuAbout];
  }
}
