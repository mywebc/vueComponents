<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "GoTabs",
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        },
        provide() {
            return {
                // 建立事件中心，这样写自己获取不到事件中心，我们可以把他放到data里面
                // eventBus: new Vue()
                eventBus: this.eventBus
            }
        },
        data() {
            return  {
                eventBus: new Vue()
            }
        },
        mounted() {
            // console.log('this.eventBus', this.eventBus)
            // 选中时发送事件
            this.eventBus.$emit("update:selected", this.name)
        }
    }
</script>

<style scoped>
    .tabs {

    }
</style>