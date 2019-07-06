<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="item in source">
        <cascader-item :sourceItem="item"></cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
import CascaderItem from "./cascaderI-item";
export default {
  name: "GoCascader",
  components: { CascaderItem },
  props: {
    source: {
      type: Array
    }
  },
  mounted() {
    console.log("接受到的props", this.source);
  },
  methods: {}
};
</script>

<style scoped lang="scss">
@import "var.scss";
.cascader {
}
</style>
