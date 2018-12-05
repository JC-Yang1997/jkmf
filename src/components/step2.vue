<style lang='scss'>
.step2 {
  .task-order {
    position: relative;
    width: 93%;
    padding-top: 60rpx;
    min-height: 169rpx;
    background: rgba(255, 255, 255, 1);
    border-radius: 20rpx;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .task-btn {
      margin-top:40rpx;
    }
    .how_to_get_order{
      margin-top:18rpx;
      .icon_box{
        margin-right:10rpx;
        font-size:24rpx;
        color:#F56C6C;
      }
      .text_box{
        font-size:24rpx;
        color:#F56C6C;
        line-height:33rpx;
      }
    }
    input {
      width: 480rpx;
      height: 88rpx;
      border-radius: 44rpx;
      font-size: 24rpx;
      font-weight: 400;
      background: rgba(247, 247, 247, 1);
      text-align: center;
      color: #333;
    }
    .task-layer {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 20rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99999;
      .finish {
        width: 288rpx;
        height: 80rpx;
        line-height: 80rpx;
        border-radius: 8rpx;
        border: 2rpx solid #eb3939;
        font-size: 28rpx;
        font-weight: 500;
        color: #eb3939;
        background-color: transparent;
      }
    }
  }
  .task-name {
    font-size: 24rpx;
    font-weight: 400;
    color: rgba(204, 212, 225, 1);
    line-height: 33rpx;
  }
  .task-care {
    width: 91%;
    height: 160rpx;
    background: rgba(245, 108, 108, 1);
    border-radius: 8rpx;
    padding-right: 14rpx;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    .task-care-price {
      width: 196rpx;
      height: 100%;
      line-height: 160rpx;
      font-size: 48rpx;
      font-weight: 600;
      vertical-align: middle;
      color: rgba(255, 255, 255, 1);
      background: linear-gradient(
        90deg,
        rgba(248, 103, 135, 1) 0%,
        rgba(243, 89, 89, 1) 100%
      );
      text-align: center;
      box-shadow: 10rpx 0px 10rpx -5rpx rgba(235, 57, 57, 0.22);
      border-radius: 8rpx;
      text {
        font-size: 24rpx;
      }
    }
    .task-care-rl {
      background-color: #fff;
      margin: 10rpx 14rpx 10rpx 0;
      flex: 1;
      height: 90%;
      border-radius: 8rpx;
      box-sizing: border-box;
      padding-left: 56rpx;
      .task-draw-header {
        font-size: 28rpx;
        font-weight: 500;
        color: rgba(235, 57, 57, 1);
        line-height: 40rpx;
        margin-top: 13rpx;
        margin-bottom: 16rpx;
      }
      .task-tr {
        font-size: 20rpx;
        font-weight: 400;
        color: rgba(245, 108, 108, 1);
        line-height: 28rpx;
      }
    }
  }
}
.task-btn-disabled {
  width: 500rpx;
  height: 88rpx;
  line-height: 88rpx;
  text-align: center;
  margin: 63rpx auto 63rpx auto;
  background: rgba(204, 204, 204, 1);
  border-radius: 44rpx;
  font-size: 28rpx;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.task-succ-layer {
  width: 100%;
  height:100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}
.placeholder{
  color:#ccc;
}

.step2 .operation_steps_box{
  // 红包弹窗
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
    .close{
      position:absolute;
      top:auto;
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
  }
}
</style>
<template>
  <view class="step2">
    <view wx:if="{{stepData.status > 1 }}">
    <!-- <view> -->
      <view class="task-header flex_center">
        <view class="text_box">步骤二：填写宝贝订单编号</view>
        <view class="icon_box" wx:if="{{stepData.status > 2}}">
          <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/icon_doen.png"/>
        </view>
      </view>
      <view class="task-order">
        <input placeholder-class="placeholder" disabled="{{stepData.status > 2}}" placeholder="{{stepData.orderNo === ''? '请粘贴已购买宝贝的订单编号': stepData.orderNo}}"  bindinput ="order"  type="text" />
        <view class="how_to_get_order align_items" @tap="layerToggle(1)">
          <view class="icon_box icon-yiwen iconfont"></view>
          <view class="text_box">如何获得订单编号</view>
        </view>
        <view class="task-btn red" wx:if="{{stepData.orderNo === ''}}" @tap="submit">确认提交</view>
        <view class="task-btn-disabled"  wx:if="{{stepData.orderNo !== ''}}">已完成</view>
      </view>
    </view>
    <view wx:if="{{stepData.status > 2}}">
      <view class="task-header flex_center">
        <view class="text_box">步骤三：免单返现</view>
        <view class="icon_box">
          <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/icon_doen.png"/>
        </view>
      </view>
      <!-- <view class="task-header">步骤三：免单返现</view> -->
      <view class="task-care">
        <view class="task-care-price">
          {{stepData.redPackMoney}}<text>元</text>
        </view>
        <view class="task-care-rl">
          <view class="task-draw-header">{{stape2?'赠品领取':'中奖'}}任务返现红包</view>
          <view class="task-tr">请到钱包中查看</view>
          <view class="task-tr">返现时间：{{stepData.redPackMoneyTime}}</view>
        </view>
      </view>
      <view class="task-btn red">
        <navigator class="task-btn red" open-type="switchTab" url="/pages/index/index"  hover-class="none"> 参加更多抽奖活动</navigator>
      </view>
    </view>
    <!-- 弹窗 -->
    <view class="operation_steps_box flex_center" wx:if="{{layerShow}}">
      <!-- 步骤弹窗 -->
      <view class="operation_steps" wx:if="{{layerType == 1}}">
        <view class="close iconfont icon-guanbi" @tap="layerToggle(0)"></view>
        <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/operation_steps.png"/>
      </view>

      <!-- 提交订单成功 -->
      <view class="red_packet" wx:if="{{layerType == 2}}">
        <view class="red_packet_text_box flex_center">
          <view class="line">-</view>
          <view class="red_packet_text">恭喜你完成{{stape2?'赠品领取':'中奖'}}任务</view>
          <view class="line">-</view>
        </view>
        <view class="money">{{stepData.redPackMoney}}</view>
        <view class="notes">所有红包可在钱包中提现</view>
        <view class="close icon-guanbi iconfont" @tap="layerToggle(0)"></view>
      </view>
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'
import { getStore, connect } from 'wepy-redux'
import { setOrder } from '../store/actions'
const store = getStore()
const shopInfo = store.getState().home.shopInfo
@connect({
  stepData(state) {
    // state.drawTask.data.status = 3
    return state.drawTask.data
  }
})
export default class Step2 extends wepy.component {
  data = {
    orderId: '',
    layerShow: false,
    layerType: 0
  };
  methods = {
    layerToggle(index) {
      index *= 1
      this.layerShow = index !== 0
      this.layerType = 1
    },
    order(e) {
      // 获取订单号
      this.orderId = e.detail.value
    },
    submit() {
      let _data = {
        uid: shopInfo.userId,
        aid: this.activityId,
        shop_id: shopInfo.shopId,
        order_id: this.orderId
      }
      store.dispatch(setOrder(_data)).then(res => {
        if (res.payload.code !== 0) {
          wepy.showToast({
            title: res.payload.message,
            icon: 'none',
            duration: 2000
          })
        } else {
          this.layerShow = true
          this.layerType = 2
          this.$emit('reLoad')
        }
        // let _data = res.payload.data.code
        // let title = ''
        // switch (_data) {
        //   case 16:
        //     title = '该订单编号非本店订单'
        //     break
        //   case 17:
        //     title = '该订单已参与活动，请勿重复提交'
        //     break
        //   case 10:
        //     title = '点击太快，请稍后再试'
        //     break
        //   case 900:
        //     title = '数据库异常'
        //     break
        //   case 1004:
        //     title = '参数异常'
        //     break
        //   case 1004:
        //     title = '参数异常'
        //     break
        //   default:
        //     break
        // }
        // wepy.showToast({
        //   title,
        //   icon: 'none',
        //   duration: 2000
        // })
      })
    }
  };
  props = {
    activityId: {
      default: 0
    },
    stape2: {
      default: ''
    }
  }
}
</script>
