<template>
  <div
    class="g-slides"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-dots">
      <span @click="onClickPrev" data-action="prev">
        <g-icon name="left"></g-icon>
      </span>
      <span
        v-for="n in childrenLength"
        :class="{ active: selectedIndex === n - 1 }"
        :key="n"
        :data-index="n - 1"
        @click="select(n - 1)"
        >{{ n }}</span
      >
      <span @click="onClickNext" data-action="next">
        <g-icon name="right"></g-icon>
      </span>
    </div>
  </div>
</template>

<script>
import GIcon from "../icon";
export default {
  name: "GoSlides",
  components: { GIcon },
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    autoPlayDelay: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timerId: undefined,
      startTouch: undefined
    };
  },
  mounted() {
    // 默认选中
    this.updateChildren();
    if (this.autoPlay) {
      this.playAutomatically();
    }
    this.childrenLength = this.items.length;
  },
  updated() {
    this.updateChildren();
  },
  computed: {
    selectedIndex() {
      let index = this.names.indexOf(this.selected);
      return index === -1 ? 0 : index;
    },
    names() {
      return this.items.map(vm => vm.name);
    },
    items() {
      return this.$children.filter(vm => vm.$options.name === "GOSlidesItem");
    }
  },
  methods: {
    onClickPrev() {
      this.select(this.selectedIndex - 1);
    },
    onClickNext() {
      this.select(this.selectedIndex + 1);
    },
    onTouchStart(e) {
      this.pause();
      // touches里面有点的坐标，以此判断向左还是向右
      if (e.touches.length > 1) {
        return;
      }
      this.startTouch = e.touches[0];
    },
    onTouchEnd(e) {
      let endTouch = e.changedTouches[0];
      let { clientX: x1, clientY: y1 } = this.startTouch;
      let { clientX: x2, clientY: y2 } = endTouch;
      // 通过角度判断到底是左右滑还是上下滑
      let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      let deltaY = Math.abs(y2 - y1);
      let rate = distance / deltaY;
      if (rate > 2) {
        if (x2 > x1) {
          this.select(this.selectedIndex - 1);
        } else {
          this.select(this.selectedIndex + 1);
        }
      }
      this.$nextTick(() => {
        this.playAutomatically();
      });
    },
    onMouseEnter() {
      this.pause();
    },
    onMouseLeave() {
      this.playAutomatically();
    },
    // 选中小圆圈
    select(newIndex) {
      this.lastSelectedIndex = this.selectedIndex;
      if (newIndex === -1) {
        newIndex = this.names.length - 1;
      }
      if (newIndex === this.names.length) {
        newIndex = 0;
      }
      this.$emit("update:selected", this.names[newIndex]);
    },
    playAutomatically() {
      // 如果当前有动画
      if (this.timerId) {
        return;
      }
      let run = () => {
        const index = this.names.indexOf(this.getSelected());
        let newIndex = index + 1;
        // if (newIndex === -1) {
        //   newIndex = this.names.length - 1;
        // }
        // if (newIndex === this.names.length) {
        //   newIndex = 0;
        // }
        this.select(newIndex);
        // 使用setTimeout取代setInterval
        this.timerId = setTimeout(run, this.autoPlayDelay);
      };
      this.timerId = setTimeout(run, this.autoPlayDelay);
    },
    // 暂停
    pause() {
      window.clearTimeout(this.timerId);
      // 别忘了置空timerId
      this.timerId = undefined;
    },
    // 获取选中的name(没有传则默认第一个)
    getSelected() {
      const first = this.$children[0];
      return this.selected || first.name;
    },
    updateChildren() {
      const selected = this.getSelected();
      // 当slides组件更新时
      this.$children.forEach(vm => {
        vm.reverse = this.selectedIndex > this.lastSelectedIndex ? false : true;
        this.$nextTick(() => {
          vm.selected = selected;
        });
      });
    }
  }
};
</script>

<style scoped lang="scss">
.g-slides {
  overflow: hidden;
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
        background: #4a90e2;
        color: white;
        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>
