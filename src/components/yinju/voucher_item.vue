<style lang="scss">
  .voucher_item{
    position:relative;
    height:222rpx;
    background:url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/voucher_bg.png') 0 0/100% 100%;
    .money_box{
      position:absolute;
      top:0;
      left:0;
      width:196rpx;
      height:200rpx;
      color:#fff;
      font-size:48rpx;
      .money_unit{
        font-size:24rpx;
      }
    }
    .card_content{
      margin-left:226rpx;
      .name{
        margin-bottom:18rpx;
        .text_box{
          margin-right:4rpx;
          font-size:28rpx;
          color:#EB3939;
          font-weight:bold;
        }
        .icon_box{
          width:28rpx;
          height:28rpx;
          font-size:0;
        }
      }
      .date{
        color:#F56C6C;
        font-size:20rpx;
        line-height:28rpx;
      }
      .notes{
        margin-top:4rpx;
        font-size:20rpx;
        color:#F56C6C;
        line-height:28rpx;
      }
    }
  }
</style>

<template>
  <view class="voucher_item align_items" @tap="copy" wx:for="{{items}}" wx:key="{{item.index}}">
    <view class="money_box flex_center">
      <view class="money">
        <text class="money_num">{{item.amount}}</text>
        <text class="money_unit">元</text>
      </view>
    </view>
    <view class="card_content">
      <view class="name align_items">
        <view class="text_box">{{item.name}}</view>
        <view class="icon_box">
          <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/icon_tb.png"/>
        </view>
      </view>
      <view class="date">{{item.couponStartTime}}-{{item.couponEndTime}}</view>
      <view class="notes">指定商品可用</view>
    </view>
  </view>
</template>
<script>
  import wepy from 'wepy'
  export default class voucherItem extends wepy.component {
    props = {
      items: {
        type: Array,
        twoWay: true,
        default: []
      }
    }
    methods = {
      copy() {
        this.$parent.layer_show = true
        this.$parent.$apply()
      }
    }
  }

</script>
