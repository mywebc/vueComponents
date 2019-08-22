---
title: Layout - 布局
---

## Layout-布局
## 示例

<ClientOnly>
<layout-demos></layout-demos>
</ClientOnly>

### 代码
```HTML
<g-layout>
    <g-header class="layout_header">header</g-header>
    <g-content class="layout_content">content</g-content>
    <g-footer class="layout_footer">footer</g-footer>
</g-layout>
<hr>
<g-layout>
    <g-header class="layout_header">header</g-header>
        <g-layout>
            <g-sider class="layout_sider">sider</g-sider>
            <g-content class="layout_content">content</g-content>
        </g-layout>
    <g-footer class="layout_footer">footer</g-footer>
</g-layout>
<hr>
<g-layout>
    <g-sider class="layout_sider">sider</g-sider>
    <g-layout>
        <g-header class="layout_header">header</g-header>
        <g-content class="layout_content">content</g-content>
        <g-footer class="layout_footer">footer</g-footer>
    </g-layout>
</g-layout>
```
