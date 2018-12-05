
import { createAction } from 'redux-actions'
import { REQUEST_HTORDERDATA } from '../types/htOrder'
import { requestData } from '../../utils/utils'
import wepy from 'wepy'
const requestUrl = wepy.$appConfig.requestUrl

export const getOrderData = createAction(REQUEST_HTORDERDATA, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/mypage/queryMyOrder`,
    method: 'GET',
    header: {
      'Content-Type': 'application/json'
    },
    data: params
  }
  return new Promise((resolve, reject) => {
    requestData(query, (res) => {
      resolve(res.data)
    }, (err) => {
      reject(err)
    })
  })
})
