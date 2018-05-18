Page({
  data :{
    calenderArr: ['2018', '02'],   // 当前年月
    moneyStat: {
      income: '2000.00',   // 收入
      pay: '890.00'       // 支出
    },
    detailList: [
      {
        info: {
          date: '02月26日'
        },
        list: [
          {
            id: 1,
            image: 'https://work.ppct.cn/images/xiaochengxu/dingdan.png',
            title: 'LOGO设计',
            remark: '',
            mount: '+12.00'
          },
          {
            id: 2,
            image: 'https://work.ppct.cn/images/xiaochengxu/dingdan.png',
            title: '学校校徽设计',
            remark: '',
            mount: '+20.00'
          },
          {
            id: 1,
            image: 'https://work.ppct.cn/images/xiaochengxu/ticheng.png',
            title: '小清新文案面膜logo设计',
            remark: '',
            mount: '+12.00'
          }
        ]
      },
      {
        info: {
          date: '02月25日'
        },
        list: [
          {
            id: 1,
            image: 'https://work.ppct.cn/images/xiaochengxu/dingdan.png',
            title: '创意社区logo设计',
            remark: '',
            mount: '+12.00'
          },
          {
            id: 2,
            image: 'https://work.ppct.cn/images/xiaochengxu/dingdan.png',
            title: '品牌茶叶包装设计',
            remark: '',
            mount: '+20.00'
          }
        ]
      },
      {
        info: {
          date: '02月12日'
        },
        list: [
          {
            id: 1,
            image: 'https://work.ppct.cn/images/xiaochengxu/ticheng.png',
            title: '养生馆店内海报宣传整体设计',
            remark: '',
            mount: '+12.00'
          },
          {
            id: 2,
            image: 'https://work.ppct.cn/images/xiaochengxu/ticheng.png',
            title: '智能调料箱外观以及模具配套等系列设计',
            remark: '',
            mount: '+20.00'
          }
        ]
      }
    ],
    // 滚动区域信息
    // scrollHeight: 0
  },
  onLoad: function () {
  },
})