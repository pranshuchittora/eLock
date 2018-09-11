const { app, BrowserWindow } = require('electron')
const path = require('path')

// Custom imports
//Main Menu config
const { setMainMenu } = require('./appLogic/mainMenu')
// App restriction logic
const { restrictedKeyCall } = require('./appLogic/restriction')

let mainWindow
app.on('ready', () => {
	mainWindow = new BrowserWindow({
		show: false,
		kiosk: true,
		minimizable: false,
		maximizable: false,
		webPreferences: {
			nodeIntegration: false
		}
	})
	// Loads index.html from public/
	mainWindow.loadURL(path.join('file://', __dirname, '/public/index.html'))
	mainWindow.on('ready-to-show', () => {
		mainWindow.show()
	})
	// MainMenu setting
	setMainMenu()

	// When window gets unfocused the app quits
	mainWindow.on('blur', () => {
		console.log('Window out of focus ' + '\n' + 'Shutting application down')
		app.quit()
	})
})
// Imported function from appLogic/restriction.js
restrictedKeyCall()

module.exports = { mainWindow }
