<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
        <g-icon name="loading" class="loading icon" v-if="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './icon'
    export default {
        name: 'LeButton',
        // props: ["icon","iconPosition"]
        components: {"g-icon": Icon},
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                // 属性的检查器
                validator(val) {
                    // 只能保证传入的值为left和right
                    return val === 'left' || val === 'right';

                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .content {
            order: 2
        }
        > .icon {
            order: 1;
            margin-right: .3em
        }

        &.icon-right {
            > .content {
                order: 1
            }
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em
            }
        }
        .loading {
            animation: spin 2s infinite linear;
        }
    }
</style>