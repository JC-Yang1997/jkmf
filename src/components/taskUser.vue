<style lang="scss">
.user-com {
  padding:25rpx 0 32rpx;
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
  margin-left:-20rpx;
  padding: 0 39rpx;
  flex-wrap:wrap;
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
.win_user{
  padding:21rpx 24rpx 41rpx;
  margin-top:20rpx;
  background-color:#fff;
  border-radius:20rpx;
  .title{
    height:40rpx;
    margin-bottom:38rpx;
    font-size:28rpx;
    color:#333;
    .win_num{
      line-height:40rpx;
      &>text{
        color:#EB3939
      }
    }
    .win_list{
      .icon_box{
        width:15rpx;
        height:28rpx;
        margin-left:16rpx;
      }
    }
  }
  .win_user_list{
    text-align:center;
    .item{
      position:relative;
      display:inline-block;
      width:60rpx;
      height:60rpx;
      margin:0 10rpx;
      .avatar_box{
        width:100%;
        height:100%;
        font-size:0;
        border-radius:50%;
        overflow:hidden;
      }
      .redPackStatus{
        position:absolute;
        top:2rpx;
        right:-4rpx;
        width:20rpx;
        height:20rpx;
        font-size:0;
      }
    }
  }
}
</style>
<template>
  <view class="task_user">
    <!-- 中奖名单 -->
    <view class="win_user" wx:if="{{userDatas.activityWinnerPerson.length>0}}">
      <view class="title space_between">
        <view class="win_num">
          共有<text>{{userDatas.activityWinnerPerson.length}}</text>人中奖
        </view>
        <view class="win_list align_items" @tap="nav_to(0)">
          <view class="text_box">中奖名单</view>
          <view class="icon_box iconfont icon-jinru"></view>
        </view>
      </view>
      <view class="win_user_list">
        <view class="item" wx:for="{{userDatas.activityWinnerPerson}}" wx:key="{{index}}">
          <view class="redPackStatus">
            <image wx:if="{{item.awardStatus == 3}}" mode="aspectFill" src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/icon_doen.png"/>
            <image wx:if="{{item.awardStatus == 1}}" mode="aspectFill" src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/icon_received.png"/>
            <image wx:if="{{item.awardStatus == -1}}" mode="aspectFill" src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/icon_unreceived.png"/>
          </view>
          <view class="avatar_box">
            <image mode="aspectFill" src="{{item.avatarUrl}}"/>
          </view>
        </view>
      </view>
    </view>
    <!-- 参加的人数 -->
    <view class="user-com" @tap="nav_to(1)">
      <view class="user-join">已参与人数 {{userDatas.activityDetail.joinCount}}/{{userDatas.activityDetail.condPersionCount}}</view>
      <view class="user-list">
        <view class="user-list-image" wx:for="{{userDatas.activityJoinPerson}}" wx:key="{{index}}" wx:if="{{index<7}}">
          <image src="{{item.avatarUrl}}"/>
          <text class="user-num" wx:if="{{item.joinNum>0}}">{{item.joinNum}}</text>
        </view>
        <view class="user-list-image"><text class="user-more">...</text></view>
      </view>
    </view>
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
    nav_to(index) {
      index *= 1
      let url = ''
      switch (index) {
        case 0:
          url = `/pages/task/winUser?activityId=${this.activityId}`
          break
        case 1:
          url = `/pages/task/joinTask?activityId=${this.activityId}`
          break
      }
      wepy.navigateTo({
        url
      })
    }
  }
}
</script>
