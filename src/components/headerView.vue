<template>
    <div class='my_header'>
        <mt-header fixed :title="ptitle">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
                <mt-button v-show='showClose'>关闭</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        </div>             
</template>

<script>
export default {
    props:['ptitle','showClose'],
    data(){
        return {
        }
    }
}
</script>


<style>
@import url("//unpkg.com/mint-ui/lib/style.css");
.my_header{
    clear:both;
    margin-bottom:-20px;
}
</style>
