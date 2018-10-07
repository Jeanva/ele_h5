<template>
    <div>
        <router-link to=''>退出登录</router-link>
    </div>
</template>
<script>
export default {
    created(){
        console.log(sessionStorage);
        sessionStorage.clear();
        console.log(sessionStorage);
    }
}
</script>
