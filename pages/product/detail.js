// pages/product/detail.js
import { request } from '../../utils/util.js'
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    productId: 0,
    productData: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    console.log(option.id)
    this.setData({
      productId: Number(option.id)
    })
    this.getProductData(option.id)
  },
  getProductData (id) {
    request({
      url: `mini/product/detail?id=${id}`
    }).then(res => {
      console.log(res)
      this.setData({
        productData: res.data
      })
    })
  },
  handleAddCart () {
    wx.showToast({
      title: '加入购物车成功',
      icon: 'none',
      duration: 2000
    })
    let obj = {
      count: 1,
      checked: false,
      id: this.data.productData.id,
      name: this.data.productData.name,
      img: this.data.productData.imgList[0]
    }
    let cartList = wx.getStorageSync('cartList') || []
    if (!cartList.length) {
      cartList.push(obj)
    } else {
      let index = cartList.findIndex(item => Number(item.id) === Number(this.data.productId))
      if (index !== -1) {
        cartList[index].count += 1
      } else {
        cartList.push(obj)
      }
    }
    wx.setStorage({
      key: "cartList",
      data: cartList
    })
    console.log('购物车', cartList)
  },
  handleBuy () {
    wx.showToast({
      title: '点击了立即购买',
      icon: 'none',
      duration: 1000
    })
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