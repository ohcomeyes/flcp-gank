var timer = require('../../utils/wxTimer.js')
Page({
  data: {
    wxTimerList: {},
    title: '',
    url: '',
    workList: [
      {
        id: 1,
        nickname: '儿童水龙头保护和门把手保护套外观设计',
        money:'1000.00',
        text: '设计需求：一款儿童门把手防撞套，和一款儿童水龙头防撞保护套（带有延伸出水功能）；',
        time: '01:11:12'
      },
      {
        id: 2,
        nickname: '健康生活馆logo设计',
        money: '1000.00',
        text: '“菠萝妈”是一个健康生活馆的logo1、健康生活馆是一家以艾灸调理为主，同时附带绿色健康简餐的品牌；',
        time: '02:21:15'
      },
      {
        id: 3,
        nickname: '河源市健康养生协会',
        money: '1000.00',
        text: '投资管理2018-05 - 07一、公司介绍：1、协会名称：河源市健康养生协会2、协会简介：河源市健康养生协会是从事健康养生研究及各种天然健康绿色养生食品、有机养生食品、滋补养生食品、营养养生食品、保健食品、保健用品、保健服',
        time: '18:03:11'
      },
      {
        id: 4,
        nickname: '养生馆店内海报宣传整体设计',
        money: '1000.00',
        text: '养生馆店内海报宣传整体设计。文字内容我们可以提供，主要需要结合店内装修风格整体设计。养生馆地点在上海徐汇区，需上门看好场地后面聊。联系qq沟通，不要电话',
        time: '24:01:12'
      }
    ],
    rank: {
      typeId: '1'
    }
  },
  onLoad: function () {
    this.checkInitLoadGankData();
  },

  checkInitLoadGankData: function () {
    this.convertTime(this.data.workList);
  },

  convertTime: function (workList){
    workList.map(workList =>{
      var wxTimer = new timer({
        beginTime: workList.time,
        name: workList.id
      })
      wxTimer.start(this);
    })
  },


  addTask:function(e){
    wx.showModal({
      title: "还未做",
      content: "" + e.currentTarget.dataset.id,
      showCancel: false,
      confirmText: "确定"
    })
  }
})