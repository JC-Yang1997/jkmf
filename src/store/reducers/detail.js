import { handleActions } from 'redux-actions'
import { REQUEST_DETAILDATA, REQUEST_PAYMENT, REQUEST_WXPAYMENT} from '../types/detail'

const defaultState = {
  content: {}
}

export default handleActions({
  [REQUEST_DETAILDATA](state, action) {
    return {
      ...state,
      content: action.payload
    }
  },
  [REQUEST_PAYMENT](state, action) {
    return {
      ...state
    }
  },
  [REQUEST_WXPAYMENT](state, action) {
    return {
      ...state
    }
  }
}, defaultState)
