<template>
  <div id="app">

    <!-- 自动挂载 5、自动挂载的路由出口 -->
    

    <router-link to="/home">首页</router-link>
    <router-link to="/news">新闻</router-link>
    <router-view/>
    <!-- 手动挂载 3、在模板中使用该组件 -->
    <!-- <div class="news"><v-news></v-news></div>
    <div class="comment01"><v-component></v-component></div> -->
  </div>
</template>

<script>
/* 手动挂载
   1、引入组件Component01(在app根组件挂载组件)
   生命周期函数，组件挂载，更新销毁的时候触发的一系列的方法   
import Component01 from './components/Component01.vue';
import News from './components/News.vue';*/



export default {
  data() {
    return {
    }
  },
 
  components:{
   /* 手动挂载 2、挂载组件
      'v-component':Component01,
      'v-news':News*/
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}

</style>