const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../../src/tabs/tabs'
import TabsHead from '../../src/tabs/tabs-head'
import TabsBody from '../../src/tabs/tabs-body'
import TabsItem from '../../src/tabs/tabs-item'
import TabsPane from '../../src/tabs/tabs-pane'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    })
})