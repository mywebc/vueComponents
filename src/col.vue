<template>
    <div class="col" :class="colClass"
         :style="colStyle"
    >
        <slot></slot>
    </div>
</template>

<script>
    let validator = (value) => {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach((key) => {
            if(!['span', 'offset'].includes(key)) {
                valid = false
            }
        })
        return valid
    }
    export default {
        name: "GoCol",
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
           /* phone: {
                默认为phone
                type: Object,
                validator,
            },*/
            ipad: {
                type: Object,
                validator,
            },
            narrowPc: {
                type: Object,
                validator,
            },
            pc: {
                type: Object,
                validator,
            },
            widePc: {
                type: Object,
                validator,
            },
        },
        data() {
            return {
               gutter: 0
            }
        },
        methods: {
            createClasses (obj, str = ''){
                if(!obj) {return []}
                let array = []
                if(obj.span) {
                    array.push(`col-${str}${obj.span}`)
                }
                if(obj.offset) {
                    array.push(`offset-${str}${obj.offset}`)
                }
                return array
            }
        },
        computed: {
            colStyle() {
                return {
                    paddingLeft: this.gutter/2 + 'px',
                    paddingRight: this.gutter/2 + 'px'
                }
            },
            colClass() {
                let { span, offset, ipad, narrowPc, pc, widePc } = this

                return [
                    ...this.createClasses({span, offset}),
                    ...this.createClasses(ipad, 'ipad-'),
                    ...this.createClasses(narrowPc, 'narrow-pc-'),
                    ...this.createClasses(pc, 'pc-'),
                    ...this.createClasses(widePc, 'wide-pc-'),
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .col {
        height: 100px;
        background: grey;
        /*width: 50%;*/
        border: 1px solid red;

        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }

        // ipad
        @media (min-width: 577px){
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                   width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-ipad-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
        }
        // 窄屏幕
        @media (min-width: 769px){
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        // 普通pc
        @media (min-width: 993px){
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        // 宽屏
        @media (min-width: 1201px) {
            $class-prefix: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
    }

</style>