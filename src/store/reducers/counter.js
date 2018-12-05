import { handleActions } from 'redux-actions'
import { REQUEST_LIST } from '../types/counter'

const defaultState = {
  list: []
}
export default handleActions({
  [REQUEST_LIST](state, action) { // 测试
    // console.log(state)
    return {
      ...state,
      list: action.payload
    }
  }
}, defaultState)
