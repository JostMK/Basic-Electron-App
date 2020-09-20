const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {

    // create BrowserWindow
    const win = new BrowserWindow({
        width: 1100,
        height: 750,
        minWidth: 650,
        minHeight: 400,
        frame: false,
        backgroundColor: '#333333',
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        icon: path.join(__dirname, './Assets/Icon.png')
    });

    // load Main Window into BrowserWindow
    win.loadFile('./App/index.html');
    win.webContents.openDevTools();
}


// create Window when the app is ready
app.whenReady().then(createWindow)


//special case with MacOS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});