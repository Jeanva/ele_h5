<template>
    <div id='box'>
        <HeaderView :ptitle='pageTitle'></HeaderView>
        <div class='login '>
            <div>
                <div class='logo_elm'><img src="../../assets/img/elm.svg" alt=""></div>
            </div>
            <!-- 未登录时显示 -->
            <div v-show="!isLogin">
                <router-link class='register' to='/reg'>登录/注册</router-link>
                <p class='priv'>
                    <img src='../../assets/img/phone.svg'>
                    登录后享受更多特权
                </p>
            </div>
            <!-- 登录后显示 -->
            <div v-show="isLogin">
                <router-link class='register' to='/logout'>{{uname}}</router-link>
                <p class='priv'>
                    <img src='../../assets/img/phone.svg' >
                    <span>{{p_num}}</span>
                </p>
            </div>
            <router-link class="arrow" :to='isLogin?"logout":"/reg"'>
            </router-link>
        </div>
        <div class='subBtn'>
             <div><a href=""><img src="../../assets/logo.png" width='24' alt="" v-show="!isLogin">0.01元<br>钱包</a></div>
             <div><a href=""><img src="../../assets/logo.png" width='24' alt="" v-show="!isLogin">1个<br>红包</a></div>
             <div><a href=""><img src="../../assets/logo.png" width='24' alt="" v-show="!isLogin">0个<br>金币</a></div>
        </div>
        <section>
            <mt-cell title="我的地址" is-link>
                <img slot="icon" src="../../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="我的收藏" is-link  v-show='isLogin'>
                <img slot="icon" src="../../assets/logo.png" width="24" height="24">
            </mt-cell>
        </section>
        
        <section>
            <!-- 登陆后显示  -->
            <div v-show='isLogin'>
            <mt-cell title="饿了么联名卡" is-link>
                <span class='new'></span><span>免费领百元红包</span>
                <img slot="icon" src="../../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="推荐有奖" is-link>
                <span>5元现金拿不停</span>
                <img slot="icon" src="../../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="城市代理申请" is-link>
                <span class='new'></span>
                <span>最高6个月面抽佣</span>
                <img slot="icon" src="../../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="我要贷款" is-link>
                <span class='hot'></span>
                <span>低门槛放款快</span>
                <img slot="icon" src="../../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="免流量" is-link>
                <span>每月最高500M</span>
                <img slot="icon" src="../../assets/logo.png" width="24" height="24">
            </mt-cell>
            </div>
            <!-- 登录后显示完 -->

            <mt-cell title="金币商城" is-link>
                <!-- <span>icon 是图片</span> -->
                <img slot="icon" src="../../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="分享拿5元现金红包" is-link>
                <!-- <span>icon 是图片</span> -->
                <img slot="icon" src="../../assets/logo.png" width="24" height="24">
            </mt-cell>
        </section>
        <section>
            <mt-cell title="我的客服" is-link>
                <!-- <span>icon 是图片</span> -->
                <img slot="icon" src="../../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="下载饿了么APP" is-link>
                <!-- <span>icon 是图片</span> -->
                <img slot="icon" src="../../assets/logo.png" width="24" height="24">
            </mt-cell>
        </section>
        <section v-show='isLogin'>
            <mt-cell title="欢迎评分" is-link>
                <!-- <span>icon 是图片</span> -->
                <img slot="icon" src="../../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="加盟合作" is-link>
                <!-- <span>icon 是图片</span> -->
                <img slot="icon" src="../../assets/logo.png" width="24" height="24">
            </mt-cell>
        </section>
    </div>
</template>
<script>
import Header from '../../components/header'
import Card from '../../components/usercard'
import HeaderView from '../../components/headerView'

export default {
    data (){
        return {
            pageTitle:'我的',
            isLogin:false,
            uname:'',
            p_num:null,
        }
    },
    created(){
        console.log(
            sessionStorage.isLogin,sessionStorage
        );
        this.isLogin = sessionStorage.isLogin;
        this.uname = sessionStorage.uname;
        this.p_num = sessionStorage.p_num
    },
    components:{
        Header,
        Card,
        HeaderView
    }
}
</script>

<style>
.subBtn{
    background: #f5f5f5;
    display:table;
    width:100%;
}
.subBtn a{
    font-weight:700;
    font-size:.32em;
}
.subBtn div{
    border-right:1px solid #f5f5f5;
    background: #fff;
    height: 80px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    width:33.333%;
}
.subBtn  div:last-child{
    border-right:#f5f5f5 solid 0px;
}
.login{
    background-image:linear-gradient(90deg,#0af,#0085ff);
    color:#fff;
    display: flex;
    flex-direction: row;
    padding:6.666667vw 4vw;
    font-size:.56rem;
    font-weight:700;
    margin-top:-20px;
    align-items: center;
}
.login div{
    vertical-align: middle;
}
.login div:nth-child(2),.login div:nth-child(3){
    flex-grow:1;
    margin-left:20px;
}
.login .register{
    color:#fff;
    font-size:1.4rem;
}
.login .logo_elm{
    background: rgba(250 ,250, 250, 0.5);
    border-radius:50%;
    padding: 0 0;
}

.priv img{
    height:.70rem;
}

section{
    margin-top:2.6666vw;
}
.new,.hot{
    background:red;
    border-radius:1rem;
    color:#fff;
    font-size:.26rem;
    padding:.2rem .2rem .1rem;
    margin:0 .5rem;
}
.new:after{
    content:'NEW';
}
.hot:before{
    content:'HOT'
}
</style>
