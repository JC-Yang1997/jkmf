import { createAction } from 'redux-actions'
import { REQUEST_HTLISTDATA } from '../types/htlist'
import { requestData } from '../../utils/utils'
import wepy from 'wepy'
const requestUrl = wepy.$appConfig.requestUrl

export const getListData = createAction(REQUEST_HTLISTDATA, (params) => {
  let query = {
    url: `${requestUrl}/api/applet/home/queryExemptionSquareIndexActivity`,
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
