import wepy from 'wepy'
import { REQUEST_LOGIN, REQUEST_GETUSERONFO } from '../types/login'
import { createAction } from 'redux-actions'
import { requestData } from '../../utils/utils'
const requestUrl = wepy.$appConfig.requestUrl
// store.dispatch(getLogin(res.code))
// 其中getLogin就是这里定义的getLogin。params就是res.code
export const getLogin = createAction(REQUEST_LOGIN, (params) => {
  let query = {
    url: `${requestUrl}/javaapi/applet/login`,
    method: 'GET',
    data: {
      code: params
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

export const getUserInfo = createAction(REQUEST_GETUSERONFO, () => { // 获取用户信息
  return new Promise((resolve, reject) => {
    wepy.getUserInfo({
      withCredentials: false,
      success: res => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {}
    })
  })
})
