import {
    readFIle,
    saveSvg,
    saveBpmn
} from '../main/ipcMain/fileSystem'


const windowMenuTemplate = [{
        label: 'File',
        submenu: [{
                label: 'Create New File',
                click() {
                    console.log('新建文件')
                }
            }, {
                type: 'separator'
            },
            {
                label: 'open file',

                click() {
                    readFIle()
                }
            }, {
                type: 'separator'
            },
            {
                label: 'save File',
                click() {

                }
            }, {
                label: 'save as svg',
                click() {
                    saveSvg()
                }
            },
            {
                label: 'save as bpmn',
                click() {
                    saveBpmn()
                }
            }, {
                type: 'separator'
            },
            {
                role: 'exit'
            }

        ]

    },
    {
        label: 'Edit',
        submenu: [{
                role: 'undo'
            },
            {
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {
                role: 'cut'
            },
            {
                role: 'copy'
            },
            {
                role: 'paste'
            },
            {
                role: 'pasteandmatchstyle'
            },
            {
                role: 'delete'
            },
            {
                role: 'selectall'
            }
        ]
    },
    {
        label: 'View',
        submenu: [{
                role: 'reload'
            },
            {
                role: 'forcereload'
            },
            {
                role: 'toggledevtools'
            },
            {
                type: 'separator'
            },
            {
                role: 'resetzoom'
            },
            {
                role: 'zoomin'
            },
            {
                role: 'zoomout'
            },
            {
                type: 'separator'
            },
            {
                role: 'togglefullscreen'
            }
        ]
    },
    {
        role: 'window',
        submenu: [{
                role: 'minimize'
            },
            {
                role: 'close'
            }
        ]
    },
    {
        role: 'help',
        submenu: [{
            label: 'Learn More',
            click() {
                require('electron').shell.openExternal('https://electronjs.org')
            }
        }]
    }
]

const rightClickMenuTemplate = [{
        label: 'un do',
        click() {
            console.log('item 1 clicked')
        }
    },
    {
        label: 're do',
        click() {
            console.log('item 2 clicked')
        }
    },
    {
        type: 'separator'
    },
    {
        label: 'select all',
        click() {
            console.log('item 3 clicked')
        }
    },
    {
        label: 'refresh page',
        click() {
            console.log('item 4 clicked')
        }
    },
    {
        type: 'separator'
    },
    {
        label: 'delete select',
        click() {
            console.log('item 5 clicked')
        }
    },
    {
        label: 'delete all',
        click() {
            console.log('item 6 clicked')
        }
    }


]
const bottomMenuTemplate = []

export {
    windowMenuTemplate,
    rightClickMenuTemplate,
    bottomMenuTemplate
}