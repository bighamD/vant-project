<template>
    <div v-if="!isShow">
        <van-tabbar  v-model="active">
            <van-tabbar-item icon="home-o" to="/home">我的</van-tabbar-item>
            <van-tabbar-item icon="search" to="/order-list">订单</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
  data () {
    return {
      active: '0',
    };
  },
  computed: {
    isShow () {
        console.log(this.$router.currentRoute.meta )
      return this.$router.currentRoute.meta.needTabbar === false;
    }
  },
};
</script>
