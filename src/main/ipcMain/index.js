import {
    ipcMain,
    BrowserWindow,
    Menu
} from 'electron'


import menu from './menu'
import ipcChannal from './ipcResiveChange'



function init() {
    ipcChannal()
    /**
     * set  window menu  here
     */
    Menu.setApplicationMenu(menu)


}
export default init