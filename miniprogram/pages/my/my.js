//my.js
const app = getApp()
const db = app.db

Page({
  data: {
    isAutority: false,
    avatarUrl: '',
    nickName: '',
    avatarUrl: ''
  },

  onLoad: function() {
    // 查看是否授权
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          this.setData({
            isAutority: true
          })
          wx.getUserInfo({
            success: (res) => {
              console.log(res)
              this.setUserInfo(res.userInfo)
            }
          })
        }
      }
    })
  },

  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  },

  setUserInfo: function(userInfo) {
    this.setData({
      avatarUrl: userInfo.avatarUrl
    });
  }
})