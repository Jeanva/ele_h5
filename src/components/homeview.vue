<template>
    <div class="homeview">
        
        <div class='search'>
            <div class='index-address'>
                地址
            </div>
            <div :class='searchBarFixed==true?"searchFixed":""'>
                <mt-search v-model="value" id='searchView' >
                    <mt-cell
                        v-for="item in result"
                        :title="item.title"
                        :value="item.value">
                    </mt-cell>
                </mt-search>
            </div>
        </div>
        
        <SortImg :icons='icon'></SortImg>
        <IndexAd :subbanner='mdImg'></IndexAd>
        <div class='index_swiper'>
        <mt-swipe :show-indicators="false"  :auto="4000"  class='mt-swiper'>
            <mt-swipe-item v-for='i in bannerlist'><img :src="i.img_url" alt=""></mt-swipe-item>
        </mt-swipe>
        </div>

        <div class="recommend_shop">—  推荐商家  —</div>
        <shop-fiter 
            @distance='filter_dis' 
            @rate='filter_rate' 
            @price='filter_price'>
        </shop-fiter>   <!--从兄弟组件中获得传值-->
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
            shoplist:[],
            searchBarFixed:false,
        }
    },
    created(){
        this.getBanners();
        this.getIcons();
        this.getImgs('subbanner');
        this.getShoplist();
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll);
    },
    destroyed(){
        window.removeEventListener("scroll",this.handleScroll);
    },
    methods:{
        //监听滚动事件
        handleScroll(){
            var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            console.log(scrollTop);
            var offsetTop= document.querySelector("#searchView").offsetTop; //#searchView距离顶部的偏移量
            if(scrollTop > offsetTop){
                this.searchBarFixed = true;
                console.log(this.searchBarFixed);
            }
            else{
                this.searchBarFixed = false;
                console.log(this.searchBarFixed);
            }
        },
        //获取banner
        getBanners(){
            var url =`http://127.0.0.1:3001/home/banner`;
            this.$http.get(url).then(result=>{
                if(result.body.code ==1){
                    // console.log('banner',result.body.msg)
                    this.bannerlist=this.bannerlist.concat(result.body.msg);
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
                 console.log('homeview shoplist',this.shoplist);
            });
        },
        //按距离排列
        byDistance(a,b){
            return a.distance-b.distance;
        },  
        filter_dis(){
            this.shoplist.sort(this.byDistance);
            // Bus.$emit('distanceSort',this.shoplist);
            console.log('distanceSort',this.shoplist);
        },
        byRate(b,a){
            return a.star-b.star;
        },
        filter_rate(){
            this.shoplist.sort(this.byRate);
            console.log('RateSort',this.shoplist);
        },
        byPrice(a,b){
            return a.min_price-b.min_price;
        },
        filter_price(){
            this.shoplist.sort(this.byPrice);
            console.log('filter_price');
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
.searchFixed{   //搜索固定
    position: fixed;
    top:0;
    left:0;
    right:0;
    z-index: 1;
}
.index-address{
    background-image:linear-gradient(190deg,#0af,#0085ff);
}
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
