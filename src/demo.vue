<template>
  <div>
    <g-cascader :source="source" :height="200"></g-cascader>
    <p>123</p>
  </div>
</template>

<script>
import Cascader from "./cascader";
export default {
  components: {
    "g-cascader": Cascader
  },
  name: "demo",
  data() {
    return {
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
    };
  }
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*原生定义CSS变量*/
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
</style>
