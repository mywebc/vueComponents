<template>
  <button
    class="g-button"
    :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
  >
    <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
    <g-icon name="loading" class="loading icon" v-if="loading"></g-icon>
    <div class="contentBtn">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "../icon";
export default {
  name: "GoButton",
  // props: ["icon","iconPosition"]
  components: { "g-icon": Icon },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      // 属性的检查器
      validator(val) {
        // 只能保证传入的值为left和right
        return val === "left" || val === "right";
      }
    }
  },
  mounted() {
    console.log("loading", this.loading);
    console.log("icon", this.icon);
  }
};
</script>

<style lang="scss" scoped>
@import "../var";

.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .contentBtn {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }

  &.icon-right {
    > .contentBtn {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
