<style lang="scss">
  .win_list_item{
    position:relative;
    .card_state{
      position:absolute;
      bottom:0;
      right:0;
      width:100rpx;
      height:36rpx;
      line-height:36rpx;
      text-align:center;
      font-size:20rpx;
      color:#fff;
      border-radius:8rpx  0px  8rpx  0px;
      &.type_1{
        background:linear-gradient(#F3466B,#EE3A3A)
      }
      &.type_2{
        background:linear-gradient(#FF6347,#FF8C47)
      }
      &.type_3{
        background:linear-gradient(#EEF2F3,#8E9EAB)
      }
    }
  }
</style>

<template>
  <view class="win_list_item">
    <!-- <view class="win-list">
      <image mode="sapectFill" src="{{item.picUrl}}"/>
      <view class="win-text-com">
        <view class="win-text-header">奖品：{{item.title}}</view>
        <view class="win-text-time">活动时间：{{item.startTime}}</view>
      </view>
    </view> -->
    <view class="win-list" @tap="nav">
      <image mode="sapectFill" src="{{item.type==1?item.picUrl:'http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/icon_collect.png'}}"/>
      <view class="win-text-com">
        <block wx:if="{{item.type==1}}">
          <view class="win-text-header">奖品：{{item.title}}</view>
          <view class="win-text-time">活动时间：{{item.startTime}}</view>
        </block>

        <block wx:if="{{item.type!=1}}">
          <view class="win-text-header">红包：{{item.title}}</view>
          <view class="red_packet">红包￥5</view>
        </block>
      </view>
    </view>
    <!-- <view wx:if="{{item.status == 0}}" class="card_state type_1">未领取</view> -->
    <!-- <view wx:if="{{item.status == 3}}" class="card_state type_2">已领取</view> -->
    <view wx:if="{{item.status == 3}}" class="card_state type_3">已领取</view>
    <view wx:if="{{item.status !== 3}}" class="card_state type_2">进行中</view>
  </view>
</template>

<script>
  import wepy from 'wepy'
  export default class winListItem extends wepy.component {
    props = {
      item: {
        type: Object,
        default: {}
      }
    }
    methods = {
      nav() {
        if (this.item.type !== 1) {
          wepy.navigateTo({
            url: '/pages/newComer/getGift?activityId=' + this.item.activityId
          })
        } else {
          wepy.navigateTo({
            url: '/pages/task/drawTask?activityId=' + this.item.activityId
          })
        }
      }
    }
    onLoad() {

    }
  }
</script>
