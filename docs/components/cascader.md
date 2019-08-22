---
title: Cascader - Cascader
---

## Cascader-Cascader

### 示例
<ClientOnly>
<cascader-demos/>
</ClientOnly>

### 代码
```HTML
<div style="padding: 20px;">
    <g-cascader 
        :source.sync="source" 
        popover-height="200px"
        :selected.sync="selected" 
        :load-data="loadData"></g-cascader>
</div>
```

### Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| source | 数据源 | Array |   [] |
| popover-height | 下拉高度 | String | 无|
| selected | 默认选中值 | Array | [] |
| load-data | 加载函数 | Function | 无 |