<template>
    <div class="bind">
        <h1>{{msg}}</h1>
        <div>
            <!-- 数据双向绑定 -->
            <input type="=text" v-model="msg"/>
            <button v-on:click="getMsg()"> 获取表单里面的数据</button>
            <button v-on:click="setMsg()">设置表单里的数据</button>
            <hr>
            <!-- ref获取dom节点 -->
            <input type="text" ref="userinfo"/>
            <button v-on:click="getInputValue()">获取第二个表单里的数据</button>
        </div>
        <hr>
        <div>
            <!-- 方法改变数据，方法获取数据 -->
            <button v-on:click="run1">执行事件的第一种方法</button>
            <button @click="run2">执行事件的第二种方法</button>
            <button @click="getMsg()">获取data里面的msg</button>
            <button @click="setMsg()">设置msg</button>
            <br>
            <!-- 点一个按钮，将数据渲染到ul里面 -->
            <button @click="requestData()">请求数据</button>
            <ul>
                <li v-for="(item, index) in list" :key="index">
                    {{index}}:{{item}}
                </li>
            </ul>
        </div>
        <hr>
        <div>
            <!-- 执行方法传值 -->
            <button @click="deleteData('111')">执行方法传值111</button>
        </div>
        <hr>
        <div>
            <!-- 事件对象(获取当前dom节点，获取自定义id属性进行传值) -->
            <button data-aid='123' @click="eventFunction($event)">事件对象</button>
        </div>
        
    </div>
</template>

<script> 
    // 双向数据绑定 MVVM vue就是一个mvvm框架
    export default{
        name: 'binddate',
        data() {
            return {
                msg:'happy every day',
                list:[]

            }
        },methods: {
            // 自定义方法
            getMsg(){
                // alert('vue方法执行了');

                // 获取data里面得数据
                alert(this.msg);
            },
            setMsg(){
               this.msg='我是设置的msg';
            },
            getInputValue(){
                console.log(this.$refs.userinfo);
                alert(this.$refs.userinfo.value);
            },
            run1:function(){
                alert('这是一个方法');
            },
            run2(){
                alert('这是第二个方法');
            },
            requestData(){
                for(var i=0;i<15;i++){
                    this.list.push('我是第'+i+'数据');
                }
            },
            deleteData(val){
                alert(val);
            },
            eventFunction(e){
                console.log(e);

                // e.srcElement dom节点
                e.srcElement.style.background='red';
                // 获取自定义属性的值
                console.log(e.srcElement.dataset.aid);
            }
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
a {
  color: #42b983;
}
</style>