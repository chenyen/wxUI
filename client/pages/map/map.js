// map.js
Page({
  data: {
    userAddress: '',
    userLatitude: '',
    userLongitude: ''
  },
  onLoad: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        var name = res.name
        var address = res.address
        var latitude = res.latitude
        var longitude = res.longitude
        that.setData({
          userAddress: name + address,
          userLatitude: latitude,
          userLongitude: longitude
        })
      }
    })
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})