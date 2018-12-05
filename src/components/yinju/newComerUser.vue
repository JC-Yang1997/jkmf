<style lang="scss">
.user-com {
  padding: 26rpx 0 29rpx;
  background: #fff;
  border-radius: 20rpx;
  margin-top: 20rpx;
}
.user-join {
  text-align: center;
  font-size: 24rpx;
  font-weight: 400;
  color: rgba(142, 142, 147, 1);
  line-height: 33rpx;
}
.user-list {
  display: flex;
  align-items: center;
  justify-content: left;
  margin-top: 29rpx;
  padding: 0 39rpx;
  .user-list-image {
    position: relative;
    margin-left: 20rpx;
    image {
      height: 60rpx;
      width: 60rpx;
      border-radius: 50%;
    }
    .user-num {
      position: absolute;
      display: flex;
      align-items: center;
      text-align: center;
      padding: 0 12rpx;
      height: 36rpx;
      font-size: 20rpx;
      font-weight: 400;
      color: #fff;
      background: #eb3939;
      border-radius: 20rpx;
      z-index: 1;
      top: -12rpx;
      right: -17rpx;
    }
    .user-more {
      display: inline-block;
      display: flex;
      // align-items: center;
      justify-content: center;
      height: 60rpx;
      width: 60rpx;
      line-height: 40rpx;
      border-radius: 50%;
      background-color: #ededed;
      color: #9e9fa9;
    }
  }
}
.notes{
  margin-top:37rpx;
  padding:0 76rpx;
  color:#9B9B9B;
  font-size:24rpx;
  text-align:center;
  line-height:33rpx;
}
</style>
<template>
  <view class="user-com">
    <view class="user-join">已参与人数 {{userDatas.activityDetail.joinCount}}/{{userDatas.activityDetail.condPersionCount}}</view>
    <view class="user-list">
      <view class="user-list-image" wx:for="{{userDatas.activityJoinPerson}}" wx:key="{{index}}" wx:if="{{index<7}}">
        <image src="{{item.avatarUrl}}"/>
        <text class="user-num" wx:if="{{item.joinNum>0}}">{{item.joinNum}}</text>
      </view>
      <view class="user-list-image" @tap="nav_to"><text class="user-more">...</text></view>
    </view>
    <view class="notes">ps：达到活动结束时间，仍未达到{{userDatas.activityDetail.condPersionCount}}人抽奖，则新人有礼赠品领取任务失败</view>
  </view>
</template>
<script>
import wepy from 'wepy'

export default class TaskUser extends wepy.component {
  props = {
    userDatas: {
      type: Object,
      default: {}
    },
    activityId: {
      default: 0
    }
  }
  methods = {
    nav_to() {
      wepy.navigateTo({
        url: `/pages/task/joinTask?activityId=${this.activityId}`
      })
    }
  }
}
</script>
