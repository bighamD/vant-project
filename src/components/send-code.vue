<template>
  <van-field
    v-model="msgCode"
    center
    clearable
    placeholder="请输入验证码"
  >
    <template #button>
      <van-button size="small" type="primary">{{tips}}</van-button>
    </template>
  </van-field>
</template>
<script>
export default {

  data () {
    return {
      tips: '获取验证码'
    };
  }
};
</script>

<style lang="less" scoped>
</style>
