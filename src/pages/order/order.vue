<template>
    <div class='order_wrap'>
        <HeaderView :ptitle='pageTitle'></HeaderView>
        <div class='unlogin_container' v-show='!is_login'><!-- 未登录状态 -->
            <img src="../../assets/img/unlogin.png" alt="">
            <span>登录后查看外卖订单</span>
            <mt-button size="normal" type="primary" @click='toLogin'>立即登陆</mt-button>
        </div>
        <div v-show="is_login">
        <div>历史订单</div>
        <div class='order_history'>
            <div class='order_row'>
                <div class="order_cell">
                    <div class='shop_logo'><span><img src="../../assets/logo.png" alt=""></span></div>
                    <div class='order_detail'>
                        <div>肯德基宅急送<span class='order_state'>订单已送达</span></div>
                        <p class='order_date'>2017-08-08 19:21</p>
                        <span class='order_pre'>饿了么回味经典桶 等8件商品</span><span class='order_sum'>￥163.16</span>
                    </div>
                </div>
            </div>
            <div class='order_row'>
                <div class="order_cell">
                    <div class='shop_logo'><span><img src="../../assets/logo.png" alt=""></span></div>
                    <div class='order_detail'>
                        <div>肯德基宅急送&nbsp;<span class='order_state'>订单已送达</span></div>
                        <p class='order_date'>2017-08-08 19:21</p>
                        <span class='order_pre'>饿了么回味经典桶 等8件商品</span><span class='order_sum'>￥163.16</span>
                    </div>
                </div>
            </div>
        </div>
        <div class='history_btm'>仅显示近一年外卖订单</div>
        </div>
    </div>
</template>
<script>
// import Header from '../../components/header'
import HeaderView from '../../components/headerView'

export default {
    data(){
        return{
            pageTitle:'订单',
            is_login:false,
        }
    },
    created(){
    },
    methods:{
        toLogin(){
            this.$router.push('login')
        }
    },
    components:{
        // Header
        HeaderView
    }
}
</script>

<style lang='scss' scoped>
$bg_color:#ffffff;
$ct:center;
$date_color:#999;
$sum_color:#777;
.order_wrap{ 
    background:$bg_color;
    margin-top:-20px;
    .unlogin_container{
        background: #f5f5f5;
        display: flex;
        flex-direction: column;
        justify-content:space-around;
        align-items:center;
        height:44vh;
        margin-top:20vh;
        img{ width:50%; }
    }
    .order_row{
        padding:2vh 2vh 0 2vh;
        border-bottom:solid 12px #f2f2f2;
    }
    .order_cell{
        display:flex;
        flex-direction: row;
        width:100%;
        div:not(:first-child){
            // border-bottom:solid 1px #f2f2f2;
        }
        div img{
            background: #f2f2f2;
            width:6vw;
        }
        .order_detail{
            flex:1;
            padding-left:1em;
            font-size:1.1rem;
        }
        div .order_date{
            font-size: .23rem;
            color:$date_color;
            border-bottom:solid 1px #f2f2f2;
            line-height: 2em;
        }
        .order_state,.order_pre,.order_sum{
            font-size:1rem;
        }
        .order_state,.order_sum{
            float: right;
        }
        .order_pre{
            color:$sum_color;
        }
        .order_pre,.order_sum{
            line-height: 3rem;
        }
        .order_sum{
            font-weight: 700;
        }
    }
    .history_btm{
        text-align:$ct;
        font-size:.23rem;
        line-height: 2rem;
        height:2rem;
    }
}

</style>