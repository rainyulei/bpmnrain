const {
    ipcMain,
    BrowserWindow,
    webContents,
    dialog
} = require('electron')
/**
 * 保存文件为 SVG 格式
 */
export function saveSvg() {
    BrowserWindow.getFocusedWindow().webContents.send('saveFile', 'svg')
}
/**
 * 保存 文件为BPMN 格式
 */
export function saveBpmn() {
    BrowserWindow.getFocusedWindow().webContents.send('saveFile', 'bpmn')
}
export function readFIle() {
    dialog.showOpenDialog({
        title: 'open file',
        filters: [{
            name: 'Svg',
            extensions: ['svg']
        }, {
            name: 'bpmn',
            extensions: ['bpmn']
        }, {
            name: 'All Files',
            extensions: ['*']
        }],
        properties: ['showHiddenFiles', 'openFile', 'multiSelections']
    }, (data) => {
        //在这里把读取到的 文件目录传送到 ipc renderer 进程中
        if (!data) return //这里做个提示 
        console.log(data)
        BrowserWindow.getFocusedWindow().webContents.send('filePath', JSON.stringify(data))

    })
}