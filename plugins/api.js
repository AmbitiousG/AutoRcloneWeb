import Vue from "vue";
import api from "../utils/api";
// const apiPlugin = {
//   install(Vue) {
//     Vue.$api = api;
//   }
// }

// Vue.use(apiPlugin);

Vue.prototype.$api = api;
