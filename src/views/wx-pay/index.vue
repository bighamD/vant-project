<template>
  <div>支付中...</div>
</template>
<script>
import { wechatPay } from "@/api";
import { getUrlParams } from "@/utils/get-url-params";
import { WX_AUTH_URI } from "@/const";
export default {
  async created() {
    let { code, state, id } = getUrlParams(location.href);

    if (!code) {
      id = id || localStorage.getItem("ordeId");
      return (window.location.href = WX_AUTH_URI(id));
    }
    await this.reqWxPay({ code, state });
  },
  methods: {
    async reqWxPay({ code, state }) {
      const { body } = await wechatPay({
        id: state,
        code,
      });
      const {
        appId,
        timeStamp,
        nonceStr,
        package: pkg,
        signType,
        paySign,
      } = JSON.parse(body.payInfo);

      function onBridgeReady() {
        WeixinJSBridge.invoke(
          "getBrandWCPayRequest",
          {
            appId,
            timeStamp,
            nonceStr,
            package: pkg,
            signType,
            paySign,
          },
          function (res) {
            if (res.err_msg == "get_brand_wcpay_request:ok") {
              WeixinJSBridge.call("closeWindow");
            } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
              WeixinJSBridge.call("closeWindow");
            } else {
              console.log('pay failed');
            }
          }
        );
      }
      if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
          document.addEventListener(
            "WeixinJSBridgeReady",
            onBridgeReady,
            false
          );
        } else if (document.attachEvent) {
          document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
          document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
        }
      } else {
        onBridgeReady();
      }
    },
  },
};
</script>
