<template>
    <div style="overflow: hidden;">
        <g-row class="rowWrapper">
            <g-col span="12">
                <div class="colInner">等分</div>
            </g-col>
            <g-col span="12">
                <div class="colInner">等分</div>
            </g-col>
        </g-row>
        <g-row align="right" class="rowWrapper">
            <g-col>
                <div class="colInner">右对齐</div>
            </g-col>
            <g-col>
                <div class="colInner">右对齐</div>
            </g-col>
        </g-row>
        <g-row :gutter="20" class="rowWrapper" style="flex-wrap: nowrap">
            <g-col span="12">
                <div class="colInner">间隙</div>
            </g-col>
            <g-col span="12">
                <div class="colInner">间隙</div>
            </g-col>
        </g-row>
        <g-row class="rowWrapper">
            <g-col span="12">
                <div class="colInner">偏移</div>
            </g-col>
            <g-col span="8" offset="4">
                <div class="colInner">偏移</div>
            </g-col>
        </g-row>
        <!--<g-row class="rowWrapper">-->
            <!--<g-col span="12" :ipad="{span: 6}" :narrowPc="{span: 4}" :pc="{span: 2}" :widePc="{span: 1}">-->
                <!--<div class="colInner">自适应</div>-->
            <!--</g-col>-->
            <!--<g-col span="12" :ipad="{span: 18}" :narrowPc="{span: 20}" :pc="{span: 22}" :widePc="{span: 23}">-->
                <!--<div class="colInner">自适应</div>-->
            <!--</g-col>-->
        <!--</g-row>-->
    </div>
</template>
<script>
    import Col from '../../../src/grid/col'
    import Row from '../../../src/grid/row'

    export default {
        components: {
            'g-col': Col,
            'g-row': Row
        },
    }
</script>
<style scoped>
    .rowWrapper {
        background-color: cornflowerblue;
        font-size: 12px;
    }

    .colInner {
        background: skyblue;
        height: 40px;
        border: 1px solid #eee;
    }
</style>