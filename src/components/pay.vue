<template>
 <view class="background">
    <view class="pay">
      <view class="close" @tap="close">
        <i class="iconfont icon-guanbi" />
      </view>
      <view class="pay-info">
         <view class="title">确认支付</view>
          <view class="price">
            <view>￥</view>
            <view>0.1元</view>
          </view>
          <view class="shop-info">
            <view>收款方</view>
            <view>集客魔方小程序</view>
          </view>
      </view>
      <button class="submit-btn" @tap="payBasic" disabled="{{ifUnclick}}">确认</button>
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'

export default class Pay extends wepy.component {
  data = {
    ifUnclick: false
  }
  props={
    isQianbao: {
      type: Boolean,
      default: true
    }
  }
  methods = {
    close() {
      this.ifUnclick = false
      this.$emit('closepay')
    },
    payBasic() {
      this.ifUnclick = true
      this.$emit('paybasic')
      this.$apply()
    }
  }
}
</script>
<style scoped lang="scss">
.background{
  width:750rpx;
  height: 100%;
  background:rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  box-sizing: border-box;
  &>.pay{
    width:100%;
    height:496rpx;
    display: flex;
    flex-direction: column;
    background:rgba(255,255,255,1);
    position: absolute;
    bottom: 0;
    z-index: 999;
    &>.close{
      position: absolute;
      right: 20rpx;
      top: 10rpx;
      color: #D9D9DA;
    }
    &>.pay-info{
      width: 100%;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      &>.title{
        width:112rpx;
        height:40rpx;
        font-size:28rpx;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:40rpx;
      }
      &>.price{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;        
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(235,57,57,1);
        &>view:nth-of-type(1){
          font-size:24rpx;
          position: relative;
          top: 18rpx;
        }
        &>view:nth-of-type(2){
          font-size: 64rpx;
        }
      }
      &>.shop-info{
        width: 100%;
        height: 40rpx;
        padding: 30rpx;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size:28rpx;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(155,155,155,1);
      }
    }
    &>.submit-btn{
    width:750rpx;
    height:98rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    background:linear-gradient(118deg,rgba(243,70,107,1) 0%,rgba(238,58,58,1) 100%);
    font-size:28rpx;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    }
  }
}
</style>
