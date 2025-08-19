const { app, BrowserWindow } = require("electron");
const { autoUpdater } = require("electron-updater");
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
app.whenReady().then(() => {
  createWindow();
  autoUpdater.checkForUpdatesAndNotify();
});

autoUpdater.on('update-available', () => {
  console.log('Update available.');
});

autoUpdater.on('update-downloaded', () => {
  console.log('Update downloaded; will install in 5 seconds...');
  setTimeout(() => {
    autoUpdater.quitAndInstall();
  }, 5000);
});

autoUpdater.on('error', (err) => {
  console.error('Error in auto-updater:', err);
});
