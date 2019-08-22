<template>
    <div class="g-table-wrapper" ref="wrapper" :style="`width:${computeTableWidth}px`">
        <div :style="{height:`${height}px`,overflow: 'auto'}" ref="tableWrapper">
            <table class="g-table" :class="bordered ,compact, striped" ref="table">
                <thead>
                <tr>
                    <th :style="{width: '50px'}" v-if="checkable">
                        <input type="checkbox"
                               @change="onChangeAllItems"
                               ref="allChecked"
                               :checked="areAllItemsSelected"/>
                    </th>
                    <th :style="{width: '50px'}" v-if="numberVisible">#</th>
                    <th :style="{width: column.width + 'px'}" v-for="column,index in columns" :key="index">
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
                    <td :style="{width: '50px'}" v-if="checkable">
                        <input
                                type="checkbox"
                                @change="onChangeItem(item, index, $event)"
                                :checked="isSelectedCheckbox(item)"
                        /></td>
                    <td :style="{width: '50px'}" v-if="numberVisible">{{index+1}}}</td>
                    <template v-for="column in columns">
                        <td :style="{width: column.width + 'px'}" :key="column.field">{{item[column.field]}}</td>
                    </template>
                </tr>
                </tbody>
            </table>
        </div>

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
            FixedHeader: {
                type: Boolean,
                default: false
            },
            checkable: {
                type: Boolean,
                default: false
            },
            height: {
                type: [Number, String],
            },
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
        mounted() {
            if (this.FixedHeader) {
                // 复制一个空的table
                let table2 = this.$refs.table.cloneNode(false)
                this.table2 = table2
                table2.classList.add("g-table-copy")
                // 获取head
                let thead = this.$refs.table.children[0]
                thead.children[0].children[0].style.width = this.columns[0].width - 6 + "px";
                // 获取head高度
                let {height} = thead.getBoundingClientRect()
                // 给table赋值
                this.$refs.tableWrapper.style.marginTop = height + 'px'
                // 我们现在表格的高度多了一个head的高度
                this.$refs.tableWrapper.style.height = this.height - height + 'px'
                table2.appendChild(thead)
                this.$refs.wrapper.appendChild(table2)
            }
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
            },
            // 计算表格宽度
            computeTableWidth() {
                let totalWidth = 0
                this.columns.map(obj => {
                    totalWidth = obj.width + totalWidth
                })
                return totalWidth
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
    @import "../../styles/var";

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
            text-align: left;
            border: 1px solid $grey;
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
        &-wrapper {
            position: relative;
            overflow: auto;
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
            svg {
                fill: $blue;
            }
            &-inner {
                width: 40px;
                height: 40px;
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
        &-copy {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            background: #fff;
        }
    }
</style>