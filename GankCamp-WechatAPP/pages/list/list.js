Page({
  data: {
    title: '',
    url: '',
    rankList: [
      {
        id: 1,
        image: 'https://work.ppct.cn/images/icon8.jpg',
        name: '哈哈宝',
        describe :'我是一个坏人',
        val: '100'
      },
      {
        id: 2,
        image: 'https://work.ppct.cn/images/icon8.jpg',
        name: '曦莫琅',
        describe: '摄影与录像',
        val: '87'
      },
      {
        id: 3,
        image: 'https://work.ppct.cn/images/icon8.jpg',
        name: 'IOS',
        describe: 'LOGO,室内设计',
        val: '64'
      },
      {
        id: 4,
        image: 'https://work.ppct.cn/images/icon8.jpg',
        name: 'android',
        describe: '建筑',
        val: '53'
      }
    ],
    rank: {
      typeId: '1'
    }
  },
  onLoad: function () {
  },
  viewPeople: function(e){
    wx.navigateTo({
      url: "../home/home",
    })
  }
})