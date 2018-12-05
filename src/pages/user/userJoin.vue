
<style lang="scss">
  page{
    height:100%;
  }
  .user_join{
    padding:20rpx 24rpx 0;
    box-sizing:border-box;
    height:100%;
  }
  .scroll_box{
    position:relative;
    padding-bottom:120rpx;
    box-sizing:border-box;
  }
  .jk_logo_box{
    margin-top:60rpx;
  }
</style>
<template>
  <view>
  <null :type.sync="type" wx:if="{{list.length === 0}}" />
  <scroll-view wx:else scroll-y bindscrolltolower="scrolltolower" class="user_join">
    <view class="scroll_box">
      <repeat for="{{list}}" key="{{index}}">
        <goodCardCor :item.sync="item"></goodCardCor>
      </repeat>
      <view class="jk_logo_box">
        <jkLogo></jkLogo>
      </view>
    </view>
  </scroll-view>
  </view>
</template>
<script>
import wepy from 'wepy'
import goodCardCor from '../../components/yinju/good_card_hor_2'
import jkLogo from '../../components/yinju/jk_logo'
import { getStore, connect } from 'wepy-redux'
import {myJoin} from '../../store/actions'
import Null from '@/components/null'

const store = getStore()
const shopInfo = store.getState().home.shopInfo
@connect({
  myJoin(state) {
    return state.record.myJoin
  },
  list(state) {
    this.balance ++
    return state.record.myJoin.list
  }
})
export default class UserJoin extends wepy.page {
  config = {
    navigationBarTitleText: '我参与的活动'
  };
  data = {
    balance: 0,
    type: 5
  };
  onShow() {
    store.dispatch({type: 'RESET'})
    this.initData()
  }
  initData() {
    if (this.myJoin.no_more) {
      return
    }
    let sendData = {
      userId: shopInfo.userId,
      shopId: shopInfo.shopId,
      limit: this.myJoin.limit,
      offset: this.myJoin.offset + this.myJoin.limit
    }
    wepy.showLoading({
      title: '加载中'
    })
    store.dispatch(myJoin(sendData)).then(res => {
      wepy.hideLoading()
    })
  }
  methods = {
    scrolltolower() {
      this.initData()
    }
  }
  components = {
    goodCardCor,
    jkLogo,
    null: Null
  }
  onUnload() {
    // 重置数据
    store.dispatch({type: 'RESET'})
  }
}
</script>
