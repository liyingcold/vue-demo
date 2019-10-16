// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/* 基于脚手架的路由配置（它会给你自动生成）*/
import router from './router'

/*基于非脚手架的路由配置（手动挡和自动挡的区别）
 import VueRouter from 'vue-router';
 Vue.use(VueRouter);*/
 /*非脚手架的自动挂载
   1、创建组件
   2、配置路由
   3、实例化vue
   4、挂载路由
   5、路由出口

import Component01 from './components/Component01.vue';
import News from './components/News.vue';

const routes=[
  {path:'/component01',component:Component01},
  {path:'/news',component:News}
]

const router=new VueRouter({
  routes//这里的名字，是配置路由的那个名字
})*/




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
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(VueResource)
Vue.use(MintUI)




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 自动挂载 4、挂载路由，此处的名字是上面实例化vue的定义的值
  router,
  components: { App },
  template: '<App/>'
})
