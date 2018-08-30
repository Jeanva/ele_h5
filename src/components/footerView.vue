<template>
    <div>
        
        <mt-tabbar v-model="selected">
                <mt-tab-item id="home">
                <router-link to="/home"><img slot="icon" src="../assets/logo.png">
                <!-- <img v-show='' slot='icon' src="../assets/img/elm_active.svg" alt=""> -->
                    外卖
                    </router-link>
                </mt-tab-item>
            
                <mt-tab-item id="order">
                   <router-link to="/order"> <img slot="icon" src="../assets/logo.png">
                    订单</router-link>
                </mt-tab-item>
            
                <mt-tab-item id="discover">
                    <router-link to="/shop"><img slot="icon" src="../assets/logo.png">
                    发现</router-link>
                </mt-tab-item>
            
                <mt-tab-item id="user" >
                    <router-link to="/user"><img slot="icon" src="../assets/logo.png">
                    我的</router-link>
                </mt-tab-item>
        
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

</style>
