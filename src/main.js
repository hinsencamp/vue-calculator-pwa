import Vue from "vue";
import App from "./App";
import VeeValidate from "vee-validate";
import vSelect from "vue-select";

Vue.use(VeeValidate);
Vue.component("v-select", vSelect);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});
