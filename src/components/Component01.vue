<template>
    <!-- 组件1、手动挂载 -->
    <div id="home">
        <v-header></v-header>
        <hr>
        <h2>这是第一个组件Component01---{{msg}}</h2>
        <button @click="run()">run()</button>
        <hr>
        <v-life v-if="flag"></v-life>
        <button @click="flag=!flag">挂载，卸载life组件</button>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import Life from './Life.vue';

    export default{
        data() {
            return {
                msg:'我是一个数据',
                flag:true
            }
        },
        methods: {
            run(){
                alert('我是一个提醒+msg:'+this.msg);
            }
        },
        components:{
            'v-header':Header,
            'v-life':Life
        }
    }

</script>


<style scoped>
    h2{
        color: cadetblue;
    }

</style>