import Vue from 'vue'
import App from './App'
import router from './router'
//1.加载 VueResource模块(发送ajax请求)
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.http.options.root = "http://127.0.0.1:3001";

import HeaderView from './components/headerView.vue'
import FooterView from './components/footerView.vue'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import { Swipe, SwipeItem } from 'mint-ui';

//过滤器 ： 配送时间
Vue.filter('time_delivery',function(val){
  var timer = parseInt(val/20);
  if (timer<60)
    return `${timer}分钟`;
  else 
    return `1小时`;
})
//过滤器： 送餐费
Vue.filter('fee_delivery',function(val){
  var fee = (val/100+1).toFixed(1);
  return `￥${fee}元`;
})
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(Mint);
Vue.component(Swipe.name,Swipe) // 注册mintUI组件

Vue.component("HeaderView",HeaderView);
Vue.component("FooterView",FooterView);

// import "./lib/mui/css/mui.css"
// import './lib/mui/css/icons-extra.css'

Vue.config.productionTip = false

//引入Vuex 状态管理
import Vuex from 'vuex'
Vue.use(Vuex);
//创建Vuex实例[共享数据；提供操作数据的方法，获取数据方法]
//new  Vuex.Store();  得到了一个数据仓储对象
var store= new Vuex.Store({
  state:{
    //专门用来保存共享数据，相当于组件data
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
