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
      width:680rpx;
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
        right:24rpx;
        width:32rpx;
        height:32rpx;
        font-size:32rpx;
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
      <view class="title">如何领取{{urlType==0?'红包':'奖品'}}</view>
      <view class="close icon-guanbi iconfont" @tap="close"></view>
      <view class="step_content">
        <view class="step align_items">
          <view class="step_num">1</view>
          <view class="step_text">请添加客服个人微信号</view>
        </view>
        <view class="wx_box item_content">
          <view class="wx">{{list.activityJoin.customServiceWxNum||weChatNum}}</view>
          <view class="copy_text" @tap="copy">复制</view>
        </view>
        <view class="step align_items">
          <view class="step_num">2</view>
          <view class="step_text">与客服沟通获取领奖教程图片</view>
        </view>
        <view class="step align_items">
          <view class="step_num">3</view>
          <view class="step_text">确认以上步骤是否完成</view>
        </view>
      </view>
      <view class="btn_doen" @tap="nav_to">已完成以上步骤</view>
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
      weChatNum: {
        default: '没有微信号'
      },
      list: {
        default: ''
      },
      urlType: {
        default: -1
      },
      activityId: {
        default: -1
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
        let url = ''
        switch (this.urlType * 1) {
          case 0:
            url = `/pages/newComer/getGift?activityId=${this.activityId}`
            break
          case 1:
            url = `/pages/task/drawTask?activityId=${this.activityId}`
            break
          case 2:
            url = '/pages/detail/detail?activityDefId=' + this.activityDefId + '&urlType=1'
            break
        }
        wepy.navigateTo({
          url
        })
      },
      copy() {
        wepy.setClipboardData({
          data: this.wx || '没有微信号',
          success: function(res) {
          // self.setData({copyTip:true}),
          }
        })
      }
    }
  }

</script>
