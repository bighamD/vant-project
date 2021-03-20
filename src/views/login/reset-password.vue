<template>
    <div >
        <nav class="nav-box" @click="() => this.$router.push('/login')">
            <span class="arrow">
                <van-icon size="18px" name="arrow-left" />
            </span>
            <span class="left-text">返回登录</span>
            <span class="title"></span>
        </nav>
        <main class="container">
            <div class="logo-box">
                <img src="../../../public/img/logo.png" alt="">
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
                        class="bd mb-12"
                        v-model.number="formData.msgCode"
                        :border="border"
                        placeholder="请输入验证码"
                    >
                        <template  #button>
                            <span class="c-blue" >{{msgCodeTips}}</span>
                        </template>
                    </van-field>
                    <van-field
                    v-if="loginType === 0"
                    class="bd"
                    :border="border"
				    icon="lock"
                    :type="visiblePass ? 'text' : 'password'"
                    v-model="formData.pwd"
                    placeholder="设置密码"
                    :right-icon="visiblePass ? 'eye-o' : 'closed-eye'"
				    @click-right-icon="visiblePass = !visiblePass"
                    ></van-field>
                    <van-button class="submit-btn mt-12 ">完成</van-button>
                </van-cell-group>
            </div>
        </main>

    </div>
</template>
<script>

export default {
    data() {
        return {
            border: false,
            visiblePass: false,
            loginType: 0,
            loginTips: '短信验证码',
            msgCodeTips: '获取验证码',
            formData: {
                mchName: '',
                username: '',
                msgCode: '',
                isAgree: ['1'],
            }
        }
    },
    methods: {
    }
}
</script>
<style scoped lang="less">
    @colorGray: rgba(187, 187, 187, 100);;
    @colorBlue:#2876eb;
    .nav-box {
        position:absolute;
        height:46px;
        top:20px;
        left:8px;
        .left-text {
            font-size: 14px;
            line-height: 46px;
            height: 46px;
            display:inline-block;
            padding-left: 4px;
            transform: translateY(-4px)

        }
    }
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
                color: @colorBlue;
            }
        }
        .argeement-box {
            padding: 0 14px;
            margin-top: 10px;
            height:96px;
            span {
                display: inlie-block;
                font-size: 12px;
                line-height: 24px;
                // height: 96px;
            }
            .argeement {
                color: @colorBlue;
                padding-left: 5px;
            }
        }
        .login-box {
            box-sizing: border-box;
            .c-blue {
                color: @colorBlue;
                padding: 8px;
                font-size: 12px;
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
            .mb-12 {
                margin-bottom: 12px;
            }
            .mt-12 {
                margin-top: 12px;
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
                    color: @colorGray;
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