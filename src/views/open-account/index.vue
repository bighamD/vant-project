<template>
    <div class="c">
        <div class="left">Max卡流程</div>
        <van-cell-group>
            <router-link to="/open" class="bt">职业家庭信息</router-link>
            <router-link to="/account" class="bt">开户</router-link>
            <router-link to="/upgrade" class="bt">Max卡升级</router-link>
            <router-link to="/sign" class="bt">Max卡代扣扣签约</router-link>
            <router-link to="/bind-card" class="bt">Max卡绑定卡</router-link>
            <router-link to="/upload" class="bt">影像上传</router-link>
            <router-link to="/balance" class="bt">余额查询</router-link>
            <router-link to="/transform" class="bt">转账出金</router-link>
            <router-link to="/unbind" class="bt">解绑卡</router-link>
        </van-cell-group>
    </div>
</template>
<style lang="less">
  .c {
      padding: 20px;
  }
  .left {
      text-align: left;
  }
  .bt {
      display: block;
      margin-bottom: 30px;
  }
</style>