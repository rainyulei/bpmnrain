const {
    ipcMain,
    dialog
} = require('electron')
const fs = require('fs')

export default () => {
    ipcMain.on('saveFileSvg', (event, data) => {
        dialog.showSaveDialog({
            title: 'save svg',
            filters: [{
                name: 'Svg',
                extensions: ['svg']
            }]
        }, (filename) => {
            fs.writeFile(filename, data, (err) => {
                if (err) return
            })


        })
    })
    ipcMain.on('saveFileBpmn', (event, data) => {
        dialog.showSaveDialog({
            title: 'save bpmn',
            filters: [{
                name: 'bpmn',
                extensions: ['bpmn']
            }]
        }, (filename) => {
            fs.writeFile(filename, data, (err) => {
                if (err) return
            })

        })
    })
}