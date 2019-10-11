<template>
    <div class="todolist">
        <!-- 点击增加可以获取input里面的数据，并且在下面循环输出 -->


        <!-- 键盘监听，回车提交 -->
        <input type="text" v-model="todo" @keydown="doAdd($event)" />

        <hr>
        <!-- 渲染输入的数据 -->
        <h2>进行中</h2>
        <ul>
            <li v-for="(item, index) in list" :key="index" v-if="!item.checked">
                <!-- 文本框内容改变，刷新后也应该存储起来 -->
                <input type="checkbox" v-model="item.checked"  @change='saveList()'>{{item.title}}           <button @click="removeData(index)">删除</button>
            </li>
        </ul>
        <h2>已完成</h2>
        <ul>
            <li v-for="(item, index) in list" :key="index" v-if="item.checked">
                <!-- 文本框内容改变，刷新后也应该存储起来 -->
                <input type="checkbox" v-model="item.checked"  @change='saveList()'>{{item.title}}           <button @click="removeData(index)">删除</button>
            </li>
        </ul>
        <h2 v-if="ok">这是一个ok</h2>
        <h2 v-if="!ok">这是一个no</h2>
    </div>
</template>



<script>
/* eslint-disable no-new */
    import storage from '../model/storage.js';
    
    export default{
        data() {
            return {
                ok:true,
                todo:'',
                list:[]            
            }
        },
        methods: {
            
            doAdd(e){
                
                if(e.keyCode==13){
                    // 1、获取文本框输入的值 2、将文本框的值push到list里面
                    this.list.push({
                        title:this.todo,//一定要将todo的内容赋值给title,以配合list里引用的item.title
                        checked:false
                    });
                    this.todo=''; 
                }
                
                
                // 刷新界面时保留上一次的数据
                /*setItem无法保存对象，所以转换为json字符串*/
                // localStorage.setItem('list',JSON.stringify(this.list))
                storage.set('list',this.list);
            },
            removeData(key) {
            //    alert(key);

            // splice   js操作数组的方法
            this.list.splice(key,1);

            // 刷新界面时保留上一次的数据
            // localStorage.setItem('list',JSON.stringify(this.list))
            storage.set('list',this.list);
            },
            saveList(){
                // 刷新界面时保留上一次的数据
                // localStorage.setItem('list',JSON.stringify(this.list))
                storage.set('list',this.list);
            }
        },
        mounted() {
            console.log(storage)
            /*生命周期函数      vue刷新就会触发的方法*/
            var list=storage.get('list');

            /*注意判断，如果list为空，循环时就会出错*/ 
            if(list){
                
                this.list=list;
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
  margin: 0 10px;
}

</style>