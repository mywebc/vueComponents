import Vue from "vue";
// import Demo from "./demo.vue";
// import PagerDemo from "./pager/demo";
import TableDemo from "./table/demo";

Vue.config.productionTip = false;

new Vue({
    render: h => h(TableDemo)
}).$mount("#app");
