---
title: Nav - Nav
---

## Nav-Nav
### 示例
<ClientOnly>
<nav-demos></nav-demos>
</ClientOnly>


### 代码
```HTML
<div class="wrapper">
    <g-nav :selected.sync="selected"   style="margin-top:200px;">
        <g-nav-item name="home">首页</g-nav-item>
        <g-sub-nav name="about">
            <template slot="title">关于</template>
            <g-nav-item  name="culture">企业文化</g-nav-item>
            <g-nav-item  name="developers">开发团队</g-nav-item>
            <g-sub-nav name="contacts">
                <template slot="title">联系方式</template>
                <g-nav-item name="wechat">微信</g-nav-item>
                <g-nav-item name="qq">QQ</g-nav-item>
                <g-sub-nav name="phone">
                    <template slot="title">手机</template>
                    <g-nav-item name="cb">移动</g-nav-item>
                    <g-nav-item name="cu">联通</g-nav-item>
                    <g-nav-item name="cn">电信</g-nav-item>
                </g-sub-nav>
            </g-sub-nav>
        </g-sub-nav>
        <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
    <g-nav :selected.sync="selected" vertical style="width:200px;" @update:selected="onChange">
        <g-nav-item name="home">
            <a href="//www.baidu.com" target="_blank">首页</a>
        </g-nav-item>
        <g-sub-nav name="about">
            <template slot="title">关于</template>
            <g-nav-item  name="culture">企业文化</g-nav-item>
            <g-nav-item  name="developers">开发团队</g-nav-item>
            <g-sub-nav name="contacts">
                <template slot="title">联系方式</template>
                <g-nav-item name="wechat">微信</g-nav-item>
                <g-nav-item name="qq">QQ</g-nav-item>
                <g-sub-nav name="phone">
                    <template slot="title">手机</template>
                    <g-nav-item name="cb">移动</g-nav-item>
                    <g-nav-item name="cu">联通</g-nav-item>
                    <g-nav-item name="cn">电信</g-nav-item>
                </g-sub-nav>
            </g-sub-nav>
        </g-sub-nav>
        <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
</div>
```

### Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| selected | 默认展示nav | String |   无|
| vertical | nav方向是否vertical | Boolean | false  |
