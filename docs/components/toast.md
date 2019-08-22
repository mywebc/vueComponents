---
title: Toast - Toast
---

## Toast-toast
### 示例
<ClientOnly>
<toast-demos></toast-demos>
</ClientOnly>


### 代码
```HTML
 <h4>autoClose属性控制是否自动关闭</h4>
<g-button @click="showToast">默认</g-button>

<h4>closeButton属性控制自定义关闭</h4>
<g-button @click="showToast2">可关闭</g-button>

<h4>enableHtml属性控制是否转义html</h4>
<g-button @click="showToast3">展示html</g-button>

<h4>position属性控制位置（top,middle,bottom）</h4>
<g-button @click="showToast4">居中</g-button>
```
```js
showToast() {
        this.$toast('这是一段默认2秒自动关闭的提示', {
            autoClose: 2
        })
    },
showToast2() {
        this.$toast('这是一段手动关闭的提示', {
            autoClose: false,
            closeButton: {
                text: '关闭文字',
                callback() {
                    console.log('关闭成功')
                }
            }
        })
    },
showToast3() {
        this.$toast('<h3>这是一个h3标题</h3>', {
            enableHtml: true,
            autoClose: 2,
        })
    },
showToast4() {
        this.$toast('这是一条居中提示', {
            autoClose: 2,
            position: 'middle'
        })
    }
}
```




### Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| autoClose | 是否自动关闭，若为number值，则为关闭时间 | String, Number | true  |
| closeButton | 是否有关闭按钮，可自定义关闭文字和回调 | Object | 关闭（按钮文字）  |
| enableHtml |是否允许插入html|Boolean|false|
| position | toasti显示位置 | String | top[middle bottom]

