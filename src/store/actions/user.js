import { createAction } from 'redux-actions'
import { REQUEST_GETUSER, REQUEST_CASH } from '../types/user'
import { requestData } from '../../utils/utils'
import wepy from 'wepy'
const requestUrl = wepy.$appConfig.requestUrl

export const getUser = createAction(REQUEST_GETUSER, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/mypage/queryMypage`,
    method: 'GET',
    data: {
      userId: params.userId,
      shopId: params.shopId
    }
  }
  return new Promise((resolve, reject) => {
    requestData(query, (res) => {
      resolve(res.data)
    }, (err) => {
      reject(err)
    })
  })
})

// 提现
export const cash = createAction(REQUEST_CASH, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/userMoney/createMktTransfersTradeOrder`,
    method: 'POST',
    data: params
  }
  return new Promise((resolve, reject) => {
    requestData(query, (res) => {
      resolve(res)
    }, (err) => {
      reject(err)
    })
  })
})
