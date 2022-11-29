export const themeData = JSON.parse("{\"logo\":\"/images/MGC-logo.png\",\"logoDark\":\"/images/MGC-darklogo.png\",\"notFound\":[\"404 Not Found，页面丢失。\"],\"backToHome\":\"<-回到首页\",\"repo\":\"HyperCol/hypercol.github.io\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"社区介绍\",\"link\":\"/guide/\"},{\"text\":\"大众科普\",\"link\":\"/science/\"}],\"sidebar\":{\"/guide/\":[\"/guide/README.md\",\"/guide/attention.md\",\"/guide/others.md\"],\"/science/\":[\"/science/README.md\",\"/science/science.md\",\"/science/shaders-base.md\",\"/science/shaders-tech.md\",\"/science/resourcepacks.md\",\"/science/render.md\",\"/science/film.md\"]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
