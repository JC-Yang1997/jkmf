<template>
  <view class="null-container">
    <view class="box">
      <view>
        <image class="image3" wx:if="{{type === 3}}" src="https://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/myCard.png" />
        <image class="image1" wx:if="{{type === 1}}" src="https://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/myHtorder.png" />
        <image class="image2" wx:if="{{type === 2}}" src="https://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/myRecord.png" />
        <image class="image4" wx:if="{{type === 4}}" src="https://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/myWinLog.png" />
        <image class="image2" wx:if="{{type === 5}}" src="https://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/myJoin.png" />
      </view>
      <view class="title">空空如也~</view>
      <view wx:if="{{type===1}}" ></view>
      <view class="button" wx:else @tap="toChouJiang">去抽个奖吧</view>
      </view>
  </view>
</template>
<script>
import wepy from 'wepy'
export default class Null extends wepy.component {
  props = {
    type: {
      type: Number,
      default: 0
    }
  }
  methods = {
    toChouJiang() {
      wepy.switchTab({
        url: '/pages/index/index'
      })
    }
  }
}
</script>
<style lang="scss">
.null-container{
  height: 1050rpx;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .box{
    margin-top: 200rpx;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .image1{
      width:214rpx;
      height:307rpx;
    }
    .image2{
      width:350rpx;
      height:291rpx;
    }
    .image3{
      width:192rpx;
      height:274rpx;
    }
    .image4{
      width:224rpx;
      height:162rpx;
    }
    .title{
      margin: 32rpx 0 0 40rpx;
      width:100%;
      height:40rpx;
      font-size:28rpx;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(102,102,102,1);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .button{
      width:500rpx;
      height:80rpx;
      background:linear-gradient(118deg,rgba(243,70,107,1) 0%,rgba(238,58,58,1) 100%);
      border-radius:44rpx;
      color: white;
      font-size: 28rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 72rpx;
    }
  }
}
</style>
