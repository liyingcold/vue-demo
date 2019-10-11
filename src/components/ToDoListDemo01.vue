<template>
    <div class="todolist">
        <!-- 点击增加可以获取input里面的数据，并且在下面循环输出 -->
        <input type="text" v-model="todo"/>
        <button @click="doAdd()">+增加</button>
        <hr>
        <ul>
            <li v-for="(item, index) in list" :key="index">
                {{item}}           <button @click="removeData(index)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                todo:'',
                list:[]
                
            }
        },
        methods: {
            doAdd(){
                // alert('增加');
                // 1、获取文本框输入的值 2、将文本框的值push到list里面
                this.list.push(this.todo);

                // 3、将文本框的值清空，即设置文本框的值
                this.todo='';
            },
            removeData(key) {
            //    alert(key);

            // 删除list就是改变该list
            // splice操作数组，可以在数组某个位置（key）删除一下
            this.list.splice(key,1);
            }
        }
    }

</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}

</style>