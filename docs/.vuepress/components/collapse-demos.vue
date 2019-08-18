<template>
    <div>
        <h5>通过single控制是否为手风琴模式</h5>
        <g-collapse  :selected.sync="selectedTab">
            <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
            <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
            <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
        <hr>
        <h3>手风琴模式</h3>
        <g-collapse  :selected.sync="selectedTab" single>
            <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
            <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
            <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Collapse from '../../../src/collapse/collapse'
    import CollapseItem from '../../../src/collapse/collapse-item'

    export default {
        components: {
            'g-collapse': Collapse,
            'g-collapse-item': CollapseItem
        },
        data() {
            return {
                content: `
<g-collapse  :selected.sync="selectedTab">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
<hr>
<h3>手风琴模式</h3>
<g-collapse  :selected.sync="selectedTab" single>
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
                `.trim(),
                selectedTab: ['2']
            }
        }
    }
</script>