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
      <van-field v-model="formData.bizKey.idNo" label="身份证号"> </van-field>
      <van-field v-model="formData.bizKey.trueName" label="姓名"> </van-field>
      <van-field v-model="formData.businessNo" label="订单号"> </van-field>
      <van-field v-model="formData.accountNo" label="卡号"> </van-field>
      <van-field v-model="formData.mobileNo" label="手机号"> </van-field>
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
        accountNo: "6222981475713129",
        bizKey: {
          bindCardNo: "6212826105067841211",
          idNo: "622204196501221217",
          idType: "1",
          mobileNo: "15485572711",
          trueName: "邬婕玲",
        },
        businessNo: "OB8870a9462e20210114085735",
        mobileNo: "15485572711",
        scene: "BC",
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
