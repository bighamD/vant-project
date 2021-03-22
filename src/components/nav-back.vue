<template>
    <nav class="nav-box" @click="onBack">
        <span class="arrow">
            <van-icon size="18px" name="arrow-left" />
        </span>
        <span class="left-text">返回登录</span>
        <span class="title"></span>
    </nav>
</template>
<script>
export default {
    methods: {
        onBack() {
            this.$emit('on-back');
        }
    }
}
</script>
<style lang="less" scoped>
    .nav-box {
        position:absolute;
        height:46px;
        // top:20px;
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
</style>