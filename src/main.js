import Vue from "vue";
import Demo from "./demo.vue";
import PagerDemo from "./pager/demo";

Vue.config.productionTip = false;

new Vue({
  render: h => h(PagerDemo)
}).$mount("#app");
