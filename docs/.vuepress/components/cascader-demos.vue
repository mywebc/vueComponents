<template>
    <div>
        <g-cascader :source="source"></g-cascader>
        <!--<g-cascader :source="source" :height="200"></g-cascader>-->
    </div>
</template>
<script>
    import GCascader from '../../../src/cascader/cascader'
    export default {
        components: {GCascader},
        data() {
            return {
                selectedTab: "first",
                source: [
                    {
                        name: "江苏省",
                        children: [
                            {
                                name: "南通市",
                                children: [{name: "开发区"}, {name: "崇川区"}]
                            },
                            {
                                name: "宿迁市",
                                children: [{name: "宿迁区"}]
                            }
                        ]
                    },
                    {
                        name: "浙江省",
                        children: [
                            {
                                name: "湖州市",
                                children: [{name: "湖州区"}, {name: "湖州2区"}]
                            },
                            {
                                name: "杭州市",
                                children: [{name: "杭州一区"}, {name: "杭州二区"}]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>