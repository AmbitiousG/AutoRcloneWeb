import Vue from "vue";

Vue.prototype.$sockets = {
  socket: null,
  init(socket) {
    this.socket = socket;
  }
}
