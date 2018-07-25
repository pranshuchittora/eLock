const {app, Menu} = require('electron')


const setMainMenu = () =>{
    const template = [

        {
            label: 'eLock',
            submenu: [
              {role: 'reload'}
             ]
          },

    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

}



module.exports = {setMainMenu};