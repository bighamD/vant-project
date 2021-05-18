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
      <van-pull-refresh
        v-model="state.loading"
        @refresh="onRefresh"
        v-if="state.list.length"
      >
        <van-list
          v-model="state.listLoading"
          :finished="state.finished"
          finished-text="—— 暂无更多 ——"
          @load="onLoad"
        >
          <van-cell
            class="cell-detail"
            v-for="(row, i) in state.list"
            :key="i"
            :border="border"
          >
            <div class="order-details">
              <div class="order-no">
                <div class="detail-no">订单号</div>
                <div class="detail-status">
                  {{ row.state | filterPayStatus }}
                </div>
              </div>
              <div class="detail-no__text">{{ row.orderNo }}</div>
              <div class="mch-name">{{ row.officeName }}</div>
              <div class="user-name title">金额</div>
              <div class="name content">¥{{ row.totalAmount }}</div>
              <div class="finished-tit title">订单生成时间</div>
              <div class="finished-date content">
                {{ row.createDate }}
                <div class="user-name title">客户姓名</div>
                <div class="name content">{{ row.clientName }}</div>
                <div class="phone title">手机号</div>
                <div class="phone-num content">{{ row.clientPhone }}</div>
              </div>
            </div>
          </van-cell>
        </van-list>
      </van-pull-refresh>
      <div v-if="state.list.length === 0" class="no-data_tips">
        <img src="../../../public/img/no-data.jpg" alt="" />
        <div class="no-data_text">=͟͟͞͞(꒪⌓꒪*)！ 暂无更多数据</div>
      </div>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">我的</van-tabbar-item>
      <van-tabbar-item icon="search" to="/order-list">订单</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { getOrderList } from '../../api/index';
import { filterPayStatus } from '../../filter/index';

export default {
  data () {
    return {
      border: false,
      active: 1,
      state: {
        list: [],
        loading: false,
        finished: false,
        listLoading: false,
        total: 0
      },
      reqParams: {
        pageNo: 1,
        pageSize: 3
      }
    };
  },
  created () {
    this.reqOrderList();
  },
  methods: {
    async reqOrderList () {
      const { rows = [], total } = await getOrderList(this.reqParams);
      this.state.total = total;
      this.state.list = rows.slice(0, 3);
    },
    onClickLeft () {
      this.$router.go(-1);
    },
    async onRefresh () {
      this.reqParams.pageNo = 1;
      await this.reqOrderList();
      this.state.loading = false;
      this.state.finished = false;
    },
    async onLoad () {
      this.reqParams.pageNo++;
      this.state.listLoading = true;
      const { rows = [] } = await getOrderList(this.reqParams);
      if (rows.length === 0 || this.state.list.length >= this.state.total) {
        this.state.finished = true;
      } else {
        this.state.list.push(...rows);
      }
      this.state.listLoading = false;
    }
  },
  filters: {
    filterPayStatus
  }
};
</script>
<style lang="less" scoped>
@gray: rgba(183, 182, 182, 100);
@fontColor: #101010;
.contaniner {
  // background-color: #f1f1f1;
  height: 100%;
}
.order-container {
  padding: 14px;
  height: 88vh;
  .cell-detail {
    height: 245px;
    box-shadow: 0 1px 5px #ebedf0;
    border: 1px solid #f1f1f1;
    margin-bottom: 12px;
    border-radius: 12px;
    .order-details {
      div {
        line-height: 25px;
        height: 25px;
      }
      .order-no {
        display: flex;
        position: relative;
        justify-content: space-between;
        .detail-no,
        .detail-status {
          font-size: 18px;
          color: @fontColor;
        }
        .detail-status {
          position: absolute;
          right: 0;
        }
        .detail-no .detail-no__text {
          font-size: 12px;
        }
      }
      .mch-name {
        font-size: 14px;
        color: @fontColor;
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
