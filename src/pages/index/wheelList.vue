<template>
  <view class="y-box">
    <view class="service">
    <view class="all-person">
      已邀请{{wheeList.count}}人
    </view>
    <scroll-view class="list" 
                 scroll-y
                 bindscrolltolower="getData">
        <repeat for="{{subInfos}}" key="{{index}}">
          <view class="list-item">
            <view class="pic">
              <image src="{{item.subAvatar}}" />
            </view>
            <view class="name">{{item.subNick}}</view>
          </view>
        </repeat>
    </scroll-view>
    <footer />
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'
import {connect, getStore} from 'wepy-redux'
import {getWheelList} from '@/store/actions'
import Footer from '../../components/footer'

const store = getStore()
const shopInfo = store.getState().home.shopInfo

@connect({
  whlist(state) {
    return state.home.whlist
  },
  wheeList(state) {
    return state.home.wheelList
  },
  wheelData(state) {
    return state.home.wheelData
  }
})
export default class wheelList extends wepy.page {
  data = {
    aid: '',
    offset: 0,
    limit: 10,
    subInfos: []
  }
  config = {
    navigationBarTitleText: '已邀请好友'
  }
  components = {
    footer: Footer
  }
  methods = {
    getData: () => {
      this.ifShow = false
      wepy.showLoading({
        title: '正在加载……'
      })
      let sendParams = {
        userId: shopInfo.userId,
        activityId: this.aid,
        offset: this.offset,
        limit: this.limit
      }
      store.dispatch(getWheelList(sendParams)).then(
        (res) => {
          if (this.offset <= this.wheeList.count) {
            this.subInfos = this.subInfos.concat(res.payload.subUserInfos)
            this.offset += this.limit
            this.$apply()
          }
          wepy.hideLoading()
        }
       )
    }
  }
  onLoad(option) {
    this.aid = option.activityId
    this.methods.getData()
  }
}
</script>
<style lang="scss">
.list{
  width: 100%;
  height: 1000rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .list-item{
    width:100%;
    height:120rpx;
    padding: 20rpx;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background:rgba(255,255,255,1);
    .pic{
      height: 60rpx;
      width: 60rpx;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 40rpx;
      &>image{
        height: 100%;
        width: 100%;
      }
    }
    .name{
      height: 100%;
      display: flex;
      flex: 1;
      justify-content: flex-start;
      align-items: center;
      font-size:28rpx;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(51,51,51,1);
      box-sizing: border-box;
      overflow: hidden;
    }
  }
}
.all-person{
  width:100%;
  height:40rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:24rpx;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(155,155,155,1);
  margin: 20rpx 0;
}
.info{
  width:100%;
  height:40rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:24rpx;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(155,155,155,1);
}
</style>
