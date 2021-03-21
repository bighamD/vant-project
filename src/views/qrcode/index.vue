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
            <div class="qrcode-box">
                <vue-qrcode value="https://www.1stg.me" />
                <div class="save">请长按二维码识别或者保存到本地</div>
            </div>
            <div class="submit-box">
                <van-button class="submit-btn" color="#ebd428" round block type="primary" native-type="submit">
                刷新支付二维码
                </van-button>
            </div>
            <div class="attension">
                说明： 请长按二维码识别或者保存到本地
            </div>
        </div>
    </div>
</template>
<script>
import VueQrcode from 'vue-qrcode';
export default {
  components: {
    VueQrcode
  },
  data () {
    return {
      formData: {
        checked: 1
      }
    };
  },
  methods: {
    genQRcode () {

    },
    onClickLeft () {

    }
  }
};
</script>
<style lang="less" scoped>
    .submit-btn {
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
        margin-bottom: 44px;
        .van-button__text {
            color: #707070;
        }
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
        .attension {
            color: #707070;
            font-size: 16px;
        }

    }
    .van-cell {
        margin-bottom: 8px;
    }
    .qrcode-box {
        img {
            height:220px;
            width: 220px;
        }
        .save {
            font-size: 16px;
            line-height: 60px;
            height:60px;
            text-align: center;
            margin-top: -28px;
            color: #707070;
        }
    }

</style>
