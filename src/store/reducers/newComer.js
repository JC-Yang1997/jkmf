import { handleActions } from 'redux-actions'
import { REQUEST_BACK_FILL_ORDER, REQUEST_BACK_FILL_ORDER_ONLY } from '../types/newComer'

const defaultState = {
  backFill: {}
}

export default handleActions({
  [REQUEST_BACK_FILL_ORDER](state, actions) {
    return {
      ...state,
      backFill: actions.payload
    }
  },
  [REQUEST_BACK_FILL_ORDER_ONLY](state, actions) {
    return {
      ...state,
      backFill: actions.payload
    }
  }
}, defaultState)
