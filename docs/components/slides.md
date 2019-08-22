---
title: Slides - Slides
---

## Slides-Slides
### 示例
<ClientOnly>
<slides-demos></slides-demos>
</ClientOnly>


### 代码
```HTML
<div class="wrapper" >
    <g-slides :selected.sync="selected" :autoPlay="true">
        <g-slides-item name="1">
            <div class="box">1</div>
        </g-slides-item>
        <g-slides-item name="2">
            <div class="box">2</div>
        </g-slides-item>
        <g-slides-item name="3">
            <div class="box">3</div>
        </g-slides-item>
    </g-slides>
</div>
```

### Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| selected | 默认展示第几个，name值 | String |  第一个 |
| autoPlay | 是否自动播放 | Boolean | true  |
