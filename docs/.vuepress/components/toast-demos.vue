<template>
    <div>
        <h4>autoClose属性控制是否自动关闭</h4>
        <g-button @click="showToast">默认</g-button>
        <h4>closeButton属性控制自定义关闭</h4>
        <g-button @click="showToast2">可关闭</g-button>
        <h4>enableHtml属性控制是否转义html</h4>
        <g-button @click="showToast3">展示html</g-button>
        <h4>position属性控制位置（top,middle,bottom）</h4>
        <g-button @click="showToast4">居中</g-button>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import plugin from '../../../src/plugin'
    import Button from '../../../src/button'
    import Vue from 'vue'
    Vue.use(plugin)

    export default {
        components: {
            'g-button': Button
        },
        data(){
            return {
                content: `
 <h4>autoClose属性控制是否自动关闭</h4>
<g-button @click="showToast">默认</g-button>

<h4>closeButton属性控制自定义关闭</h4>
<g-button @click="showToast2">可关闭</g-button>

<h4>enableHtml属性控制是否转义html</h4>
<g-button @click="showToast3">展示html</g-button>

<h4>position属性控制位置（top,middle,bottom）</h4>
<g-button @click="showToast4">居中</g-button>
methods: {
     showToast() {
                this.$toast('这是一段默认2秒自动关闭的提示', {
                    autoClose: 2
                })
            },
    showToast2() {
        this.$toast('这是一段手动关闭的提示', {
            autoClose: false,
            closeButton: {
                text: '关闭文字',
                callback() {
                    console.log('关闭成功')
                }
            }
        })
    },
    showToast3() {
        this.$toast('<h3>这是一个h3标题</h3>', {
            enableHtml: true,
            autoClose: 2,
        })
    },
    showToast4() {
        this.$toast('这是一条居中提示', {
            autoClose: 2,
            position: 'middle'
        })
    }
}
                `.trim()
            }
        },
        methods: {
            showToast() {
                this.$toast('这是一段默认2秒自动关闭的提示', {
                    autoClose: 2
                })
            },
            showToast2() {
                this.$toast('这是一段手动关闭的提示', {
                    autoClose: false,
                    closeButton: {
                        text: '关闭文字',
                        callback() {
                            console.log('关闭成功')
                        }
                    }
                })
            },
            showToast3() {
                this.$toast('<h3>这是一个h3标题</h3>', {
                    enableHtml: true,
                    autoClose: 2,
                })
            },
            showToast4() {
                this.$toast('这是一条居中提示', {
                    autoClose: 2,
                    position: 'middle'
                })
            }
        }
    }
</script>