<template>
  <view class="mock">
    <view class="alert">
      <view class="title">为什么要认领商品</view>
      <view class="content">认领商品可获得发起该商品抽奖免单的机会，活动发起者默认拥有10倍于其他参与者的抽奖机会。</view>
      <view class="close" @tap='closeAlert'><i class="iconfont icon-guanbi" /></view>
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'
export default class AlertInfo extends wepy.component {
  methods = {
    closeAlert: () => {
      this.$emit('closeAlert')
    }
  }
}
</script>
<style lang="scss">
.mock{
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background:rgba(0,0,0,0.4);
  z-index: 600;
  &>.alert{
    width:520rpx;
    height:414rpx;
    background:rgba(255,255,255,1);
    border-radius:16rpx;
    margin: 0 auto;
    margin-top: 300rpx;
    padding: 40rpx;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    &>.title{
      width:100%;
      height:50rpx;
      font-size:36rpx;
      font-family:PingFangSC-Semibold;
      font-weight:600;
      color:rgba(71,71,71,1);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &>.content{
      width:100%;
      font-size:28rpx;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(102,102,102,1);
      line-height:40rpx;
      margin-top: 40rpx;
      padding: 20rpx;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
    }
    &>.close{
      height: 32rpx;
      width: 32rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 24rpx;
      top: 24rpx;
    }
  }
}
</style>
