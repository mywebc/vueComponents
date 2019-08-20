<template>
    <div class="g-table-wrapper">
        <table class="g-table" :class="bordered ,compact, striped">
            <thead>
            <tr>
                <th><input type="checkbox" @change="onChangeAllItems" ref="allChecked"/></th>
                <th>#</th>
                <th v-for="column in columns">{{column.text}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item, index in dataSource">
                <td><input type="checkbox" @change="onChangeItem(item, index, $event)"
                           :checked="isSelectedCheckbox(item)"
                /></td>
                <td v-if="numberVisible">{{index+1}}}</td>
                <template v-for="column in columns">
                    <td>{{item[column.field]}}</td>
                </template>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        name: "GOTable",
        props: {
            columns: {
                type: Array,
                required: true
            },
            selectedItems: {
                type: Array,
                default: () => []
            },
            dataSource: {
                type: Array,
                required: true,
                validator: function (array) {
                    return array.filter(i => i.id === undefined) <= 0;
                }
            },
            numberVisible: {
                type: Boolean,
                default: false
            },
            bordered: {
                type: Boolean,
                default: false
            },
            compact: {
                type: Boolean,
                default: false
            },
            striped: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            onChangeItem(item, index, e) {
                let selected = e.target.checked
                let copy = JSON.parse(JSON.stringify(this.selectedItems))
                if (selected) {
                    copy.push(item)
                } else {
                    copy.splice(copy.indexOf(item), 1)
                }
                this.$emit("update:selectedItems", copy)
            },
            onChangeAllItems(e) {
                let selected = e.target.checked
                if (selected) {
                    this.$emit("update:selectedItems", this.dataSource)
                } else {
                    this.$emit("update:selectedItems", [])
                }
            },
            // 判断每条数据选中状态
            isSelectedCheckbox(item) {
                return this.selectedItems.filter(i => i.id === item.id).length > 0
            }
        },
        watch: {
            //切换半选状态
            selectedItems() {
                if (this.selectedItems.length === this.dataSource.length) {
                    this.$refs.allChecked.indeterminate = false
                } else if (this.selectedItems.length === 0) {
                    this.$refs.allChecked.indeterminate = false
                } else {
                    this.$refs.allChecked.indeterminate = true
                }
            }
        },
    }
</script>
<style scoped lang="scss">
    $grey: #eee;
    @mixin spin {
        animation: spin 2s infinite linear;
    }

    @keyframes loadingSpan {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .g-table-wrapper {
        position: relative;
    }

    .g-table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        &.hasBorder {
            tr, td, th {
                border: 1px solid $grey;
            }
        }
        &.compact {
            td, th {
                padding: 5px;
            }
        }
        &.striped {
            tbody {
                > tr {
                    &:nth-child(even) {
                        background: lighten($grey, 5%)
                    }
                }
            }
        }
        tbody {
            tr:hover {
                background: rgb(245, 247, 250);
            }
        }
        td, th {
            text-align: left;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            word-break: break-all;
            line-height: 23px;
            padding: 10px;
            color: rgb(96, 98, 102);
            font-size: 14px;
            border-bottom: 1px solid $grey;
            text-align: left;
        }
        &-sorter {
            display: inline-flex;
            flex-direction: column;
            margin: 0 4px;
            cursor: pointer;
            vertical-align: middle;
            svg {
                width: 10px;
                height: 10px;
                fill: $grey;
                &.active {
                    fill: rgb(96, 98, 102);
                }
                &:first-child {
                    position: relative;
                    bottom: -1px;
                }
                &:nth-child(2) {
                    position: relative;
                    top: -1px;
                }
            }
        }
        &-loading {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(255, 255, 255, 0.5);
            z-index: 2;
            top: 0;
            left: 0;
            &-inner {
                width: 60px;
                height: 60px;
                animation: loadingSpan 2s linear infinite;
            }
        }
        &-icon {
            width: 10px;
            height: 10px;
            cursor: pointer;
            @keyframes xxx {
                0% {transform: rotate(0deg)}
                100% {transform: rotate(90deg)}
            }
            &.open {
                animation: xxx .3s linear;
                animation-fill-mode: forwards
            }
        }
    }
</style>