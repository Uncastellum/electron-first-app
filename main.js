// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// Pallete: http://imgr.co/740/oahu.html

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#292929',
    resizable: true,
    minWidth: 174,
    minHeight: 400,
    frame: true,
    titleBarStyle: 'hidden'
  })
      //frame: false PARA QUITAR BORDES
      //titleBarStyle: 'customButtonsOnHover' PARA BOTONES CUSTOMIZADOS(cierre minimizar etc)


  mainWindow.setIcon('./resources/cloud48.png')



  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Finalize process when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
