<style lang="scss" scoped>
  @import '../../scss/yinju.scss';
  .indexLayer{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    box-sizing:border-box;
    background-color:rgba(0,0,0,.6);
    z-index:901;
  }
  .big_turntable{
    width:100%;
    height:100%;
    position:relative;
    .big_turntable_content{
      padding:40rpx 0 127rpx;
    }
    .title{
      width:362rpx;
      height:70rpx;
      margin:0 auto 60rpx;
    }
    .count_box{
      position:absolute;
      top:90rpx;
      left:25rpx;
      width:120rpx;
      height:48rpx;
      padding-left:20rpx;
      box-sizing:border-box;
      line-height:48rpx;
      border-radius:24rpx;
      font-size:24rpx;
      color:#EB3939;
      background:linear-gradient(#FFFBF2,#FFCC90);
      .count_outer{
        position:absolute;
        top:50%;
        left:75rpx;
        transform:translateY(-50%);
        width:60rpx;
        height:60rpx;
        border-radius:50%;
        background:linear-gradient(#FCC687,#F286A0);
        .count_inner{
          width:44rpx;
          height:44rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size:24rpx;
          background:linear-gradient(#FA5579,#FD684C);
          border-radius:50%;
          color:#fff;
        }
      }
    }
    .close{
      position:absolute;
      top:90rpx;
      right:25rpx;
      width:54rpx;
      height:54rpx;
    }
    .turntable{
      position:relative;
      width:540rpx;
      height:540rpx;
      margin:0 auto;
      font-size:0;
      .pointer_1{
        position:absolute;
        top:50%;
        left:50%;
        width:80rpx;
        height:80rpx;
        transform:translate3d(-50%,-50%,0);
        .pointer_2{
          position:absolute;
          top:0;
          left:50%;
          width:28rpx;
          height:36rpx;
          transform:translate3d(-50%,-50%,0)
        }
      }
    }
    .btn_try{
      width:337rpx;
      height:116rpx;
      margin:47rpx auto;
      background: url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/btn_try.png') no-repeat center center;
      background-size: 100% 100%;
    }
    .notes{
      width:570rpx;
      margin:27rpx auto;;
      font-size:20rpx;
      line-height:28rpx;
      color:#fff;
    }
    .invited{
      width:654rpx;
      height:120rpx;
      margin:32rpx auto 0;
      background:linear-gradient(#FF6347,#FF8C47);
      border-radius:20rpx;
      padding:6rpx;
      box-sizing:border-box;
      overflow:hidden;
      .invited_box{
        position:relative;
        width:100%;
        height:100%;
        border-radius:20rpx;
        padding: 0 14rpx 0 18rpx;
        background-color:#FFEED5;
        overflow: hidden;
        box-sizing: border-box;
        .container{
        height: 100%;
        width: 100%;
        display:flex;
        align-items: center;
        overflow: hidden;
        position: relative;
        .subcontainer{
          height: 100%;
          overflow: hidden;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          position: absolute;
          z-index: 500;
          left: 0;
          top: 0;
            .people{
              width:60rpx;
              height:60rpx;
              margin:0 15rpx;
              border-radius:50%;
              overflow:hidden;
              background-color:#fff;
            }
          }
          .zhanwei{
            z-index: 499;
            &>view{
              height: 60rpx;
              width: 60rpx;
              color:#EB3939;
              background-color: white;
              margin: 0 15rpx;
              border-radius: 30rpx;
              font-size: 20rpx;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
        .btn_invite{
          position:absolute;
          top:50%;
          right:10rpx;
          width:158rpx;
          height:80rpx;
          transform:translateY(-50%);
          border-radius:20rpx 22rpx 22rpx 20rpx;
          line-height:80rpx;
          text-align:center;
          color:#fff;
          font-size:24rpx;
          z-index: 502;
          background:linear-gradient(#FAD961,#F76B1C)
        }
      }
    }
  }
.wallet{
  .balance{
    width:500rpx;
    height:132rpx;
    margin:0 auto 7rpx;
    line-height:132rpx;
    text-align:center;
    color:#fff;
    font-size:36rpx;
    background:url('http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/balance_bg.png') 0 0/100% 100%;
  }
  .wallet_box{
    position:relative;
    width:740rpx;
    box-sizing:border-box;
    margin-top:-130rpx;
    text-align:center;
    .bg{
      width:100%;
      image{
        height:auto;
      }
    }
    .content{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      padding-top:448rpx;
      box-sizing:border-box;
      text-align:center;
    }
    .title{
      margin-top:13rpx;
      line-height:40rpx;
      height: 40rpx;
      font-size:28rpx;
      color:#fff;
    }
    .money{
      margin-bottom:18rpx;
      line-height:90rpx;
      font-size:64rpx;
      color:#EB3939;
    }
    .notes{
      margin-bottom:30rpx;
      color:#D51B1B;
      font-size:28rpx;
      line-height:40rpx;
    }
    .btn_again{
      width:370rpx;
      height:88rpx;
      margin: 0 auto;
      line-height:88rpx;
      color:#fff;
      font-size:28rpx;
      border-radius:44rpx;
      background:linear-gradient(#FDD57B, #FF6347);
      box-shadow:0 4px 12rpx 0 rgba(235,57,57,1);
    }
    .notes_2{
      width:400rpx;
      margin:0 auto;
      font-size:24rpx;
      color:#fff;
    }
    .close{
      position:absolute;
      bottom:-95rpx;
      left:50%;
      width:48rpx;
      height:48rpx;
      line-height:48rpx;
      color:#fff;
      font-size:32rpx;
      transform:translate3d(-50%,50%,0);
      border-radius:50%;
      border:1px solid #fff;
    }
  }
}
</style>

<template>
  <view class="indexLayer flex_center">
    <!-- 获取红包 -->
    <block wx:if="{{type == 1}}">
    <!-- <block > -->
      <view class="wallet">
        <view class="balance">钱包余额: {{zhongjiang.balance}}元</view>
        <view class="wallet_box">
          <view class="bg">
            <image mode="widthFix" src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/wallet_bg.png"/>
          </view>
          <view class="content">
            <view class="title" wx:if="{{zhongjiang.awardAmount===0}}"></view>
            <view class="title" wx:else>获得现金红包</view>
            <view class="money" wx:if="{{zhongjiang.awardAmount===0}}">没抽中</view>
            <view class="money" wx:else>{{zhongjiang.awardAmount}}元</view>
            <view class="notes">可在钱包中查看</view>
            <view class="btn_again" @tap="toYuanpan">再抽一次</view>
          </view>
        </view>
      </view>
    </block>
    <!-- 大转盘 -->
    <block wx:if="{{type == 2}}">
      <scroll-view scroll-y class="big_turntable">
        <view class="big_turntable_content">
          <view class="title">
            <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/turntable_title.png"/>
          </view>
          <!-- 次数 -->
          <view class="count_box">
            次数
            <view class="count_outer flex_center">
              <view class="count_inner">{{wheelData.times}}/{{wheelData.chance}}</view>
            </view>
          </view>
          <!-- 关闭 -->
          <view class="close" @tap="closeWheel">
            <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/icon_close_2.png"/>
          </view>
          <!-- 转盘 -->
          <view class="turntable">
            <image style="transform:rotate({{deg}}deg)" src="{{wheelPic}}"/>
            <view class="pointer_1">
              <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/icon_pointer_1.png"/>
              <view class="pointer_2">
                <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/icon_pointer_2.png"/>
              </view>
            </view>
          </view>
          <!-- 试试手气 -->
          <button class="btn_try" @tap="start" disabled="{{isDis}}">
            <image src=""/>
          </button>
          <view class="invited">
            <view class="invited_box align_items">
              <view class="container" @tap="toList">
              <view class="subcontainer zhanwei">
                <view>?</view>
                <view>?</view>
                <view>?</view>
                <view>?</view>
                <view>?</view>
              </view>
              <view class="subcontainer">
                  <repeat for="{{wheelData.subUserInfos}}" key="{{item.subUid}}">
                  <view class="people">
                    <image src="{{item.subAvatar}}"/>
                  </view>
                  </repeat>
              </view>
              <button class="btn_invite" open-type="share" catchtap="pre">邀请好友</button>
              </view>
            </view>
          </view>
          <view class="notes">注：幸运大转盘默认试试手气抽奖机会为3次，默认机会用光后可以通过邀请好友来增加新的抽奖机会，每成功邀请一个好友进来点击按钮参与游戏可以获得一次新的抽奖机会。抽奖满10次以后，每增加一次抽奖机会需要比上一轮多邀请一名好友。</view>
        </view>
      </scroll-view>
    </block>
  </view>
</template>
<script>
import wepy from 'wepy'
import {connect, getStore} from 'wepy-redux'
import {getZhongjiang, getWheelData} from '@/store/actions'

const store = getStore()
const shopInfo = store.getState().home.shopInfo

@connect({
  wheelData(state) {
    return state.home.wheelData
  },
  wheel(state) {
    return state.home.wheel
  },
  zhongjiang(state) {
    return state.home.zhongjiang
  }
})

export default class indexLayer extends wepy.component {
  data = {
    deg: 0,
    isDis: false,
    wheelPic: 'http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/turntable_bg.png',
    ifClickX: false
  }
  props={
    type: {
      type: Number,
      default: this.type,
      twoWay: true
    }
  }
  methods = {
    pre() {
      console.log(1)
    },
    toYuanpan() {
      // 大转盘详情页面数据
      if (this.wheel.isLuckyWheel !== false) {
        if (shopInfo.activityId === this.wheel.activityId) {
          let sendParams = {
            user_id: shopInfo.userId,
            activityId: this.wheel.activityId,
            pub_uid: shopInfo.pub_uid
          }
          store.dispatch(getWheelData(sendParams))
          this.type = 2
          this.$apply()
        } else {
          console.log(shopInfo)
          let sendParams = {
            user_id: shopInfo.userId,
            activityId: this.wheel.activityId
          }
          store.dispatch(getWheelData(sendParams))
          this.type = 2
          this.$apply()
        }
      }
    },
    closeWheel() {
      this.$emit('closeWheel')
    },
    toList() {
      wepy.navigateTo({
        url: '/pages/index/wheelList?activityId=' + this.wheel.activityId
      })
    },
    start: () => {
      if (!this.isDis) {
        this.isDis = true
        let sendParams = {
          merchantId: shopInfo.merchantId,
          shopId: shopInfo.shopId,
          uid: shopInfo.userId,
          aid: this.wheel.activityId,
          pub_uid: shopInfo.pub_uid
        }
        store.dispatch(getZhongjiang(sendParams)).then(
          res => {
            if (this.wheelData.times >= 1) {
              this.deg = 0
              // 根据接口生成随机角度
              let rand = 0
              let _rand = Math.random() * 25
              switch (res.payload.awardName) {
                case 0:
                  rand = _rand + 168 || _rand + 33
                  break
                case 1 :
                  rand = _rand + 123
                  break
                case 2 :
                  rand = _rand + 303
                  break
                case 3 :
                  rand = _rand + 213
                  break
                case 4 :
                  rand = _rand + 78
                  break
                case 5 :
                  rand = _rand + 258
                  break
                case 6 :
                  rand = _rand + 348
                  break
              }
              // 可以转3-5圈(加随机角度)
              // let n = (Math.floor(Math.random() * 3) + 4) * 360 - rand
              // 定死转不到3圈
              let n = 3 * 360 - rand
              var a = setInterval(() => {
                // 速度开关
                this.deg += 5
                if (this.deg >= n) {
                  clearInterval(a)
                  var b = setTimeout(() => {
                    this.type = 1
                    clearTimeout(b)
                    this.isDis = false
                    this.$apply()
                  }, 2000)
                }
                this.$apply()
              }, 1)
            } else if (this.wheelData.times === 0 && res.payload.leftSize !== undefined) {
              wepy.showToast({
                icon: 'none',
                title: '再邀请' + res.payload.leftSize + '个好友就可以抽奖啦，赶快去邀请好友吧~',
                duration: 2000
              })
              this.isDis = false
              this.$apply()
            } else {
              wepy.showToast({
                icon: 'none',
                title: '点的太快，请稍后重试',
                duration: 2000
              })
              this.isDis = false
              this.$apply()
            }
          }
        )
      }
    }
  }
}
</script>
