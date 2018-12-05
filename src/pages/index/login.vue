<style lang="scss">
.auth {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .shopImg {
    width: 131rpx;
    height: 160rpx;
    margin-top: 215rpx;
    margin-bottom: 116rpx;
    image {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .authRequest {
    color: #535353;
    font-size: 32rpx;
    font-weight: 800;
    line-height: 32rpx;
    margin-bottom: 18rpx;
  }
  .authRequestDetail {
    color: #ccc;
    font-size: 28rpx;
    line-height: 28rpx;
    margin-bottom: 78rpx;
  }
  .authBtn {
    width: 600rpx;
    height: 96rpx;
    border-radius: 48rpx;
    background: linear-gradient(90deg,#F3466B, #EE3A3A);
    color: #ffffff;
    font-size: 32rpx;
    line-height: 96rpx;
  }
}
</style>
<template>
  <view class='auth' catchtouchmove='true' wx:if="{{gruntShow}}">
    <view class='shopImg'  bindtap="test"><image src='http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/logo_big.png'/></view>
    <text class='authRequest'>集客魔方申请获得以下权限</text>
    <text class='authRequestDetail'>获得你的公开信息（昵称，头像等）</text>
    <button class='authBtn' open-type="getUserInfo" @getuserinfo="onGotUserInfo">授权</button>
  </view>
</template>
<script>
import wepy from 'wepy'
import {getStore} from 'wepy-redux'
import {getHomeParams} from '@/store/actions'
const store = getStore()
const shopInfo = store.getState().home.shopInfo

export default class grunt extends wepy.page {
  data = {
    gruntShow: false,
    // 表示分享来自哪个页面
    from: '',
    activityId: '',
    // 来源，从什么场景下进入1 是从消息进入
    source: '',
    // 发起者的uid
    newManStartId: ''
  }
  props = {
    extro: Object
  }
  methods = {
    onGotUserInfo (userInfo) {
      let sendData = {
        iv: userInfo.detail.iv,
        userInfo: userInfo.detail.userInfo,
        encryptedData: userInfo.detail.encryptedData,
        pub_uid: shopInfo.pub_uid,
        aid: shopInfo.activityId
      }
      this.login(sendData)
    }
  }
  login(userInfo) {
    wepy.showLoading({
      title: '正在登陆'
    })
    wepy.login({
      success: res => {
        console.log('res.code', res.code)
        let sendData = {
          code: res.code,
          merchantId: shopInfo.merchantId,
          shopId: shopInfo.shopId,
          scene: shopInfo.scene
        }
        sendData = Object.assign(sendData, userInfo)
        store.dispatch(getHomeParams(sendData)).then(res => {
          wepy.hideLoading()
          if (res.payload.code === 0) {
            shopInfo.userId = res.payload.data.userId
            shopInfo.token = res.payload.data.token

            // 如果是老用户不是分享、扫码、消息进入
            shopInfo.merchantId = res.payload.data.merchantId
            shopInfo.shopId = res.payload.data.shopId
            shopInfo.scene = res.payload.data.scene

            // 有from说明是要进入特定的页面
            if (this.from) {
              // 1 是新人页面 2 是活动页
              this.from *= 1
              let url = ''
              if (this.from === 1) {
                // 从消息进入
                if (this.source === 1) {
                  url = `/pages/newComer/index?activityId=${this.activityId}`
                } else { // 从分享进入
                  if (this.newManStartId * 1 === shopInfo.userId * 1) {
                    url = `/pages/newComer/index?activityId=${this.activityId}`
                  } else {
                    url = `/pages/task/taskDetail?activityId=${this.activityId}`
                  }
                }
              } else if (this.from === 2) {
                // 从消息进入
                if (this.source === 1) {
                  url = `/pages/task/taskDetail?activityId=${this.activityId}`
                } else { // 从分享进入
                  if (this.newManStartId * 1 === shopInfo.userId * 1) {
                    url = `/pages/newComer/index?activityId=${this.activityId}`
                  } else {
                    url = `/pages/task/taskDetail?activityId=${this.activityId}`
                  }
                }
              } else if (this.form === 3) {
                url = `/pages/task/drawTask?activityId=${this.activityId}`
              } else {
                url = `/pages/newComer/getGift?activityId=${this.activityId}`
              }
              wepy.redirectTo({
                url
              })
            } else {
              wepy.switchTab({
                url: `/pages/index/index`
              })
            }
          } else {
            this.gruntShow = true
            this.$apply()
          }
        })
      }
    })
  }
  onLoad(option) {
    // 说明是扫码进入
    console.log('登录页面option', option)
    console.log('decodeURIComponent(option.scene)', decodeURIComponent(option.scene))
    if (option.scene) {
      let qrcode = decodeURIComponent(option.scene).split(',')
      shopInfo.merchantId = qrcode[0]
      shopInfo.shopId = qrcode[1]
      shopInfo.scene = qrcode[2]
    } else if (Object.keys(option).length !== 0) {
      this.activityId = option.activityId * 1
      shopInfo.activityId = option.activityId * 1
      shopInfo.pub_uid = option.uid * 1
      shopInfo.shopId = option.shopId * 1
      shopInfo.merchantId = option.merchantId * 1
      // shopInfo.scene = option.scene * 1 || 1
      shopInfo.from = this.from = option.from * 1
      shopInfo.scene = option.scene1 * 1 || 1
      this.from = option.from
      this.source = option.source * 1
      // 发起者的uid
      this.newManStartId = option.newManStartId
    } else {}
    this.login({})
  }
}
</script>
