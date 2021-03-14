import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoading: false,
    allRecords: [],
    search: "",
    singleEntry: "",
  },
  getters: {
    getRecords({ allRecords, search }) {
      if (search.length > 1) {
        return allRecords.filter(
          (item) =>
            item.title.includes(search) ||
            item.title.toLowerCase().includes(search)
        );
      }
    },
    getRecordsNumber({ allRecords }) {
      return allRecords.length;
    },
  },
  mutations: {
    LOADING_STATUS(state, newLoadingStatus) {
      state.isLoading = newLoadingStatus;
    },
    SET_ALL_DATA(state, data) {
      state.allRecords = data;
    },
    SET_SEARCH(state, value) {
      state.search = value;
    },
    SET_ENTRY(state, data) {
      state.singleEntry = data;
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
    setSearch({ commit }, payload) {
      commit("SET_SEARCH", payload);
    },
    getSingleEntry({ commit }, payload) {
      let firstLetter = payload.slice("")[0];
      let url = `/data/${firstLetter}/${payload}.json`;
      commit("LOADING_STATUS", true);

      return axios // REGARD TO FEEDBACK: move action calling the getting of data from mutations to actions
        .get(url)
        .then((response) => {
          commit("SET_ENTRY", response.data);
          commit("LOADING_STATUS", false);
        })
        .catch((error) => console.log(error)); // REGARD TO FEEDBACK: add handle error
    },
  },
  modules: {},
});

export default store;
