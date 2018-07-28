<template>
    <section class='adIndex_row'>
        <div class='adIndex_item'>
            <div class='title'>品质套餐</div>
            <div class='subtitle'>搭配齐全吃得好</div>
            <div class='getnow'>立即抢购</div>
            <img src="../assets/logo.png" alt="" />
        </div>
        <div class='adIndex_item'>
            <div class='title'>品质套餐</div>
            <div class='subtitle'>搭配齐全吃得好</div>
            <div class='getnow'>立即抢购</div>
            <img src="../assets/logo.png" alt="" />
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
           ad:[ {title:'品质套餐',subtitle:'搭配齐全吃得好',active:'立即抢购',url:'../assets/logo.png'}]
        }
    }
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
        width: 20vw;
    }
}
.adIndex_item:last-child{
     .title,.getnow{
        color:red;
    }
}
</style>
