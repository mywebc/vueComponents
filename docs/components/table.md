---
title: Table - Table
---

## Table-Table
### 示例
<ClientOnly>
<table-demos></table-demos>
</ClientOnly>


### 代码
```HTML
<div>
    <h4 style="margin: 10px">基础用法</h4>
    <div>
        <g-table :columns="columns"
                 :dataSource="dataSource"
        ></g-table>
    </div>
    <h4 style="margin: 10px">排序</h4>
    <div>
        <g-table :columns="columns"
                 :dataSource="dataSource"
                 :order-by.sync="orderBy"
        ></g-table>
    </div>
    <h4 style="margin: 10px">复选框</h4>
    <div>
        <g-table :columns="columns"
                 :dataSource="dataSource"
                 checkable
                 :selected-items.sync="selected"
        ></g-table>
    </div>
    <h4 style="margin: 10px">loading</h4>
    <g-button @click="()=>{this.isLoading = !this.isLoading}">Loading</g-button>
    <div>
        <g-table :columns="columns"
                 :dataSource="dataSource"
                 :loading="isLoading"
        ></g-table>
    </div>
    <h4 style="margin: 10px">固定表头</h4>
    <div>
        <g-table :columns="columns"
                 :dataSource="dataSourceFix"
                 fixed-header
                 :height="300"
        ></g-table>
    </div>
</div>
```

### Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| height | 表格高度 | Number | 无|
| columns | 表头字段（必填，必须指定宽度）| Array |  无 |
| dataSource | 表格数据 | Array | 无  |
| order-by| 是否排序 | Boolean | false|
| checkable | 是否需要复选框 | Boolean | false |
| loading | 是否显示加载loading | Boolean | false| 
| fixed-header | 是否固定表头 | Boolean | false | 
