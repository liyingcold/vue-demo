<template>
    <!-- 组件1、手动挂载 -->
    <div id="home">
        <!-- 父组件向子组件传值
            1、为其动态绑定一个属性 -->
        <!--  <v-header :title="title" :run="run" :home="this"></v-header> -->
        <v-header ref="header"></v-header>
        <hr>
        首页组件
        <!-- 父组件获取子组件的数据和方法 -->
        <button @click="getChildData()">获取子组件的数据和方法</button>
        <!-- <h2>这是第一个组件Component01-{{msg}}</h2>
        <hr> 
        <v-life v-if="flag"></v-life>
        <button @click="flag=!flag">挂载，卸载life组件</button>
        <hr> 
        <v-resource></v-resource>-->
    </div>
</template>

<script>
    import Header from './Header.vue';
    // import Life from './Life.vue';
    // import Resource from './Resource.vue';

    export default{
        data() {
            return {
                msg:'我是一个总组件，挂载在根组件下',
                title:'首页',
                flag:true,
                list:[]
            }
        },
        methods: {
        //    run(data){
        //        alert('我是父组件的run方法'+data)
        //    },
        run(){
            alert('我是父组件的run方法');
        },
           getChildData(){
               /*获取子组件的数据*/
            //    alert(this.$refs.header.msg)
            /*获取子组件的方法*/
            this.$refs.header.run()
           }
        },
        components:{
            'v-header':Header
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