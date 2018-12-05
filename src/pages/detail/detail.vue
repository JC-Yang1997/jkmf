<template>
  <view class="y-box y-box2">
    <view class="service">
    <view class="banner">
      <view>
        <image src="{{content.picUrl}}" />
        <view class="banner-acts">价值￥{{content.price}}</view>
        <view class="banner-info">{{bannerTitle}}</view>
      </view>
      <view>
        <view>奖品：{{content.title}}</view>
        <view>活动有效日期：{{content.startTime}}--{{content.endTime}}</view>
      </view>
    </view>
    <view class="rules">
      <view class="title">
        <view></view>
        <view>抽奖规则</view>
      </view>
      <view class="list">
        <view>1.成功支付0.1元即可算成功发起抽奖活动</view>
        <view>2.规定时间内，当活动参与人数达到开奖条件则活动成功，可获得该商品</view>
        <view>3.规定时间内，若活动参与人数未达到开奖条件则活动失败，可重新发起活动</view>
        <view>4.活动发起失败后，0.1元支付金额将原路返回</view>
      </view>
    </view>
    <view class="choose">选择支付方式</view>
    <view class="paybox">
      <view @tap="toggle1">
        <view class="info">
          <view>
            <i class="iconfont icon-tianchongxing-" />
            <view>钱包支付</view>
          </view>
          <view>可用余额{{content.balance}}元</view>
        </view>
        <view wx:if="{{selected === true}}" class="selected">
          <image src="https://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/icon_doen.png" />
        </view>
        <view wx:else class="unselected"></view>
      </view>
      <view @tap="toggle2">
        <view class="info">
          <view>
            <i class="iconfont icon-weixinzhifu" />
            <view>微信支付</view>
          </view>
          <view></view>
        </view>
        <view wx:if="{{!selected === true}}" class="selected">
          <image src="https://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/icon_doen.png" />
        </view>
        <view wx:else class="unselected"></view>
      </view>
    </view>

    <footer />
    <view class="getFormId submit-btn" disabled="{{_ncanPay}}">
      <form wx:if="{{content.isValid === true}}" bindsubmit="showpay" report-submit>
        <button form-type="submit" class="getFormId_a">
          <view class="getFormId_b submit-btn">
            <form bindsubmit="showpay" report-submit>
              <button form-type="submit" class="getFormId_a">
                <view class="getFormId_b submit-btn">
                  0.1元一键发起抽奖
                </view>
              </button>
            </form>
          </view>
        </button>
      </form>
      <form wx:if="{{content.isValid === false}}" report-submit>
        <button form-type="submit" class="getFormId_a">
          <view class="getFormId_b submit-btn1">
            <form report-submit>
              <button form-type="submit" class="getFormId_a">
                <view class="getFormId_b submit-btn1">
                  已支付
                </view>
              </button>
            </form>
          </view>
        </button>
      </form>
    </view>
    <pay wx:if="{{showPay}}" 
         @closepay.user="closepay" 
         @paybasic.user="paybasic" 
         :isQianbao.sync="{{selected}}"
        />
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'
import Footer from '@/components/footer'
import Pay from '@/components/pay'
import {connect, getStore} from 'wepy-redux'
import {getDetailData, payment, wxpayment} from '@/store/actions'

const store = getStore()
const shopInfo = store.getState().home.shopInfo
@connect({
  content(state) {
    return state.detail.content
  }
})
export default class Detail extends wepy.page {
  data = {
    selected: true,
    showPay: false,
    _ncanPay: false,
    formIds: [],
    activityDefId: 0,
    bannerTitle: ''
  }
  components={
    footer: Footer,
    pay: Pay
  }
  initData() {
    let sendParams = {
      activityDefId: this.activityDefId,
      userId: shopInfo.userId
    }
    store.dispatch(getDetailData(sendParams)).then(wepy.hideLoading())
  }
  methods = {
    toggle1() {
      if (this.selected === false) {
        this._ncanPay = false
        this.selected = !this.data.selected
      }
    },
    toggle2() {
      if (this.selected === true) {
        this._ncanPay = false
        this.selected = !this.data.selected
      }
    },
    showpay(e) {
      // 获取两个formId
      this.formIds.push(e.detail.formId)
      if (this.formIds.length < 2) {
        return
      }
      if (this.selected) {
        this.showPay = true
      } else {
        // 支付按钮防抖
        this._ncanPay = true
        let params = {
          aid: this.activityDefId,
          paytype: 2
        }
        this.methods.paybasic(params)
      }
    },
    closepay() {
      this.showPay = false
    },
    paybasic: (t) => {
      let _aid = Number(this.activityDefId)
      wepy.showLoading({
        title: '正在支付'
      })
      let sendParams = {
        amount: 0.1,
        shopId: shopInfo.shopId,
        userId: shopInfo.userId,
        merchantId: shopInfo.merchantId,
        activityDefId: _aid || t.aid,
        payType: t.paytype || 1,
        formIds: this.formIds.join(',')
      }
      if (this.selected) {
        store.dispatch(payment(sendParams, this.option.urlType, this.option.new)).then(
            wepy.hideLoading()
          )
      } else {
        store.dispatch(wxpayment(sendParams, this.option.urlType, this.option.new)).then(
          wepy.hideLoading()
        )
      }
    }
  }
  onShow() {
    this.selected = true
    this.showPay = false
    this._ncanPay = false
    this.$apply()
    this.initData()
  }
  onLoad(option) {
    console.log('option', option)
    this.option = option
    if (option.urlType) {
      this.bannerTitle = '分享满200人即可领取赠品'
      wepy.setNavigationBarTitle({
        title: '发起抽奖'
      })
    } else {
      this.bannerTitle = '每个发起者都将额外获得10个抽奖码，大幅提升中奖率'
      wepy.setNavigationBarTitle({
        title: '免单商品抽奖'
      })
    }
    this.activityDefId = option.activityDefId
    this.initData()
    this.$apply()
  }
}

</script>

<style lang="scss">
.getFormId{
  position:relative;
  .getFormId_a{
    position:absolute;
    top:0;
    left:0;
    width:1px;
    height:1px;
    overflow:visible;
    padding:0;
    .getFormId_b{
      position:absolute;
      top:0;
      left:0;
    }
  }
}
.banner{
  width: 750rpx;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-bottom: 20rpx;
  &>view:nth-of-type(1){
    width: 750rpx;
    height: 750rpx;
    position: relative;
    box-sizing: border-box;
    &>image{
      height: 100%;
      width: 100%;
    }
    &>.banner-info{
      width:100%;
      height:88rpx;
      background:linear-gradient(118deg,rgba(243,70,107,1) 0%,rgba(238,58,58,1) 100%);
      font-size:28rpx;
      font-family:PingFangSC-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 0rpx;
      z-index: 990;
      padding: 0 20rpx;
      box-sizing: border-box;
    }
    &>.banner-acts{
      width: 182rpx;
      height:80rpx;
      background:linear-gradient(90deg,rgba(243,70,107,1) 0%,rgba(238,58,58,1) 100%);
      border-radius:40rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size:24rpx;
      font-family:PingFangSC-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
      position: absolute;
      bottom: 200rpx;
      left: -32rpx;
      z-index: 990;
      padding: 0 20rpx;
    }
  }
  &>view:nth-of-type(2){
    width: 200rpx;
    height: 128rpx;
    width: 100%;
    background:rgba(255,255,255,1);
    padding: 20rpx;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    &>view{
      width: 100%;
      display: flex;
      align-items: center;
    }
    &>view:nth-of-type(1){
      height:48rpx;
      display: block;
      width: 90%;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      font-size:28rpx;
      font-family:PingFangSC-Medium;
      font-weight:500;
      color:rgba(51,51,51,1);
      line-height:48rpx;
    }
    &>view:nth-of-type(2){
      height:32rpx;
      font-size:24rpx;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(155,155,155,1);
      line-height:32rpx;
    }
  }
}
.rules{
  width:701rpx;
  display: flex;
  flex-direction: column;
  background:rgba(255,255,255,1);
  border-radius:20rpx;
  padding: 20rpx;
  box-sizing: border-box;
  margin-bottom: 20rpx;
  &>.title{
    display: flex;
    align-items: center;
    width:100%;
    height:40rpx;
    &>view:nth-of-type(1){
      width:5rpx;
      height:28rpx;
      background:rgba(235,57,57,1);
      margin: 0 20rpx;
    }
    &>view:nth-of-type(2){
      font-size:28rpx;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(51,51,51,1);
    }
  }
  &>.list{
    width:100%;
    display: flex;
    flex-direction: column;
    padding: 10rpx 20rpx;
    box-sizing: border-box;
    &>view{
      width: 100%;
      display: flex;
      font-size:24rpx;
      line-height: 44rpx;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(155,155,155,1);
    }
  }
}
.choose{
    width:90%;
    height:40rpx;
    font-size:28rpx;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(155,155,155,1);
    line-height:40rpx;
    margin-bottom: 20rpx;
}
.paybox{
  width:702rpx;
  background:rgba(255,255,255,1);
  border-radius:8rpx;
  display: flex;
  flex-direction: column;
  &>view{
    width: 100%;
    height: 98rpx;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20rpx;
    box-sizing: border-box;
    position: relative;
    &>.info{
      display: flex;
      flex: 1;
      height: 40rpx;
      justify-content: space-between;
      align-items: center;
    &>view:nth-of-type(1){
      display: flex;
      height:40rpx;
      font-size:28rpx;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:40rpx;
      &>i{
        margin-right: 40rpx;
      }
    }
    &>view:nth-of-type(2){
      display: flex;
      align-items: center;
      height:40rpx;
      font-size:28rpx;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(204,204,204,1);
      margin-right: 40rpx;
    }
    .icon-tianchongxing-{
      color:#EB3939
    }
    .icon-weixinzhifu{
      color:#12CC0D
    }
    }
    &>.unselected{
      width:36rpx;
      height:36rpx;
      background:rgba(255,255,255,1);
      border:2rpx solid #CCCCCC;
      border-radius: 50%;
    }
    &>.selected{
      width:36rpx;
      height:36rpx;
      border-radius: 50%;
      border:2rpx solid #fff;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      &>image{
        height: 100%;
        width: 100%;
      }
    }
  }
}
.submit-btn{
  width:750rpx;
  height:100rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  background:linear-gradient(118deg,rgba(243,70,107,1) 0%,rgba(238,58,58,1) 100%);
  font-size:28rpx;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(255,255,255,1);
  position: fixed;
  bottom: 0;
}
.submit-btn1{
  width:750rpx;
  height:100rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  background:gray;
  font-size:28rpx;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(255,255,255,1);
  position: fixed;
  bottom: 0;
}
</style>
