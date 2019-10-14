<template>
    <div id="header">
        <!-- <h2>这是一个头部组件  挂载在Component01下</h2> -->
        <h5>{{msg}} </h5>
        <!-- <button @click="run('+子组件的值')">执行父组件的方法</button> -->
        <!-- <button @click="getParent">获取父组件的数据和方法</button> -->
         <button @click="getParentData()">获取父组件的数据和方法</button>
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

     父组件主动获取子组件的数据和方法
            1、调用子组件的时候，定义一个ref <v-header ref="Header"></v-header>
            2、在父组件里面通过
                this.$refs.header.属性
                this.$refs.header.方法

     子组件主动获取父组件的数据和方法
            1、this.$parent.header.数据
            2、this.$parent.header.方法


*/
    export default{
        data() {
            return {
                msg:'我是一个头部组件'
            }
        },
        methods: {
            // getParent(){
            //    alert(this.home.title) 
            // }
            run(){
                alert("我是一个子组件的run方法");
            },
            getParentData(){
                
                alert(this.$parent.msg)
            }
        }
        /*父组件向子组件传值*/
        // props:['title','run','home']
        /*props验证*/
        /*props:{
            "title":String,
            "run":Object,
            "home":Object
        }*/
    }
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>