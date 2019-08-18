<template>
    <div>
        <h5>默认位置为top,通过position控制</h5>
        <g-popover trigger="hover">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <template>
                <g-button>hover点我</g-button>
            </template>
        </g-popover>
        <g-popover trigger="hover" position="left">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <template>
                <g-button>hover点我</g-button>
            </template>
        </g-popover>
        <g-popover trigger="hover" position="right">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <template>
                <g-button>hover点我</g-button>
            </template>
        </g-popover>
        <g-popover trigger="hover" position="bottom">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <template>
                <g-button>hover点我</g-button>
            </template>
        </g-popover>
        <hr>
        <g-popover trigger="click" >
            <template slot="content">
                <div>popover内容</div>
            </template>
            <template>
                <g-button>click点我</g-button>
            </template>
        </g-popover>
        <g-popover trigger="click" position="left">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <template>
                <g-button>click点我</g-button>
            </template>
        </g-popover>
        <g-popover trigger="click" position="right">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <template>
                <g-button>click点我</g-button>
            </template>
        </g-popover>
        <g-popover trigger="click" position="bottom">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <template>
                <g-button>click点我</g-button>
            </template>
        </g-popover>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Popover from '../../../src/popover'
    import Button from '../../../src/button/button'

    export default {
        components: {
            'g-popover': Popover,
            'g-button': Button
        },
        data() {
            return{
                content: `
                 <g-popover trigger="hover">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <template>
                <g-button>hover点我</g-button>
            </template>
        </g-popover>
        <hr>
        <g-popover trigger="click">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <template>
                <g-button>click点我</g-button>
            </template>
        </g-popover>
                `.trim()
            }
        }
    }
</script>