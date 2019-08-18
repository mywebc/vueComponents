<template>
    <div class="layout_content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GoContent"
    }
</script>

<style scoped lang="scss">
    .layout_content {
        flex-grow: 1;
    }
</style>