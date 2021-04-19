<template>
    <div>
      wx-pay-page
    </div>
</template>
<script>
import { wechatPay } from '@/api';
import { getUrlParams } from '@/utils/get-url-params';
import { WX_AUTH_URI } from '@/const';
export default {
  async created () {
    let { code, state, id } = getUrlParams(location.href);

    if (!code) {
      id = id || localStorage.getItem('ordeId');
      return (window.location.href = WX_AUTH_URI(id));
    }
    await this.reqWxPay({code, state});
  },
  methods: {
    async reqWxPay ({code, state}) {
      await wechatPay({
        id: state,
        code
      });
    }
  }
};
</script>
