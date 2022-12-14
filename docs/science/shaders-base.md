# 着色器基础概念

## 关于 Java 版渲染模组

### 主要渲染模组

- **`OptiFine` 是 Minecraft Java 版的一个 Mod**。其主要功能是加载光影包、性能优化与一些渲染改进功能，为玩家获得更好的视觉体验。你可能也听说过 `ShadersMod` 或 `光影核心` ，但请勿再使用它。 ShadersMod 已经过期已久，因为 OptiFine 已经将它集成进代码，并接管了它的后续更新工作，而且现在的 OptiFine 有许多原来的 ShadersMod 所没有的新功能。几乎所有的现代光影包都使用了这些新功能（这些光影包往往不再适用于 ShadersMod） 。
  - [相关链接 - OptiFine](https://www.optifine.net/home)
- **`Iris` 是 OptiFine 的衍生物**。其自身开源，与 Sodium（钠）模组共同开启时可以获得更好的游玩体验，同时为了 **Fabric** 模组加载器社区的模组兼容性而生（ **Forge** 中也有移植版，名为 `Oculus` ，由于社区的一些特性，不推荐使用）。但其开发方向与 OptiFine 相反（适配现有的光影，不追求新效果新光影），而光影的开发是与 Optfine 或 Canvas 同向的。而且 Iris 到目前为止对开发者并不友好。因此未来很长一段时间内， Iris 仍然只是 OptiFine 的临时替代品。  
  - [相关链接 - Iris](https://irisshaders.net/)
- **`Canvas` 是基于 Fabric API 的一个渲染 Mod**。其主要功能是为模组开发者提供更好的渲染体验，但其也适用于开发光影包。Canvas 通过深度结合 Fabric API 的独立渲染API以及原版着色器，来达到比 Optifine 更多的可能性，以及 Iris 都无法匹敌的模组兼容性。但因其主要为模组开发而生，渲染管线极为复杂，学习成本非常高，导致目前基于 Canvas 开发光影的创作者极少。
  - [相关链接 - Canvas](https://github.com/vram-guild/canvas)

### 其他渲染模组

- **`Blaze4D` 是一个目前基于 Fabric API 的实验性项目，使用 Vulkan API** 。与 OptiFine 或 Iris 不同，它不是一个优化mod。虽然它进行了一定的性能改进，但远不及 OptiFine 与 Iris 。值得一提的是，Blaze4D 唯一真正制作的优化工作是 baked-entity-models 烘焙实体模型，并将其提交给了 Sodium 供所有人使用。**Blaze4D 未来将允许开发者将 DLSS 或 FSR 、硬件加速光线追踪引入到光影开发中** 。当然，这些功能目前还是有生之年系列。
  - [相关链接 - Blaze4D](https://github.com/KilnGraphics/Blaze4D)
- **`Focal Engine` 是由 Continuum 光影团队开发的一个基于 Vulkan API 的独立光影渲染模组，基于 Forge 或 Fabric，同时基于 OptiFine。** 其专用于 Continuum 2.1 / RT 光影与 Stratum 材质。主要目的是借助 Vulkan 编写光影来获得更高的效率、更多的渲染空间乃至**实现硬件光追**（有生之年系列×2）。同时还可以帮助光影作者实现光影加密和联网验证。目前**能够独立于 OptiFine** 的 Vulkan 版本仍在开发中，当前版本为依赖 Optifine 的 OpenGL 版。
  - [相关链接 - Continuum Graphics](https://continuum.graphics/)
- **`Vulkan Mod` 是一个基于 Fabric 的模组，将 MC 的渲染API换为 Vulkan ，借此提高帧数**。目前存在较多bug与兼容性问题，并不支持光影。
  - [相关链接 - Vulkan Mod](https://github.com/xCollateral/VulkanMod)

### 辅助渲染模组

- `AdcanvedShader` 是一个 **OptiFine** 的辅助模组，仅在 `1.12.2` 可用。它能够允许用户使用**仅在更高版本中可用**的着色器（如 iterationT 3.0.0 ）。
  - [相关链接 - AdcanvedShader](https://www.curseforge.com/minecraft/mc-mods/advancedshader)

### 关于基岩版光影与 RenderDragon

- **首先明确一个概念： `光影属于着色器` 。无论是哪个 MC 版本，两者都没有明确的分界线。** 基岩版光影基于 Opengl ES 中的 GLSL 或 HLSL 。由于接口限制，基岩版光影可以实现的效果非常少，但仍可以通过一系列稀奇古怪的方法实现物理渲染体系。
- **什么是接口（API）？** 简单来说，需要游戏有 `对应接口` 才能接入对应算法。具象化来说，这就好比给手机（游戏本体）扩展存储（想要达到的光影效果），需要 `SD 卡（算法）`，并且手机需要有  `SD 卡槽（接口）` 才能插入。
- **能否自己加接口？** 基岩版基于 `C++` ，反编译（可以获取到游戏源码，JE的模组 API 就靠这个）极其困难，几乎不可能实现，没有人成功过。
- **渲染龙引擎（RenderDragon）是微软官方在 `基岩版Minecraft` 实装的渲染引擎**。目前，渲染龙已覆盖到了 `Windows`、`Xbox`、`Android` 等多平台的基岩版 Minecraft 上，替代了原本第三方着色器的光照方案。理想情况下，Windows版本能够通过调用 `RTX` 或 `RX6000 及以上` 系列显卡的光线追踪加速单元以提升光线追踪的效率，而其他平台上的引擎能够起到优化作用。~~意外的是，渲染龙一开始是给 Java 版 Minecraft 设计的，而且渲染龙目前只起到了负优化作用。~~
- **渲染龙的引入并不一定是正向的**。
  - 渲染龙目前在多个平台上表现为负优化，例如操作、渲染延迟等，且帧数并不一定有提升。
  - 渲染龙的算法加密破坏了很多东西，除了光影还有例如 `区块显示`、`红石能量显示`、`亮度显示`、`夜视`、`透视`、`小地图` 等，这些原本都能由第三方光影实现。而它们的消失给一些玩家带来了不少困扰。
  - 官方的光追光影虽然在光追方面技术力高，但其在细节调校方面做的并不如人意，也对主打真实风格的地图与材质作者造成了很大困扰，并且在手机版直接导致了第三方光影集体灭绝。
  - 这也是我们目前为什么反对渲染龙的原因，在此希望大家可以**理性看待渲染龙，而非一味吹捧。**
- 2022 下半年更新： 渲染龙及 RTX **已被破解** ，但由于破解团队收到微软的 DMCA 致函（你可以理解为类似律师函，只是警告），以及新的光影编写方法过于麻烦（需反编译后编辑，再回编译后放到固定文件夹替换相关文件，重启游戏），目前 BE 光影仍处于**半死不活的状态。**

### 关于网易的BE后处理着色器

（待编写）
