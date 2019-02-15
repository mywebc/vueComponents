import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Content from './content'
import Header from './header'
import Footer from './footer'
import Sider from './sider'

import plugin from './plugin'

import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'

import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'



Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout);
Vue.component('g-content', Content);
Vue.component('g-header', Header);
Vue.component('g-footer', Footer);
Vue.component('g-sider', Sider);

Vue.use(plugin)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)


new Vue({
    el: '#app',
    data: {
        selectedTab: 'first'
    },
    methods: {
        yyy (data) {
            console.log(data)
        },
        showToast() {
            this.$toast('加油', {
                enableHtml: true,
                position: 'top',
                autoClose: false
            })
        },
        showToast2() {
            this.$toast('加油', {
                enableHtml: true,
                position: 'middle',
                autoClose: false
            })
        },
        showToast3() {
            this.$toast('加油', {
                enableHtml: true,
                position: 'bottom',
                autoClose: 2
            })
        }
    }
})

// 单元测试
import chai from 'chai'
import spies from 'chai-spies'

const expect = chai.expect
chai.use(spies)

try {

// 测试icon
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: "settings"
            }
        }).$mount()
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq("#i-settings")
        vm.$el.remove()
        vm.$destroy()
    }
// 测试loading
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: "settings",
                loading: true
            }
        }).$mount()
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq("#i-loading")
        vm.$el.remove()
        vm.$destroy()
    }
// 测试order
// order为1的情况
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: "settings"
            }
        }).$mount(div)
        let svgElement = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svgElement)
        expect(order).to.eq("1")
        vm.$el.remove()
        vm.$destroy()
    }
// order为2的情况
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: "settings",
                iconPosition: "right"
            }
        }).$mount(div)
        let svgElement = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svgElement)
        expect(order).to.eq("2")
        vm.$el.remove()
        vm.$destroy()
    }
// 测试点击事件 函数的mock
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: "settings",
                iconPosition: "right"
            }
        }).$mount()
        // 定义一个间谍函数
        let spy = chai.spy(function () {
        })
        vm.$on('click', spy)
        let button = vm.$el
        button.click()
        // 期待这个函数被调用
        expect(spy).to.have.been.called()
    }
} catch (e) {

}
