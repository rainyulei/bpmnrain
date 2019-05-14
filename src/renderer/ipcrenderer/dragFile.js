const $ = require('jquery')
const fs = require('fs')

/**
 * js-canvas 区域的  文件拖拽  加载事件
 */
export default function init() {
    const js_canvas = $('#js-canvas')

    js_canvas.ondragenter = js_canvas.ondragover = js_canvas.ondragleave = function () { //阻止其他拖拽有关的事件
        return false //阻止默认行为
    }
    js_canvas.ondrop = (e) => { //拖拽的撒手事件
        e.preventDefault()
        console.log(e.dataTransfer.files[0])
        const filePath = e.dataTransfer.files[0].path //获取路径
        const size = e.dataTransfer.files[0].size //获取大小
        if (size > 10000) return false //文件过大不给打开
        fs.readFile(filePath, (err, data) => {
            console.log(data)

        })
    }
}