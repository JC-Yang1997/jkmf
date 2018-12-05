<template>
  <view class="y-box">
    <view class="service">
      <repeat for="{{content}}" key="{{item.activityNum}}">
        <view class="list-box"  @tap="toNext('{{item}}')">
              <image src="{{item.picUrl}}" />
              <view>
                <view>奖品：{{item.title}}</view>
                <view>
                  <image src="{{item.avatarUrl}}" />
                  <view>{{item.nickName}}</view>
                </view>
                <view>价值￥{{item.price}}</view>
                <jindu :start="item.joinActivityNum" :end="item.condPersionCount" />
                <view class="todetail">
                  <view>我要参与</view>
                </view>
              </view>
          </view>
      </repeat>
      <footer />
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'
import {connect, getStore} from 'wepy-redux'
import {getListData} from '@/store/actions'
import Jindu from '@/components/jindu'
import Footer from '@/components/footer'

const store = getStore()
const shopInfo = store.getState().home.shopInfo

@connect({
  content(state) {
    return state.htlist.content
  }
})
export default class Htlist extends wepy.page {
  config = {
    navigationBarTitleText: '可参与抽奖活动'
  }
  components = {
    jindu: Jindu,
    footer: Footer
  }
  methods = {
    toNext(i) {
      // console.log(this)
      // console.log(i)
      if (i.type === 4 && i.isYourself === true) {
        wepy.navigateTo({
          url: `/pages/newComer/index?activityId=${i.activityId}&userId=${shopInfo.userId}&pub_uid=${this.option.uid || ''}`
        })
      } else {
        wepy.navigateTo({
          url: `/pages/task/taskDetail?activityId=${i.activityId}&userId=${shopInfo.userId}&pub_uid=${this.option.uid || ''}`
        })
      }
    }
  }
  initData(v) {
    wepy.showLoading({
      title: '正在加载'
    })
    let sendParams = {
      shopId: shopInfo.shopId,
      goodsId: v.goodsId,
      offset: 0,
      limit: 4,
      merchantId: shopInfo.merchantId,
      userId: shopInfo.userId
    }
    store.dispatch(getListData(sendParams)).then(
      wepy.hideLoading()
    )
  }
  onLoad(option) {
    this.initData(option)
    this.option = option
  }
}
</script>
<style lang="scss">
.list-box{
  width:702rpx;
  height:250rpx;
  background:rgba(255,255,255,1);
  border-radius:20rpx;
  display: flex;
  align-items: center;
  padding: 10rpx;
  box-sizing: border-box;
  overflow: hidden;
  margin: 10rpx 0;
  &>image{
    width:200rpx;
    height:200rpx;
    background:rgba(216,216,216,1);
    margin: 0 10rpx;
  }
  &>view{
    height:200rpx;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    padding:0 10rpx;
    box-sizing: border-box;
    position: relative;
    &>view:nth-of-type(1){
      width:420rpx;
      font-size:28rpx;
      font-family:PingFangSC-Medium;
      font-weight:500;
      color:rgba(51,51,51,1);
      line-height:36rpx;
    }
    &>view:nth-of-type(2){
      width: 100%;
      height: 40rpx;
      display: flex;
      align-items: center;
      &>image{
        width:24rpx;
        height:24rpx;
        background: red;
        margin-right:10rpx;
      }
      &>view{
        display: flex;
        align-items: center;
        height:28rpx;
        font-size:20rpx;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
      }
    }
    &>view:nth-of-type(3){
      display: flex;
      align-items: center;
      height:40rpx;
      font-size:20rpx;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(235,57,57,1);
    }
    &>.todetail{
      width:140rpx;
      height:60rpx;
      background:linear-gradient(118deg,rgba(243,70,107,1) 0%,rgba(238,58,58,1) 100%);
      border-radius:44rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 20rpx;
      bottom: 20rpx;
      &>view{
        height:33rpx;
        font-size:24rpx;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
      }
    }
  }
}
</style>
