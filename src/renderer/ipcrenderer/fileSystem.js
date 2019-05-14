import $ from 'jquery'

import path from 'path'
import fs from 'fs'
import minimapModule from 'diagram-js-minimap';
import BpmnModeler from 'bpmn-js/lib/Modeler'
import local from './localStorageControl'
import propertiesPanelModule from 'bpmn-js-properties-panel/index'
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda';

import {
    ipcRenderer
} from 'electron'

function getFileName(file) {
    return Array.of(path.dirname(file), path.basename(file), path.extname(file))
}
export function createBpmnmoder() {
    const canvas = $('#js-canvas')
    var bpmnModeler = new BpmnModeler({
        container: canvas,
        propertiesPanel: {
            parent: '#js-properties-panel'
        },
        additionalModules: [
            propertiesPanelModule,
            propertiesProviderModule,
            // minimapModule
        ],
        moddleExtensions: {
            camunda: camundaModdleDescriptor
        }
    });

    return bpmnModeler
}

// function registerFileDrop(container, callback) {

//     function handleFileSelect(e) {
//         e.stopPropagation();
//         e.preventDefault();

//         var files = e.dataTransfer.files;

//         var file = files[0];

//         var reader = new FileReader();

//         reader.onload = function (e) {

//             var xml = e.target.result;

//             callback(xml);
//         };

//         reader.readAsText(file);
//     }

//     function handleDragOver(e) {
//         e.stopPropagation();
//         e.preventDefault();

//         e.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
//     }

//     container.get(0).addEventListener('dragover', handleDragOver, false);
//     container.get(0).addEventListener('drop', handleFileSelect, false);
// }


// // file drag / drop ///////////////////////
// var container = $('#js-canvas');
// // check file api availability
// if (!window.FileList || !window.FileReader) {
//     window.alert(
//         'Looks like you use an older browser that does not support drag and drop. ' +
//         'Try using Chrome, Firefox or the Internet Explorer > 10.');
// } else {
//     registerFileDrop(container, openDiagram);
// }

/**
 * 加载XML 文件到页面上 
 * @param {xml文件} xml 
 */
export function openDiagram(bpmnModeler, xml, extername) {
    console.log(extername)
    if (extername === '.svg') {

        bpmnModeler.importXML(xml, function (err) {
            if (err) {
                console.error(err);
            } else {
                // console.log(xml, "xml======")
                bpmnModeler.get('minimap').open();
            }
        });
    } else if (extername === ".bpmn") {
        bpmnModeler.importXML(xml, function (err) {
            if (err) {
                console.error(err);
            } else {
                // console.log(xml, "xml======")
            }
        });
    }

}
export function savefile(moder) {

    ipcRenderer.on('saveFile', (event, data) => {
        if (data === 'svg') {
            saveSVG(moder, function (err, svg) {
                ipcRenderer.send('saveFileSvg', svg)
            });
        } else if (data === 'bpmn') {
            saveDiagram(moder, function (err, xml) {
                ipcRenderer.send('saveFileBpmn', xml)
            });

        }
    })
}

/**
 * 保存文件为 SVG 格式
 * @param {*} bpmnModeler 
 * @param {*} done 
 */
export function saveSVG(bpmnModeler, done) {
    bpmnModeler.saveSVG(done);
}
/**
 * 保存文件为 XML 格式
 * @param {*} bpmnModeler 
 * @param {*} done 
 */
export function saveDiagram(bpmnModeler, done) {
    bpmnModeler.saveXML({
        format: true
    }, function (err, xml) {
        done(err, xml);
    });
}
export function openfile() {
    console.log("openfile ")
    ipcRenderer.on('filePath', function (event, data) {
        local.setFilePaths(JSON.parse(data), openFileCallback)
        let paths = local.getFilePaths()
        local.setNowFilePath(paths[0])
    })
}
/**
 * 在界面上打开一个文件后的回调函数
 */
export function openFileCallback() {
    $('.file_area_histroy ul').html('')
    let fileTemplate = ""
    let paths = local.getFilePaths()
    if (!paths) return //给出提示
    paths.forEach((element, index) => {
        fileTemplate += `<li id="${element}" class="file_load${index===0?' active':''}">
        <span class="icon">
        <svg class="icon" aria-hidden="true">
         <use xlink:href="${getFileName(element)[2]==='.svg'?'#icon-SVGfileformat':'#icon-SVGfileformatbpmn'}"></use>
         </svg>             
       </span>
        <span class="fileName">
        ${getFileName(element)[1].length>18?getFileName(element)[1].slice(0,15)+'...':getFileName(element)[1]}
        </span>
        </li>`
        if (index === 0) {
            console.log(element)
            fs.readFile(element, (err, data) => {
                if (err) return
                if (data) {
                    console.log(data.toString('utf8'), "=====data")
                    openDiagram(createBpmnmoder(), data.toString('utf8'), path.extname(element))
                }
            })
        }


        $('.file_area_histroy ul').append(fileTemplate)
        $('.file_area_histroy ul').on('click', 'li', pathClickFun)
    })
}
/**
 * 左侧文件按钮的点击事件
 */
function pathClickFun() {
    console.log(this.id)
}