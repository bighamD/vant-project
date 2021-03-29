<template>
  <div>
    <span v-if="!hasSendMsg" @click="sendMsgCode" class="c-blue"
      >获取验证码</span
    >
    <van-count-down v-else :time="time" @finish="onCountDownFinish">
      <template v-slot="time">
        <span class="count-down">{{ time.seconds }} s后</span>
      </template>
    </van-count-down>
  </div>
</template>
<script>
import { sendMsg } from "../api/index";
export default {
  props: {
    time: {
      type: Number,
      default: () => 60 * 1000,
    },
    type: {
      type: [Number, String],
    },
    mobile: {
      type: [Number, String],
    },
  },
  data() {
    return {
      hasSendMsg: false,
    };
  },
  methods: {
    onCountDownFinish() {
      this.isCountDownFinished = true;
      this.hideCountDown();
    },
    hideCountDown() {
      this.hasSendMsg = false;
    },
    isPhoneValid() {
      if (!this.mobile) {
        return this.$dialog({
          message: "请输入手机号码",
        });
      } else if (!/^1[3456789]\d{9}$/.test(this.mobile)) {
        return this.$dialog({
          message: "请输入正确的手机号码",
        });
      }
    },
    async sendMsgCode() {
      if (this.isPhoneValid()) return;
      this.hasSendMsg = true;
      try {
        const {success} = await sendMsg({
          mobile: this.mobile,
          type: this.type,
        });
        if (!success) {
          this.hideCountDown();
        }
      } catch (error) {
        this.hideCountDown();
      }
    },
  },
};
</script>

<style lang="less">
@colorGray: rgba(232, 232, 232, 100);
.c-blue {
  color: #707070;
  padding: 8px;
  //   font-size: 12px;
  &:before {
    content: "";
    position: absolute;
    height: 32px;
    width: 1px;
    transform: translate(-10px, -4px);
    background-color: @colorGray;
  }
}
</style>
