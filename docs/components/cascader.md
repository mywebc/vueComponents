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
 <div>
    <g-button>Button</g-button>
    <g-button icon="settings" icon-position="right">Button</g-button>
    <g-button :loading="true">Button</g-button>
    <g-button disabled>Button</g-button>
 </div>
```

### Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| icon | 可设置icon | String |   无 |
| icon-position | icon位置 | String | left [right]|
| loading | 是否loading | Boolean | false |
| disabled | 是否禁用 | Boolean | false |