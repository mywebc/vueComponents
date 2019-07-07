<template>
  <div class="cascader">
    <div class="trigger" @click="poppoverVisible = !poppoverVisible"></div>
    <div class="popover" v-if="poppoverVisible">
      <div class="level1">
        <div
          class="label"
          v-for="item1 in source"
          @click="level1Selected = item1"
        >
          {{ item1.name }}
        </div>
      </div>
      <div class="level2">
        <div v-for="item2 in level1Items" @click="level2Selected = item2" class="label">
          {{ item2.name }}
        </div>
      </div>
      <div class="level3">
        <div v-for="item3 in level2Items" class="label">{{ item3.name }}</div>
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
  data() {
    return {
      poppoverVisible: false,
      level1Selected: null,
      level2Selected: null
    };
  },
  mounted() {
    console.log("接受到的props", this.source);
  },
  computed: {
    level1Items: function() {
      return !this.level1Selected ? [] : this.level1Selected.children;
    },
    level2Items: function() {
      return !this.level2Selected ? [] : this.level2Selected.children;
    }
  }
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
