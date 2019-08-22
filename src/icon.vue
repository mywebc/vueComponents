<template>
    <svg class="g-icon">
        <use :xlink:href="`#i-${name}`" :class="name"></use>
    </svg>
</template>

<script>
    import './svg'

    export default {
        name: 'GoIcon',
        props: ['name'],
        mounted() {
            console.log('icon-name', this.name)
        }
    }
</script>

<style lang="scss" scoped>
    .g-icon {
        width: 1em;
        height: 1em;
        .success {
            fill: #3eaf7c;
            width: 40px;
        }
        .info {
            fill: #6a8bad;
        }
        .error {
            fill: red;
        }
        .warning {
            fill: darkgoldenrod;
        }
    }
</style>