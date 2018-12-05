import { REQUEST_TASKDETAIL, JOIN_ACTIVITY, GOODS_DETAIL } from '../types/taskDetail'
import { createAction } from 'redux-actions'
import { requestData } from '../../utils/utils'
import wepy from 'wepy'
const requestUrl = wepy.$appConfig.requestUrl
export const getTaskDetail = createAction(REQUEST_TASKDETAIL, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/userActivity/queryActivity`,
    method: 'GET',
    data: {
      activityId: params.activityId,
      userId: params.userId,
      pub_uid: params.pub_uid || ''
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

export const joinActivity = createAction(JOIN_ACTIVITY, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/userActivity/joinActivity`,
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

// 商品详情
export const getGoodDetail = createAction(GOODS_DETAIL, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/award/queryGoodsDetail`,
    method: 'GET',
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
