import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BindDate from '@/components/BindDate'
import ToDoListDemo01 from '@/components/ToDoListDemo01'
import ToDoListDemo02 from '@/components/ToDoListDemo02'
import Component01 from '@/components/Component01'
import News from '@/components/News'


Vue.use(Router)

export default new Router({
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
      component:News}
  ]
})
