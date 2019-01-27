import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
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
}
