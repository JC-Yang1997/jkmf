<style lang="scss">
.task-upload-img {
  position: relative;
  width: 240rpx;
  height: 240rpx;
  border: 2rpx dashed #d9d9da;
  margin-right: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  .image-com{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  image{
    width: 100%;
    height: 100%;
  }
  .task-upload-com {
    text-align: center;
    .task-icon {
      color: #d8d8d8;
    }
    .task-text {
      margin-top: 35rpx;
      font-size: 24rpx;
      font-weight: 400;
      color: rgba(147, 150, 157, 1);
      line-height: 33rpx;
    }
  }
}
.task-upload-waibei {
  margin-top: 50rpx;
}
.delete{
  position:absolute;
  top:8rpx;
  right:8rpx;
  width:36rpx;
  height:36rpx;
  line-height:36rpx;
  text-align:center;
  font-size:20rpx;
  background-color:#000;
  border-radius:50%;
  // padding:10rpx;
  margin:18rpx 18rpx 0 0;
  transform:translate3d(50%,-50%,0);
  z-index:2;
  color:#fff;
}
</style>
<template>
  <view class="task-upload-img" @tap="uploadImg">
    <view class="delete iconfont icon-guanbi" @tap.stop="deleteImg" wx:if="{{pic && status === 0 }}">
      <!-- <image mode="aspcetFill" src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/icon_close_2.png"/> -->
    </view>
    <view class="task-upload-com" >
      <view class="task-icon iconfont icon-xiangji"></view>
      <view class="task-text">上传宝贝截图</view>
    </view>
    <view class="image-com">
      <image mode="aspectFill" class = "img" src="{{pic}}" />
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'
import { connect, getStore } from 'wepy-redux'
const store = getStore()
const state = store.getState()
const shopInfo = state.home.shopInfo
const requestUrl = wepy.$appConfig.requestUrl

@connect({
  status(state) {
    return state.drawTask.data.status
  },
  state(state) {
    return state
  }
})

export default class ImgUpload extends wepy.component {
  onLoad() {}
  events = {
    apply() {
      this.$apply()
    }
  }
  data = {a: 1}
  props = {
    pic: {
      type: String,
      default: ''
    },
    activityId: {
      default: 0
    }
  }
  methods = {
    uploadImg() {
      if (this.status !== 0) {
        return
      }
      var that = this
      wepy.chooseImage({
        success: e => {
          wepy.uploadFile({
            url: `${requestUrl}/api/applet/userTask/uploadAwardTaskPic`,
            header: {
              'content-type': 'application/x-www-form-urlencoded',
              'token': shopInfo.token
            },
            filePath: e.tempFilePaths[0],
            name: 'image',
            formData: {
              shopId: shopInfo.shopId,
              activityId: this.activityId,
              uid: shopInfo.userId
            },
            success(res) {
              if (res.data) {
                let _data = JSON.parse(res.data)
                let url = _data.data.imgUrl
                that.pic = url
                that.$emit('ImgVal', url)
                that.$apply()
                // console.log(_data.data)
              }
            }
          })
        }
      })
    },
    deleteImg() {
      this.$emit('ImgVal', '')
    }
  }
}
</script>
