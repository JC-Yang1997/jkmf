<style lang="scss" scoped>
  @import '../../scss/yinju.scss';
  .jk_logo{
    text-align:center;
    font-size:0;
    .icon_box{
      width:30rpx;
      height:36rpx;
      margin-right:20rpx;
      font-size:0;
    }
    .text_box{
      font-size:24rpx;
      color:#CCCCCC;
    }
  }
</style>

<template>
  <view class="jk_logo flex_center">
    <view class="icon_box">
      <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/logo.png"/>
    </view>
    <view class="text_box">集客魔方</view>
  </view>
</template>

<script>
  import wepy from 'wepy'
  export default class jkLogo extends wepy.component {
    onLoad() {
  
    }
  }

</script>
