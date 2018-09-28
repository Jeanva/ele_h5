<template>
    <div>
        <HeaderView :ptitle='pageTitle'></HeaderView>
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
                    
                    <div class='food_sort' ref='left'>
                        <ul v-model='target'>
                            <li class='sort_item' v-for='item in food_sort' id='item.i'>
                                <router-link to='#'>{{item}}</router-link>
                            </li>
                        </ul>
                    </div>
                    
                    <section class='food_list' ref='right'>
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
                                            <span>每份限{{i.max_p}}份优惠</span>
                                            <span class='rest'>剩{{i.rest_count}}份</span>
                                        </div>
                                        <section>
                                            <span class='price'>
                                                <span>{{i.price}}</span>
                                                <span class='sale_base'>起</span>
                                                <del class='old_price'>{{i.min_p}}</del>
                                            </span>
                                            <counter :item='i'></counter>
                                            
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
            <div v-show="show_cart" style="top:0px;bottom:0;left:0;right:0; position:fixed; background-color:rgba(0,0,0,.5)">
            </div>
            <div class='order_list_fold' >
                <div class='requirement'>还差<span class='highlight'>{{shop.min_price}}</span>元</div>
                <div v-show="show_cart">
                    <div class='clear_cart'>
                        <span>已选商品</span> <span @click="clear_cart">清空</span>
                    </div>
                    <div>
                        <ul>
                            <li v-for="(i,index) in this.$store.state.cart_list">
                                <span class='order_li'>{{i.f_name}}</span>
                                <span class='order_account'>{{cart_f_count[index] * i.price}}</span>
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
                <div class='pay_order' v-if="!cart_item">￥20起送</div>
                <div class="pay_order_active" v-else-if='cart_item'>去结算</div>
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
            food_sort:[],   //食品类别
            sub_food_sort:[],       //sub_food_sort=[[{},{}],[{},{}],[{},{}]],
            recom_food:[],
            // list:['花生','瓜子','矿泉水','啤酒','饮料','小板凳'],
            //从首页shoplist 传来的值
            id:this.$route.params.id,
            shop:'',
            foodlist:[],
            show_cart:false,
            cart_list:[],
            listHeight:[],//列表高度
            scrollY:0,  //时时获得当前y的高度
            clickEvent:false,
        }
    },
    created(){
        this.getShopInfo(this.id);
        this.foodList(this.id);
    },
    mounted(){
        this.$nextTick(()=>{
            this._initScroll()
            this._getHeight()
        });
    },
    computed:{
        //商品总数量
        cart_item(){
            // this.cart_list = this.$store.state.cart_list;
            return this.$store.state.cart_item;
        },
        total(){            
            return this.$store.state.sum;
        },
        cart_f_count(){
            return this.$store.state.f_count;
        },
        tmp_shop_sort(){
            return this.food_sort;
        },

        currentIndex(){
            for(let i =0;i<this.listHeight.length;i++){
                let height = this.listHeight[i];
                let height2 = this.listHeight[i+1];
                //当height2不存在的时候,或者落在height和height2之间的时候，直接返回当前索引
                //>=height,是因为一开始this.scrollY=0 , height=0;
                if(!height2 ||(this.scrollY >= height && this.scrollY <height2)){
                    if(this.clientHeight){
                        return i+1;
                    }
                    else{ return i}
                }
            }
            return 0
        },
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
            this.show_cart = false;
            this.sub_food_sort=[];
            console.log('sub_food_sort',this.sub_food_sort);
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
                    this.foodlist=this.foodlist.concat(result.body.msg);
                    
                    for(var i in this.foodlist){
                      //把数据中的 食品分类 添加到数组中,并且去重
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
                var sort_len = this.food_sort.length;           //目前 food_sort元素个数
                var sub_len = this.sub_food_sort.length;        //目前 sub_food_sort 按类分组数组 元素个数
                var new_arr= [];            //备用空数组
                if(this.food_sort.includes(now_sort))               //如果当前分类已存在
                    {
                        var sort_index = this.food_sort.indexOf(now_sort);  //则按照分类下标，把对象存进sub_food_sort中
                        
                        this.sub_food_sort[sort_index].push(this.foodlist[i]);
                    }
                else {
                    this.food_sort.push(now_sort);
                   
                    new_arr.push(this.foodlist[i]);
                    this.sub_food_sort.push(new_arr);
                    
                }
            }
        },
        _initScroll(){
            this.lefts = new BetterScroll(this.$ref.left,{ click:true});
            this.rights = new BetterScroll(this.$ref.right,{probeType:3});  //探针效果，时时获取滚动效果
            //rights 这个对象监听事件，时时获取位置pos.y
            this.rights.on("scroll",(pos)=>{
                this.scrollY = Math.abs(Math.random(pos.y));
            });
        },
        _getHeight(){
            let rightItems = this.$refs.right.getElementsByTagName('dd');
            let height = 0;
            this.listHeight.push(height);
            for(let i = 0;i<rightItem.length;i++){
                let item = rightItem[i];
                height+=item.clientHeight;
                this.listHeight.push(height);
            }
        },
        selectItem(){
            this.clickEvent = true;
            //在better-scroll的派发事件的event和普通浏览器的点击事件event有个属性区别_constructed
            //在浏览器原生点击事件中，没有_constructed,所以当时当时浏览器监听到该属性时return
            if(!event._constructed){
                return
            }else{
                let rightItems = this.$refs.right.getElementsByTagName('dd');
                let el = rightItems[index];
                this.rights.scrollToElement(el,3000);
            }
        },
    },
    components:{
        counter
    }
}
</script>


<style lang='scss'>

</style>
