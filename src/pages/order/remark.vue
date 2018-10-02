<template>
    <div>
        <HeaderView :ptitle='pageTitle'></HeaderView>
        <div class='remark_container'>
            <section>
                <textarea placeholder="填写额外对餐厅和骑手小哥的备注"></textarea>
            </section>
            <div class='remark_tag'>
                <span class='rmk_default'>不要辣</span>
                <span class='rmk_default'>少点辣</span>
                <span class='rmk_default'>多点辣</span>
            </div>
            <div class='remark_tag'>
                <span class='rmk_default'>不要洋葱</span>
            </div>
            <div class='remark_tag'>
                <span class='rmk_default'>不要香菜</span>
            </div>
            <div class='remark_tag'>
                <span class='rmk_default'>多点醋</span>
            </div>
            <div class='remark_tag'>
                <span class='rmk_default'>多点葱</span>
            </div>
            <mt-button type='green' size="large">确定</mt-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pageTitle:'订单备注',
        }
    },
}
</script>
