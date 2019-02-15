<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
        <g-icon name="loading" class="loading icon" v-if="loading"></g-icon>
        <div class="contentBtn">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './icon'
    export default {
        name: 'GoButton',
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
    $font-size: 14px;
    $button-height: 32px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .g-button {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            background-color: $button-active-bg;
        }
        &:focus {
            outline: none;
        }
        > .contentBtn {
            order: 2
        }
        > .icon {
            order: 1;
            margin-right: .3em
        }

        &.icon-right {
            > .contentBtn {
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