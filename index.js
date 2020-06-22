const { app, BrowserWindow } = require("electron");

function createWindow() {
  // create the browser window
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  // and load the index.html
  win.loadFile("index.html");
}

app.whenReady().then(createWindow);
