<template>
    <div>
        <HeaderView :ptitle='pageTitle' showBack='true'></HeaderView>
        <div class='confirm_container'>
            <div class='con_process' v-if='in_process'>
                <div class='order_address'>
                    <p>订单配送至</p>
                    <p class='address_big'>北长城亦府莲花路联华国际广场16楼</p>
                    <p><span>{{uname}}(女士)</span><span> {{phone_num}}</span></p>
                </div>
                <div class='pay_dlvy'>
                    <div class='dlvy'>
                        <div class='fn_delivery'>
                            <span>送达时间</span>
                            <div class='fengniao'>蜂鸟专送</div>
                        </div><span class='blue_link'>尽快送达({{due_time}}分前送达)</span>
                    </div>
                    <div class='dlvy'>
                        <span>支付方式</span>
                        <span class='blue_link'>在线支付</span>
                    </div>
                </div>
                
                <div class='pay_dlvy'>
                    <div class='dlvy'>
                        <div class='shop_branch'>
                            <span>必胜客宅急送</span>
                            <span class='branch'>(南方商城店)</span>
                        </div>
                    </div>
                    <div class='order_content'>
                        <div class="dlvy" v-for='i in cart_list'>
                            <img :src='i.f_img_sm'>
                            <span class='food_name'>{{i.f_name}}哈哈哈哈啊哈哈哈哈哈哈哈哈啊哈哈</span>
                            <span class='food_count'>x{{i.count}}</span> 
                            <span class='food_price'>￥{{i.price}}</span>
                        </div>
                        <div class="dlvy">
                            <span class='package'>餐盒</span> <span>￥1.5</span>
                        </div>
                        <div class="dlvy">
                            <span class='shop_owner'>配送费</span>
                            <span>￥1.5</span>
                        </div>
                        <div class='dlvy'>
                            <span class='man_disct'>在线支付立减优惠</span>
                            <span>-10</span>
                        </div>
                        <div class="dlvy">
                            <span>红包</span><span class='red_pocket'>暂时只在饿了么app中支持</span>
                        </div>
                        <div class="dlvy">
                            <span class='grey_notice info_desc'>优惠说明</span> 
                            <span>小计￥<span class='order_sum'>1.5</span></span>
                        </div>
                    </div>
                </div>

                <div class='pay_dlvy member'>
                    <div class="order_content">
                        <div class="dlvy">
                            <div class='fn_delivery'>
                                <p>成为超级会员，本单立减5元</p>
                                <p class='grey_notice'>每月送你20元无门槛红包</p>
                            </div>
                            <span>￥16</span>
                            <span>
                                <svg width='20' height='20' fill='#ddd'>
                                    <svg viewBox="0 0 120 120" id="select" width="20px" height="100%"><circle cx="60" cy="60" r="60"></circle><path fill="#FFF" d="M63.84 84.678a1.976 1.976 0 0 1-.387.545l-7.975 7.976a1.996 1.996 0 0 1-2.829-.005L24.172 64.716a2.005 2.005 0 0 1-.005-2.828l7.976-7.976a1.996 1.996 0 0 1 2.828.005l19.015 19.015L91.498 35.42a1.991 1.991 0 0 1 2.823 0l7.976 7.977c.784.784.78 2.043 0 2.823L63.84 84.678z"></path></svg>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>

                <div class='pay_dlvy'>
                    <div class="dlvy">
                        <div class='fn_delivery'>
                            <span>餐具份数</span>
                            <span><span><img src="data:image/png;base64,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" alt="" class="tableware-3N_Pn"></span>马上助力环保</span>
                        </div>
                        <span><router-link to='#'>未选择 ></router-link></span>
                    </div>
                
                    <div class="dlvy">
                        <div class='fn_delivery'>
                            <span>订单备注</span>
                        </div>
                        <span><router-link to='#'>口味、偏好 ></router-link></span>
                    </div>
                    <div class="dlvy">
                        <div class='fn_delivery'>
                            <span>发票信息</span>
                        </div>
                        <span><router-link to='#'>不需要开发票</router-link></span>
                    </div>
                </div>

                <div class='cart'>
                    <div class='price_fee'>
                        <p class='order_item' >￥{{this.$store.state.sum}}</p>
                    </div>
                    <div class="pay_order_active" @click='payOrder'>去支付</div>
                </div>
            </div>
<!--             
            <div class='con_invalid' v-else-if='!in_process'>
                购物车是空的，返回
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            in_process:true,
            pageTitle:'支付',
            cart_list:[],
            due_time:null,
            o_date:null,
            uname:'',
            uid:null,
            phone_num:null,
        }
    },
    created(){
        console.log('sum',this.$store.state.sum);
        console.log('cart_list',this.$store.state.cart_list);
        // console.log(sessionStorage);
        this.getOrderTime();
        this.getSendInfo();
        this.getUserInfo();
    },
    methods:{
        getUserInfo(){
            if(sessionStorage){
                this.uname=sessionStorage.uname;
                this.phone_num = sessionStorage.p_num;
                this.uid= sessionStorage.uid;
            }
        },
        getOrderTime(){
            let order_time = new Date();    //下单时间
            this.o_date = order_time.toLocaleString();
            console.log(order_time,this.o_date);
            let dueTime =order_time.getTime()+1800*1000;  //下单时间30分钟后时间戳
            let tmp_time = new Date(dueTime);                   //获得目标时间
            this.due_time = tmp_time.getHours()+":"+tmp_time.getMinutes();
        },
        getSendInfo(){
            //给服务器准备数据，sid,fid,price,sum,size
            this.$store.state.cart_list.forEach(
                function(value,index){
                console.log('value',value);
                // var tmp_v = {};//空对象
                var {fid,price,size,sid}=value;
                console.log('fid,price,size',fid,price,size,sid);
                // this.cart_list.push({"fid":fid,"price":price,"size":size});
                }
                
            );
            
        },
        payOrder(){
            console.log('触发提交');
            var url='http://127.0.0.1:3001/orderpay/';
            var obj = {cart_list:this.cart_list,o_date:this.o_date,uid:this.uid};
            // console.log(obj,'obj.cart_list类型',obj.cart_list.constructor===Array);
            this.$http.post(url,obj,{emulateJSON:true})
            .then(result=>{
                if(result.body.code==1)
                console.log('发送完毕',result.body.msg);
            });
        }
    }
}
</script>
<style>

</style>
