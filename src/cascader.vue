<template>
  <div class="cascader">
    <div class="trigger" @click="poppoverVisible = !poppoverVisible"></div>
    <div class="popover" v-if="poppoverVisible" :style="{height: `${height}px`}">
      <cascader-items :items="source" :height="height"></cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from "./cascaderI-items";
export default {
  name: "GoCascader",
  components: { CascaderItems },
  props: {
    source: {
      type: Array
    },
    height: {
      type: Number
    }
  },
  data() {
    return {
      poppoverVisible: false
    };
  }
};
</script>

<style scoped lang="scss">
@import "var.scss";
.cascader {
  position: relative;
  .trigger {
    width: 80px;
    height: 32px;
    border: 1px solid #000;
  }
  .popover {
    background: #fff;
    position: absolute;
    top: 100%;
    left: 0;
    width: 200px;
    display: flex;
  }
}
</style>
