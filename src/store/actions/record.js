import {createAction} from 'redux-actions'
import wepy from 'wepy'
const requestUrl = wepy.$appConfig.requestUrl
import {
  REQUEST_CASH_RECORD,
  REQUEST_BALANCE,
  REQUEST_INCOME,
  ANWARD_JOIN,
  REQUEST_QUERY_WINNING,
  REQUEST_VOUCHER,
  REQUEST_AWARD_LOG,
  QUERY_MY_JOIN_TASK,
  REQUEST_PAY_RECORD
} from '../types/record'
import { requestData } from '../../utils/utils'
// import requestUrl from '../../common/yinju/js/request'

// 提现记录 1
export const cashRecord = createAction(REQUEST_CASH_RECORD, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/userMoney/queryPresentOrderLog`,
    method: 'GET',
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

// 查询余额
export const queryUserBalance = createAction(REQUEST_BALANCE, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/userMoney/queryUserBalance`,
    method: 'GET',
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

// 收入记录 1
export const income = createAction(REQUEST_INCOME, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/userMoney/queryIncomeLog`,
    method: 'GET',
    data: params
  }
  return new Promise((resolve, reject) => {
    requestData(query, (res) => {
      if (res.data) {
        res.data.params = params
        resolve(res.data)
      } else {
        wepy.hideLoading()
      }
    }, (err) => {
      reject(err)
    })
  })
})

// 用户活动参与人数 1
export const awardJoin = createAction(ANWARD_JOIN, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/award/queryAwardJoin`,
    method: 'GET',
    data: params
  }
  return new Promise((resolve, reject) => {
    requestData(query, (res) => {
      if (res.data) {
        res.data.params = params
        resolve(res.data)
      } else {
        wepy.hideLoading()
      }
    }, (err) => {
      reject(err)
    })
  })
})

// 获奖名单 1
export const winlingList = createAction(REQUEST_QUERY_WINNING, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/award/queryWinninglist`,
    method: 'GET',
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

// 我的卡券 1
export const vocherList = createAction(REQUEST_VOUCHER, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/mypage/queryMyShopCoupon`,
    method: 'GET',
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
// 我的中奖纪录 1
export const awardList = createAction(REQUEST_AWARD_LOG, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/mypage/queryMyAwardLog`,
    method: 'GET',
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

// 我参与的活动 1
export const myJoin = createAction(QUERY_MY_JOIN_TASK, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/mypage/queryMyJoinTask`,
    method: 'GET',
    data: params
  }
  return new Promise((resolve, reject) => {
    requestData(query, (res) => {
      if (res.data) {
        res.data.params = params
        resolve(res.data)
      } else {
        wepy.hideLoading()
      }
    }, (err) => {
      reject(err)
    })
  })
})

// 交易记录1
export const payRecord = createAction(REQUEST_PAY_RECORD, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/userMoney/queryTradeDetail`,
    method: 'GET',
    data: params
  }
  return new Promise((resolve, reject) => {
    requestData(query, (res) => {
      if (res.data) {
        res.data.params = params
        resolve(res.data)
      } else {
        wepy.hideLoading()
      }
    }, (err) => {
      reject(err)
    })
  })
})
