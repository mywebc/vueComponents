<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GoTabsPane",
        inject: ['eventBus'],
        props: {
            name: {
                type: String | Number,
                required: true
            }
        },
        data() {
            return  {
                // 写在data里
                active: false
            }
        },
        created() {
            // 自己也要监听
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
        computed: {
            classes () {
                return {
                    active: this.active
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabs-pane {
        padding: 1em;
        &.active {
        }
    }
</style>