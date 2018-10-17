<template>
    <div>
        <HeaderView :ptitle='pageTitle' showBack='true'></HeaderView>
        <section>
            <mt-cell title="我的头像" is-link to='http://127.0.0.1:3001/user/updateimg'>
                    <img slot="icon" src="../../assets/logo.png" width="24" height="24">
                
            </mt-cell>
            <mt-cell title="用户名" is-link value="gaga">
                
            </mt-cell>
        
            <mt-cell title="手机" is-link value="150****0000">
                <svg slot="icon" viewBox="0 0 11 16" width='1rem' height='1rem'>
                    <path fill="#0097FF" fill-rule="evenodd" d="M1 0h9a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm.5 1a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5h-8zm4 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                </svg>
            </mt-cell>
            <mt-cell title="登录密码" is-link value="修改">
                
            </mt-cell>
        </section>
        <router-link to="/logout" 
        style='display:block;line-height:3rem;color:#ff5339;width:100vw;font-weight:bold;height:3rem;background:#fff;text-align:center;'>退出登录</router-link>
        
        <form action='http://127.0.0.1:3001/user/updateimg' method='POST' enctype="multipart/form-data">
            <input type="file" name='mypic'>
            <input type='submit' value='上传'>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            pageTitle:'账户信息',

        }
    }
}
</script>