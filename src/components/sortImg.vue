<template>
    <div class='sortImg'>
        <a href="#" v-for='item in icons'>
            <div>
                <img :src="item.img_url" alt="" /><br>
                {{item.tag}}
            </div>   
        </a>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // sort:[
            //     {sort:'美食'},
            //     {sort:'商超便利'},
            //     {sort:'果蔬生鲜'},
            //     {sort:'下午茶'},
            //     {sort:'医药健康'},
            //     {sort:'大牌5折'},
            //     {sort:'浪漫鲜花'},
            //     {sort:'麻辣烫'},
            //     {sort:'地方菜系'},
            //     {sort:'披萨意面'},
            // ]
        }
    },
    props:["icons"]
}
</script>
<style lang='scss'>
$bg_color:#fff;
.sortImg{
    display: block;
    justify-content: space-around;
    margin-top:52px;
}
.sortImg div{
    background: $bg_color;
    color:#666;
    font-size: .8rem;
    float: left;
    width: 20%;
    padding:2vw 0 ; 
    text-align: center;
}
.sortImg div img{
    width:50%;
    // height: 150px;
}
</style>
