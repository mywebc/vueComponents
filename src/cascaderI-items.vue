<template>
  <div class="cascaderItems">
    <div class="left">
      <div v-for="item in items" @click="leftSelected = item" class="label">
        {{ item.name }}
        <icon class="icon" v-if="item.children" name="right" />
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-items :items="rightItems"></cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  name: "cascaderItems",
  components: { Icon },
  props: {
    items: {
      type: Array
    },
    height: {
      type: Number
    }
  },
  data() {
    return {
      leftSelected: null
    };
  },
  computed: {
    rightItems() {
      return this.leftSelected && this.leftSelected.children
        ? this.leftSelected.children
        : null;
    }
  }
};
</script>

<style scoped lang="scss">
@import "var";
.cascaderItems {
  height: 100%;
  @extend .box-shadow;
  margin: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  .left {
    height: 100%;
    padding: 0.3em 0;
    .label {
      white-space: nowrap;
      padding: 0.3em 1em;
      display: flex;
      align-items: center;
      .icon {
        margin-left: 1em;
        transform: scale(.5);
      }
    }
  }
  .right {
    height: 100%;
    margin-top: -1px;
    border-left: 1px solid $border-color-light;
  }
}
</style>
