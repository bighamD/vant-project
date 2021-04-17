<template>
    <div></div>
</template>
<script>
import {wechatPay} from '@/api';
import {WX_AUTH_URI} from '@/const';
export default {
    async created() {
        let {code, state, id} = this.$route.query;
        
        alert('href', location.href);
        
        alert('code', code, state, id)
        if (!code) {
            id = id || localStorage.getItem('ordeId');
            return window.location.href = WX_AUTH_URI(id)
        }
        await this.reqWxPay(code, state);
    },
    methods: {
        async reqWxPay(code, state) {
            await wechatPay({
                id: state,
                code    
            })
        }
    }
}
</script>