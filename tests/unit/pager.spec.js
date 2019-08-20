import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Pager from '../../src/pager/pager.vue'
chai.use(sinonChai)

describe('Pager.vue', () => {
    it('存在.', () => {
        expect(Pager).to.exist
    })
    it('它可以设置currentPage', () => {
        const wrapper = mount(Pager, {
            propsData: {
                totalPage: 8,
                currentPage:3,
            }
        })
        expect(wrapper.find('[data-number="3"].current').exists()).to.be.true
    })

    it('它可以设置totalPage', () => {
        const wrapper = mount(Pager, {
            propsData: {
                totalPage: 8,
                currentPage:8,
            }
        })
        expect(wrapper.find('.disabled').exists()).to.be.true
    })

    it('它可以设置hide pager', () => {
        const wrapper = mount(Pager, {
            propsData: {
                totalPage: 1,
                currentPage:1,
                hideIfOnePage:false
            }
        })
        expect(wrapper.find('.g-pager')).to.be.not.true
    })

})