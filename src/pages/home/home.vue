<template>
    <div>
        <!-- <Header title='地址'>
            <img src="../../assets/img/goback.svg" slot='goback' alt="">
            <img src="../../assets/img/setting.svg" slot='set' alt="">
        </Header> -->
        
        <!-- <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="item in list">{{ item }}</li>
        </ul> -->
        <HeaderView :ptitle='pageTitle'></HeaderView>
        <router-view></router-view>
        <!-- <router-link to="/shop">to shop</router-link> -->
        
        <FooterView></FooterView>
    </div>
</template>

<script>
// import Header from '../../components/header'
import HeaderView from '../../components/headerView'
import FooterView from '../../components/footerView.vue'

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
        // Header
        HeaderView,
        FooterView,
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
