<template>
    <!-- 组件1、手动挂载 -->
    <div id="user">
       <div class="user">
           <div class="left">
               <ul>
                   <li>
                       <router-link to="/user/useradd">增加用户</router-link>
                   </li>
                   <li>
                        <router-link to="/user/userlist">用户列表</router-link>
                    </li>
               </ul>
           </div>
           <div class="right">
              <router-view/>
           </div>
       </div>
    </div>
</template>

<script>
   

    export default{
        data() {
            return {
                msg:'我是一个user组件'
            }
        },
        methods: {
            
        },
        mounted() {
            
        },
        components:{
            
        }
        
    }

</script>


<style scoped >

h1, h2 {
  font-weight: normal;
  font-size:15px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
.user{
    display: flex;
    text-align: center;

    
}
.left{
        width: 200px;
        min-height: 400px;
        border-right: 1px solid rgb(21, 152, 175);
       
    }
.left li{
    line-height:2;
}
.right{
    flex: 1;
}
</style>