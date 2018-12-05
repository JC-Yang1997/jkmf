<style lang='scss' scoped>
.draw-com {
  // min-height: 439rpx;
  padding:40rpx 0;
  background-color:#fff;
  border-radius: 20rpx;
}

button{
  background-color:transparent;
  border-radius:0;
  &:after{
    border:none;
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
      background: linear-gradient(118deg, rgba(243, 70, 107, 1) 0%,rgba(238, 58, 58, 1) 100%);
      border-radius: 74rpx;
      &.gray{
        background-color:#ccc;
        background-image:none;
      }
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
    padding:44rpx 0 37rpx;
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
.getFormId{
  position:relative;
  .getFormId_a{
    position:absolute;
    top:0;
    left:0;
    width:1rpx;
    height:1rpx;
    padding:0;
    overflow:visible;
    .getFormId_b{
      position:absolute;
      top:0;
      left:0;
      width:1rpx;
      height:1rpx;
      width:260rpx;
      height:196rpx;
      font-size: 28rpx;
      font-weight: 500;
      color: #fff;
      line-height: 160rpx;
    }
  }
}
</style>
<template>
  <view class="draw-com">
    <view class="draw-contianer">
      <view wx:if="{{user.activityJoin.joinStatus === -1}}">
        <view class="draw-btn-finsh">已结束</view>
        <view class="draw-btn-num">我已拥有{{user.activityJoin.joinAwardCode}}个抽奖码</view>
        <view class="draw-tip">未达到开奖人数，活动结束</view>
      </view>
      <view wx:if="{{user.activityJoin.joinStatus === 1}}">
        <view class="draw-btn-finsh">未开始</view>
        <view class="draw-btn-num">我已拥有{{user.activityJoin.joinAwardCode}}个抽奖码</view>
        <view class="draw-tip">中奖小Tips：分享人数越多，抽奖码越多，中奖几率越大</view>
      </view>
      <view wx:if="{{user.activityJoin.joinStatus === 3}}">
        <view class="draw-btn-finsh">已开奖</view>
        <view class="draw-btn-num">我已拥有{{user.activityJoin.joinAwardCode}}个抽奖码</view>
        <view class="draw-tip">本次活动已开奖</view>
      </view>
      <view wx:if="{{user.activityJoin.joinStatus === 4}}">
        <view class="getFormId draw-btn">
          <form bindsubmit="join_activity" report-submit hover-class="none">
            <button form-type="submit" class="getFormId_a">
              <view class="getFormId_b">
                <form bindsubmit="join_activity" report-submit hover-class="none">
                  <button form-type="submit" class="getFormId_a">
                    <view class="getFormId_b">参与抽奖</view>
                  </button>
                </form>
              </view>
            </button>
          </form>
        </view>
        <view class="draw-btn-num">我已拥有{{user.activityJoin.joinAwardCode}}个抽奖码</view>
        <view class="draw-tip">中奖小Tips：分享人数越多，抽奖码越多，中奖几率越大</view>
      </view>
      <view wx:if="{{user.activityJoin.joinStatus === 5}}">
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
        <view class="draw-btn-num">我已拥有{{user.activityJoin.joinAwardCode}}个抽奖码</view>
        <view class="draw-tip">中奖小Tips：分享人数越多，抽奖码越多，中奖几率越大</view>
      </view>
      <view class="draw-empty" wx:if="{{user.activityJoin.joinStatus === 6}}">
      <!-- <view class="draw-empty" > -->
        <view class="draw-img"></view>
        <view class="draw-text">可能你的中奖码太少了</view>
        <view class="draw-btn {{user.activityJoin.redPacketText === '红包已失效'?'gray':''}}" wx:if="{{user.activityJoin.redPacketText}}">
        <!-- <view class="draw-btn"> -->
          <view class="draw-link" @tap="nav_to(0)">{{user.activityJoin.redPacketText}}</view>
        </view>
      </view>
      <view class="draw-empty" wx:if="{{user.activityJoin.joinStatus === 7}}">
      <!-- <view class="draw-empty"> -->
        <view class="draw-discount" >
          <view class="draw-img"></view>
          <view class="draw-discount-text">别灰心，我们为你准备了其他礼物</view>
          <view class="draw-btn {{user.activityJoin.redPacketText === '红包已失效'?'gray':''}}" wx:if="{{user.activityJoin.redPacketText}}">
          <!-- <view class="draw-btn"> -->
            <view class="draw-link" @tap="nav_to(0)">{{user.activityJoin.redPacketText}}</view>
          </view>
        </view>
        <view class="draw-discount-care">
          <view class="draw-coms">
              <view class="draw-discount-lf">
                <view>{{user.activityJoin.shopCoupon.amount}}<text>元</text></view>
              </view>
              <view class="draw-discount-lr">
                <view class="draw-discount-title">{{user.activityJoin.shopCoupon.name}}</view>
                <view class="draw-discount-time">{{user.activityJoin.shopCoupon.couponStartTime}}-{{user.activityJoin.shopCoupon.couponEndTime}}</view>
                <view class="draw-discount-tip">指定商品可用</view>
              </view>          
            </view> 
          </view>
      </view>
      <view class="draw-success" wx:if="{{user.activityJoin.joinStatus === 10}}">
        <view class="draw-img"></view>
        <view class="draw-text">请在规定时间内添加客服微信领取奖励</view>
        <!-- <view class="draw-qr-kewyer">{{user.activityDetail.customServiceWxNum||'没有微信号'}}<text class="copy" @tap="copy">复制</text></view> -->
        <view class="draw-btn"><view @tap="nav_to(1)" class="draw-link">领取奖品</view></view>
      </view>
      <view class="draw-succ-finish" wx:if="{{user.activityJoin.joinStatus === 9}}">
        <view class="draw-img"></view>
        <view class="draw-text">你已完成领奖任务，如有疑问联系客服</view>
        <!-- <view class="draw-qr"><image src="{{user.activityDetail.code}}"/></view> -->
        <view class="draw-qr-kewyer">{{user.activityJoin.customServiceWxNum||'没有微信号'}} <text class="copy" @tap="copy">复制</text></view>
        <view class="draw-btn">已领取</view>
      </view>
      <view class="draw-err" wx:if="{{user.activityJoin.joinStatus === 8}}">
        <view class="draw-img"></view>
        <view class="draw-text"><text>未在规定时间内领取奖品导致任务失败</text> 有疑问请联系客服</view>
        <view class="draw-qr-kewyer">{{user.activityJoin.customServiceWxNum||'没有微信号'}}<text class="copy" @tap="copy">复制</text></view>
        <!-- <view class="draw-qr-kf">客服二维码</view> -->
      </view>
    </view>
    <stepLayer :stepLayerShow.sync="stepLayerShow" :list.sync="user" :urlType.sync="urlType" :activityId.sync="activityId"></stepLayer>
  </view>
</template>
<script>
import wepy from 'wepy'
import { getStore, connect } from 'wepy-redux'
import {joinActivity} from '../store/actions'
import stepLayer from './yinju/stepLayer'
const store = getStore()
const shopInfo = store.getState().home.shopInfo
@connect({
  joinActivityData(state) {
    return state.taskDetail.joinActivityData
  }
})
export default class DrawTask extends wepy.component {
  props = {
    user: {
      type: Object,
      twoWay: true,
      default: {}
    },
    activityId: {
      default: 0
    },
    pub_uid: {
      default: ''
    }
  }
  components = {
    stepLayer
  }
  data = {
    formIds: [],
    // 步骤弹窗
    stepLayerShow: false,
    urlType: -1
  }
  onLoad() { }
  methods = {
    copy() {
      wepy.setClipboardData({
        data: '复制成功',
        success: function(res) {
          // self.setData({copyTip:true}),
        }
      })
    },
    nav_to(index) {
      if (this.user.activityJoin.redPacketText === '已失效') {
        wepy.showToast({
          title: '该红包已失效',
          icon: 'none'
        })
        return
      }
      index *= 1
      this.urlType = index
      this.stepLayerShow = true
    },
    // 参与活动
    join_activity(e) {
      console.log('this.formIds', this.formIds)
      this.formIds.push(e.detail.formId)
      if (this.formIds.length < 2) {
        return
      }
      let sendData = {
        uid: shopInfo.userId,
          // uid: 5,
        aid: this.activityId,
        pub_uid: this.pub_uid,
        formIds: this.formIds.join(',')
      }
      store.dispatch(joinActivity(JSON.stringify(sendData))).then(res => {
          // 弹出抽奖码弹窗
        if (res.payload.code === 0) {
          this.$emit('type', res.payload.data)
        } else {
          wepy.showToast({
            title: res.payload.message,
            icon: 'none'
          })
        }
      })
    }
  };
}
</script>
