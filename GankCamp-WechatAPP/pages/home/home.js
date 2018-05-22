Page({
  data: {
    url: '',
    list:[
        {
            id:"1",
            title:"汖",
            url:"https://work.ppct.cn/images/xiaochengxu/sheji1.png"
        },{
            id: "2",
            title: "我的水彩",
            url: "https://work.ppct.cn/images/xiaochengxu/sheji2.png"
          }, {
            id: "3",
            title: "小糊涂仙酒吉祥物卡通形象吉祥物设计微信表情包",
            url: "https://work.ppct.cn/images/xiaochengxu/sheji3.png"
          }
    ]
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: 'eysa的主页'
    })
  },
  gotoDetail: function(e){
    wx.showToast({
      title: '暂时没有',
      icon: 'success',
      duration: 1000
    });
  }
})