<template>
    <div class='itemWrap' @click='getSeleted'>
        <span v-show='!bol' ><slot name='normal_img'></slot></span>
        <span v-show='bol'><slot name='active_img'></slot></span>
        <br>
        <span :class="{active_font:bol}">{{txt}}</span>
    </div>
</template>

<script>
export default {
    props:['txt','tid','sel'],
    computed:{
        bol:function(){
            if(this.tid == this.sel){
               return true
            }
               return false
        }
    },
    methods:{
        getSeleted:function(){
            //逆向传值，将参数传递给父级组件
            this.$emit('change',this.tid);
            this.$router.push('/'+this.tid);
        }
    }
}
</script>
<style>
.itemWrap{
    font-size:12px;
    color:#666;
    text-align: center;
    width:25%;
}
.itemWrap .active_font{
    color:#0085ff;
}
.itemWrap img{
    /* background: #333; */
    width:40px;
    margin-bottom: -14px;
    padding-bottom: 0;
}
</style>
