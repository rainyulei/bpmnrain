/**
 * 界面的布局HTML 元素
 */
import control from './index.html'
/**
 * css
 */


import './assets/css/style.css'
import './assets/css/custemer.css'
import './assets/css/color.css'
import './assets/css/animate.css'
import './assets/css/app.css'
import './assets/css/diagram-js.css'
import '../../node_modules/bpmn-font/dist/css/bpmn-embedded.css'

/**
 * 字体图标
 */
import '../renderer/assets/font/iconfont'

/**
 * 界面动态的JS
 */

import AnimateScript from './assets/js/animateScript.js'


/**
 * resize js
 */
import resize from './ipcrenderer/windowresize'
/**
 * main js
 */
// import main from './ipcrenderer/main'


/**
 *  界面的初始化方法
 */
function init() {

    window.selectedCache = {
        'id': '',
        'dom': ''
    }

    /**
     * 创建 元素
     */
    const root = document.querySelector('#app')
    const body = document.createElement('div')
    body.innerHTML = control
    root.appendChild(body)
    /**
     * 界面的 主要的 控制JS  he bpmn  的加载
     */
    require('./ipcrenderer/main').default()
    /**
     * 界面的动态效果
     */
    AnimateScript()

    /**
     * 重置大小高度
     */
    window.onresize = resize.windowresize
}

window.onload = init()
window.afterLoad = function () {
    console.log(11)
}
// window.onclose=