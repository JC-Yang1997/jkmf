import wepy from 'wepy'
import {createAction} from 'redux-actions'
import {REQUEST_HOMEDATA,
        REQUEST_LOGIN,
        REQUEST_WHEELDATA,
        REQUEST_ZHONGJIANG,
        REQUEST_WHEELORDER,
        REQUEST_WHEELLIST} from '../types/home'
import { requestData } from '../../utils/utils'
import {getStore} from 'wepy-redux'
const requestUrl = wepy.$appConfig.requestUrl
const store = getStore()
const shopInfo = store.getState().home.shopInfo
var value = wepy.getStorageSync('token')
if (value) {
  shopInfo.userId = value.userId
}

// 获取首页信息
export const getHomeData = createAction(REQUEST_HOMEDATA, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/home/queryHomePage`,
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

// 登录获取用户信息
export const getHomeParams = createAction(REQUEST_LOGIN, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/login`,
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

// 获取大转盘展示数据
export const getWheelData = createAction(REQUEST_WHEELDATA, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/userActivity/queryLuckyWheel`,
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

// 获取中奖金额
export const getZhongjiang = createAction(REQUEST_ZHONGJIANG, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/userActivity/tryYourLuck`,
    method: 'POST',
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

// 获取回填订单红包金额
export const getWheelOrder = createAction(REQUEST_WHEELORDER, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/userActivity/backfillOrderPopup`,
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    data: params
  }
  return new Promise((resolve, reject) => {
    requestData(query, (res) => {
      if (res.code === 0) {
        resolve(res.data)
      } else {
        wepy.showToast({
          icon: 'none',
          title: res.message
        })
      }
    }, (err) => {
      reject(err)
    })
  })
})

// 获取邀请好友列表名单
export const getWheelList = createAction(REQUEST_WHEELLIST, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/userActivity/queryUserPubJoin`,
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
