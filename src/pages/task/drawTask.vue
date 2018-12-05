<style lang="scss">
Page {
  background-color: #fae8e8;
}
.task-com {
  padding-bottom:88rpx;
  .task-time {
    height: 72rpx;
    background: rgba(252, 237, 210, 1);
    font-size: 24rpx;
    font-weight: 500;
    color: rgba(235, 57, 57, 1);
    line-height: 72rpx;
    text-align: center;
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
      font-weight: 400;
      color: rgba(155, 155, 155, 1);
      line-height: 40rpx;
      text-align: center;
    }
    .task-step-com {
      position: relative;
      width: 80%;
      display: flex;
      margin: 80rpx auto 0 auto;
      justify-content: space-between;
      justify-content: center;
      @each $name in (1, 2, 3, 4) {
        .task-step#{$name} {
          position: relative;
          width: 25%;
          z-index: 2;
          margin-left: 43rpx;
          @if ($name == 1) {
            .task-step-text {
              margin-left: -30rpx;
              top: -50rpx;
            }
          }
          @if ($name == 2) {
            .task-step-text {
              margin-left: -30rpx;
              top: 50rpx;
            }
          }
          @if ($name == 3) {
            .task-step-text {
              top: -50rpx;
              left: -58rpx;
            }
          }
          @if ($name == 4) {
            .task-step-text {
              margin-left: -30rpx;
              top: 50rpx;
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
        width: 75%;
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
    font-weight: 500;
    color: #9b9b9b;
    line-height: 40rpx;
    text-align: center;
    margin: 34rpx auto 32rpx auto;
    .icon_box{
      width:32rpx;
      height:32rpx;
      margin-left:8rpx;
    }
  }
  .task-name {
    font-size: 24rpx;
    font-weight: 400;
    text-align: center;
    color: rgba(204, 212, 225, 1);
    line-height: 33rpx;
    margin-top: 35rpx;
    margin-bottom: 115rpx;
  }
  .jkLogo_box{
    margin-top:51rpx;
  }
  .task-btn {
    width: 500rpx;
    height: 88rpx;
    line-height: 88rpx;
    text-align: center;
    margin: 59rpx auto 65rpx auto;
    border-radius: 44rpx;
    font-size: 28rpx;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    &.red{
      background: linear-gradient(90deg,#F3466B,#EE3A3A);
    }
    &.gray{
      background: #ccc;
    }
  }
  .operation_steps_box{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.6);
    z-index:2;
    .operation_steps{
      position:relative;
      width:600rpx;
      height:800rpx;
    }
    .close{
      position:absolute;
      top:24rpx;
      right:24rpx;
      width:32rpx;
      height:32rpx;
    }
  }
}
</style>
<template>
  <view class="task-com">
    <view class="task-time" wx:if="{{s>-1}}">距离完成{{stape2?'赠品领取':'中奖'}}任务截止时间：{{d}}时 {{m}}分 {{s}}秒</view>
    <view class="task-step">
      <view class="task-step-header">按以下步骤完成{{stape2?'赠品领取':'中奖'}}步骤</view>
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
          <view class="task-step-text">上传订单编号</view>
        </view>
        <view class="task-step4">
          <view class="task-icon-com"><text class="iconfont icon-duigou"></text></view>
          <view class="task-step-text">免单返现</view>
        </view>
        <view class="task-step-line"></view>
      </view>
    </view>
    <Step1 :stepData.sync="stepData" :activityId.sync="activityId"></Step1>
    <Step2 :activityId.sync="activityId" :stape2.sync="stape2"></Step2>
    <!-- 返回首页 -->
    <navigator wx:if="{{back_to_index}}" url="/pages/index/index" hover-class="none" class="back_to_index" open-type="switchTab">
      <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/back_to_index.png"/>
    </navigator>
    <TaskLayer wx:if="{{taskLayer}}"></TaskLayer>
    <view class="jkLogo_box">
      <jkLogo></jkLogo>
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'
import Step1 from '../../components/step1'
import Step2 from '../../components/step2'
import TaskLayer from '../../components/tasklayer'
import { timer } from '../../utils/utils.js'
import { getStore, connect } from 'wepy-redux'
import { getDrawData } from '../../store/actions'
import jkLogo from '../../components/yinju/jk_logo'
const store = getStore()
const state = store.getState()
const shopInfo = state.home.shopInfo
@connect({
  stepData(state) {
    // state.drawTask.data.status = 3
    // console.log('state.drawTask.data2', state.drawTask.data)
    return state.drawTask.data
  }
})
export default class DrawTask extends wepy.page {
  config = {
    navigationBarTitleText: '中奖任务'
  };
  data = {
    d: 0,
    m: 0,
    s: 0,
    activityId: 0,
    taskLayer: false,
    timer: '',
    // 回到首页按钮
    back_to_index: false,
    // 有则表示是从免单商品过来的
    stape2: ''
  };
  components = {
    Step1: Step1,
    Step2: Step2,
    jkLogo,
    TaskLayer
  };

  events = {
    reLoad() {
      this.getData()
    }
  }
  getData() {
    let _data = {
      userId: state.home.shopInfo.userId,
      activityId: this.activityId
      // userId: 37,
      // activityId: 5
    }
    store.dispatch(getDrawData(_data)).then(res => {
      if (res.payload.code !== 0) {
        wepy.showToast({
          title: res.payload.message,
          icon: 'none'
        })
        // 不显示时间
        this.s = -1
        this.$apply()
      } else if (res.payload.code === 0) {
        // if (state.drawTask.data.status === 2 || state.drawTask.data.status === -2 ) {
        //   this.taskLayer = true
        // this.$apply()
        // }
        if (res.payload.status === 2 || res.payload.status === -2) {
          this.taskLayer = true
        }
        let timerArr = timer(res.payload.cutoffTime)
        this.d = timerArr[0] || 0
        this.m = timerArr[1] || 0
        this.s = timerArr[2] || 0
        this.$apply()
        this.timer = (setInterval(() => {
          let timerArr = timer(res.payload.cutoffTime)
          this.d = timerArr[0] || 0
          this.m = timerArr[1] || 0
          this.s = timerArr[2] || 0
          this.$apply()
        }, 1000))
      }
    })
  }
  onLoad(options) {
    console.log('drawRask', options)
    this.activityId = options.activityId || 1
    this.stape2 = options.stape2 || ''
    if (options.stape2) {
      wepy.setNavigationBarTitle({
        title: '免单赠品领取任务'
      })
    }
    this.$apply()
    this.getData()
    // 是否显示回到首页的按钮
    if (shopInfo.from > -1) {
      this.back_to_index = true
    }
  }
  onUnload() {
    clearInterval(this.timer)
    console.log('清除数据库')
  }
}
</script>
