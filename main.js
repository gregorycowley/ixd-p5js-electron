const { app, BrowserWindow } = require('electron');
const path = require('path');
const express = require('express');

let mainWindow;
const PORT = 3000;

const url = require('url');

// Start Express server to serve the web content
const serverApp = express();
serverApp.use(express.static(path.join(__dirname, 'public')));
serverApp.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    useContentSize: true,
  });

  mainWindow.loadURL(`http://localhost:${PORT}`);

  // mainWindow.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, 'public', 'index.html'),
  //     protocol: 'file:',
  //     slashes: true,
  //   })
  // );

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

// // Create the Electron window
// app.whenReady().then(() => {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: false,
//       contextIsolation: true,
//     },
//   });

//   mainWindow.loadURL(`http://localhost:${PORT}`);
//   mainWindow.on('closed', () => (mainWindow = null));
// });
