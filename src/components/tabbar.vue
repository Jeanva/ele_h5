<template>
    <div class='tabbar'>
        <router-view></router-view>
        <!-- <Item txt='首页' tid='home' :sel='selected' @change='sendValue'>
            <img src="../assets/img/elm_active.svg" alt="" slot='active_img' />
            <img src="../assets/img/elm_normal.svg" alt="" slot='normal_img' />
        </Item>
        <Item txt='发现' tid='shop' :sel='selected' @change='sendValue'>
            <img src="../assets/img/elm_active.svg" alt=""  slot='active_img'/>
            <img src="../assets/img/elm_normal.svg" alt="" slot='normal_img' />
        </Item>
        <Item txt='订单' tid='order' :sel='selected' @change='sendValue'>
            <img src="../assets/img/elm_active.svg" alt=""  slot='active_img'/>
            <img src="../assets/img/elm_normal.svg" alt="" slot='normal_img' />
        </Item>
        <Item txt='我的' tid='user' :sel='selected' @change='sendValue'>
            <img src="../assets/img/elm_active.svg" alt=""  slot='active_img'/>
            <img src="../assets/img/elm_normal.svg" alt="" slot='normal_img' />
        </Item> -->
        <router-link to="/home">首页</router-link>
        <router-link to="/shop">店铺</router-link>
        <router-link to="/order">订单</router-link>
        <router-link to="/user">我的</router-link>
    </div>
</template>

<script>
import Item from './item'

export default {
    components:{
        Item,
    },
    data (){
        return {
            selected:'home'   //选中值
        }
    },
    methods:{
        sendValue:function(val){
            console.log('val',val);
            // 从子组件传递过来的值，改为当前选中项
            this.selected=val;
        }
    }
}
</script>


<style>
/* tabbar 固定下方 */
.tabbar{
    background:#f2f2f2;
    height:50px;
    box-shadow: #666 1px -1px 4px;
    position:fixed;
    display:flex;
    flex-direction: row;
    left:0px;
    bottom:0px;
    width:100%;
}
</style>
