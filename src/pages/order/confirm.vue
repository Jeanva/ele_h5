<template>
    <div>
        <div class='confirm_container'>
            <div class='con_process' v-if='in_process'>
                <div class='order_address'>
                    <p>订单配送至</p>
                    <p class='address_big'>北长城亦府莲花路联华国际广场</p>
                    <p>赵丽颖(女士) 15000000000</p>
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
    </div>
</template>

<script>
export default {
    data(){
        return{
            in_process:true,
        }
    },
}
</script>
<style>

</style>
