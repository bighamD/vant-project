<template>
  <div class="container">
    <van-nav-bar
      title="返回流程列表"
      left-text="返回"
      left-arrow
      @click-left="() => this.$router.push('/open-nav')"
    />
    <div class="left">Max卡升级</div>
    <van-cell-group>
      <van-field v-model="formData.idType" label="证件类型"> </van-field>
      <van-field v-model="formData.idNo" label="身份证号"> </van-field>
      <van-field v-model="formData.trueName" label="姓名"> </van-field>
      <van-field v-model="formData.businessNo" label="订单号"> </van-field>
      <van-field v-model="formData.cardNo" label="卡号"> </van-field>
      <van-field v-model="formData.mobileNo" label="手机号"> </van-field>
      <van-field v-model="formData.otpValue" label="验证码"> </van-field>
      <van-field v-model="formData.thirdId" label="第三方ID"> </van-field>
    </van-cell-group>
    <van-button class="left" type="warning" @click="onSubmit">升级为Max卡</van-button>
  </div>
</template>
<script>
import fetch from "../../utils/open-bank-fetch";
export default {
  data() {
    return {
      formData: {
        businessNo: "OB8870a9462e00202101139804376574",
        cardNo: "6222981475952701",
        idNo: "342133197310218262",
        idType: "1",
        mobileNo: "17231794700",
        otpOrderNo: "ba0466886f8200c78f2c1e9f3c01a7c616f8893b",
        otpValue: "216193",
        thirdId: "thirdId_4525484213",
        trueName: "怀江萱",
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
    afterRead(e) {
      console.log(e);
      // TODO 这里调用上传影像接口
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
