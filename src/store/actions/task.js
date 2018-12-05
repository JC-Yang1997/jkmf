import {createAction} from 'redux-actions'
import { REQUEST_TASKDATA } from '../types/task'
import { requestData } from '../../utils/utils'
import wepy from 'wepy'
const requestUrl = wepy.$appConfig.requestUrl

export const getTaskData = createAction(REQUEST_TASKDATA, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/activity/orderback`,
    method: 'GET',
    data: params
  }
  return new Promise((resolve, reject) => {
    requestData(query, res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
})
