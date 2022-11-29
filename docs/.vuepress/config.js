import { defaultTheme } from '@vuepress/theme-default'

module.exports = {
  lang: 'zh-CN',
  title: 'MCGD',
  base: "/MCGD/",
  description: 'Minecraft Community Graphic Documents',
  port: "8080",
  head: [
    ["link", { rel: "icon", href: "/images/MGC-logo.png" }],
  ],
  theme: defaultTheme({
    logo: '/images/MGC-logo.png',
    logoDark: '/images/MGC-dark.png',
    notFound: ["404 Not Found，页面丢失。"],
    backToHome: "<-回到首页",
    repo: 'HyperCol/MCGD',
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
      ],

    },
  })
}