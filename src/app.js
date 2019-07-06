import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import Input from "./input";
import Row from "./row";
import Col from "./col";
import Layout from "./layout";
import Content from "./content";
import Header from "./header";
import Footer from "./footer";
import Sider from "./sider";

import plugin from "./plugin";

import Tabs from "./tabs";
import TabsHead from "./tabs-head";
import TabsBody from "./tabs-body";
import TabsItem from "./tabs-item";
import TabsPane from "./tabs-pane";

import Popover from "./popover";
import Collapse from "./collapse";
import CollapseItem from "./collapse-item";
import Cascader from "./cascader";

Vue.component("g-button", Button);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-cascader", Cascader);
Vue.component("g-col", Col);
Vue.component("g-collapse", Collapse);
Vue.component("g-collapse-item", CollapseItem);
Vue.component("g-content", Content);
Vue.component("g-footer", Footer);
Vue.component("g-header", Header);
Vue.component("g-icon", Icon);
Vue.component("g-input", Input);
Vue.component("g-layout", Layout);
Vue.component("g-popover", Popover);
Vue.component("g-row", Row);
Vue.component("g-sider", Sider);
Vue.component("g-tabs", Tabs);
Vue.component("g-tabs-body", TabsBody);
Vue.component("g-tabs-head", TabsHead);
Vue.component("g-tabs-item", TabsItem);
Vue.component("g-tabs-pane", TabsPane);
Vue.use(plugin);

new Vue({
  el: "#app",
  data: {
    selectedTab: "first",
    source: [
      {
        name: "江苏省",
        children: [
          {
            name: "南通市"
          },
          {
            name: "宿迁市"
          }
        ]
      },
      {
        name: "浙江省",
        children: [
          {
            name: "湖州市"
          },
          { name: "杭州市" }
        ]
      }
    ]
  },
  methods: {
    yyy(data) {
      console.log(data);
    },
    showToast() {
      this.$toast("加油", {
        enableHtml: true,
        position: "top",
        autoClose: false
      });
    },
    showToast2() {
      this.$toast("加油", {
        enableHtml: true,
        position: "middle",
        autoClose: false
      });
    },
    showToast3() {
      this.$toast("加油", {
        enableHtml: true,
        position: "bottom",
        autoClose: 2
      });
    }
  }
});
