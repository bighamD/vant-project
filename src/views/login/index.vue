<template>
    <div class="container">
        <div class="logo-box">
            <img src="../../../public/img/logo.png" alt="">
        </div>
        <div class="login-box">
            <van-cell-group :border="border">
                <van-field
                    class="bd mb-18"
                    placeholder="请输入手机号码"
                    :border="border"
                    v-model="formData.username"
                ></van-field>
                <van-field
                    v-if="loginType === 0"
                    class="bd"
                    :border="border"
				    icon="lock"
                    :type="visiblePass ? 'text' : 'password'"
                    v-model="formData.pwd"
                    placeholder="请输入密码"
                    :right-icon="visiblePass ? 'eye-o' : 'closed-eye'"
				    @click-right-icon="visiblePass = !visiblePass"
                ></van-field>

                  <van-field
                    v-if="loginType === 1"
                    v-model.number="formData.msgCode"
                    :border="border"
                    class="bd"
                    placeholder="请输入验证码"
                >
                    <template v-if="loginType === 1" #button>
                        <span class="c-blue" >{{msgCodeTips}}</span>
                    </template>
                </van-field>
                <div class="login-tip">
                    <span @click="changeLoginType">{{loginTips}}登录</span>
                </div>
                <van-button class="submit-btn">登录</van-button>
            </van-cell-group>
        </div>
        <div class="forget">
            <van-row  >
                <van-col span="12" @click="goPage('/resetPassword')">
                    <span>忘记密码?</span>
                </van-col>
                <van-col span="12" @click="goPage('/register')">
                    <span >立即注册</span>
                </van-col>
            </van-row>
        </div>
    </div>
</template>
<script>
const LOGIN_MSG = {
    '0': '账号密码', 
    '1': '短信验证码',
}

export default {
    data() {
        return {
            border: false,
            visiblePass: false,
            loginType: 0,
            loginTips: '短信验证码',
            msgCodeTips: '获取验证码',
            formData: {
                pwd: '',
                username: '',
                msgCode: ''
            }
        }
    },
    methods: {
        changeLoginType() {
            this.loginType = (this.loginType + 1) % 2;
            this.loginTips = LOGIN_MSG[this.loginType];
        },
        goPage(path) {
            this.$router.push(path)
        }
    }
}
</script>
<style scoped lang="less">
    @colorGray: rgba(232, 232, 232, 100);
    @colorBlue:#2876eb;
    .container {
        padding: 30px 24px 0 24px;
        .logo-box {
            margin-top: 30px;
            margin-bottom: 40px;
        }
        .forget {
            margin-top:18px;
            span {
                font-size: 12px;
                display: inline-block;
                width: 80px;
                color: @colorBlue;
            }
        }
        .login-box {
            box-sizing: border-box;
            .c-blue {
                height: 100%;
                color: #969799;
                padding: 8px;
                font-size: 14px;
                &:before{
                    content: '';
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
            .mb-18 {
                margin-bottom: 18px;
            }
            .login-tip {
                width:100%;
                height:46px;
                position: relative;
                margin-bottom: 12px;
                span {
                    position: absolute;
                    right:10px;
                    height: 46px;
                    text-align: right;
                    font-size: 14px;
                    color: #969799;
                    line-height: 46px;
                }
            }
            .submit-btn {
                box-sizing: border-box;
                height:46px;
                width:100%;
                border-color: #fff;
                border-radius: 23px;
                background-color:#ebd428;
                color: rgba(112, 112, 112, 100)
            }
           
        }
    }
</style>