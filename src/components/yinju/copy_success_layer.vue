<style lang="scss">
  .copy_success_layer{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.4);
    .copy_success{
      position:absolute;
      top:50%;
      left:50%;
      width:520rpx;
      height:400rpx;
      padding-top:82rpx;
      margin:-200rpx 0 0 -260rpx;
      background-color:#fff;
      border-radius:16rpx;
      box-sizing:border-box;
    }
    .tb_logo{
      width:112rpx;
      height:112rpx;
      margin:0 auto;
    }
    .copy_success_text{
      line-height:50rpx;
      margin-top:36rpx;
      text-align:center;
      color:#474747;
      font-size:36rpx;
      font-weight:bold;
    }
    .notes{
      line-height:33rpx;
      margin-top:18rpx;
      color:#9B9B9B;
      font-size:24rpx;
      text-align:center;
    }
    .close_yinju{
      position:absolute;
      top:24rpx;
      right:24rpx;
    }
  }
</style>

<template>
  <view class="copy_success_layer" wx:if="{{layer_show}}">
    <view class="copy_success">
      <view class="close_yinju iconfont icon-guanbi" @tap="close"></view>
      <view class="tb_logo">
        <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/logo_tb.png"></image>
      </view>
      <view class="copy_success_text">复制成功</view>
      <view class="notes">请到手机APP中打开领取</view>
    </view>
  </view>
</template>

<script>
  import wepy from 'wepy'
  export default class copySuccessLayer extends wepy.component {
    onLoad() {}

    props = {
      layer_show: {
        type: Boolean,
        default: false,
        twoWay: true
      }
    }

    methods = {
      close() {
        this.layer_show = false
      }
    }
  }

</script>
