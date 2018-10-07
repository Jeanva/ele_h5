import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '../pages/home/home.vue'
import Order from '../pages/order/order.vue'
import User from '../pages/user/user.vue'
import ShopDetails from '../pages/shop/shopDetails.vue'
import HomeView from '../components/homeview.vue'
import Login from "../pages/login/login"
import Logout from '../pages/login/logout'
import Reg from "../pages/login/reg"
import Confirm from "../pages/order/confirm"
import Remark from "../pages/order/remark"
import Pay from "../pages/order/pay"
import Recipt from '../pages/order/recipt'
import Status from '../pages/order/status'

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
    { //确认支付
      path:'/confirm',
      name:'confirm',
      component:Confirm
    },
    { //备注
      path:'/remark',
      name:'remark',
      component:Remark
    },
    { //支付
      path:'/pay',
      name:'pay',
      component:Pay
    },
    {   //发票
      path:'/recipt',
      name:'recitp',
      component:Recipt
    },
    {   //状态
      path:'/status',
      name:'status',
      component:Status
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/logout',
      name:'logout',
      component:Logout
    },
    {
      path:'/reg',
      name:'reg',
      component:Reg
    },
    {
      path:'/shop:sid', //从shopView.vue中传递选中商铺的sid给 shopDetails.vue商铺详情页
      name:'Shop',
      component:ShopDetails
    }  
  ]
})
