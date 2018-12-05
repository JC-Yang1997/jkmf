<style lang="scss" scoped>
  .authentication_layer{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.4);
    .authentication{
      position:relative;
      width:520rpx;
      height:510rpx;
      padding:64rpx 84rpx 68rpx;
      box-sizing:border-box;
      border-radius:16rpx;
      background-color:#fff;
      text-align:center;
      .close_yinju{
        position:absolute;
        top:24rpx;
        right:24rpx;
        width:32rpx;
        height:32rpx;
      }
      .resulte_img{
        width:182rpx;
        height:128rpx;
        margin:0 auto;
      }
      .resulte_text{
        margin-top:38rpx;
        line-height:50rpx;
        font-size:36rpx;
        color:#474747;
      }
      .notes{
        margin-top:18rpx;
        font-size:24rpx;
        color:#9B9B9B;
        line-height:33rpx;
      }
      .btn_launch{
        height:84rpx;
        line-height:84rpx;
        margin-top:31rpx;
        text-align:center;
        font-size:28rpx;
        color:#fff;
        background:linear-gradient(#F3466B,#EE3A3A);
        border-radius:42rpx;
      }
    }
  }
</style>

<template>
  <view class="authentication_layer flex_center" wx:if="{{layerShow}}">
    <view class="authentication">
      <view class="close_yinju icon-guanbi iconfont" @tap="close"></view>
      <view class="resulte_img">
        <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/cash_success.png"/>
      </view>
      <view class="resulte_text">已成功认领商品</view>
      <view class="notes">获得抽奖免单资格</view>
      <view class="btn_launch" @tap="nav_to">0.1元发起抽奖</view>
      </view>
  </view>
</template>

<script>
  import wepy from 'wepy'
  export default class authenticationLayer extends wepy.component {
    onLoad() { }
    props = {
      layerShow: {
        type: Boolean,
        default: false,
        twoWay: true
      },
      activityId: {
        default: 0
      },
      activityDefId: {
        activityDefId: 0
      }
    }
    methods = {
      close() {
        this.layerShow = false
      },
      nav_to() {
        wepy.navigateTo({
          url: `/pages/detail/detail?activityDefId=${this.activityDefId}`
        })
      }
    }
  }
</script>
