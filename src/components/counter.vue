<template>
    <div class='active_btn'>
        <transition name="fade">
            <div class='del_cart' v-show='item.count'><div  @click='delCart(item)'>-</div></div>
        </transition>
        <span v-show="item.count">{{item.count}}</span>
        <div class='add_cart'><div @click="addCart(item)">+</div></div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    data(){
        return{
            i_count:0,
        }
    },
    props:['item'],
    methods:{
        addCart(item){
            this.$store.commit('increment',item);    //改变状态里的f_count，购物车内商品数量
            
            //记录单个商品的数量和值
            if(!item.count){
                Vue.set(item,'count',1);
            }
            else{
                item.count++;
            }
            this.i_count=item.count;
            // console.log('this.i_count',this.i_count);
            this.$store.commit("item_sum");     //计算购物车内商品总件数
            
        },
        delCart(item){
            this.$store.commit('subtract',item);
            // console.log(this.$store.state.f_count);
            item.count--;
            this.$store.commit("item_sum");
        },
    }
}
</script>

<style lang='scss'>
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  color:red;
}
// .fade-enter-active{
//     animation:bounce-in 3s;
// }
// .fade-leave-active{
//     animation:bounce-in 3s reverse;
// }
// @keyframes bounce-in{
//     0%{transform: scale(0); width:200%;}
//     50%{transform: scale(1.5)}
//     100%{transform:scale(1)}
// }
// .fade-enter,.fade-leave-to{
//     transition:rotate(40deg);
//     opacity:0;
// }
.active_btn{
    float: right;
    line-height:1.6rem;
    height: 1.4rem;
    display: flex;
}
.active_btn span{
    padding:.2vw 1vw;
    font-size: 1rem;
    color:rgba(0,0,0,.87);
    text-align: center;
    width: 7vw;
}
.del_cart div,.add_cart div{
    border:solid 1px #3190e8;
    background: #3190e8;
    border-radius: 50%;
    color:#fff;
    display: block;
    font-size: 1.3rem;
    text-align: center;
    line-height:1.3rem;
    width:1.3rem;
}
.del_cart div{
    background: $bg_color;
    color:#3190e8;
    font-size:2rem;
}
</style>


