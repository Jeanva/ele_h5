<template>
    <div>
        <section v-for='i in shops'>
            <div class='shop_row'>
                <div class='shop_cell'>
                    <div @click='toShopinfo(i.sid)'>
                        <img :src="i.sh_logo" alt="">
                    </div>
                    <div class='shop_info'>
                        <section>
                            <div class='shop_name' >
                                <h4  @click='toShopinfo(i.sid)'><span v-show='i.is_brand'></span>{{i.sh_name}}
                                </h4>
                                <ul>
                                    <li v-show='i.is_grt'>保</li>
                                    <li v-show='i.is_ad'>广告</li>
                                    <li v-show='i.is_reciept'>票</li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            
                            <div class='deliver'>
                                <div class='rate_soldout'>
                                    <div class='rating' style='align-items:center'>
                                        <svg width="60" height="10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M54.017 8.072l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L53.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm-48 0L3.465 9.633c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L5.63.589c.213-.515.557-.523.774 0L7.55 3.352l2.982.237c.556.044.67.368.24.736L8.497 6.269l.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L17.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L29.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L41.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56z" fill="#EEE" fill-rule="evenodd"/>
                                        </svg>
                                        <svg :width='60*i.star/5' height='10' style='margin-left:-65px;'><!--星级打分-->
                                            <defs>
                                                <linearGradient x1="0%" y1="50%" y2="50%" id="a">
                                                <stop stop-color="#FFDE00" offset="0%"/>
                                                <stop stop-color="#FFB000" offset="100%"/>
                                                </linearGradient>
                                            </defs>
                                            <path d="M54.017 8.072l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L53.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm-48 0L3.465 9.633c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L5.63.589c.213-.515.557-.523.774 0L7.55 3.352l2.982.237c.556.044.67.368.24.736L8.497 6.269l.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L17.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L29.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L41.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56z" fill="url(#a)" fill-rule="evenodd"/>
                                        </svg>
                                        <!--<div class='star_bg'>
                                             <img src="../assets/rate_bg.svg" alt=""> 
                                        </div>
                                        <div class='star_rate' style='width:20%'></div>
                                        -->
                                    </div>
                                    <span class='soldout'><span>{{i.star}}</span> <span>月售{{i.sold_month}}单</span> </span>
                                </div>
                                <div class='fengniao' v-show='i.is_fengniao'>蜂鸟专送</div>
                            </div>
                            
                        </section>
                        <section>
                            <div class='deliver'>
                                <div class='delivery_fee'><span>￥{{i.min_price}}起送</span><span>配送费{{i.distance| fee_delivery}}</span></div>
                                <div class='distance'>{{i.distance}}米|{{i.distance | time_delivery}}</div>
                            </div>
                        </section>
                        <section class='act_dis'>
                            <div :class='{actives:true, act_list:showPanel}'>
                                <div class='discount' v-show='i.is_manjian'>
                                    <span class='disct_tag'></span>
                                    <span class='disct_mj'>满48减28，满78减50，满98减60</span>
                                </div>
                                <div class='discount' >
                                    <span class='disct_new'></span>
                                    <span>新用户下单立减</span>
                                </div>
                                <div class='discount' v-show='i.is_first_dsc'>
                                    <span class='disct_first'></span>
                                    <span>本店新用户立减1元</span>
                                </div>
                                <div class='special' v-show='i.is_dsc'>
                                    <span class='disct_tag1'></span>单品折扣
                                </div>
                            </div>
                            <div class='show_active' @click='showHide'>
                                <span>18个活动</span>
                                <img :class='{collapse:showPanel}' src="../assets/img/expand.svg" alt="">
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Bus from '../Bus'
export default {
    data(){
        return{
            active:'',
            showPanel:true,
        }
    },
    props:['shops'],
    created(){
        // this.showHide();
    },
    updated(){
        // Bus.$emit('shoplist',this.shoplist);
        //  console.log(this.shoplist);
        // Bus.$on('distanceSort',content=>{
        //     console.log('content',content);
        //     // this.shops = content;
        //     this.shoplist = content;
        //     console.log('this.shops',this.shoplist);
        // });
    },
    
    methods:{
        toShopinfo(id){
            this.$router.push({name:'Shop',params:{id}});
        },
        loadMore() {
            this.loading = true;
            setTimeout(() => {
                let last = this.list[this.list.length - 1];
                for (let i = 1; i <= 10; i++) {
                this.list.push(last + i);
                }
                this.loading = false;
            }, 2500);
            },
        showHide:function(){
            this.showPanel=!this.showPanel;
            console.log(this.showPanel);
        }
        
    }
}
</script>
<style lang='scss'>
.collapse{
    //折叠图标旋转动画
    transform:rotate(180deg);
}
</style>
