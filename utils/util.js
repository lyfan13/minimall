const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const setCartBadge = () => {
  return new Promise((resolve, reject) => {
    console.log('调用了setCartBadge')
    try {
      let cartList = wx.getStorageSync('cartList') || []
      if (!cartList.length) {
        wx.removeTabBarBadge({ index: 2 })
      } else {
        let count = cartList.reduce((prev, cur) => prev + cur.count, 0)
        wx.setTabBarBadge({
          index: 2,
          text: `${count}`
        })
      }
      resolve(cartList)
    } catch (e) {
      reject(e)
    }
  })
}

let baseUrl = 'http://106.12.61.133:3000/'
const request = (options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + options.url,
      success (res) {
        resolve(res)
      },
      fail (reason) {
        reject(reason)
      }
    })
  })
}

module.exports = {
  setCartBadge,
  request,
  formatTime
}
