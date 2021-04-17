<template>
  <div class="home">
    <main>
      <div class="user-box">
        <div class="avatar-box">
          <div class="avatar">
            <div class="image-box">
              <img :src="userInfo.photo" alt="" />
            </div>
            <div class="info-box">
              <span class="user-name">{{ userInfo.username }}</span>
              <span class="user-address"
                >{{ userInfo.officeName }}

                <span class="user-address-edit" @click="showEdit = true"
                  >修改</span
                >
              </span>
            </div>
          </div>
        </div>
        <div class="qrcode-box" @click="genQRcode">
          <!-- <span class="left-icon"> -->
          <!-- <van-icon name="cash-back-record" /> -->
          <img class="left-icon" src="../../../public/img/qrcode.jpeg" alt="" />
          <!-- </span> -->
          <span class="text">生成支付码</span>
          <span class="right-icon">
            <van-icon name="arrow" />
          </span>
        </div>
      </div>
      <div class="divder"></div>
      <div class="order-box">
        <div class="order-nav">
          <div class="order-tit">我的订单</div>
          <div class="order-more" @click="seeMore">
            查看更多
            <van-icon class="mt2" name="arrow" />
          </div>
        </div>
        <div class="order-list">
          <div class="order-info-box" v-for="row in orderList" :key="row.id">
            <div class="top">
              <span class="order-price">¥{{ row.totalAmount }}</span>
              <span class="order-status">{{
                row.state | filterPayStatus
              }}</span>
            </div>
            <div class="bottom">
              <span class="custom-name">{{ row.createBy.id }}</span>
              <span class="create-date">{{ row.updateDate }}</span>
            </div>
          </div>
          <div v-if="orderList.length === 0" class="no-data_tips">
            <img src="../../../public/img/no-data.jpg" alt="" />
            <div class="no-data_text">=͟͟͞͞(꒪⌓꒪*)！ 暂无更多数据</div>
          </div>
        </div>
      </div>
      <van-dialog
        v-model:show="showEdit"
        @confirm="handleConfirm"
        confirm-button-color="#409EFF"
        title="修改绑定商户"
        show-cancel-button
      >
        <van-field placeholder="请输入商户名" v-model="officeName"></van-field>
      </van-dialog>
    </main>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">我的</van-tabbar-item>
      <van-tabbar-item icon="search" to="/order-list">订单</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getOrderList, updateOfficeName } from '../../api/index';
import { filterPayStatus } from '../../filter/index';
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      active: 0,
      orderList: [],
      showEdit: false,
      officeName: ''
    };
  },
  created () {
    this.reqOrderList();
  },

  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    async reqOrderList () {
      const { rows = [] } = await getOrderList();
      this.orderList = rows.slice(0, 3);
    },
    async handleConfirm () {
      const officeName = this.officeName;
      try {
        await updateOfficeName({
          officeName
        });
        this.userInfo.officeName = officeName;
        this.$store.dispatch('setUserInfo', this.userInfo);
      } catch (err) {}
    },
    seeMore () {
      this.$router.push('./order-list');
    },
    genQRcode () {
      this.$router.push('./gen-qrcode');
    }
  },
  filters: {
    filterPayStatus
  }
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  .divder {
    height: 7px;
    background-color: #f7f7f7;
  }
  .user-box {
    padding: 30px 19px 0 19px;

    .avatar {
      margin-bottom: 17px;
      display: flex;
      .image-box {
        height: 46px;
        width: 46px;
        img {
          height: 100%;
          width: 100%;
          border-radius: 50%;
        }
      }
      .info-box {
        margin-left: 10px;
        height: 46px;
        span {
          display: block;
          text-align: left;
          height: 24px;
          line-height: 24px;
          color: rgba(16, 16, 16, 100);
        }
        .user-name {
          font-size: 14px;
          color: rgba(16, 16, 16, 100);
        }
        .user-address {
          font-size: 12px;
          .user-address-edit {
            display: inline;
            padding-left: 10px;
            padding-right: 20px;
            color: #409eff;
          }
        }
      }
    }
    .qrcode-box {
      width: 100%;
      position: relative;
      height: 42px;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      .left-icon {
        height: 20px;
        width: 20px;
        left: 0;
        top: 10px;
        position: absolute;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        font-size: 14px;
        text-align: left;
        color: rgba(134, 134, 134, 100);
        height: 24px;
        line-height: 24px;
        position: absolute;
        left: 40px;
      }
      .right-icon {
        position: absolute;
        font-size: 16px;
        right: 0px;
      }
    }
  }
  .order-box {
    padding: 0px 19px 0 19px;
    .order-nav {
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid rgba(236, 236, 236, 100);
      margin-bottom: 12px;
      .order-tit {
        font-size: 16px;
        height: 100%;
        line-height: 50px;
      }
      .order-more {
        font-size: 14px;
        height: 100%;
        line-height: 50px;
        color: rgba(155, 155, 155, 100);
        .mt2 {
          transform: translate(0, 2px);
        }
      }
    }
    .order-list {
      .order-info-box {
        margin-bottom: 22px;
        height: 70px;
        box-shadow: 0 1px 5px #ccc;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 100);
        .top {
          display: flex;
          justify-content: space-between;
          padding: 0 15px;
          height: 35px;
          align-items: flex-start;
          span {
            font-size: 14px;
            line-height: 35px;
            height: 35px;
          }
          .order-price {
            color: #ffc200;
          }
          .order-status {
            color: #101010;
          }
        }
        .bottom {
          display: flex;
          padding: 0 15px;
          justify-content: space-between;
          align-items: flex-start;
          span {
            font-size: 12px;
            line-height: 35px;
            height: 35px;
            color: #959595;
          }
        }
      }
    }
  }
}
</style>
