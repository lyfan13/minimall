// pages/category/category.js
let app = getApp();
import { request, setCartBadge } from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curId: 0,
    categoryList: [
      { id: 0, name: '推荐' },
      { id: 1, name: '水果' },
      { id: 2, name: '零食' },
      { id: 3, name: '蔬菜' },
      { id: 4, name: '酒饮' },
      { id: 5, name: '乳品' },
      { id: 6, name: '肉蛋' },
      { id: 7, name: '熟食' },
      { id: 8, name: '水产' },
      { id: 9, name: '粗粮' }
    ],
    productList: null
  },
  getProductList () {
    request({ url: `mini/category/product?id=${this.data.curId}` })
      .then(res => {
        this.setData({
          productList: res.data.productList
        })
      })
  },
  handleCatItermClick (e) {
    this.setData({
      curId: e.currentTarget.dataset.cid
    })
    app.globalData.categoryId = e.currentTarget.dataset.cid
    let timer = setTimeout(() => {
      clearTimeout(timer)
      this.getProductList()
    });
  },
  handleProductClick (e) {
    const { pid } = e.currentTarget.dataset
    console.log('点击的商品的id', pid)
    wx.navigateTo({
      url: `/pages/product/detail?id=${pid}`
    })
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      console.log('设置选中项 0')
      this.getTabBar().setData({
        selected: 1
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('分类页显示，设置curId')
    this.setData({
      curId: app.globalData.categoryId
    })
    this.getProductList()
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