module.exports = {
  lang: 'zh-CN',
  title: 'MGC Docs',
  description: 'Minecraft Graphic Community Documents',
  port: "8080",
  head: [
    ["link", { rel: "icon", href: "/images/MGC-logo.png" }],
  ],
  themeConfig: {
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
        '/correct/RT_mistakes',
        '/correct/other',
        '/correct/netease_shader',
        '/correct/author_says',
      ],
      '/answer_java': [
        '/answer_java/README.md',
        '/answer_java/shaders.md',
        '/answer_java/settings.md',
        '/answer_java/mods.md',
      ]
    },
  }
}