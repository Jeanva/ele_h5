<template>
    <div>
        <div class='shop_bg'>
            <div class='shop_logo'><img :src="shop.sh_logo" alt=""></div>
            <span class='shop_title'>{{shop.sh_name}}</span>
            <span class='shop_rate'>评价{{shop.star}} 月售{{shop.sold_month}} 蜂鸟专送约{{shop.distance}}</span>
            <div class='disc_note'>
                <span class='act_dis'>
                    <div class="discount">
                        <span class='disct_first'></span>
                        <span>本店新客户立减1元</span>
                    </div>
                </span>
                <span class='notice'>公告：{{shop.shop_note}}</span>
            </div>
        </div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">点餐</mt-tab-item>
            <mt-tab-item id="2">评论</mt-tab-item>
            <mt-tab-item id="3">商家</mt-tab-item>
        </mt-navbar>

        
        
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <!-- <mt-cell v-for="n in 10" :title="'内容 ' + n" /> -->
                <div class='recommend'>
                    <div class='shop_banner'>
                        <img :src="shop.shop_banner" >
                    </div>
                    <p class='recom_head'>商家推荐</p>
                    <div class='rec_list'>
                        <ul>
                            <li v-for='i in recom_food'>
                                <div class="f_img">
                                    <img :src="i.f_img_md" alt="">
                                </div>
                                <p class='rec_title'>{{i.f_name}}</p>
                                <p class='rec_soldout'>月售{{i.sold_count}} 好评率100%</p>
                                <div class='buy_rec'>
                                    <div>
                                        <span class='price_rec'>{{i.min_p}} </span><span class='rec_base_price'>起</span>
                                    </div>
                                    <!-- <span class='action_rec_btn'>
                                        <a href="#"><span class='del_rec'>-</span></a>
                                        <span class='buy_count'>1</span>
                                        <a href="#"><span class='add_rec'>+</span></a>
                                    </span> -->
                                    <counter :item="i"></counter>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class='food'>
                    
                    <div class='food_sort'>
                        <ul v-model='target'>
                            <li class='sort_item' v-for='item in food_sort' id='item.i'>
                                <router-link to='#'>{{item}}</router-link>
                            </li>
                        </ul>
                    </div>
                    
                    <section class='food_list'>
                        <div class='food_list_container'>
                        <!-- <ul
                        v-infinite-scroll="loadMore"
                        infinite-scroll-disabled="loading"
                        infinite-scroll-distance="10">
                            <li v-for="item in list">{{ item }}</li>
                        </ul>  -->

                        <dl>
                            <dt>
                                <strong class='sort_tag'>热销</strong>
                                <span>大家都喜欢1</span>
                            </dt>
                            <dd v-for='i in foodlist' :key='i.fid'>
                                <div class='food_show'>
                                    <span class="food_img" > <img :src="i.f_img_sm" alt=""></span>
                                    <section class='food_info'>
                                        <p class='food_name'>{{i.f_name}}</p>
                                        <p class='food_sub'>{{i.summary}}</p>
                                        <p class='food_sub'><span>月售{{i.sold_count}}份</span><span>好评率99%</span></p>
                                        <div class='food_act'>
                                            <span>每单限{{i.max_p}}份优惠</span>
                                            <span class='rest'>剩{{i.rest_count}}份</span>
                                        </div>
                                        <section>
                                            <span class='price'>
                                                <span>{{i.min_p}}</span>
                                                <span class='sale_base'>起</span>
                                                <del class='old_price'>{{i.old_price}}</del>
                                            </span>
                                            <!-- <div class='active_btn'>
                                                <div class='del_cart'><a v-show='i.count' @click='delCart(i)'>-</a></div>
                                                <span>{{i.count}}</span>
                                                <div class='add_cart'><a @click="addCart(i)">+</a></div>
                                            </div> -->
                                            <counter :item='i'></counter>
                                        </section>
                                    </section>
                                </div>
                            </dd>
                        <!-- 食品分类 -->
                        <section v-for="(item,index) in food_sort" >
                            <dt>
                                <strong class='sort_tag'>{{item}}</strong>
                                <span>大家都喜欢2</span>
                            </dt>
                            <dd v-for="i in sub_food_sort[index]">
                                <div class='food_show'>
                                    <span class="food_img"> <img :src="i.f_img_sm" alt=""></span>
                                    <section class='food_info'>
                                        <p class='food_name'>{{i.f_name}}</p>
                                        <p class='food_sub'>{{i.f_desc}}</p>
                                        <p class='food_sub'><span>月售{{i.sold_count}}份</span><span>好评率{{i.good_rate}}%</span></p>
                                        <div class='food_act'>
                                            <span>每份限1份优惠</span>
                                            <span class='rest'>剩10份</span>
                                        </div>
                                        <section>
                                            <span class='price'>
                                                <span>10</span>
                                                <span class='sale_base'>起</span>
                                                <del class='old_price'>51</del>
                                            </span>
                                            <div class='active_btn'>
                                                <div class='del_cart'><a href='#'>-</a></div>
                                                <span>1</span>
                                                <div class='add_cart'><a href="#">+</a></div>
                                            </div>
                                            
                                        </section>
                                    </section>
                                </div>
                            </dd>
                            </section>
                            
                            
                        </dl>
                        </div>
                    </section>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'测试 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :title="'选项 ' + n" />
            </mt-tab-container-item>
        </mt-tab-container>

        <footer>
            <!-- 购物车展开状态 -->
            <div v-show="show_cart" style="top:0;bottom:0;left:0;right:0;position:absolute; z-index:0; background-color:rgba(0,0,0,.5)">
            </div>
            <div class='order_list_fold'>
                <div class='requirement'>还差<span class='highlight'>1</span>元</div>
                <div v-show="show_cart">
                    <div class='clear_cart'>
                        <span>已选商品</span> <span @click="clear_cart">清空</span>
                    </div>
                    <div>
                        <ul>
                            <li v-for="(i,index) in this.$store.state.cart_list">
                                <span class='order_li'>{{i.f_name}}</span>
                                <span class='order_account'>{{cart_f_count[index]}}</span>
                                <span class='order_action'>-1+</span>
                                <!-- <counter :item=''></counter> -->
                            </li>
                        </ul>
                        <div class='food_box_fee'>餐盒</div>
                    </div>
                </div>
            </div>
            
            
            <!-- 购物车默认收起状态 -->
            <div class='cart'>
                <div class='cart_img my_car' @click="showCartList"><div v-show='cart_item'><span>{{cart_item}}</span></div></div>
                <div class='price_fee'>
                    <p class='order_item' v-if='!cart_item'>未选购商品</p>
                    <p v-else='cart_item.length'>{{cart_item}}  ￥{{total}}</p><!--购物车价格-->
                    <p class='fee'>另需配送费3.8元</p>
                </div>
                <a class='pay_order'>￥20起送</a>
            </div>
            
        </footer>
    </div>
</template>

<script>
import {base64} from 'js-base64';
import Vue from 'vue';
import counter from "../../components/counter.vue";
import BScroll from "better-scroll"

export default {
    data(){
        return{
            ptitle:"商铺",
            selected:'1',
            target:'烧烤',
            food_sort:[],
            sub_food_sort:[],
            recom_food:[],
            // list:['花生','瓜子','矿泉水','啤酒','饮料','小板凳'],
            //从首页shoplist 传来的值
            id:this.$route.params.id,
            shop:'',
            foodlist:[],
            show_cart:false,
            cart_list:[],
        }
    },
    created(){
        this.getShopInfo(this.id);
        this.foodList(this.id);
    },
    mounted(){
    },
    computed:{
        cart_item(){
            // this.cart_list = this.$store.state.cart_list;
            return this.$store.state.cart_item;
        },
        total(){            
            return this.$store.state.sum;
        },
        cart_f_count(){
            return this.$store.state.f_count;
        }
    },
    methods:{
        // loadMore() {
        //     this.loading = true;
        //     setTimeout(() => {
        //         let last = this.list[this.list.length - 1];
        //         for (let i = 1; i <= 10; i++) {
        //         this.list.push(last + i);
        //         }
        //         this.loading = false;
        //     }, 2500);
        // },
        clear_cart(){
            this.$store.commit("clear_cart");
        },
        showCartList(){
            if(this.$store.state.f_count.length>0){
            this.show_cart=!this.show_cart;
            }
            else this.show_cart=0;
        },
        getShopInfo(id){
            var url =`http://127.0.0.1:3001/home/shoplist?id=`+id;
            this.$http.get(url).then(result=>{
                if(result.body.code==1){
                    this.shop = result.body.msg[0];
                }
            })
        },
        foodList(id){
            var url =`http://127.0.0.1:3001/foodlist?id=`+id;
            this.$http.get(url).then(result=>{
                if(result.body.code==1){
                    // console.log('foodlist',result.body.msg);
                    this.foodlist=this.foodlist.concat(result.body.msg);
                    
                    for(var i in this.foodlist){
                    //     //三元运算
                    //     this.food_sort.includes(this.foodlist[i].f_sort)?"":
                    //     this.food_sort.push(this.foodlist[i].f_sort);   //把数据中的 食品分类 添加到数组中,并且去重
                        if(this.foodlist[i].is_recom)
                        this.recom_food.push(this.foodlist[i]);    //添加到 本店推荐 数组中
                    }
                    this.showBysort();
                }
            })
        },
        showBysort(){
            console.log('食物列表foodlist',this.foodlist);
            for(var i in this.foodlist){
                //food_sort=['类名1','类名2','类名3'];
                //sub_food_sort=[[{},{}],[{},{}],[{},{}]],
                var now_sort= this.foodlist[i].f_sort;  //获得当前元素的f_sort
                // console.log("now_sort",now_sort);
                var sort_len = this.food_sort.length;           //目前 food_sort元素个数
                var sub_len = this.sub_food_sort.length;        //目前 sub_food_sort 按类分组数组 元素个数
                var new_arr= [];            //备用空数组
                if(this.food_sort.includes(now_sort))               //如果当前分类已存在
                    {
                        var sort_index = this.food_sort.indexOf(now_sort);  //则按照分类下标，把对象存进sub_food_sort中
                        // console.log('已存在分类'+this.food_sort[sort_index]);
                        // new_arr.push(this.foodlist[i]);
                        // console.log('new_arr',new_arr);
                        
                        this.sub_food_sort[sort_index].push(this.foodlist[i]);
                        
                    }
                else {
                    this.food_sort.push(now_sort);
                    // console.log('sub_len',sub_len);
                    
                    new_arr.push(this.foodlist[i]);
                    this.sub_food_sort.push(new_arr);
                    
                }
            }
        }
    },
    components:{
        counter
    }
}
</script>


<style lang='scss'>
$bg_color:#fff;
// 商家推荐
.shop_bg{
    background-color:$bg_color;
    display: flex;
    flex-direction:column;
    align-items:center;
    .shop_logo{
        width:20vw;
        img{width:100%;}
    }
    .shop_title{
        text-align: center;
        color:#333;
        font-size:18px;
        font-weight: 600;
        padding:10px 0;
    }
    .shop_rate{
        color:#666;
        line-height: 1.6rem;
    }
    .disc_note{
        width:78%;
        display: flex;
        flex-direction: column;
    }
    span{
        color:#999;
        font-size:12px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
}
.shop_banner{
    background: $bg_color;
    width:94%;
    padding:3% 3%;
    margin-top:3px;
    text-align: center;
    img{
        width:100%
    }
}
.recommend{
    background: $bg_color;
    width: 100vw;
    p.recom_head{ font-weight: 600;text-indent: 1em;}
    .rec_list{
        width:100%;
        ul{
            display: flex;
            overflow-x: auto;
        }
        ul,ul li{
            list-style: none;
            padding:0 2.4vw 2vw 0;
        }
        li:first-child{
            margin-left: 2.4vw;
        }
        li{
            margin:2.4vw 2.4vw 0 0;
            padding-bottom: 4vw;
            width: 34vw;
        }
        li .f_img{
            background: #f5f5f5;
            width:34vw;
            height:34vw;
            line-height: 24vw;
            overflow: hidden;
        }
        li .f_img img{object-fit:cover;width:100%;height:100%;}
        .rec_title{
            font-size: .8rem;
        }
        .rec_soldout{
            color:#999;
            font-size:.24rem;
            line-height: 1rem;
        }
        .buy_rec{
            display: flex;
            color:#ff5339;
            align-items:baseline;
            font-size: 1rem;
            justify-content: space-between;
            padding:1vw 0 0 0;
            .rec_base_price{
                font-size: .24rem;
                text-indent: .1rem;
            }
            .action_rec_btn{
                float: right;
            }
            .add_rec,.del_rec{
                background: #3190e8;
                border-radius: 50%;
                display: inline-block;
                font-size: 1.2rem;
                height:1.2rem;
                color:#fff;
                line-height: 1.2rem;
                text-align: center;
                width:1.2rem;
            }
            .del_rec{
                background:$bg_color;
                border:1px solid #3190e8;
                color:#3190e8;
            }
            .buy_count{
                color:#363636;
                // font-size: 1.2rem;
            }
        }
        .price_rec{
            font-size: 1.2rem;
        }
        .price_rec:before{
            content:"￥";
            font-size:1rem;
        }
    }
}
// 商品列表
.food{
    background: $bg_color;
    width: 100%;
    display: flex;
    .food_sort{
        background: #f5f5f5;
        width:20vw;
        ul{
            // height: 4rem;
            margin-right: 2vw;
        }
        .sort_item{
            font-size: .8rem;
            line-height: 2rem;
            padding:2vw 2.4vw;
        }
    }
    .food_list{
        position: relative;
        width:80vw;
        height: 100%;
        overflow-y:scroll;
        .food_list_container{
            height: 100%;
            overflow-y:auto;
            color:#999;
            padding:0 0 140px 0;
        }
        .sort_tag{
            color:#666;
        }
        .food_list_container dt{
            margin-left:2vw;
            padding:2vw 8vw 2vw 0;
            font-size: .8rem;
        }
        .food_list_container span{
            font-size: .6rem;
        }
        .food_show{
            padding:1.2vw 2vw;
            display: flex;
            .food_img{
                flex:1;
                width:24vw;
            }
            .food_img img{
                width:100%;
                object-fit: cover;
                border-radius: .5vw;
            }
            .food_info{
                padding:0 2vw;
                flex:2;
            }
            .food_name{
                color:#363636;
                font-size:1.1rem;
                font-weight: 700;        
            }
            .food_sub,.food_act{
                font-size:.5rem;
                padding:1.3vw 0 0;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                width:48vw;
            }
            .food_act{
                color:#f07373;
                padding:1vw 0 1vw 0;
                .rest{
                    background: rgba(255,76,13,.15);
                    color:#ff4c0d;
                    margin-left: .8vw;
                    vertical-align: middle;
                    padding:0 .6vw;
                }
            }
            
            .price{
                align-items: baseline;
                color:#ff5339;
            }
            .price span{font-size:1.2rem;}
            .price:before{
                content:'￥';
                font-size: 1rem;
            }
            span.sale_base,.old_price{
                font-size:.2rem;
            }
            .old_price{
                color:#999;
            }
            .old_price:before{
                content:'￥'
            }
            //计数器开始
            .active_btn{
                float: right;
                line-height:1.6rem;
                height: 1.4rem;
                display: flex;
            }
            .active_btn span{
                padding:.2vw 1vw;
                font-size: 1rem;
                color:rgba(0,0,0,.87);
                text-align: center;
                width: 7vw;
            }
            .del_cart a,.add_cart a{
                border:solid 1px #3190e8;
                background: #3190e8;
                border-radius: 50%;
                color:#fff;
                display: block;
                font-size: 1.3rem;
                text-align: center;
                line-height:1.3rem;
                width:1.3rem;
            }
            .del_cart a{
                background: $bg_color;
                color:#3190e8;
                font-size:2rem;
            }
            //计数器结束
        }
        
    }
}
// 订单列表
.order_list_fold,.order_list_expand{
    background: $bg_color;
    position:fixed;
    left:0;
    right:0;
    bottom:0;
}
.order_list_expand{
    position: fixed;
    bottom:26vw; 
    left:0;
    right:0;
}
.order_list_fold ul li,.food_box_fee{
    border-bottom: 1px solid #f2f2f2;
    font-size:1.1rem;
    list-style: none;
    margin:0 0 0 4vw;
    height: 14vw;
    line-height: 14vw;
    padding:0 4vw 0 0;
    display: flex;
}
.order_li{
    flex:5.5;
}
.order_account,.order_action{
    flex:2.5;
    text-align: right;
}
.order_action{
    flex:3
}
.requirement{
    background:#fffad6;
    border-top:1px solid #f9e8a3;
    text-align:center;
    font-size:.24rem;
    line-height:5vw;
}
.requirement .highlight{
    color:#FF5339
}
.clear_cart{
    background: #eceff1;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    padding:0 4vw;
    height: 10vw;
    //内部元素垂直居中
    align-items: center;
}
.clear_cart span:first-child{
    border-left:#3190e8 solid 5px;
    padding-left:1.3vw;
}
// 购物车
.cart{
    background: rgba(61,61,63,.9);
    color:#999;
    display: flex;
    position: fixed;
    bottom:0vw;
    left:0;
    right:0;
    height: 12vw;
    padding-left:21vw;
    .cart_img{
        border: 1.333333vw solid #444;
        border-radius: 50%; 
        height:11.333vw;
        width:11.333vw;
        display: flex;
        justify-content: center;
        position: absolute;
        left:2.4vw;
        bottom:1vw;
    }
    .my_car{
        background: radial-gradient(circle,#363636 6.266667vw,#444 0);
    }
    .cart_img:before{        
        content:'';
        position: absolute;
        top:0;
        left:0;
    }
    .cart_img>div{
        background-image:url('../../assets/img/cart.svg');
        background-position: center center;
        background-size:6vw;
        background-repeat: no-repeat;
        background-color: #3190e8;
        border-radius: 50%;
        color:#fff;
        text-align: center;
        width:11.333vw;
        height:11.333vw;
    }
    .cart_img>div>span{
        background: #f87622;
        border-radius: 8px;
        font-size: .6rem;
        line-height: 16px;
        position: absolute;
        left:30px;
        top:-6px;
        padding:0 5px;
        height:16px;
    }
    .price_fee{
        flex: 1;
        font-size:1rem;
        line-height: normal;
        padding:1vw 0 0 0;
    }
    .order_item{
        
    }
    .fee{
        font-size:.4rem;
    }
    .pay_order{
        background-color: #535356;
        color:#fff;
        flex:1;
        font-size:1rem;
        font-weight: 700;
        text-align: center;
        line-height: 12vw;
        // 文本不能被选择
        user-select: none;
        width:16vw;
    }
}
</style>
