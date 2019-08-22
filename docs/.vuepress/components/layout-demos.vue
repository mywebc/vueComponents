<template>
    <div>
        <g-layout>
            <g-header class="layout_header">header</g-header>
            <g-content class="layout_content">content</g-content>
            <g-footer class="layout_footer">footer</g-footer>
        </g-layout>
        <hr>
        <g-layout>
            <g-header class="layout_header">header</g-header>
                <g-layout>
                    <g-sider class="layout_sider">sider</g-sider>
                    <g-content class="layout_content">content</g-content>
                </g-layout>
            <g-footer class="layout_footer">footer</g-footer>
        </g-layout>
        <hr>
        <g-layout>
            <g-sider class="layout_sider">sider</g-sider>
            <g-layout>
                <g-header class="layout_header">header</g-header>
                <g-content class="layout_content">content</g-content>
                <g-footer class="layout_footer">footer</g-footer>
            </g-layout>
        </g-layout>
    </div>
</template>
<script>
    import Layout from '../../../src/layout/layout'
    import Content from '../../../src/layout/content'
    import Header from '../../../src/layout/header'
    import Footer from '../../../src/layout/footer'
    import Sider from '../../../src/layout/sider'

    export default {
        components: {
            'g-layout': Layout,
            'g-header': Header,
            'g-content': Content,
            'g-footer': Footer,
            'g-sider': Sider,
        },
    }
</script>
<style scoped>
    .layout_header {
        display: flex;
        justify-content: center;
        align-items: center;
        background: skyblue;
        height: 60px;
    }
    .layout_content {
        display: flex;
        justify-content: center;
        align-items: center;
        background: deepskyblue;
        height: 60px;
    }
    .layout_sider {
        display: flex;
        justify-content: center;
        align-items: center;
        background: cadetblue;
        width: 60px;
    }
    .layout_footer {
        display: flex;
        justify-content: center;
        align-items: center;
        background: lightskyblue;
        height: 60px;
    }
</style>