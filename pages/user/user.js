// pages/user/user.js
import { setCartBadge } from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoData: [
      { name: '历史', count: 23 },
      { name: '收藏', count: 14 },
      { name: '关注', count: 56 },
      { name: '优惠券', count: 27 }
    ],
    orderData: [
      { name: '代付款', img: '../../image/order/01.jpg' },
      { name: '代发货', img: '../../image/order/02.jpg' },
      { name: '待收货', img: '../../image/order/03.jpg' },
      { name: '评价', img: '../../image/order/04.jpg' },
      { name: '退款/售后', img: '../../image/order/05.jpg' }
    ],
    toolsData: [
      { name: '每日签到', img: '../../image/tools/01.jpg' },
      { name: '每日返现', img: '../../image/tools/02.jpg' },
      { name: '邀请有礼', img: '../../image/tools/03.jpg', tip: '可得100元现金' },
      { name: '我的拼团', img: '../../image/tools/04.jpg' },
      { name: '设置', img: '../../image/tools/05.jpg' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    setCartBadge()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})