import { handleActions } from 'redux-actions'
import { REQUEST_TASKDATA } from '../types/task'

const defaultState = {
  taskData: {},
  newManList: [],
  orderBackList: []
}

export default handleActions({
  [REQUEST_TASKDATA](state, action) {
    return {
      ...state,
      taskData: action.payload.data,
      newManList: action.payload.data.newManList,
      orderBackList: action.payload.data.orderBackList
    }
  }
}, defaultState)
