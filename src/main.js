// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入插件
/*  1、安装vue-resource模块
        npm/cnpm install vue-resource --save-dev

    2、main.js引入vue-resource

    3、调用Vue.use(VueResource)

    4、在组件里面直接使用
      var api='http://wthrcdn.etouch.cn/weather_mini?city=北京';

      this.$http.get(api).then(function(response){
          console.log(response);
      },function(err){
           console.log(err);
      })
*/
import VueResource from 'vue-resource'
Vue.use(VueResource)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
