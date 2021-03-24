<template >
    <div class="contaniner">
        <nav class="nav-bar">
            <van-nav-bar
                title="我的订单"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
            />
        </nav>
        <div class="order-container">
            <van-pull-refresh v-model="state.loading" @refresh="onRefresh" v-if="state.list.length">
                  <van-list
                        v-model="state.loading"
                        :finished="state.finished"
                        finished-text="—— 暂无更多 ——"
                        @load="onLoad"
                    >
                        <van-cell class="cell-detail" v-for="item in state.list" :key="item" :border="border">
                            <div class="order-details">
                                <div class="order-no">
                                    <div class="detail-no">
                                        订单号： xxxxxx
                                    </div>
                                    <div class="detail-status">未支付</div>
                                </div>
                                <div class="mch-name">爱慧支付有限公司</div>
                                <div class="finished-tit title">订单生成时间</div>
                                <div class="finished-date content">2021-02-02 16:44:23</div>
                                <div class="user-name title">客户姓名</div>
                                <div class="name content">彭大瓜</div>
                                <div class="phone title">手机号</div>
                                <div class="phone-num content">1368758735</div>
                            </div>
                        </van-cell>
                    </van-list>
            </van-pull-refresh>
            <div v-else class="no-list" style="height: 100%">
                暂无订单
            </div>
        </div>
        <van-tabbar  v-model="active">
            <van-tabbar-item icon="home-o" to="/home">我的</van-tabbar-item>
            <van-tabbar-item icon="search" to="/order-list">订单</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
  data () {
    return {
      border: false,
      active: 1,
      state: {
        list: [1, 2],
        loading: false,
        finished: false
      }
    };
  },
  methods: {
    genQRcode () {

    },
    onClickLeft () {
      this.$router.go(-1);
    },
    onRefresh () {
      this.state.finished = false;
      this.onLoad();
    },
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 2; i++) {
          this.state.list.push(this.state.list.length + 1);
        }

        // 加载状态结束
        this.state.loading = false;

        // // 数据全部加载完成
        if (this.state.list.length >= 6) {
          this.state.finished = true;
        }
      }, 500);
    }
  }
};
</script>
<style lang="less" scoped>
    @gray: rgba(183, 182, 182, 100);
    @fontColor: #101010;
    .contaniner {
        background-color: #F1F1F1 ;
        height:auto;
    }
    .order-container {
        padding: 14px;
        .cell-detail {
            height:245px;
            box-shadow: 0 1px 5px #ebedf0;
            border: 1px solid #f1f1f1;
            margin-bottom:12px;
            border-radius: 12px;
            .order-details {
                div {
                    line-height: 28px;
                    height:28px;
                }
                .order-no {
                    display: flex;
                    justify-content:space-between;
                    .detail-no, .detail-status {
                        font-size: 18px;
                        color: @fontColor;
                    }

                }
                .mch-name {
                    font-size: 14px;
                    color: @gray;
                }
                .title {
                    color: @gray;
                    font-size: 12px;
                }
                .content {
                    font-size: 16px;
                    color: @fontColor;
                }
            }
        }
    }

</style>
