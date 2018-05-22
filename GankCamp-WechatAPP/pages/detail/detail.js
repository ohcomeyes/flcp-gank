var timer = require('../../utils/wxTimer.js')
Page({
  data: {
    wxTimerList: {},
    title: '',
    url: '',
    comments: [{
      id: 1,
      avatarUrl: 'https://work.ppct.cn//images/xiaochengxu/avatar.png',
      content: '哈哈宝刚刚参与了'
    }, {
      id: 2,
      avatarUrl: 'https://work.ppct.cn//images/xiaochengxu/avatar.png',
      content: 'Rebecce：好厉害'
    }, {
      id: 3,
      avatarUrl: 'https://work.ppct.cn//images/xiaochengxu/avatar.png',
      content: '需要使swipe的高度比弹幕的高度高一些，使其垂直居中'
    }, {
      id: 4,
      avatarUrl: 'https://work.ppct.cn//images/xiaochengxu/avatar.png',
      content: '评论4'
    }]
  },
  onLoad: function() {
      this.checkInitLoadGankData();
  },

  modalTap: function (e) {
    wx.navigateTo({
      url: '../commit/commit',
      complete: res => {
        
      }
    })

    // wx.showModal({
    //   title: "抢单失败",
    //   content: "目前抢单任务尚未开启，留意微信公众号公布开启时间",
    //   showCancel: false,
    //   confirmText: "确定"
    // })
  },
  checkInitLoadGankData: function () {
      var wxTimer1 = new timer({
        beginTime: "09:10:30",
        name: 'wxTimer1',
        complete: function () {
          console.log("完成了")
        }
      })
      wxTimer1.start(this);
  },
  viewPeople: function(e){
    wx.navigateTo({
      url: "../home/home",
    })
  }
})