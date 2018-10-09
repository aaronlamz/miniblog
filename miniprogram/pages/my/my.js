//my.js
const app = getApp()
const db = app.db

Page({
  data: {
    isAutority: false,
    avatarUrl: '',
    nickName: ''
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
            success: function(res) {
              console.log(res)
            }
          })
        }
      }
    })
  },

  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  }
})