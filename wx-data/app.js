//app.js
// App 函数是小程序内置提供的，接受一个对象类型的数据做为参数。
// 注意大小写
App({
  
  // 小程序启动时
  onLaunch: function (re) {
    // 全局只会触发1次
    console.log('小程序启动了...', re);
  },
  // 小程序前台运行时
  onShow: function (re) {
    // 重复执行
    console.log('小程序前台运行了...', re.scene);
  },
  // 小程序后台运行时
  onHide: function () {
    // 重复执行
    console.log('小程序后台运行了...');
  },
  // 执行错误时
  onError: function (err) {
    console.log('出错啦!!!');
  },
  // 冷启动（如扫码）打开小程序的页面不存在时
  onPageNotFound: function () {
    console.log('你找到页面去火星了？？？');
  }
})