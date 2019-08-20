<template>
  <div class="g-pager" :class="{ hide: hidePager === true && totalPage <= 1 }">
    <span class="g-pager-nav prev" :class="{ disabled: currentPage === 1 }">
      <g-icon name="left" @click="onClickPage(currentPage - 1)"></g-icon>
    </span>

    <template v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="g-pager-item current" :data-number="currentPage">{{
          page
        }}</span>
      </template>

      <template v-else-if="page === '...'">
        <g-icon class="g-pager-separator" name="dots"></g-icon>
      </template>

      <template v-else>
        <span class="g-pager-item other" @click="onClickPage(page)">{{
          page
        }}</span>
      </template>
    </template>

    <span
      class="g-pager-nav next"
      @click="onClickPage(currentPage + 1)"
      :class="{ disabled: currentPage === totalPage }"
    >
      <g-icon name="right" @click="onClickPage(currentPage + 1)"></g-icon>
    </span>
  </div>
</template>
<script>
import GIcon from "../icon";
export default {
  name: "GPager",
  components: { GIcon },
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    hidePager: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    pages() {
      // 依赖了 totalPage 和 currentPage
      return this.unique(
        [
          1,
          this.currentPage - 1,
          this.currentPage,
          this.currentPage + 1,
          this.totalPage
        ]
          .filter(n => n >= 1 && n <= this.totalPage)
          .sort((a, b) => a - b)
      ).reduce((prev, current, index, array) => {
        prev.push(current);
        let canAddSeparator =
          array[index + 1] !== undefined && array[index + 1] - array[index] > 1;
        if (canAddSeparator) {
          prev.push("...");
        }
        return prev;
      }, []);
    }
  },
  methods: {
    onClickPage(n) {
      if (n >= 1 && n <= this.totalPage) {
        this.$emit("update:currentPage", n);
      }
    },
    //对数组去重
    unique(array) {
      // return [...new Set(array)]
      // array = [1 1 2 3 4 5 20]
      const obj = {};
      array.map(i => {
        obj[i] = true;
      });
      //console.log('object.keys',Object.keys(object));
      return Object.keys(obj).map(string => parseInt(string, 10));
    }
  }
};
</script>
<style scoped lang="scss">
$width: 20px;
$height: 20px;
$font-size: 12px;
$border-radius: 4px;
$border-color1: #e1e1e1;
$blue: #4a90e2;
$grey: #eee;
.g-pager {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  &.hide {
    display: none;
  }
  &-separator {
    width: $width;
    font-size: 14px;
  }
  &-item {
    min-width: $width;
    height: $height;
    font-size: 14px;
    border: 1px solid $border-color1;
    border-radius: 4px;
    padding: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 4px;
    cursor: pointer;
    &.current,
    &:hover {
      border-color: $blue;
    }
    &.current {
      cursor: default;
    }
  }
  &-nav {
    margin: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: $grey;
    height: $height;
    width: $width;
    border-radius: $border-radius;
    font-size: 14px;
    cursor: pointer;
    &.disabled {
      cursor: default;
      svg {
        fill: darken($grey, 30%);
      }
    }
  }
}
</style>
