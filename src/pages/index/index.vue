<style lang="scss">
.header-box {
  width: 750rpx;
  height: 140rpx;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    rgba(245, 88, 123, 1) 0%,
    rgba(244, 74, 74, 1) 100%
  );
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  & > .logo {
    height: 100rpx;
    width: 100rpx;
    margin: 0 30rpx;
    & > image {
      height: 100%;
      width: 100%;
    }
  }
  & > .name {
    height: 100rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin: 0rpx;
    & > view:nth-of-type(1) {
      height: 45rpx;
      font-size: 32rpx;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      line-height: 45rpx;
    }
    & > view:nth-of-type(2) {
      height: 33rpx;
      font-size: 24rpx;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      display: flex;
      align-items:center;
      &>i{
        margin: 0 5rpx;
        font-size: 24rpx;
        color: rgba(255,255,255,1);
      }
    }
  }
  & > .guanzhu {
    width: 173rpx;
    height: 80rpx;
    background: rgba(255, 255, 255, 1);
    border-radius: 44rpx;
    position: absolute;
    right: -32rpx;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & > view:nth-of-type(1) {
      height: 40rpx;
      width: 40rpx;
      margin: 0 8rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      & > i {
        font-size: 32rpx;
        width: 36rpx;
        height: 29rpx;
        color: rgba(248, 103, 135, 1);
      }
    }
    & > view:nth-of-type(2) > view {
      width: 80rpx;
      height: 28rpx;
      font-size: 20rpx;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(235, 57, 57, 1);
      line-height: 28rpx;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.home-block-title {
  height: 120rpx;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32rpx;
  font-family: PingFangSC-Medium;
  font-weight: bolder;
  color: rgba(51, 51, 51, 1);
  line-height: 40rpx;
}

.home-swiper {
  width: 750rpx;
  height: 460rpx;
  & .swiper-item-css{
    display: flex;
    justify-content: center;
    align-items: center;
    & .home-swiper-item {
    width: 640rpx;
    height: 97%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: 2rpx 2rpx 10rpx 0rpx rgba(0, 0, 0, 0.1);
    border-radius:20rpx;
    overflow: hidden;
    box-sizing: border-box;
    &>.hdStatus{
      position: absolute;
      top: 0;
      left: 0;
      height:36rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size:20rpx;
      font-family:PingFangSC-Semibold;
      font-weight:600;
      color:rgba(255,255,255,1);
      padding: 0 28rpx;
    }
    .hdStatus-1{
      background:linear-gradient(103deg,rgba(238,242,243,1) 0%,rgba(142,158,171,1) 100%);
    }
    .hdStatus1{
      background:linear-gradient(135deg,rgba(48,35,174,1) 0%,rgba(122,48,161,1) 100%);
    }
    .hdStatus2{
      background:linear-gradient(118deg,rgba(243,70,107,1) 0%,rgba(238,58,58,1) 100%);
    }
    .hdStatus3{
      background:linear-gradient(135deg,rgba(250,217,97,1) 0%,rgba(247,107,28,1) 100%);
    }
    &>.hd-minge{
      position: absolute;
      top: 0;
      right: 5%;
      width: 128rpx;
      height: 97rpx;
      box-sizing: border-box;
      overflow: hidden;
      &>image{
        height: 100%;
        width: 100%;
      }
      &>view{
        position: absolute;
        top: 5%;
        left: 10%;
        height: 80%;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        &>view{
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        &>view:nth-of-type(1){
          font-size: 36rpx;
        }
        &>view:nth-of-type(2){
          font-size: 24rpx;
        }
      }
    }
    & > image {
      width: 100%;
      height: 320rpx;
      background: rgba(240, 242, 247, 1);
    }
    & > view:nth-of-type(1) {
      width: 100%;
      height: 140rpx;
      background: rgba(255, 255, 255, 1);
      border-radius: 0rpx 0rpx 20rpx 20rpx;
      padding: 0 24rpx;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      & > view:nth-of-type(1) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 42rpx;
        width: 100%;
        font-size: 28rpx;
        font-family: PingFangSC-Regular;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 42rpx;
      }
      & > view:nth-of-type(2) {
        width: 100%;
        height: 50rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24rpx;
        font-family: PingFangSC-Regular;
        color: rgba(235, 57, 57, 1);
      }
    }
  }
  }
}


  .home-list {
    width: 702rpx;
    height: 330rpx;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0rpx 2rpx 10rpx 0rpx rgba(0, 0, 0, 0.1);
    border-radius: 20rpx;
    padding:20rpx;
    margin-bottom:20rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    & > .todetail{
      height: 200rpx;
      width: 100%;
      &>view{
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      & > image {
        height: 200rpx;
        width: 200rpx;
        margin-right: 40rpx;
      }
      & > view {
        height: 100%;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        position: relative;
        padding:0 24rpx;
        box-sizing: border-box;
        & > view:nth-of-type(1) {
          font-size: 28rpx;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          display: flex;
          align-items: center;
        }
        & > view:nth-of-type(2) {
          display: flex;
          align-items: center;
          height: 28rpx;
          font-size: 24rpx;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 28rpx;
          &>image{
            width:24rpx;
            height:24rpx;
            margin-right: 5rpx;
          }
        }
        & > view:nth-of-type(3) {
          height: 40rpx;
          font-size: 24rpx;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(235, 57, 57, 1);
          line-height: 28rpx;
        }
        & > view:nth-of-type(4) {
          height: 28rpx;
          font-size: 24rpx;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          line-height: 28rpx;
        }
        &>view:nth-of-type(5){
          width:140rpx;
          height:60rpx;
          background:linear-gradient(118deg,rgba(243,70,107,1) 0%,rgba(238,58,58,1) 100%);
          border-radius:44rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size:24rpx;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:rgba(255,255,255,1);
          position: absolute;
          right: 0rpx;
          bottom: 0rpx;
        }
      }
      }
    }
    & >.tolist {
      width: 100%;
      height: 52rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 2rpx solid #f0f0f0;
      &>view{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        &>view:nth-of-type(1){
          display: flex;
          flex: 1;
          align-items: center;
          &>i{
          color:rgba(245,108,108,1);
          font-size: 32rpx;
          margin-right: 20rpx;
          }
        }
        & > view {
          display: flex;
          align-items: center;
          height: 33rpx;
          font-size: 24rpx;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(155, 155, 155, 1);
          line-height: 33rpx;
          &>.dian{
            width:36rpx;
            height:24rpx;
            background:rgba(235,57,57,1);
            border-radius:16rpx;
            font-size: 20rpx;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }  
    }
  }
.form{
  position:relative;
  width:400rpx;
  height:400rpx;
  .a{
    position:absolute;
    top:0;
    left:0;
    width:1rpx;
    height:1rpx;
    background-color:red;
    overflow:visible;
    padding:0;
    .b{
      position:absolute;
      top:0;
      left:0;
      width:200rpx;
      height:200rpx;
      background-color:blue;
    }
  }
}
.wheel-logo{
  width:140rpx;
  height:140rpx;
  position: fixed;
  z-index: 900;
}
</style>
<template>
  <view class="y-box">
    <view class="service">
    <!-- yjc -->
    <view class="header-box">
      <view class="logo">
          <image src="{{shopData.picPath}}" />
      </view>
      <button class="name" open-type='share' hover-class='none' id='home'>
        <view>{{shopData.shopName}}</view>
        <view>分享好友  抽奖免单<i class="iconfont icon-fenxiang1" /></view>
      </button>
      <view class="guanzhu">
        <view>
          <i class="iconfont icon-weixin"></i>
        </view>
        <view @tap="showEr">
          <view>关注客服</view>
          <view>领红包</view>
        </view>
      </view>
    </view>

    <view class="home-block-title">
      - 精选抽奖活动 -
    </view>

    <swiper indicator-dots="{{swiperParams.indicatorDots}}"
      autoplay="{{swiperParams.autoplay}}" 
      interval="{{swiperParams.interval}}" 
      duration="{{swiperParams.duration}}"
      class="home-swiper"
      previous-margin='40rpx'
      next-margin='40rpx'
      current="{{merchantActivity.index}}">
      <repeat for="{{activities}}" key="{{item.activityNum}}">
        <navigator url="{{'/pages/task/taskDetail?activityId='+item.activityId}}" hover-class="none">
        <swiper-item class="swiper-item-css">
          <view class="home-swiper-item">
          <image src="{{item.picUrl}}" class="slide-image" width="320" height="150"/>
          <view>
            <view>奖品：{{item.title}}</view>
            <view>
              <view>价值￥{{item.price}}</view>
              <jindu :start="item.joinActivityNum" :end="item.condPersionCount" />
            </view>
          </view>
          <view wx:if="{{item.status===-1}}" class="hdStatus hdStatus-1">已结束</view>
          <view wx:if="{{item.status===1}}" class="hdStatus hdStatus1">{{item.startTime}}活动开始</view>
          <view wx:if="{{item.status===2}}" class="hdStatus hdStatus2">待开奖</view>
          <view wx:if="{{item.status===3}}" class="hdStatus hdStatus3">已开奖</view>
          <view class="hd-minge">
            <image src="https://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/drawimg.png" />
            <view>
              <view>{{item.hitsPerDraw}}</view>
              <view>中奖名额</view>
            </view>
          </view>
          </view>
        </swiper-item>
        </navigator>
      </repeat>
    </swiper>
    <view class="home-block-title">
      - 更多抽奖活动 -
    </view>
    <repeat for="{{content}}" key="{{item.title}}">
      <view class="home-list">
        <view class="todetail" @tap="toNext('{{item}}')">
          <view>
            <image src="{{item.picUrl}}" />
            <view>
              <view>奖品：{{item.title}}</view>
              <view>
                <image src="{{item.avatarUrl}}" />
                <view>{{item.nickName}}</view>
              </view>
              <view>价值￥{{item.price}}</view>
              <jindu :start="item.joinActivityNum" :end="item.condPersionCount" />
              <view>我要参与</view>
            </view>
          </view>
        </view>
        <navigator class="tolist" url="{{'/pages/htlist/htlist?goodsId='+item.goodsId}}" hover-class="none">
          <view>
            <view>
              <view>该商品共有{{item.activityNum}}个抽奖活动可参加</view>
            </view>
            <view>
              <view class="dian">{{item.activityNum}}</view>
              <i class="iconfont icon-jinru"></i>            
            </view>  
          </view>
        </navigator>
      </view>
    </repeat>
    <footer />
    <!-- <view style="width:50px;height:50px">
      <image src="https://img-test.wxyundian.cn/73039316750585843.jpg"/>
    </view> -->
    <erweima wx:if="{{showEr}}" @closeEr.user="closeEr" />
    <view class="wheel-logo"
        @tap="showWheel"
        style='left:{{left}}rpx;top:{{top}}rpx;'
        catchtouchmove="move"
        wx:if="{{wheel.isLuckyWheelExist}}">
      <image src="https://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/wheel-logo.png" />
    </view>
    <indexLayer 
        wx:if="{{wheel.isLuckyWheel && fuceng}}"
        @closeWheel.user="closeWheel"
        :type.sync="layerType"/>
    <indexOrder 
        wx:if="{{indexAll.isDialogOrder&&!wheel.isLuckyWheel}}"
        @closeOrder.user='closeOrder'
        :type.sync="orderType" />
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'
import {connect, getStore} from 'wepy-redux'
import {getHomeData, getWheelData} from '@/store/actions'
import Footer from '@/components/footer'
import Erweima from '@/components/erweima'
import Jindu from '@/components/jindu'
import indexLayer from '@/components/yinju/indexLayer'
import indexOrder from '@/components/indexOrder'

const store = getStore()
const shopInfo = store.getState().home.shopInfo
console.log(shopInfo.merchantId + ',' + shopInfo.shopId + ',' + shopInfo.scene)

@connect({
  wheel(state) {
    return state.home.wheel
  },
  shopData(state) {
    return state.home.shopData
  },
  activities(state) {
    return state.home.activities
  },
  merchantActivity(state) {
    return state.home.merchantActivity
  },
  swiperParams(state) {
    return state.home.swiperParams
  },
  content(state) {
    return state.home.content
  },
  indexAll(state) {
    return state.home.indexAll
  }
})
export default class Index extends wepy.page {
  config = {
    navigationBarTitleText: '集客魔方电商'
  }
  data = {
    left: 600,
    top: 720,
    showEr: false,
    grunt: false,
    layerType: -1,
    orderType: -1,
    option: '',
    fuceng: true
  }
  components = {
    footer: Footer,
    erweima: Erweima,
    jindu: Jindu,
    indexLayer,
    indexOrder
  }
  methods = {
    bigout() {
      // console.log(c)
      // console.log('111111')
      // shopInfo.bugOut.track(1)
    },
    // 可拖动首页挂件
    move(e) {
      let _left = e.touches[0].clientX * 2 - 70
      let _top = e.touches[0].clientY * 2 - 70
      if (_left >= 0 && _left <= 620 && _top >= 0 && _top <= 960) {
        this.left = _left
        this.top = _top
      }
      if (_left < 0 && _top >= 0 && _top <= 960) {
        this.left = 0
        this.top = _top
      }
      if (_top < 0 && _left >= 0 && _left <= 620) {
        this.left = _left
        this.top = 0
      }
      if (_left > 620 && _top >= 0 && _top <= 960) {
        this.left = 620
        this.top = _top
      }
      if (_top > 960 && _left >= 0 && _left <= 620) {
        this.left = _left
        this.top = 960
      }
      // console.log('left:', _left, 'top:', _top)
    },
    showEr() {
      this.showEr = true
    },
    closeEr() {
      this.showEr = false
    },
    closeWheel: () => {
      this.fuceng = false
      this.wheel.isLuckyWheel = false
      this.wheel.isLuckyWheelExist = true
    },
    showWheel() {
      this.fuceng = true
      this.layerType = 2
      this.wheel.isLuckyWheel = true
      this.wheel.isLuckyWheelExist = false
      let sendParams = {
        user_id: shopInfo.userId,
        activityId: this.wheel.activityId,
        pub_uid: shopInfo.pub_uid || ''
      }
      if (this.wheel.isLuckyWheel) {
        store.dispatch(getWheelData(sendParams))
        this.$apply()
      }
    },
    // 实时刷新大轮盘数据
    refreshWheel: () => {
      if (this.wheel.isLuckyWheel && this.fuceng) {
        let sendParams = {
          user_id: shopInfo.userId,
          activityId: this.wheel.activityId,
          pub_uid: shopInfo.pub_uid || ''
        }
        if (this.wheel.isLuckyWheel) {
          store.dispatch(getWheelData(sendParams))
          this.$apply()
        }
      }
    },
    closeOrder() {
      this.indexAll.isDialogOrder = false
      this.$apply()
    },
    toNext(i) {
      if (i.type === 4 && i.isYourself === true) {
        wepy.navigateTo({
          url: `/pages/newComer/index?activityId=${i.activityId}&pub_uid=${this.option.uid}`
        })
      } else {
        wepy.navigateTo({
          url: `/pages/task/taskDetail?activityId=${i.activityId}&pub_uid=${this.option.uid}`
        })
      }
    },
    initData: (i, o) => {
      console.log('shopInfo', shopInfo)
      let sendParams = {
        shopId: shopInfo.shopId,
        userId: shopInfo.userId,
        offset: 0,
        limit: 4,
        merchantId: shopInfo.merchantId,
        scene: shopInfo.merchantId + ',' + shopInfo.shopId + ',' + shopInfo.scene
      }
      store.dispatch(getHomeData(sendParams)).then(
        (res) => {
          shopInfo.scene = ''
          this.s = ''
          let sendParams = {
            user_id: shopInfo.userId,
            activityId: res.payload.luckyWheel.activityId,
            pub_uid: shopInfo.pub_uid || ''

          }
          if (res.payload.luckyWheel.isLuckyWheel === true) {
            store.dispatch(getWheelData(sendParams))
            this.layerType = 2
            this.$apply()
          }
          if (res.payload.isDialogOrder === true) {
            this.orderType = 2
            this.$apply()
          }
        }
      )
    }
  }
  onShareAppMessage(res) {
    if (res.target.id === 'home') {
      return {
        title: this.shopData.shopName,
        path: `/pages/index/login?uid=
          ${shopInfo.userId}&activityId=
          ${shopInfo.shopId}&merchantId=
          ${shopInfo.merchantId}&scene1=3`
      }
    } else {
      return {
        title: '幸运大转盘抽奖活动',
        imgUrl: 'https://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/wenan.png',
        path: `/pages/index/login?uid=
            ${shopInfo.userId}&activityId=
            ${this.wheel.activityId}&shopId=
            ${shopInfo.shopId}&merchantId=
            ${shopInfo.merchantId}&scene1=3`
      }
    }
  }
  onShow() {
    this.methods.initData()
    this.w = setInterval(() => {
      this.methods.refreshWheel()
    }, 3000)
  }
  onHide() {
    clearInterval(this.w)
  }
  onLoad(option) {
    // 如果是点击返回首页按钮回到首页将from初始化
    shopInfo.from = -1
    console.log(shopInfo)
    if (Object.keys(option).length !== 0) {
      console.log('index-option', option)
      shopInfo.pub_uid = option.uid * 1
      shopInfo.shopId = option.shopId * 1
      shopInfo.merchantId = option.merchantId * 1
      shopInfo.scene = option.scene * 1 || 1
    }
  }
}
</script>
