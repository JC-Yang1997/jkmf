<style lang="scss" scoped>
  @import '../../scss/yinju.scss';
  .img_1{
    flex:1
  }
  .btn{
    width:500rpx;
    height:60rpx;
    border-radius:30rpx;
    text-align:center;
    line-height:60rpx;
    background-color:red;
    color:#fff;
    margin:50rpx auto 0;
  }
  .img{
    width:600rpx;
    height:900rpx;
    margin:30rpx auto 0;
  }
</style>
<template>
  <view class="test">
    <view class="img_box align_items">
      <view class="img_1">
        <image mode="widthFix" src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/logo_big.png"/>
      </view>
      <view class="img_1">
        <image mode="widthFix" src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/balance_bg.png"/>
      </view>
    </view>
    <view class="btn" @tap="getLocalImg">生成图片</view>
    <canvas class="img" canvas-id="img" @tap='canvasToTempFilePath'></canvas>
  </view>
</template>
<script>
  import wepy from 'wepy'
  export default class Test extends wepy.page {
    config = {
      navigationBarTitleText: '测试'
    }
    onLoad() {}
    data = {
      localImg: []
    }
    methods = {
      getLocalImg() {
        let httpImg = ['http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/logo_big.png', 'http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/balance_bg.png']
        let n = 0
        var getImageInfo = () => {
          if (n < httpImg.length) {
            wepy.getImageInfo({
              src: httpImg[n],
              success: res => {
                this.localImg.push(res.path)
                n++
                getImageInfo()
              }
            })
          } else {
            this.canvasIng()
          }
        }
        getImageInfo()
      },
      canvasToTempFilePath() {
        wepy.canvasToTempFilePath({
          canvasId: 'img',
          quality: 1,
          success: res => {
            console.log('res.tempFilePath', res.tempFilePath)
            wepy.previewImage({
              urls: [res.tempFilePath]
            })
          }

        })
      }
    }
    canvasIng() {
      const ctx = wepy.createCanvasContext('img')
      ctx.drawImage(this.localImg[0], 0, 0, 300, 450)
      ctx.drawImage(this.localImg[1], 200, 200, 50, 50)
      ctx.setTextAlign('center')
      ctx.setFillStyle('#000000')
      ctx.setFontSize(22)
      ctx.fillText('作者：一斤代码', 300 / 2, 250)
      ctx.stroke()
      ctx.draw()
    }
  }
</script>
