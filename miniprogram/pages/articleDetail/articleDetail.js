// articleDetail.js
const app = getApp()
const db = app.db

Page({
  data: {
    content: ''
  },
  onLoad: function(options) {
    console.log(options.id);
    wx.showLoading({
      title: '玩命加载中'
    });
    db.collection('article_conetnt').doc(options.id).get().then(res => {
      this.setData({
        content: res.data.content
      });
      wx.setNavigationBarTitle({
        title: res.data.title
      });
      wx.hideLoading();
    })
  }
})