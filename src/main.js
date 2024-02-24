import Vue from "vue";
import App from "./App.vue";
import store from "./assets/js/store.js";

// import "./assets/main.css";

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
