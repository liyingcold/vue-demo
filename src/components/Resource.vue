<template>
    <div id="home">
        <!-- <button @click="getDat()">请求数据的模板</button> -->
        <!-- <hr> -->
        <h5>{{msg}}</h5>
        <ul>
            <li v-for="(item, index) in list" :key="index">
                {{item.date,index}}
                <br>
                {{item.fengxiang,index}}
               
            </li>
        </ul>
    </div>
</template>

<script>

/*
    请求数据
    1、vue-resource 官方提供的插件 
            $ yarn add vue-resource
            $ npm install vue-resource
    2、axios
            cnpm install axios --save-dev
            第三方模块可以直接引用


*/

import Axios from 'axios';

    export default{
        data() {
            return {
                msg:'我是资源组件，挂载在Component组件下',
                list:[]
            }
        },
        methods: {
            getDat(){
                // 请求数据
                var api='http://wthrcdn.etouch.cn/weather_mini?city=北京';

                /*this.$http.get(api).then((response)=>{
                    console.log(response);
                    // 注意this指向
                    this.list=response.body.data.forecast;
                },(err)=>{
                    console.log(err);
                })*/

                Axios.get(api).then((response)=>{
                    console.log(response);
                    this.list=response.data.data.forecast;
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
        mounted() {
            // 页面打开自动刷新，生命周期函数
            this.getDat();
        }
    }

</script>


<style scoped>

h1, h2,h5 {
  font-weight: normal;
  color: cadetblue;
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