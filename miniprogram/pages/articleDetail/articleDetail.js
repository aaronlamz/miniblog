// articleDetail.js
const app = getApp()
const db = app.db
const WxParse = require('../../wxParse/wxParse.js')

Page({
  data: {
    title: '',
    content: '',
    createBy: ''
  },
  onLoad: function(options) {
    console.log(options.id);
    wx.showLoading({
      title: '玩命加载中'
    });
    db.collection('article_conetnt').doc(options.id).get().then(res => {
      this.setData({
        title: res.data.title,
        content: res.data.content,
        createBy: res.data.create_by
      });
      WxParse.wxParse('article', 'html', res.data.content, this, 0);
      wx.setNavigationBarTitle({
        title: res.data.title
      });
      wx.hideLoading();
    })
  }
})