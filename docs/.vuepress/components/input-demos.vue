<template>
    <div class="wrapper-demos">
        <g-input value="默认"/>
        <g-input value="禁用" disabled/>
        <g-input value="只读" readonly/>
        <g-input value="提示" error="请输入数字"/>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Input from '../../../src/input/input'
    export default {
        components: {
            'g-input': Input
        },
        data() {
            return {
                content: `
<g-input value="默认"/>
<g-input value="禁用" disabled/>
<g-input value="只读" readonly/>
<g-input value="提示" error="请输入数字"/>
                `.trim()
            }
        }
    }
</script>