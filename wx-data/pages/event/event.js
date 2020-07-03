// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  handlerClick: function (e) {
    console.log(e, e.mark)
  },
  handlerClick2 (e) {
    console.log(e.target.dataset, e)
  },
  // 获取焦点 失去焦点 input事件
  foc (e) {
    console.log(e)
  },
  blu (e) {
    console.log(e)
  },
  inputVal (e) {
    console.log(e.detail.value, e)
  },

  // 事件冒泡
  // 父元素事件
  parent (e) {
    console.log('触发父元素事件', e)
  },
  // 子元素事件
  child (e) {
    console.log('触发子元素事件', e.target.dataset, e)
  },
  // 孙子事件
  son (e) {
    console.log('触发孙子的事件', e)
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