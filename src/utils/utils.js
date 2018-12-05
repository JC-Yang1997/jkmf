import wepy from 'wepy'
import { getStore } from 'wepy-redux'
const store = getStore()
const state = store.getState()
const shopInfo = state.home.shopInfo

export function requestData(query, succ, errs) {
  // wepy.showLoading({
  //   title: '正在加载'
  // })
  // debugger
  wepy.request({
    url: query.url,
    data: query.data || {},
    method: query.method || 'GET',
    header: {
      'Content-Type': 'application/json'
    },
    success: res => {
      succ(res.data)
    },
    fail: (err) => {
      errs(err)
    },
    complete: () => {
      // wepy.hideLoading()
    }
  })
}

export function timer(stamp) { // 距离结束时长
  let differTime = parseInt((stamp - new Date().getTime()) / 1000)
  // console.log('differTime', (stamp - new Date().getTime()) / 1000)
  // let differTime = _time - nowData
  // let day = parseInt(differTime / (60 * 60 * 24)) // 天
  let res = parseInt(differTime % (60 * 60 * 24))
  let hour = parseInt(res / (60 * 60)) // 时
  let resMinute = parseInt(res % (60 * 60))
  let minute = parseInt(resMinute / 60) // 分
  let second = parseInt(differTime % 60) // 秒
  return [hour, minute, second]
}

export function dateFtt(date) { // 时间戳转化为yy-mm-dd
  // console.log(date)
  var _date = new Date(date)
  var y = _date.getFullYear()
  var m = _date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  var d = _date.getDate()
  d = d < 10 ? ('0' + d) : d
  var h = _date.getHours()
  h = h < 10 ? ('0' + h) : h
  var minute = _date.getMinutes()
  var second = _date.getSeconds()
  minute = minute < 10 ? ('0' + minute) : minute
  second = second < 10 ? ('0' + second) : second
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
}

export function share(data) {
  return {
    title: data.title,
    imageUrl: data.picUrl,
    path: `/pages/index/login?uid=${shopInfo.userId}&activityId=${data.activityId}&shopId=${shopInfo.shopId}&merchantId=${shopInfo.merchantId}&from=${data.from}&newManStartId=${data.newManStartId}`,
    success: function (res) {
      console.log('转发成功信息', res)
    },
    fail: function (res) {
      console.log('转发失败信息', res)
    }
  }
}
