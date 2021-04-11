import Vue from "vue";
import Vuex from "vuex";
import { setToken } from "../utils/auth";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {},
    token: ""
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      state.userInfo = payload;
    },
    SET_TOKEN(state, payload) {
      state.token = payload;
    }
  },
  actions: {
    setUserInfo({ commit }, { userinfo, token }) {
      commit("SET_USER_INFO", {
        ...userinfo,
        photo: process.env.VUE_APP_CDN_BASE_API + userinfo.photo
      });
      commit("SET_TOKEN", token);
      setToken(token);
      router.push("/home");
    }
  }
});
