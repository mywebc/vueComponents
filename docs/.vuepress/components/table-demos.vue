<template>
    <div>
        <h4 style="margin: 10px">基础用法</h4>
        <div>
            <g-table :columns="columns"
                     :dataSource="dataSource"
            ></g-table>
        </div>
        <h4 style="margin: 10px">排序</h4>
        <div>
            <g-table :columns="columns"
                     :dataSource="dataSource"
                     :order-by.sync="orderBy"
            ></g-table>
        </div>
        <h4 style="margin: 10px">复选框</h4>
        <div>
            <g-table :columns="columns"
                     :dataSource="dataSource"
                     checkable
                     :selected-items.sync="selected"
            ></g-table>
        </div>
        <h4 style="margin: 10px">loading</h4>
        <g-button @click="()=>{this.isLoading = !this.isLoading}">Loading</g-button>
        <div>
            <g-table :columns="columns"
                     :dataSource="dataSource"
                     :loading="isLoading"
            ></g-table>
        </div>
        <h4 style="margin: 10px">固定表头</h4>
        <div>
            <g-table :columns="columns"
                     :dataSource="dataSourceFix"
                     fixed-header
                     :height="300"
            ></g-table>
        </div>
    </div>
</template>
<script>
    import GTable from '../../../src/table/table'
    import GButton from '../../../src/button/button'

    export default {
        components: {GTable,GButton},
        data() {
            return {
                columns: [
                    {text: '姓名', field: 'name', width: 140},
                    {text: '地区', field: 'born', width: 140},
                    {text: '住址', field: 'address', width: 200}
                ],
                dataSource: [
                    {id: 1, name: '陈晓拉尼11', born: "北京", address: "北京市大兴区",},
                    {id: 2, name: '陈晓拉尼2', born: "北京", address: "北京市大兴区"},
                    {id: 3, name: '陈晓拉尼3', born: "北京", address: "北京市大兴区",},
                    {id: 4, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                    // {id: 5, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                    // {id: 6, name: '陈晓拉尼', born: "北京", address: "北京市大兴区"},
                    // {id: 7, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                    // {id: 8, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                    // {id: 9, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                    // {id: 10, name: '陈晓拉尼', born: "北京", address: "北京市大兴区"},
                    // {id: 11, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                    // {id: 12, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                    // {id: 13, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                    // {id: 14, name: '陈晓拉尼', born: "北京", address: "北京市大兴区"},
                    // {id: 15, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                    // {id: 16, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                ],
                dataSourceFix: [
                    {id: 1, name: '陈晓拉尼11', born: "北京", address: "北京市大兴区",},
                    {id: 2, name: '陈晓拉尼2', born: "北京", address: "北京市大兴区"},
                    {id: 3, name: '陈晓拉尼3', born: "北京", address: "北京市大兴区",},
                    {id: 4, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                    {id: 5, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                    {id: 6, name: '陈晓拉尼', born: "北京", address: "北京市大兴区"},
                    {id: 7, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                    {id: 8, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                    {id: 9, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                    {id: 10, name: '陈晓拉尼', born: "北京", address: "北京市大兴区"},
                    {id: 11, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                    {id: 12, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                    {id: 13, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                    {id: 14, name: '陈晓拉尼', born: "北京", address: "北京市大兴区"},
                    {id: 15, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                    {id: 16, name: '陈晓拉尼', born: "北京", address: "北京市大兴区",},
                ],
                selected: [],
                orderBy: {
                    name: "asc",
                    born: "desc",
                    address: "asc"
                },
                isLoading: false
            }
        }
    };
</script>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

</style>
