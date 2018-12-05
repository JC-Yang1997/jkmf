<style lang="scss">
.layer-com {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
  .layer-succ-top {
    width: 99%;
    .layer-join {
      position: relative;
      width: 99%;
      height: 668rpx;
      background-image: url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/zj11.png');
      background-repeat: no-repeat;
      background-size: cover;
      .layer-text {
        position: absolute;
        width: 264rpx;
        height: 120rpx;
        font-size: 28rpx;
        top: 476rpx;
        left: 50%;
        margin-left:-132rpx;
        text-align: center;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 40rpx;
        text-shadow: 0px 2px 11px rgba(235, 57, 57, 1);
      }
    }
    .layer-btn {
      width: 352rpx;
      height: 80rpx;
      color: #fff;
      margin:0 auto;
      background: linear-gradient(
        118deg,
        rgba(243, 70, 107, 1) 0%,
        rgba(238, 58, 58, 1) 100%
      );
      border-radius: 74rpx;
    }
    .layer-close {
      width: 48rpx;
      height: 48rpx;
      border: 2rpx solid #fff;
      border-radius: 50%;
      display: flex;
      align-content: center;
      justify-content: center;
      margin: 52rpx auto 0 auto;
      .icon-guanbi {
        color: #fff;
        font-size: 32rpx;
        line-height: 48rpx;
      }
    }
  }
  .layer-btn {
    text-align: center;
    width: 67%;
    height: 80rpx;
    margin: 66rpx auto 0 auto;
    background: rgba(255, 255, 255, 1);
    border-radius: 74rpx;
    font-size: 28rpx;
    font-weight: 500;
    color: rgba(235, 57, 57, 1);
    line-height: 80rpx;
  }
  .layer-succ {
    width: 100%;
    height: 100%;
    .layer-container {
      width: 100%;
      height: 890rpx;
      background-image: url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/tc.png');
      background-repeat: no-repeat;
      background-size: cover;
      .layer-code {
        position: absolute;
        width: 220rpx;
        height: 67rpx;
        font-size: 48rpx;
        font-weight: 600;
        color: rgba(235, 57, 57, 1);
        line-height: 67rpx;
        text-shadow: 0px 2rpx 4rpx rgba(235, 57, 57, 0.4);
        top: 552rpx;
        left: 50%;
        margin-left:-110rpx;
        text-align:center;
      }
      .layer-text {
        position: absolute;
        width: 140rpx;
        height: 40rpx;
        font-size: 28rpx;
        font-weight: 400;
        color: rgba(235, 57, 57, 1);
        line-height: 40rpx;
        top: 619rpx;;
        left: 50%;
        margin-left:-70rpx;
      }
      .layer-btn {
        position: absolute;
        width: 369rpx;
        height: 88rpx;
        background: linear-gradient(
          360deg,
          rgba(255, 99, 71, 1) 0%,
          rgba(253, 213, 123, 1) 100%
        );
        box-shadow: 0px 4rpx 12rpx 0rpx rgba(235, 57, 57, 1);
        border-radius: 74rpx;
        font-size: 28rpx;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 88rpx;
        top: 758rpx;;
        left: 50%;
        margin:0 0 0 -185rpx;
        margin-left:-185rpx;
      }
    }
    .layer-close {
      width: 48rpx;
      height: 48rpx;
      border: 2rpx solid #fff;
      border-radius: 50%;
      display: flex;
      align-content: center;
      justify-content: center;
      margin: 52rpx auto 0 auto;
      .icon-guanbi {
        color: #fff;
        font-size: 32rpx;
        line-height: 48rpx;
      }
    }
  }
  .layer-error-com {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;
    .layer-error-container {
      position: relative;
      width: 100%;
      height: 640rpx;
      background-image: url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/layerts.png');
      background-repeat: no-repeat;
      background-size: cover;
      .layer-up {
        position: absolute;
        top: 214rpx;
        left: 130rpx;
        width: 158rpx;
        height: 33rpx;
        font-size: 24rpx;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 33rpx;
      }
      .layer-code {
        position: absolute;
        top: 488rpx;
        left: 0;
        width: 100%;
        height: 50rpx;
        text-align: center;
        font-size: 36rpx;
        font-weight: 500;
        color: rgba(235, 57, 57, 1);
        line-height: 50rpx;
        text-shadow: 0px 2rpx 5rpx rgba(201, 33, 33, 0.3);
      }
      .layer-zl {
        position: absolute;
        top: 534rpx;
        left: 0;
        width: 100%;
        height: 50rpx;
        font-size: 28rpx;
        font-weight: 500;
        text-align: center;
        color: rgba(235, 57, 57, 1);
        line-height: 50rpx;
        text-shadow: 0px 2rpx 5rpx rgba(201, 33, 33, 0.3);
      }
    }
    .layer-btn-container {
      width: 66%;
      display: flex;
      justify-content: space-between;
      line-height: 88rpx;
      margin-top: 52rpx;
      .layer-btn-yq {
        width: 240rpx;
        height: 88rpx;
        background: linear-gradient(
          118deg,
          rgba(243, 70, 107, 1) 0%,
          rgba(238, 58, 58, 1) 100%
        );
        border-radius: 74rpx;
        text-align: center;
        font-size: 28rpx;
        color: #fff;
      }
      .layer-btn-go {
        width: 240rpx;
        height: 88rpx;
        line-height: 88rpx;
        background: rgba(255, 255, 255, 1);
        border-radius: 74rpx;
        font-size: 28rpx;
        text-align: center;
        color: #eb3939;
      }
    }
    .layer-close{
      width:48rpx;
      height:48rpx;
      margin-top:57rpx;
      text-align:center;
      line-height:48rpx;
      font-size:32rpx;
      color:#fff;
      border:1px solid #fff;
      border-radius:50%;
    }
  }
  .layer-draw-succ {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .layer-draw-container {
      .content{
        width: 589rpx;
        height: 367rpx;
        padding-top:400rpx;
        box-sizing:border-box;
        background:url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/noAwardDialog_bg.png') 0 0/100% 100% no-repeat;
        text-align:center;
        .p_1,.p_2{
          font-size:44rpx;
          color:#fff;
        }
      }
      .btn_concat{
        width:352rpx;
        height:80rpx;
        margin:60rpx auto 0;
        line-height:80rpx;
        text-align:center;
        font-size:28rpx;
        color:#fff;
        border-radius:40rpx;
        background:linear-gradient(90deg,#F3466B,#EE3A3A)
      }
      .close{
        width:48rpx;
        height:48rpx;
        margin: 68rpx auto 0;
        line-height:48rpx;
        text-align:center;
        border-radius:50%;
        border:1px solid #fff;
        color:#fff;
        font-size:32rpx;
      }
    }
  }
}
.layer-error-container,.layer-join, .layer-container{
  position:relative;
  margin-top:-200rpx;
}
</style>
<template>
  <view class="layer-com">
    <view class="layer-succ-top" wx:if="{{showType == 2}}">
    <!-- <view class="layer-succ-top" wx:if="{{type.activityJoin.awardDialog}}"> -->
    <!-- <view class="layer-succ-top"> -->
      <view class="layer-join">
        <view class="layer-text">请在规定时内添加客服 完成中奖任务</view>
      </view>
      <!-- <view class="layer-btn"><view class="draw-link" @tap="nav_to(0)"  url="/pages/task/drawTask">去领奖</view></view> -->
      <view class="layer-close" @tap="close(0)"><text class="iconfont icon-guanbi"></text></view>
    </view>
    <view class="layer-succ" wx:if="{{showType == 0}}">
    <!-- <view class="layer-succ" wx:if="{{activityJoinData.show}}"> -->
    <!-- <view class="layer-succ"> -->
      <view class="layer-container">
        <view class="layer-code">{{activityJoinData.awardNO[0]}}</view>
        <view class="layer-text">获得抽奖码</view>
        <button open-type ="share" class="layer-btn">召唤好友提高中奖率</button>
      </view>
      <view class="layer-close" @tap="close(1)"><text class="iconfont icon-guanbi"></text></view>
    </view>
    <view class="layer-error-com" wx:if="{{showType == 1}}">
    <!-- <view class="layer-error-com" wx:if="{{type.activityJoin.addAwardNum>0}}"> -->
    <!-- <view class="layer-error-com"> -->
      <view class="layer-error-container">
        <view class="layer-up">中奖率UP</view>
        <view class="layer-code">恭喜您获得{{type.activityJoin.addAwardNum}}个抽奖码</view>
        <view class="layer-zl">已有{{type.activityJoin.totalInviteNum}}个好友前来助力</view>
      </view>
      <view class="layer-btn-container">
        <view class="layer-btn-yq" @tap="nav_to(1)">查看我的邀请</view>
        <button open-type ="share" class="layer-btn-go">继续邀请</button>
      </view>
      <view class="layer-close" @tap="close(2)"><text class="iconfont icon-guanbi"></text></view>
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'
import { getStore, connect } from 'wepy-redux'
const store = getStore()
console.log('store', store)
@connect({
  type(state) {
    // let simulateData = state.home.simulateData
    // return simulateData
    return state.taskDetail.task
  }
})
export default class Layer extends wepy.component {
  props = {
    activityId: {
      default: 0
    },
    activityJoinData: {
      default: {}
    }
  };
  data = {
    showType: -1
  }
  onLoad() {
    // this.getType()
  }
  computed = {
    getType() {
      if (this.type && this.type.activityJoin) {
        if (this.activityJoinData.show) {
          this.showType = 0
        } else if (this.type.activityJoin.awardDialog) {
          this.showType = 2
        } else if (this.type.activityJoin.addAwardNum > 0) {
          this.showType = 1
        }
      }
    }
  }
  methods = {
    close(index) {
      index *= 1
      // 0表示是在中奖框关闭的，1是邀请码弹窗 2抽奖码或者
      if (this.type.activityJoin.awardDialog && index === 1) {
        this.activityJoinData.show = false
        return
      }
      this.$emit('type', false)
    },
    nav_to(index) {
      index *= 1
      let url = ''
      switch (index) {
        case 0:
          url = `/pages/task/drawTask?activityId=${this.activityId}`
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
