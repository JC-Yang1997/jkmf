import { createAction } from 'redux-actions'
import { REQUEST_LIST } from '../types/counter'
// import {baseUrl} from '../../utils/base'
import { requestData } from '../../utils/utils'

export const asyncInc = createAction(REQUEST_LIST, (params) => {
  // return new Promise((resolve, reject) => {
  //   let query = {
  //     url: 'https://cnodejs.org/api/v1/topics',
  //     method: 'GET',
  //     data: params
  //   }
  //   requestData(query, function (data) {
  //     console.log(data)
  //     resolve(data.data)
  //   }, function (error) {
  //     reject(error)
  //   })
  // })
  let query = {
    url: 'https://cnodejs.org/api/v1/topics',
    method: 'GET',
    data: {
      code: params
    }
  }
  requestData(query).then(res => {
    // console.log(res)
  })
})
