//index.js
//获取应用实例
const app = getApp()
const ImgLoader = require('../../img-loader/img-loader.js')
const imgUrl = 'http://ousc.me/wp-content/uploads/2019/06/login_bg.png';
const mp3Url = "http://ousc.me/wp-content/uploads/2019/06/bg.mp3";
Page({
  data: {
    motto: '风之清  切换',
    userInfo: {},
    isLoaded: false,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady: function(){
    wx.playBackgroundAudio({
      dataUrl: mp3Url
    })
  },
  onLoad: function () {
    this.imgLoader = new ImgLoader(this);
    this.loadImage();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }, 
  loadImage() {
    //同时对原图进行预加载，加载成功后再替换
    this.imgLoader.load(imgUrl, (err, data) => {
      console.log('图片加载完成', err, data.src)
      this.setData({
        isLoaded:true
      })
    })
  },
  go:function(){
    wx.redirectTo({
      url: '../main/main',
    })
  }
})
