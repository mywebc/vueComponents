<template>
  <div class="cascaderItems">
    <div class="left">
      <div v-for="item in items" @click="leftSelected = item">
        {{ item.name }}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-items :items="rightItems"></cascader-items>
    </div>
  </div>
</template>

<script>
export default {
  name: "cascaderItems",
  props: {
    items: {
      type: Array
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
.cascaderItems {
  border: 1px solid red;
  margin: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  .right {
    margin-top: -1px;
  }
}
</style>
