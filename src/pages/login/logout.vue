<template>
    <div>
        <router-link to=''>退出登录</router-link>
    </div>
</template>
<script>
export default {
    created(){
        // console.log(sessionStorage);
        sessionStorage.clear();     //清除登录
        // console.log(sessionStorage);
    }
}
</script>
