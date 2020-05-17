import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./plugins/axios.js"
import httpsapi from "./api/api";
import scroll from "vue-seamless-scroll";
Vue.use(scroll);
Vue.prototype.Home = 'https://www.hebkjcg.com/'
Vue.prototype.$baseAPI = httpsapi
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
