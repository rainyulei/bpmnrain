import $ from 'jquery'

function createProcessTitle(id) {
    $('.attrs_title span').text(id)
}

/**
 * 获取之后传递进来在进行操作
 */
function init(e) {
    createProcessTitle(e.element.id)

}
export default init