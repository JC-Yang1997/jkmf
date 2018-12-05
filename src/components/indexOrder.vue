<template>
  <view class="index_order flex_center">
     <!-- 回填订单获取红包 -->
    <block wx:if="{{type == 1}}">
      <view class="wallet">
        <view class="wallet_box">
          <view class="bg">
            <image mode="widthFix" src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/wallet_bg.png"/>
          </view>
          <view class="content">
            <view class="title">回填订单成功获得红包</view>
            <view class="money">{{orderAmount}}元</view>
            <view class="notes">可在钱包中查看</view>
            <view class="notes_2">如果其他订单需要回填，请到我的-我的回填订单中继续填订单</view>
          </view>
          <view class="close icon-guanbi iconfont" @tap="closeOrder"></view>
        </view>
      </view>
    </block>

    <!-- 免单任务 -->
    <block wx:if="{{type === 2}}">
      <scroll-view scroll-y class="index_free">
        <view class="index_free_box">
          <view class="index_free_bg">
            <view class="close iconfont icon-guanbi" @tap="closeOrder"></view>
            <image mode="widthFix" src="https://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/orderBg.png"/>
            <form bindsubmit="submit">
              <view class="form">
                <view class="order_input">
                  <input type="text" 
                         placeholder="粘贴商品订单编号" 
                         placeholder-class="placeholder" 
                         name="order"
                         value="{{orderId}}"
                         bindinput="input"/>
                </view>
                <button open-type="submit" class="btn_submit" @tap="submitOrder">提交</button>
              </view>
            </form>
          </view>
        </view>
      </scroll-view>
    </block>
  </view>
</template>
<script>
import wepy from 'wepy'
import {connect, getStore} from 'wepy-redux'
import {getWheelOrder} from '@/store/actions'

const store = getStore()
const shopInfo = store.getState().home.shopInfo

@connect({
  amount(state) {
    return state.home.amount
  }
})
export default class indexOrder extends wepy.component {
  data = {
    orderId: '',
    orderAmount: ''
  }
  props={
    type: {
      type: Number,
      default: this.type,
      twoWay: true
    }
  }
  methods = {
    input(e) {
      this.orderId = e.detail.value
    },
    closeOrder() {
      this.$emit('closeOrder')
    },
    submitOrder() {
      let sendParams = {
        userId: shopInfo.userId,
        shopId: shopInfo.shopId,
        orderId: this.orderId
      }
      store.dispatch(getWheelOrder(sendParams)).then(
        res => {
          this.orderAmount = res.payload.amount
          this.type = 1
          this.$apply()
          console.log(res)
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/yinju.scss';
.index_order{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  box-sizing:border-box;
  background-color:rgba(0,0,0,.6);
  z-index:107;
}
.index_free{
  width:100%;
  height:100%;
  .index_free_box{
    padding:70rpx 0 18rpx 0;
    .index_free_bg{
      position:relative;
      width:669rpx;
      margin:0 auto;
      font-size:0;
      .close{
        position:absolute;
        top:28rpx;
        right:32rpx;
        width:44rpx;
        height:44rpx;
        border:1px solid #fff;
        border-radius:50%;
        line-height:44rpx;
        text-align:center;
        font-size:32rpx;
        color:#fff;
      }
    }
  .form{
    position:absolute;
    top:408rpx;
    left:50%;
    width:470rpx;
    transform:translateX(-50%);
    .order_input{
      width:470rpx;
      height:88rpx;
      padding-left:41rpx;
      background-color:#fff;
      border-radius:44rpx;
      box-sizing:border-box;
      input{
        width:100%;
        height:100%;
        line-height:88rpx;
        font-size:28rpx;
      }
    }
    .placeholder{
      line-height:88rpx;
      font-size:28rpx;
      color:#ccc;
    }
    .btn_submit{
      width:100%;
      height:88rpx;
      line-height:88rpx;
      border-radius:44rpx;
      text-align:center;
      margin-top:30rpx;
      background:linear-gradient(90deg,#F3466B,#EE3A3A);
      color:#fff;
      font-size:28rpx;
      }
    }
  }
}
.wallet{
  .balance{
    width:500rpx;
    height:132rpx;
    margin:0 auto 7rpx;
    line-height:132rpx;
    text-align:center;
    color:#fff;
    font-size:36rpx;
    background:url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/balance_bg.png') 0 0/100% 100%;
  }
  .wallet_box{
    position:relative;
    width:740rpx;
    box-sizing:border-box;
    margin-top:-130rpx;
    text-align:center;
    .bg{
      width:100%;
      image{
        height:auto;
      }
    }
    .content{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      padding-top:446rpx;
      box-sizing:border-box;
      text-align:center;
    }
    .title{
      margin-top:13rpx;
      line-height:40rpx;
      font-size:28rpx;
      color:#fff;
    }
    .money{
      margin-bottom:18rpx;
      line-height:90rpx;
      font-size:64rpx;
      color:#EB3939;
    }
    .notes{
      margin-bottom:30rpx;
      color:#D51B1B;
      font-size:28rpx;
      line-height:40rpx;
    }
    .btn_again{
      width:370rpx;
      height:88rpx;
      margin: 0 auto;
      line-height:88rpx;
      color:#fff;
      font-size:28rpx;
      border-radius:44rpx;
      background:linear-gradient(#FDD57B, #FF6347);
      box-shadow:0 4px 12rpx 0 rgba(235,57,57,1);
    }
    .notes_2{
      width:400rpx;
      margin:0 auto;
      font-size:24rpx;
      color:#fff;
    }
    .close{
      position:absolute;
      bottom:-95rpx;
      left:50%;
      width:48rpx;
      height:48rpx;
      line-height:48rpx;
      color:#fff;
      font-size:32rpx;
      transform:translate3d(-50%,50%,0);
      border-radius:50%;
      border:1px solid #fff;
    }
  }
}
</style>
