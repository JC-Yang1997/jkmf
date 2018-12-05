<style lang="scss">
  @import '../../scss/yinju.scss';
  .taks_rules{
    padding:24rpx 24rpx 32rpx;
    margin-top:20rpx;
    background-color:#fff;
    border-radius:20rpx;
    .title{
      margin-bottom:25rpx;
      height:40rpx;
        .icon_box{
        width:5rpx;
        height:28rpx;
        margin-right:19rpx;
        background-color:#EB3939;
      }
      .text_box{
        font-size:28rpx;
        color:#333333;
      }
    }
    .content{
      padding-left:15rpx;
      .item{
        color:#9B9B9B;
        font-size:28rpx;
        line-height:48rpx;
      }
    }
  }
</style>

<template>
  <view class="taks_rules">
    <view class="title align_items">
      <view class="icon_box"></view>
      <view class="text_box">任务规则</view>
    </view>
    <view class="content">
      <view class="item">1、成功支付0.1元即可算成功发起抽奖活动，获得10个抽奖码，且自动参与抽奖活动</view>
      <view class="item">2、活动开奖后，发起者若中奖，则按照活动流程领取奖品</view>
      <view class="item">3、活动开奖后，若发起者未中奖，0.1元支付金额将自动退回，重新发起活动</view>
      <view class="item">4、每个用户针对单个免单商品最多可发起三次抽奖活动</view>
      <view class="item">5、中奖后请及时领取奖品，未在规定时间内领取奖品，则自动失效</view>
    </view>
  </view>
</template>

<script>
  import wepy from 'wepy'
  export default class TaskRules extends wepy.component {
    onLoad() {}
  }
</script>
