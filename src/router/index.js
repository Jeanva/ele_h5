import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '../pages/home/home.vue'
import Order from '../pages/order/order.vue'
import User from '../pages/user/user.vue'
import ShopView from '../pages/shop/shopView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        
      ]
    },
    {
      path:'/home',
      name:'Home',
      component:Home,
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
    {
      path:'/shop',
      name:'Shop',
      component:ShopView
    }
  ]
})
