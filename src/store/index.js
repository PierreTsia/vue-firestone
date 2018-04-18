import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [
      {
        title: "Mock Title",
        description: "mock description",
        created_date: Date.now(),
      },
    ],
  },
  getters: {
    posts: state => state.posts,
  },
  mutations: {
    // Mutate the current state
  },
  actions: {
    // Get data from server and send that to mutations to mutate the current state
  },
});
// You can assign a store to variable and export
export const store = new Vuex.Store({});
