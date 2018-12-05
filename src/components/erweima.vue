<template>
  <view class="background">
    <view class="alert">
      <view @tap="close">
        <i class="iconfont icon-guanbi"></i>
      </view>
      <view>添加客服领红包</view>
      <view @longtap="test">
        <image src="{{shopData.customServiceCode}}" />
      </view>
      <view>
        <view>{{shopData.customServiceWxNum}}</view>
        <view @tap="copyKfInfo">复制</view>
      </view>
      <view>添加本店客服个人号，输入关键词“集客魔方”可获得0-5元不等红包</view>
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'
import {connect} from 'wepy-redux'

@connect({
  shopData(state) {
    return state.home.shopData
  }
})

export default class Erweima extends wepy.component {
  methods = {
    close() {
      this.$emit('closeEr')
    },
    test() {
      wepy.downloadFile({
        url: this.shopData.customServiceCode,
        success: res => {
          wepy.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: res => {
              wepy.showToast({
                icon: 'none',
                title: '图片已保存'
              })
            }
          })
        }
      })
    },
    copyKfInfo() {
      wepy.setClipboardData({
        data: this.shopData.customServiceWxNum,
        success (res) {
          wepy.getClipboardData({
            success (res) {
              console.log(res.data)
            }
          })
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
.background{
  width:750rpx;
  height: 100%;
  background:rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  &>.alert{
  width:650rpx;
  height:676rpx;
  background:rgba(255,255,255,1);
  border-radius:16rpx;
  position: absolute;
  left: 50rpx;
  top: 200rpx;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &>view{
    margin: 15rpx 0;
  }
  &>view:nth-of-type(1){
    position: absolute;
    right: 40rpx;
    top: 20rpx;
    width:32rpx;
    height:32rpx;
    &>i{
      font-size: 32rpx;
      font-weight: bold;
      color: #000;
      }
    }
  &>view:nth-of-type(2){
    width:256rpx;
    height:50rpx;
    font-size:36rpx;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(71,71,71,1);
    line-height:50rpx;
  }
  &>view:nth-of-type(3){
    width:264rpx;
    height:264rpx;
    &>image{
      height: 100%;
      width: 100%;
    }
  }
  &>view:nth-of-type(4){
      width:480rpx;
      height:80rpx;
      background:rgba(247,247,247,1);
      border-radius:48rpx;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 10rpx;
      box-sizing: border-box;
      &>view:nth-of-type(1){
        display: flex;
        align-items: center;
        height:33rpx;
        font-size:24rpx;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
      }
      &>view:nth-of-type(2){
        width:48rpx;
        height:33rpx;
        font-size:24rpx;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(235,57,57,1);
        line-height:33rpx;
      }
    }
    &>view:nth-of-type(5){
      width:480rpx;
      height: 80rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size:28rpx;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(51,51,51,1);
      text-align: center;
    }
  }
}

</style>
