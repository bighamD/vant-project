<template>
  <div class="container">
    <van-nav-bar
      title="返回流程列表"
      left-text="返回"
      left-arrow
      @click-left="() => this.$router.push('/open-nav')"
    />
    <div class="left">身份影像上传</div>
    <van-cell-group>
      <van-field v-model="formData.trueName" label="身份证头像上传">
      </van-field>
      <van-uploader :after-read="afterRead" />
      <van-field v-model="formData.idNo" label="身份证国徽面上传"> </van-field>
      <van-uploader :after-read="afterRead" />
    </van-cell-group>
    <van-button @click="onSubmit">提交审核</van-button>
  </div>
</template>
<script>
import fetch from "../../utils/open-bank-fetch";
export default {
  data() {
    return {
      formData: {
        homeAddress: "广东省深圳市罗湖区深南街道1村1栋1号",
        homeAddressDetail: "1村1栋1号",

        workOrgName: "平安有限公司",
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
