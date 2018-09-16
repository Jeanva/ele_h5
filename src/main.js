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

// import { Toast } from 'mint-ui';

import { Swipe, SwipeItem } from 'mint-ui';
Vue.use(Mint);

Vue.component(SwipeItem.name, SwipeItem);

Vue.component(Swipe.name,Swipe) // 注册mintUI组件

Vue.component("HeaderView",HeaderView);
Vue.component("FooterView",FooterView);

// import "./lib/mui/css/mui.css"
// import './lib/mui/css/icons-extra.css'

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
//过滤器：订单时间
Vue.filter('date_time',function(val){
  var actual_date = val.toLocalString();
  return `${actual_date}`;
});
//过滤器：订单 食品数组
Vue.filter('fooditems',function(str){
    if(str.length>0)
    {
      // var s=str.match(/\",\"/g);
      var s = str.split(',')
      str=str.slice(0,str.indexOf(','));
      return str+" 等"+s.length+'件商品';
    }
});

Vue.config.productionTip = false

//引入Vuex 状态管理
import Vuex from 'vuex'
Vue.use(Vuex);
//创建Vuex实例[共享数据；提供操作数据的方法，获取数据方法]
//new  Vuex.Store();  得到了一个数据仓储对象
var store= new Vuex.Store({
  state:{
    //专门用来保存共享数据，相当于组件data
    //如果在组件中操作 用 this.$store.state.***
  },
  mutations:{
    //操作共享数据，只能用mutations提供的方法
    //如果组件要使用mutations定义的方法，只能使用 this.$store.commit('函数名');
  },
  getters:{
    //getters只提供数据，不修改数据
    //在组件模板中 {{this.$getters.***}}
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
