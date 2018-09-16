<template>
    <div>
    <div class='shopfilter'>
        <div :class="{select:true,chooseOn:showRank}" :rid=1  @click='chooseRank'>{{rankType[0].title}} 
            <span>
                <img src="../assets/img/expand.svg" alt="">
            </span>
        </div>
        <div :rid=2 data-rid='2' @mousedown='getChange' @click='receiveFun("rate")'>好评优先</div>
        <div :rid=3 data-rid='3' @click='receiveFun("distance")'>距离最近</div>
        <div  :class="{select:true,chooseOn:showFilter}" :rid=4 data-rid='4' @mousedown='getChange' @click='filterShop'>筛选 <span><img src="../assets/img/filter.svg" alt=""></span></div>
        <!-- <div :class='{select:true,chooseOn:showRank}' v-for='item in rankType'
            @click='item.fn'
        >{{item.title}}</div> -->
    </div>
    <div class='ranking' v-show='showRank'>
        <ul>
            <!-- <li v-for='item in li' @click='SortWay(item.tag)' >{{item.title}}</li> -->
            <li v-for='(item,index) in li' @click='SortWay(item,index)'>{{item.title}}</li>
        </ul>
    </div>
    <div class='shopfilting' v-show='showFilter'>
        <dl class='shopSer'>
            <dt>商家服务(可多选)</dt>
            <dd>
                <div><div class='fn'>蜂鸟专送</div></div>
                <div><div class='pp'>品牌商家</div></div>
                <div><div class='an'>食安保</div></div>
                <div><div class='new'>新店</div></div>
                <div><div class='recipt'>开发票</div></div>
            </dd>
        </dl>
        <dl class='shopSer'>
            <dt>优惠活动(单选)</dt>
            <dd>
                <div><div>新用户活动</div></div>
                <div><div>特价商品</div></div>
                <div><div>下单立减</div></div>
                <div><div>赠品优惠</div></div>
                <div><div>下单返红包</div></div>
                <div><div>进店领红包</div></div>
            </dd>
        </dl>
        <dl class='shopSer'>
            <dt>人均消费</dt>
            <dd>
                <div><div>￥20以下</div></div>
                <div><div>￥20-￥40</div></div>
                <div><div>￥40-￥60</div></div>
                <div><div>￥60-￥80</div></div>
                <div><div>￥80-￥100</div></div>
                <div><div>￥100以上</div></div>
            </dd>
        </dl>
        <div class='setShop'>
            <div class='reset'>清空</div>
            <div class='submit'>确定</div>
        </div>
    </div>
    </div>
    
</template>
<script>
// import SVG from '../assets/svg/svg'
import Bus from '../Bus'
export default {
    components:{
        // SVG
    },
    data(){
        return{
            showRank:false,
            showFilter:false,
            mark:'',
            rankType:[
            {title:'综合排序',fn:this.chooseRank()},
            {title:'好评优先',fn:''},
            {title:'距离最近',fn:''},
            {title:'筛选',fn:''}    ],
            //食物分类
            li:[
                {'title':'综合排序','tag':'all'},
                {'title':'销量最高','tag':'soldout'},
                {'title':'起送价最低','tag':'price'},
                {'title':'配送最快','tag':'deliv_spd'},
                {'title':'配送费最低','tag':'deliv_fee'},
                {'title':'人均从低到高','tag':'average'},
                {'title':'人均从高到低','tag':'average_high'}],
            shopList:[],
        }
    },
    created(){
        Bus.$on('shoplist',content=>{
            console.log('shopfilter接收到兄弟组件传值',content);
            this.shopList = this.shopList.concat(content);
        });
    },
    methods:{
        chooseRank(){
            this.showFilter = false;
            this.showRank=!this.showRank;
        },
        filterShop(){
            this.showFilter=!this.showFilter;
            this.showRank = false;
        },
        getChange(e){
            // this.mark=rid;
            console.log(e);
        },
        //子组件触发事件
        receiveFun(i){
            this.showFilter = false;
            this.showRank = false;
            console.log('按'+i+'排序');
            // this.$emit('distance');
            this.$emit(i);
        },
        SortWay(i,index){
            this.showFilter=false;
            this.showRank =false;
            this.rankType[0].title=this.li[index].title;
            console.log('this.rankType',this.rankType);
            // var tmp= this.li[0];
            // this.li[0]=i;
            // this.li[index]=tmp;
            this.$emit(i.tag);
        },
    },
    watch:{}
}   
</script>

<style lang='scss'>
$bg_color:#fff;
$font_color:#666;
$selected_color:#3190e8;
$font_size:1rem;
$select_color:#333;

.shopfilter{
    align-items: center;
    background: $bg_color;
    box-shadow:0px 1px 1px 1px #f2f2f2;
    color:$font_color;
    display: flex;
    justify-content: space-between;
    height: 50px;
    font-size:.9rem;
    line-height: $font_size;
    padding:0 1rem;
    position: relative;
    img{
        width:.6rem;
    }
    .select{
    color:$select_color;
    }
    .chooseOn{
    color:$selected_color;
    font-weight: 700;
    }
}
.ranking,.shopfilting{
    background: $bg_color;
    display: block;
    clear: both;
    position:absolute;
    margin-bottom:5px;
    width: 100vw;
    // z-index: 5;
    ul,ul li{
        display: block;
        clear: both;
        font-size:0.9rem;
        list-style: none;
        text-indent: 1.5rem;
        padding:.5rem 0;
    }
.shopSer{
    font-size: .23rem;
    padding:.5rem .5rem;
    // z-index:0;
    dt{
        display: block;
        width: 100%;
    }
    dd{
        display: flex;
        flex-wrap:wrap;
    }
    dd div{
        display: flex;
        align-items:center;
        justify-content: center;
        font-size: .9rem;
        //flex:flex-grow|flex-shrink|flex-basis
        flex:0 0 31.3%;
        background:#fafafa;
        border-radius: 5px;
        margin: .23rem 1%;
        height:2.4rem;
    }
    dd div div{
        //关键语句，决定文字不换号
        white-space: nowrap;
    }
    .fn:before,.pp:before,.an:before,.new:before,.recipt:before{
        content:'蜂';
        color:$bg_color;
        background-color:$selected_color;
        padding:0 .18rem;
        margin-right:.2rem;
    }
    .pp:before{
        content:'品';
        background-color: orange;
    }
    .an:before{
        content:'安';
        background-color:pink;
    }
    .new:before{
        content:'新';
        background: orange;
    }
    .recipt:before{
        content:'票';
        background: greenl
    }
}
.setShop{
    display: flex;
    text-align:center;
    justify-content: space-around;
    line-height: 11vw;
    .reset{
        flex: 1
    }
    .submit{
        background: #00d762;
        align-items: center;
        color:#fff;
        flex: 1
    }
}
}

</style>

