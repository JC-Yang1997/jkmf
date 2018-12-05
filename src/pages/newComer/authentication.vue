<style lang="scss">
  .authentication{
    padding:32rpx 26rpx 30rpx;
    position:relative;
    .authentication_content{
      padding:60rpx 40rpx 44rpx;
      background-color:#fff;
      border-radius:16rpx;
      box-shadow:0 8rpx 12rpx rgba(0,0,0,0.07);
      margin-bottom: 80rpx;
      .title{
        margin-bottom:24rpx;
        font-size:36rpx;
        color:#474747;
        line-height:50rpx;
      }
      .notes{
        margin-bottom:36rpx;
        line-height:40rpx;
        font-size:28rpx;
        color:#9B9B9B;
      }
      .input_box{
        height:88rpx;
        padding-left:42rpx;
        margin-bottom:44rpx;
        background-color:#F7F7F7;
        border-radius:44rpx;
        input{
          width:100%;
          height:100%;
        }
      }
      .submit{
        height:88rpx;
        margin-bottom:56rpx;
        text-align:center;
        line-height:88rpx;
        background:linear-gradient(90deg,#F3466B, #EE3A3A);
        font-size:28rpx;
        color:#fff;
        border-radius:44rpx;
      }
      .img1{
        width:600rpx;
        height:200rpx;
        background:rgba(247,247,247,1);
        margin-bottom: 20rpx;
        overflow: hidden;
      }
      .operation_steps{
        width:600rpx;
        height:800rpx;
      }
    }
    .jk_logo_box{
      margin-top:22rpx;
    }
  }
</style>

<template>
  <view class="authentication">
    <view class="authentication_content">
      <view class="title">回填该商品订单编号</view>
      <view class="notes">请在下方粘贴订单编号</view>
      <form bindsubmit="submit">
        <view class="input_box">
          <input type="text" value="{{orderId}}" name="orderId" bindconfirm='reset' />
        </view>
        <button formType="submit" class="submit">确认提交</button>
      </form>
      <view class="img1">
        <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/why-receive.png" />        
      </view>
      <view class="operation_steps">
        <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/operation_steps.png"/>
      </view>
    </view>
    <view class="jk_logo_box">
      <jkLogo></jkLogo>
    </view>
    <authentication :layerShow.sync="layerShow" :activityId.sync="activityId" :activityDefId.sync="activityDefId"></authentication>
  </view>
</template>

<script>
  import wepy from 'wepy'
  import jkLogo from '../../components/yinju/jk_logo'
  import authentication from '../../components/yinju/authenticationLayer'

  import { getStore } from 'wepy-redux'
  import { backFillOrder, backFillOrderOnly } from '../../store/actions'
  const store = getStore()
  const shopInfo = store.getState().home.shopInfo

  export default class Authentication extends wepy.page {
    config = {
      navigationBarTitleText: '添加订单编号'
    }
    data = {
      layerShow: false,
      orderId: '',
      afId: '',
      activityId: '',
      activityDefId: '',
      only: 0
    }
    onLoad(e) {
      if (e.only) {
        this.only = e.only
      }
      this.activityDefId = e.activityDefId || 1
      this.activityId = e.activityId || 0
      this.$apply()
    }
    methods = {
      submit: (e) => {
        if (this.only === '5') {
          let sendParams = {
            userId: shopInfo.userId,
            shopId: shopInfo.shopId,
            orderId: e.detail.value.orderId
          }
          store.dispatch(backFillOrderOnly(sendParams)).then(res => {
            if (res.payload.code !== 0) {
              wepy.showToast({
                title: res.payload.message,
                icon: 'none'
              })
              this.setData({orderId: ''})
              console.log(this)
            } else {
              wepy.showToast({
                title: '添加成功',
                duration: 2000
              })
              this.setData({orderId: ''})
              console.log(this)
              setTimeout(() => {
                wepy.navigateTo({
                  url: '/pages/htorder/htorder'
                })
              }, 2000)
            }
            this.$apply()
          })
        } else {
          if (!e.detail.value.orderId) {
            wepy.showToast({
              title: '请填写订单号',
              icon: 'none'
            })
          }
        // 能够触发this.orderId = ''
          this.orderId = e.detail.value.orderId
          let sendData = {
            userId: shopInfo.userId,
            afId: this.activityDefId,
            orderId: e.detail.value.orderId
          }
          store.dispatch(backFillOrder(JSON.stringify(sendData))).then(res => {
            if (res.payload.code !== 0) {
              console.log(this)
              this.orderId = ''
              wepy.showToast({
                title: res.payload.message,
                icon: 'none'
              })
            } else {
              console.log(this)
              this.orderId = ''
              this.layerShow = true
            }
            this.$apply()
          })
        }
      }
    }

    components = {
      jkLogo,
      authentication
    }
  }

</script>
