import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoading: false,
    allData: [],
  },
  getters: {},
  mutations: {
    LOADING_STATUS(state, newLoadingStatus) {
      state.isLoading = newLoadingStatus;
    },
    SET_ALL_DATA(state, data) {
      state.allData = data;
      console.log(data);
    },
  },
  actions: {
    getAllPosts({ commit }, url) {
      // REGARD TO FEEDBACK: update naming convention in actions
      commit("LOADING_STATUS", true);

      return axios // REGARD TO FEEDBACK: move action calling the getting of data from mutations to actions
        .get(url)
        .then((response) => {
          commit("SET_ALL_DATA", response.data);
          commit("LOADING_STATUS", false);
        })
        .catch((error) => console.log(error)); // REGARD TO FEEDBACK: add handle error
    },
  },
  modules: {},
});

export default store;
