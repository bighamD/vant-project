<template>
  <div class="home">
    <main>
      <div class="user-box">
          <div class="avatar-box">
            <div class="avatar">
              <div class="image-box">
                  <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt=""/>
              </div>
              <div class="info-box">
                <span class="user-name">彭大瓜</span>
                <span class="user-address">平安银行大厦12F</span>
              </div>
            </div>
          </div>
          <div class="qrcode-box" @click="genQRcode">
            <span class="left-icon">
              <van-icon name="cash-back-record" />
            </span>
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
          <div class="order-info-box" v-for="i in Array(orderListLength)" :key="i">
            <div class="top">
              <span class="order-price">$1231</span>
              <span class="order-status">已支付</span>
            </div>
            <div class="bottom">
              <span class="custom-name">彭大瓜</span>
              <span class="create-date">20220-12-30</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/">我的</van-tabbar-item>
        <van-tabbar-item icon="search" to='/order-list'>订单</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      active: 0,
      orderListLength: 3
    };
  },
  methods: {
    seeMore () {
      this.$router.push('./order-list');
    },
    genQRcode() {
      this.$router.push('./gen-qrcode');
    }
  }
};
</script>
<style lang="less" scoped>
    .home {
      height: 100%;
      .divder {
        height:7px;
        background-color: #F7F7F7;
      }
      .user-box {
        padding: 30px 19px 0 19px;

        .avatar {
          margin-bottom: 17px;
          display:flex;
          .image-box {
            height: 46px;
            width: 46px;
            img {
              height: 100%;
              width:100%;
              border-radius:50%;
            }
          }
          .info-box {
            margin-left: 10px;
            height:46px;
            span {
              display: block;
              text-align: left;
              height:24px;
              line-height: 24px;
            }
            .user-name {
              font-size: 14px;
              color: rgba(16, 16, 16, 100);;
            }
            .user-address {
              font-size: 12px;
            }
          }
        }
        .qrcode-box {
          width:100%;
          position: relative;
          height: 42px;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          .left-icon {
            left: 0;
            top: 10px;
            position: absolute;
          }
          .text {
            font-size: 14px;
            text-align: left;
            color: rgba(134, 134, 134, 100);
            height: 24px;
            line-height:24px;
            position:absolute;
            left: 40px;
          }
          .right-icon {
            position: absolute;
            font-size:16px;
            right:0px;
          }
        }
      }
      .order-box {
       padding: 0px 19px 0 19px;
        .order-nav {
          height:50px;
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          border-bottom: 1px solid rgba(236, 236, 236, 100);
          margin-bottom: 12px;
          .order-tit {
            font-size:16px;
            height: 100%;
            line-height: 50px;;
          }
          .order-more {
            font-size:14px;
            height: 100%;
            line-height: 50px;
            color: rgba(155, 155, 155, 100);
            .mt2 {
              transform: translate(0, 2px)
            }
          }

        }
        .order-list {
          .order-info-box {
            margin-bottom: 22px;
            height:70px;
            box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
            border-radius:10px;
            background-color: rgba(255, 255, 255, 100);
            .top{
              display:flex;
              justify-content:space-between;
              padding: 0 15px;
              height: 35px;
              align-items:flex-start;
              span {
                font-size: 14px;;
                line-height: 35px;
                height:35px;
              }
              .order-price {
                color: #FFC200 ;
              }
              .order-status {
                color: #101010;
              }
            }
            .bottom{
              display:flex;
              padding: 0 15px;
              justify-content:space-between;
              align-items:flex-start;
              span {
                font-size: 12px;
                line-height: 35px;
                height:35px;
                color: #959595;
              }
            }
          }
        }

      }
    }
</style>
