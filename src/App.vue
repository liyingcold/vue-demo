<template>
  <div id="app">
    {{msg}}
    <!-- 3、在模板中使用该组件 -->
    <v-component></v-component>
    <v-news></v-news>
    <router-view/>
  </div>
</template>

<script>
// 1、引入组件Component01(在app根组件挂载组件)
/*生命周期函数，组件挂载，更新销毁的时候触发的一系列的方法  */ 
import Component01 from './components/Component01.vue';
import News from './Components/News.vue';

export default {
  data() {
    return {
      msg:'你好vue'
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
  margin-top: 60px;
}
</style>
