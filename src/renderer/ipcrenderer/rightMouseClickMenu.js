const {
    remote
} = require('electron')

const {
    Menu,
    MenuItem
} = remote

import {
    rightClickMenuTemplate
} from '../../resources/menuTemplate'

// const menu = new Menu()


// menu.append(new MenuItem({
//     label: 'MenuItem1',
//     click() {
//         console.log('item 1 clicked')
//     }
// }))


function buildMenu() {
    const m = Menu.buildFromTemplate(rightClickMenuTemplate)
    window.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        m.popup({
            window: remote.getCurrentWindow()
        })
    }, false)
}


export default buildMenu