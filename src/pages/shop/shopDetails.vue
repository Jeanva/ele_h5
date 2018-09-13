<template>
    <div>
        <div class='shop_bg'>
            <div class='shop_logo'><img :src="shop.sh_logo" alt=""></div>
            <span class='shop_title'>{{shop.sh_name}}</span>
            <span>评论{{shop.rate}} 月售{{shop.sold_month}} 蜂鸟专送约{{shop.distance}}</span>
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
                                <img :src="i.f_img_md" alt="">
                                <p class='rec_title'>{{i.f_name}}</p>
                                <p class='rec_soldout'>月售{{i.sold_count}} 好评率100%</p>
                                <div class='buy_rec'>
                                    <div>
                                        <span class='price_rec'>{{i.min_p}} </span><span class='rec_base_price'>起</span>
                                    </div>
                                    <span class='action_rec_btn'>
                                        <a href="#"><span class='del_rec'>-</span></a>
                                        <span class='buy_count'>1</span>
                                        <a href="#"><span class='add_rec'>+</span></a>
                                    </span>
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
                                            <div class='active_btn'>
                                                <div class='del_cart'><a href='#'>-</a></div>
                                                <span>1</span>
                                                <div class='add_cart'><a href="#">+</a></div>
                                            </div>
                                        </section>
                                    </section>
                                </div>
                            </dd>
                            
                        <dt>
                            <strong class='sort_tag'>热销</strong>
                            <span>大家都喜欢2</span>
                        </dt>
                            <dd>
                                <div class='food_show'>
                                    <span class="food_img"> <img src="../../assets/logo.png" alt=""></span>
                                    <section class='food_info'>
                                        <p class='food_name'>世界杯单人套餐</p>
                                        <p class='food_sub'>每份锅贴配1包酱包，可加醋加辣，加盐加糖</p>
                                        <p class='food_sub'><span>月售3690份</span><span>好评率99%</span></p>
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
                            <dd>
                                <div class='food_show'>
                                    <span class="food_img"> <img src="../../assets/logo.png" alt=""></span>
                                    <section class='food_info'>
                                        <p class='food_name'>世界杯单人套餐</p>
                                        <p class='food_sub'>每份锅贴配1包酱包，可加醋加辣，加盐加糖</p>
                                        <p class='food_sub'><span>月售3690份</span><span>好评率99%</span></p>
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
                            <dt>
                            <strong class='sort_tag'>热销</strong>
                            <span>大家都喜欢3</span>
                        </dt>
                            <dd>
                                <div class='food_show'>
                                    <span class="food_img"> <img src="../../assets/logo.png" alt=""></span>
                                    <section class='food_info'>
                                        <p class='food_name'>世界杯单人套餐</p>
                                        <p class='food_sub'>每份锅贴配1包酱包，可加醋加辣，加盐加糖</p>
                                        <p class='food_sub'><span>月售3690份</span><span>好评率99%</span></p>
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
            <div class='order_list_fold'>
                <div class='requirement'>还差<span class='highlight'>1</span>元</div>
                <div class='clear_cart'>
                    <span>已选商品</span> <span><a href=''>清空</a></span>
                </div>
                <div>
                    <ul>
                        <li>
                            <span class='order_li'>此处为订单列表元素</span>
                            <span class='order_account'>1</span>
                            <span class='order_action'>-1+</span>
                        </li>
                    </ul>
                    <div class='food_box_fee'>餐盒</div>
                </div>
            </div>
            <div class='cart'>
                <div class='cart_img my_car'></div>
                <div class='price_fee'>
                    <p class='order_item'>未选购商品</p>
                    <p class='fee'>另需配送费3.8元</p>
                </div>
                <a class='pay_order'>￥20起送</a>
            </div>
        </footer>
    </div>
</template>

<script>
import {base64} from 'js-base64';
export default {
    data(){
        return{
            ptitle:"商铺",
            selected:'1',
            target:'烧烤',
            food_sort:[],
            recom_food:[],
            // list:['花生','瓜子','矿泉水','啤酒','饮料','小板凳'],
            //从首页shoplist 传来的值
            id:this.$route.params.id,
            shop:'',
            foodlist:[],
        }
    },
    created(){
        // console.log(this.id);
        this.getShopInfo(this.id);
        this.foodList(this.id);
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
        getShopInfo(id){
            var url =`http://127.0.0.1:3001/home/shoplist?id=`+id;
            this.$http.get(url).then(result=>{
                if(result.body.code==1){
                    console.log(result.body.msg);
                    this.shop = result.body.msg[0];
                }
            })
        },
        foodList(id){
            var url =`http://127.0.0.1:3001/foodlist?id=`+id;
            this.$http.get(url).then(result=>{
                if(result.body.code==1){
                    console.log('foodlist',result.body.msg);
                    this.foodlist=this.foodlist.concat(result.body.msg);
                    
                    for(var i in this.foodlist){
                        this.food_sort.push(this.foodlist[i].f_sort);   //把数据中的 食品分类 添加到数组中
                        if(this.foodlist[i].is_recom)
                        this.recom_food.push(this.foodlist[i]);    //添加到 本店推荐 数组中
                    }
                    console.log('recom',this.recom_food);
                }
            })
        }
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
        li img{
            background: #f5f5f5;
            width:34vw;
        }
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
            }
            .food_img img{
                width:24vw;
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
        }
        
    }
}
// 订单列表
.order_list_fold,.order_list_expand{
    background: $bg_color;
    position:fixed;
    bottom:26vw; 
    left:0;right:0;
    bottom:0;
}
.order_list_expand{
    position:fixed;
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
    bottom:14vw;
    left:0;
    right:0;
    height: 12vw;
    padding-left:21vw;
    .cart_img{
        background: #3190e8;
        border: 1.333333vw solid #444;
        border-radius: 50%; 
        height:11.333vw;
        width:11.333vw;
        position: absolute;
        left:2.4vw;
        bottom:1vw;
    }
    .my_car{
        background: radial-gradient(circle,#363636 6.266667vw,#444 0);
    }
    .cart_img:before{
        background-image:url('../../assets/img/cart.svg'); 
        background-size:6vw;
        content:'';
        position: absolute;
        top:0;
        left:0;
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
