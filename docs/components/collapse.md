---
title: Collapse - 手风琴
---

## Collapse-手风琴
### 示例
<ClientOnly>
<collapse-demos></collapse-demos>
</ClientOnly>

### 代码
```HTML
<g-collapse  :selected.sync="selectedTab">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
<hr>
<h3>手风琴模式</h3>
<g-collapse  :selected.sync="selectedTab" single>
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
```

### Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| selected | 默认选中块 | Array |   无 |
| single | 是否为手风琴模式 | Boolean | false |
