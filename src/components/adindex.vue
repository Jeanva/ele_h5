<template>
    <section class='adIndex_row'>
        <div class='adIndex_item' v-for='i in subbanner'>
            <div class='title'>{{i.tag}}</div>
            <div class='subtitle'>{{i.sub_tag}}</div>
            <div class='getnow'>{{i.tag}}</div>
            <img :src="i.img_url" alt="" />
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{}
    },
    created(){
        //  console.log(this.subbanner);     //子banner
    },
    props:["subbanner"]
}
</script>

<style lang='scss'>
$bg_color:#fff;
.adIndex_row{
    background: $bg_color;
    display: flex;
    justify-content:space-around;
    padding:2vw 2vw;
}
.adIndex_item{
    background: #f5f5f5;
    width: 46%;
    // flex: .6;
    height: 34vw;
    position: relative;
    padding:3vw 0 0 3vw;
    .title{
        font-size: 1.2rem;
        font-weight: 700;
    }
    .subtitle,.getnow{
        color:#999;
        font-size:.9rem;
        line-height: 1.6rem;
        height: 1.6rem;
    }
    .getnow{
        color:#af8260;
        font-weight: 700;
    }
    .getnow:after{
        content:'>';
    }
    img{
        position: absolute;
        right:0;
        bottom: 0;
        width: 30vw;
    }
}
.adIndex_item:last-child{
     .title,.getnow{
        color:red;
    }
}
</style>
