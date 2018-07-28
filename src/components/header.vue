<template>
    <div class='header'>
        <div class='left'><slot name='goback'></slot></div>
        <div class='title'>{{title}}</div>
        <div class='right'><slot name='set'></slot></div>
    </div>
</template>

<script>
export default {
    props:['title']
}
</script>

<style>
.header{
    background-image:linear-gradient(90deg,#0af,#0085ff);
    position: fixed;
    color:#fff;
    font-size:24px;
    height:50px;
    line-height: 50px;
    left:0;
    top:0;
    width:100%;
}
.title{
    /* float: left; */
    display: inline-block;
    text-align: center;
}
.left{
    float: left;
    display: inline-block;
    width:40px;
}
.left img{
    width:14px;
    line-height: 50px;
}
.right{
    float:right;
    display: inline-block;
    width:40px;
}
.right img{
    width:24px;
    padding-top:12px;
    line-height: 50px;
}
</style>
