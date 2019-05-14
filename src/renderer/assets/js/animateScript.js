/**
 * 左侧控制栏的 触发点击事件
 */
function leftFileControl() {
    const controlFileButton = document.querySelector('.controlFile_button')
    const menu = document.querySelector('.menu')
    const leftArea = document.querySelector('.left')
    if (leftArea.classList.contains('active')) {
        if (controlFileButton.classList.contains('open')) {
            leftMenuControlOpen()
            leftFileControlClose()
            //为动画效果添加结束事件
            transationEndCSS(menu, menuActiveCallback)
        } else {
            leftFileControlOpen()
            leftMenuControlClose()
            //为动画效果添加结束事件
            transationEndCSS(menu, fileNodeActiveCallback)
        }
    } else {
        leftArea.classList.add('active')
        leftMenuControlOpen()
    }
    ///为过度效果添加结束事件
    transationEndCSS(document.querySelector('.left'), leftAnimationEndCallback)
}
/**
 * 文件区域 展开
 */

function leftFileControlOpen() {
    const controlFileButton = document.querySelector('.controlFile_button')
    const fileNode = document.querySelector('.file')
    fileNode.classList.add('active')
    controlFileButton.classList.add('open')

}
/**
 * 文件区域关闭
 */
function leftFileControlClose() {
    const controlFileButton = document.querySelector('.controlFile_button')
    const fileNode = document.querySelector('.file')
    fileNode.classList.remove('active')
    controlFileButton.classList.remove('open')
}

/**
 * 控制菜单区域展开
 */
function leftMenuControlOpen() {

    const menu = document.querySelector('.menu')
    menu.classList.add('active')
}
/**
 * 控制菜单区域关闭
 */
function leftMenuControlClose() {
    const menu = document.querySelector('.menu')
    menu.classList.remove('active')
}

/**
 * 菜单控制区域的  动画结束触发事件
 */
function menuActiveCallback() {


}
/**
 * 文件 选择框体的 动画结束触发事件
 */
function fileNodeActiveCallback() {}

/**
 * 底部区域的动画效果控制  使用按钮点击控制
 */
function bottomAttrsControl() {
    const attrsBannerButton = document.querySelector('.attrs_banner_button')
    if (attrsBannerButton.classList.contains('open')) {
        bottomAttrsControlClose()
    } else {
        bottomAttrsControlOpen()
    }

    transationEndCSS(document.querySelector('.attrs_container'), attrsAnimationEndCallback)
}
/**
 * 底部属性区域关闭  方法
 */
function bottomAttrsControlClose() {
    const bpmnAttrs = document.querySelector('.attrs')
    const attrsBannerButton = document.querySelector('.attrs_banner_button')

    attrsBannerButton.classList.remove('open')
    bpmnAttrs.classList.remove('active')
}
/**
 * 底部属性区域打开方法
 */
function bottomAttrsControlOpen() {

    const bpmnAttrs = document.querySelector('.attrs')
    const attrsBannerButton = document.querySelector('.attrs_banner_button')

    attrsBannerButton.classList.add('open')
    bpmnAttrs.classList.add('active')
}
/**
 * 切换图形区域额的全屏 和退出全屏
 */
function svgFullScreenChange() {
    const fullScreen = document.querySelector('.full_screen')
    const normalScreen = document.querySelector('.normal_screen')
    const leftMenu = document.querySelector('.left')
    if (fullScreen.classList.contains('active') && !normalScreen.classList.contains('active')) {
        //退出全屏
        fullScreen.classList.remove('active')
        bottomAttrsControlOpen()
        leftMenuControlOpen()
        leftFileControlClose()
        leftMenu.classList.add('active')
        normalScreen.classList.add('active')


    } else if (normalScreen.classList.contains('active') && !fullScreen.classList.contains('active')) {
        //全屏
        fullScreen.classList.add('active')
        normalScreen.classList.remove('active')
        leftMenu.classList.remove('active')
        bottomAttrsControlClose()
        leftMenuControlClose()
        leftFileControlClose()
    }
}
/**
 * 左侧动画结束后 执行的检查回调函数
 */
function leftAnimationEndCallback() {
    const fullScreen = document.querySelector('.full_screen')
    const normalScreen = document.querySelector('.normal_screen')
    const leftArea = document.querySelector('.left').classList
    const attrArea = document.querySelector('.attrs').classList

    if (leftArea.contains('active') || attrArea.contains('active')) {

        fullScreen.classList.remove('active')
        normalScreen.classList.add('active')
    }
}

/**
 * 左侧菜单列表 项具体修改展开项
 */
function leftMenuEditOptionOpen(e) {
    let targetName = e.targetName
    let target = e.target
    if (target.classList.contains('edit_svg_edit_options')) {
        if (target.classList.contains('active')) {
            target.classList.remove('active')
        } else {
            Array.from(document.getElementsByClassName('edit_svg_edit_options')).forEach(element => {
                element.classList.remove('active')
            });
            target.classList.add('active')
        }
    }
    return
}
/**
 *  下方属性区域动画结束后执行的回调函数
 */
function attrsAnimationEndCallback() {
    leftAnimationEndCallback()
}
/**
 * 绑定 动画结束的触发的事件
 * @param {动画节点} node 
 * @param {动画结束之后执行的回调函数} callback 
 */
function animateEndCSS(node, callback) {

    function handleAnimationEnd() {
        node.removeEventListener('animationend', handleAnimationEnd)
        if (typeof callback === 'function') callback()
    }
    node.addEventListener('animationend', handleAnimationEnd)
}

/**
 * 绑定 动画结束的触发的事件
 * @param {动画节点} node 
 * @param {动画结束之后执行的回调函数} callback 
 */
function transationEndCSS(node, callback) {

    function handleTransitionEnd() {

        node.removeEventListener('transitionend', handleTransitionEnd)

        if (typeof callback === 'function') callback()
    }
    node.addEventListener('transitionend', handleTransitionEnd)
}
/**
 * 修改的菜单列表项
 */
function editOptions() {
    const options = document.getElementsByClassName('edit_svg_edit_options')
    Array.from(options).forEach(element => {
        element.addEventListener('click', function (e) {
            stopBubble(e)
            const nextsiling = this.nextSibling.nextSibling
            if (this.classList.contains('active')) {
                this.classList.remove('active')
                nextsiling.classList.remove('active')
            } else {
                Array.from(options).forEach(ele => {
                    ele.classList.remove('active')
                    ele.nextSibling.nextSibling.classList.remove('active')
                })
                this.classList.add('active')
                nextsiling.classList.add('active')
            }
        })
    })
}
/**
 * 操作文件到方法
 */
function controlFileCallback() {
    console.log('111')

}


/**
 * 修改菜单的图标和标题点击事件
 */
function editTitleAndIconCallback(e) {

    const targets = document.querySelectorAll('.editSvg>ul>li')
    console.log(targets)

}
/**
 * 阻止事件冒泡
 * @param {*事件对象E} e 
 */
function stopBubble(e) {
    if (e && e.stopPropagation)
        e.stopPropagation()
    else
        window.event.cancelBubble = true
}

/**
 * 界面的动态效果总输出的方法
 */
function animate() {
    document.querySelector('.controlFile_button').onclick = leftFileControl
    document.querySelector('.attrs_banner_button').onclick = bottomAttrsControl
    document.querySelector('.svg_screen_control').onclick = svgFullScreenChange
    document.querySelector('.editSvg').addEventListener('click', editTitleAndIconCallback)
    document.querySelector('.file_button').addEventListener('click', controlFileCallback)
    editOptions()
}
module.exports = animate