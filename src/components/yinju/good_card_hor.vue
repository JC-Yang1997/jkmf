<style lang="scss" scoped>
  @import '../../scss/yinju.scss';
  .good_card_hor{
    position:relative;
    padding:25rpx 24rpx;
    margin-bottom:10rpx;
    background-color:#fff;
    border-radius:8rpx;
    .card_img{
      width:180rpx;
      height:180rpx;
      margin-right:20rpx;
    }
    .card_content{
      flex:1;
      min-width:0;
    }
    .name{
      height:80rpx;
      font-size:28rpx;
      color:#333333;
      font-weight:bold;
      line-height:40rpx;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; //需要控制的文本行数
      overflow: hidden;
    }
    .price{
      margin-top:9rpx;
      line-height:40rpx;
      color:#EB3939;
      font-size:24rpx;
    }
    .date{
      margin-top:9rpx;
      font-size:24rpx;
      color:#9B9B9B;
      line-height:33rpx;
    }
  }

  .activity_state{
    position:absolute;
    bottom:0;
    right:0;
    width:100rpx;
    height:36rpx;
    line-height:36rpx;
    text-align:center;
    font-size:20rpx;
    border-radius:8rpx  0px  8rpx  0px;
    color:#fff;
    &.type_1{
      background:linear-gradient(#EEF2F3,#8E9EAB);
    }
    &.type_2{
      background:linear-gradient(#FF6347,#FF8C47);
    }
  }

</style>

<template>
  <view class="good_card_hor align_items" @tap="nav_to">
    <view class="card_img">
      <image mode="aspectFill" src="{{item.picUrl}}"/>
    </view>
    <view class="card_content" :class="{type_1:good_type==0,type_2:good_type!=0}">
      <view class="name">奖品：{{item.title}}</view>
      <view class="price">价值￥{{item.price}}</view>
      <view class="date">已参与{{item.joinCount}}</view>
    </view>
    <view class="activity_state type_1" wx:if="{{item.status === 2}}">已结束</view>
    <view class="activity_state type_2" wx:if="{{item.status === 1}}">进行中</view>
  </view>
</template>

<script>
  import wepy from 'wepy'
  export default class goodCardHor extends wepy.component {
    onLoad() {}
    props = {
      item: {
        type: Object,
        default: {}
      }
    }

    methods = {
      nav_to() {
        let url = ''
        if (this.item.activityType === 4 && this.item.isYourself) {
          url = `/pages/newComer/index?activityId=${this.item.activityId}`
        } else {
          url = `/pages/task/taskDetail?activityId=${this.item.activityId}`
        }
        wepy.navigateTo({
          url
        })
      }
    }

    data = {}
  }
</script>
