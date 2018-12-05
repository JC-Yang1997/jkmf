<style lang="scss">
Page {
  background-color: #fae8e8;
}
.task-com {
  position:relative;
  padding-bottom:120rpx;
  .task-time {
    height: 72rpx;
    background: rgba(252, 237, 210, 1);
    font-size: 24rpx;
    font-weight: 500;
    color: rgba(235, 57, 57, 1);
    line-height: 72rpx;
    text-align: center;
  }
  .task_goal{
    width:93%;
    padding:14rpx 21rpx 20rpx 37rpx;
    margin:25rpx auto 0;
    border-radius:20rpx;
    background-color:#fff;
    box-sizing:border-box;
    .title{
      margin-bottom:6rpx;
      font-size:28rpx;
      color:#333333;
      line-height:48rpx;
      font-weight:600;
    }
    .join_num{
      font-size:24rpx;
      color:#EB3939;
      line-height:32rpx;
    }
  }
  .task-step {
    width: 93%;
    height: 250rpx;
    margin: 20rpx auto 0 auto;
    background: rgba(255, 255, 255, 1);
    border-radius: 20rpx;
    padding-top: 20rpx;
    .task-step-header {
      font-size: 28rpx;
      font-weight: 00;
      color: #333333;
      line-height: 40rpx;
      text-align: center;
    }
    .task-step-com {
      position: relative;
      width: 560rpx;
      display: flex;
      margin: 80rpx auto 0 auto;
      justify-content: space-between;
      @each $name in (1, 2, 3, 4) {
        .task-step#{$name} {
          position: relative;
          z-index: 2;
          .task-step-text{
            width:100rpx;
            left:50%;
            margin-left:-50rpx;
          }
          @if ($name == 1) {
            .task-step-text {
              top: -50rpx;
            }
          }
          @if ($name == 2) {
            .task-step-text {
              top: 50rpx;
            }
          }
          @if ($name == 3) {
            .task-step-text {
              top: -50rpx;
            }
          }
          .task-icon-com {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 36rpx;
            width: 36rpx;
            border-radius: 50%;
            background: rgba(255, 102, 71, 1);

            .iconfont {
              font-size: 20rpx;
              color: #fff;
            }
          }
          .task-step-text {
            position: absolute;
            font-size: 24rpx;
            font-weight: 400;
            color: #ff6647;
            line-height: 33rpx;
          }
        }
      }
      .task-step-line {
        position: absolute;
        width: 100%;
        height: 20rpx;
        top: 8rpx;
        background: #fee3dd;
        border-radius: 14rpx;
        z-index: 1;
      }
    }
  }
  .task-header {
    font-size: 28rpx;
    // font-weight: 600;
    color: #9B9B9B;
    line-height: 40rpx;
    text-align: center;
    margin: 34rpx auto 32rpx auto;
    .text_box{
      margin-right:27rpx;
    }
    .icon_box{
      width:32rpx;
      height:32rpx;
    }
  }
  .task-name {
    font-size: 24rpx;
    font-weight: 400;
    text-align: center;
    color: rgba(204, 212, 225, 1);
    line-height: 33rpx;
    margin-top: 35rpx;
  }
  .task-btn {
    width: 500rpx;
    height: 88rpx;
    margin: 60rpx auto 0;
    text-align: center;
    line-height: 88rpx;
    background: linear-gradient(
      118deg,
      rgba(243, 70, 107, 1) 0%,
      rgba(238, 58, 58, 1) 100%
    );
    border-radius: 74rpx;
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
}
</style>
<template>
  <view class="task-com">
    <view class="task-time" wx:if="{{s>-1}}">距离完成中奖任务截止时间：{{d}}时 {{m}}分 {{s}}秒</view>
    <view class="task_goal">
      <view class="title">红包任务:{{stepData.title|| '标题'}}</view>
      <view class="join_num">红包：{{stepData.redPackMoney|| 0}}</view>
    </view>
    <view class="task-step">
      <view class="task-step-header">按以下步骤完成领奖步骤</view>
      <view class="task-step-com">
        <view class="task-step1">
          <view class="task-icon-com"><text class="iconfont icon-duigou"></text></view>
          <view class="task-step-text">上传截图</view>
        </view>
        <view class="task-step2">
          <view class="task-icon-com"><text class="iconfont icon-duigou"></text></view>
          <view class="task-step-text">等待审核</view>
        </view>
        <view class="task-step3">
          <view class="task-icon-com"><text class="iconfont icon-duigou"></text></view>
          <view class="task-step-text">获取红包</view>
        </view>
        <!-- <view class="task-step4">
          <view class="task-icon-com"><text class="iconfont icon-duigou"></text></view>
          <view class="task-step-text">免单返现</view>
        </view> -->
        <view class="task-step-line"></view>
      </view>
    </view>
    <Step1 :activityId.sync="activityId"></Step1>
    <Step2 wx:if="{{stepData.status == 3}}" :activityId.sync="activityId"></Step2>
    <view class="jk_logo_box">
      <jkLogo></jkLogo>
    </view>
    <navigator wx:if="{{back_to_index}}" url="/pages/index/index" hover-class="none" class="back_to_index" open-type="switchTab">
      <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/back_to_index.png"/>
    </navigator>
    <giftLayer wx:if="{{layerShow}}"></giftLayer>
    
  </view>
</template>
<script>
import wepy from 'wepy'
import Step1 from '../../components/yinju/yinjuStep'
import Step2 from '../../components/yinju/step2'
import jkLogo from '../../components/yinju/jk_logo'
import { timer } from '../../utils/utils.js'
import { getStore, connect } from 'wepy-redux'
import { getDrawData } from '../../store/actions'
import giftLayer from '../../components/yinju/giftLayer'
const store = getStore()
const state = store.getState()
const shopInfo = store.getState().home.shopInfo
console.log('shopInfo', shopInfo, state)
@connect({
  stepData(state) {
    state.drawTask.data.status = 0
    return state.drawTask.data
  }
})
export default class DrawTask extends wepy.page {
  config = {
    navigationBarTitleText: '红包任务'
  }
  data = {
    d: 0,
    m: 0,
    s: 0,
    activityId: '',
    layerShow: false,
    timer: '',
    // 回到首页按钮
    back_to_index: false
  }
  components = {
    Step1: Step1,
    Step2: Step2,
    jkLogo,
    giftLayer
  }
  events = {
    reload() {
      this.getData()
    }
  }
  getData() {
    let _data = {
      userId: shopInfo.userId,
      activityId: this.activityId
    }
    // let _data = {
    //   userId: 36,
    //   activityId: 3
    // }
    store.dispatch(getDrawData(_data)).then(res => {
      if (res.payload.code !== 0) {
        wepy.showToast({
          title: res.payload.message,
          icon: 'none'
        })
      } else if (res.payload.code === 0) {
        // if (state.drawTask.data.status === -2 || state.drawTask.data.status === 3) {
        //   this.layerShow = true
        //   this.$apply()
        // }
        if (res.payload.status === -2 || res.payload.isDialog) {
          this.layerShow = true
        }
        let timerArr = timer(res.payload.cutoffTime)
        this.d = timerArr[0] || 0
        this.m = timerArr[1] || 0
        this.s = timerArr[2] || 0
        this.timer = (setInterval(() => {
          let timerArr = timer(res.payload.cutoffTime)
          this.d = timerArr[0] || 0
          this.m = timerArr[1] || 0
          this.s = timerArr[2] || 0
          this.$apply()
        }, 1000))
        this.$apply()
      }
    })
  }
  onLoad(options) {
    this.activityId = options.activityId || 1
    this.$apply()
    this.getData()
    // 是否显示回到首页的按钮
    if (shopInfo.from > -1) {
      this.back_to_index = true
    }
  }
}
</script>
