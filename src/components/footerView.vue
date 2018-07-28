<template>
    <div>
        <mt-tabbar v-model="selected">
                <mt-tab-item id="home" @click.native='toHome'>
                <img slot="icon" src="../assets/logo.png">
                <!-- <img v-show='' slot='icon' src="../assets/img/elm_active.svg" alt=""> -->
                    外卖
                </mt-tab-item>
            
                <mt-tab-item id="order" @click.native='toOrder'>
                    <img slot="icon" src="../assets/logo.png">
                    订单
                </mt-tab-item>
            
                <mt-tab-item id="discover">
                    <img slot="icon" src="../assets/logo.png">
                    发现
                </mt-tab-item>
            
                <mt-tab-item id="user" to='/user' @click.native='toUser'>
                    <img slot="icon" src="../assets/logo.png">
                    我的
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
