<template>
    <div class="wrapper-demos">
        <h4>默认</h4>
        <g-input value="默认" />
        <h4>禁用</h4>
        <g-input value="禁用" disabled/>
        <h4>只读</h4>
        <g-input value="只读" readonly/>
        <h4>提示</h4>
        <g-input value="提示" error="请输入数字"/>
    </div>
</template>
<script>
    import Input from '../../../src/input/input'
    export default {
        components: {
            'g-input': Input
        },
    }
</script>