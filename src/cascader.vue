<template>
  <div class="cascader">
    <div class="trigger" @click="poppoverVisible = !poppoverVisible"></div>
    <div class="popover" v-if="poppoverVisible">
        <cascader-items :items="source"></cascader-items>
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
    }
  },
  data() {
    return {
      poppoverVisible: false,
    };
  },
};
</script>

<style scoped lang="scss">
@import "var.scss";
.cascader {
  .trigger {
    width: 80px;
    height: 32px;
    border: 1px solid red;
  }
  .popover {
    width: 200px;
    height: 100px;
    border: 1px solid red;
    display: flex;
    .label {
      width: 60px;
      border: 1px solid #000;
    }
  }
}
</style>
