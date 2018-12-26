import Vue from "vue";
import App from "./App";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});
