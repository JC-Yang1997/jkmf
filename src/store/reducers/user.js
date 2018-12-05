import { handleActions } from 'redux-actions'
import { REQUEST_GETUSER, REQUEST_CASH } from '../types/user'

const defaultState = {
  user: {},
  cash: {}
}
export default handleActions({
  [REQUEST_GETUSER](state, action) {
    let _data = action.payload
    return {
      ...state,
      user: Object.assign({}, _data)
    }
  },
  // 提现
  [REQUEST_CASH](state, action) {
    return {
      ...state
    }
  }
}, defaultState)
