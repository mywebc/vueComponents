module.exports = {
    title: 'GoUI',
    description: '一些自己写的UI组件',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: '/guide/'},
            {text: '交流', link: 'https://google.com'},
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/collapse',
                    '/components/popover',
                    '/components/tabs',
                    '/components/toast',
                ]
            }
        ]
    }
}