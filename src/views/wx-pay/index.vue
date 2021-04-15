<template>
    <div></div>
</template>
<script>
import {wechatPay, } from '@/api';
import {WX_AUTH_URI} from '@/const';
export default {
    async created() {
        const {code, state, id} = this.$route.query;
        const redirect_uri = location.href.split('?')[0];
        alert('code', code)
        !code && (window.location.href = WX_AUTH_URI(redirect_uri, id));
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