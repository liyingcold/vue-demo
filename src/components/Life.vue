<template>
    <div id="life">
        <h2>生命周期函数演示 ----{{msg}}</h2>
        
        <button @click="setMsg()">执行方法改变msg</button>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                msg:'msg'
            }
        },
        methods: {
            setMsg(){
                this.msg="我是改变后的数据"
            }
        },
        beforeCreate() {
            console.log('实力创建之前');
        },
        created() {
            console.log('实例创建完成');
        },
        beforeMount() {
            console.log('模板渲染之前') ;   
        },
        mounted() {/*请求数据，操作dom放在这个里面 */
            console.log('模板编译完成');
        },
        beforeUpdate() {/*页面销毁的时候要保存一些数据，就可以监听这个销毁的生命周期*/
            console.log('数据更新之前');
        },
        updated() {
            console.log('数据更新完毕');
        },
        beforeDestroy() {
            console.log('实例销毁之前');
        },
        destroyed() {
            console.log('实例销毁完成');
        }
    }
</script>


<style scoped>



</style>