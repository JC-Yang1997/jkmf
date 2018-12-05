<template>
  <view class="y-box y-box2">
    <view class="service">
      <null :type.sync="type" wx:if="{{list.length === 0}}" />
      <scroll-view wx:else class='scr' scroll-y bindscrolltolower='initData'>
        <repeat for="{{list}}" key="{{index}}">
        <view class="list-box">
              <image src="{{item.picPath}}" />
              <view>
                <view class="title">奖品：{{item.title}}</view>
                <view class="price">价格￥{{item.displayPrice}}</view>
                <view wx:if="{{item.is_launch}}" class="mount">库存数：{{item.stockNum}}</view>
                <view wx:if="{{!item.is_launch}}" class="time">购买时间：{{item.pay_time}}</view>
                <navigator wx:if="{{item.is_launch}}" class="todetail" url="{{'/pages/detail/detail?activityDefId='+item.activityDefId}}" hover-class="none">
                  <view>0.1元发起抽奖</view>
                </navigator>
              </view>
          </view>
          </repeat>
      </scroll-view>
      <view class="submit-btn" @tap='toDingdan'>添加订单</view>
      <footer />
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'
import { connect, getStore } from 'wepy-redux'
import { getOrderData } from '@/store/actions'
import Footer from '@/components/footer'
import Null from '@/components/null'

const store = getStore()
const shopInfo = store.getState().home.shopInfo

@connect({
  content(state) {
    return state.htOrder.content
  }
})
export default class Htorder extends wepy.page {
  config = {
    navigationBarTitleText: '我的回填订单'
  }
  components = {
    footer: Footer,
    null: Null
  }
  data = {
    offset: 0,
    limit: 10,
    list: [],
    type: 1
  }
  methods = {
    toDingdan() {
      wepy.navigateTo({
        url: `/pages/newComer/authentication?only=5`
      })
    },
    initData: () => {
      wepy.showLoading({
        title: '正在加载'
      })
      let sendParams = {
        shopId: shopInfo.shopId,
        userId: shopInfo.userId,
        offset: this.offset,
        limit: this.limit,
        merchantId: shopInfo.merchantId
      }
      store.dispatch(getOrderData(sendParams)).then(
        res => {
          wepy.hideLoading()
          if (this.offset <= res.payload.total) {
            // this.list = this.list.concat(res.payload.content)
            this.offset += this.limit
            this.$apply()
          }
        }
      )
    }
  }
  onShow() {
    this.methods.initData()
  }
}
</script>
<style lang="scss">
.scr{
  height: 1050rpx;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing:border-box;

}
.list-box {
  width: 702rpx;
  height: 250rpx;
  background: rgba(255, 255, 255, 1);
  border-radius: 20rpx;
  display: flex;
  align-items: center;
  padding: 10rpx;
  box-sizing: border-box;
  overflow: hidden;
  margin: 10rpx 0;
  image {
    width: 200rpx;
    height: 200rpx;
    background: rgba(216, 216, 216, 1);
    margin: 0 10rpx;
  }
  & > view {
    height: 200rpx;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 10rpx;
    box-sizing: border-box;
    position: relative;
    & > .title {
      width: 420rpx;
      font-size: 28rpx;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 36rpx;
      display: flex;
      flex-wrap: wrap;
    }
    & > .price {
      display: flex;
      align-items: center;
      height: 40rpx;
      font-size: 20rpx;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(235, 57, 57, 1);
    }
    & > .mount {
      display: flex;
      align-items: center;
      height: 33rpx;
      font-size: 24rpx;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(155, 155, 155, 1);
    }
    & > .time {
      display: flex;
      align-items: center;
      height: 33rpx;
      font-size: 24rpx;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(155, 155, 155, 1);
    }
    & > .todetail {
      height: 60rpx;
      background: linear-gradient(
        118deg,
        rgba(243, 70, 107, 1) 0%,
        rgba(238, 58, 58, 1) 100%
      );
      border-radius: 44rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 20rpx;
      bottom: 20rpx;
      padding: 0 20rpx;
      & > view {
        height: 33rpx;
        font-size: 24rpx;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
.submit-btn {
  width: 750rpx;
  height: 88rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    118deg,
    rgba(243, 70, 107, 1) 0%,
    rgba(238, 58, 58, 1) 100%
  );
  font-size: 28rpx;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  position: fixed;
  bottom: 0;
  z-index: 999;
}
</style>
