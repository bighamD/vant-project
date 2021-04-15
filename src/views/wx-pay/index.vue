
<script>
import {wechatPay, } from '@/api';
import {WX_AUTH_URI} from '@/const';
export default {
    async created() {
        const code = this.$route.query.code;
        !code && (window.location.href = WX_AUTH_URI);
        await this.reqWxPay();
    },
    methods: {
        async reqWxPay() {
            const {id, code} = this.$route.query.id;
            await wechatPay({
                id,
                code    
            })
        }
    }
}
</script>