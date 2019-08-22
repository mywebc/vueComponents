<template>
    <div>
        <h4>通过selected设置默认选项，disabled设置禁用选项, 默认方向为horizontal</h4>
        <g-tabs :selected.sync="selectedTab">
            <g-tabs-head>
                <g-tabs-item name="first">选项一</g-tabs-item>
                <g-tabs-item name="second">选项二</g-tabs-item>
                <g-tabs-item name="third" disabled>选项三</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="first">第一个选项内容</g-tabs-pane>
                <g-tabs-pane name="second">第二个选项内容</g-tabs-pane>
                <g-tabs-pane name="third" >第三个选项内容</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
        <hr>
        <h4>vertical方向</h4>
        <g-tabs :selected.sync="selectedTab" direction="vertical">
            <g-tabs-head>
                <g-tabs-item name="first">选项一</g-tabs-item>
                <g-tabs-item name="second">选项二</g-tabs-item>
                <g-tabs-item name="third" >选项三</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="first">第一个选项内容</g-tabs-pane>
                <g-tabs-pane name="second">第二个选项内容</g-tabs-pane>
                <g-tabs-pane name="third" >第三个选项内容</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
    </div>
</template>
<script>
    import Tabs from '../../../src/tabs/tabs'
    import TabsHead from '../../../src/tabs/tabs-head'
    import TabsBody from '../../../src/tabs/tabs-body'
    import TabsItem from '../../../src/tabs/tabs-item'
    import TabsPane from '../../../src/tabs/tabs-pane'

    export default {
        components: {
            'g-tabs': Tabs,
            'g-tabs-head': TabsHead,
            'g-tabs-body': TabsBody,
            'g-tabs-item': TabsItem,
            'g-tabs-pane': TabsPane,
        },
        data() {
            return {
                selectedTab: 'first',
            }
        }
    }
</script>