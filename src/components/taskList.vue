<style lang="scss">
.task-list-com {
  background: #fff;
  border-radius: 20rpx;
  margin-top: 20rpx;
  .task-list-header {
    font-size: 26rpx;
    font-weight: 400;
    color: rgba(155, 155, 155, 1);
    line-height: 32rpx;
    display: flex;
    justify-content: space-between;
    padding: 24rpx;
    .task-list-tip {
      position: relative;
      font-size: 28rpx;
      font-weight: 500;
      color: rgba(235, 57, 57, 1);
      line-height: 40rpx;
      text-indent: 20rpx;
      &::before {
        content: '';
        position: absolute;
        background-color: #eb3939;
        height: 29rpx;
        width: 5rpx;
        top: 5rpx;
        left: -5rpx;
      }
    }
    .task-list-more {
      font-size: 26rpx;
      font-weight: 400;
      color: rgba(155, 155, 155, 1);
      line-height: 32rpx;
    }
  }
  .task-list-body {
    padding: 0 24rpx;
    .task-list-nav {
      padding-bottom: 15rpx;
      margin-bottom: 15rpx;
      border-bottom: 1px #ccc solid;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .task-list-tr {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        image {
          width: 100rpx;
          height: 100rpx;
          border-radius: 10rpx;
        }
        .task-recommend {
          margin-left: 10rpx;
          // padding-bottom: 41rpx;
          .task-recommend-title {
            font-size: 28rpx;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 40rpx;
          }
          .task-recommend-time {
            font-size: 24rpx;
            font-weight: 400;
            color: rgba(147, 150, 157, 1);
            line-height: 33rpx;
            margin-top: 8rpx;
          }
        }
        .task-recommend-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 150rpx;
          height: 70rpx;
          background: linear-gradient(
            118deg,
            rgba(243, 70, 107, 1) 0%,
            rgba(238, 58, 58, 1) 100%
          );
          box-shadow: 0px 4rpx 12rpx 0px rgba(255, 99, 71, 0.54);
          border-radius: 44rpx;
          font-size: 28rpx;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 40rpx;
        }
      }
      .task-msg {
        width: 80%;
      }
    }
    .task-list-nav:last-child {
      border-bottom: 0;
    }
  }
}
</style>

<template>
  <view class="task-list-com">
    <view class="task-list-header">
      <view class="task-list-tip">成长任务</view>
      <view class="task-list-more">查看更多<text class="iconfont icon-jinru"></text></view>
    </view>
    <view class="task-list-body">
      <view class="task-list-nav">
        <view class="task-list-tr task-msg">
          <image src="https://img-test.wxyundian.cn/icon01.png"/>
          <view class="task-recommend">
            <view class="task-recommend-title">收藏加购物</view>
            <view class="task-recommend-time">11月14日 24点结束</view>
          </view>
        </view>
        <view class="task-list-tr">
          <view class="task-recommend-btn">领红包</view>
        </view>
      </view>
      <view class="task-list-nav">
        <view class="task-list-tr task-msg">
          <image src="https://img-test.wxyundian.cn/icon01.png"/>
          <view class="task-recommend">
            <view class="task-recommend-title">收藏加购物</view>
            <view class="task-recommend-time">11月14日 24点结束</view>
          </view>
        </view>
        <view class="task-list-tr">
          <view class="task-recommend-btn">领红包</view>
        </view>
      </view>
      <view class="task-list-nav">
        <view class="task-list-tr task-msg">
          <image src="https://img-test.wxyundian.cn/icon01.png"/>
          <view class="task-recommend">
            <view class="task-recommend-title">收藏加购物</view>
            <view class="task-recommend-time">11月14日 24点结束</view>
          </view>
        </view>
        <view class="task-list-tr">
          <view class="task-recommend-btn">领红包</view>
        </view>
      </view>
      <view class="task-list-nav">
        <view class="task-list-tr task-msg">
          <image src="https://img-test.wxyundian.cn/icon01.png"/>
          <view class="task-recommend">
            <view class="task-recommend-title">收藏加购物</view>
            <view class="task-recommend-time">11月14日 24点结束</view>
          </view>
        </view>
        <view class="task-list-tr">
          <view class="task-recommend-btn">领红包</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'
export default class TaskList extends wepy.component {}
</script>
