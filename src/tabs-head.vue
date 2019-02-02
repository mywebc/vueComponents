<template>
    <div class="tabs-head">
        <slot></slot>
        <slot name="action"></slot>
    </div>
</template>

<script>
    export default {
        name: "GoTabsHead"
    }
</script>

<style scoped>
    .tabs-head {

    }
</style>