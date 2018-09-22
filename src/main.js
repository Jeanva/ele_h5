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
    f_count:[],    //食物数量数组
    cart_list:[], //购物车商品数组，商品fid
    cart_item:0,
  },
  mutations:{
    //操作共享数据，只能用mutations提供的方法
    //如果组件要使用mutations定义的方法，只能使用 this.$store.commit('函数名');
    increment(state,i){ 
      //当前商品fid，在cart_list中的索引
      var tmp_index = state.cart_list.indexOf(i.fid);
      // console.log('商品购物车中位置',state.cart_list.indexOf(i.fid));
      
      if(!state.cart_list.includes(i.fid)){//如果商品未存在于cart_list，
        //则将商品对象加入cart_list
        //并且在f_count对应索引位置添加值
        state.f_count.push(1);
        state.cart_list.push(i.fid);
        
      }else{
        //如果商品已存在，则把f_count对应索引位置的值+1
        state.f_count[tmp_index]++;
      }      
    },
    subtract(state,i){
      var tmp_index = state.cart_list.indexOf(i.fid);
      state.f_count[tmp_index]--;
      if(state.f_count[tmp_index]==0){
        //删除商品对象在f_count和cart_list中对应的值
        state.f_count.splice(tmp_index,1);
        state.cart_list.splice(i,1);
      }
    },
    //计算购物车内商品总件数 cart_item
    item_sum(state){
      if(state.f_count.length==1){
        state.cart_item = state.f_count[0];
      }else{
        state.cart_item =0;
        for(var n in state.f_count){
          state.cart_item+=state.f_count[n]
        }
      }
    }
  },
  getters:{
    //getters只提供数据，不修改数据
    //在组件模板中 {{this.$store.getters.***}}
    optCount:function(state){
        return state.f_count;
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
