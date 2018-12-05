<template>
  <view class="y-box">
    <view class="service">
    <view class="task-title-box">
      <view class="title">
        <view class="task-title-bgimg"></view>
        <view>免单赠品</view>
      </view>
    </view>

    <view class="task-list-box" @tap="toNext1('{{item}}')" wx:for='{{newManList}}' wx:key='{{item.activityDefId}}'>
      <image src='{{item.picUrl}}' />
      <image class="img" 
             wx:if="{{item.actStatus == 3}}"
             src='https://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/time.png' />
      <image class="img" 
             wx:if="{{item.actStatus == 4}}"
             src='https://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/icon_doen.png' />
      <view>
        <view>奖品：{{item.title}}</view>
        <view>价值￥{{item.price}}</view>
        <view>库存数： {{item.stock}}</view>
        <view class="router">
          <view wx:if="{{item.actStatus == 0}}" class="st st0">0.1元领取礼品</view>
          <view wx:if="{{item.actStatus == 3}}" class="st st0">赠品领取中</view>
          <view wx:if="{{item.actStatus == 4}}" class="st st0">赠品已领取</view>
          <view wx:if="{{item.actStatus == 2}}" class="st st2">库存不足</view>
        </view>
      </view>
    </view>


    <view class="task-title-box">
      <view class="title">
        <view class="task-title-bgimg"></view>
        <view>免单抽奖商品</view>
      </view>
      <view class="alert-info" @tap='showAlert'>
        <i class="iconfont icon-yiwen"/>
        <view>为什么要认领商品</view>
      </view>
    </view>

    <view class="task-list-box" @tap="toNext2('{{item}}')" wx:for="{{orderBackList}}" wx:key="{{item.activityId}}">
      <image src="{{item.picUrl}}" />
      <view>
        <view>奖品：{{item.title}}</view>
        <view>价值￥{{item.price}}</view>
        <view>库存数：{{item.stock}}</view>
        <view class="router">
          <view wx:if="{{item.actStatus == 1 || item.actStatus == 3}}" class="st st0">0.1元领取礼品</view>
          <view wx:if='{{item.actStatus == 0}}' class="st1 st" >认领该商品</view>
          <view wx:if='{{item.actStatus == 2}}' class="st2 st" >库存不足</view>
        </view>
      </view>
    </view>
    <orderStep :stepLayerShow.sync="showStep" 
               :activityDefId.sync='activityDefId'/>
    <footer />
    <alertInfo wx:if="{{alertInfo}}"
               @closeAlert.user='closeAlert' />
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'
import {connect, getStore} from 'wepy-redux'
import {getTaskData} from '@/store/actions'
import AlertInfo from '@/components/alertInfo'
import Footer from '@/components/footer'
import orderStep from '@/components/orderStep'

const store = getStore()
const shopInfo = store.getState().home.shopInfo
@connect({
  taskData(state) {
    return state.task.taskdata
  },
  newManList(state) {
    return state.task.newManList
  },
  orderBackList(state) {
    return state.task.orderBackList
  }
})
export default class Task extends wepy.page {
  config = {
    navigationBarTitleText: '免单商品'
  }
  data = {
    alertInfo: false,
    showStep: false,
    activityId: -1,
    urlType: -1,
    activityDefId: -1,
    weChatNum: ''
  }
  components = {
    alertInfo: AlertInfo,
    footer: Footer,
    orderStep
  }
  methods = {
    showAlert: () => {
      this.alertInfo = true
    },
    closeAlert: () => {
      this.alertInfo = false
    },
    toNext1: (item) => {
      if (item.actStatus * 1 === 0) {
        this.showStep = true
        this.activityDefId = item.activityDefId
      } else if (item.actStatus * 1 === 2) {
        wepy.showToast({
          title: '当前库存无法领取',
          icon: 'none'
        })
      } else if (item.actStatus * 1 === 3) {
        wepy.navigateTo({
          url: '/pages/newComer/index?activityId=' + item.activityId
        })
      } else if (item.actStatus * 1 === 4) {
        wepy.navigateTo({
          url: `/pages/task/drawTask?activityId=${item.activityId}&type2=true`
        })
      }
    },
    toNext2(item) {
      console.log(item)
      if (item.actStatus * 1 === 1) {
        console.log(1)
        wepy.navigateTo({
          url: `/pages/detail/detail?activityDefId=${item.activityDefId}`
        })
      } else if (item.actStatus * 1 === 0) {
        wepy.navigateTo({
          url: `/pages/newComer/authentication?activityDefId=${item.activityDefId}`
        })
      } else if (item.actStatus * 1 === 2) {
        wepy.showToast({
          title: '当前库存无法抽奖',
          icon: 'none'
        })
      } else if (item.actStatus * 1 === 3) {
        wepy.showToast({
          icon: 'none',
          title: item.errorMsg
        })
      }
    }
  }
  initData() {
    wepy.showLoading({
      title: '正在加载'
    })
    let sendParams = {
      shopId: shopInfo.shopId,
      userId: shopInfo.userId
    }
    store.dispatch(getTaskData(sendParams)).then(
      wepy.hideLoading()
    )
  }
  onShow() {
    this.showStep = false
    this.initData()
  }
}
</script>
<style lang="scss">
.task-title-box{
  width:702rpx;
  height:88rpx;
  background:rgba(255,255,255,1);
  border-radius:8rpx;
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin: 5rpx 0;
  &>.title{
    display: flex;
    align-items: center;
    flex: 1;
    height: 100%;
    width: 100%;
    &>.task-title-bgimg{
    width:5rpx;
    height:28rpx;
    margin: 0 20rpx;
    background:rgba(235,57,57,1);
    }
    &>view{
      height:40rpx;
      font-size:28rpx;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:40rpx;
    }
  }
  &>.alert-info{
    height:40rpx;
    font-size:24rpx;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(155,155,155,1);
    display: flex;
    align-items: center;
    color: #9B9B9B;
    padding-right: 20rpx;
    &>i{
      font-size:24rpx;
      margin: 0 10rpx; 
    }
    &>view{
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;;
    }
  }
}
.task-list-box{
  width:702rpx;
  height:230rpx;
  background:rgba(255,255,255,1);
  border-radius:8rpx;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 25rpx 24rpx;
  margin: 5rpx 0;
  box-sizing: border-box;
  position: relative;
  &>image{
    width:180rpx;
    height:180rpx;
    margin-right: 30rpx;
  }
  .img{
    height: 28rpx;
    width: 28rpx;
    position: absolute;
    right: -20rpx;
    top: 20rpx;
  }
  &>view{
    height: 180rpx;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    &>view:nth-of-type(1){
      display: flex;
      align-items: center;
      font-size:28rpx;
      font-family:PingFangSC-Medium;
      font-weight:500;
      color:rgba(51,51,51,1);
    }
    &>view:nth-of-type(2){
      display: flex;
      height:40rpx;
      font-size:24rpx;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(235,57,57,1);
      line-height:33rpx;
    }
    &>view:nth-of-type(3){
      display: flex;
      height:33rpx;
      font-size:24rpx;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(155,155,155,1);
      line-height:33rpx;
    }
    &>.router{
      position:absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width:207rpx;
      height:60rpx;
      border-radius:44rpx;
      bottom: 40rpx;
      right: 40rpx;
      overflow: hidden;
      &>.st{
      display: flex;
      justify-content: center;
      align-items: center;
      width:100%;
      height:100%;
      font-size:24rpx;
      font-family:PingFangSC-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
    }
    &>.st0{
      background:linear-gradient(118deg,rgba(243,70,107,1) 0%,rgba(238,58,58,1) 100%);
    }
     &>.st1{
      background:linear-gradient(90deg,rgba(255,99,71,1) 0%,rgba(255,140,71,1) 100%);
    }
    &>.st2{
      background:rgba(204,204,204,1);
      }
    }
    
  }
}
.task-footer{
  height: 80rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  &>image{
    width: 30rpx;
    height: 36rpx;
    margin-right: 20rpx;
  }
  &>view{
    width:96rpx;
    height:33rpx;
    font-size:24rpx;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(204,204,204,1);
    line-height:33rpx;
  }
}
</style>
