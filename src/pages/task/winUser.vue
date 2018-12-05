<style lang="scss">
Page {
  background-color: #fd7557;
  background-image: url('https://img-test.wxyundian.cn/%E4%B8%AD%E5%A5%96%E5%90%8D%E5%8D%95%E8%83%8C%E6%99%AF.png');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%;
}
.winUser {
  position: relative;
  padding-top: 220rpx;
  .winBg {
    position: absolute;
    left: 50%;
    margin-left: -80rpx;
    margin-top: -80rpx;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .win-top {
    padding-top: 85rpx;
  }
  .win-com {
    display: flex;
    width: 100%;
    height: 100rpx;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin-top: -165rpx;
    z-index: -1;
  }
  .win-list {
    position: relative;
    width: 93%;
    height: 330rpx;
    margin: 120rpx auto 30rpx auto;
    background-image: url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/gbg.png');
    background-repeat: no-repeat;
    background-size: cover;
    image {
      width: 140rpx;
      height: 140rpx;
      border-radius: 50%;
      border: 11rpx solid rgba(203, 183, 109, 1);
    }
    .win-header {
      text-align: center;
      font-size: 32rpx;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      line-height: 45rpx;
    }
    .win-text {
      text-align: center;
      font-size: 24rpx;
      font-weight: 400;
      color: rgba(135, 115, 48, 1);
      line-height: 36rpx;
      text {
        display: block;
      }
    }
    .nickName{
      margin-bottom:10rpx;
      font-size:32rpx;
      font-weight:bold;
      line-height:45rpx;
    }
  }
  .winUser-text {
    padding: 0 24rpx;
    .winUser-header {
      font-size: 24rpx;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 33rpx;
    }
    .winUser-text {
      font-size: 24rpx;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 36rpx;
    }
  }
  .win-btn {
    position:relative;
    width: 71%;
    height: 64rpx;
    margin: 34rpx auto 36rpx auto;
    background-color:#F0F2F7;
    border-radius: 31rpx;
    font-size: 24rpx;
    font-weight: 500;
    line-height: 64rpx;
    color: #fff;
    text-align: center;
    overflow:hidden;
    .bg{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
    }
    text{
      position:relative;
      z-index:2;
    }
    .get_win{
      background-color:#E1CF8E;
      width:375rpx;
    }
    .win-doen{
      background-color:#E1CF8E;
    }
  }
  .other-btn {
    width:500rpx;
    height:80rpx;
    line-height:80rpx;
    border-radius:40rpx;
    margin-bottom: 66rpx;
    background-color:#fff;
    color:#EB3939;
  }
  .name {
    font-size: 24rpx;
    font-weight: 400;
    text-align: center;
    color: #333333;
    line-height: 33rpx;
    margin-bottom: 63rpx;
  }
}
</style>
<template>
  <view class="winUser">
    <view class="win">
      <repeat for="{{wining_list}}" key="{{index}}">
        <view class="win-list">
          <view class="winBg"><image src="{{item.avatarUrl}}"/></view>
          <view class="win-top">
            <view class="win-text nickName">{{item.nickName}}</view>
            <view class="win-text">
              <!-- 开奖时间：{{item.awardTime}} -->
              <text class="joinNum">累计获得抽奖码：{{item.joinNum}}个</text>
            </view>
          </view>
          <view class="win-btn" wx:if="{{item.awardStatus === 1}}">
            <text>奖品领取中</text>
            <view class="get_win bg"></view>
          </view>
          <view class="win-btn" wx:if="{{item.awardStatus === 3}}">
            <text>奖品已领取</text>
            <view class="win-doen bg"></view>
          </view>
          <view class="win-btn" wx:if="{{item.awardStatus === -1}}">
            <text>奖品已失效</text>
            <view class="win-disabeld bg"></view>
          </view>
          <!-- <view class="win-btn" wx:if="{{item.status === 1}}">奖品领取中剩余{{item.endTime}}分钟</view> -->
        </view>
      </repeat>
    </view>
    <view class="winUser-text">
      <view class="winUser-header">温馨提示</view>
      <view class="winUser-text">若中奖者未在规定领取时间内领取奖品，奖品将失效，</view>
      <view class="winUser-text">中奖名额将自动顺延至下一位抽奖概率高者</view>
      <view class="winUser-text winUser-time">开奖时间：{{wining_list[0].awardTime}}</view>
    </view>
    <navigator class="win-btn other-btn" url="/pages/index/index" hover-class='none' open-type="switchTab">参与其他抽奖</navigator>
    <view class="name">集客魔方</view>
  </view>
</template>
<script>
import wepy from 'wepy'
import { getStore, connect } from 'wepy-redux'
import { winlingList } from '../../store/actions'
const store = getStore()

  @connect({
    wining_list(state) {
      let winingList = state.record.wining_list
      if (state.record.wining_list) {
        winingList.map(item => {
          item.last_time = Math.floor((item.cutoffTime - (new Date()).getTime()) / 1000 / 60)
        })
      }
      return winingList
    }
  })
export default class WinUser extends wepy.page {
  config = {
    navigationBarTitleText: '中奖名单',
    backgroundColor: '#FD7557',
    navigationBarBackgroundColor: '#FD7557',
    navigationBarTextStyle: '#fff',
    backgroundTextStyle: 'light'
  };
  data = {
    winUser: [],
    options: ''
  };
  onLoad(options) {
    this.activityId = options.activityId || 1
    this.initData()
  }
  initData() {
    let sendData = {
      activityId: this.activityId
    }
    console.log('1111111')
    store.dispatch(winlingList(sendData))
  }
}
</script>
