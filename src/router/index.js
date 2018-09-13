import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '../pages/home/home.vue'
import Order from '../pages/order/order.vue'
import User from '../pages/user/user.vue'
import ShopDetails from '../pages/shop/shopDetails.vue'
import HomeView from '../components/homeview.vue'
import Login from "../pages/login/login"

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
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/shop:sid', //从home.vue中传递选中商铺的sid给 shopDetails.vue商铺详情页
      name:'Shop',
      component:ShopDetails
    }  
  ]
})
