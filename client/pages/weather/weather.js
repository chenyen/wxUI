//weather.js
var util = require('../../utils/util.js')
var amapFile = require('amap-wx.js')

Page({
  data: {
  },
  onLoad: function () {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: '高德Key' });
    myAmapFun.getWeather({
      success: function (data) {
        //成功回调
      },
      fail: function (info) {
        //失败回调
        console.log(info)
      }
    })
  }
})