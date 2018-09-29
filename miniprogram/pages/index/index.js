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
    duration: 1000,
    list: [{
      title: '【开源公告】H5、小程序自动化测试框架FAutoTest正式开源',
      imgUrl: '../../images/list/list_01.png'
    }, {
      title: 'Webpack揭秘——走向高阶前端的必经之路',
      imgUrl: '../../images/list/list_02.png'
    }, {
      title: '还在记git命令？快试试SourceTree',
      imgUrl: '../../images/list/list_03.png'
    }, {
      title: 'Webpack揭秘——走向高阶前端的必经之路',
      imgUrl: '../../images/list/list_02.png'
    }, {
      title: '【开源公告】H5、小程序自动化测试框架FAutoTest正式开源',
      imgUrl: '../../images/list/list_01.png'
    }, {
      title: 'Webpack揭秘——走向高阶前端的必经之路',
      imgUrl: '../../images/list/list_02.png'
    }, {
      title: '【开源公告】H5、小程序自动化测试框架FAutoTest正式开源',
      imgUrl: '../../images/list/list_01.png'
    }, {
      title: 'Webpack揭秘——走向高阶前端的必经之路',
      imgUrl: '../../images/list/list_02.png'
    }, {
      title: '【开源公告】H5、小程序自动化测试框架FAutoTest正式开源',
      imgUrl: '../../images/list/list_01.png'
    }, {
      title: 'Webpack揭秘——走向高阶前端的必经之路',
      imgUrl: '../../images/list/list_02.png'
    }]
  },

  onLoad: function() {

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
      if (this.data.list.length > 10) {
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

  goDetail: function() {
    wx.navigateTo({
      url: '../articleDetail/articleDetail'
    });
  }
})