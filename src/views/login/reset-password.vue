<template>
  <div>
    <NavBar @on-back="onBack"></NavBar>
    <main class="container">
      <div class="logo-box">
        <img src="../../../public/img/logo.png" alt="" />
      </div>
      <div class="login-box">
        <van-cell-group :border="border">
          <van-field
            class="bd mb-12"
            placeholder="请输入手机号码"
            :border="border"
            v-model="formData.username"
          ></van-field>
          <van-field
            type="number"
            class="bd mb-12 h46"
            v-model.number="formData.code"
            :border="border"
            placeholder="请输入验证码"
          >
            <template #button>
              <send-code :mobile="formData.username" :type="3"></send-code>
            </template>
          </van-field>
          <van-field
            class="bd"
            :border="border"
            icon="lock"
            :type="visiblePass ? 'text' : 'password'"
            v-model="formData.password"
            placeholder="设置密码"
            :right-icon="visiblePass ? 'eye-o' : 'closed-eye'"
            @click-right-icon="visiblePass = !visiblePass"
          ></van-field>
          <van-button @click="onSubmit" class="submit-btn mt-12">完成</van-button>
        </van-cell-group>
      </div>
    </main>
  </div>
</template>
<script>
import getUsername from '../../mixins/index';
import NavBar from '../../components/nav-back';
import SendCode from '../../components/send-code.vue';
import { resetPassword } from '../../api/index';
export default {
  name: 'ResetPassword',
  mixins: [getUsername],
  components: {
    NavBar,
    SendCode
  },
  data () {
    return {
      border: false,
      visiblePass: false,
      isCountDownFinished: false,
      hasSendMsg: false,
      loginTips: '短信验证码',
      codeTips: '获取验证码',
      formData: {
        username: '',
        code: '',
        password: ''
      }
    };
  },
  methods: {
    async onSubmit () {
      try {
        const { body } = await resetPassword(this.formData);
        this.$store.dispatch('setUserInfo', body);
      } catch (error) {
      }
    },
    onBack () {
      this.$router.push({
        path: '/login',
        query: {
          username: this.formData.username
        }
      });
    }
  }
};
</script>
<style scoped lang="less">
@colorGray: rgba(232, 232, 232, 100);
@colorBlue: #2876eb;
.container {
  padding: 30px 24px 0 24px;
  .login-box {
    box-sizing: border-box;
    .h46 {
      height: 46px;
    }
    .bd {
      border: 1px solid @colorGray;
      border-radius: 23px;
    }
    .mb-12 {
      margin-bottom: 12px;
    }
    .mt-12 {
      margin-top: 12px;
    }
    .login-tip {
      width: 100%;
      height: 46px;
      position: relative;
      margin-bottom: 12px;
      span {
        position: absolute;
        right: 10px;
        height: 46px;
        text-align: right;
        font-size: 14px;
        color: @colorGray;
        line-height: 46px;
      }
    }
  }
}
</style>
