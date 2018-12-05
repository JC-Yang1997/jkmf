<template>
  <view class='wallet'>
    <!-- 顶部渐变背景 -->
    <view class='top'>
      <view class='balance_key'>余额（元）</view>
      <view class="space_between align_items">
        <view class='balance_val'>
        <text class='int'>¥{{balance[0]}}.</text>
        <text class='float'>{{balance[1]}}</text>
      </view>
      <view class='cash' @tap="show_cash_layer" :class="{unable:balance[0]<10}">全部提现</view>
      </view>
      <view class='notes'>
        <view class='settlement'>提现金额大于10元</view>
        <!-- <view class='cash_step align_items'>
          <view class='icon_box iconfont icon-yiwen'></view>
          <view class='text_box'>提现步骤</view>
        </view> -->
      </view>
    </view>
    <view class='main'>
      <view class='list'>
        <navigator url="/pages/wallet/revenueRecord" hover-class="none" class='list_item space_between align_items'>
          <view class='key align_items'>
            <view class='icon_box iconfont icon-jiesuan'></view>
            <view class='text_box'>收入记录</view>
          </view>
          <view class='val iconfont icon-jinru'></view>
        </navigator>
        <navigator url="/pages/wallet/cashDetal?type=0" hover-class="none" class='list_item space_between align_items'>
          <view class='key align_items'>
            <view class='icon_box iconfont icon-tixian1'></view>
            <view class='text_box'>提现记录</view>
          </view>
          <view class='val iconfont icon-jinru'></view>
        </navigator>
        <navigator url="/pages/wallet/cashDetal?type=1" hover-class="none" class='list_item space_between align_items'>
          <view class='key align_items'>
            <view class='icon_box iconfont icon-mingxi'></view>
            <view class='text_box'>交易明细</view>
          </view>
          <view class='val iconfont icon-jinru'></view>
        </navigator>
      </view>
    </view>
    <!-- 提现弹窗 -->
    <cashLayer wx:if="{{cashLayerShow}}"></cashLayer>
  </view>
</template>
<script>
  import wepy from 'wepy'
  import cashLayer from '../../components/yinju/cashLayer'

  import { getStore, connect } from 'wepy-redux'
  import { queryUserBalance } from '../../store/actions'
  const store = getStore()
  const shopInfo = store.getState().home.shopInfo
  @connect({
    balance(state) {
      return state.record.balance
    }
  })

  export default class Index extends wepy.page {
    config = {
      navigationBarTitleText: '钱包',
      navigationBarBackgroundColor: '#FF8A47',
      navigationBarTextStyle: '#fff'
    }

    data = {
      list: [
        {
          text: '收入记录',
          url: ''
        },
        {
          text: '提现记录',
          url: ''
        },
        {
          text: '支付记录',
          url: ''
        }
      ],
      cashLayerShow: false
    }

    components = {
      cashLayer
    }

    events = {
      reload() {
        this.initData()
      }
    }
    onShow() {
      this.initData()
    }

    initData() {
      let sendData = {
        merchantId: shopInfo.merchantId,
        shopId: shopInfo.shopId,
        userId: shopInfo.userId
      }
      store.dispatch(queryUserBalance(sendData)).then(res => {
        // console.log('initData', res)
      })
    }

    methods = {
      show_cash_layer() {
        if (this.balance[0] < 10) {
          wepy.showToast({
            title: '余额不足10元',
            icon: 'none'
          })
          return
        }
        this.cashLayerShow = true
        this.$com.cashLayer.type = 1
        this.$com.cashLayer.$apply()
      }
    }
}

</script>

<style lang='scss'>
  @import "../../scss/yinju.scss";

  .top{
    height:360rpx;
    padding:37rpx 25rpx;
    box-sizing:border-box;
    background:linear-gradient(#FF8C47,#FF4763);
    // text-align:center;
    .balance_key{
      margin-bottom:54rpx;
      font-size:24rpx;
      color:#fff;
      line-height:33rpx;
    }
    .balance_val{
      font-size:72rpx;
      color:#fff;
      line-height:100rpx;
      .float{
        font-size:40rpx;
      }
    }
    .cash{
      width:200rpx;
      height:64rpx;
      // margin:4rpx auto 0;
      line-height:64rpx;
      text-align:center;
      border-radius:32rpx;
      background-color:#fff;
      color:#FF6647;
      font-size:24rpx;
    }
    .unable{
      background-color:#cccccc;
      color:#fff;
    }
    .notes{
      margin-top:61rpx;
      line-height:40rpx;
      font-size:28rpx;
      color:#fff;
      .settlement{
        white-space:pre;
      }
      .cash_step{
        .icon_box{
          margin-right:7rpx;
        }
      }
    }
  }

  .main{
    padding:20rpx 26rpx 0;
    .list_item{
      height:96rpx;
      padding:0 10rpx 0 26rpx;
      margin-bottom:2rpx;
      background-color:#fff;
      border-radius:8rpx;
      font-size:28rpx;
      color:#474747;
      .icon_box{
        margin-right:20rpx;
        font-size:40rpx;
      }
      .val{
        font-size:32rpx;
      }
    }
  }
</style>
