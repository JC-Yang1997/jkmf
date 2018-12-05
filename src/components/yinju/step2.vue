<style lang='scss'>
.step2 {
  margin-top:21rpx;
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
    input {
      width: 480rpx;
      height: 80rpx;
      border-radius: 48rpx;
      font-size: 24rpx;
      font-weight: 400;
      background: rgba(247, 247, 247, 1);
      text-align: center;
      color: #d9d9da;
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
  .task-btn {
    width: 500rpx;
    height: 70rpx;
    background: linear-gradient(
      118deg,
      rgba(243, 70, 107, 1) 0%,
      rgba(238, 58, 58, 1) 100%
    );
    border-radius: 74rpx;
    font-size: 28rpx;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 70rpx;
  }
  .task-care {
    width: 91%;
    height: 160rpx;
    // background: rgba(245, 108, 108, 1);
    border-radius: 8rpx;
    // padding-right: 14rpx;
    margin: 0 auto;
    // display: flex;
    // align-items: center;
    // justify-content: center;
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
      border-radius: 8rpx ;
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
.task-more {
  width: 500rpx;
  height: 80rpx;
  text-align: center;
  background: linear-gradient(
    118deg,
    rgba(243, 70, 107, 1) 0%,
    rgba(238, 58, 58, 1) 100%
  );
  border-radius: 74rpx;
  margin: 60rpx auto;
  font-size: 28rpx;
  font-weight: 500;
  line-height: 80rpx;
  color: rgba(255, 255, 255, 1);
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
</style>
<template>
  <view class="step2" wx:if="{{stepData.status == 3}}">
    <!-- <view class="task-header">步骤二：填写宝贝订单编号</view>
    <view class="task-order">
      <input placeholder="{{stepData.orderNo === ''? '请输入宝贝订单编号': stepData.orderNo}}"  bindinput ="order"  type="text" />
     <view class="task-btn" wx:if="{{stepData.orderNo === ''}}" @tap="submit">确认提交</view>
     <view class="task-btn-disabled"  wx:if="{{stepData.orderNo !== ''}}">已完成</view>
    </view> -->
    <!-- <view class="task-header">步骤三：免单返现</view> -->
    <!-- <giftCardItem></giftCardItem> -->
    <view class="task-care">
      <giftCardItem :stepData.sync="stepData"></giftCardItem>

      <!-- <view class="task-care-price">
        {{stepData.redPackMoney}}<text>元</text>
      </view>
      <view class="task-care-rl">
        <view class="task-draw-header">中奖任务返现红包</view>
        <view class="task-tr">请到钱包中查看</view>
        <view class="task-tr">返现时间：{{stepData.redPackMoneyTime}}</view>
      </view> -->
    </view>
    <view class="task-more"><navigator class="user-container" open-type="switchTab" url="/pages/index/index"  hover-class="none"> 参加更多抽奖活动</navigator></view>
  </view>
</template>
<script>
import wepy from 'wepy'
import { getStore, connect } from 'wepy-redux'
import giftCardItem from '../../components/yinju/gift_card_item'
import { setOrder } from '../../store/actions'
const store = getStore()
const shopInfo = store.getState().home.shopInfo
@connect({
  stepData(state) {
    return state.drawTask.data
  }
})
export default class Step2 extends wepy.component {
  data = {
    orderId: ''
  };

  components = {
    giftCardItem
  }

  props = {
    activityId: {
      default: 0
    }
  }

  methods = {
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
        let _data = res.payload.data.code
        switch (_data) {
          case 16:
            wepy.showToast({
              title: '该订单编号非本店订单',
              icon: 'none',
              duration: 2000
            })
            break
          case 17:
            wepy.showToast({
              title: '该订单已参与活动，请勿重复提交',
              icon: 'none',
              duration: 2000
            })
            break
          case 10:
            wepy.showToast({
              title: '点击太快，请稍后再试',
              icon: 'none',
              duration: 2000
            })
            break
          case 900:
            wepy.showToast({
              title: '数据库异常',
              icon: 'none',
              duration: 2000
            })
            break
          case 1004:
            wepy.showToast({
              title: '参数异常',
              icon: 'none',
              duration: 2000
            })
            break
          default:
            break
        }
      })
    }
  };
}
</script>
