const { app, globalShortcut } = require('electron')

//Imported JSON
const keysJSON = require('./keys.json')

const restrictedKeyCall = () => {
    app.on('ready', () => {
        // Reading arrays from JSON
        let quitKeys = keysJSON.keysQuit
        let disableKeys = keysJSON.keysDisable
        //let reloadKeys = keysJSON.keysReload;

        // For each key in an Array , funtion is called and the key is the argument
        quitKeys.forEach(key => {
            globalShortcut.register(key, () => {
                console.log(key + ' pressed ' + '\n' + 'Shutting application down')

                app.quit()
            })
        })

        // Disableing keys
        disableKeys.forEach(key => {
            globalShortcut.register(key, () => {

                console.log(key + ' pressed : This key has been disabled.')
            })
        })
    })
}

module.exports = { restrictedKeyCall }
