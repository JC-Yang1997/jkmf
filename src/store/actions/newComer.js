import { createAction } from 'redux-actions'
import { REQUEST_BACK_FILL_ORDER, REQUEST_BACK_FILL_ORDER_ONLY} from '../types/newComer'
import { requestData } from '../../utils/utils'
import wepy from 'wepy'
const requestUrl = wepy.$appConfig.requestUrl

export const backFillOrder = createAction(REQUEST_BACK_FILL_ORDER, params => {
  let query = {
    url: `${requestUrl}/api/applet/userActivity/backfillOrder`,
    method: 'POST',
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

export const backFillOrderOnly = createAction(REQUEST_BACK_FILL_ORDER_ONLY, params => {
  let query = {
    url: `${requestUrl}/api/applet/userActivity/backfillOrderOnly`,
    method: 'POST',
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
