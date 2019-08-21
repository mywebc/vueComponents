<template>
    <div class="g-table-wrapper">
        <table class="g-table" :class="bordered ,compact, striped">
            <thead>
            <tr>
                <th><input type="checkbox" @change="onChangeAllItems" ref="allChecked" :checked="areAllItemsSelected"/>
                </th>
                <th>#</th>
                <th v-for="column,index in columns" :key="index">
                    <div class="g-table-header">
                        {{column.text}}
                        <span class="g-table-sorter" v-if="orderBy && column.field in orderBy"
                              @click="changeOrderBy(column.field)">
                            <g-icon name="asc" :class="{active: orderBy[column.field] === 'asc'}"></g-icon>
                            <g-icon name="desc" :class="{active: orderBy[column.field] === 'desc'}"></g-icon>
                        </span>
                    </div>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item, index in dataSource" :key="index">
                <td><input type="checkbox" @change="onChangeItem(item, index, $event)"
                           :checked="isSelectedCheckbox(item)"
                /></td>
                <td v-if="numberVisible">{{index+1}}}</td>
                <template v-for="column in columns">
                    <td :key="column.field">{{item[column.field]}}</td>
                </template>
            </tr>
            </tbody>
        </table>
        <div class="g-table-loading" v-if="loading">
            <g-icon name="loading" class="g-table-loading-inner"></g-icon>
        </div>
    </div>
</template>
<script>
    import GIcon from '../icon'

    export default {
        name: "GOTable",
        components: {GIcon},
        props: {
            loading: {
                type: Boolean,
                default: false,
            },
            orderBy: {
                type: Object,
                default: () => ({})
            },
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
                    copy = copy.filter(i => i.id !== item.id)
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
            },
            //切换排序状态，并通知组件外部
            changeOrderBy(key) {
                const newOrderBy = JSON.parse(JSON.stringify(this.orderBy))
                let old = newOrderBy[key]
                if (old === 'asc') {
                    newOrderBy[key] = 'desc'
                } else if (old === 'desc') {
                    newOrderBy[key] = true
                } else {
                    newOrderBy[key] = 'asc'
                }
                console.log(newOrderBy);
                this.$emit('update:orderBy', newOrderBy)
            },

        },
        computed: {
            // 计算当前选中的是否相等
            areAllItemsSelected() {
                let a = this.dataSource.map(item => item.id).sort()
                let b = this.selectedItems.map(item => item.id).sort()
                if (a.length !== b.length) {
                    return false
                }
                let equal = true
                for (let i = 0; i < a.length; i++) {
                    if (a[i] !== b[i]) {
                        equal = false
                        break
                    }
                }
                return equal
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