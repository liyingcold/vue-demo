<template>
  <div class="hello">
  <!-- 绑定数据，绑定对象-->
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <br>


    <!--循环数组，渲染数据 -->
    <ur>
      <li v-for="item in list" >
        {{item}}
      </li>
    </ur>
    <hr>
    <br>
    <ur>
    <li v-for="(item, index) in list1" :key="index">
        {{item.title,index}}
        <ol>
          <li v-for="news in item.list">
            {{news.title}}
          </li>
        </ol>
    </li>
    </ur>
    <br>
    <hr>
    <ur>
    <li v-for="(item, index) in list2" :key="index">
        {{item.cate,index}}
        <ol>
          <li v-for="(item, index) in item.list" :key="index">
            {{item.title,index}}
          </li>
        </ol>
    </li>
    </ur>



    <!-- 绑定属性-->
    <div v-bind:title="title">鼠标瞄上去看一下</div>
    <!-- 绑定html,使传输的html数据解析后再显示 -->
    <div v-html="h"></div>
    <!-- 绑定数据的另外一种方式 -->
    <div v-text="msg"></div>
    <!-- 绑定Class -->
    <div v-bind:class="{'red':flag}"> 绑定Clss</div>
    <!-- 循环数据，第一个数据高亮 -->
    <ul>
      <li v-for="(item, index) in list1" :key="index" :class="{'red':index==0}">
        {{item.title,index}}
      </li>
    </ul>
    <!-- 绑定Style -->
    <div class="box" v-bind:style="{'width':boxWdith+'px'}">我是另一个div</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello Vue!',
      list:['list1','list2','list3'],
      list1:[
        {'title':'11111'},
        {'title':'3333'},
        {'title':'22222'},
        {'title':'44444'}
      ],
      list2:[
        {
          "cate":"国内新闻",
          list:[
            {'title':'女排夺冠'},
            {'title':'女排夺冠'},
            {'title':'女排夺冠'}
          ]
        },
         {
          "cate":"国际新闻",
          list:[
            {'title':'女排夺冠'},
            {'title':'女排夺冠'},
            {'title':'女排夺冠'}
          ]
        }
      ],
      title:'鼠标瞄上去看下',
      h:'<h2>我是h2</h2>',
      flag:true,
      boxWdith:300

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.red{
  color:red;
}
.box{
  height: 30px;
  
  background-color: aquamarine;
}
</style>
