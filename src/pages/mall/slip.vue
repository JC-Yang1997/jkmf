<style lang="scss">
  @import '../../scss/yinju.scss';
  .slip{
    padding:20rpx 24rpx 88rpx;
    box-sizing:border-box;
    .add{
      position:fixed;
      bottom:0;
      left:0;
      width:100%;
      height:88rpx;
      line-height:88rpx;
      text-align:center;
      font-size:28rpx;
      color:#fff;
      background:linear-gradient(90deg,#F3466B,#EE3A3A);
    }
  }
</style>

<template>
  <scroll-view scroll-y class="slip">
    <goodCardHor></goodCardHor>
    <view class="add">添加订单</view>
  </scroll-view>
</template>

<script>
  import wepy from 'wepy'
  import goodCardHor from '../../components/yinju/good_card_hor'
  import jsLogo from '../../components/yinju/jk_logo'
  export default class slip extends wepy.page {
    config = {
      navigationBarTitleText: '我的回填订单'
    }
    onLoad() {
    }
    components = {
      jsLogo,
      goodCardHor
    }
}

</script>
