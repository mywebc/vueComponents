<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
        <svg v-if="icon" class="icon">
            <use :xlink:href=`#i-${icon}`></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        // props: ["icon","iconPosition"]
        props: {
            icon: {},
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

<style lang="scss">
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
        > .content { order: 1 }
        > .icon { order: 2 ; margin-right: .3em }

        &.icon-right {
            > .content { order: 2 }
            > .icon { order: 1 ; margin-right: 0; margin-left: .3em}
        }
    }
</style>