const { app, BrowserWindow } = require("electron");
const windowStateKeeper = require("electron-window-state");
let win;
function createWindow() {
  const mainWindowsState = windowStateKeeper({
    defaultHeight: 500,
    defaultWidth: 800,
  });
  const win = new BrowserWindow({
    x: mainWindowsState.x,
    y: mainWindowsState.y,
    width: mainWindowsState.width,
    height: mainWindowsState.height,
    title: "Hello World",
    webPreferences: {
      nodeIntegration: true,
    },
  });
  //   let child = new BrowserWindow({ parent: win });
  //   child.loadFile("index.html");
  //   child.show();
  win.loadFile("index.html");
  mainWindowsState.manage(win);
}
app.whenReady().then(createWindow);
