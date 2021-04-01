<template>
  <div class="container">
    <div class="logo-box">
      <img src="../../../public/img/logo.png" alt="" />
    </div>
    <div class="login-box">
      <van-cell-group :border="border">
        <van-field
          class="bd mb-18"
          type="number"
          placeholder="请输入手机号码"
          :border="border"
          v-model="formData.username"
        ></van-field>
        <van-field
          v-show="loginType === 0"
          class="bd"
          :border="border"
          icon="lock"
          :type="visiblePass ? 'number' : 'password'"
          v-model="formData.password"
          placeholder="请输入密码"
          :right-icon="visiblePass ? 'eye-o' : 'closed-eye'"
          @click-right-icon="visiblePass = !visiblePass"
        ></van-field>

        <van-field
          v-show="loginType === 1"
          v-model.number="formData.code"
          :border="border"
          class="bd"
          type="number"
          placeholder="请输入验证码"
        >
          <template #button>
            <send-code :mobile="formData.username" type=2></send-code>
          </template>
        </van-field>
        <div class="login-tip">
          <span @click="toggleLoginType">{{ loginTips }}登录</span>
        </div>
        <van-button @click="onSubmit" class="submit-btn">登录</van-button>
      </van-cell-group>
    </div>
    <div class="forget">
      <van-row>
        <van-col span="12" @click="goPage('/resetPassword')">
          <span>忘记密码?</span>
        </van-col>
        <van-col span="12" @click="goPage('/register')">
          <span>立即注册</span>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import getUsername from '../../mixins/index';
import SendCode from '../../components/send-code.vue';
import {login} from '../../api/index';
import {setToken} from '../../utils/auth';
export default {
  name: 'Login',
  mixins: [getUsername],
  components: {
    SendCode
  },
  data () {
    return {
      border: false,
      visiblePass: false,
      loginType: 0,
      loginTips: '短信验证码',
      codeTips: '获取验证码',
      formData: {
        password: '',
        username: '',
        type: '2', // {1: '短信验证码登录',  2 :'密码登录'}
        code: ''
      },
    };
  },
  methods: {
    async onSubmit() {
      const {body} = await login(this.formData);
      this.$store.dispatch('setUserInfo', body);
    },
    toggleLoginType () {
      this.loginType = (this.loginType + 1) % 2;
      this.formData.type = this.loginType + 1;
      this.loginTips = {
        0: '短信验证码',
        1: '账号密码'
      }[this.loginType];
    },
    goPage (path) {
      this.$router.push({
        path,
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
  .logo-box {
    margin-top: 30px;
    margin-bottom: 40px;
  }
  .forget {
    margin-top: 18px;
    span {
      font-size: 12px;
      display: inline-block;
      width: 80px;
      color: @colorBlue;
    }
  }
  .login-box {
    box-sizing: border-box;
    .bd {
      border: 1px solid @colorGray;
      border-radius: 23px;
    }
    .mb-18 {
      margin-bottom: 18px;
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
        color: #969799;
        line-height: 46px;
      }
    }
  }
}
</style>
