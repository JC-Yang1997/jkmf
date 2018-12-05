import { handleActions } from 'redux-actions'
import { REQUEST_HOMEDATA,
          REQUEST_LOGIN,
         REQUEST_WHEELDATA,
         REQUEST_ZHONGJIANG,
         REQUEST_WHEELORDER,
         REQUEST_WHEELLIST
         } from '../types/home'

// bug上报
// var bugOut = require('../../utils/bugOut.min.js')
// bugOut.init(true, '6f867594c1786eb68a15a32861794c3d', '1.0')
// bugOut.metaData({
//   name: '崩溃分析',
//   address: 'crash.testin.cn',
//   time: new Date()
// })

const defaultState = {
  shopInfo: {
    shopId: '8',
    userId: '',
    merchantId: '8',
    scene: '3',
    uid: '',
    token: '',
    // 分享过来的数据
    pub_uid: '',
    activityId: '',
    // big上报
    // bugOut: bugOut,
    // 发起者的uid
    newManStartId: '',
    // 从那个页面分享过来1 新人 2 活动 3 新人任务审核 4 计划内的活动审核
    from: -1
  },
  indexAll: {},
  zhongjiang: {},
  wheelData: {},
  wheel: {},
  wheelList: {},
  whlist: [],
  amount: '',
  merchantActivity: 0,
  shopData: {},
  content: [],
  activities: [],
  swiperParams: {
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 1000
  },
  showEr: true
}

// 登录获取用户信息
export default handleActions({
  [REQUEST_LOGIN](state, action) {
    return {
      ...state,
      shopInfo: Object.assign(state.shopInfo, {
        userId: action.payload.userId
      })
    }
  },
  [REQUEST_HOMEDATA](state, action) {
    return {
      ...state,
      indexAll: action.payload,
      wheel: action.payload.luckyWheel,
      isDialogOrder: action.payload.isDialogOrder,
      shopData: action.payload.shopInfo,
      content: action.payload.exemptionSquare.content,
      activities: action.payload.merchantActivity.activities,
      merchantActivity: action.payload.merchantActivity
    }
  },
  [REQUEST_WHEELDATA](state, action) {
    return {
      ...state,
      wheelData: action.payload
    }
  },
  [REQUEST_ZHONGJIANG](state, action) {
    return {
      ...state,
      zhongjiang: action.payload
    }
  },
  [REQUEST_WHEELORDER](state, action) {
    return {
      ...state,
      amount: action.payload
    }
  },
  [REQUEST_WHEELLIST](state, action) {
    return {
      ...state,
      wheelList: action.payload,
      whlist: action.payload.subUserInfos
    }
  }
}, defaultState)
