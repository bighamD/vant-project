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
      <van-field v-model="formData.accountName" label="收款人"> </van-field>
      <van-field v-model="formData.amount" label="金额"> </van-field>
      <van-field v-model="formData.currType" label="币种"> </van-field>
      <van-field v-model="formData.bussinessNo" label="订单号"> </van-field>
      <!-- <van-field v-model="formData.cardNo" label="卡号"> </van-field>
      <van-field v-model="formData.mobileNo" label="手机号"> </van-field> -->
      <van-field v-model="formData.otpValue" label="验证码"> </van-field>
      <van-field v-model="formData.fromAccountName" label="转账人"> </van-field>
      <van-field v-model="formData.otpValue" label="验证码"> </van-field>
      <van-field v-model="formData.bankName" label="转入银行"> </van-field>
      <van-field v-model="formData.toAccountNo" label="转入卡号"> </van-field>
      <van-field v-model="formData.fromAccountNo" label="转出卡号"> </van-field>
      <van-field v-model="formData.channelType" label="渠道"> </van-field>

    </van-cell-group>
    <van-button class="left" type="warning" @click="onSubmit"
      >确认转账</van-button
    >
  </div>
</template>
<script>
import fetch from "../../utils/open-bank-fetch";
export default {
  data() {
    return {
      formData: {
        accountName: "费翠波",
        amount: "50",
        bankName: "中国人民银行",
        bussinessNo: "OB27c5548ead00202008261109349780",
        bussinessScence: "018009ae18",
        channelType: "H5",
        currType: "RMB",
        deviceId: "8946316465",
        duplicateConfirmFlag: "N",
        executeType: "3",
        fromAccountName: "费翠波",
        fromAccountNo: "6222986900057984",
        ipAddr: "127.0.0.1",
        limitConfirmFlag: "N",
        otpOrderNo: "2cc33b8f0dac46faa43cd05a9d686fa1",
        otpValue: "228705",
        thirdId: "thirdId_18380015173",
        toAccountNo: "6212821005796245250",
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
