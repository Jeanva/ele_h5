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
        
        <SortImg></SortImg>
        
        <IndexAd></IndexAd>

        <div style='display:block;text-align:center'>--推荐商家--</div>
        <shop-fiter></shop-fiter>
        
        <ShopView></ShopView>
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
            showPanel:false
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

