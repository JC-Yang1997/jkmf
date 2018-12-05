<style lang="scss">
@import '../../scss/yinju.scss';
Page {
  height: 100%;
}
.voucher {
  padding: 28rpx 24rpx 40rpx;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.jk_logo_box {
  margin-top: auto;
}
.top {
  height: 33rpx;
  margin-bottom: 26rpx;
  font-size: 24rpx;
  color: #9b9b9b;
  flex: 1;
  .text_box {
    white-space: pre;
  }
  .icon_box {
    width: 28rpx;
    height: 28rpx;
  }
}
</style>
<template>
  <view>
    <null :type.sync="type" wx:if="{{item.length === 0}}" />
    <view wx:else class="voucher">
      <view class="voucher-com">
        <view class="top flex_center">
          <view class="text_box">点击优惠券自动复制,  打开</view>
          <view class="icon_box">
            <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/icon_tb.png"/>
          </view>
          <view class="text_box">领取即可</view>
        </view>
        <view class="list">
          <voucherItem :items.sync="item"></voucherItem>
        </view>
      </view>
      <view class="jk_logo_box">
        <jkLogo></jkLogo>
      </view>
      <copySuccessLayer :layer_show.sync="layer_show"></copySuccessLayer>
    </view>
  </view>
</template>

<script>
import wepy from 'wepy'
import jkLogo from '../../components/yinju/jk_logo'
import voucherItem from '../../components/yinju/voucher_item'
import copySuccessLayer from '../../components/yinju/copy_success_layer'
import Null from '@/components/null'
import { getStore, connect } from 'wepy-redux'
import { vocherList } from '../../store/actions'

const store = getStore()
const shopInfo = store.getState().home.shopInfo
@connect({
  list(state) {
    this.total = state.record.voucher_list.total
    return state.record.voucher_list
  }
})
export default class voucher extends wepy.page {
  config = {
    navigationBarTitleText: '我的卡券'
  }
  onShow() {
    let sendData = {
      userId: shopInfo.userId,
      shopId: shopInfo.shopId,
      offset: this.offset,
      limit: this.limit
    }
    this.initData(sendData, 1)
  }
  data = {
    layer_show: false,
    offset: 0,
    limit: 5,
    total: 0,
    item: [],
    type: 3
  }
  initData(data, type) {
    // 获取优惠券
    store.dispatch(vocherList(data)).then(res => {
      if (type === 1) {
        this.item = res.payload.content
        this.$apply()
      } else {
        let _data = this.item
        _data = [..._data, ...res.payload.content]
        this.item = _data
        this.$apply()
      }
    })
  }
  onReachBottom() {
    // 下拉加载更多
    let offset = this.offset
    offset += this.limit
    this.offset = offset
    this.$apply()
    if (offset >= this.total) {
      wepy.showToast({
        title: '没有更多了',
        icon: 'none',
        duration: 2000
      })
    } else {
      let sendData = {
        userId: 1,
        shopId: 1,
        offset: offset,
        limit: this.limit
      }
      this.initData(sendData, 0)
    }
  }
  components = {
    jkLogo,
    voucherItem,
    copySuccessLayer,
    null: Null
  }
  onUnload() {
    // 重置数据
    store.dispatch({type: 'RESET'})
  }
}
</script>
