import { handleActions } from 'redux-actions'
import { REQUEST_LOGIN, REQUEST_GETUSERONFO } from '../types/counter'

const defaultState = {
  user: {},
  userInfo: {}
}
export default handleActions({
  [REQUEST_LOGIN](state, action) {
    return {
      ...state,
      user: action.payload
    }
  },
  [REQUEST_GETUSERONFO](state, action) {
    return {
      ...state,
      userInfo: action.payload
    }
  }
}, defaultState)
