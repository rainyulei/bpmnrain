import {
    ipcRenderer
} from "electron";



function windowresize() {

    ipcRenderer.send('windowResize')

}
/**
 * 初始页面设置高度 和 高度的自适应
 */
ipcRenderer.on('windowNewSize', (event, args) => {

    document.querySelector('#app').style.height = args[1] + "px"
    document.querySelector('.root').style.height = args[1] + "px"
    document.querySelector('.file').style.height = args[1] + "px"
    document.querySelector('.menu').style.height = args[1] + "px"

    document.querySelector('.left').style.height = args[1] + "px"
    document.querySelector('.right').style.height = args[1] + "px"
})

export default {
    windowresize
}