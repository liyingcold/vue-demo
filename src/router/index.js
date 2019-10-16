import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BindDate from '@/components/BindDate'
import ToDoListDemo01 from '@/components/ToDoListDemo01'
import ToDoListDemo02 from '@/components/ToDoListDemo02'
import Component01 from '@/components/Component01'
import News from '@/components/News'
import Content from '@/Components/Content'
import Pcontent from '@/Components/Pcontent'
import User from '@/Components/User'
import UserAdd from '@/Components/UserInfo/UserAdd'
import UserList from '@/Components/UserInfo/UserList'

Vue.use(Router)

export default new Router({
  /*mode:'history',hash模式改为history模式 */
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/bind',
      name:'binddate',
      component:BindDate
    },
    {
      path:'/todo01',
      name:'todolist',
      component:ToDoListDemo01
    },
    {
      path:'/todo02',
      name:'todolist',
      component:ToDoListDemo02
    },
    {
      path:'/home',
      name:'component01',
      component:Component01
    },
    {
      path:'/news',
      name:'news',
      component:News
    },
    {
      path:'/content/:aid',/*动态路由 1、配置*/
      name:'content',
      component:Content
    },
    {
      path:'/pcontent',
      name:'content',
      component:Pcontent
    },
    {
      path:'*',
      redirect:'/home'
    },
    {
      path:'/user',
      name:'user',
      component:User,
      children:[
        {
          path:'useradd',
          name:'useradd',
          component:UserAdd
        },
        {
          path:'userlist',
          name:'userlist',
          component:UserList
        }
      ]
    },
    
  ]
})
