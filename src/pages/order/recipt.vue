<template>
    <div>
        <HeaderView :ptitle='pageTitle'></HeaderView>
        <div class='pay_container'>
            <div class='pay_flex payments'>
                <div>
                    <span class='choose_on'>
                        <svg width='20' height='20' fill='#ddd' >
                            <svg viewBox="0 0 120 120" id="select" width="20px" height="100%" >
                                <circle cx="60" cy="60" r="60"></circle>
                                <path fill="#FFF" d="M63.84 84.678a1.976 1.976 0 0 1-.387.545l-7.975 7.976a1.996 1.996 0 0 1-2.829-.005L24.172 64.716a2.005 2.005 0 0 1-.005-2.828l7.976-7.976a1.996 1.996 0 0 1 2.828.005l19.015 19.015L91.498 35.42a1.991 1.991 0 0 1 2.823 0l7.976 7.977c.784.784.78 2.043 0 2.823L63.84 84.678z"></path></svg>
                        </svg>
                    </span>
                    <span>不需要发票</span>
                </div>
                
            </div>
            <div class='other_pay grey_notice'>
                发票信息
            </div>
            <div class='pay_flex payments'>
                <span class='recipt_com'>
                    <span class='com_title'>上海梦灵网络科技</span>
                    <span class='recipt_code'>91314316545641654</span>
                </span>
                <span class='recipt_info'>
                    <svg width='20' height='20' fill='#ddd'>
                        <svg viewBox="0 0 120 120" id="select" width="1.2rem" height="100%"><circle cx="60" cy="60" r="60"></circle><path fill="#FFF" d="M63.84 84.678a1.976 1.976 0 0 1-.387.545l-7.975 7.976a1.996 1.996 0 0 1-2.829-.005L24.172 64.716a2.005 2.005 0 0 1-.005-2.828l7.976-7.976a1.996 1.996 0 0 1 2.828.005l19.015 19.015L91.498 35.42a1.991 1.991 0 0 1 2.823 0l7.976 7.977c.784.784.78 2.043 0 2.823L63.84 84.678z"></path></svg>
                    </svg>
                </span>
            </div>
            <div class='pay_flex payments'>
                <span class='recipt_com'>
                    <span class='com_title'>深圳齐力电子商务有限公司上海分公司</span>
                    <span class='tax_code'>单位类型发票，需完善[税号]信息</span>
                </span>
                <span class='recipt_info'>
                    <svg width='20' height='20' fill='#ddd'>
                        <svg viewBox="0 0 120 120" id="select" width="1.2rem" height="100%">
                            <circle cx="60" cy="60" r="60" fill='#13f332'></circle>
                            <path fill="#FFF" d="M63.84 84.678a1.976 1.976 0 0 1-.387.545l-7.975 7.976a1.996 1.996 0 0 1-2.829-.005L24.172 64.716a2.005 2.005 0 0 1-.005-2.828l7.976-7.976a1.996 1.996 0 0 1 2.828.005l19.015 19.015L91.498 35.42a1.991 1.991 0 0 1 2.823 0l7.976 7.977c.784.784.78 2.043 0 2.823L63.84 84.678z"></path>
                        </svg>
                    </svg>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pageTitle:'选择发票信息',
        }
    },
}
</script>
