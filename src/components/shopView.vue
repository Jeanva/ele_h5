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
                                        <div class='star_bg'><img src="../assets/rate_bg.svg" alt=""></div>
                                        <div class='star_rate' style='width:20%'><img src="../assets/rate.svg" alt=""></div>
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
                            <div :class='[{actives:true, act_list:showPanel}]'>
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
                                <div class='special' v-show='i.is_dsc'><span class='disct_tag1'></span>单品折扣</div>
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

export default {
    data(){
        return{
            // pageTitle:'地址',
            active:'',
            showPanel:false,
            // shoplist:[]
        }
    },
    props:['shops'],
    mounted(){
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
        }
        
    }
}
</script>
<style lang='scss'>
// $font-1:.23rem;
// $font-ad:.16rem;
// $font-color1:#999;
// $bg_color:#fff;
// .search{
//     margin-top:-20px;
//     clear:both;
//     height:52px;
// }
// .search:after{
//     display:block;
//     clear:both;
//     content:"";
//     visibility:hidden;
//     height:0
// }

// .shop_row{
//     background: $bg_color;
//     .shop_cell{
//         border-bottom:#ccc 1px solid;
//         display:flex;
//         flex-direction: row;
//         padding:3.2vw 2.4vw 1vw;
//         img{
//             border:1px solid #ddd;
//             width:18vw;
//         }
//         .rate_soldout{
//             display:flex
//         }
//         .shop_info{
//          padding-left:2.4vw;
//          justify-content:space-between;
//          flex:1;
//          .shop_name{
//              display:flex;
//              justify-content:space-between;
//              span{
//                  line-height:normal;
//                  padding:.222vw .666vw;
//              }
//              span:after{
//                  background:yellow;
//                  content:'品牌';
//                  font-size: .43rem;
//              }
//              ul{
//                  display: inline;
//              }
//              ul li{
//                  display: inline;
//                  border: 1px solid #eee;
//                  font-size:$font-ad;
//                  color:$font-color1;
//              }
//          }
//          .rate_sold{
//              font-size:$font-1;
//              display: flex;
//              padding:.56em 0  0;
//          }
//          .rating{
//             position: relative;
//             img{ border:none; height:10px;}
//             .star_rate{
//                 position:absolute;
//                 top:0;
//                 left:0;
//                 width:80%;
//                 overflow: hidden;
//             }            
//          }
//          .show_active{
//             font-size:.26rem;        
//             color:$font-color1;    
//         }
//         .soldout{
//             font-size:.26rem;
//         }
//         .fengniao{
//             background: #1196EE;
//             border-radius: 2px;
//             font-size:$font-ad;
//             color:#fff;
//             float: right;
//             }
// .discount,.delivery_fee,.distance{
//     display: inline;
//     font-size: $font-1;
//     color:$font-ad;
// }
// .delivery_fee span{
//     padding:0 .3rem;
//     border-right:1px solid $font-color1;
// }
// .delivery_fee span:last-child{
//     border: none;
// }
// .distance{
//     color:$font-color1;
// }
// .discount{
//     display: flex;
//     width:50vw;
//     span.disct_mj{
//         white-space: nowrap;
//         text-overflow: ellipsis;
//         overflow: hidden;
//         }
// }
// .special{
//     display: block;
//     clear: both;
//     font-size:$font-1;
// }
// .actives{
//     display: block;
//     padding:.2em 0 0;
// }
// .deliver{
//     // 自适应弹性布局
//     display:flex;
//     align-items:center;
//     justify-content:space-between;
//     // height: 1.6em;
//     padding:.6rem 0 .2rem 0;
// }
// .delivery_fee{
//     flex:1
// }
// .discount,.special{
//     padding:.23em;
// }
// .disct_tag,.disct_tag1,.disct_new,.disct_new,.disct_first{
//     color:#fff;
//     padding:1px;
//     margin-right:.5em;
// }
// .disct_tag:after,.disct_new:after,.disct_first:after,.disct_tag1:after{
//     //满减
//     background: rgb(240, 115, 115);
//     border-radius: 4px;
//     font-size:.1rem;
//     padding:0 .1rem;
//     content:'满';
// }
// .disct_new:after{
//     background:rgb(0, 183, 98);
//     content: '新';
//     }
// .disct_first:after{background: rgb(112, 188, 70);
//     content:'首';
//     }
// .disct_tag1:after{
//     background:rgb(241, 136, 79);
//     content:'折';
// }
// .act_dis{  
//     display: flex;
//     border-top:#f2f2f2 1px solid;
//     margin:.4rem 0;
//     justify-content: space-between;
// }
// .show_active{
//     padding:.38rem;
//     text-align: right;
// }
// .show_active img{
//     width:.7rem;
//     border:none;
//     padding:0 0 0 .2rem;
// }
// .act_list div:not(:first-child) {
//     display: none;
// }
// .collapse{
//     //折叠图标旋转动画
//     transform:rotate(180deg);
// }
//         }
//     }
// }
</style>
