<template>
    <div>
        <HeaderView :ptitle='pageTitle'></HeaderView>
        <div class='status_container'>
            <div class='shop_logo'><img src="" alt=""></div>
            <p class='ontime'>准时达订单</p>
            <p class='grey_notice'>当前恶劣天气不享受超时赔付</p>
            <p class='order_status'>订单已送达></p>
            <p class='grey_notice'>感谢您对饿了么的信任，期待在此光临</p>
            
        </div>
        
            <div class='con_process' v-if='in_process'>                
                <div class='pay_dlvy'>
                    <div class='dlvy'>
                        <div class='shop_branch'>
                            <span><img src=''></span>
                            <span>必胜客宅急送</span>
                            <span class='branch'>(南方商城店)</span>
                        </div>
                    </div>
                    <div class='order_content'>
                        <div class="dlvy">
                            <span>经典意式肉酱面(中份)</span><span>x1</span> <span> $35</span>
                        </div>
                        <div class="dlvy">
                            <span>莴笋炒肉丝(中份)</span><span>x1</span> <span> $35</span>
                        </div>
                        <div class="dlvy">
                            <span>大米饭单点不送</span><span>x1</span> <span> $35</span>
                        </div>
                        <div class="dlvy">
                            <span>蒜苗炒肉(中份)</span><span>x1</span> <span> $35</span>
                        </div>
                        <div class="dlvy">
                            <span>包装 餐盒</span> <span>￥1.5</span>
                        </div>
                        <div class="dlvy">
                            <span>
                                <span class='fengniao'>商家</span> <span>配送费</span>
                            </span>  
                            <span>￥1.5</span>
                        </div>
                        <div class="dlvy">
                            <span>在线支付立减优惠</span>  <span class='red_font'>-￥25</span>
                        </div>
                        <div class="dlvy">
                            <span>冰饮料1份</span>  <span class='red_font'>￥0</span>
                        </div>
                        <div class="dlvy">
                            <span>红包</span><span  class='red_font'>-￥2.6</span>
                        </div>
                        <div class="dlvy">
                            <span class='call_blue'>联系商家</span> <span class='font-bold'>实付￥<span class='order_sum'>33.5</span></span>
                        </div>
                    </div>
                </div>

                <div class='pay_dlvy'>
                    <div class='dlvy'>
                        <div class='shop_branch'>
                            <span>配送信息</span>
                        </div>
                    </div>
                    <div class="order_content">
                        <div class="dlvy">
                            <div class='fn_delivery'>
                                送达时间
                            </div>
                            <span class='dark_grey'>尽快送达</span>
                        </div>
                        <div class="dlvy">
                            <div class='fn_delivery'>
                                收货地址
                            </div>
                            <span class='dark_grey font-right'>
                                <p>月明小区嘎嘎嘎29弄602</p>
                                <p>赵达志 15000000000</p>
                            </span>
                        </div>
                        <div class="dlvy">
                            <div class='fn_delivery'>
                                配送方式
                            </div>
                            <span class='dark_grey'>
                                蜂鸟专送
                            </span>
                        </div>
                        <div class="dlvy">
                            <div class='fn_delivery'>
                                配送骑手
                            </div>
                            <span class='dark_grey'>
                                <span class='call_blue'>联系骑手</span>
                                <router-link to='#' class='left_border'>云强></router-link>
                            </span>
                        </div>
                    </div>
                </div>
    
                <div class='pay_dlvy'>
                    <div class='dlvy'>
                        <div class='shop_branch'>
                            <span>订单信息</span>
                        </div>
                    </div>
                    <div class="order_content">
                        <div class="dlvy">
                            <div class='fn_delivery'>
                                订单号
                            </div>
                            <span class='dark_grey right_border'>9866164651651654646</span>
                            <span class='blue_font left_border'>复制</span>
                        </div>
                    
                        <div class="dlvy">
                            <div class='fn_delivery'>
                                支付方式
                            </div>
                            <span class='dark_grey'>在线支付</span>
                        </div>
                        <div class="dlvy">
                            <div class='fn_delivery'>
                                下单时间
                            </div>
                            <span class='dark_grey'>2018-10-06 14：01</span>
                        </div>
                    </div>
                </div>

                <div class='cart'>
                    <div class='price_fee'>
                        <p class='order_item' >￥25.8</p>
                    </div>
                    <div class="pay_order_active" >去支付</div>
                </div>
            </div>
            
            <div class='con_invalid' v-else-if='!in_process'>
                购物车是空的，返回
            </div>
        </div>
    
</template>

<script>
export default {
    data(){
        return{
            in_process:true,
            // pageTitle:'支付'
        }
    },
}
</script>
<style>

</style>
