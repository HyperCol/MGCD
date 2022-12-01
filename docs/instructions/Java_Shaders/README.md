# 通用教程（新手必看）

## 光影基础概念

- 光影的专业名称为着色器。它基于MC提供的接口修改了许多MC的光照效果。这些接口由一些渲染模组控制，关于着色器的渲染模组介绍如下：
- [MGC 大众科普](../../science/render.md)
- **从引用文案可知，我们使用的渲染模组以 OptiFine 为主。考虑到新手学习内容较多且不应该过于深奥，我们仅提供 OptiFine 的安装使用与光影的加载步骤。**

---

## OptiFine 安装与光影加载

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

## OptiFine 光影无法与其他模组兼容

- 国外光影社区 ShaderLABS 整理了一份`不兼容的模组名单`，并逐一写明了如何使它们与 OptiFine 光影兼容。我们将这些内容汉化并搬运到了 **MGC 答疑手册 - Java版着色器(Shader)**。内容如下：

- [MGC 答疑手册 - Java版着色器(Shader)](../../answer_java/)

- 此外，该文档还记录了许多 OptiFine 设置上的问题与解决方法。如果你的 OptiFine 光影表现不正常，请一定要认真看完上述文档。

---

## 误区纠正

### 常见误区纠正

- [MGC 歧义及观点纠正](../../correct/)

### 光线追踪误区纠正

- [MGC 歧义观点 - 光线追踪](../../correct/RT_mistakes.md)
