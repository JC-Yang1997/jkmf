<style lang='scss'>

.task-upload {
  position: relative;
  width: 93%;
  margin: 0 auto;
  min-height: 780rpx;
  background: rgba(255, 255, 255, 1);
  border-radius: 20rpx;
  padding: 35rpx;
  box-sizing: border-box;
  .task-tip {
    width: 630rpx;
    height: 134rpx;
    text-align: center;
    font-size: 28rpx;
    font-weight: 500;
    line-height: 40rpx;
    background: rgba(252, 246, 246, 1);
    border: 2rpx dashed #fd7557;
    color: #f56c6c;
    padding: 20rpx 28rpx 22rpx 26rpx;
    box-sizing: border-box;
  }
  .task-copy {
    margin-top: 30rpx;
    font-size: 28rpx;
    font-weight: 400;
    color: rgba(155, 155, 155, 1);
    line-height: 40rpx;
  }
  .task-ci {
    height: 64rpx;
    padding: 12rpx 38rpx;
    margin: 21rpx 0 61rpx 0;
    background: rgba(252, 246, 246, 1);
    border-radius: 52rpx;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 28rpx;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 64rpx;
  }
  .task-ulpoad-header {
    width: 144rpx;
    height: 58rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 33rpx;
    background: rgba(255, 255, 255, 1);
    border-radius: 8rpx;
    border: 2rpx solid;
    font-size: 28rpx;
    font-weight: 400;
    color: rgba(235, 57, 57, 1);
    line-height: 40rpx;
  }
  .task-layer {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    .finish {
      width: 288rpx;
      height: 80rpx;
      line-height: 80rpx;
      border-radius: 8rpx;
      border: 2rpx solid #eb3939;
      font-size: 28rpx;
      font-weight: 500;
      color: #eb3939;
      background-color: transparent;
    }
  }
  .task-upload-img-com {
    display: flex;
    align-items: flex-start;
  }
  .getFormId{
    position:relative;
    .getFormId_a{
      position:absolute;
      top:0;
      left:0;
      width:1rpx;
      height:1rpx;
      padding:0;
      overflow:visible;
      .getFormId_b{
        position:absolute;
        top:0;
        left:0;
        width:500rpx;
        height:88rpx;
        font-size:28rpx;
        font-weight:500;
        color:#fff;
        line-height:88rpx;
      }
    }
  }
}
</style>
<template>
 <view class="step1-com">
  <view class="step1">
    <view class="task-header flex_center">
      <view class="text_box">步骤一：按客服要求上传相关截图</view>
      <view class="icon_box" wx:if="{{stepData.status > 1 || stepData.status == -2}}">
        <image src="http://jkmf.oss-cn-hangzhou.aliyuncs.com/public/applet/icon/icon_doen.png"/>
      </view>
    </view>
    <view class="task-upload">
      <view class="task-tip">
        请按照客服的指引及时完成任务，若不清晰中奖 任务，请联系客服获取。
      </view>
      <view class="task-copy">
        点击复制商品关键词
      </view>
      <view class="task-ci" @tap="copy">{{stepData.keyword}}</view>
      <view>
        <view class="task-ulpoad-header">竞品截图</view>
        <ImgUpload1 :pic.sync="pic1" :activityId.sync="activityId"></ImgUpload1>
      </view>
      <view class="task-upload-waibei">
        <view class="task-ulpoad-header">宝贝截图</view>
        <view class="task-upload-img-com">
          <ImgUpload2 :pic.sync="pic2" :activityId.sync="activityId"></ImgUpload2>
          <ImgUpload3 :pic.sync="pic3" :activityId.sync="activityId"></ImgUpload3>
        </view>
      </view>
      <view class="getFormId task-btn red" wx:if="{{ stepData.status === 0 }}">
      <!-- <view class="getFormId task-btn red"> -->
        <form bindsubmit="submit" report-submit>
          <button form-type="submit" class="getFormId_a"> 
            <view class="getFormId_b">
              <form bindsubmit="submit" report-submit>
                <button form-type="submit" class="getFormId_a"> 
                  <view class="getFormId_b">
                    提交审核
                  </view>
                </button>
              </form>
            </view>
          </button>
        </form>
      </view>
      <view class="task-btn gray" wx:if="{{ stepData.status === 1 }}" >审核中</view>
      <view class="task-btn gray" wx:if="{{ stepData.status !== 1 && stepData.status !== 0 }}" >已完成</view>
    </view>
  </view>
 </view>
</template>
<script>
import wepy from 'wepy'
import ImgUpload from '../components/imgUpload'
import { getStore, connect } from 'wepy-redux'
import { setDrawData } from '../store/actions'
const store = getStore()
const state = store.getState()
const shopInfo = state.home.shopInfo
@connect({
  stepData(state) {
    this.pic1 = state.drawTask.data.competitorPic
    this.pic2 = state.drawTask.data.goodsPic1
    this.pic3 = state.drawTask.data.goodsPic2
    this.keyword = state.drawTask.data.keyword
    // state.drawTask.data.status = 2
    // this.$apply()
    return state.drawTask.data
  },
  drawTask(state) {
    return state.drawTask
  }
})
export default class Step1 extends wepy.component {
  props = {
    stepData: {
      type: Object
    },
    activityId: {
      default: 0
    }
  };
  onLoad() {}
  components = {
    ImgUpload1: ImgUpload,
    ImgUpload2: ImgUpload,
    ImgUpload3: ImgUpload
  };
  data = {
    keyword: '关键词 关键词 词',
    pic1: '',
    pic2: '',
    pic3: '',
    imgs: [],
    formIds: []
  };
  events = {
    ImgVal: (src, e) => {
      switch (e.source.$name) {
        case 'ImgUpload1':
          this.drawTask.data.competitorPic = src
          break
        case 'ImgUpload2':
          this.drawTask.data.goodsPic1 = src
          break
        case 'ImgUpload3':
          this.drawTask.data.goodsPic2 = src
          break
        default:
          break
      }
      this.$apply()
    }
  };
  methods = {
    copy() {
      wepy.setClipboardData({
        data: this.keyword,
        success: res => {
          console.log(res)
        }
      })
    },
    submit(e) {
      let imgUrl = []
      imgUrl.push(this.drawTask.data.competitorPic)
      imgUrl.push(this.drawTask.data.goodsPic1)
      imgUrl.push(this.drawTask.data.goodsPic2)
      console.log('imgUrl', imgUrl)
      if (!imgUrl[0] || !imgUrl[1] || !imgUrl[2]) {
        wepy.showToast({
          title: '请上传图片',
          icon: 'none'
        })
        return
      }
      this.formIds.push(e.detail.formId)
      // 获取多个formId但是只进行一次请求。在这里是两次
      if (this.formIds.length < 2) {
        return
      }
      let _data = {
        // uid: 37,
        // aid: 5,
        uid: shopInfo.userId,
        aid: this.activityId,
        shop_id: shopInfo.shopId,
        pics: imgUrl,
        formIds: this.formIds.join(',')
      }
      store.dispatch(setDrawData(_data)).then(res => {
        wepy.showToast({
          title: res.payload.message || '提交失败',
          icon: 'none'
        })
        if (res.payload.code === 0) {
          setTimeout(() => {
            this.$emit('reLoad')
          }, 1000)
        }
      })
    }
  };
}
</script>
