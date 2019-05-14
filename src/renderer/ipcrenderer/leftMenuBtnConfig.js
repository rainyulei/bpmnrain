/**
 * 
 *  key: 对应的界面元素的ID
 * 
 * event ： 对应图中的事件  触发的元素
 * 
 * target ： 可以触发这个 元素的事件 的  元素的ID 属性额集合
 * 
 * message： 按钮 hover的时候显示的提示信息
 * 
 * 
 * 
 * StartEvent_04n93rh
 * Task_1ijxmhe
 * ExclusiveGateway_1nlrtke
 * EndEvent_149yfib
 * SubProcess_044tfnf
 * Participant_00u1r71
 *  DataObjectReference_1gh5j9o: 书页
 DataStoreReference_1rvfm0z: 数据库
 IntermediateThrowEvent_0q26sg1: 空心圆
 TextAnnotation_0x7l1n1: 文本框 说明 只能删除
 连接
 SequenceFlow_1ra50f0实线连接
 DataOutputAssociation_1n9amz9: 数据库形状或者 书页的连接
 Association_0jb75gg: 文本框连接
 * 
 * 
 * 
 */
import $ from 'jquery'


/**
 * 创建元素区域
 */


/**
 * 触发创建 开始元素
 */
function create_start_event() {
    $(".entry.bpmn-icon-start-event-none[data-action='create.start-event']").click()

}
/**
 * 触发创建 Intermediate元素
 */
function create_Intermediate_event() {
    $(".entry.bpmn-icon-intermediate-event-none[data-action='create.intermediate-event']").click()
}
/**
 * 触发创建 end_event元素
 */
function create_end_event() {
    $(".entry.bpmn-icon-end-event-none[data-action='create.end-event']").click()
}
/**
 * 触发创建Gateway元素
 */
function create_Gateway() {
    $(".entry.bpmn-icon-gateway-none[data-action='create.exclusive-gateway']").click()
}
/**
 * 触发创建 SubProcess元素
 */
function create_SubProcess() {
    $(".entry.bpmn-icon-subprocess-expanded[data-action='create.subprocess-expanded']").click()
}
/**
 * 触发创建 Participant元素
 */
function create_Participant() {
    $(".entry.bpmn-icon-participant[data-action='create.participant-expanded']").click()
}
/**
 * 触发创建 Data_Object元素
 */
function create_Data_Object_Reference() {
    $(".entry.bpmn-icon-data-object[data-action='create.data-object']").click()
}
/**
 * 触发创建 Data_store元素
 */
function create_Data_store_Reference() {
    $(".entry.bpmn-icon-data-store[data-action='create.data-store']").click()
}
/**
 * 触发创建 task元素
 */
function create_task() {
    $(".entry.bpmn-icon-task[data-action='create.task']").click()
}
/**
 * 触发connect元素
 */
function active_connect_line() {
    $('.entry.bpmn-icon-connection-multi').click()
}
/**
 * 触发hand工具
 */
function active_hand_tool() {
    $('.entry.bpmn-icon-hand-tool').click()
}
/**
 * 触发remove_space元素
 */
function active_remove_space_tool() {
    $('.entry.bpmn-icon-space-tool').click()
}
/**
 * 触发lasso元素
 */
function active_lasso_tool() {
    $('.entry.bpmn-icon-lasso-tool').click()
}
/**
 * 触发participent insert line above元素
 */
function active_lane_insert_above() {
    $(".entry.bpmn-icon-lane-insert-above[data-action='lane-insert-above']").click()
}
/**
 * 触发participent insert line blow元素
 */
function active_lane_insert_below() {
    $(".entry.bpmn-icon-lane-insert-below[data-action='lane-insert-below']").click()
}
/**
 * 触发 participent lane divide two元素
 */
function active_lane_divide_two() {
    $(".entry.bpmn-icon-lane-divide-two[data-action='lane-divide-two']").click()
}
/**
 * 触发 participent lane divide three 元素
 */
function active_lane_divide_three() {
    $(".entry.bpmn-icon-lane-divide-three[data-action='lane-divide-three']").click()
}


/**
 * 触发 change-type
 */
function active_change_type(callback) {
    $(".entry.bpmn-icon-screw-wrench[data-action='replace']").click()
    callback()
    $(".djs-popup.bpmn-replace").css('display', 'none')

}

/**
 * 触发 delete  删除事件
 */
function active_delete() {
    $(".entry.bpmn-icon-trash[data-action='delete']").click()
}

/**
 * 触发 text - annotation 添加事件
 */
function active_text_annotation() {
    $(".entry.bpmn-icon-text-annotation[data-action='append.text-annotation']").click()
}

/**
 * 触发 parallel-marker  元素
 */
function active_parallel_marker() {
    active_change_type(() => {
        $('.entry.bpmn-icon-parallel-mi-marker').click()
    })

}

/**
 * 触发 loop  元素
 */
function active_loop_marker() {
    active_change_type(() => {
        $('.entry.bpmn-icon-loop-marker').click()
    })

}
/**
 * 触发 sequential-marker  元素
 */
function active_sequential_marker() {
    active_change_type(() => {
        $('.entry.bpmn-icon-sequential-mi-marker').click()
    })

}
/**
 * task change 区域
 */
/**
 * 触发  send task 元素
 */
function change_to_send_task() {
    active_change_type(() => {
        $(".entry.bpmn-icon-send[data-id='replace-with-send-task']").click()
    })

}
/**
 * 触发 receive 元素
 */
function change_to_receive_task() {
    active_change_type(() => {
        $(".entry.bpmn-icon-receive[data-id='replace-with-receive-task']").click()
    })

}
/**
 * 触发 user 元素
 */
function change_to_user_task() {
    active_change_type(() => {
        $(".entry.bpmn-icon-user[data-id='replace-with-user-task']").click()
    })

}

/**
 * 触发 manual元素
 */
function change_to_manual_task() {
    active_change_type(() => {
        $(".entry.bpmn-icon-manual[data-id='replace-with-manual-task']").click()
    })

}

/**
 * 触发 business rule元素
 */
function change_to_business_rule_task() {
    active_change_type(() => {
        $(".entry.bpmn-icon-business-rule[data-id='replace-with-rule-task']").click()
    })

}

/**
 * 触发  service task元素
 */
function change_to_service_task() {
    active_change_type(() => {
        $(".entry.bpmn-icon-service[data-id='replace-with-service-task']").click()
    })

}

/**
 * 触发 script task 元素
 */
function change_to_script_task() {
    active_change_type(() => {
        $(".entry.bpmn-icon-script[data-id='replace-with-script-task']").click()
    })

}

/**
 * 触发 call activity 元素
 */
function change_to_call_activity_task() {
    active_change_type(() => {
        $(".entry.bpmn-icon-call-activity[data-id='replace-with-call-activity']").click()
    })

}

/**
 * subprocess 转换区域
 */


/**
 * 触发 subprocess collapsed 元素
 */
function change_to_collapsed_subprocess() {
    active_change_type(() => {
        $(".entry.bpmn-icon-subprocess-collapsed[data-id='replace-with-collapsed-subprocess']").click()
    })

}

/**
 * 触发 subprocess expanded元素
 */
function change_to_expanded_subprocess() {
    active_change_type(() => {
        $(".entry.bpmn-icon-subprocess-expanded").click()
    })

}

/**
 * 触发 subprocess event expanded元素
 */
function change_to_event_expanded_subprocess() {
    active_change_type(() => {
        $(".entry.bpmn-icon-event-subprocess-expanded[data-id='replace-with-event-subprocess']").click()
    })

}
/**
 * 触发 subprocess transaction expanded元素
 */
function change_to_transaction_subprocess() {
    active_change_type(() => {
        $(".entry.bpmn-icon-transaction[data-id='replace-with-transaction']").click()
    })

}
/**
 * 触发 subprocess expanded元素
 */
function change_to_subprocess_expanded_task() {
    active_change_type(() => {
        $(".entry.bpmn-icon-subprocess-expanded[data-id='replace-with-expanded-subprocess']").click()
    })

}


/**
 * pool / participant 区域 
 */
/**
 * participant 转换为pool
 */
function change_to_collapsed_pool() {
    active_change_type(() => {
        $(".entry.bpmn-icon-lane[data-id='replace-with-collapsed-pool']").click()
    })

}
/**
 * pool 转换为 participant
 */
function change_to_collapsed_participant() {
    active_change_type(() => {
        $(".entry.bpmn-icon-participant[data-id='replace-with-expanded-pool']").click()
    })

}


/**
 * event 转换的区域 
 */




/**
 * 三种基础的event start event end event intermediate event 互相的装欢方法
 */


/**
 * 转换为 intermediate_event 元素
 */
function change_to_intermediate_event() {
    active_change_type(() => {
        $(".entry.bpmn-icon-intermediate-event-none[data-id='replace-with-none-intermediate-throwing']").click()
    })
}

/**
 * 转换为 start event 元素
 */
function change_to_start_event() {
    active_change_type(() => {
        $(".entry.bpmn-icon-start-event-none[data-id='replace-with-none-start']").click()
    })
}
/**
 * 转换为end event 元素
 */
function change_to_end_event() {
    active_change_type(() => {
        $(".entry.bpmn-icon-end-event-none[data-id='replace-with-none-end']").click()
    })
}

/**
 * start event  转换区域
 * 
 */


/**
 * 转换为 conditional start event 元素
 */
function change_to_conditional_start_event() {
    active_change_type(() => {
        $(".entry.bpmn-icon-start-event-condition[data-id='replace-with-conditional-start']").click()
    })
}

function change_to_conditional_non_start_event() {
    active_change_type(() => {
        $(".entry bpmn-icon-start-event-non-interrupting-condition[data-id='replace-with-non-interrupting-conditional-start']").click()
    })
}
/**
 * intermediate_event 的转换区域
 */

/**
 * 转换为 intermediate message catch event 元素
 */
function change_to_message_intermediate_catch_event() {
    active_change_type(() => {
        $(".entry.bpmn-icon-intermediate-event-catch-message[data-id='replace-with-message-intermediate-catch']").click()
    })
}
/**
 * 转换为 intermediate message catch event 元素
 */
function change_to_message_intermediate_throw_event() {
    active_change_type(() => {
        $(".entry.bpmn-icon-intermediate-event-throw-message[data-id='replace-with-message-intermediate-throw']").click()
    })
}
/**
 * 转换为 intermediate timer catch event 元素
 */
function change_to_timer_intermediate_catch_event() {
    active_change_type(() => {
        $(".entry.bpmn-icon-intermediate-event-catch-timer[data-id='replace-with-timer-intermediate-catch']").click()
    })
}
/**
 * 转换为 intermediate escalation catch event 元素
 */
function change_to_escalation_intermediate_throw_event() {
    active_change_type(() => {
        $(".entry.bpmn-icon-intermediate-event-throw-escalation[data-id='replace-with-escalation-intermediate-throw']").click()
    })
}
/**
 * 转换为 intermediate condition catch event 元素
 */
function change_to_condition_intermediate_catch_event() {
    active_change_type(() => {
        $(".entry.bpmn-icon-intermediate-event-catch-condition[data-id='replace-with-conditional-intermediate-catch']").click()
    })
}
/**
 * 转换为 intermediate link catch event 元素
 */
function change_to_link_intermediate_catch_event() {
    active_change_type(() => {
        $(".entry.bpmn-icon-intermediate-event-catch-link[data-id='replace-with-link-intermediate-catch']").click()
    })
}
/**
 * 转换为 intermediate message catch event 元素
 */
function change_to_link_intermediate_throw_event() {
    active_change_type(() => {
        $(".entry.bpmn-icon-intermediate-event-throw-link[data-id='replace-with-link-intermediate-throw']").click()
    })
}
/**
 * 转换为 intermediate message catch event 元素
 */
function change_to_compensation_intermediate_throw_event() {
    active_change_type(() => {
        $(".entry.bpmn-icon-intermediate-event-throw-compensation[data-id='replace-with-compensation-intermediate-throw']").click()
    })
}
/**
 * 转换为 intermediate message catch event 元素
 */
function change_to_signal_intermediate_catch_event() {
    active_change_type(() => {
        $(".entry bpmn-icon-intermediate-event-catch-signal[data-id='replace-with-signal-intermediate-catch']").click()
    })
}
/**
 * 转换为 intermediate message catch event 元素
 */
function change_to_signal_intermediate_throw_event() {
    active_change_type(() => {
        $(".entry.bpmn-icon-intermediate-event-throw-signal[data-id='replace-with-signal-intermediate-throw']").click()
    })
}

/**
 * end event 元素 转换
 */

/**
 * 转换为 message end event
 */
function change_to_type_end_event(id) {
    let type = id.split('_')[2]
    console.log(id)
    active_change_type(() => {
        $(`.entry.bpmn-icon-end-event-${type}[data-id='replace-with-${type}-end']`).click()
    })
}
/**
 * 转换为 message start event 元素
 */

function change_to_type_start_event(id) {
    let type = id.replace(/_/g, '-').slice(12)
    console.log(`.entry.bpmn-icon-start-event-${type}[data-id='replace-with-${type}-start']`, "type ===========")
    active_change_type(() => {
        $(`.entry.bpmn-icon-start-event-${type}[data-id='replace-with-${type}-start']`).click()
    })
}
/**
 * 转换为 task 元素
 */

function change_to_type_task(id) {
    const type = id.replace('task_event_', '').replace('_', '-')
    active_change_type(() => {
        $(`.entry.bpmn-icon-${type}`).click()
    })
}

/**
 * entry bpmn - icon - gateway - parallel
 */
function change_to_type_gateway(id) {
    const type = id.replace('gateway_event_', '').replace('_', '-')
    active_change_type(() => {
        $(`.entry.bpmn-icon-gateway-${type}`).click()
    })
}
export default {
    'hand_tool': {
        'event': active_hand_tool,
        'target': 'all',
        'message': 'hand tool move the pic !',
    },
    'space_tool': {
        'event': active_remove_space_tool,
        'target': 'all',
        'message': 'space tool create/move a space',
    },
    'lasso_tool': {
        'event': active_lasso_tool,
        'target': 'all',
        'message': 'lasso tool select target ',
    },
    'text_annotation': {
        'event': active_text_annotation,
        'target': 'all',
        'message': 'append text annotation',
    },
    'connect_tool': {
        'event': active_connect_line,
        'target': 'all',
        'message': 'connect tool:connect two target',
    },
    'remove_tool': {
        'event': active_delete,
        'target': 'all',
        'message': 'remove singal target',
    },
    'last_step': {
        'event': '',
        'target': 'all',
        'message': 'return to last step',
    },
    'next_step': {
        'event': '',
        'target': 'all',
        'message': 'come to next step',
    },
    'refresh_page': {
        'event': '',
        'target': 'all',
        'message': 'refresh page:you wile lose all pic in this page',
    },
    'start_event': {
        'event': create_start_event,
        'target': 'all',
        'message': 'create a start event',
        'children': {
            'start_event_timer': {
                'event': change_to_type_start_event,
                'target': {},
                'message': 'change start event to a timer start event'
            },
            'start_event_singal': {
                'event': change_to_type_start_event,
                'target': {},
                'message': 'change start event to a signal start event'
            },
            'start_event_message': {
                'event': change_to_type_start_event,
                'target': {},
                'message': 'change start event to a message start event'
            },
            'start_event_conditional': {
                'event': change_to_conditional_start_event,
                'target': {},
                'message': 'change start event to a conditional start event'
            },
            'start_event_non_interrupting_signal': {

                'event': change_to_type_start_event,
                'target': {},
                'message': 'change start event to a signal-non start event'
            },
            'start_event_non_interrupting_condition': {
                'event': change_to_conditional_non_start_event,
                'target': {},
                'message': 'change start event to a conditional-non start event'
            },
            'start_event_non_interrupting_timer': {
                'event': change_to_type_start_event,
                'target': {},
                'message': 'change start event to a timer-non start event'
            },
            'start_event_non_interrupting_escalation': {
                'event': change_to_type_start_event,
                'target': {},
                'message': 'change start event to a escalati-non start event'
            },
            'start_event_non_interrupting_message': {
                'event': change_to_type_start_event,
                'target': {},
                'message': 'change start event to a message-non start event'
            },
        }
    },
    'Intermediate_event': {
        'event': create_Intermediate_event,
        'target': {},
        'message': 'create an intermediate/boundary event',
        'children': {
            'Intermediate_event_escalation': {
                'event': change_to_escalation_intermediate_throw_event,
                'target': {},
                'message': 'change target to escalation intermediate event'
            },
            'Intermediate_event_message': {
                'event': change_to_message_intermediate_throw_event,
                'target': {},
                'message': 'change target to message intermediate event'
            },
            'Intermediate_event_link_throw': {
                'event': change_to_link_intermediate_throw_event,
                'target': {},
                'message': 'change target to link throw intermediate event'
            },
            'Intermediate_event_signal_throw': {
                'event': change_to_signal_intermediate_throw_event,
                'target': {},
                'message': 'change target to signal throw intermediate event'
            },
            'Intermediate_event_link_catch': {
                'event': change_to_link_intermediate_catch_event,
                'target': {},
                'message': 'change target to link catch intermediate event'
            },
            'Intermediate_event_signal_catch': {
                'event': change_to_signal_intermediate_catch_event,
                'target': {},
                'message': 'change target to signal catch intermediate event'
            },
            'Intermediate_event_message_catch': {
                'event': change_to_message_intermediate_catch_event,
                'target': {},
                'message': 'change target to message catch intermediate event'
            },
            'Intermediate_event_conditional': {
                'event': change_to_condition_intermediate_catch_event,
                'target': {},
                'message': 'change target to conditional intermediate event'
            },
            'Intermediate_event_timer': {
                'event': change_to_timer_intermediate_catch_event,
                'target': {},
                'message': 'change target to timer intermediate event'
            },
            'Intermediate_event_compensation': {
                'event': change_to_compensation_intermediate_throw_event,
                'target': {},
                'message': 'change target to compensation intermediate event'
            }
        }
    },
    'gateway_event': {
        'event': create_Gateway,
        'target': {},
        'message': 'create gateway',
        'children': {
            'gateway_event_complex': {
                'event': change_to_type_gateway,
                'target': {},
                'message': 'change target to complex gateway'
            },
            'gateway_event_xor': {
                'event': change_to_type_gateway,
                'target': {},
                'message': 'change target to exclulive gateway'
            },
            'gateway_event_eventbased': {
                'event': change_to_type_gateway,
                'target': {},
                'message': 'change target to event based gateway'
            },
            'gateway_event_parallel': {
                'event': change_to_type_gateway,
                'target': {},
                'message': 'change target to parallel gateway'
            },
            'gateway_event_or': {
                'event': change_to_type_gateway,
                'target': {},
                'message': 'change target to inclulive gateway'
            }
        }
    },
    'task_event': {
        'event': create_task,
        'target': {},
        'message': 'create task',
        'children': {
            'task_event_user': {
                'event': change_to_type_task,
                'target': {},
                'message': 'change target to user task'
            },
            'task_event_service': {
                'event': change_to_type_task,
                'target': {},
                'message': 'change target to service task'
            },
            'task_event_manual': {
                'event': change_to_type_task,
                'target': {},
                'message': 'change target to munual task'
            },
            'task_event_receive': {
                'event': change_to_type_task,
                'target': {},
                'message': 'change target to recive task'
            },
            'task_event_business_rule': {
                'event': change_to_type_task,
                'target': {},
                'message': 'change target to busibess rule task'
            },
            'task_event_send': {
                'event': change_to_type_task,
                'target': {},
                'message': 'change target to send task'
            },
            'task_event_script': {
                'event': change_to_type_task,
                'target': {},
                'message': 'change target to script task'
            },
            'task_event_call_activity': {
                'event': change_to_type_task,
                'target': {},
                'message': 'change target to activity task'
            }
        }
    },
    'data_object': {
        'event': create_Data_Object_Reference,
        'message': 'create data object reference',
        'target': {}
    },
    'data_store': {
        'event': create_Data_store_Reference,
        'message': 'create data store reference',
        'target': {}
    },
    'sub_process': {
        'event': create_SubProcess,
        'target': {},
        'message': 'create expanded Sub process',
        'children': {
            'sub_process_transaction': {
                'event': change_to_transaction_subprocess,
                'target': {},
                'message': 'change target to transaction Sub process',
            },
            'sub_process_collapsed': {
                'event': change_to_collapsed_subprocess,
                'target': {},
                'message': 'change target to collapsed Sub process',
            },
            'sub_process_event': {
                'event': change_to_event_expanded_subprocess,
                'target': {},
                'message': 'change target to event Sub process,start event can use non-pattern in this mode',
            },
        }
    },
    'participant': {
        'event': create_Participant,
        'target': {},
        'message': 'create poll/participant',
        'children': {
            'participant_collapsed': {
                'event': '',
                'target': {},
                'message': 'change target to collapsed participant',
            },
            'participant_devid_two_line': {
                'event': active_lane_divide_two,
                'target': {},
                'message': 'add a line in this  participant',
            },
            'participant_devid_three_line': {
                'event': active_lane_divide_three,
                'target': {},
                'message': 'add two lines in this  participant',
            },
            'participant_devid_line_below': {
                'event': active_lane_insert_below,
                'target': {},
                'message': 'add a line below this  participant',
            },
            'participant_devid_line_above': {
                'event': active_lane_insert_above,
                'target': {},
                'message': 'add a line above this  participant',
            },
        }
    },
    'end_event': {
        'event': create_end_event,
        'target': {},
        'message': 'create end event',
        'children': {
            'end_event_message': {
                'event': change_to_type_end_event,
                'target': {},
                'message': 'change to message end event'
            },
            'end_event_signal': {
                'event': change_to_type_end_event,
                'target': {},
                'message': 'change to signal end event'
            },
            'end_event_error': {
                'event': change_to_type_end_event,
                'target': {},
                'message': 'change to error end event'
            },
            'end_event_compensation': {
                'event': change_to_type_end_event,
                'target': {},
                'message': 'change to compensation end event'
            },
            'end_event_escalation': {
                'event': change_to_type_end_event,
                'target': {},
                'message': 'change to escalation end event'
            },
            'end_event_terminate': {
                'event': change_to_type_end_event,
                'target': {},
                'message': 'change to terminate end event'
            },
        }
    },
    'others_event': {
        'event': '',
        'target': {},
        'message': 'other properties',
        'children': {
            'others_event_sequential': {
                'event': active_sequential_marker,
                'target': {},
                'message': 'sequential multi instance'
            },
            'others_event_parallel': {
                'event': active_parallel_marker,
                'target': {},
                'message': 'parallel multi instance'
            },
            'others_event_loop': {
                'event': active_loop_marker,
                'target': {},
                'message': 'loop'
            },
            'others_event_ad_loc': {
                'event': '',
                'target': {},
                'message': 'Ad-hoc'
            },
        }
    },


}