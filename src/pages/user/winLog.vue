<style lang="scss">
Page {
  background-color: #f7f7f7;
  height:100%;
}
::-webkit-scrollbar{width:0px}
.winlog {
  height:100%;
  padding: 20rpx 24rpx 0;
  box-sizing: border-box;
  .win-list {
    position:relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    height: 138rpx;
    background: rgba(255, 255, 255, 1);
    border-radius: 8rpx;
    box-sizing: border-box;
    padding: 20rpx;
    margin-bottom: 20rpx;
    image {
      width: 100rpx;
      height: 100rpx;
    }
    .win-text-com {
      margin-left: 30rpx;
      flex:1;
      .win-text-header {
        font-size: 28rpx;
        font-weight: 600;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .win-text-time {
        font-size: 24rpx;
        font-weight: 400;
        color: rgba(155, 155, 155, 1);
        margin-top: 10rpx;
      }
      .red_packet{
        line-height:40rpx;
        margin-top:5rpx;
        font-size:24rpx;
        color:#EB3939;
      }
    }
  }
}
.scroll_box{
  position:relative;
  min-height:100%;
  box-sizing:border-box;
  padding-bottom:120rpx;
}
</style>
<template>
  <view>
    <null :type.sync="type" wx:if="{{list.length === 0}}" />
    <scroll-view wx:else scroll-y bindscrolltolower="scrolltolower" class="winlog">
      <view class="scroll_box">
        <repeat for="{{list}}" key="{{item.id}}">
          <winListItem :item.sync="item"></winListItem>
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
import { getStore, connect } from 'wepy-redux'
import { awardList } from '../../store/actions'
import winListItem from '../../components/yinju/win_list_item'
import jkLogo from '../../components/yinju/jk_logo'
import Null from '@/components/null'
const store = getStore()
const shopInfo = store.getState().home.shopInfo
@connect({
  list(state) {
    return state.record.award_list
  },
  limit(state) {
    return state.record.limit
  },
  offset(state) {
    return state.record.award_offset
  },
  award_no_more(state) {
    return state.record.award_no_more
  }
})
export default class WinLog extends wepy.page {
  config = {
    navigationBarTitleText: '我的中奖记录'
  }
  data = {
    type: 4
  }
  onShow() {
    this.initData()
  }
  methods = {
    scrolltolower() {
      this.initData()
    }
  }
  initData() {
    console.log('this.award_no_more', this.award_no_more)
    if (this.award_no_more) {
      return
    }
    wepy.showLoading({
      title: '加载中'
    })
    let sendData = {
      userId: shopInfo.userId,
      shopId: shopInfo.shopId,
      limit: this.limit,
      offset: this.offset + this.limit
    }
    store.dispatch(awardList(sendData)).then(res => {
      console.log(res)
      wepy.hideLoading()
    })
  }
  components = {
    winListItem,
    jkLogo,
    null: Null
  }
  onUnload() {
    // 重置数据
    store.dispatch({type: 'RESET'})
  }
}
</script>
