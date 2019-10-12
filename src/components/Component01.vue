<template>
    <!-- 组件1、手动挂载 -->
    <div id="home">
        <v-header></v-header>
        <hr>
        <h2>这是第一个组件Component01---{{msg}}</h2>
        <hr>
        <v-life v-if="flag"></v-life>
        <button @click="flag=!flag">挂载，卸载life组件</button>
        <hr> 
        <v-resource></v-resource>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import Life from './Life.vue';
    import Resource from './Resource.vue';

    export default{
        data() {
            return {
                msg:'我是一个组件，挂载在根组件下',
                flag:true,
                list:[]
            }
        },
        methods: {
           
        },
        components:{
            'v-header':Header,
            'v-life':Life,
            'v-resource':Resource
        }
    }

</script>


<style scoped>
body{
    margin:0px;
}
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