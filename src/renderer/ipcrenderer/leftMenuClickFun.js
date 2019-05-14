import config from "./leftMenuBtnConfig"
import $ from 'jquery'

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
 * 触发对应的点击事件，检验元素是否可以触发这个点击事件
 * @param {点击的元素在config 中的配置} params 
 */
function tragerClickFun(params, id) {
    params.event(id)
}


/**
 * 
 * @param {界面上点击的元素的本体} that 
 */
function init(that, e) {
    let clickBtnID = $(that).attr('id')
    let targetObj = config[clickBtnID]
    if (!targetObj) {
        //没有就向下找一层
        for (const key in config) {
            if (clickBtnID.startsWith(key)) {
                targetObj = config[key].children[clickBtnID]
            }
        }
        //如果还没有就停止此次点击事件
        if (!targetObj) {
            return
        }
    }
    //触发点击事件
    tragerClickFun(targetObj, clickBtnID)
    // 阻止事件冒泡
    stopBubble(e)

}

export default init