<template>
    <div id="pcontent">
        <h2>{{msg}}</h2>
    </div>
</template>

<script>

    export default{
        data() {
            return {
                msg:'我是一个商品详情组件',
            }
        },
        methods: {
         
        },
        mounted() {
        //  获取get传值
        console.log(this.$route.query)
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