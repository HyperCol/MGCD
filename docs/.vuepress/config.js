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
        text: '误区纠正',
        children: [
          {
            text: '歧义观点',
            link: '/correct/',
          },
          {
            text: '答疑手册',
            link: '/answer_java/',
          }
        ]
      },
      {
        text: '创作指南',
        link: '/creator/',
      },
      {
        text: '使用说明',
        children: [
          {
            text: 'Java版光影',
            link: '/instructions/Java_Shaders/'
          },
          {
            text: 'Java版材质',
            link: '/instructions/Java_Resourcepacks/'
          }
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
        "/science/faq.md",
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
          children: ['/correct/qas/shader.md', '/correct/qas/texture.md'],
        },
        '/correct/RT_mistakes.md',
        '/correct/other.md',
        '/correct/netease_shader.md',
        '/correct/author_says.md',
      ],
      '/answer_java/': [
        '/answer_java/README.md',
        '/answer_java/shaders.md',
        '/answer_java/settings.md',
        '/answer_java/mods.md',
      ],
      '/creator/': [
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
        }
      ]
    },
  })
}