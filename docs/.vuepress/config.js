import { defaultTheme } from '@vuepress/theme-default'

module.exports = {
  lang: 'zh-CN',
  title: 'correct Docs',
  // base: "/MCGD/",
  description: 'Minecraft Graphic Community Documents',
  port: "8080",
  head: [
    ["link", { rel: "icon", href: "/images/correct-logo.png" }],
  ],
  theme: defaultTheme({
    logo: '/images/correct-logo.png',
    logoDark: '/images/correct-darklogo.png',
    notFound: ["404 Not Found，页面丢失。"],
    backToHome: "<-回到首页",
    repo: 'HyperCol/hypercol.github.io',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '社区介绍',
        link: '/guide/',
      },
      {
        text: '大众科普',
        link: '/science/',
      },
      {
        text: 'correct',
        link: '/correct/',
      },
    ],

    //左侧列表
    sidebar: {
      '/guide/': [
        "/guide/README.md",
        "/guide/attention.md",
        "/guide/others.md",
      ],
      '/science/': [
        "/science/README.md",
        "/science/science.md",
        "/science/shaders-base.md",
        "/science/shaders-tech.md",
        "/science/resourcepacks.md",
        "/science/render.md",
        "/science/film.md",
      ],
      '/correct/': [
        '/correct/README.md',
        {
          text: '问题集锦',
          collapsible: true,
          children: ['/correct/qas/shadow', '/correct/qas/texture'],
        },
        '/correct/mistakes',
        '/correct/other',
        '/correct/netease_shader',
        '/correct/author_says',
      ],
    },
  })
}