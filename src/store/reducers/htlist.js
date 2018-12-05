import { handleActions } from 'redux-actions'
import {REQUEST_HTLISTDATA} from '../types/htlist'

const defaultState = {
  content: []
}

export default handleActions({
  [REQUEST_HTLISTDATA](state, action) {
    return {
      ...state,
      content: action.payload.content
    }
  }
}, defaultState)
