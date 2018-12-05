<style lang="scss">
Page {
  background-color: #f7f7f7;
}
.taskDetail {
  width: 100%;
  padding-bottom:179rpx;
  overflow: hidden;
  .taskHeader {
    width: 100%;
    .taskImage {
      position: relative;
      width: 100%;
      height: 750rpx;
      overflow:hidden;
      image {
        width: 100%;
        height: 100%;
      }
      .task-price {
        position: absolute;
        height: 80rpx;
        padding:0 20rpx;
        line-height: 80rpx;
        bottom: 152rpx;
        left: 0;
        background: linear-gradient(
          90deg,
          rgba(243, 70, 107, 1) 0%,
          rgba(238, 58, 58, 1) 100%
        );
        border-radius: 0 40rpx 40rpx 0;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        .task-price-text {
          font-size: 24rpx;
          vertical-align: middle;
        }
        .task-price-num {
          font-size: 36rpx;
        }
      }
      .taskmun {
        position: absolute;
        height: 97rpx;
        width: 126rpx;
        top: 0;
        right: 24rpx;
        background-image: url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/drawimg.png');
        background-repeat: no-repeat;
        background-size: cover;
        text-align: center;
        font-size: 36rpx;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        .task-draw-num {
          margin-top: 5rpx;
        }
        .task-draw-text {
          font-size: 20rpx;
        }
      }
    }
    .taskTime {
      position: absolute;
      width: 100%;
      height: 88rpx;
      left: 0;
      bottom: 0;
      padding: 24rpx 26rpx;
      background: rgba(255, 255, 255, 0.5);
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .progress {
        position: relative;
        height: 36rpx;
        width: 60%;
        border-radius: 18rpx;
        border: 2rpx solid #fe7b7b;
        background-color: #FBD7D7;
        box-sizing:border-box;
        overflow:hidden;
      }
      .progress-total {
        width: 300rpx;
        height: 32rpx;
        // padding: 4rpx 24rpx 4rpx 24rpx;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        background: linear-gradient(
          118deg,
          rgba(243, 70, 107, 1) 0%,
          rgba(238, 58, 58, 1) 100%
        );
        border-radius: 16rpx;
        color: #fff;
        font-size: 20rpx;
      }
      .progress-text{
        position: absolute;
        font-size:20rpx;
        color: #fff;
        top: 4rpx;
        left:22rpx;
      }
      .percentage {
        position: absolute;
        right: 0;
        top: 0;
        padding: 4rpx 16rpx;
        height: 36rpx;
        line-height: 34rpx;
        vertical-align: middle;
        font-size: 20rpx;
        font-weight: 500;
        color: rgba(235, 57, 57, 1);
      }
      .task-lottery {
        font-size: 24rpx;
        font-weight: 500;
        color: rgba(235, 57, 57, 1);
        line-height: 33rpx;
      }
    }
    .task-title {
      position: relative;
      background-color: #fff;
      padding: 19rpx 24rpx 20rpx 24rpx;
      .task-title-text {
        // height: 48rpx;
        line-height:48rpx;
        padding-right:70rpx;
        display: block;
        width: 90%;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        font-size: 28rpx;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        text {
          margin-left: 21rpx;
          padding: 4rpx 6rpx;
          background: rgba(240, 242, 247, 1);
          border-radius: 18rpx;
          font-size: 20rpx;
          font-weight: 500;
          color: rgba(155, 155, 155, 1);
          line-height: 28rpx;
        }
      }
      .task-title-time {
        height: 32rpx;
        font-size: 24rpx;
        font-weight: 400;
        color: rgba(155, 155, 155, 1);
        line-height: 32rpx;
      }
      .share{
        position: absolute;
        top: 19rpx;
        right: 32rpx;
        display: inline-block;
        display:flex;
        align-items: center;
        justify-content: center;
        width: 50rpx;
        height: 50rpx;
        padding: 0;
        font-size: 16rpx;
        background-color: #fff;
        &::after{
          border: 0;
        }
        .iconfont {
          line-height:normal;
          height: 32rpx;
          width: 32rpx;
          color: #eb3939;
        }
      }
    }
    .task-tip {
      margin-top: 20rpx;
      width: 100%;
      height: 88rpx;
      background-color: #fdebf1;
    }
  }
  .taskContainer {
    .task-header {
      .task-text-detail {
        width: 100%;
        height: 88rpx;
        padding: 0 22rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        font-size: 28rpx;
        font-weight: 400;
        color: rgba(155, 155, 155, 1);
        line-height: 32rpx;
        box-sizing: border-box;
      }
      .task-comm {
        padding: 20rpx 24rpx;
      }
    }
  }
  .task-share {
    position:fixed;
    bottom:51rpx;
    left:0;
    width:100%;
    margin-top: 50rpx;
  }
  .task-share-name {
    text-align: center;
    font-size: 24rpx;
    font-weight: 400;
    color: rgba(204, 212, 225, 1);
    line-height: 33rpx;
  }
  .task-share-btn {
    width: 67%;
    height: 80rpx;
    // margin: 40rpx auto 80rpx auto;
    background: linear-gradient(
      118deg,
      rgba(243, 70, 107, 1) 0%,
      rgba(238, 58, 58, 1) 100%
    );
    text-align: center;
    font-size: 28rpx;
    font-weight: 500;
    line-height: 80rpx;
    border-radius: 74rpx;
    color: rgba(255, 255, 255, 1);
  }
}
.task-tip {
  position: relative;
  image {
    width: 70rpx;
    height: 70rpx;
  }
}
.task-tip {
  .task-tip-com {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 24rpx;
    .task-tips {
      font-size: 28rpx;
      font-weight: 500;
      color: rgba(235, 57, 57, 1);
      line-height: 40rpx;
      margin-left: 21rpx;
    }
  }
  .task-rule {
    position: absolute;
    width: 175rpx;
    height: 60rpx;
    right: 0;
    top: 15rpx;
    font-size: 24rpx;
    color: #fff;
    text-align: center;
    line-height: 60rpx;
    background: linear-gradient(
      118deg,
      rgba(243, 70, 107, 1) 0%,
      rgba(238, 58, 58, 1) 100%
    );
    border-radius: 44rpx 0px 0px 44rpx;
  }
}
.taks_rules{
  display:flex;
  align-items:center;
  justify-content:center;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,.6);
  .content{
    width:600rpx;
    padding:24rpx 24rpx 32rpx;
    background-color:#fff;
    border-radius:20rpx;
    .item{
      color:#9B9B9B;
      font-size:28rpx;
      line-height:48rpx;
    }
  }
}
</style>
<template>
  <view class="taskDetail">
    <!-- <view @tap="test">模拟参与抽奖</view> -->
    <view class="taskHeader">
      <view class="taskImage">
        <image mode="widthFix" src="{{list.activityDetail.goods.picUrl}}"/>
        <view class="taskmun">
          <view class="task-draw-num">{{list.activityDetail.hitsPerDraw}}</view>
          <view class="task-draw-text">中奖名额</view>
        </view>
        <view class="task-price">
          <text class="task-price-text">价值：</text>
          <text class="task-price-num">￥{{list.activityDetail.goods.price}}</text>
        </view>
        <view class="taskTime">
          <view class="progress">
            <view class="progress-total" style="width:{{ (list.activityDetail.joinCount / list.activityDetail.condPersionCount)*477 }}rpx"></view>
            <view class="progress-text">已参与{{list.activityDetail.joinCount}}/{{list.activityDetail.condPersionCount}}</view>
            <view class="percentage">{{ list.activityDetail.percentage }}%</view>
          </view>
          <view class="task-lottery">满{{list.activityDetail.condPersionCount}}人自动开奖</view>
        </view>
      </view>
      <view class="task-title">
        <view class="task-title-text">{{list.activityDetail.goods.title}}</view>
        <view class="task-title-time">活动时间：<text>{{list.activityDetail.startTime}}-{{list.activityDetail.endTime}}</text></view>
        <button open-type="share" class="share">
          <view class="iconfont icon-fenxiang"></view>
        </button>
      </view>
      <view class="task-tip">
        <view class="task-tip-com">
          <image src="https://img-test.wxyundian.cn/tasks.png"/>
          <view class="task-tips">分享好友 参与免单抽奖</view>
        </view>
        <view class="task-rule" @tap="taks_rules_toggle">活动规则</view>
      </view>
    </view>
    <view class="taskContainer">
      <view class="task-header"> 
        <view class="task-text-detail" @tap="nav_to(0)">奖品详情<text class="iconfont icon-jinru"></text></view>
        <view class="task-comm">
          <DrawTask  :user.sync="list" :activityId.sync="activityId" :pub_uid.sync='pub_uid'></DrawTask>
          <TaskUser  :userDatas.sync="list" :activityId.sync="activityId"></TaskUser>
          <!-- <TaskList></TaskList> -->
        </view>
      </view>  
    </view>
    <jkLogo></jkLogo>
    <view class="task-share">
      <button open-type="share" class="task-share-btn">分享好友</button>
    </view>
    <view class="taks_rules" wx:if="{{taks_rules_show}}" @tap="taks_rules_toggle">
      <view class="content">
        <view class="item">1、用户参与抽奖后，需不断分享好友以此来增加自身抽奖码，抽奖码越多，中奖概率越大</view>
        <view class="item">2、开奖后，中奖用户需要在规定时间内按照规则完成领奖，未在规定时间内完成则中奖名额失效。</view>
        <view class="item">3、上一名中奖名额失效后，系统将自动抽取1名用户获得中奖名额，若该用户仍未完成领奖，则自动抽取一名，总共额外抽取2次</view>
        <view class="item">4、所有未中奖用户均参与成长任务获得红包奖励，红包任务需要在规定时间内完成。</view>
        <view class="item">5、部分未中奖用户有机会领取到店铺专享优惠券</view>
        <view class="item">6、活动期间若有相关问题可及时联系客服处理</view>
        <view class="item">7、此次活动最终解释权归集客抽奖所有</view>
        <view class="item">8、参与此次抽奖活动者均视为了解并认可此活动规则</view>
      </view>
    </view>
    <Layer wx:if="{{TaskDetailShow}}" :activityId.sync="activityId" :activityJoinData.sync="activityJoinData"> </Layer>
    <DrawCode wx:if="{{checkShow}}" :list.sync="list" :layerType.sync="layerType" :checkShow.sync="checkShow"></DrawCode>
    <!-- 返回首页 -->
    <navigator wx:if="{{back_to_index}}" url="/pages/index/index" hover-class="none" class="back_to_index" open-type="switchTab">
      <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/back_to_index.png"/>
    </navigator>
  </view>
</template>
<script>
import wepy from 'wepy'
import DrawTask from '../../components/drawTask'
import TaskList from '../../components/taskList'
import TaskUser from '../../components/taskUser'
import Layer from '../../components/layer'
import jkLogo from '../../components/yinju/jk_logo'
import { dateFtt } from '../../utils/utils.js'
import { getStore, connect } from 'wepy-redux'
import { getTaskDetail } from '../../store/actions'
import DrawCode from '../../components/drawCode'
// 获取公共的分享
import {share} from '../../utils/utils'
const store = getStore()
const state = store.getState()
const shopInfo = state.home.shopInfo
@connect({
  list(state) {
    // return state.home.simulateData
    let _data = state.taskDetail.task.activityDetail
    if (_data) {
      _data.percentage = Math.floor((_data.joinCount / _data.condPersionCount) * 100)
      // state.taskDetail.task.activityJoin.joinStatus = 10
      // state.taskDetail.task.activityJoin.redPackStatus = 3
      state.taskDetail.task.activityDetail.cutoffTime = dateFtt(state.taskDetail.task.activityDetail.cutoffTime)
      // state.taskDetail.task.activityJoin.awardDialog = true
      let text = ''
      switch (state.taskDetail.task.activityJoin.redPackStatus) {
        case -1:
          text = '红包已失效'
          break
        case 3:
          text = '领奖成功'
          break
        case 1:
          text = '领个红包吧'
          break
        case 0:
          text = ''
          break
      }
      state.taskDetail.task.activityJoin.redPacketText = text
    }
    return state.taskDetail.task
  }
})
export default class taskDetail extends wepy.page {
  config = {
    navigationBarTitleText: '抽奖详情'
  }
  data = {
    TaskDetailShow: false,
    type: 1,
    taskType: 1,
    taskDetail: {},
    activityId: '',
    pub_uid: '',
    activityJoinData: '',
    layerType: 1,
    // 抽奖码弹窗
    checkShow: false,
    // 回到首页按钮
    back_to_index: false,
    taks_rules_show: false
  }
  components = {
    DrawTask: DrawTask,
    TaskList: TaskList,
    TaskUser,
    Layer: Layer,
    DrawCode,
    jkLogo
  }
  onLoad(options) {
    console.log('taskDetail', options)
    // 从邀请进入
    this.activityId = options.activityId || 1
    this.pub_uid = shopInfo.pub_uid || ''
    // 弹出抽奖码
    if (options.checkShow) {
      this.checkShow = true
    }
    // 是否显示回到首页的按钮
    if (shopInfo.from > -1) {
      this.back_to_index = true
    }
    // this.$apply()
    this.getTaskDetail()
  }
  events = {
    'type': (type, $event) => {
      if ($event.source.$name === 'DrawTask') {
        this.TaskDetailShow = true
        // 让弹窗显示
        type.show = true
        this.activityJoinData = type
        this.getTaskDetail()
      } else {
        this.TaskDetailShow = type
      }
    }
  }
  methods = {
    test() {
      this.TaskDetailShow = true
      this.activityJoinData = {show: true}
      this.getTaskDetail()
    },
    nav_to(index) {
      index *= 1
      let url = ''
      switch (index) {
        case 0:
          url = `/pages/task/goodDetail?activityId=${this.activityId}`
      }
      wepy.navigateTo({
        url
      })
    },
    taks_rules_toggle() {
      this.taks_rules_show = !this.taks_rules_show
    }
  }
  toggleToast(e) {
    console.log(e.detail)
  }
  getTaskDetail() {
    // 加了一层逻辑判断,从分享进入
    let params = {
      activityId: this.activityId,
      userId: state.home.shopInfo.userId
    }
    if (shopInfo.activityId && shopInfo.activityId * 1 === this.activityId * 1) {
      params.pub_uid = this.pub_uid
    }
    store.dispatch(getTaskDetail(params)).then(res => {
      let payload = res.payload
        // 是否显示弹窗
      if (payload.activityJoin.awardDialog || payload.activityJoin.addAwardNum > 0) {
        this.TaskDetailShow = true
        this.$apply()
      }
    })
    // 过段时间删除
    // if (shopInfo.activityId && shopInfo.activityId * 1 === this.activityId * 1) {
    //   let params = {
    //     activityId: this.activityId,
    //     pub_uid: this.pub_uid,
    //     userId: state.home.shopInfo.userId
    //   }
    //   store.dispatch(getTaskDetail(params)).then(res => {
    //     let payload = res.payload
    //     // 是否显示弹窗
    //     if (payload.activityJoin.awardDialog || payload.activityJoin.addAwardNum > 0) {
    //       this.TaskDetailShow = true
    //       this.$apply()
    //     }
    //   })
    // } else {
    //   let params = {
    //     activityId: this.activityId,
    //     userId: state.home.shopInfo.userId
    //   }
    //   store.dispatch(getTaskDetail(params)).then(res => {
    //     let payload = res.payload
    //     // 是否显示弹窗
    //     if (payload.activityJoin.awardDialog || payload.activityJoin.addAwardNum > 0) {
    //       this.TaskDetailShow = true
    //       this.$apply()
    //     }
    //   })
    // }
  }
  onShareAppMessage() {
    let params = {
      activityId: this.activityId,
      picUrl: this.list.activityDetail.goods.picUrl,
      title: `邀请你参加《奖品：${this.list.activityDetail.goods.title}》免单抽奖`,
      from: 2,
      newManStartId: this.list.activityDetail.newManStartId
    }
    let returnData = share(params)
    return returnData
  }
}
</script>
