const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    // 测试props
    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(function () {
            vm.$destroy()
        })
        it('可以接受value', () => {
            // 给它传一个数据
            vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            // 查看这个属性，期待它等于这个值
            expect(inputElement.value).to.equal('1234')
        })
        it('可以接受disabled', () => {
            // 给它传一个数据
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            // 查看这个属性，期待它等于这个值
            expect(inputElement.disabled).to.equal(true)
        })
        it('可以接受readonly', () => {
            // 给它传一个数据
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            // 查看这个属性，期待它等于这个值
            expect(inputElement.readOnly).to.equal(true)
        })
        it('可以接受error', () => {
            // 给它传一个数据
            vm = new Constructor({
                propsData: {
                    error: '最大值超过2'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            // 查看这个属性，期待它等于这个值
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMesage = vm.$el.querySelector('.error-message')
            // 查看这个属性，期待它等于这个值
            expect(errorMesage.innerText).to.equal("最大值超过2")
        })
    })
    // 测试input事件
    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(function () {
            vm.$destroy()
        })
        it('支持change/input/focus/blur事件', () => {
            ['change','input','focus','blur'].forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on(eventName, callback)
                // 触发input的change事件
                let event = new Event(eventName)
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith(event)
            })
        })
        // it('支持input事件', () => {
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     vm.$on('input', callback)
        //     // 触发input的change事件
        //     let event = new Event('input')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('支持focus事件', () => {
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     vm.$on('focus', callback)
        //     // 触发input的change事件
        //     let event = new Event('focus')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('支持blur事件', () => {
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     vm.$on('blur', callback)
        //     // 触发input的change事件
        //     let event = new Event('blur')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
    })
})
