import Vue from "vue";
import Button from "./button/button";
import Icon from "./icon";
import ButtonGroup from "./button/button-group";
import Input from "./input/input";
import Row from "./grid/row";
import Col from "./grid/col";
import Layout from "./layout/layout";
import Content from "./layout/content";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Sider from "./layout/sider";

import plugin from "./plugin";

import Tabs from "./tabs/tabs";
import TabsHead from "./tabs/tabs-head";
import TabsBody from "./tabs/tabs-body";
import TabsItem from "./tabs/tabs-item";
import TabsPane from "./tabs/tabs-pane";

import Popover from "./popover/popover";
import Collapse from "./collapse/collapse";
import CollapseItem from "./collapse/collapse-item";
import Cascader from "./cascader/cascader";

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
            name: "南通市",
            children: [{ name: "开发区" }, { name: "崇川区" }]
          },
          {
            name: "宿迁市",
            children: [{ name: "宿迁区" }]
          }
        ]
      },
      {
        name: "浙江省",
        children: [
          {
            name: "湖州市",
            children: [{ name: "湖州区" }, { name: "湖州2区" }]
          },
          {
            name: "杭州市",
            children: [{ name: "杭州一区" }, { name: "杭州二区" }]
          }
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
