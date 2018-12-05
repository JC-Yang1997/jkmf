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
        width: 182rpx;
        height: 80rpx;
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
        background-color: #fae8e8;
      }
      .progress-total {
        width: 300rpx;
        height: 36rpx;
        // padding: 4rpx 24rpx;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        background: linear-gradient(
          118deg,
          rgba(243, 70, 107, 1) 0%,
          rgba(238, 58, 58, 1) 100%
        );
        border-radius: 18rpx;
        color: #fff;
        font-size: 20rpx;
        .progress-total_text{
          position:absolute;
          top:0;
          left:24rpx;
          line-height:36rpx;
        }
      }
      .percentage {
        position: absolute;
        right: 16rpx;
        top: 0;
        height: 36rpx;
        line-height:36rpx;
        // vertical-align: middle;
        font-size: 20rpx;
        font-weight: 500;
        color: rgba(235, 57, 57, 1);
        z-index:2;
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
        line-height:48rpx;
        padding-right:70rpx;
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

.jkLogo_box{
  margin-top:53rpx;
}
</style>
<template>
  <view class="taskDetail">
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
            <view class="progress-total" style="width:{{list.percent}}">
              <view class="progress-total_text">
                已参与{{list.activityDetail.joinCount}}/{{list.activityDetail.condPersionCount}}
              </view>
            </view>
            <view class="percentage">{{list.percent}}</view>
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
        <!-- <view class="task-rule">活动规则</view> -->
      </view>
    </view>
    <view class="taskContainer">
      <view class="task-header"> 
        <view class="task-text-detail" @tap="nav_to(0)">奖品详情<text class="iconfont icon-jinru"></text></view>
        <view class="task-comm">
          <taskState :list.sync="list" :activityId.sync="activityId" :activityDefId.sync="activityDefId"></taskState>
          <newComerUser  :userDatas.sync="list" :activityId.sync="activityId"></newComerUser>
          <taskTules></taskTules>
        </view>
      </view>  
    </view>
    <view class="jkLogo_box">
      <jkLogo></jkLogo>
    </view>
    <view class="task-share">
      <button open-type="share" class="task-share-btn">分享好友</button>
    </view>
    <DrawCode wx:if="{{checkShow}}" :list.sync="list" :layerType.sync="layerType" :checkShow.sync="checkShow"></DrawCode>
    <navigator wx:if="{{back_to_index}}" url="/pages/index/index" hover-class="none" class="back_to_index" open-type="switchTab">
      <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/back_to_index.png"/>
    </navigator>
  </view>
</template>
<script>
import wepy from 'wepy'
import taskState from '../../components/yinju/task_state'
import newComerUser from '../../components/yinju/newComerUser'
import taskTules from '../../components/yinju/task_rules'
import jkLogo from '../../components/yinju/jk_logo'
import DrawCode from '../../components/drawCode'
import Layer from '../../components/layer'
import { dateFtt } from '../../utils/utils.js'
import { getStore, connect } from 'wepy-redux'
import { getTaskDetail } from '../../store/actions'
import { share } from '../../utils/utils'
const store = getStore()
const shopInfo = store.getState().home.shopInfo
@connect({
  list(state) {
    let _data = state.taskDetail.task
    if (_data.activityDetail) {
      this.activityDefId = _data.activityJoin.activityDefId
      // state.taskDetail.task.activityJoin.joinStatus = 10
      _data.activityDetail.cutoffTime = dateFtt(_data.activityDetail.cutoffTime)
      // 进度条百分比
      _data.percent = Math.floor(_data.activityDetail.joinCount / _data.activityDetail.condPersionCount * 100) + '%'
    }
    // if (state.taskDetail.task.activityJoin.joinStatus === 6) {
    //   state.taskDetail.task.activityJoin.redPackStatus
    // }
    return _data
  }
})
export default class Index extends wepy.page {
  config = {
    navigationBarTitleText: '免单赠品领取任务'
  }
  onLoad(options) {
    this.activityId = options.activityId || 2
    // 弹出抽奖码
    if (options.checkShow) {
      this.checkShow = true
    }
    // 是否显示回到首页的按钮
    if (shopInfo.from > -1) {
      this.back_to_index = true
    }
    this.$apply()
    this.getTaskDetail()
  }
  methods = {
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
    }
  }
  onShareAppMessage() {
    let params = {
      title: '你在本店购买的商品可以发起免单啦',
      activityId: this.activityId,
      picUrl: 'http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/share_redpacket.png',
      from: 1,
      newManStartId: this.list.activityDetail.newManStartId
    }
    let returnData = share(params)
    return returnData
  }
  data = {
    taskType: 1,
    checkShow: false,
    layerType: 1,
    activityId: '',
    activityDefId: '',
    // 回到首页按钮
    back_to_index: false
  }
  components = {
    taskState,
    newComerUser,
    Layer,
    taskTules,
    jkLogo,
    DrawCode
  }
  getTaskDetail() {
    let params = {
      activityId: this.activityId,
      userId: shopInfo.userId
    }
    // let params = {
    //   activityId: 926,
    //   userId: shopInfo.userId
    // }
    store.dispatch(getTaskDetail(params))
  }
}
</script>
