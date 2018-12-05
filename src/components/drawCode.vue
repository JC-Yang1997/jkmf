<style lang="scss">
@import '../scss/yinju.scss';
::-webkit-scrollbar{display:none}

.code-com {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9;
  .code {
    position:relative;
    width: 640rpx;
    height: 620rpx;
    box-sizing:border-box;
    background: rgba(255, 255, 255, 1);
    border-radius: 20rpx;
    .scroll_box{
      width:100%;
      height: 100%;
      box-sizing:border-box;
      border-radius: 20rpx;
    }
    .scroll_wrap{
      height:100%;
      padding-bottom:204rpx;
      box-sizing:border-box;
    }
    .close{
      position:absolute;
      top:34rpx;
      right:34rpx;
      width:32rpx;
      height:32rpx;
      z-index:2;
      padding:20rpx;
      transform:translate3d(50%,-50%,0)
    }
    .code-header {
      line-height:128rpx;
      text-align: center;
      font-size: 32rpx;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      border-radius: 20rpx 20rpx 0 0;
    }
    .code-body {
      padding: 0 35rpx;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      // max-height: 315rpx;
      overflow-y: auto;
      .code-body-list {
        display:flex;
        align-items:center;
        width: 261rpx;
        height: 100rpx;
        padding:0 13rpx;
        box-sizing:border-box;
        margin-bottom: 20rpx;
        background: rgba(252, 246, 246, 1);
        border-radius: 50rpx;
        .card_img{
          width:80rpx;
          height:80rpx;
          margin-right:12rpx;
          border-radius:50%;
          overflow:hidden;
          image{
            width:100%;
            height:100%;
          }
        }
        .code_text{
          margin-bottom:4rpx;
          color:#333333;
          font-size:24rpx;
          line-height:33rpx;
        }
        .code_type{
          color:#9B9B9B;
          font-size:20rpx;
          line-height:28rpx;
        }
      }
    }
    .code-footer {
      position:absolute;
      bottom:0;
      left:0;
      width:100%;
      height:204rpx;
      padding-top:30rpx;
      box-sizing:border-box;
      border-radius:20rpx;
      background-color:#fff;
      box-shadow:0px -4rpx 10rpx rgba(235,57,57,0.1);
      .code-text {
        font-size: 24rpx;
        font-weight: 400;
        text-align: center;
        color: rgba(155, 155, 155, 1);
        line-height: 33rpx;
      }
      .code-btn {
        width: 500rpx;
        height: 88rpx;
        background: linear-gradient(
          118deg,
          rgba(243, 70, 107, 1) 0%,
          rgba(238, 58, 58, 1) 100%
        );
        border-radius: 74rpx;
        font-size: 28rpx;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 88rpx;
        text-align: center;
        margin: 20rpx auto 34rpx auto;
      }
    }
    .close_2{
      position:absolute;
      left:50%;
      bottom:-87rpx;
      width:48rpx;
      height:48rpx;
      line-height:48rpx;
      text-align:center;
      border:1px solid #fff;
      border-radius:50%;
      transform:translate3d(-50%,50%,0);
      font-size:32rpx;
      color:#fff;
    }
  }
}
.type_1{
    .code{
      width:600rpx;
      .code-header{
        background-color:#F56C6C;
        color:#fff;
      }
      .code-body{
        padding:23rpx 74rpx 0;
        .item{
          width:180rpx;
          height:50rpx;
          margin-bottom:20rpx;
          line-height:50rpx;
          text-align:center;
          background-color:#FCF6F6;
          color:#333333;
          font-size:24rpx;
          border-radius:25rpx;
        }
      }
    }
  }
</style>
<template>
  <view class="code-com" :class="{type_1:layerType==1}">
    <view class="code">
      <view wx:if="{{layerType==0}}" class="close icon-guanbi iconfont" @tap="close()"></view>
      <scroll-view scroll-y class="scroll_wrap">
          <view class="code-header" wx:if="{{layerType==1}}">您获得{{awardNo.length}}个抽奖码</view>
          <view class="code-header" wx:if="{{layerType!=1}}">全部抽奖码</view>
          <view class="code-body">
            <block wx:if="{{layerType==1}}">
              <view wx:for="{{awardNo}}" wx:key="{{index}}" class="item">{{item}}</view>
            </block>
            <block wx:if="{{layerType!=1}}">
              <view class="code-body-list" wx:for="{{inviteUsers}}" wx:key="{{index}}">
                <view class="card_img">
                  <image mode="aspectFill" src="{{item.avatarUrl}}"/>
                </view>
                <view class="card_content">
                  <view class="code_text">{{item.awardNo}}</view>
                  <view class="code_type">{{item.isYourself?"参与抽奖获得":"邀请好友获得"}}</view>
                </view>
              </view>
            </block>
          </view>
        </scroll-view>
      <view class="code-footer">
        <view class="code-text">分享给好友获得更多抽奖码，提高中奖几率</view>
        <button open-type="share" class="code-btn">召唤好友</button>
      </view>
      <view class="close_2 iconfont icon-guanbi" wx:if="{{layerType!=0}}" @tap="close()">
        <!-- <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/close.png"/> -->
      </view>
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'
import { connect } from 'wepy-redux'
@connect({
  inviteUsers(state) {
    return state.record.anward_join[0] ? state.record.anward_join[0].inviteUsers : []
  },
  awardNo(state) {
    if (state.taskDetail.task.activityJoin) {
      return state.taskDetail.task.activityJoin.awardNo
    }
  }
})
export default class DrawCode extends wepy.component {
  props = {
    layerType: {
      type: Number,
      default: 2
    },
    checkShow: {
      type: Number,
      default: 0,
      twoWay: true
    },
    list: {
      type: Object,
      default: {}
    }
  }
  methods = {
    close() {
      this.checkShow = false
    }
  }
  onLoad() {}
}
</script>
