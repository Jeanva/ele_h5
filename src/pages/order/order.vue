<template>
    <div class='order_wrap'>
        <HeaderView :ptitle='pageTitle'></HeaderView>
        <div class='unlogin_container' v-show='!is_login'><!-- 未登录状态 -->
            <img src="../../assets/img/unlogin.png" alt="">
            <span>登录后查看外卖订单</span>
            <mt-button size="normal" type="primary" @click='toLogin'>立即登陆</mt-button>
        </div>
        <div v-show="is_login">
        <div class="his_text">历史订单</div>
        <div class='order_history'>

            <div class='order_row' v-for='i in orderlist'>
                <div class="order_cell">
                    <div class='shop_logo'><span><img :src="i.sh_logo" alt=""></span></div>
                    <div class='order_detail'>
                        <div>{{i.sh_name}}<span class='order_state'>订单已送达</span></div>
                        <p class='order_date'>{{i.o_date }}</p>
                        <div class='order_desc'>
                            <span class='order_pre'>{{i.o_items | fooditems}}</span>
                            <span class='order_sum'>￥{{i.o_sum }}</span>
                        </div>
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
            orderlist:''
        }
    },
    created(){
        this.getUserInfo();
        this.getOrderlist();
    },
    methods:{
        getOrderlist(){
            var url ='http://127.0.0.1:3001/orderlist?id=1';
            this.$http.get(url).then(result=>{
                if(result.body.code ==1){
                console.log(result.body.msg);
                this.orderlist=result.body.msg;
                }
            });
        },
        toLogin(){
            this.$router.push('reg')
        },
        getUserInfo(){
            this.is_login=sessionStorage.isLogin;
        }
    },
    components:{
        // Header
        HeaderView
    }
}
</script>

<style lang='scss'>
$bg_color:#ffffff;
$ct:center;
$date_color:#999;
$sum_color:#777;

.order_wrap{ 
    .his_text{
        font-weight: 600;
        padding:10px 0 0 20px;
    }
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
        // border-bottom:solid 12px #f2f2f2;
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
            width:10vw;
        }
        .order_detail{
            flex:1;
            padding-left:1em;
            font-size:1rem;
        }
        .order_detail>div{color:#000;}
        div .order_date{
            font-size: .23rem;
            color:$date_color;
            line-height: 2em;
        }
        .order_desc{
            border-bottom:solid 1px #f2f2f2;
        }
        .order_state,.order_pre,.order_sum{
            font-size:.9rem;
            line-height: 2em;
        }
        .order_state,.order_sum{
            float: right;
        }
        .order_pre{
            color:#000;
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