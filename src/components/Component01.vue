<template>
    <!-- 组件1、手动挂载 -->
    <div id="home">
        <!-- 父组件向子组件传值
            1、为其动态绑定一个属性 -->
        <!--  <v-header :title="title" :run="run" :home="this"></v-header> -->
        <!-- <v-header ref="header"></v-header> -->
        <hr>
        首页组件

        <!-- 编程式导航js -->
        <button @click="goNews()">通过js跳转到新闻页面</button>



        <!-- 动态路由传值 -->
        <!-- <ul>
          <li v-for="(item, index) in list" :key="index">
            <router-link :to="'/pcontent?aid='+index">{{item}}</router-link>
          </li>
        </ul> -->

        
        <!-- 非父子组件传值 -->
        <!-- <button @click="emitnews()">给news组件广播数据</button> -->

        <!-- 父组件获取子组件的数据和方法 -->
        <!-- <button @click="getChildData()">获取子组件的数据和方法</button> -->
        <!-- <h2>这是第一个组件Component01-{{msg}}</h2>
        <hr> -->


        <!-- 引入子组件 -->
        <!--<v-life v-if="flag"></v-life>
        <button @click="flag=!flag">挂载，卸载life组件</button>
        <hr> -->
        <!-- <v-resource></v-resource> -->
    </div>
</template>

<script>
    // import Header from './Header.vue';
    // import Life from './Life.vue';
    // import Resource from './Resource.vue';


    // 非父子组件传值,1、引入vue实例，2、广播数据
    // import vueEvent from '../model/VueEvent.js';


    export default{
        data() {
            return {
                msg:'我是一个总组件，挂载在根组件下',
                title:'首页',
                flag:true,
                list:['商品111111','商品222222','商品33333']
            }
        },
        methods: {
            /*  run(data){
                        alert('我是父组件的run方法'+data)
                },
            run(){
                alert('我是父组件的run方法');
            },*/
            /*getChildData(){
                //获取子组件的数据
                //    alert(this.$refs.header.msg)
                //获取子组件的方法
                this.$refs.header.run()
            },*/
            /*emitnews(){
                // 广播数据
                vueEvent.$emit('to-news',this.msg)
            }*/

            /* 编程式导航js */
            goNews(){
                
                /*跳转方式1、通过路径 
                 this.$router.push({path:'news'})
                 this.$router.push({path:'/content/495'})*/

                /* 跳转方式2、通过别名*/
                this.$router.push({name:'news'})
            }
        },
        mounted() {
            /*vueEvent.$on('to-component01',function(data){
                console.log(data)
            })*/
        },
        components:{
            // 'v-header':Header,
            // 'v-life':Life,
            // 'v-resource':Resource
        }
        
    }

</script>


<style scoped>

h1, h2 {
  font-weight: normal;
  font-size:15px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>