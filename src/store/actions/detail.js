import {createAction} from 'redux-actions'
import {REQUEST_DETAILDATA, REQUEST_PAYMENT, REQUEST_WXPAYMENT} from '../types/detail'
import { requestData } from '../../utils/utils'
import wepy from 'wepy'
import {getStore} from 'wepy-redux'
const requestUrl = wepy.$appConfig.requestUrl
const store = getStore()
const shopInfo = store.getState().home.shopInfo

export const getDetailData = createAction(REQUEST_DETAILDATA, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/activity/queryActivity`,
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

export const payment = createAction(REQUEST_PAYMENT, (params, t, isNew) => {
  let query = {
    url: `${requestUrl}/api/applet/userOrder/creatOrder`,
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    data: params
  }
  return new Promise((resolve, reject) => {
    requestData(query, (res) => {
      wepy.showLoading({
        title: '正在支付中…………'
      })
      let _aid = res.data.activityId
      if (res.code === 0) {
        wepy.showToast({
          title: '支付成功',
          icon: 'success',
          success: (res) => {
            if (t) {
              wepy.navigateTo({
                url: `/pages/newComer/index?activityId=${_aid}`
              })
            } else {
              if (isNew) {
                wepy.navigateTo({
                  url: `/pages/newComer/index?activityId=${_aid}`
                })
              } else {
                wepy.navigateTo({
                  url: `/pages/task/taskDetail?activityId=${_aid}`
                })
              }
            }
          }
        })
      } else {
        wepy.hideLoading()
        wepy.showToast({
          icon: 'none',
          title: '支付异常:' + res.message,
          duration: 3000
        })
      }
      resolve(res.data)
    }, (err) => {
      reject(err)
    })
  })
})

export const wxpayment = createAction(REQUEST_WXPAYMENT, (params, t, isNew) => {
  let query = {
    url: `${requestUrl}/api/applet/userOrder/creatOrder`,
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    data: params
  }
  return new Promise((resolve, reject) => {
    requestData(query, (res) => {
      let _aid = res.data.activityId
      let _orderId = res.data.orderId
      console.log(res)
      if (res.code === 0) {
        wepy.requestPayment({
          appId: 'wxa263e9fa782c059b',
          nonceStr: res.data.nonceStr,
          timeStamp: res.data.timeStamp,
          package: res.data.package,
          paySign: res.data.paySign,
          signType: res.data.signType,
          success: res => {
            wepy.showLoading({
              title: '正在为您跳转…………'
            })
            var a = 0
            var payLx = setInterval(() => {
              wepy.request({
                url: `${requestUrl}/api/applet/userOrder/queryOrderStatus`,
                method: 'GET',
                header: {
                  'Content-Type': 'application/json'
                },
                data: {
                  orderId: _orderId,
                  uid: shopInfo.userId,
                  userId: shopInfo.userId
                },
                success: (res) => {
                  if (res.data.data.status === 1) {
                    clearInterval(payLx)
                    wepy.hideLoading()
                    wepy.showToast({
                      title: '支付成功',
                      duration: 2000
                    })
                    if (t) {
                      wepy.navigateTo({
                        url: `/pages/newComer/index?activityId=${_aid}`
                      })
                    } else {
                      if (isNew) {
                        wepy.navigateTo({
                          url: `/pages/newComer/index?activityId=${_aid}`
                        })
                      } else {
                        wepy.navigateTo({
                          url: `/pages/task/taskDetail?activityId=${_aid}`
                        })
                      }
                    }
                  } else {
                    a++
                    if (a >= 8) {
                      wepy.hideLoading()
                      wepy.showToast({
                        icon: 'none',
                        title: '支付超時，已退款',
                        duration: 2000
                      })
                      clearInterval(payLx)
                    }
                  }
                }
              })
            }, 3000)
          },
          fail: err => {
            console.log(err)
            wepy.hideLoading()
            wepy.showToast({
              icon: 'none',
              title: '支付异常'
            })
          }
        })
      } else {
        wepy.showToast({
          icon: 'none',
          title: '支付异常:' + res.message,
          duration: 3000
        })
      }
      resolve(res.data)
    }, (err) => {
      reject(err)
    })
  })
})
