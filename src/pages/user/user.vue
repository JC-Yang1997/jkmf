<style lang='scss'>
Page {
  height:100%;
}

button{
  background-color:#fff;
  border-radius:0;
  padding:0;
  &:after{
    border:none
  }
}
.user {
  height: 100%;
  .user-header {
    position: relative;
    width: 100%;
    height: 342rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      180deg,
      rgba(248, 103, 135, 1) 0%,
      rgba(243, 89, 89, 1) 100%
    );
    .user-img {
      position: absolute;
      width: 100%;
      height: 270rpx;
      left: 0;
      bottom: 0;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .user-auth {
      text-align: center;
      .user-container {
        image {
          height: 140rpx;
          width: 140rpx;
          border-radius: 50%;
        }
        .user-name {
          font-size: 32rpx;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          line-height: 45rpx;
        }
      }
    }
  }
  .user-body {
    width: 93%;
    margin: 0 auto;
    .user-num {
      position: absolute;
      height: 98rpx;
      width: 93%;
      left: 50%;
      margin-left: -46%;
      padding: 0 24rpx;
      background: rgba(255, 255, 255, 1);
      border-radius: 20rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 28rpx;
      font-weight: 400;
      margin-top: -66rpx;
      color: rgba(51, 51, 51, 1);
      box-sizing: border-box;
      text {
        color: #eb3939;
      }
      .iconfont {
        color: #000;
      }
    }
  }
  .user-com {
    background-color: #fff;
    border-radius: 20rpx;
    width: 93%;
    margin: 52rpx auto 0 auto;
    padding: 0 24rpx;
    box-sizing: border-box;
    .user-list {
      position: relative;
      height: 98rpx;
      line-height: 98rpx;
      color: #333;
      font-size: 28rpx;
      border-bottom: 2rpx solid #f0f2f7;
      .user-container {
        display: flex;
        justify-content: space-between;
      }
      .user-list-lf {
        display: flex;
        align-items: center;
        .user-icon {
          width:36rpx;
          height:36rpx;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          image{
            height: 100%;
            width: 100%;
          }
        }
        .user-text {
          margin-left: 38rpx;
        }
      }
      .user-list-rg {
        position: relative;
      }
      &:last-child {
        border-bottom: none;
      }
      .user-due {
        position: absolute;
        font-size: 24rpx;
        font-weight: 400;
        color: #ccc;
        right: 40rpx;
      }
      .user-new {
        position: absolute;
        width: 48rpx;
        height: 32rpx;
        line-height: 32rpx;
        text-align: center;
        background: rgba(235, 57, 57, 1);
        border-radius: 16rpx;
        color: #fff;
        font-size: 20rpx;
        top: 50%;
        transform: translateY(-50%);
        right: 40rpx;
      }
    }
  }
  .user-content {
    margin-top: 20rpx;
  }
}
</style>
<template>
  <view class="user">
    <view class="user-header">
      <view class="user-auth">
        <view class="user-container">
          <image src="{{list.avatarUrl}}"/>
          <view class="user-name">{{list.nick}}</view>
        </view>
      </view>
      <view class="user-img"><image src="https://img-test.wxyundian.cn/userbg.png" /></view>
    </view>
    <view class="user-body">
      <navigator class="user-container" url="/pages/wallet/index"  hover-class="none">
        <view class="user-num">
          <view>钱包余额（元）<text>{{list.balance}}</text></view>
          <text class="iconfont icon-jinru"> </text>
        </view>
      </navigator>
    </view>
    <view class="user-com">
      <view class="user-list">
        <view class="user-container" @tap="nav_to(0)">
          <view class="user-list-lf">
            <view class="user-icon"><image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/ht.png"/></view>
            <view class="user-text">我的回填订单</view>
          </view>
          <view class="user-list-rg"> <text class="iconfont icon-jinru"> </text></view>
        </view>  
      </view>
      <view class="user-list">
        <view @tap="nav_to(1)" class="user-container">
          <view class="user-list-lf">
            <view class="user-icon iconfont"><image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/crr.png"/></view>
            <view class="user-text">我参与的活动</view>
          </view>
          <view class="user-new" wx:if="{{parseInt(list.awardNum) > 0 }}">new</view>
          <view class="user-list-rg"> <text class="iconfont icon-jinru"> </text></view>
        </view>  
      </view>
      <view class="user-list">
        <view @tap="nav_to(2)" class="user-container" >
          <view class="user-list-lf">
            <view class="user-icon"><image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/zj.png"/></view>
            <view class="user-text">我的中奖记录</view>
          </view>
          <view class="user-list-rg"> <text class="iconfont icon-jinru"> </text></view>
        </view>
      </view>
      <view class="user-list">
        <view @tap="nav_to(3)" class="user-container" >
          <view class="user-list-lf">
            <view class="user-icon"><image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/kqr.png"/></view> 
            <view class="user-text">我的卡券</view>
          </view>
          <view class="user-due" wx:if="{{list.shopCoupon.shopCouponWillTimeoutNum>0}}">{{list.shopCoupon.shopCouponWillTimeoutNum}}张优惠券即将过期</view>
          <view class="user-list-rg"> <text class="iconfont icon-jinru"> </text></view>
        </view>  
      </view>
    </view>
    <view class="user-com user-content">
      <button open-type="contact" bindcontact="contact" hover-class="none" session-from="2222" class="user-list">
        <view class="user-container">
          <view class="user-list-lf">
            <view class="user-icon"><image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/lx.png"/></view>
            <view class="user-text">联系我们</view>
          </view>
          <view class="user-list-rg"> <text class="iconfont icon-jinru"> </text></view>
        </view>  
      </button>
    </view>
    <view class="jk_logo_box">
      <jkLogo></jkLogo>
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'
import { getStore, connect } from 'wepy-redux'
import { getUser } from '../../store/actions'
import jkLogo from '../../components/yinju/jk_logo'
const store = getStore()
const shopInfo = store.getState().home.shopInfo
@connect({
  list(state) {
    return state.user.user
  }
})
export default class User extends wepy.page {
  config = {
    navigationBarTitleText: '我的',
    backgroundColor: '#F86786',
    navigationBarBackgroundColor: '#F86786',
    navigationBarTextStyle: '#fff',
    backgroundTextStyle: 'light'
  };
  components = {
    jkLogo
  }
  getData() {
    console.log('shopInfo', shopInfo)
    let _data = {
      userId: shopInfo.userId,
      shopId: shopInfo.shopId
    }
    store.dispatch(getUser(_data))
  }
  onShow() {
    this.getData()
  }
  methods = {
    nav_to(index) {
      index *= 1
      let url = ''
      switch (index) {
        case 0:
          url = '/pages/htorder/htorder'
          break
        case 1:
          url = '/pages/user/userJoin'
          break
        case 2:
          url = '/pages/user/winLog'
          break
        case 3:
          url = '/pages/user/voucher'
          break
        case 4:
          url = '/pages/user/userJoin'
          break
        // case 5:
        //   url = '/pages/user/userJoin'
        //   break
      }
      wepy.navigateTo({
        url
      })
    },
    contact(res) {
      console.log('res', res)
    }
  }
}
</script>
