<style lang="scss">
  .task_state{
    padding:52rpx 0 72rpx;
    background-color:#fff;
    border-radius:20rpx;
    .resulte_img{
      width:180rpx;
      height:127rpx;
      margin:0 auto;
    }
    .resulte_text{
      margin-top:34rpx;
      text-align:center;
      font-size:28rpx;
      color:#333333;
      line-height:44rpx;
    }
    .wx_number_copy{
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
      width:480rpx;
      height:80rpx;
      line-height:80rpx;
      margin:36rpx auto 0;
      padding:0 36rpx 0 40rpx;
      background-color:#F7F7F7;
      border-radius:40rpx;
      font-size:24rpx;
      box-sizing:border-box;
      .wx_number{
        color:#333333;
      }
      .btn_copy{
        color:#EB3939;
      }
    }
    .btn_get_gift{
      width:500rpx;
      height:80rpx;
      margin:51rpx auto 0;
      border-radius:40rpx;
      line-height:80rpx;
      text-align:center;
      background:linear-gradient(90deg,#F3466B,#EE3A3A);
      font-size:28rpx;
      color:#fff;
    }
    .false{
      .resulte_text{
        margin-top:42rpx;
      }
    }
  }
  .draw-contianer {
    text-align: center;
    // padding-top: 20rpx;

    .draw-btn {
      display: flex;
      justify-content: center;
      width: 260rpx;
      height: 208rpx;
      margin: 0 auto;
      background-image: url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/drawlintbtn.png');
      background-repeat: no-repeat;
      background-size: 100%;
      font-size: 28rpx;
      font-weight: 500;
      color: #fff;
      line-height: 160rpx;
    }
    .draw-btn-finsh{
      display: flex;
      justify-content: center;
      width: 260rpx;
      height: 224rpx;
      margin: 0 auto;
      background-image: url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/drawerr.png');
      background-repeat: no-repeat;
      background-size: cover;
      font-size: 28rpx;
      font-weight: 500;
      color: #fff;
      line-height: 160rpx;
    }
    .draw-join {
      display: flex;
      justify-content: space-between;
      padding: 0 10rpx;
      @each $name in (btn, lottery) {
        .draw-fs-#{$name} {
          width: 260rpx;
          height: 192rpx;
          line-height: 180rpx;
          font-size: 28rpx;
          font-weight: 500;
          flex:none;
        }
      }
      .draw-fs-btn {
        width:260rpx;
        height:203rpx;
        margin:0;
        background-image: url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/drawlintbtn.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        color: rgba(255, 255, 255, 1);
        line-height:normal;
        padding-top:56rpx;
        box-sizing:border-box;
        &:after{
          border:none;
        }
      }
      .draw-circle {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: -20rpx;
        .draw-dot {
          width: 14rpx;
          height: 14rpx;
          border-radius: 50%;
          margin: 0 13rpx;
          background: linear-gradient(
            55deg,
            rgba(255, 99, 71, 1) 0%,
            rgba(255, 140, 71, 0.73) 100%
          );
        }
      }
      .draw-fs-lottery {
        width:218rpx;
        height:186rpx;
        background-image: url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/errbtn.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        padding-top:56rpx;
        color: rgba(255, 255, 255, 1);
        box-sizing:border-box;
        line-height:normal;
      }
    }
    .draw-btn-num {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 58%;
      height: 60rpx;
      margin: 44rpx auto 0 auto;
      background: linear-gradient(
        180deg,
        rgba(253, 245, 245, 1) 0%,
        rgba(250, 232, 232, 1) 100%
      );
      border-radius: 44rpx;
      font-size: 24rpx;
      font-weight: 400;
      color: rgba(253, 117, 87, 1);
      line-height: 32rpx;
    }
    .draw-tip {
      margin-top: 21rpx;
      font-size: 24rpx;
      font-weight: 400;
      color: rgba(155, 155, 155, 1);
      line-height: 33rpx;
    }
    .draw-empty {
      .draw-img {
        height: 140rpx;
        width: 220rpx;
        margin: 0 auto;
        background-image: url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/emptyzj.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .draw-text {
        margin: 28rpx 0;
        font-size: 28rpx;
        font-weight: 400;
        color: #333333;
        line-height: 40rpx;
      }
      .draw-btn {
        margin: 0 auto;
        width: 369rpx;
        height: 88rpx;
        line-height: 88rpx;
        background: linear-gradient(
          118deg,
          rgba(243, 70, 107, 1) 0%,
          rgba(238, 58, 58, 1) 100%
        );
        border-radius: 74rpx;
      }
    }
    .draw-discount {
      padding-bottom: 38rpx;
      background-color: #fff;
      border-radius: 8rpx;
      .draw-img {
        height: 140rpx;
        width: 220rpx;
        margin: 0 auto;
        background-image: url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/emptyzj.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .draw-discount-text {
        font-size: 28rpx;
        font-weight: 400;
        margin: 22rpx auto 38rpx auto;
        color: rgba(51, 51, 51, 1);
        line-height: 40rpx;
      }
      .get-draw {
        margin: 38rpx auto;
        font-size: 28rpx;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        width: 369rpx;
        height: 88rpx;
        line-height: 88rpx;
        background: linear-gradient(
          118deg,
          rgba(243, 70, 107, 1) 0%,
          rgba(238, 58, 58, 1) 100%
        );
        border-radius: 74rpx;
      }
    }
    .draw-discount-care {
      width: 702rpx;
      height: 160rpx;
      margin-top: 20rpx;
      background: rgba(245, 108, 108, 1);
      border-radius: 8rpx;
      overflow: hidden;
      padding: 10rpx 14rpx 10rpx 0;
      box-sizing: border-box;
      .draw-coms {
        display: flex;
        width: 100%;
        height: 100%;
        background-color: #fff;
        .draw-discount-lf {
          position: relative;
          width: 196rpx;
          height: 205rpx;
          margin-top: -20rpx;
          background: linear-gradient(
            90deg,
            rgba(248, 103, 135, 1) 0%,
            rgba(243, 89, 89, 1) 100%
          );
          view {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: #fff;
            font-size: 48rpx;
            vertical-align: baseline;
            text {
              font-size: 24rpx;
            }
          }
          border-radius: 50%;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
        .draw-discount-lr {
          background-color: #fff;
          color: #eb3939;
          flex-flow: 1;
          width: 70%;
          text-align: left;
          padding-left: 56rpx;
          .draw-discount-title {
            font-size: 28rpx;
            font-weight: 500;
            color: rgba(235, 57, 57, 1);
            line-height: 40rpx;
            margin-bottom: 18rpx;
            margin-top: 11rpx;
          }
          .draw-discount-time {
            font-size: 20rpx;
            font-weight: 400;
            color: rgba(245, 108, 108, 1);
            line-height: 28rpx;
          }
          .draw-discount-tip {
            font-size: 20rpx;
            font-weight: 400;
            color: rgba(245, 108, 108, 1);
            line-height: 28rpx;
          }
        }
      }
    }
    .draw-success {
      padding:44rpx 0 64rpx;
      background-color:#fff;
      border-radius:20rpx;
      .draw-img {
        margin: 0 auto;
        height: 251rpx;
        width: 316rpx;
        background: url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/get_gift_bg.png') 0 0/100% 100%;
      }
      .draw-text {
        font-size: 28rpx;
        font-weight: 400;
        color: #333;
        margin: 55rpx auto 33rpx auto;
      }
      .draw-qr {
        width: 264rpx;
        height: 264rpx;
        margin: 0 auto;
        background-color: #ccc;
        margin-bottom: 12rpx;
        image {
          width: 100%;
          height: 100%;
        }
      }
      .draw-qr-kf {
        font-size: 24rpx;
        font-weight: 400;
        color: rgba(155, 155, 155, 1);
        line-height: 33rpx;
      }
      .draw-btn {
        width: 500rpx;
        height: 80rpx;
        line-height: 80rpx;
        margin-top: 33rpx;
        background: linear-gradient(
          118deg,
          rgba(243, 70, 107, 1) 0%,
          rgba(238, 58, 58, 1) 100%
        );
        border-radius: 74rpx;
        .draw-link {
          width: 100%;
          height: 100%;
        }
      }
    }
    .draw-succ-finish,
    .draw-err {
      background-color: #fff;
    }
    @each $name in (succ-finish, err) {
      .draw-#{$name} {
        padding-bottom: 64rpx;
        padding-bottom: 64rpx;
        .draw-img {
          height: 135rpx;
          width: 180rpx;
          @if $name == succ-finish {
            background-image: url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/cash_success.png');
          }
          @if $name == err {
            background-image: url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/cash_false.png');
          }
          background-repeat: no-repeat;
          background-size: cover;
          margin: 0 auto;
        }

        .draw-text {
          font-size: 28rpx;
          font-weight: 400;
          margin: 33rpx auto 19rpx auto;
          color: rgba(51, 51, 51, 1);
          text {
            display: block;
          }
        }
        .draw-qr {
          width: 264rpx;
          height: 264rpx;
          margin: 0 auto;
          background-color: #ccc;
          image {
            width: 100%;
            height: 100%;
          }
        }
        .draw-qr-kf {
          font-size: 24rpx;
          font-weight: 400;
          color: rgba(155, 155, 155, 1);
          line-height: 33rpx;
          margin-top: 20rpx;
        }
        .draw-btn {
          width: 500rpx;
          height: 80rpx;
          line-height: 80rpx;
          margin-top: 33rpx;
          background: #ccc;
          border-radius: 74rpx;
          color: #fff;
          .draw-link {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .draw-qr-kewyer {
      width: 480rpx;
      height: 80rpx;
      background: rgba(247, 247, 247, 1);
      border-radius: 48rpx;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 22rpx 40rpx;
      font-size: 24rpx;
      color: #333;
      box-sizing: border-box;
      .copy {
        width: 48rpx;
        height: 33rpx;
        font-size: 24rpx;
        font-weight: 400;
        color: rgba(235, 57, 57, 1);
        line-height: 33rpx;
      }
    }
    .draw-awit {
      .draw-img {
        width: 260rpx;
        height: 222rpx;
        line-height: 180rpx;
        font-size: 28rpx;
        font-weight: 500;
        color: #fff;
        background-image: url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/drawerr.png');
        background-repeat: no-repeat;
        background-size: cover;
        margin: 0 auto;
      }
    }
  }
</style>

<template>
  <!-- <view>10中奖 -1 失败</view> -->
  <view class="task_state">
    <view class="draw-contianer" wx:if="{{list.activityJoin.joinStatus !== 10 && list.activityJoin.joinStatus !== -1}}">
      <view class="draw-join">
        <button open-type="share" class="draw-fs-btn" hover-class="none">召唤好友</button>
        <view class="draw-circle">
          <text class="draw-dot"></text>
          <text class="draw-dot"></text>
          <text class="draw-dot"></text>
          <text class="draw-dot"></text>
        </view>
        <view class="draw-fs-lottery">等待开奖</view>
      </view>
    </view>
    <view class="success" wx:if="{{list.activityJoin.joinStatus === 10}}">
      <view class="resulte_img">
        <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/cash_success.png"/>
      </view>
      <view class="resulte_text">
        <view>恭喜你成功完成邀请任务！</view>
        <view>请在规定时间内添加客服微信号了解如何领奖</view>
      </view>
      <!-- <view class="wx_number_copy" @tap="copy">
        <view class="wx_number">{{list.activityJoin.customServiceWxNum||'没有微信号'}}</view>
        <view class="btn_copy">复制</view>
      </view> -->
      <view class="btn_get_gift" @tap="nav_to(0)">领取奖品</view>
    </view>
    <view class="false" wx:if="{{list.activityJoin.joinStatus === -1}}">
    <!-- <view class="false"> -->
      <view class="resulte_img">
        <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/cash_false.png"/>
      </view>
      <view class="resulte_text ">
        <view>任务失败</view>
      </view>
      <view class="btn_get_gift" @tap="nav_to(1)">重新发起</view>
    </view>
    <stepLayer :stepLayerShow.sync="stepLayerShow" :list.sync="list" :urlType.sync="urlType" :activityId.sync="activityId"></stepLayer>
  </view>
</template>

<script>
  import wepy from 'wepy'
  import stepLayer from './stepLayer'
  export default class taskState extends wepy.component {
    props = {
      list: {
        type: Object,
        default: {}
      },
      activityId: {
        default: 0
      },
      activityDefId: {
        default: 0
      }
    }
    data = {
      // 步骤弹窗
      stepLayerShow: false,
      // 这个urlType不是重新发起链接上所带的urlType，是步骤弹窗的urlType
      urlType: -1
    }
    components = {
      stepLayer
    }
    methods = {
      nav_to(index) {
        index *= 1
        if (index === 0) {
          this.urlType = 1
          this.stepLayerShow = true
        } else {
          wepy.navigateTo({
            url: `/pages/detail/detail?activityDefId=${this.activityDefId}&urlType=1`
          })
        }
      },
      copy() {
        wepy.setClipboardData({
          data: this.list.activityDetail.customServiceWxNum || '没有微信号',
          success: () => {
            console.log('复制成功')
          }
        })
      }
    }
  }

</script>
