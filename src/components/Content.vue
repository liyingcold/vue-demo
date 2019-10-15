<template>
    <div id="content">
        <h2>{{list.title}}</h2>
        <div v-html="list.content"></div>
    </div>
</template>

<script>
/*  不同路由传值，动态路由
    1、配置动态路由
    2、在对应页面获取值 
        this.$route.params
*/
    export default{
        data() {
            return {
                msg:'我是一个详情组件',
                list:[]
            }
        },
        methods: {
         requestData(aid){
           var api='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;

          //  get请求如果跨域的话，php/java需要允许跨域请求
           this.$http.get(api).then((response)=>{
             console.log(response)
             this.list=response.body.result[0];
           },(err)=>{
             console.log(err)
           })
         }
        },
        mounted() {

          console.log(this.$route.params);/* 获取动态路由传值*/
          var aid=this.$route.params.aid;
          this.requestData(aid);
        }
    }
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
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