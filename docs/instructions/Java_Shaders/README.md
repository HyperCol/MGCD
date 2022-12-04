# 通用教程（新手必看）

## 光影基础概念

- 光影的专业名称为着色器。它基于MC提供的接口修改了许多MC的光照效果。这些接口由一些渲染模组控制，关于着色器的渲染模组介绍如下：

>### 主要渲染模组
>
>- **`OptiFine` 是 Minecraft Java 版的一个 Mod**。其主要功能是加载光影包、性能优化与一些渲染改进功能，为玩家获得更好的视觉体验。你可能也听说过 ShadersMod 或光影核心，但请勿再使用它。 ShadersMod 已经过期已久，因为 OptiFine 已经将它集成进代码，并接管了它的后续更新工作，而且现在的 OptiFine 有许多原来的 ShadersMod 所没有的新功能。几乎所有的现代光影包都使用了这些新功能（这些光影包往往不再适用于 ShadersMod） 。
> - [相关链接 - OptiFine](https://www.optifine.net/home)
>- **`Iris` 是 OptiFine 的衍生物**。其自身开源，与 Sodium（钠）模组共同开启时可以获得更好的游玩体验，同时为了 Fabric 模组加载器社区的模组兼容性而生。但其开发方向与 OptiFine 相反（适配现有的光影，不追求新效果新光影），而光影的开发是与 Optfine 或 Canvas 同向的。因此未来一段时间内，我们仍然需要 OptiFine 或 Canvas 作为光影的主体 API，不可能直接替换为 Iris 。  
> - [相关链接 - Iris](https://irisshaders.net/)
>- **`Canvas` 是基于 Fabric API 的一个渲染 Mod**。其主要功能是为模组开发者提供更好的渲染体验，但其也适用于开发光影包。Canvas 通过深度结合 Fabric API 的独立渲染API以及原版着色器，来达到比 Optifine 更多的可能性，以及 Iris 都无法匹敌的模组兼容性。但因其主要为模组开发而生，渲染管线极为复杂，学习成本非常高，导致目前基于 Canvas 开发光影的创作者极少。
> - [相关链接 - Canvas](https://github.com/vram-guild/canvas)
>
>### 其他渲染模组
>
>- **`Blaze4D` 是一个目前基于 Fabric API 的实验性项目，使用 Vulkan API** 。与 OptiFine 或 Iris 不同，它不是一个优化mod。虽然它进行了一定的性能改进，但远不及 OptiFine 与 Iris 。值得一提的是，Blaze4D 唯一真正制作的优化工作是 baked-entity-models 烘焙实体模型，并将其提交给了 Sodium 供所有人使用。**Blaze4D 未来将允许开发者将 DLSS 或 FSR 、硬件加速光线追踪引入到光影开发中** 。当然，这些功能目前还是有生之年系列。
>
> - [相关链接 - Blaze4D](https://github.com/KilnGraphics/Blaze4D)
>- **`Focal Engine` 是由 Continuum 光影团队开发的一个基于 Vulkan API 的独立光影渲染模组，基于 Forge 或 Fabric，同时基于 OptiFine。** 其专用于 Continuum 2.1 / RT 光影与 Stratum 材质。主要目的是借助 Vulkan 编写光影来获得更高的效率、更多的渲染空间乃至**实现硬件光追**（有生之年系列×2）。同时还可以帮助光影作者实现光影加密和联网验证。目前**能够独立于 OptiFine** 的 Vulkan 版本仍在开发中，当前版本为依赖 Optifine 的 OpenGL 版。
> - [相关链接 - Continuum Graphics](https://continuum.graphics/)
>- **`Vulkan Mod`是一个基于 Fabric 的模组，将 MC 的渲染API换为 Vulkan ，借此提高帧数**。目前存在较多bug与兼容性问题，并不支持光影。
> - [相关链接 - Vulkan Mod](https://github.com/xCollateral/VulkanMod)
>
>### 辅助渲染模组
>
>- `AdcanvedShader` 是一个 **OptiFine** 的辅助模组，仅在 `1.12.2` 可用。它能够允许用户使用**仅在更高版本中可用**的着色器（如 iterationT 3.0.0 ）。
>
- [相关链接 - AdcanvedShader](https://www.curseforge.com/minecraft/mc-mods/advancedshader)

—— 引用自 [MGC 大众科普](../../science/shader-base.md)

- **从引用文案可知，我们使用的渲染模组以 OptiFine 为主。考虑到新手学习内容较多且不应该过于深奥，我们仅提供 OptiFine 的安装使用与光影的加载步骤。**

---

## OptiFine 安装与光影加载

- 以下步骤分 `自动安装` 与 `手动安装` 两种形式。

  - `自动安装` 适用于**初次安装游戏**时；

  - `手动安装` 适用于**往整合包中添加新内容**时。

### 自动安装

![安装optifine-1.png](/images/instructions/安装optifine-1.png)
![安装optifine-2.png](/images/instructions/安装optifine-2.png)

安装步骤：

- 打开 PCL2（鉴于 PCL2 其优秀的界面设计与逻辑，我们默认建议新手使用该启动器）；
- 点击 **下载** -> **自动安装**，选择自己需要的游戏版本后，在 OptiFine 安装栏中点击选择最新版本（一般在最顶部）。

### 手动安装

安装步骤：

- 点击进入 [OptiFine 官网](https://www.optifine.net/home)；
- 点击上面的 `Download` ；
- 下载对应版本的**最新** OptiFine（如果广告无法跳过，点击旁边的 `Mirror` ）；
- 双击打开下载到的文件，选择想要安装的客户端根目录，点击 `Install` 即可完成安装。

![安装optifine-3.png](/images/instructions/安装optifine-3.png)

### 加载光影

启动安装后的游戏版本。点击 **设置** -> **视频设置** ->**光影** 即可选择加载 shaderpacks 文件夹内的任意光影包。

以下是自带的两个选项说明：

- **（内置）**： OptiFine 自带的一套基于原版的渲染系统，相较于原版会有较大的 FPS 提升。注意，有时候与一些模组（如交错次元）同时加载时会出现 BUG ，一般在第一次加载时模组也会警告，此时需要将加载选项改为 **关闭** 或 **禁用 OptiFine**。
- **（关闭）**：约等于没有安装 OptiFine ，适用于模组不兼容（内置）渲染系统时。

## OptiFine 无法与 Forge 兼容

- 在较低版本中（如 `1.12.2` ），从官网下载的 `OptiFine JAR` 文件可以作为 `Mod` 用 Forge **直接加载**；
- 但由于 **Forge 更新速度快于 OptiFine**，部分新版本的最新 Forge 可能会与 OptiFine 不兼容。此时需要前往 OptiFine 官网的 `更新日志`，**检查支持的 Forge 版本并回退。**

![image.png](/images/instructions/forge.png)

### 自动安装解决方案

- 在 **自动安装** 界面直接选择上图中版本的 Forge 与 OptiFine 即可解决该问题。

### 手动安装解决方案

![extract.png](/images/instructions/extract.png)

- 双击 OptiFine 官网的 Jar 文件打开安装器，将目录引导至你的游戏根目录下。在预先装好原版游戏后，点击 `Extract` ，会自动生成一个`模组版 OptiFine` 。

![mods.png](/images/instructions/mods.png)

- 将 **模组版 OptiFine** 放到 `mods` 文件夹，即可正常加载 OptiFine 。

## OptiFine 无法与 Fabric 兼容

一般分两种情况。

- **未添加 `OptiFabric` 模组。** Fabric 与 OptiFine 的兼容由 `OptiFabric` 模组负责，绕过该模组直接添加或尝试用 Forge 的安装方式安装皆不可行。唯一的解决方案是将 OptiFine 与 OptiFabric **一起放入** `mods` 文件夹，再用 Fabric 加载。
- **添加了 OptiFabric ，但仍然不兼容。** 该情况多出现在新版本，一般是因为 OptiFabric 更新较慢的缘故。此时需要等待作者发布更新或换为`更旧版本`的 OptiFine 。

## OptiFine 无法与 Sodium / Iris 等系列模组兼容

直接删除**该系列所有模组**即可。

- OptiFine 的光影支持功能与 Iris 在功能上是 `重复` 的，两者**互不兼容**。

- 而钠属于**优化模组**，只能兼容开源的 `Iris`，无法兼容**原本就具备优化功能**的 `OptiFine` 。

## OptiFine 无法与其他模组兼容

- 国外光影社区 ShaderLABS 整理了一份`不兼容的模组名单`，并逐一写明了如何使它们与 OptiFine 光影兼容。我们将这些内容汉化并搬运到了 **MGC 答疑手册 - Java版着色器(Shader)**。内容如下：

- [MGC 答疑手册 - Java版着色器(Shader)](../../answer_java/)

- 此外，该文档还记录了许多 OptiFine 设置上的问题与解决方法。如果你的 OptiFine 光影表现不正常，请一定要认真看完上述文档。

---

## 误区纠正

### 常见误区纠正

- [MGC 歧义及观点纠正](../../correct/)

### 光线追踪误区纠正

- [MGC 歧义观点 - 光线追踪](../../correct/RT_mistakes.md)
