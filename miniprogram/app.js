//app.js
App({
  onLaunch: function() {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        env: 'test-dd1ca2'
      })
    }
    this.globalData = {}
    this.db = wx.cloud.database({
      env: 'test-dd1ca2'
    });
  }
})