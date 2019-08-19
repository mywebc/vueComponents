import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { shallowMount, mount } from "@vue/test-utils";
import Nav from "../../src/nav/nav";
import NavItem from "../../src/nav/nav-item";
import SubNav from "../../src/nav/sub-nav";
import Vue from "vue";

chai.use(sinonChai);

describe("nav.vue", () => {
  it("存在.", () => {
    expect(Nav).to.exist;
  });
  it("支持selected属性", () => {
    Vue.component("g-nav-item", NavItem);
    Vue.component("g-sub-nav", SubNav);
    const wrapper = mount(Nav, {
      propsData: {
        selected: "home"
      },
      slots: {
        default: `
               <g-nav-item name="home">首页</g-nav-item>
                  <g-sub-nav name="about">
                    <template slot="title"
                      >关于</template
                    >
                    <g-nav-item name="culture">企业文化</g-nav-item>
                    <g-nav-item name="developers">开发团队</g-nav-item>
                    <g-sub-nav name="contacts">
                      <template slot="title"
                        >联系方式</template
                      >
                      <g-nav-item name="wechat">微信</g-nav-item>
                      <g-nav-item name="qq">QQ</g-nav-item>
                      <!--有子项-->
                      <g-sub-nav name="phone">
                        <template slot="title"
                          >手机</template
                        >
                        <g-nav-item name="cu">联通</g-nav-item>
                        <g-nav-item name="cm">移动</g-nav-item>
                      </g-sub-nav>
                    </g-sub-nav>
                  </g-sub-nav>
                <g-nav-item name="hire">招聘</g-nav-item>`
      }
    });
    setTimeout(() => {
      expect(wrapper.find('[data-name="home"].selected').exists()).to.be.true;
    });
  });
});
