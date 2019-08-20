<template>
  <div class="wrapper">
    <g-pager :totalPage="16" :currentPage.sync="currentPage"></g-pager>
  </div>
</template>

<script>
import GPager from "./pager.vue";
export default {
  components: {
    "g-pager": GPager
  },
  data() {
    return {
      currentPage: 1
    };
  },
  methods: {}
};
</script>

<style lang="scss"></style>
