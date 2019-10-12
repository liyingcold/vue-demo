<template>
    <div id="header">
        <!-- <h2>这是一个头部组件  挂载在Component01下</h2> -->
        <h5>{{title}}</h5>
        <button @click="run('+子组件的值')">执行父组件的方法</button>
        <button @click="getParent">获取父组件的数据和方法</button>
    </div>
</template>

<script>
/*
     父组件向子组件传值
            1、为其动态绑定一个属性
            2、子组件接收值
                props:['title'] 表示接收父组件传来的title 
            !!不仅可以传数据，还可以传方法
            !!还可以传类
     子组件向父组件传值
            1、
*/
    export default{
        data() {
            return {
                msg:'msg'
            }
        },
        methods: {
            getParent(){
               alert(this.home.title) 
            }
        },
        /*父组件向子组件传值*/
        // props:['title','run','home']
        /*props验证*/
        props:{
            "title":String,
            "run":Object,
            "home":Object
        }
    }
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>