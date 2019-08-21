<template>
    <div>
        <div style="margin: 20px">
            <g-table :columns="columns" :dataSource="dataSource" bordered
                     :selected-items.sync="selected"
                     :orderBy.sync="orderBy"></g-table>
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
                    {text: '姓名', field: 'name'},
                    {text: '分数', field: 'score'}
                ],
                dataSource: [
                    {id: 1, name: '陈晓拉尼', score: 88, description: 'xxxxxxxxxxxxxx'},
                    {id: 2, name: '陈晓拉尼', score: 99},
                    {id: 3, name: '陈晓拉尼', score: 46, description: 'zzzzzzzzzzzzzz'},
                    {id: 4, name: '陈晓拉尼', score: 62, description: 'yyyyyyyyyyyyyy'},
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
