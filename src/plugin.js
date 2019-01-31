import Toast from './toast'


// 提取函数
function createToast({Vue, message, propsData}) {
    // 生成一个toast组件放到body里面
    let Construstor = Vue.extend(Toast)
    let toast = new Construstor({propsData})
    // 把信息给到插槽
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}
// 设置标记变量
let currentToast
export default {
    install (Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            if (currentToast) {
                console.log(currentToast)
                currentToast.close()
            }
            currentToast = createToast({Vue, message, propsData: toastOptions})
        }
    }
}