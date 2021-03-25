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
            class="bd mb-7"
            placeholder="请输入手机号码"
            :border="border"
            v-model="formData.username"
            type="number"
          ></van-field>
          <van-field
            v-model="formData.officeName"
            readonly
            name="picker"
            class="ipt-picker"
            placeholder="请选择商户"
            @click="showPicker = true"
          />
          <van-popup v-model="showPicker" position="bottom">
            <van-picker
              show-toolbar
              :columns="officeNames"
              @confirm="onConfirm"
              @cancel="showPicker = false"
            />
          </van-popup>
          <van-field
            class="bd mb-7"
            v-model="formData.code"
            :border="border"
            type="number"
            placeholder="请输入验证码"
          >
            <template #button>
            <count-down :mobile="formData.username" type=1></count-down>
            </template>
          </van-field>
          <van-field
            v-if="loginType === 0"
            class="bd"
            :border="border"
            icon="lock"
            :type="visiblePass ? 'text' : 'password'"
            v-model="formData.password"
            placeholder="设置密码"
            :right-icon="visiblePass ? 'eye-o' : 'closed-eye'"
            @click-right-icon="visiblePass = !visiblePass"
          ></van-field>
          <van-button @click="onSubmit" class="submit-btn mt-12">注册</van-button>
        </van-cell-group>
      </div>
      <div class="argeement-box">
        <van-checkbox-group
          icon-size="16px"
          v-model="isAgree"
          :max="1"
        >
          <van-checkbox name="1">
            <div class="flex-box">
              <span class="read">我已同意并阅读</span>
              <span class="argeement" @click="readAgreement">xx 用户协议</span>
            </div>
          </van-checkbox>
        </van-checkbox-group>
      </div>
    </main>
  </div>
</template>
<script>
import NavBar from '../../components/nav-back';
import CountDown from '../../components/count-down.vue';
import {register, getOfficialList} from '../../api/index';
import {setToken} from '../../utils/auth';
export default {
  name: 'Register',
  components: {
    NavBar,
    CountDown
  },
  data () {
    return {
      border: false,
      visiblePass: false,
      loginType: 0,
      loginTips: '短信验证码',
      codeTips: '获取验证码',
      formData: {
        officeId: '',
        officeName: '',
        username: '18476697664',
        code: '123456',
        name: '',
        password: '123456',
      },
      isAgree: [],
      officeList: [],
      officeNames: [],
      showPicker: false
    };
  },
  created(){
    getOfficialList().then(({body}) => {
      this.officeList = body.officeList.map(({id, name}) => ({officeId: id, officeName: name}));
      this.officeNames = this.officeList.map(v => v.officeName);
    });
  },
  methods: {
    onConfirm (value) {
      this.formData.officeName = value;
      this.formData.officeId = this.getOfficeId(value);
      this.showPicker = false;
    },
    getOfficeId(name) {
      const item =  this.officeList.find(v => v.officeName === name);
      return item && item.officeId;
    },
    onBack () {
      this.$router.push({
        path: '/login',
        query: {
          username: this.formData.username
        }
      });
    },
    readAgreement() {
        this.$dialog({
            message: '<div>我已经阅读</div>'
        });
    },
    hasCheckAgreeMent() {
      return this.isAgree.length > 0;
    },
    async onSubmit() {
      if (!this.hasCheckAgreeMent()) {
        return this.$dialog.confirm({
          message: '请先勾选同意协议'
        });
      }
      try {
        const {body } = await register(this.formData);
        this.$store.dispatch('setUserInfo', body);
      } catch (error) {
        
      }

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
      color: @colorBlue;
    }
  }
  .argeement-box {
    padding: 0 14px;
    margin-top: 10px;
    height: 96px;
    .flex-box {
      align-content: center;
      display: flex;
      justify-content: space-between;
      span {
        display: inlie-block;
        font-size: 12px;
        line-height: 24px;
        // height: 96px;
      }
    }
    .argeement {
      color: @colorBlue;
      padding-left: 5px;
    }
  }
  .login-box {
    box-sizing: border-box;
    .ipt-picker {
      border-radius: 24px;
      margin-bottom: 6px;
      border: 1px solid #e8e8e8;
    }
    .c-blue {
      color: #707070;
      padding: 8px;
      // font-size: 12px;
      &:before {
        content: "";
        position: absolute;
        height: 32px;
        width: 1px;
        transform: translate(-10px, -4px);
        background-color: @colorGray;
      }
    }
    .bd {
      border: 1px solid @colorGray;
      border-radius: 23px;
    }
    .mb-7 {
      margin-bottom: 7px;
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
