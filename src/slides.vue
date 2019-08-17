<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="window">
      <slot> </slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "GoSlides",
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    // 默认选中
    this.updateChildren();
    this.playAutomatically();
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    playAutomatically() {
      debugger;
      const names = this.$children.map(vm => vm.name);
      const index = names.indexOf(this.getSelected());
      let run = () => {
        let newIndex = index - 1;
        if (newIndex === -1) {
          newIndex = names.length - 1;
        }
        if (newIndex === names.length) {
          newIndex = 0;
        }
        this.$emit("update:selected", names[newIndex]);
        // 使用setTimeout取代setInterval
      };
      setTimeout(run, 2000);
    },
    // 获取选中的name
    getSelected() {
      const first = this.$children[0];
      return this.selected || first.name;
    },
    updateChildren() {
      const selected = this.getSelected();
      // 当slides组件更新时
      this.$children.forEach(vm => {
        vm.selected = selected;
        const names = this.$children.map(vm => vm.name);
        let newIndex = names.indexOf(selected);
        let oldIndex = names.indexOf(vm.name);
        vm.reverse = newIndex > oldIndex ? false : true;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.g-slides {
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      width: 20px;
      height: 20px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: #ddd;
      border-radius: 50%;
      margin: 0 8px;
      font-size: 12px;
      &:hover {
        cursor: pointer;
      }
      &.active {
        background: black;
        color: white;
        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>
