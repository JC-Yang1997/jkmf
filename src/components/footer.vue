<template>
  <view class="home-footer">
    <image src="https://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/logo.png" />
    <view>集客魔方</view>
  </view>
</template>
<script>
import wepy from 'wepy'
export default class Footer extends wepy.component {
}
</script>
<style scoped lang='scss'>
.home-footer {
  height: 60rpx;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20rpx 0;
  position: absolute;
  bottom: 0rpx;
  & > image {
    width: 30rpx;
    height: 36rpx;
    margin-right: 20rpx;
  }
  & > view {
    width: 98rpx;
    height: 33rpx;
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(204, 204, 204, 1);
    line-height: 33rpx;
  }
}
</style>
