<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "GoCollapse",
        data() {
            return {
                eventBus: new Vue()
            }
        },
        props: {
          single: {
              type: Boolean,
              default: false
          },
            selected: {
              type: String
            }
        },
        // 必须返回一个对象
        provide() {
            if(this.single) {
                return {
                    eventBus: this.eventBus
                }
            }
        },
        mounted() {
            this.eventBus.$emit('update:selected', this.selected)
            this.eventBus.$on('update:selected', (name) => {
                this.$emit('update:selected', name)
            })
        }
    }
</script>

<style scoped lang="scss">
    .collapse {

    }
</style>