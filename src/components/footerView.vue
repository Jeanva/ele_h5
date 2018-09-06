<template>
    <div>
        <mt-tabbar fixed v-model="selected">
                <router-link to="/home" class="link"><mt-tab-item id="home">
                <img slot="icon" src="../assets/logo.png">
                <!-- <img v-show='' slot='icon' src="../assets/img/elm_active.svg" alt=""> -->
                    外卖
                </mt-tab-item></router-link>
            
                <router-link to="/order" class="link"><mt-tab-item id="order">
                    <img slot="icon" src="../assets/logo.png">
                    订单
                </mt-tab-item></router-link>
            
                <router-link to="/shop" class="link"><mt-tab-item id="discover">
                    <img slot="icon" src="../assets/logo.png">
                    发现
                </mt-tab-item></router-link>
            
                <router-link to="/user" class="link"><mt-tab-item id="user" >
                    <img slot="icon" src="../assets/logo.png">
                    我的
                </mt-tab-item></router-link>
        
        </mt-tabbar>
    </div>
</template>

<script>
export default {
    data(){
        return {
        selected:'home',

        }
    },
    methods:{
        toUser:function(id){
            this.$router.push({
                name:'User'
            });
            console.log(id);
        },
        toHome:function(){
            this.$router.push({
                name:'Home'
            });
        },
        toOrder:function(){
            this.$router.push({
                name:'Order'
            })
        }
    },
    watch:{
        selected:function(val,oldval){
            console.log(val);
        }
    }
}
</script>


<style>
@import url("//unpkg.com/mint-ui/lib/style.css");
.link{width:100%;}
</style>
