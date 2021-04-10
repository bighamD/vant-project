<template>
  <div class="container">
    <van-nav-bar
      title="返回流程列表"
      left-text="返回"
      left-arrow
      @click-left="() => this.$router.push('/open-nav')"
    />
    <div class="left">请填写开户信息</div>
    <van-cell-group>
      <van-field v-model="formData.idNo" label="身份证号"> </van-field>
      <van-field v-model="formData.trueName" label="姓名"> </van-field>
      <van-field v-model="formData.idType" label="身份证类型"> </van-field>
      <van-field
        v-model="formData.homeAddressDetail"
        label="门牌号"
      ></van-field>
      <van-field v-model="formData.occupation" label="邮政编码"> </van-field>
      <van-field v-model="formData.homeProvince" label="省份"> </van-field>
      <van-field v-model="formData.homeCity" label="城市"> </van-field>
      <van-field v-model="formData.homeCounty" label="区/县"> </van-field>
      <van-field v-model="formData.workOrgName" label="公司名称"> </van-field>
      <van-field v-model="formData.homeAddress" label="家庭地址"> </van-field>
    </van-cell-group>
    <van-button class="left" @click="onSubmit">提交</van-button>
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
        homeCity: "深圳市",
        homeCityCode: "dd",
        homeCounty: "罗湖区",
        homeCountyCode: "dd",
        homeProvince: "广东省",
        homeProvinceCode: "336026",
        homeStreetAddress: "深南街道",
        idNo: "430524199405166009",
        idType: 1,
        occupation: "90300",
        trueName: "蓟素桦",
        workOrgName: "平安有限公司",
      },
    };
  },
  methods: {
    onSubmit() {
      // TODO 开户前置校验通过 fetch() {"trueName":"芮燕琛","idType":"1","idNo":"341181199210195293"}
      // fetch
      const {trueName, idNo, idType} = this.formData;
      fetch({
        method: 'post',
        params: {
          // ... this.formData
          trueName,
          idNo,
          idType: +idType
        },
        url: '/checkUserInfo'
      })
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
  padding-left: 20px;

  margin-bottom: 10px;
  text-align: left;
}
</style>
