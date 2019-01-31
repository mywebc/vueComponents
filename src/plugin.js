import Toast from './toast'

export default {
    install (Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            // 生成一个toast组件放到body里面
            let Construstor = Vue.extend(Toast)
            let toast = new Construstor({
                propsData: toastOptions
            })
            // 把信息给到插槽
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}