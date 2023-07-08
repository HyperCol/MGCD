import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path } from '@vuepress/utils'

module.exports = {
    lang: 'zh-CN',
    title: 'MGC Docs',
    description: 'Minecraft Graphic Community Documents',
    port: "8080",
    head: [
        ["link", { rel: "icon", href: "/images/MGC-logo.png" }],
        ['link', { rel: 'stylesheet', href: '/styles/math.css' }],
        ['script', { src: 'https://polyfill.io/v3/polyfill.min.js?features=es6' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/mathjax@3.2.1/es5/tex-mml-chtml.js', async: true }]
    ],
    plugins: [
        docsearchPlugin({
            appId: 'AMQJCXFVUL',

            apiKey: '64206f0ec56ab84f94d171e5a39b6815',

            indexName: 'mgcd-hypercol',

            locales: {
                '/': {
                    placeholder: '搜索文档',
                    translations: {
                        button: {
                            buttonText: '搜索文档',
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: "清除查询条件",
                                resetButtonAriaLabel: "清除查询条件",
                                cancelButtonText: "取消",
                                cancelButtonAriaLabel: "取消",
                            },
                            startScreen: {
                                recentSearchesTitle: "搜索历史",
                                noRecentSearchesText: "没有搜索历史",
                                saveRecentSearchButtonTitle: "保存至搜索历史",
                                removeRecentSearchButtonTitle: "从搜索历史中移除",
                                favoriteSearchesTitle: "收藏",
                                removeFavoriteSearchButtonTitle: "从收藏中移除",
                            },
                            errorScreen: {
                                titleText: "无法获取结果",
                                helpText: "你可能需要检查你的网络连接",
                            },
                            footer: {
                                selectText: "选择",
                                navigateText: "切换",
                                closeText: "关闭",
                                searchByText: "搜索提供者",
                            },
                            noResultsScreen: {
                                noResultsText: "无法找到相关结果",
                                suggestedQueryText: "你可以尝试查询",
                                reportMissingResultsText: "你认为该查询应该有结果？",
                                reportMissingResultsLinkText: "点击反馈",
                            },
                        },
                    },
                },
            },
            markdown: {
                // markdown-it-anchor 的选项
                anchor: { permalink: false },
                // markdown-it-toc 的选项
                toc: { includeLevel: [1, 2] },
                extendMarkdown: md => {
                    // 使用更多的 markdown-it 插件!
                    md.use(require('markdown-it-katex'))
                }
            }
        }),
        registerComponentsPlugin({ componentsDir: path.resolve(__dirname, './components') }),
    ],
    theme: defaultTheme({
        logo: '/images/MGC-logo.png',
        logoDark: '/images/MGC-darklogo.png',
        notFound: ["404 Not Found，页面丢失。"],
        backToHome: "<-回到首页",
        // repo: 'HyperCol/MGCD',
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: 'BetterRTX',
                link: '/instructions/better_rtx/README.md'
            },
            {
                text: '社区介绍',
                link: '/guide/README.md',
            },
            {
                text: '作品集锦',
                children: [
                    {
                        text: '作品表格',
                        children: [
                            '/works/java_shaders.md',
                            '/works/java_resourcepacks.md',
                            '/works/bedrock_shaders.md',
                            '/works/bedrock_resourcepacks.md'
                        ],
                    },
                    {
                        text: '使用指南',
                        children: [
                            {
                                text: '安装光影包',
                                link: '/instructions/java_shaders/README.md',
                            },
                            {
                                text: '安装资源包',
                                link: '/instructions/java_resourcepacks/README.md',
                            },
                        ],
                    },
                    {
                        text: '设置汉化',
                        children: [
                            {
                                text: '光影包',
                                link: 'https://github.com/NakiriRuri/Minecraft-Shaders-zh_CN-Lang-Files',
                            },
                        ],
                    },
                ],
            },
            {
                text: '大众科普',
                children: [
                    {
                        text: '基础科普',
                        children: [
                            '/science/introduction.md',
                            '/science/terms.md',
                            '/science/shaders-base.md',
                            '/science/shaders-tech.md',
                            '/science/resourcepacks.md',
                            '/science/render.md',
                            '/science/film.md',
                        ],
                    },
                    {
                        text: '误区纠正',
                        children: [
                            '/science/correct/introduction.md',
                            '/science/correct/RT_mistakes.md',
                        ],
                    },
                ],
            },
            {
                text: '疑难解答',
                children: [
                    {
                        text: '基础问题',
                        children: [
                            {
                                text: '光影包问答',
                                link: '/answer_java/qas/shader.md',
                            },
                            {
                                text: '资源包问答',
                                link: '/answer_java/qas/texture.md',
                            },
                        ],
                    },
                    {
                        text: '进阶问题',
                        children: [
                            {
                                text: '进阶导言',
                                link: '/answer_java/README.md',
                            },
                            {
                                text: '光影加载',
                                link: '/answer_java/shaders.md',
                            },
                            {
                                text: '视频设置',
                                link: '/answer_java/settings.md',
                            },
                            {
                                text: '模组兼容',
                                link: '/answer_java/mods.md',
                            },
                        ],
                    },
                ]
            },
            {
                text: '创作指南',
                children: [
                    {
                        text: '创作者指南',
                        link: '/creator/README.md'
                    },
                    {
                        text: '资料整理',
                        link: '/creator/resources.md'
                    },
                ],
            },
            {
                text: '关于',
                children: [
                    {
                        text: '关于文档',
                        link: '/about.md',
                    },
                    {
                        text: 'GitHub',
                        link: 'https://github.com/HyperCol/MGCD',
                    }, {
                        text: 'Dev文档',
                        link: 'https://dev.mgcd.pages.dev',
                    },
                ]
            },
        ],

        //左侧列表
        sidebar: {
            '/guide/': [
                '/guide/README.md',
                '/guide/attention.md',
                '/guide/others.md',
            ],
            '/science/': [
                '/science/README.md',
                '/science/terms.md',
                '/science/shaders-base.md',
                '/science/shaders-tech.md',
                '/science/resourcepacks.md',
                '/science/render.md',
                '/science/film.md',
                {
                    text: '误区纠正-导言',
                    link: '/science/correct/',
                },
                '/science/correct/RT_mistakes.md'
            ],
            '/answer_java/': [
                '/answer_java/qas/shader.md',
                '/answer_java/qas/texture.md',
                '/answer_java/README.md',
                '/answer_java/shaders.md',
                '/answer_java/settings.md',
                '/answer_java/mods.md',
            ],
            '/creator/': [
                '/creator/README.md',
                '/creator/resources.md',
            ],
            '/instructions/': [
                {
                    text: 'Java版光影包',
                    collapsible: false,
                    children: [
                        '/instructions/java_shaders/README.md',
                        '/instructions/java_shaders/itt2.md',
                        '/instructions/java_shaders/itt3.md'
                    ],
                },
                {
                    text: 'Java版资源包',
                    collapsible: false,
                    children: [
                        '/instructions/java_resourcepacks/README.md',
                        '/instructions/java_resourcepacks/qin.md',
                        '/instructions/java_resourcepacks/itp.md',
                        '/instructions/java_resourcepacks/mtp.md',
                        '/instructions/java_resourcepacks/tmeo.md'
                    ],
                },
                {
                    text: 'BetterRTX',
                    link: '/instructions/better_rtx/README.md'
                },
            ],
            '/works/': [
                '/works/java_shaders.md',
                '/works/java_resourcepacks.md',
                '/works/bedrock_shaders.md',
                '/works/bedrock_resourcepacks.md',
            ]
        },
    }),
}
