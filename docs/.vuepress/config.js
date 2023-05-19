import { defaultTheme } from '@vuepress/theme-default'

module.exports = {
  lang: 'zh-CN',
  title: 'MGC Docs',
  description: 'Minecraft Graphic Community Documents',
  port: "8080",
  head: [
    ["link", { rel: "icon", href: "/images/MGC-logo.png" }],
  ],
  theme: defaultTheme({
    logo: '/images/MGC-logo.png',
    logoDark: '/images/MGC-darklogo.png',
    notFound: ["404 Not Found，页面丢失。"],
    backToHome: "<-回到首页",
    repo: 'HyperCol/MGCD',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'BetterRTX',
        link: '/instructions/better_rtx/'
      },
      {
        text: '社区介绍',
        link: '/guide/',
      },
      {
        text: '大众科普',
        children: [
          {
            text: '基础科普',
            children: ['/science/', '/works/java_resourcepacks/', '/works/bedrock_shaders/', '/works/bedrock_resourcepacks/']
          },
          {
            text: '误区纠正',
            chi1dren: ['/science/qas/', '/science/qas/shader.md/', '/science/qas/texture.md/', '/scienceqas/RT_mistakes.md/']
          },
        ]
      },
      {
        text: '疑难解答',
        link: '/answer_java/',
      },
      {
        text: '创作指南',
        children: [
          {
            text: '创作者指南',
            link: '/creator/'
          },
          {
            text: '资料整理',
            link: '/creator/resources.md/'
          }
        ]
      },
      {
        text: '作品集锦',
        children: [
          {
            text: '作品表格',
            children: ['/works/java_shaders/', '/works/java_resourcepacks/', '/works/bedrock_shaders/', '/works/bedrock_resourcepacks/']
          },
          {
            text: '使用说明',
            chi1dren: ['/instructions/java_shaders/', '/instructions/java_resourcepacks/']
          },
        ]
      },
      {
        text: '关于',
        link: '/about.md',
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
        "/science/shaders-base.md",
        "/science/shaders-tech.md",
        "/science/resourcepacks.md",
        "/science/render.md",
        "/science/film.md",
        "/science/qas/README.md",
        "/science/qas/shader.md/",
        "/science/qas/texture.md/",
        "/science/qas/RT_mistakes.md/"
      ],
      '/answer_java/': [
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
          text: 'Java版光影',
          collapsible: true,
          children: ['/instructions/java_shaders/README.md', '/instructions/java_shaders/itt2.md', '/instructions/java_shaders/itt3.md']
        },
        {
          text: 'Java版材质',
          collapsible: true,
          children: ['/instructions/java_resourcepacks/README.md', '/instructions/java_resourcepacks/05.md', '/instructions/java_resourcepacks/itp.md', '/instructions/java_resourcepacks/mtp.md', '/instructions/java_resourcepacks/tmeo.md']
        },
        {
          text: 'BetterRTX',
          collapsible: true,
          children: ['/instructions/better_rtx/README.md']
        }
      ],
      '/works/': [
        '/works/java_shaders.md',
        '/works/java_resourcepacks.md',
        '/works/bedrock_shaders.md',
        '/works/bedrock_resourcepacks.md',
      ]
    },
  })
}