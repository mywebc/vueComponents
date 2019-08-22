<template>
    <div>
        <g-button>Button</g-button>
        <g-button icon="settings" icon-position="right">Button</g-button>
        <g-button :loading="true">Button</g-button>
        <g-button disabled>Button</g-button>
    </div>
</template>
<script>
    import Button from '../../../src/button/button'

    export default {
        name: 'button-demos',
        components: {
            'g-button': Button
        },
    }
</script>
