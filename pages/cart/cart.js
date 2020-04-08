// pages/cart/cart.js
import { request, setCartBadge } from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList: null,
    totalPrice: 0,
    checkCount: 0,
    checkAll: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleCheckItem (e) {
    const { index } = e.currentTarget.dataset
    let _list = this.data.cartList
    _list[index].checked = !_list[index].checked
    let checkCount = _list.filter(i => i.checked).length
    const checkAll = checkCount === this.data.cartList.length
    let totalPrice = !_list.length ? 0 : _list.filter(i => i.checked).reduce((prev, cur) => prev + cur.count * cur.id * 20, 0)
    this.setData({ cartList: _list, checkCount, checkAll, totalPrice })
    wx.setStorage({ key: "cartList", data: _list })
  },
  handleCheckAll () {
    let _list = this.data.cartList
    if (!_list.length) return
    const checkAll = _list.filter(i => i.checked).length === _list.length
    console.log(checkAll)
    _list.forEach(i => { i.checked = !checkAll })
    let checkCount = _list.filter(i => i.checked).length
    let totalPrice = !_list.length ? 0 : _list.filter(i => i.checked).reduce((prev, cur) => prev + cur.count * cur.id * 20, 0)
    this.setData({ cartList: _list, checkCount, checkAll: !checkAll, totalPrice })
    wx.setStorage({ key: "cartList", data: _list })
  },
  handleDel (e) {
    wx.showToast({
      title: '删除成功~',
      icon: 'none',
      duration: 2000
    })
    const { index } = e.currentTarget.dataset
    this.handleCartChange('del', index)
  },
  handleMinus (e) {
    const { index } = e.currentTarget.dataset
    this.handleCartChange('minus', index)
  },
  handlePlus (e) {
    const { index } = e.currentTarget.dataset
    console.log(index)
    this.handleCartChange('add', index)
  },
  handleCartChange (type, index) {
    let _list = this.data.cartList
    if (type === 'minus' && _list[index].count > 1) { _list[index].count--; _list[index].checked = true }
    if (type === 'del') _list.splice(index, 1)
    if (type === 'add') { _list[index].count++; _list[index].checked = true }
    wx.setStorage({ key: "cartList", data: _list })
    if (!_list.length) {
      wx.removeTabBarBadge({ index: 2 })
    } else {
      let count = _list.reduce((prev, cur) => prev + cur.count, 0)
      wx.setTabBarBadge({ index: 2, text: `${count}` })
    }
    let checkCount = _list.filter(i => i.checked).length
    let totalPrice = !_list.length ? 0 : _list.filter(i => i.checked).reduce((prev, cur) => prev + cur.count * cur.id * 20, 0)
    this.setData({ totalPrice, cartList: _list, checkCount })
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
    setCartBadge().then(cartList => {
      let totalPrice = !cartList.length ? 0 : cartList.filter(i => i.checked).reduce((prev, cur) => prev + cur.count * cur.id * 20, 0)
      let checkCount = !cartList.length ? 0 : cartList.filter(i => i.checked).length
      this.setData({ cartList, totalPrice, checkCount })
    }, rej => { console.log(rej) })
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