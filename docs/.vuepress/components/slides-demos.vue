<template>
    <div class="wrapper" >
        <g-slides :selected.sync="selected" :autoPlay="true">
            <g-slides-item name="1">
                <div class="box">1</div>
            </g-slides-item>
            <g-slides-item name="2">
                <div class="box">2</div>
            </g-slides-item>
            <g-slides-item name="3">
                <div class="box">3</div>
            </g-slides-item>
        </g-slides>
    </div>
</template>

<script>
    import Slides from '../../../src/slides/slides'
    import SlidesItem from '../../../src/slides/slides-item'
    export default {
        components: {
            'g-slides': Slides,
            'g-slides-item': SlidesItem
        },
        data() {
            return {
                selected: '1'
            }
        },
        created() {
        }
    }
</script>

<style lang="scss">
    *{margin:0;padding:0;box-sizing: border-box}
    .wrapper{
        margin:40px;
    }
    .box {
        width: 100%;
        height: 300px;
        background: #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:40px;
        background: #6196cc;
    }
</style>