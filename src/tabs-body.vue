<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GoTabsBody",
        inject: ['eventBus'],
        created() {
        }
    }
</script>

<style scoped>
    .tabs-body {

    }
</style>