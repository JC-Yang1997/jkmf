<template>
  <view class="recordListItem">
    <view class='list_item align_items space_between'>
        <view class='key'>
          <view class='name'>{{item.title || '提现成功'}}</view>
          <view class='date'>{{item.time}}</view>
        </view>
        <view class="val">
          <view class="price" :class="{'green':item.color == 1}">{{item.price}}</view>
          <view class="type" wx:if="{{item.typeText}}">[{{item.typeText}}]</view>
        </view>
      </view>
  </view>

</template>

<script>
  import wepy from 'wepy'
  export default class recordListItem extends wepy.component {
    props = {
      item: {
        default: {}
      }
    }
    onLoad() {}
    data = {}
  }

</script>

<style lang="scss" scoped>
  @import "../../scss/yinju.scss";
  .list_item{
    padding:22rpx 23rpx 23rpx 21rpx;
    margin-bottom:16rpx;
    background-color:#fff;
    border-radius:16rpx;
    .key{
      width:502rpx;
      .name{
        font-size:28rpx;
        color:#474747;
        line-height:40rpx;
        margin-bottom:8rpx;
      }
      .date{
        font-size:24rpx;
        color:#93969D;
        white-space:pre;
      }
    }
    .val{
      .price{
        font-size:28rpx;
        color:#FD7557;
        line-height:40rpx;
      }
      .type{
        margin-top:5rpx;
        color:#93969D;
        font-size:20rpx;
      }
      .green{
        color:#7ED321
      }
    }
  }
</style>
