<template >
  <div class="contaniner">
    <nav class="nav-bar">
      <van-nav-bar
        title="支付二维码"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </nav>
    <div class="form-body">
      <van-form @submit="saveOrderInfo">
        <van-field
          v-model="formData.clientName"
          name="客户姓名"
          label="客户姓名"
          placeholder="请填写客户姓名"
          required
          :rules="[{ required: true, message: '请填写客户姓名' }]"
        />
        <van-field
          v-model="formData.clientPhone"
          type="number"
          name="联系电话"
          label="联系电话"
          placeholder="请填写联系电话"
          required
          maxlength="11"
          :rules="[{ required: true, message: '请填写联系电话' }]"
        />
        <van-field
          v-model="formData.note"
          name="备注"
          label="备注"
          autosize
          type="textarea"
          placeholder="请填写备注"
        />
        <van-field
          v-model="formData.totalAmount"
          type="number"
          name="价格"
          label="价格"
          placeholder="请填写价格"
          @blur="fixAmount"
          required
          :rules="[{ required: true, message: '请填写价格' }]"
        />

        <van-field label="支付通道" name="radio" required>
          <template #input>
            <van-radio-group v-model="formData.payScene" direction="horizontal">
              <van-radio name="01">
                线上
                <template #icon="{ checked }">
                  <span
                    :class="['el-radio__inner', checked ? 'is-checked' : '']"
                  ></span>
                </template>
              </van-radio>
              <van-radio name="02">
                线下
                <template #icon="{ checked }">
                  <span
                    :class="['el-radio__inner', checked ? 'is-checked' : '']"
                  ></span>
                </template>
              </van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field label="支付类型" name="radio" required>
          <template #input>
            <van-radio-group v-model="formData.bankType" direction="horizontal">
              <van-radio name="1902000">
                微信
                <template #icon="{ checked }">
                  <span
                    :class="['el-radio__inner', checked ? 'is-checked' : '']"
                  ></span>
                </template>
              </van-radio>
              <van-radio name="1903000">
                支付宝
                <template #icon="{ checked }">
                  <span
                    :class="['el-radio__inner', checked ? 'is-checked' : '']"
                  ></span>
                </template>
              </van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <template v-if="formData.bankType === '1903000'">
          <van-field label="花呗分期数" name="radio">
            <template #input>
              <van-radio-group
                v-model="formData.hbFqNum"
                direction="horizontal"
              >
                <van-radio name="6">
                  6期
                  <template #icon="{ checked }">
                    <span
                      :class="['el-radio__inner', checked ? 'is-checked' : '']"
                    ></span>
                  </template>
                </van-radio>
                <van-radio name="12">
                  12期
                  <template #icon="{ checked }">
                    <span
                      :class="['el-radio__inner', checked ? 'is-checked' : '']"
                    ></span>
                  </template>
                </van-radio>
              </van-radio-group>
            </template>
          </van-field>
          <van-cell v-if="!!formData.hbFqNum">
            <div class="fq-tips-box">
              分{{ formData.hbFqNum }}个月还款（0手续费），共减免手续费{{
                charge
              }}元
            </div>
          </van-cell>
        </template>
        <div class="submit-box">
          <van-button
            class="submit-btn"
            color="#ebd428"
            round
            block
            type="primary"
          >
            生成二维码
          </van-button>
        </div>
      </van-form>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">我的</van-tabbar-item>
      <van-tabbar-item icon="search" to="/order-list">订单</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { saveOrder } from "../../api/index";

export default {
  data() {
    return {
      active: 0,
      formData: {
        bankType: "1902000",
        clientPhone: "",
        clientName: "",
        totalAmount: "",
        note: "",
        payScene: "01", // 02线下，01线上
        hbFqNum: "",
      },
    };
  },
  computed: {
    charge() {
      const rate = {
        6: 0.045,
        12: 0.088,
      }[this.formData.hbFqNum];

      return (this.formData.totalAmount * rate).toFixed(2);
    },
  },
  methods: {
    async saveOrderInfo() {
      const { body } = await saveOrder(this.formData);
      const orderId = body.order.id;
      const query = {
        id: orderId,
      }
      const url = this.formData.bankType === "1902000" ? "/wx-pay" : "/qrcode";

      if (url === '/qrcode') {
        query.orderId = id;
      }

      this.$router.push({
        path: url,
        query,
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    fixAmount(e) {
      this.formData.totalAmount = parseFloat(e.target.value).toFixed(2);
    },
  },
};
</script>
<style lang="less" scoped>
.submit-btn {
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
  .van-button__text {
    color: #707070;
  }
}
.fq-tips-box {
  font-size: 12px;
  color: #707070;
  text-align: center;
}
.nav-bar {
  margin-bottom: 30px;
}
.form-body {
  padding: 0 20px;
  .submit-box {
    margin: 8px;
    margin-top: 20px;
  }
  .van-radio--horizontal {
    padding-right: 30px;
  }
}
.van-cell {
  margin-bottom: 8px;
}
.el-radio__inner {
  border: 1px solid #dcdfe6;
  border-radius: 100%;
  width: 16px;
  height: 16px;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
}
.el-radio__inner.is-checked {
  border-color: orange;
  background: orange;
}
.el-radio__inner:after {
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: #fff;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1.2);
  transition: transform 0.1s ease-in;
}

.el-radio__inner.is-checked :after {
  transform: translate(-50%, -50%) scale(1);
}
</style>
