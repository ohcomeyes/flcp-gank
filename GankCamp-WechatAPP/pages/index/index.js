/**
 * 首页列表
 * author：xTang
 * email:  txenergy@163.com
 * time:   2018-05-07
 */
//获取应用实例
var WxSearch = require('../search/search.js')
var util = require('../../utils/util')
var curPageIndex = [1, 1, 1]
var tabInitState = [false, false, false]

Page({
  data: {
    gankData: {},
    loadingHidden: false,
    curSelClassifyIndex: 0,
    showTopPopup: false
    // scrollHeight: 0 
  },
  onLoad: function() {
    wx.showLoading({
      title: '初始化中',
    })
    this.checkInitLoadGankData();
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)

    var that = this
    //初始化的时候渲染wxSearchdata
    WxSearch.init(that, 43, ['生活方式', '艺术', '设计', '健康', '教育']);
    WxSearch.initMindKeys(['LOGO设计', '服装设计', '微信开发', '微信小程序']);
  },
  // 加载干货数据
  loadGankData: function(pageNo, callback) {
    console.log("加载列表数据"+this.getClassifyName(true)+"....."+pageNo);
    // 获取列表数据
    wx.request({
      url: 'https://work.ppct.cn/api/data/' + this.getClassifyName(true) + '/10/' + pageNo,
      header: {
        'Content-Type': 'application/json'
      },
      success: res => {
        if (this.data.curSelClassifyIndex==2){
           //图片需要格式
          callback(this.convertData(res.data.content))
        }else{
          // 格式化图片
          res.data.content.map(gankInfo => {
            gankInfo.portrait = "http://ozeg1t2zn.bkt.clouddn.com/" + gankInfo.portrait
          })
          // console.log(res.data.results);
          callback(res.data.content)
        }
      }
    })
  },
  // 下拉更新
  upper: function() {
    wx.showNavigationBarLoading();
    this.refresh(0);
    console.log("upper");
    setTimeout(function () { wx.hideNavigationBarLoading(); wx.stopPullDownRefresh(); }, 2000);
  },
  
  // 滚动到列表底部监听
  onBindscrolltolower: function(e) {
    console.log(111)
    this.refresh(1);
  },

  //刷新
  refresh: function (direction){
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 1000
    });
    var curClassifyName = this.getClassifyName()
    this.loadGankData(curPageIndex[this.data.curSelClassifyIndex], results => {
      curPageIndex[this.data.curSelClassifyIndex]++
      if (direction==1){
        this.data.gankData[curClassifyName] = this.data.gankData[curClassifyName].concat(results)
      }else{
        this.data.gankData[curClassifyName] = results.concat(this.data.gankData[curClassifyName])
      }
      this.setData({
        gankData: this.data.gankData
      })
    })
  },

  // swiper 滚动改变监听
  onBindchange: function(e) {
    console.log(e.detail.current + "###" + this.data.curSelClassifyIndex);
    this.setData({
      curSelClassifyIndex: e.detail.current
    })
    this.checkInitLoadGankData();
  },
  // 分类点击监听（android）
  // TODO：不知道 bindtap 怎么给方法传参数，不然下面两个方法只需要保留一个就可以了
  onTitleBarsClick0: function() {
    this.setData({
      curSelClassifyIndex: 0
    })
  },
  // 分类点击监听（iOS）
  onTitleBarsClick1: function() {
    this.setData({
      curSelClassifyIndex: 1
    })
  },
  // 分类点击监听（web）
  onTitleBarsClick2: function() {
    this.setData({
      curSelClassifyIndex: 2
    })
  },
  /**
   * 获取分类名称
   * @param isApiName 是否是干货api需要的请求 url 名称
   */
  getClassifyName: function(isApiName) {
    switch(this.data.curSelClassifyIndex) {
      case 0:
        return isApiName ? 'web' : 'web'
      case 1:
        return isApiName ? 'superior' : 'superior'
      case 2:
        return isApiName ? 'works' : 'works'
    }
  },
  // 检查初始化加载数据（根据不同类别）
  checkInitLoadGankData: function() {
    console.log(tabInitState[this.data.curSelClassifyIndex]);
    if (tabInitState[this.data.curSelClassifyIndex]) return
    
    var curClassifyName = this.getClassifyName()
    this.loadGankData(1, results => {
      console.log("加载后回调");
      curPageIndex[this.data.curSelClassifyIndex] = 2
      this.data.gankData[curClassifyName] = results
      this.setData({
        loadingHidden: true,
        gankData: this.data.gankData
      })
      tabInitState[this.data.curSelClassifyIndex] = true
      console.log(tabInitState);
    })
  },
    // 数据转换成大数组里面包含两条数据的小数组
  convertData: function (gankGirlData) {
    var tempGirlDataGroup = []
    var group = []
    gankGirlData.map(girlInfo => {
      girlInfo.url = "http://ozeg1t2zn.bkt.clouddn.com/"+girlInfo.url
      if (group.length == 2) {
        tempGirlDataGroup.push(group)
        group = [girlInfo]
      } else {
        group.push(girlInfo)
      }
    })

    if (group.length > 0) {
      tempGirlDataGroup.push(group)
    }
    console.log(tempGirlDataGroup);
    return tempGirlDataGroup
  },
  // 图片点击
  onImageClick: function (e) {
    wx.navigateTo({
      url: '../showpic/showpic?pic=' + e.target.id
    })
  },

  wxViewKind:function(e){
    this.wxSearchTap(e);
    this.setData({
      showTopPopup: !this.data.showTopPopup
    });
  },

  wxSearchClear:function(e){
    var that = this
    WxSearch.wxSearchClear(that);
  },

  wxSearchFn: function (e) {
    var that = this
    WxSearch.wxSearchAddHisKey(that);

  },
  wxSearchInput: function (e) {
    var that = this
    WxSearch.wxSearchInput(e, that);
  },
  wxSerchFocus: function (e) {
    var that = this
    WxSearch.wxSearchFocus(e, that);
  },
  wxSearchBlur: function (e) {
    var that = this
    WxSearch.wxSearchBlur(e, that);
  },
  wxSearchKeyTap: function (e) {
    var that = this
    WxSearch.wxSearchKeyTap(e, that);
  },
  wxSearchDeleteKey: function (e) {
    var that = this
    WxSearch.wxSearchDeleteKey(e, that);
  },
  wxSearchDeleteAll: function (e) {
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap: function (e) {
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
  }

})
