<template>
  <view>
    <null :type.sync="type" wx:if="{{income_recode.length===0}}" />
    <scroll-view wx:else scroll-y bindscrolltolower="scrolltolower" class='revenueRecord'>
      <view class='top space_between align_items'>
        <view class='key align_items'>
          <view class='icon_box'></view>
          <view class='text_box align_items'>累计收入金额（元）：</view>
        </view>
        <view class='val'>{{income_sumMoney || 0}}</view>
      </view>
      <view class='list'>
        <view class='title'>收入记录明细</view>
        <repeat for="{{income_recode}}" key="{{index}}">
          <recordListItem :item="item"></recordListItem>
        </repeat>
      </view>
    </scroll-view>
  </view>
</template>

<style lang='scss'>
  @import "../../scss/yinju.scss";
  page{
    height:100%;
  }
  .revenueRecord{
    height:100%;
  }
  .top{
    height:88rpx;
    padding:0 46rpx 0 24rpx;
    background-color:#FAE8E8;
    font-size:28rpx;
    color:#EB3939;
    .icon_box{
      width:10rpx;
      height:30rpx;
      margin-right:20rpx;
      background-color:#EB3939;
    }
  }
  .list{
    padding:30rpx 24rpx 0;
    .title{
      font-size:24rpx;
      color:#9B9B9B;
      margin-bottom:18rpx;
      line-height:1;
    }
  }
</style>

<script>
  import wepy from 'wepy'
  import recordListItem from '../../components/yinju/recordListItem'
  import { connect, getStore } from 'wepy-redux'
  import { income } from '../../store/actions'
  import Null from '@/components/null'
  const store = getStore()
  const shopInfo = store.getState().home.shopInfo
  console.log('shopInfo', shopInfo)
  @connect({
    income_recode(state) {
      let list = state.record.income_recode
      list.map(item => {
        let text = ''
        switch (item.type) {
          case 1:
            text = '免单抽奖'
            break
          case 2:
            text = '轮盘抽奖'
            break
          case 3:
            text = '随机红包'
            break
          case 4:
            text = '红包任务'
            break
          case 5:
            text = '钱包提现'
            break
          case 6:
            text = '钱包充值'
            break
          case 7:
            text = '钱包支出'
            break
          case 8:
            text = '钱包退回'
            break
        }
        item.typeText = text
        item.color = item.price[0] === '+' ? 0 : 1
      })
      return list
    },
    limit(state) {
      return state.record.limit
    },
    offset(state) {
      return state.record.income_offset
    },
    no_more(state) {
      return state.record.income_no_more
    },
    income_sumMoney(state) {
      return state.record.income_sumMoney
    }
  })

export default class revenueRecord extends wepy.page {
    config = {
      navigationBarTitleText: '收入记录'
    }

    data = {
      type: 2
    }

    onShow() {
      this.initData()
    }

    onUnload() {
    // 重置数据
      store.dispatch({type: 'RESET'})
    }

    methods = {
      scrolltolower() {
        this.initData()
      }
    }

    initData() {
      if (this.no_more) {
        return
      }
      let sendData = {
        shopId: shopInfo.shopId,
        userId: shopInfo.userId,
        // shopId: 8,
        // userId: 8,
        limit: this.limit,
        offset: this.offset + this.limit
      }
      store.dispatch(income(sendData))
    }

    components = {
      recordListItem: recordListItem,
      null: Null
    }
}

</script>
