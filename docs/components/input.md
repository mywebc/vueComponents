---
title: Input - 输入框
---

## Input-输入框
### 示例
<ClientOnly>
<input-demos></input-demos>
</ClientOnly>


### 代码
```HTML
 <div class="wrapper-demos">
    <g-input value="默认"/>
    <g-input value="禁用" disabled/>
    <g-input value="只读" readonly/>
    <g-input value="提示" error="请输入数字"/>
 </div>
```

### Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| value | 输入框默认值 | String |   无|
| disabled | 是否禁用 | Boolean | false  |
| readonly | 是否只读 | Boolean | false |
| error | 提示信息 | String | 无 |