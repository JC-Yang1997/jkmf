<style lang="scss" scoped>
  @import '../../scss/yinju.scss';
  .close_yinju{
    position:absolute;
    top:24rpx;
    right:24rpx;
    width:32rpx;
    height:32rpx;
  }
  .gift_layer{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.4);
    z-index:2;
  }
  .fail{
    position:relative;
    width:520rpx;
    padding:64rpx 0 69rpx 0;
    text-align:center;
    background-color:#fff;
    border-radius:20rpx;
    text-align:center;
    .resulte_img{
      width:182rpx;
      height:128rpx;
      margin:0 auto;
      margin-bottom:38rpx;
    }
    .resulte_text{
      font-size:36rpx;
      color:#474747;
      line-height:50rpx;
    }
    .notes{
      margin-top:18rpx;
      color:#9B9B9B;
      font-size:24rpx;
    }
    .btn_relapply{
      width:352rpx;
      height:80rpx;
      margin:43rpx auto 0;
      text-align:center;
      line-height:80rpx;
      background:linear-gradient(90deg,#F3466B,#EE3A3A);
      font-size:28rpx;
      color:#fff;
      border-radius:44rpx;
    }
  }
  .complete{
    position:relative;
    width:609rpx;
    height:477rpx;
    padding-top:332rpx;
    box-sizing:border-box;
    background:url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/complete_bg.png') 0 0/100% 100%;
    .btn_get_gift{
      width:300rpx;
      height:88rpx;
      margin:0 auto;
      text-align:center;
      line-height:88rpx;
      border-radius:44rpx;
      font-size:28rpx;
      color:#fff;
      background:linear-gradient(#FDD57B,#FF6347)
    }
  }
  .close{
    position:absolute;
    bottom:-56rpx;
    left:50%;
    width:48rpx;
    height:48rpx;
    font-size:32rpx;
    line-height:48rpx;
    text-align:center;
    color:#fff;
    border-radius:50%;
    border:1px solid #fff;
    transform:translate3d(-50%,50%,0);
  }
  .red_packet{
    position:relative;
    width:600rpx;
    height:595rpx;
    box-sizing:border-box;
    padding-top:360rpx;
    background:url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/red_packet.png') 0 0/100% 100%;
    .red_packet_text_box{
      font-size:24rpx;
      color:#fff;
      .red_packet_text{
        margin:0 6rpx;
      }
    }
    .money{
      margin-top:22rpx;
      font-size:50rpx;
      color:red;
      text-align:center;
    }
    .notes{
      margin-top:12rpx;
      font-size:22rpx;
      text-align:center;
      color:red;
    }
  }

</style>

<template>
  <view class="gift_layer flex_center">
    <view class="fail" wx:if="{{stepData.status == -2}}">
      <view class="resulte_img">
        <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/fail.png"/>
      </view>
      <view class="resulte_text">审核失败</view>
      <view class="notes">未按要求提交图片</view>
      <view class="btn_relapply" @tap="close(1)">重新提交</view>
    </view>
    <!-- <view class="complete" @tap="close(4)" wx:if="{{status == 2}}">
      <view class="btn_get_gift">领取返现红包</view>
    </view> -->
    <view class="red_packet" wx:if="{{stepData.isDialog}}">
    <!-- <view class="red_packet"> -->
      <view class="red_packet_text_box flex_center">
        <view class="line">-</view>
        <view class="red_packet_text">中奖红包</view>
        <view class="line">-</view>
      </view>
      <view class="money">{{stepData.redPackMoney}}</view>
      <view class="notes">可在钱包中查看</view>
      <view class="close icon-guanbi iconfont" @tap="close"></view>
    </view>
  </view>

</template>

<script>
  import wepy from 'wepy'
  import { connect } from 'wepy-redux'
  @connect({
    stepData(state) {
      this.status = state.drawTask.data.status
      return state.drawTask.data
    },
    state(state) {
      return state
    }
  })
  export default class giftLayer extends wepy.component {
    onLoad() {}
    data = {
      status: 0,
      taskLayer: false
    }
    methods = {
      close(index) {
        index *= 1
        if (index === 1) {
          this.$emit('reload')
        }
        this.$parent.layerShow = false
        this.$parent.$apply()
      }
    }
  }
</script>
