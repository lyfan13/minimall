//index.js
//获取应用实例
var app = getApp()
import { request, setCartBadge } from '../../utils/util.js'


Page({
  data: {
    swiperList: null,
    navList: [
      { id: 1, name: '水果', img: '../../image/nav_01.jpg' },
      { id: 2, name: '零食', img: '../../image/nav_02.jpg' },
      { id: 3, name: '蔬菜', img: '../../image/nav_03.jpg' },
      { id: 4, name: '酒饮', img: '../../image/nav_04.jpg' },
      { id: 0, name: '更多', img: '../../image/nav_05.jpg' }
    ],
    secList: [
      { id: 14, name: '粗粮-商品', img: 'http://vue-upyun.test.upcdn.net/mini/product/04.jpg' },
      { id: 15, name: '乳品-商品', img: 'http://vue-upyun.test.upcdn.net/mini/product/05.jpg' },
      { id: 16, name: '肉蛋-商品', img: 'http://vue-upyun.test.upcdn.net/mini/product/06.jpg' },
      { id: 17, name: '熟食-商品', img: 'http://vue-upyun.test.upcdn.net/mini/product/07.jpg' },
      { id: 18, name: '水产-商品', img: 'http://vue-upyun.test.upcdn.net/mini/product/08.jpg' },
      { id: 19, name: '粗粮-商品', img: 'http://vue-upyun.test.upcdn.net/mini/product/09.jpg' }
    ],
    recList: [
      { id: 11, name: '水果-商品', img: 'http://vue-upyun.test.upcdn.net/mini/product/01.jpg' },
      { id: 12, name: '零食-商品', img: 'http://vue-upyun.test.upcdn.net/mini/product/02.jpg' },
      { id: 16, name: '肉蛋-商品', img: 'http://vue-upyun.test.upcdn.net/mini/product/06.jpg' },
      { id: 14, name: '酒饮-商品', img: 'http://vue-upyun.test.upcdn.net/mini/product/04.jpg' },
      { id: 15, name: '乳品-商品', img: 'http://vue-upyun.test.upcdn.net/mini/product/05.jpg' },
      { id: 18, name: '水产-商品', img: 'http://vue-upyun.test.upcdn.net/mini/product/08.jpg' }
    ]
  },
  handleNavClick (e) {
    const { id } = e.currentTarget.dataset
    console.log('navClick', id)
    app.globalData.categoryId = id
    wx.switchTab({
      url: '/pages/category/category'
    })
  },
  handleSecClick (e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/product/detail?id=${id}` })
  },
  handleRecClick (e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/product/detail?id=${id}` })
  },
  onLoad: function () {
    request({
      url: 'mini/home/nav'
    }).then(res => {
      console.log(res)
      this.setData({
        swiperList: res.data.dataList
      })
    })
  },
  onShow: function () {
    setCartBadge().catch(e => { console.log(e) })
  },
})
