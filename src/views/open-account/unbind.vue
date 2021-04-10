<template>
  <div class="container">
    <van-nav-bar
      title="返回流程列表"
      left-text="返回"
      left-arrow
      @click-left="() => this.$router.push('/open-nav')"
    />
    <div class="left">Max卡新增绑卡</div>
    <van-cell-group>
      <van-field v-model="formData.accountNo" label="max卡账号"> </van-field>
      <van-field v-model="formData.customerName" label="用户名"> </van-field>
      <van-field v-model="formData.idNo" label="身份证号"> </van-field>
      <van-field v-model="formData.unBindCardNo" label="解绑卡号"> </van-field>
      <van-field v-model="formData.accountNo" label="卡号"> </van-field>
      <van-field v-model="formData.otpValue" label="手机验证码"> </van-field>
    </van-cell-group>
    <van-button class="left" type="warning" @click="onSubmit">新增</van-button>
  </div>
</template>
<script>
import fetch from "../../utils/open-bank-fetch";
export default {
  data() {
    return {
      formData: {
        accountNo: "6222981476124078",
        businessNo: "OB8870a9462e00202101141417640066",
        customerName: "巫瑞兰",
        idNo: "210427198306053912",
        idType: "1",
        otpOrderNo: "4971042101140008440033",
        otpValue: "644223",
        scene: "RB",
        unBindCardNo: "6212826104479633920",
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
