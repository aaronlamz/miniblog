// pages/articleCategory/articleCategory.js
const app = getApp()
const db = app.db
Page({
	data: {
		list: []
	},

	onLoad: function(options) {
		wx.showLoading({
			title: '玩命加载中'
		});
		db.collection('article_type').get().then(res => {
			this.setData({
				list: res.data
			})
			wx.hideLoading();
		})
	}
})