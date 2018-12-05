<style lang="scss">
Page {
  height:100%;
}
.join-com {
  position:relative;
  min-height:100%;
  padding-bottom:160rpx;
  box-sizing:border-box;
  .join-com-header {
    width: 100%;
    height: 67rpx;
    line-height: 67rpx;
    font-size: 24rpx;
    color: #9b9b9b;
    text-align: center;
    background-color:#f7f7f7;
  }
  .join-com-body,
  .join-user {
    .join-com-list {
      height: 120rpx;
      // background: #fff;
      margin-bottom: 2rpx;
      padding: 20rpx 24rpx;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .join-com-tr {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 80%;
        .join-com-image {
          position: relative;
          width: 60rpx;
          height: 60rpx;
          image {
            width: 60rpx;
            height: 60rpx;
            border-radius: 50%;
          }
          text {
            position: absolute;
            display: flex;
            align-items: center;
            text-align: center;
            padding: 0 12rpx;
            height: 36rpx;
            font-size: 20rpx;
            font-weight: 400;
            color: #fff;
            background: #eb3939;
            border-radius: 20rpx;
            z-index: 1;
            top: -12rpx;
            right: -17rpx;
          }
        }
        .join-com-text {
          margin-left: 44rpx;
        }
        .join-com-title {
          font-size: 28rpx;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 40rpx;
        }
        .join-com-num {
          margin-top: 11rpx;
          font-size: 24rpx;
          font-weight: 400;
          color: rgba(155, 155, 155, 1);
          line-height: 28rpx;
          text {
            color: #eb3939;
          }
          .join-see {
            font-size: 24rpx;
            font-weight: 400;
            margin-left: 10rpx;
            color: rgba(253, 117, 87, 1);
            line-height: 28rpx;
            text-decoration: underline;
          }
        }
      }
      .join-bg {
        width: 109rpx;
        height: 86rpx;
        text-align: center;
        background-image: url('https://img-test.wxyundian.cn/zjbg.png');
        background-repeat: no-repeat;
        background-size: cover;
        .join-com-prob {
          font-size: 24rpx;
          font-weight: 400;
          color: rgba(235, 57, 57, 1);
          line-height: 28rpx;
          &:nth-child(1) {
            margin-top: 25rpx;
          }
        }
      }
    }
  }
  .join-name {
    position: relative;
    width: 100%;
    margin-top: 44rpx;
    text-align: center;
    font-size: 24rpx;
    font-weight: 400;
    color: #ccd4e1;
    line-height: 33rpx;
  }
  .join-user-box{
    background-color:#fff;
    &:first-child{
      background-color:#FCF6F6
    }
  }
}
.card_img{
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
  width:70rpx;
  height:70rpx;
  .card_img_bg{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    .icon_box_1{
      width:100%;
      height:100%;
    }
    .icon_box_2{
      position:absolute;
      top:-18rpx;
      left:-4rpx;
      width:35rpx;
      height:30rpx;
    }
  }
}
.jkLogo_box{
  display:flex;
  justify-content:center;
  position:absolute;
  bottom:40rpx;
  width:100%;
}
</style>
<template>
  <view class="join-com">
    <repeat for="{{anward_join}}">
      <view class="join-user-box">
        <view class="join-user">
          <view class="join-com-list">
            <view class="join-com-tr">
              <view class="card_img">
                <view class="card_img_bg" wx:if="{{item.isInventor}}">
                  <view class="icon_box_1">
                    <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/isInventor_1.png"/>
                  </view>
                  <view class="icon_box_2">
                    <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/isInventor_2.png"/>
                  </view>
                </view>
                <view class="join-com-image">
                  <image src="{{item.avatarUrl}}"/>
                  <text wx:if="{{item.joinNum>0}}">{{item.joinNum}}</text>
                </view>

              </view>
              <view class="join-com-text">
                <view class="join-com-title">{{item.nickName}}</view>
                <view class="join-com-num">拥有<text>{{item.awardCodeNum}}个</text>抽奖码<text wx:if="{{index==0 && item.uid == userId}}" class="join-see" @tap="checkUser">查看</text></view>
              </view>
            </view>
            <view class="join-bg">
              <view class="join-com-prob">+{{item.awardRate}}%</view>
              <view class="join-com-prob">中奖率</view>
            </view>
          </view>
        </view>
        <view class="join-com-header" wx:if="{{index==0}}">已有{{item.total}}人参与抽奖</view>
      </view>
    </repeat>
    <view class="jkLogo_box">
      <jkLogo></jkLogo>
    </view>
    <DrawCode wx:if="{{checkShow}}" :checkShow.sync="checkShow" :inviteUsers.sync="anward_join[0].inviteUsers"></DrawCode>
  </view>
</template>
<script>
import wepy from 'wepy'
import DrawCode from '../../components/drawCode'
import { getStore, connect } from 'wepy-redux'
import { awardJoin } from '../../store/actions'
import jkLogo from '../../components/yinju/jk_logo'
import { share } from '../../utils/utils'
const store = getStore()
const state = store.getState()
@connect({
  anward_join(state) {
    return state.record.anward_join
  }
})

export default class JoinTask extends wepy.page {
  config = {
    navigationBarTitleText: '参与抽奖人数'
  }
  data = {
    joinData: [],
    checkShow: false,
    activityId: '',
    userId: 0
  }
  methods = {
    checkUser() { // 查看自己抽奖码
      this.checkShow = true
    }
  }
  events = {
    'checkShow': (CloseShow, $event) => {
      this.checkShow = CloseShow
    }
  }

  onShareAppMessage() {
    let params = {
      activityId: this.activityId,
      picUrl: '',
      from: 2
    }
    let returnData = share(params)
    return returnData
  }

  onLoad(options) {
    console.log('options', options)
    this.activityId = options.activityId || 1
    this.userId = state.home.shopInfo.userId
    this.$apply()
    this.initData()
  }

  components = {
    DrawCode,
    jkLogo
  }

  initData() {
    let sendData = {
      activityId: this.activityId,
      userId: state.home.shopInfo.userId
    }
    // let sendData = {
    //   activityId: 1605,
    //   userId: 37
    // }
    store.dispatch(awardJoin(sendData))
  }
}
</script>
