//articleDetail.js
const app = getApp()

Page({
  data: {

  },
  onReady: function() {

  },
  onLoad: function() {
    wx.showLoading({
      title: '玩命加载中'
    });
    setTimeout(() => {
      wx.setNavigationBarTitle({
        title: '文章详情页'
      });
      wx.hideLoading();
    }, 500);
  }
})