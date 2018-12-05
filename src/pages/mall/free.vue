<style lang="scss">
  @import "../../scss/yinju.scss";
  .free{
    padding:0 24rpx 40rpx;
  }

  .part_title{
    height:88rpx;
    padding:0 24rpx;
    margin-top:20rpx;
    margin-bottom:10rpx;
    border-radius:8rpx;
    background-color:#fff;
    
    .icon_box{
      width:5rpx;
      height:28rpx;
      background-color:#EB3939;
      margin-right:12rpx;
    }
    .text_box{
      font-size:28rpx;
      color:#333333;
    }
  }

  .jk_logo_wrap{
    margin-top:99rpx;
  }
</style>

<template>
  <view class="free">
    <view class="part_title align_items">
      <view class="icon_box"></view>
      <view class="text_box">新人有礼</view>
    </view>
    <view class="newr_list">
      <goodCardHor :good_type.sync="new_good_type"></goodCardHor>
    </view>
    <view class="part_title align_items">
      <view class="icon_box"></view>
      <view class="text_box">免单机会</view>
    </view>
    <view class="newr_list">
      <goodCardHor :good_type.sync="free_good_type"></goodCardHor>
      <goodCardHor :good_type.sync="free_good_type"></goodCardHor>
    </view>
    <view class="jk_logo_wrap">
      <jsLogo></jsLogo>
    </view>
  </view>
</template>

<script>
  import wepy from 'wepy'
  import jsLogo from '../../components/yinju/jk_logo'
  import goodCardHor from '../../components/yinju/good_card_hor'
  export default class Free extends wepy.page {
    config = {
      navigationBarTitleText: '免单商品'
    }

    data = {
      new_good_type: 0,
      free_good_type: 1
    }

    onLoad() {
  
    }

    components = {
      goodCardHor,
      jsLogo
    }
}
</script>
