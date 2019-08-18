<template>
    <div class="tabs" :class="`position-${direction}`">
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
            if (this.$children.length === 0) {
                console && console.warn &&
                console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
            }
            // 选中时发送事件
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'GoTabsHead') {
                    vm.$children.forEach((childVm) => {
                        if (childVm.$options.name === 'GoTabsItem'
                            && childVm.name === this.selected) {
                            this.eventBus.$emit('update:selected', this.selected, childVm)
                        }
                    })
                }
            })
            // 如果有设置方向
            if(this.direction) {
                this.eventBus.$emit('direction', this.direction)
            }
        }
    }
</script>

<style scoped lang="scss">
    $tab-height: 120px;
    .tabs {
        &.position-vertical {
            display: flex;
            flex-direction: row;
            height: $tab-height;
        }
    }
</style>