import {
  createAction
} from 'redux-actions'
import {
  GETDRAWTASK_DATA,
  SETDRAWTASK_DATA,
  SETORDER_DATA
} from '../types/drawTask'
import {
  requestData
} from '../../utils/utils'

import wepy from 'wepy'
const requestUrl = wepy.$appConfig.requestUrl

export const getDrawData = createAction(GETDRAWTASK_DATA, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/userTask/queryAwardTask`,
    data: {
      userId: params.userId,
      activityId: params.activityId
    }
  }
  return new Promise((resolve, reject) => {
    requestData(query, (res) => {
      res.data.message = res.message
      res.data.code = res.code
      // res.data.cutoffTime = parseInt(res.data.cutoffTime / 1000)
      resolve(res.data)
    }, (err) => {
      reject(err)
    })
  })
})

export const setDrawData = createAction(SETDRAWTASK_DATA, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/userTask/commitAwardTaskPics`,
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

export const setOrder = createAction(SETORDER_DATA, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/userTask/commitAwardTaskOrder`,
    method: 'POST',
    data: {
      uid: params.uid,
      aid: params.aid,
      shop_id: params.shop_id,
      order_id: params.order_id
    }
  }
  return new Promise((resolve, reject) => {
    requestData(query, (res) => {
      resolve(res)
    }, (err) => {
      reject(err)
    })
  })
})
