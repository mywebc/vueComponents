<template>
  <div class="cascaderItem">
    {{ sourceItem.name }}
    <cascader-item
      v-if="sourceItem.children"
      v-for="item in sourceItem.children"
      :sourceItem="item"
    ></cascader-item>
  </div>
</template>

<script>
export default {
  name: "cascaderItem",
  props: {
    sourceItem: {
      type: Object
    }
  },
  mounted() {
    console.log("子组件接受的props", this.sourceItem);
  }
};
</script>

<style scoped lang="scss">
.cascaderItem {
  border: 1px solid red;
  margin: 10px;
}
</style>
