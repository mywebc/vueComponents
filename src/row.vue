<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "row",
        props: {
            gutter: {
                type: [Number, String]
            }
        },
        mounted() {
            //把gutter传给col
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        },
        computed: {
            rowStyle() {
                let { gutter } = this
                return {
                    marginLeft: -gutter/2 + 'px',
                    marginRight: -gutter/2 + 'px'
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .row {
        display: flex;
    }
</style>