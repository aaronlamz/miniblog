//index.js
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    circular: true,
    interval: 5000,
    duration: 1000
  },

  onLoad: function() {
    // setTimeout(() => {
    //   wx.hideLoading();
    // }, 1000);
  },
  onPullDownRefresh: function() {
    // wx.stopPullDownRefresh()
    // wx.showToast({
    //   title: 'ttest'
    // })
    // wx.showLoading();
    wx.stopPullDownRefresh();
  },
  onReachBottom: function() {
    wx.showLoading();
    setTimeout(function() {
      wx.hideLoading();
    }, 300);
  }
})