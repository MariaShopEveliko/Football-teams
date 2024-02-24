import Vue from "vue";
import App from "@/App.vue";
import store from "@/assets/js/store.js";

import "@/assets/scss/main.scss";

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
