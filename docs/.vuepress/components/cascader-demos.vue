<template>
    <div>
        <div style="padding: 20px;">
            <g-cascader :source.sync="source"
                        popover-height="200px"
                        :selected.sync="selected"
                        :load-data="loadData"></g-cascader>
        </div>
    </div>
</template>
<script>
    import Gcascader from "../../../src/cascader/cascader";
    import db from '../../../tests/fixtures/db'

    function ajax(parentId = 0) {
        return new Promise((success, fail) => {
            setTimeout(() => {
                let result = db.filter((item) => item.parent_id === parentId);
                result.forEach(node => {
                    if (db.filter(item => item.parent_id === node.id).length > 0) {
                        node.isLeaf = false
                    } else {
                        node.isLeaf = true
                    }
                });
                success(result)
            }, 10)
        })
    }

    export default {
        components: {"g-cascader": Gcascader},
        data() {
            return {
                selected: [],
                source: []
            };
        },
        created() {
            ajax(0).then(result => {
                console.log(result);
                this.source = result
            })
        },
        methods: {
            loadData({id}, updateSource) {
                ajax(id).then(result => {
                    // console.log('12', result);
                    updateSource(result) // 回调:把别人传给我的函数调用一下
                })
            },
        }
    };
</script>
<style>
    * {margin: 0; padding: 0; box-sizing: border-box;}

    img {max-width: 100%;}

    html {
        --font-size: 14px;
    }

    body {
        font-size: var(--font-size);
    }
</style>