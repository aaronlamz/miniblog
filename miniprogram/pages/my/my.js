//my.js
const app = getApp()
const db = app.db

Page({
  data: {},

  onLoad: function() {
    this.getArticleList();
  },

  onPullDownRefresh: function() {

  },

  onReachBottom: function() {},

  getArticleList: function() {
    db.collection('article_conetnt').get().then(res => {
      console.log(res.data);
    })
  }
})