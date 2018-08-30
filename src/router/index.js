import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '../pages/home/home.vue'
import Order from '../pages/order/order.vue'
import User from '../pages/user/user.vue'
import ShopView from '../pages/shop/shopView.vue'
import HomeView from '../components/homeview.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Home'
    },
    //一级页面
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'/',
          component:HomeView
        },
        {
          path:'/home',
          name:'home',
          component:HomeView
        },
        
        {
          path: '/order',
          name: 'Order',
          component: Order
        },
        {
          path: '/user',
          name: 'User',
          component: User
        },
      ]
    },  
    {
      path:'/shop',
      name:'Shop',
      component:ShopView
    }  
  ]
})
