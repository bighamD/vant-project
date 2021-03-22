<template>
    <div>
        <span v-if="!hasSendMsg" @click="() => this.hasSendMsg = true" class="c-blue">获取验证码</span>
        <van-count-down v-else :time="time" @finish="onCountDownFinish">
            <template v-slot="time">
                <span class="count-down">{{ time.seconds }} s后</span>
            </template>
        </van-count-down>
    </div>
</template>
<script>
export default {
    props: {
        time: {
            type: Number,
            default: () => 60 * 100,
        }
    },
    data() {
        return {
            hasSendMsg: false,
        }
    },
    methods: {
        onCountDownFinish() {
            this.isCountDownFinished = true;
            this.hasSendMsg = false;
        },
    }
}
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