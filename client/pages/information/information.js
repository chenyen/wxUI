//infomation.js
var util = require('../../utils/util.js')

Page({
  data: {
    mobileModel: '',
    mobileePixelRatio: '',
    windowWidth: '',
    windowHeight: '',
    language: '',
    version: '',
    networkType: ''
  },
  onLoad: function () {
    var that = this;
    // 系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          mobileModel: res.model,
          mobileePixelRatio: res.pixelRatio,
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight,
          language: res.language,
          version: res.version
        })
      }
    })
    // 网络状态
    wx.getNetworkType({
      success: function (res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        that.setData({
          networkType: res.networkType
        })
      }
    })
  }
})