module.exports = {
    title: 'GoUI',
    base: '/vueComponents/',
    description: '一些自己写的UI组件',
    themeConfig: {
        sidebarDepth:0,// 禁用所有链接
        nav: [
            {text: '主页', link: '/'},
            {text: 'Github', link: 'https://github.com/mywebc/vueComponents'},
        ],
        sidebar: [
            '/get-started/',
            // {
            //     title: '介绍',
            //     children: [
            //         '/install/',
            //         // '/get-started/'
            //     ]
            // },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/collapse',
                    '/components/popover',
                    '/components/tabs',
                    '/components/toast',
                    '/components/pager',
                    '/components/cascader'
                ]
            }
        ]
    }
}