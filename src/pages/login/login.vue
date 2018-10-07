<template>
    <div class="login_reg">
        <div class='logo'><img src="../../assets/img/elmlogo.png" alt=""></div>
        <div class="login_form">
            <div class='msg_verify'>短信登录</div>
            <div class='phonenumber'>
                <input type="text" placeholder="手机号" v-model='p_num' maxlength="11" @blur="checkInput">
                <router-link to="#" class="msg_vrfct">获取验证码</router-link>
            </div>
            <input type='password'  placeholder="验证码" v-model='upwd' @blur="checkPwd">
            <section>温馨提示：未注册饿了么账号的手机号，登录时将自动注册，且代表您已同意
                <router-link to="#" class="service">《用户服务协议》</router-link>
            </section>
            <mt-button type="primary" size="large" @click='user_login'>登录</mt-button>
            <router-link to="/reg">注册</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            p_num:'',
            upwd:''
        }
    },
    methods:{
        checkInput(){
            this.p_num.length<11?this.$toast("请输入11位手机号码"):'';
            return;
        },
        checkPwd(){
            this.upwd.length<6? this.$toast({message:"请输入六位数密码"}):'';
            return;
        },
        user_login(){
            var url='http://127.0.0.1:3001/login?phone_num='+this.p_num+'&upwd='+this.upwd;
            this.$http.get(url).then(result=>{
                // console.log(this.p_num,this.upwd);
                if(result.body.code == 1){  //如果数据库中有相应数据，登录成功
                    this.$toast({
                        message:"登录成功",
                        duration:2000
                    });
                    // console.log(result.body.msg)
                    sessionStorage.isLogin =1;
                    sessionStorage.uid = result.body.msg[0].uid;
                    sessionStorage.uname = result.body.msg[0].uname;
                    sessionStorage.p_num = result.body.msg[0].phone_num;
                    this.$router.push('/Home');
                }
                else if(result.body.code == 0){
                    this.$toast(result.body.msg);
                }
                else{
                    this.$toast("用户名或密码错误");
                }
            });
        },
    }
}
</script>

<style lang="scss">
// .login_reg{ 
//     background: #fff;
//     width:80%;padding:10%;
//     height:100vh;
//     .logo{
//         width:100%;text-align: center;
//         margin-bottom:5vh;
//     }
// }
// .login_form{
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     font-size:14px;
//     color:#999;
//     justify-content: space-around;
//     height:47vh;
//     text-align: justify;
//     .service,.msg_vrfct:focus{   color:#26a2ff    }
//     .phonenumber{
//         width:100%;
//     }
//     .msg_vrfct{
//         position:absolute;
//         margin:-30px -10px 0 0;
//         right:15vw;
//     }
// }
// .login_form .msg_verify{
//     color:#26a2ff;
//     border-bottom: #26a2ff solid 2px;
//     font-weight: 600;
// }
// .login_form input{ 
//     border-radius: 4px;
//     border: 1px solid #ddd;
//     width:100%;
//     height:39px;
//     text-indent: .5em;}
// .login_form input:hover{
//     border:1px solid #26a2ff;
//  }
</style>
