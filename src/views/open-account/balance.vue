<template>
  <div class="container">
    <van-nav-bar
      title="返回流程列表"
      left-text="返回"
      left-arrow
      @click-left="() => this.$router.push('/open-nav')"
    />
    <div class="left">转账出金</div>
    <van-cell-group>
      <van-field v-model="formData.trueName" label="持卡人"> </van-field>
      <van-field v-model="formData.thirdId" label="第三方ID"> </van-field>
      <van-field v-model="formData.businessNo" label="订单号"> </van-field>
      <van-field v-model="formData.cardNo" label="卡号"> </van-field>
      <van-field v-model="formData.idNo" label="身份证号"> </van-field>
      <van-field v-model="formData.otpValue" label="验证码"> </van-field>
    </van-cell-group>
    <van-button class="left" type="warning" @click="onSubmit"
      >查询余额</van-button
    >
  </div>
</template>
<script>
import fetch from "../../utils/open-bank-fetch";
export default {
  data() {
    return {
      formData: {
        businessNo: "OB8870a9462e00202101074792894149",
        cardNo: "6230580100001811903",
        idNo: "321011198406261448",
        idType: "1",
        isConvert: "0",
        otpOrderNo: "2101071126200000255674",
        otpValue: "323423",
        requestTime: "2020-03-24 18:58:53",
        thirdId: "690861585038920266",
        trueName: "张三",
      },
      uploadToken: {
        wefileToken: "",
        wefileUrl: "",
      },
    };
  },
  created() {
    // TODO 获取上传影像的token
  },
  methods: {
    onSubmit() {
      // 提交审核 影像审核成功平台授信单号为空
      // if successd
      this.$dialog.alert({
        message: "开户成功",
      });
      var res = {
        availBalance: "0.00",
        balance: "0.00",
        bizCode: "000000",
        bizMsg: "success",
        breakFreezeAmt: "0.00",
        breakStopPaymentAmt: "0.00",
        freezeAmt: "0.00",
      };
    },
  },
};
</script>
<style lang="less">
.container {
  padding: 20px;
  height: 100vh;
}
.left {
  font-size: 20px;
  margin-bottom: 10px;
  padding-left: 20px;

  text-align: left;
}
</style>
