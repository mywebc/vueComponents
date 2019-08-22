---
title: Popover - 弹出层
---

##  Popover-弹出层
### 示例
<ClientOnly>
<popover-demos></popover-demos>
</ClientOnly>

### 代码
```HTML
<g-popover trigger="hover">
    <template slot="content">
        <div>popover内容</div>
    </template>
    <template>
        <g-button>hover点我</g-button>
    </template>
    </g-popover>
    <hr>
    <g-popover trigger="click">
    <template slot="content">
        <div>popover内容</div>
    </template>
    <template>
        <g-button>click点我</g-button>
    </template>
</g-popover>
```




### Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| trigger | 触发方式 | String |   click[hover]|
| position | 触发方位 | String | top[left bottom right]  |
