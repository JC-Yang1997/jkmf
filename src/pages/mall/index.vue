
<style lang="scss">
  @import "../../scss/yinju.scss";
  .top{
    
  }
</style>


<template>
  <view class="view">
    <!-- 顶部 -->
    <view class="top">
      <!-- 左边 -->
      <view class="store_info">
        <view class="card_img">
          <image src=""/>
        </view>
        <view class="card_content">
          <view class="title_1">大暑食品旗舰店</view>
          <view class="title_2">分享好友 抽奖免单</view>
        </view>
      </view>
      <!-- 右边 -->
      <view class="store_code">
        <view class="img_box">
          <image src=""/>
        </view>
        <view class="notes">扫码领红包</view>
      </view>
    </view>
  </view>
</template>

<script>
  import wepy from 'wepy'
  // import { getStore, connect } from 'wepy-redux'
  // import { awardJoin } from '../../store/actions'
  // const store = getStore()
  // @connect({
  //   anward_join(state) {
  //     return state.record.anward_join
  //   }
  // })
  export default class Mall extends wepy.page {
    config = {
      navigationBarTitleText: '极客魔方电商'
    }
  }
  
</script>
