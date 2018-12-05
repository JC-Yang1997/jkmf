import {
  handleActions
} from 'redux-actions'
import {
  REQUEST_TASKDETAIL,
  JOIN_ACTIVITY,
  GOODS_DETAIL
} from '../types/taskDetail'

const defaultState = {
  task: {},
  joinActivityData: {},
  goodsDetail: ''
}
export default handleActions({
  [REQUEST_TASKDETAIL](state, action) {
    return {
      ...state,
      task: action.payload
    }
  },
  [JOIN_ACTIVITY](state, action) {
    return {
      ...state,
      joinActivityData: action.payload
    }
  },
  [GOODS_DETAIL](state, action) {
    return {
      ...state,
      goodsDetail: action.payload
    }
  }
}, defaultState)
