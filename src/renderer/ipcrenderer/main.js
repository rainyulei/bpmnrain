import $ from 'jquery'

import buildMenu from './rightMouseClickMenu'

import {
    openDiagram,
    createBpmnmoder,
    savefile,
    openfile
} from './fileSystem'

import {
    debounce
} from 'min-dash';

const diagramXML = require('../../resources/newDiagram.bpmn').default

function init() {
    /**
     * 创建moder
     */
    const moder = createBpmnmoder()
    openDiagram(moder, diagramXML, '.bpmn');
    buildMenu()
    openfile()
    $('#menu').on('click', 'li', function (e) {
        require('./leftMenuClickFun').default(this, e)
    })
    //防止高频函数
    var exportArtifacts = debounce(() => {
        savefile(moder)
    }, 500);
    // 界面元素改变  内容发生改变 删除元素
    moder.on('commandStack.changed', exportArtifacts);
    moder.on('commandStack.changed', () => {
        console.log('commandStack.changed')
    });
    moder.on('element.click', (e) => {
        /**
         * 每次点击事件  进行元素 的重新添加和判断
         */
        require('./selectedEvent').default(e)
    });
}

export default init