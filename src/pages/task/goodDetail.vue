<style lang="scss" scoped>
  image{
    width:100%
  }
</style>

<template>
  <view class="goodDetail">
    <view class="img_item" wx:for="{{imgs}}" wx:key="{{index}}">
      <image src="{{item}}" mode="widthFix"/>
    </view>
  </view>
</template>

<script>
  import wepy from 'wepy'
  import { getStore, connect } from 'wepy-redux'
  import { getGoodDetail } from '../../store/actions'
  const store = getStore()
  const shopInfo = store.getState().home.shopInfo
  @connect({
    anward_join(state) {
      return state.record.anward_join
    }
  })
  export default class goodDetail extends wepy.page {
    config = {
      navigationBarTitleText: '奖品详情'
    }
    data = {
      activityId: 1438,
      imgs: []
    }
    onLoad(options) {
      this.activityId = options.activityId || 1438
      this.initData()
    }
    initData() {
      let sendData = {
        merchantId: shopInfo.merchantId,
        shopId: shopInfo.shopId,
        activityId: this.activityId
      }
      store.dispatch(getGoodDetail(sendData)).then(res => {
        if (res.payload.code === 0) {
          this.imgs.push(res.payload.data.goodsUrl)
          this.$apply()
        }
      })
    }
  }

</script>
