<style lang="scss" scoped>
  @import "../../scss/yinju.scss";
  .cashLayer{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.5);
  }

  .close{
    position:absolute;
    top:24rpx;
    right:24rpx;
    font-size:32rpx;
  }

  .cash_input_box{
    position:relative;
    width:600rpx;
    height:480rpx;
    padding:56rpx 0 42rpx;
    background-color:#fff;
    border-radius:16rpx;
    box-sizing:border-box;
    text-align:center;
  }


  .cashLayer .title{
    margin-bottom:20rpx;
    color:#474747;
    font-size:36rpx;
    font-weight:bold;
  }

  .input_box{
    width:480rpx;
    height:120rpx;
    line-height:120rpx;
    margin:44rpx auto 24rpx;
    background-color:#F7F7F7;
    font-size:48rpx;
    font-weight:bold;
    color:#333333;
    .float{
      font-size:36rpx;
    }
  }

  .notes_1{
    font-size:24rpx;
    .icon_box{
      margin-right:14rpx;
      font-size:32rpx;
    }
    .text_box{
      color:#8E8E93
    }
    .custom_server{
      color:#4A90E2;
    }
  }

  .btn_cash{
    width:500rpx;
    height:80rpx;
    margin:31rpx auto 0;
    line-height:80rpx;
    border-radius:40rpx;
    text-align:center;
    font-size:28rpx;
    color:#fff;
    background:linear-gradient(#EE3A3A,#F3466B)
  }

  image{
    width:100%;
    height:100%;
  }

  .cash_resulte{
    width:520rpx;
    padding:68rpx 0 41rpx;
    position:relative;
    background-color:#fff;
    border-radius:16rpx;
    text-align:center;
    .cash_success{
      width:174rpx;
      height:124rpx;
      margin:0 auto 28rpx;;
    }
    .cash_false{
      width:182rpx;
      height:128rpx;
      margin:0 auto 28rpx;
    }
    .notes_1{
      margin-top:16rpx;
    }
  }

  .notes_2{
    width:440rpx;
    margin:0 auto;
    padding:20rpx 29rpx 22rpx;
    border-radius:8rpx;
    background-color:#F7F7F7;
    line-height:33rpx;
    font-size:24rpx;
    color:#9B9B9B;
    box-sizing:border-box;
  }

  .notes_3{
    margin-top:18rpx;
    font-size:24rpx;
    color:#9B9B9B;
  }

</style>


<template>
  <view class="cashLayer flex_center">
    <!--提现金额 -->
    <view class="cash_input_box" wx:if="{{type==1}}">
      <view class="close iconfont icon-guanbi" @tap="close"></view>
      <view class="title">提现金额</view>
      <view class="input_box">
        <text class="init">¥{{balance[0]}}.</text>
        <text class="float">{{balance[1]}}</text>
      </view>
      <view class="notes_1 flex_center">
        <view class="icon_box iconfont icon-tishi"></view>
        <view class="text_box">默认提现账户全部余额</view>
      </view>
      <view class="btn_cash" @tap="banalce">确认提现</view>
    </view>
    <!-- 提现结果 -->
    <view class="cash_resulte" wx:if="{{type == 2 || type == 3}}">
      <view class="close iconfont icon-guanbi" @tap="close"></view>
      <!-- 成功 -->
      <view wx:if="{{type==2}}">
        <view class="cash_success">
          <image src="{{imgs.cash_success}}"/>
        </view>
        <view class="title">提现成功</view>
        <view class="notes_2">
          提现金额已发放至您的微信钱包 请及时留意提现到账情况
        </view>
      </view>

      <!-- 失败 -->
      <view wx:if="{{type == 3}}">
        <view class="cash_false">
          <image src="{{imgs.cash_false}}"/>
        </view>
        <view class="title">提现失败</view>
        <block wx:if="{{type==3}}">
          <view class="notes_2">
            由于系统延迟等原因导致提现失败， 请于10分钟后重新发起提现。
          </view>
          <view class="notes_1 flex_center">
            <view class="icon_box iconfont icon-tishi"></view>
            <view class="text_box">默认提现账户全部余额</view>
            <text class="custom_server">在线客服</text>
          </view>
        </block>
        <!-- <block wx:if="{{type == 3}}">
          <view class="notes_3">
            网络链接失败，请检查网络
          </view>
        </block> -->
      </view>
    </view>
  </view>
</template>

<script>
  import wepy from 'wepy'
  import imgs from '../../images/yinju.js'
  import { getStore, connect } from 'wepy-redux'
  import { cash } from '../../store/actions'
  const store = getStore()
  const shopInfo = store.getState().home.shopInfo
  console.log('cash', cash)
  @connect({
    balance(state) {
      return state.record.balance
    }
  })
  export default class cashLayer extends wepy.component {
    data = {
      imgs,
      userInfo: '',
      type: 0
    }

    onLoad() {}

    methods = {
      close() {
        this.$parent.cashLayerShow = false
        this.$parent.$apply()
      },
      banalce() {
        let sendData = {
          userId: shopInfo.userId,
          amount: this.balance.join('.'),
          // amount: 1,
          shopId: shopInfo.shopId
        }
        store.dispatch(cash(sendData)).then(res => {
          if (res.payload.code === 0) {
            this.type = 2
            this.$emit('reload')
          } else {
            this.type = 3
          }
          this.$apply()
        })
      }
    }
  }
</script>
