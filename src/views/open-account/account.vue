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
      <van-field v-model="formData.businessNo" label="影像订单号"> </van-field>
      <van-field v-model="formData.bindCardNo" label="绑定卡卡号"> </van-field>
      <van-field v-model="formData.mobileNo" label="手机号"> </van-field>
      <van-field v-model="formData.scene" label="场景号"> </van-field>
      <van-field v-model="formData.otpOrderNo" label="OTP订单号"> </van-field>
      <van-field v-model="formData.occupation" label="职业代码"> </van-field>
      <van-field v-model="formData.lbs" label="LBS信息"> </van-field>
      <van-field v-model="formData.homeAddressDetail" label="住址地址-详细地址">
      </van-field>

      <van-field v-model="formData.fullDeviceNumber" label="设备SIM卡号">
      </van-field>
      <van-field v-model="formData.homeProvinceCode" label="住址地址-省份编码">
      </van-field>
      <van-field v-model="formData.homeCityCode" label="住址地址-城市编码">
      </van-field>
      <van-field v-model="formData.homeStreetAddress" label="住址地址-街道地址">
      </van-field>
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
          businessNo: 'OB8870a9462e00202101083882907393',
        fileType: "jpeg",
        homeAddressDetail: "007号",
        occupation: "40500",
        homeStreetAddress: "福田街道",
        homeCityCode: "440300",
        isAuthorization: "0",
        source: "EE",
        idNo: "341181199210195293",
        bindCardNo: "6212825648702247150",
        scene: "OA002",
        trueName: "芮燕琛",
        homeProvinceCode: "440000",
        businessNo: "OB8870a9462e00202101134262583405",
        fullDeviceNumber: "+8619161596556",
        homeCounty: "福田区",
        clientIP: "fe80::e942:6b05:3d45:205b%10",
        homeCity: "深圳市",
        workOrgName: "银行保险",
        imageOrderNo: "Image_20210113110848",
        recomUm: "dfyc03",
        idType: "1",
        thirdId: "thirdId_19161596556",
        appName: "58合作商户",
        otpOrderNo: "2101131108560000258804",
        homeCountyCode: "440304",
        mobileNo: "19161596556",
        deviceID: "90:E1:7B:3F:B9:31",
        homeProvince: "广东省",
        outerSource: "EE",
        outerId: "EE",
        otpValue: "375753",
        lbs: "37.12/-121.23",
        cid: "EE",
      },
    };
  },
  methods: {
    onSubmit() {
      // TODO 开户前置校验通过 fetch() {"trueName":"芮燕琛","idType":"1","idNo":"341181199210195293"}
      // fetch
      const { trueName, idNo, idType } = this.formData;
      fetch({
        method: "post",
        data: {
          ...this.formData,
          //   trueName,
          //   idNo,
          //   idType: +idType,
        },
        url: "/openAccount",
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
  padding-left: 20px;

  margin-bottom: 10px;
  text-align: left;
}
</style>
