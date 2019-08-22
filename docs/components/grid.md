---
title: Grid - 网格
---

## Grid-网格
### 示例
<ClientOnly>
<grid-demos></grid-demos>
</ClientOnly>

### 代码
```HTML
<g-row class="rowWrapper">
    <g-col span="12"><div class="colInner">等分</div></g-col>
    <g-col span="12"><div class="colInner">等分</div></g-col>
</g-row>
<g-row align="right" class="rowWrapper">
    <g-col><div class="colInner">右对齐</div></g-col>
    <g-col><div class="colInner">右对齐</div></g-col>
</g-row>
<g-row :gutter="20" class="rowWrapper" style="flex-wrap: nowrap">
    <g-col span="12"><div class="colInner">间隙</div></g-col>
    <g-col span="12"><div class="colInner">间隙</div></g-col>
</g-row>
<g-row class="rowWrapper">
    <g-col span="12"><div class="colInner">偏移</div></g-col>
    <g-col span="8" offset="4"><div class="colInner">偏移</div></g-col>
</g-row>
```
### g-row Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| align | 栅格对齐方式 | String |  [left right center]  |
| gutter | 栅格间隔 | String，Number | 无|


### g-col Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| span | 栅格占比 | String,Number |   无 |
| offset | 栅格偏移差 | String，Number | 无|
