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
        <div class='search'>
            <mt-search v-model="value">
                <mt-cell
                    v-for="item in result"
                    :title="item.title"
                    :value="item.value">
                </mt-cell>
            </mt-search>
        </div>
        
        <SortImg></SortImg>
        
        <IndexAd></IndexAd>

        <div style='display:block;text-align:center'>--推荐商家--</div>
        <shop-fiter></shop-fiter>
        
        <ShopView></ShopView>
        <!-- <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
      direction="rt" class="pb" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;"
      style="left:30px;">
            <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
            <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
            <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
        </mt-palette-button> -->
        
    </div>
</template>

<script>
// import Header from '../../components/header'
import HeaderView from '../../components/headerView'
import FooterView from '../../components/footerView.vue'
import ShopView from '../../components/shopView.vue'
import ShopFiter from '../../components/shopfilter'
import SortImg from '../../components/sortImg'
import IndexAd from '../../components/adindex'

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
        ShopView,
        ShopFiter,
        SortImg,
        IndexAd
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
