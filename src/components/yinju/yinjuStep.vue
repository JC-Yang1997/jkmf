<style lang='scss' scoped>
@import '../../scss/yinju.scss';
.task-upload {
  position: relative;
  width: 93%;
  margin: 0 auto;
  min-height: 780rpx;
  background: rgba(255, 255, 255, 1);
  border-radius: 20rpx;
  padding: 35rpx 35rpx 78rpx;
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
    width:300rpx;
    height: 64rpx;
    line-height:63rpx;
    padding:0 38rpx;
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
    box-sizing:border-box;
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
}
.task-btn-disabled {
  width: 500rpx;
  height: 88rpx;
  line-height: 88rpx;
  text-align: center;
  margin: 63rpx auto 0;
  background: rgba(204, 204, 204, 1);
  border-radius: 44rpx;
  font-size: 28rpx;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
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
</style>
<template>
 <view class="step1-com">
  <view class="step1">
    <view class="task-header flex_center">
      <view class="text_box">按客服要求上传相关截图</view>
      <view class="icon_box" wx:if="{{ stepData.status === 3 || stepData.status === -2}}">
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
      <!-- <view>
        <view class="task-ulpoad-header">竞品截图</view>
        <ImgUpload1 :pic.sync="pic1"></ImgUpload1>
      </view> -->
      <view class="task-upload-waibei">
        <view class="task-ulpoad-header">宝贝截图</view>
        <view class="task-upload-img-com">
          <ImgUpload2 :pic.sync="pic2" :activityId.sync="activityId"></ImgUpload2>
          <ImgUpload3 :pic.sync="pic3" :activityId.sync="activityId"></ImgUpload3>
        </view>
      </view>
      <view class="getFormId task-btn" wx:if="{{ stepData.status == 0 }}">
      <!-- <view class="getFormId task-btn"> -->
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
      <view class="task-btn-disabled" wx:if="{{ stepData.status == 1 }}" >审核中</view>
      <view class="task-btn-disabled" wx:if="{{ stepData.status != 0  && stepData.status != 1}}" >已完成</view>
    </view>
  </view>
 </view>
</template>
<script>
import wepy from 'wepy'
import ImgUpload from './imgUpload'
import { getStore, connect } from 'wepy-redux'
import { setDrawData } from '../../store/actions'
const store = getStore()
const shopInfo = store.getState().home.shopInfo
@connect({
  stepData(state) {
    this.pic1 = state.drawTask.data.competitorPic
    this.pic2 = state.drawTask.data.goodsPic1
    this.pic3 = state.drawTask.data.goodsPic2
    return state.drawTask.data
  },
  state(state) {
    return state
  }
})
export default class Step1 extends wepy.component {
  components = {
    // ImgUpload1: ImgUpload,
    ImgUpload2: ImgUpload,
    ImgUpload3: ImgUpload
  };
  data = {
    status: 0,
    taskLayer: true,
    statusShow: 4,
    keyword: '关键词 关键词 词',
    pic1: '',
    pic2: '',
    pic3: '',
    imgs: [],
    // formId的数组
    formIds: []
  };
  events = {
    ImgVal: (src, e) => {
      switch (e.source.$name) {
        case 'ImgUpload1':
          this.state.drawTask.data.competitorPic = src
          break
        case 'ImgUpload2':
          this.state.drawTask.data.goodsPic1 = src
          break
        case 'ImgUpload3':
          this.state.drawTask.data.goodsPic2 = src
          break
        default:
          break
      }
    },
    apply() {
      this.$apply()
      this.$parent.$apply()
      this.$broadcast('apply')
    }
  };
  props = {
    activityId: {
      default: 0
    }
  }
  methods = {
    copy() {
      wepy.setClipboardData({
        data: this.stepData.keyword,
        success: res => {
          console.log(res)
        }
      })
    },
    submit(e) {
      if (!this.pic2 || !this.pic3) {
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
      let imgUrl = []
      imgUrl.push(this.pic2)
      imgUrl.push(this.pic3)
      imgUrl.push('')
      // imgUrl.push(this.pic3)
      let _data = {
        uid: shopInfo.userId,
        aid: this.activityId,
        shop_id: shopInfo.shopId,
        pics: imgUrl,
        formIds: this.formIds.join(',')
      }
      store.dispatch(setDrawData(_data)).then(res => {
        wepy.showToast({
          title: res.payload.message,
          icon: 'none'
        })
        if (res.payload.code === 0) {
          setTimeout(() => {
            this.$emit('reload')
          }, 1000)
        }
      })
    }
  };
}
</script>
