import { handleActions } from 'redux-actions'
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
const RESET = 'RESET'

const defaultState2 = {
  cash_record: [],
  balance: 0,
  limit: 10,
  cash_record_offset: -10,
  cash_record_no_more: false,
  income_recode: [],
  income_offset: -10,
  income_no_more: false,
  income_sumMoney: 0,
  payRecord: {
    list: [],
    offset: -10,
    limit: 10,
    isPullDown: true
  },
  anward_join: [],
  // 获奖名单
  wining_list: [],
  // 我的卡券
  voucher_list: [],
  // 我的中奖纪录
  award_list: [],
  award_no_more: false,
  award_offset: -10,
  // 我参与的
  myJoin: {
    list: [],
    no_more: false,
    limit: 10,
    offset: -10
  }
}

const defaultState = {
  cash_record: [],
  balance: 0,
  limit: 10,
  cash_record_offset: -10,
  cash_record_no_more: false,
  income_recode: [],
  income_offset: -10,
  income_no_more: false,
  income_sumMoney: 0,
  payRecord: {
    list: [],
    offset: -10,
    limit: 10,
    isPullDown: true
  },
  anward_join: [],
  // 获奖名单
  wining_list: [],
  // 我的卡券
  voucher_list: [],
  // 我的中奖纪录
  award_list: [],
  award_no_more: false,
  award_offset: -10,
  // 我参与的
  myJoin: {
    list: [],
    no_more: false,
    limit: 10,
    offset: -10
  }
}

export default handleActions({
  [REQUEST_CASH_RECORD](state, action) {
    if (!state.cash_record) {
      state.cash_record = []
    }
    return {
      ...state,
      cash_record: state.cash_record.concat(action.payload.content),
      cash_record_offset: action.payload.content.length ? action.payload.offset : state.cash_record_offset,
      cash_record_no_more: !action.payload.content.length
    }
  },
  [REQUEST_BALANCE](state, action) {
    let balance = action.payload.balance.split('.')
    return {
      ...state,
      balance
    }
  },
  [REQUEST_INCOME](state, action) {
    return {
      ...state,
      income_recode: state.income_recode.concat(action.payload.content),
      income_offset: action.payload.content.length ? action.payload.offset : state.income_offset,
      income_no_more: action.payload.content.length < action.payload.params.limit,
      income_sumMoney: action.payload.sumMoney
    }
  },
  [ANWARD_JOIN](state, action) {
    return {
      ...state,
      anward_join: action.payload.activityJoinPerson
    }
  },
  // 获奖名单
  [REQUEST_QUERY_WINNING](state, action) {
    return {
      ...state,
      wining_list: action.payload.awardList
    }
  },
  // 获奖名单
  [REQUEST_VOUCHER](state, action) {
    return {
      ...state,
      voucher_list: action.payload
    }
  },
  // 中奖纪录
  [REQUEST_AWARD_LOG](state, action) {
    return {
      ...state,
      award_list: state.award_list.concat(action.payload.content),
      award_offset: action.payload.offset,
      award_no_more: !action.payload.content.length
    }
  },
  // 我参与的活动
  [QUERY_MY_JOIN_TASK](state, action) {
    let myJoin = state.myJoin
    myJoin.list = myJoin.list.concat(action.payload.content)
    myJoin.offset = action.payload.offset
    myJoin.no_more = !action.payload.content.length
    return {
      ...state,
      myJoin
    }
  },
  // 交易记录
  [REQUEST_PAY_RECORD](state, action) {
    let payRecord = state.payRecord
    payRecord.list = payRecord.list.concat(action.payload.content)
    payRecord.offset = action.payload.offset
    payRecord.isPullDown = action.payload.isPullDown
    return {
      ...state,
      payRecord
    }
  },
  // 重置数据，让分页的内容每次进入可以刷新页面
  [RESET](state) {
    let defaultState3 = {...defaultState2}
    defaultState3.balance = state.balance
    defaultState3.myJoin = {
      list: [],
      no_more: false,
      limit: 10,
      offset: -10
    }
    defaultState3.payRecord = {
      list: [],
      offset: -10,
      limit: 10,
      isPullDown: true
    }
    return {
      ...defaultState3
    }
  }
}, defaultState)
