<template>
  <view class="jindutiao">
    <view class="out-box"></view>
    <view class="in-box" style="width:{{start*100/end}}%;"></view>
    <view class="persent">{{start}}/{{end}}</view>
  </view>
</template>
<script>
import wepy from 'wepy'
export default class Jindu extends wepy.component {
  props ={
    start: Number,
    end: Number
  }
}
</script>
<style lang='scss'>
.jindutiao{
  width:224rpx;
  height:24rpx;
  position: relative;
  &>.out-box{
    width:100%;
    height: 100%;
    position: absolute;
    z-index: 102;
    left: 0;
    top: 0;
    background:#FBD7D7;
    border-radius:12rpx;
  }
  &>.in-box{
    position: absolute;
    left: 0;
    top: 0;
    height:100%;
    z-index: 103;
    background:linear-gradient(90deg,#F86787 0%,#F35959 100%);
    border-radius:12rpx;
  }
  &>.persent{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 104;
    font-size:20rpx;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    display: flex;
    align-items: center;
    padding: 0 20rpx;
    box-sizing: border-box;
  }
}
</style>
