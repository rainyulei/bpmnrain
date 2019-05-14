import types from './types.json'

function dispashDompash(id) {
    const type = Array.from(types.types).forEach(item => {
        if (id.includes(item)) return item
    });
    return type

}

function init(e) {
    /**
     * 每次点击进来 先把元素存储到 window.selectedCache对象上 如果节点有变动 则触发新节点 存储  如果没有变动则不变
     */
    console.log(e.element.id, 'e.emelent.id')
    if (!e) return
    if (e.element.id !== window.selectedCache.id) {
        // 两次的点击结果变换
        window.selectedCache = {
            'id': e.element.id,
            'dom': e.element,
            'type': dispashDompash(e.element.id)
        }
        //  重新生成底部元素
        /**
         * 生成底部元素
         */
        require('./bpmnPropertiesPannalBottom').default(e)

        //重新绑定左侧按钮事件

    } else {
        // 没有变化

    }

    console.log(document.querySelector(`[data-element-id=${e.element.id}]`), '[data-element-id=END_EVENT]')


    console.log(e.element)
    console.log(e.element.id)
}



export default init