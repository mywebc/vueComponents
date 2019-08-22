module.exports = {
    title: 'GoUI',
    base: '/vueComponents/',
    description: '一些自己写的UI组件',
    themeConfig: {
        sidebarDepth: 0,// 禁用所有链接
        nav: [
            {text: '主页', link: '/'},
            {text: '博客', link: 'https://www.chenxiaolani.com/'},
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
                    {
                        title: "基础",
                        collapsable: false,
                        children: [
                            '/components/icon',
                            '/components/button'
                        ],
                    },
                    {
                        title: "布局",
                        collapsable: false,
                        children: [
                            '/components/grid',
                            '/components/layout',
                        ]
                    },
                    {
                        title: "导航",
                        collapsable: false,
                        children: [
                            '/components/nav',
                            '/components/pager',
                            '/components/slides',
                            '/components/tabs',
                            '/components/collapse',
                        ]
                    },
                    {
                        title: "提示",
                        collapsable: false,
                        children: [
                            '/components/popover',
                            '/components/toast',
                        ]
                    },
                    {
                        title: "数据",
                        collapsable: false,
                        children: [
                            '/components/input',
                            '/components/table',
                            '/components/cascader',
                        ]
                    }

                ]
            }
        ]
    }
}