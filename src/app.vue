<style lang='scss'>
@import '../src/scss/themes.scss';
@import '../src/scss/yinju.scss';
</style>

<script>
import wepy from 'wepy'
import 'wepy-async-function'
import { setStore } from 'wepy-redux'
import configStore from './store'
const store = configStore()
setStore(store)
const shopInfo = store.getState().home.shopInfo
export default class extends wepy.app {
  config = {
    pages: [
      'pages/index/login',
      'pages/index/index',
      'pages/task/task',
      'pages/user/user',
      'pages/newComer/getGift',
      'pages/newComer/index',
      'pages/newComer/authentication',
      'pages/user/userJoin',
      'pages/mall/slip',
      'pages/mall/index',
      'pages/mall/free',
      'pages/wallet/cashDetal',
      'pages/wallet/revenueRecord',
      'pages/wallet/index',
      'pages/user/voucher',
      'pages/task/taskDetail',
      'pages/task/joinTask',
      'pages/task/winUser',
      'pages/task/drawTask',
      'pages/task/goodDetail',
      'pages/user/winLog',
      'pages/htlist/htlist',
      'pages/htorder/htorder',
      'pages/detail/detail',
      'pages/mdlist/mdlist',
      'pages/user/test',
      'pages/index/wheelList'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#ff6a3c',
      backgroundColor: '#ffffff',
      borderStyle: 'black',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'images/tabbar/sy.png',
          selectedIconPath: 'images/tabbar/syr.png'
        },
        {
          pagePath: 'pages/task/task',
          text: '免单商品',
          iconPath: 'images/tabbar/md.png',
          selectedIconPath: 'images/tabbar/mdr.png'
        },
        {
          pagePath: 'pages/user/user',
          text: '我的',
          iconPath: 'images/tabbar/wd.png',
          selectedIconPath: 'images/tabbar/wdr.png'
        }
      ]
    }
  };
  data = {
    _token: ''
  }
  globalData = {
    userInfo: null
  };

  constructor(data) {
    super()
    this.intercept('request', {
      config(p) {
        if (typeof (p.data) === 'string') {
          p.data = JSON.parse(p.data)
          p.data.uid = shopInfo.userId
          p.data = JSON.stringify(p.data)
        } else {
          p.data.uid = shopInfo.userId
        }
        p.header.token = shopInfo.token
        return p
      },
      success(p) {
        // console.log('request success: ', p)
        return p
      },
      fail(p) {
        // console.log('request fail: ', p)
        return p
      },
      complete(p) {
        // console.log('request complete: ', p)
      }
    })
  }
  onLaunch() {
    this._token = wepy.getStorageSync('token')
  }
  sleep(s) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('promise resolved')
      }, s * 1000)
    })
  }
  getUserInfo(cb) {
    const that = this
    if (this.globalData.userInfo) {
      return this.globalData.userInfo
    }
    wepy.getUserInfo({
      success(res) {
        that.globalData.userInfo = res.userInfo
        cb && cb(res.userInfo)
      }
    })
  }
}
</script>
