import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store/index.js";
import './styles/styles.scss'
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
