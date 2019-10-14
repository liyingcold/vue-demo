<template>
  <div id="app">

  <div class="news">
      <v-news></v-news>
  </div>
  <div class="comment01">
    <!-- 3、在模板中使用该组件 -->
    <v-component></v-component>
  </div>
    
    <router-view/>
  </div>
</template>

<script>
// 1、引入组件Component01(在app根组件挂载组件)
/*生命周期函数，组件挂载，更新销毁的时候触发的一系列的方法  */ 
import Component01 from './components/Component01.vue';
import News from './components/News.vue';

export default {
  data() {
    return {
    }
  },
  // 2、挂载组件
  components:{
    'v-component':Component01,
    'v-news':News
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.comment01{
  width: 65%;
  display: inline-block;
}
.news{
  width: 30%;
  display: inline-block;
}
</style>
