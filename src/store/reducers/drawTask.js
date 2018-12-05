import { handleActions } from 'redux-actions'
import { GETDRAWTASK_DATA, SETDRAWTASK_DATA, SETORDER_DATA } from '../types/drawTask'

const defaultState = {
  data: {},
  status: {},
  order: {}
}
export default handleActions({
  [GETDRAWTASK_DATA](state, action) { // 获取当前状态
    // console.log(state)
    return {
      ...state,
      data: action.payload
    }
  },
  [SETDRAWTASK_DATA](state, action) { // 提交审核
    return {
      ...state,
      status: action.payload
    }
  },
  [SETORDER_DATA](state, action) { // 提交订单号
    return {
      ...state,
      order: action.payload.data
    }
  }
}, defaultState)
