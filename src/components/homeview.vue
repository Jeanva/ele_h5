<template>
    <div class="homeview">
        <div class='search'>
            <mt-search v-model="value">
                <mt-cell
                    v-for="item in result"
                    :title="item.title"
                    :value="item.value">
                </mt-cell>
            </mt-search>
        </div>
        
        <SortImg :icons='icon'></SortImg>
        <IndexAd :subbanner='mdImg'></IndexAd>
        <div class='index_swiper'>
        <mt-swipe :show-indicators="false"  :auto="4000"  class='mt-swiper'>
            <mt-swipe-item v-for='i in bannerlist'><img :src="i.img_url" alt=""></mt-swipe-item>
        </mt-swipe>
        </div>

        <div class="recommend_shop" style=''>—  推荐商家  —</div>
        <shop-fiter></shop-fiter>
        <ShopView :shops='shoplist'></ShopView>
    </div>
</template>
<script>
// import HeaderView from './headerView'
import ShopView from './shopView.vue'
import ShopFiter from './shopfilter'
import SortImg from './sortImg'
import IndexAd from './adindex'

export default {
     data(){
        return{
            pageTitle:'地址',
            active:'',
            list:[ '周一','周二'],
            selected:'外卖',
            value:'',
            result:[{'title':'香锅'},{'title':'披萨'},{'title':'炒面'}],
            showPanel:true,
            bannerlist:[],
            icon:[],
            mdImg:[],
            shoplist:[]
        }
    },
    created(){
        this.getBanners();
        this.getIcons();
        this.getImgs('subbanner');
        this.getShoplist();
    },
    methods:{
        //获取banner
        getBanners(){
            var url =`http://127.0.0.1:3001/home/banner`;
            this.$http.get(url).then(result=>{
                if(result.body.code ==1){
                    // console.log('banner',result.body.msg)
                    this.bannerlist=this.bannerlist.concat(result.body.msg);
                }else{
                    // console.log("banner加载失败");
                }
            });
        },
        getIcons(){
            var url =`http://127.0.0.1:3001/home/icon`;
            this.$http.get(url).then(result=>{
                if(result.body.code ==1 ){
                    this.icon = this.icon.concat(result.body.msg);
                }
            })
        },
        getImgs(img){
            var url=`http://127.0.0.1:3001/home/`+img;
            this.$http.get(url).then(result=>{
                if(result.body.code==1 ){
                    if(img='subbanner'){
                        this.mdImg = this.mdImg.concat(result.body.msg);
                        // console.log('subbanner',this.mdImg);
                    }
                    else if(img='icon'){
                        this.icon = this.icon.concat(result.body.msg);
                    }
                    else if(img='banner'){
                        this.bannerlist = this.bannerlist.concat(result.body.msg);
                    }
                }
            })
        },
        getShoplist(){
            var url = `http://127.0.0.1:3001/home/shoplist`;
            this.$http.get(url).then(result=>{
                if(result.body.code == 1 )
                 this.shoplist=this.shoplist.concat(result.body.msg);
                //  console.log(this.shoplist);
            });
        }
    },
    components:{
        // Header
        // HeaderView,
        // FooterView,
        ShopView,
        ShopFiter,
        SortImg,
        IndexAd
    }
}
</script>

<style lang='scss'>
$bg_color:#fff;
.recommend_shop{
    background: $bg_color;
    display:block;
    text-align:center;
    padding:8px;
}
.index_swiper{ 
    background: $bg_color;
    width:100%;
    height:23.8vw;
    text-align: center;
    .mt-swiper img{
      height: 100%;
    }
}
</style>
