<style lang="scss" scoped>
  .steplayer{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.6);
    z-index:2;
    .steplayer_content{
      position:relative;
      width:674rpx;
      padding:56rpx 40rpx 72rpx;
      border-radius:35rpx;
      background-color:#fff;
      box-sizing:border-box;
      .title{
        margin-bottom:26rpx;
        font-size:36rpx;
        color:#474747;
        text-align:center;
        line-height:50rpx;
      }
      .close{
        position:absolute;
        top:24rpx;
        right:34rpx;
        font-size:40rpx;
        color:#333;
      }
      .step_content{
        width:600rpx;
        padding:32rpx 0 36rpx 24rpx;
        box-sizing:border-box;
        background-color:#F7F7F7;
        border-radius:8rpx;
        border:1px dotted #ccc;
      }
      .step{
        height:40rpx;
        margin-bottom:32rpx;
        &:last-child{
          margin:0;
        }
      }
      .step_num{
        width:32rpx;
        height:32rpx;
        margin-right:22rpx;
        border-radius:50%;
        line-height:32rpx;
        text-align:center;
        background-color:#F56C6C;
        color:#fff;
        font-size:24rpx;
      }
      .step_text{
        line-height:40rpx;
        color:#8E8E93;
        font-size:28rpx;
      }
      .wx_box{
        width:480rpx;
        height:80rpx;
        margin-bottom:36rpx;
        padding:0 40rpx;
        box-sizing:border-box;
        border-radius:40rpx;
        background-color:#fff;
        font-size:24rpx;
      }
      .wx{
        color:#333;
      }
      .copy_text{
        color:#EB3939;
      }
      .btn_doen{
        width:280rpx;
        height:80rpx;
        margin:66rpx auto 0;
        border-radius:80rpx;
        line-height:80rpx;
        text-align:center;
        color:#fff;
        font-size:28rpx;
        background:linear-gradient(90deg,#F3466B, #EE3A3A)
      }
    }
  }
</style>

<template>
  <view class="steplayer flex_center" wx:if="{{stepLayerShow}}">
    <view class="steplayer_content">
      <view class="title">免单赠品领取步骤</view>
      <view class="close icon-guanbi iconfont" @tap="close"></view>
      <view class="step_content">
        <view class="step align_items">
          <view class="step_num">1</view>
          <view class="step_text">支付0.1元发起抽奖活动；</view>
        </view>
        <view class="step align_items">
          <view class="step_num">2</view>
          <view class="step_text">邀请足够数量好友参与抽奖活动；</view>
        </view>
        <view class="step align_items">
          <view class="step_num">3</view>
          <view class="step_text">去淘宝店铺购买该赠品；</view>
        </view>
         <view class="step align_items">
          <view class="step_num">4</view>
          <view class="step_text">按要求上传商品购买相关截图并回填订单；</view>
        </view>
         <view class="step align_items">
          <view class="step_num">5</view>
          <view class="step_text">审核通过后即可获得全额返现金；</view>
        </view>
      </view>
      <view class="btn_doen" @tap="nav_to">0.1元发起抽奖</view>
    </view>
  </view>
</template>

<script>
  import wepy from 'wepy'
  export default class stepLayer extends wepy.component {
    props = {
      stepLayerShow: {
        type: Boolean,
        default: false,
        twoWay: true
      },
      activityDefId: {
        default: -1
      }
    }

    data = {}
    methods = {
      close() {
        this.stepLayerShow = false
      },
      nav_to() {
        let url = `/pages/detail/detail?activityDefId=${this.activityDefId}&new=true`
        wepy.navigateTo({
          url
        })
      }
    }
  }

</script>
