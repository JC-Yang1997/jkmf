import { handleActions } from 'redux-actions'
import {REQUEST_HTORDERDATA} from '../types/htOrder'

const defaultState = {
  content: []
}

export default handleActions({
  [REQUEST_HTORDERDATA](state, action) {
    return {
      ...state,
      content: action.payload.content
    }
  }
}, defaultState)
