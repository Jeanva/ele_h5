<template>
    <div>
        
        <!-- 统一头部 -->
        <!-- <HeaderView :ptitle='pageTitle'></HeaderView> -->
        <router-view></router-view>        
        <FooterView></FooterView>
    </div>
</template>

<script>
export default {
    props:[],
    data(){
        return{
            pageTitle:'地址',
            active:'',
            list:[ '周一','周二'],
            selected:'外卖',
            value:'',
            result:[{'title':'香锅'},{'title':'披萨'},{'title':'炒面'}],
            showPanel:false
        }
    },
    components:{
        // FooterView,
        // ShopView,
        // ShopFiter,
        // SortImg,
        // IndexAd
    },
    methods:{
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
    //    main_log(val) {
    //         console.log('main_log', val);
    //     },
    //     sub_log(val) {
    //         console.log('sub_log', val);
    //         this.$refs.target_1.collapse();
    //     }
    }
}
</script>
<style lang='scss'>
</style>
