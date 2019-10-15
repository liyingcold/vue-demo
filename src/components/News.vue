<template>
    <div id="news">
        <h2>{{msg}}</h2>
        <!-- <button @click="emitComponent01()">给首页组件广播数据</button> -->
        <ul>
          <li v-for="(item, index) in list" :key="index">
          <!-- 动态路由传值 -->
            <router-link :to="'/content/'+item.aid">{{item.title}}</router-link>
            
          </li>
        </ul>
    </div>
</template>

<script>
/*非父子组件传值，接收数据
  1、新建一个js文件 ，引入vue,实例化vue,暴露这个实例
  2、在广播的地方引入刚才的实例

  3、监听首页的这个广播(组件一加载就要监听，所以写在生命周期中)
    vueEvent.$emit('名称',数据)

  4、在接收数据的地方通过$on，接收数据
   vueEvent.$on('名称',function(数据){})
  */

  import vueEvent from '../model/VueEvent.js';


    export default{
        data() {
            return {
                msg:'我是一个新闻组件',
                list:[]
            }
        },
        methods: {
          /*emitComponent01(){
            // 广播数据
            vueEvent.$emit('to-component01',this.msg)
            }*/
            requestData(){
              var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
              // jsonp请求的话 后台接口要支持jsonp
              this.$http.jsonp(api).then((response)=>{
               this.list=response.body.result;
              },(err)=>{
                console.log(err)
              })
            }
        },
        mounted() {
          /*vueEvent.$on('to-news',function(data){
              console.log(data);
            })*/
            this.requestData()
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
  
  margin: 0 10px;
}


</style>