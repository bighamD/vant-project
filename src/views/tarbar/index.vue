<template>
  <van-tabbar v-if="isShow" v-model="active">
    <van-tabbar-item icon="home-o" to="/">我的</van-tabbar-item>
    <van-tabbar-item icon="search" to="/order-list">订单</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data () {
    return {
      active: '0'
    };
  },
  computed: {
    isShow () {
      return this.$router.currentRoute.meta.needTarbar !== false;
    }
  }
};
</script>
