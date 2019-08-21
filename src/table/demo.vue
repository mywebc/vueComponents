<template>
    <div>
        <div style="margin: 20px">
            <g-table :columns="columns"
                     :dataSource="dataSource"
                     :bordered="true"
                     :selected-items.sync="selected"
                     :orderBy.sync="orderBy"
                     :loading="false"
                     :height="400"
            ></g-table>
        </div>
        <div style="margin: 20px">
            <g-pager :totalPage="16" :currentPage.sync="currentPage"></g-pager>
        </div>
    </div>
</template>
<script>
    import GPager from '../pager/pager'
    import GTable from './table'

    export default {
        components: {GPager, GTable},
        data() {
            return {
                currentPage: 1,
                columns: [
                    {text: '姓名', field: 'name', width: 100},
                    {text: '分数', field: 'score'}
                ],
                dataSource: [
                    {id: 1, name: '陈晓拉尼1', score: 88, description: 'xxxxxxxxxxxxxx'},
                    {id: 2, name: '陈晓拉尼2', score: 99},
                    {id: 3, name: '陈晓拉尼3', score: 46, description: 'zzzzzzzzzzzzzz'},
                    {id: 4, name: '陈晓拉尼', score: 62, description: 'yyyyyyyyyyyyyy'},
                    {id: 5, name: '陈晓拉尼', score: 88, description: 'xxxxxxxxxxxxxx'},
                    {id: 6, name: '陈晓拉尼', score: 99},
                    {id: 7, name: '陈晓拉尼', score: 46, description: 'zzzzzzzzzzzzzz'},
                    {id: 8, name: '陈晓拉尼', score: 62, description: 'yyyyyyyyyyyyyy'},
                    {id: 9, name: '陈晓拉尼', score: 88, description: 'xxxxxxxxxxxxxx'},
                    {id: 10, name: '陈晓拉尼', score: 99},
                    {id: 11, name: '陈晓拉尼', score: 46, description: 'zzzzzzzzzzzzzz'},
                    {id: 12, name: '陈晓拉尼', score: 62, description: 'yyyyyyyyyyyyyy'},
                    {id: 13, name: '陈晓拉尼', score: 88, description: 'xxxxxxxxxxxxxx'},
                    {id: 14, name: '陈晓拉尼', score: 99},
                    {id: 15, name: '陈晓拉尼', score: 46, description: 'zzzzzzzzzzzzzz'},
                    {id: 16, name: '陈晓拉尼', score: 62, description: 'yyyyyyyyyyyyyy'},
                ],
                selected: [],
                orderBy: {
                    name: "asc",
                    score: "desc"
                }
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
