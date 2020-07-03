// pages/data/data.js
// Page() 注册小程序页面
Page({

  /**
   * 页面的初始数据=======================================
   */
  data: {
    msg: 'hello 小程序 data！',
    num: 1000,
    obj: {
      name: '特朗普',
      age: 98
    },
    list: [1, 2, 3],
    bool: false,
    students: [
      { id: 1, name: '小红', age: 26 },
      { id: 2, name: '小橙', age: 24 },
      { id: 3, name: '小黄', age: 22 },
      { id: 4, name: '小绿', age: 20 },
      { id: 5, name: '小青', age: 18 }
    ],
    users: [
      { name: '小明', age: 8, gender: '男' },
      { name: '小刚', age: 20, gender: '男' },
      { name: '小红', age: 18, gender: '女' },
      { name: '小丽', age: 17, gender: '女' }
    ]
  },
  /**
   * 定义事件处理函数========================================
   */
  handlerMsg(e) {
    console.log(e)
  },
  changeMsg () {
    // 1、改变数据  2、刷新页面
    // console.log(this, this.data.msg)
    // this.data.msg = 'hello'
    // console.log(this.data.msg)
    let i = 0
    let key = `users[${i}].age`
    let len = this.data.students.length
    let students_key = `students[${len}]`
    this.setData({
      msg: 'hello ' + Math.floor(Math.random() * 100),
      num: Math.floor(Math.random() * 1000),
      // list: [1] // 直接覆盖
      // 修改数组或者对象中某一项的值
      'list[1]': Math.random() * 100,
      'obj.age': 50,
      // 'users[0].age': 28
      // [key]: 28,
      [students_key]: { id: len, name: '小蓝', age: 16 }
    })
  },
  /**
   * 生命周期函数============================================
   */
  /**
   * 生命周期函数--监听页面加载
   */
   // 页面加载时 =====> vue =====> created
   onLoad: function () {
    // 只会触发1次
    // 发送ajax请求
    console.log('当前页面被加载了...');
    // 发送ajax请求
    let ab = wx.request({
      url: 'http://5990367be1e4470011c46fa8.mockapi.io/meng/user',
      method: 'get',
      success: function(res) {
        console.log(res)
        // const { data } = res
        // console.log(data)
      }
    })
    // 取消请求
    // ab.abort()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // vue =====> mounted
  onReady: function (re) {
    // 只会触发1次
    console.log('当前页面初次渲染完毕了...', re, wx);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  // 页面显示时（返回、tabBar切换、前台运行）
  onShow: function () {
    // 重复触发
    console.log('当前页面显示了...');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
   // 页面隐藏时（跳转、tabBar切换、后台运行）
   onHide: function () {
    console.log('当前页面不见了...');
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