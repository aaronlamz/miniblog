//index.js
const app = getApp()
const db = app.db

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000,
    list: []
  },

  onLoad: function() {
    this.getArticleList();
  },

  onPullDownRefresh: function() {
    setTimeout(function() {
      wx.stopPullDownRefresh();
    }, 500);
  },

  onReachBottom: function() {
    wx.showLoading({
      title: '玩命加载中'
    });
    setTimeout(() => {
      wx.hideLoading();
      if (this.data.list.length > 15) {
        wx.showToast({
          title: '没有更多数据'
        });
      } else {
        this.data.list.push({
          title: '【开源公告】H5、小程序自动化测试框架FAutoTest正式开源',
          imgUrl: '../../images/list/list_01.png'
        }, {
          title: 'Webpack揭秘——走向高阶前端的必经之路',
          imgUrl: '../../images/list/list_02.png'
        }, {
          title: '还在记git命令？快试试SourceTree',
          imgUrl: '../../images/list/list_03.png'
        });
        this.setData({
          list: this.data.list
        });
      }
    }, 300);
  },

  getArticleList: function() {
    db.collection('article_conetnt').get().then(res => {
      console.log(res.data);
      this.setData({
        list: res.data
      });
    })
  },

  goDetail: function(event) {
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../articleDetail/articleDetail?id=' + id
    });
  }
})