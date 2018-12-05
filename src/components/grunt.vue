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
    width: 160rpx;
    height: 160rpx;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 81px rgba(255, 149, 71, 0.14);
    border-radius: 50%;
    margin-top: 207rpx;
    margin-bottom: 131rpx;
    image {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
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
    background: linear-gradient(
      90deg,
      rgba(255, 99, 71, 1),
      rgba(255, 140, 71, 1)
    );
    box-shadow: 0px 0px 27px rgba(255, 99, 71, 0.42);
    color: #ffffff;
    font-size: 32rpx;
    line-height: 96rpx;
  }
}
</style>
<template>
  <view class='auth' catchtouchmove='true'>
    <view class='shopImg'  bindtap="test"><image src='https://img-test.wxyundian.cn/73039316750585843.jpg'/></view>
    <text class='authRequest'>极客魔方申请获得以下权限:</text>
    <text class='authRequestDetail'>获得你的公开信息(昵称，头像等)</text>
    <button class='authBtn' open-type="getUserInfo" @getuserinfo="onGotUserInfo">授权</button>
  </view>
</template>
<script>
import wepy from 'wepy'
import {getStore} from 'wepy-redux'
import {getHomeParams} from '@/store/actions'

const store = getStore()

export default class grunt extends wepy.component {
  data = {
    code: '',
    ops: {}
  }
  props = {
    extro: Object
  }
  methods = {
    onGotUserInfo (e) {
      wepy.showLoading({
        title: '授权中...'
      })
      wepy.login({
        success: res => {
          if (this.extro) {
            wepy.navigateTo({
              url: `/pages/task/taskDetail?activityId=${this.extro.activityId}&uid=${this.extro.uid}`
            })
          } else {
            let _data = {
              iv: e.detail.iv,
              userInfo: e.detail.userInfo,
              encryptedData: e.detail.encryptedData,
              code: res.code,
              pub_uid: '',
              aid: ''
            }
            store.dispatch(getHomeParams(_data)).then(
            (res) => {
              this.$emit('initData', res.payload, '')
            }
          ).then(
            wepy.hideLoading()
          )
          }
        }
      })
    }

    // onGotUserInfo () {
    //   wepy.getUserInfo({
    //     success: (res) => {
    //       console.log(res)
    //       this.ops = {
    //         iv: res.iv,
    //         userInfo: res.userInfo,
    //         encryptedData: res.encryptedData,
    //         pub_uid: '',
    //         aid: ''
    //       }
    //       wepy.login({
    //         success: res => {
    //           let sendParams = Object.assign(this.ops, {code: res.code})
    //           store.dispatch(getHomeParams(sendParams))
    //         }
    //       })
    //     }
    //   })
    // }
  }
  onLoad () {

  }
}
</script>
