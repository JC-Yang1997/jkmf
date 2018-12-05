<template>
  <view>
    <null :type.sync='imgType' wx:if="{{type==1&&pay_record_list.length===0}}" />
    <null :type.sync='imgType' wx:if="{{type!=1&&cash_record.length===0}}" />
    <block wx:if="{{cash_record.length!==0 || pay_record_list.length!==0}}">
      <scroll-view scroll-y bindscrolltolower="scrolltolower" class="cashDetail record_list">
        <view class="title">累计{{type==1?"交易":"提现"}}明细</view>
        <repeat for="{{type==1?pay_record_list:cash_record}}">
          <recordListItem :item="item"></recordListItem>
        </repeat>
      </scroll-view>
    </block>
  </view>
</template>

<script>

  import wepy from 'wepy'
  import recordListItem from '../../components/yinju/recordListItem'
  import { getStore, connect } from 'wepy-redux'
  import { cashRecord, payRecord } from '../../store/actions'
  import Null from '@/components/null'
  const store = getStore()
  const shopInfo = store.getState().home.shopInfo
  console.log('shopInfo', shopInfo)
  @connect({
    cash_record(state) {
      return state.record.cash_record
    },
    limit(state) {
      return state.record.limit
    },
    offset(state) {
      return state.record.cash_record_offset
    },
    no_more(state) {
      return state.record.cash_record_no_more
    },
    // 交易记录
    pay_record_list(state) {
      let list = state.record.payRecord.list
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
    pay_record(state) {
      return state.record.payRecord
    }
  })

  export default class cashDetail extends wepy.page {
    config = {
      navigationBarTitleText: ''
    }
    data = {
      // 0提现，1交易
      type: 0,
      item: {
        title: 1
      },
      imgType: 2
    }

    components = {
      recordListItem,
      null: Null
    }

    methods = {
      scrolltolower() {
        if (this.type === 0) {
          if (!this.no_more) {
            this.initData()
          } else {
            wepy.showToast({
              title: '没有更多了',
              icon: 'none'
            })
          }
        } else {
          if (this.pay_record.isPullDown) {
            this.initData()
          } else {
            wepy.showToast({
              title: '没有更多了',
              icon: 'none'
            })
          }
        }
      }
    }
    initData() {
      if (this.type === 0) {
        let sendData = {
          shopId: shopInfo.shopId,
          userId: shopInfo.userId,
          // shopId: 8,
          // userId: 8,
          limit: this.limit,
          offset: this.offset + this.limit,
          type: 'cash'
        }
        wepy.showLoading({
          title: '加载中'
        })
        store.dispatch(cashRecord(sendData)).then(res => {
          wepy.hideLoading()
        }).catch()
      } else {
        let sendData = {
          shopId: shopInfo.shopId,
          userId: shopInfo.userId,
          merchantId: shopInfo.merchantId,
          pageLastId: this.pay_record_list.length > 0 ? this.pay_record_list[this.pay_record_list.length - 1].orderId : '',
          // merchantId: 8,
          // shopId: 8,
          // userId: 8,
          limit: this.pay_record.limit
        }
        wepy.showLoading({
          title: '加载中'
        })
        store.dispatch(payRecord(sendData)).then(res => {
          wepy.hideLoading()
        })
      }
    }

    onLoad(e) {
      // 重置数据
      // store.dispatch({type: 'RESET'})
      this.type = e.type * 1
      let title = e.type * 1 === 1 ? '交易明细' : '提现记录'
      this.$apply()
      this.initData()
      wepy.setNavigationBarTitle({
        title
      })
    }
    onUnload() {
    // 重置数据
      store.dispatch({type: 'RESET'})
    }
  }

</script>
<style lang="scss">
  page{
    height:100%;
  }

  .cashDetail{
    box-sizing:border-box;
    height:100%;
  }
</style>
