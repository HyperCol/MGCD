# 光影问答

## 为什么 MC 的光影优化如此糟糕？

有以下几个原因：

- `OpenGL` 本身性能不差，但是选用的版本老旧，导致老旧的着色器代码具有**极大的优化空间**；
- `lwjgl` 封装加上 `Blaze3d` 封装让代码效率打了折扣；
- 游戏渲染和主进程绑定在一起，也就意味着虽然 `GPU` 可能有空闲，但是由于主进程运算阻塞，导致 `FPS` 降低；
- 部分优化完全可以达到很好的效果，但是 Mojang 没能力做（例如 `Sodium` 或者 `OptiFine` 的优化）。
- 换言之：
  - 从最底层看，御三家的 `OpenGL` 实现做的参差不齐；
  - 往上看 `OpenGL` 本身历史包袱重，而且 `Mojang` 用的是旧的方法，新的也不会用；
  - 看引擎： `lwjgl` 也就 `MC` 在用了，小厂自研，优化一般，单线程运作也限制了过多东西；
  - 看游戏架构：渲染与其他操作绑定同步，只要别的地方出岔子，渲染就卡；
  - 再看看渲染代码：优化二字完全没体现，能用就行；
  - 最后看总体：一代不如一代。

## `XX 显卡` / `XX CPU` / `XX 内存` 推荐用什么光影

**不会有具体答案。**

- 对于市面上不同的显卡、整合包、游戏版本，光影的帧数表现都 `不同`，鉴于对流畅度的要求因人而异，我们**不可能给出“大一统答案”这类回复**。
- 如果你确实需要一个参考，请在问题里带上你的 `显卡型号`（包括桌面端还是移动端）、需要的帧数，以及你想要的光影风格。

## 有没有 `稳 XX 帧` 的光影？

**不会有具体答案。**

- 光影在游戏中的渲染是一个 **动态** 的过程，任何变量（`游戏版本`、`地图地形`、`材质`、`模组`、`数据包`，甚至 `游戏内朝着不同的东西看` 等等）都会对光影的帧数 **产生影响**，从而使帧数变得不稳定。
- 此类问题最好的答案是自行测试。

## 光影区分游戏版本吗？

**一般来说，光影不区分游戏版本**，`GLSL` 的兼容性可以保证光影能够在 **大多数设备** 上运行。如果你遇到有部分光影不兼容当前游戏的情况，可能是以下几点：

- **你使用了 `OptiFine 最新预览版`：**
  - `预览版 OptiFine` 用于 **测试** 及 **反馈 `BUG`** ；
  - 直接使用此版本会导致一系列不兼容现象，有时候还会无法启用光影。

- **光影本身年久失修，无人维护：**
  - 可能是 Shadersmod 时代的产物；
  - 在 `OptiFine` 严谨的检查下会出现 **语法不规范问题**（如 `SEUS RC6` ）。

- **Mod 兼容问题：**
  - 请检查所用 `Mod` 是否有不兼容 `OptiFine` 的说明，包括但不限于：
    - 视觉类 Mod（如： **更好的树叶**）、
    - `自带渲染的 Mod`（如： **植物魔法**）等…
  - 如果出现该类问题，请前往 [MGC 快速答疑手册——Java版着色器(Shader)](https://mgchelp.yuque.com/rfigvp/bzn947/ggd9ms) 寻找可能的解决方式。

- **你的电脑使用了 AMD Radeon 系列显卡：**
  - 自 2022 年 7 月开始， AMD 大幅重写了显卡驱动，在提升了一定性能的同时，把原本就不佳的兼容性破坏到无以复加。如果想要体验较多的光影，请将显卡驱动回滚至 `22.6.1 及以前`。

- **你的电脑使用了 Intel 系列显卡：**
  - Intel 系列显卡对光影的支持一直很糟糕。如果你的电脑还有独立显卡，请尽量调用独显来运行游戏。
  - 调用独显的具体方法根据显卡商，有不同分类，可通过搜索引擎获取，此不赘述。

- **你游玩着过于老旧的游戏版本：**
  - 一些光影（如 `PTGI`） 不兼容 `1.7.10` 及以下的老版本，
  - 因为这些版本的 `OptiFine` 或 `Shadersmod` 年久失修，
  - 不兼容新的光影代码，属于正常现象；

- **你所用的设备不兼容最新的OpenGL版本：**
  - 如苹果公司的MacBook最高只支持 `OpenGL 4.1`，而最新的版本为4.6。
  - 一旦光影文件内指定版本高于 `OpenGL 4.1`（即 `GLSL 410` ），便极有可能发生兼容性问题。

## 为什么有时候光影帧数低，同时 GPU 的占用也很低？

此时你需要准备一个任务管理器，检查 **CPU 占用** ：

- 右键任务管理器中 CPU 的占用曲线图，将图形更改为 `逻辑处理器` ；
- 如果你发现 `其中一个线程是满载` ，那一般是因为 CPU 出现瓶颈，性能不足以调用全部 GPU 的性能；
- 原因一般是使用了 **模组过多的整合包** 或 **分辨率过高的纹理包**。可根据具体情况逐个调整，减少 CPU 的负载。

随后检查 **运行内存占用** ：

- 检查任务管理器中 `已提交` 的 **现有内存** 是否已经超过了你的 `内存条容量` ；
- `已提交的总内存` = `内存条容量` + `系统从磁盘中划分的虚拟内存` ，虚拟内存仅能做到不让游戏崩溃，由于磁盘 IO 和内存吞吐不是一个级别的速度，两者不可能做到平替。
- 如果已超过，此时你需要更换容量更大的内存条。

还有两种特殊情况：

- 一种是部分光影（如 BSL ）本身就难以使 GPU 达到满载，但由于其运算量少，也难以做到帧率低；
- 其次是 `在一个区块停留过久` ，尤其是一些方块堆叠过多的基地，可能会消耗过多的 CPU 或别的部件，从而导致无法调用 GPU 的全部性能。

## Java 版光影能否用 RTX 的光追核心来提供更好的实时光线追踪效果？

**可能可以，但不是现在：**

- 目前 `Java 版  Minecraft 光影` 使用的 **图形渲染引擎** 为 `OpenGL`，
- 它没有相关的 API 接口，并不能通过 `调用光追核心` 来 **提高光追效率**。
- 但是，Java 版 的以下两个模组，分别是：
  - `VulkanMod`；
  - `Sodium` 模组新开的 `Vulkan` 分支。
- 这两个模组，能够将 MC 的 **图形渲染引擎** 替换为 `Vulkan`，理论上可实现调用硬件来加速光线追踪渲染。
- 但以项目的开发速度来看，想要在短时间内实现对光影的支持，希望非常渺茫。

## 我喜欢 A 光影的水和 B 光影的云。我可以把这两个包结合起来吗？

**通常情况下，不能：**

- 在 `Minecraft Java 版光影包` 中没有 **标准** 的做事方式，
- 所以 **不同** 的光影包 **可以（而且经常会）** 以不同的方式实现相同的效果，或者使用相同的缓冲区来保存不同的信息。
- 因此，通过 **简单的添加删除文件** 去结合效果是 **几乎不可能** 的。
- 但如果你擅长 `GLSL`，你当然可以试一试。
- 你也可以询问你想组合光影包的开发者，他们的效果是 **如何/在哪里** 实现的，以及在这些地方有 **哪些信息**，这些问题对于结合光影效果是 **有必要的**。
- 但是，不要指望让开发者 **无条件** 帮你改光影，或者 **教你** `GLSL`，**这不是他们的义务！**
- 如果你对学习 `GLSL` 不感兴趣，你也可以提出 **付费** 让他人为你制作 `组合光影包`。

## `OptiFine` 能与 `Iris`、`Sodium` 一起运行吗？

**不能**。OptiFine 与 Iris 在功能上是重复的，两者互不兼容。而钠属于优化模组，只能兼容开源的 Iris，无法兼容 OptiFine。

## `Java 版` 光影能否搭配 `DLSS / FSR`？

**理论上：**

- FSR 可以，
- DLSS 技术未开放，无法搭配。
- 需要注意的是， `PTGI HRR 版本` 也使用了与此类似的技术，`HRR` 的功能也是 **降低分辨率提升帧数**，
- 这也是很多人为什么说 `HRR系列` 看起来比 `E12` **糊** 的原因。

## `光线追踪光影` 与 `传统光影` 的最本质区别是什么？

**是否使用了光追算法:**

- 也就是说，无论你使用的 `GPU` 是谁家的，只要光影文件里存在光追算法，
  
- 那就属于 `光线追踪光影`，而 **不取决于是否采** 用 `RTX` 或 `RX6000` 系列显卡。

## `Java版` 的着色器叫 `光影`，`基岩版` 的着色器就只能叫 `着色器` 或 `伪光影`？

- 从图形学上讲， `光影` 的**专业名称**就是 `着色器` ：
  
- 光影只是 **国内的另一种好听的说法** ，就像你可以把 `引力波` 称作 `时空涟漪`。
  
- 基岩版由于 `接口` **先天的缺乏** 以及 **移动设备性能不足**，无法像 Java 版一样做出 `效果相对完整` 的着色器，但它仍然叫做光影。
  
- 有一种说法是，`基岩版 PE 端` 光影没有实时阴影，不配叫光影。
  
- 然而 `光影` 二字，**从来都不是** 指代实时阴影，也 **不会有任何** 一位光影作者会提出 `没有实时阴影就不是光影` 这种观点！

## 基岩版的光影是贴图直接糊上去的？

- 上文提到基岩版无法做出与 `Java 版` 一样的光影，缺陷相对多很多，但也并 **没有简单到使用** `图片粘贴` 等技术的地步。
  
- 着色器的 **渲染** 由 **算法** 完成，可以是 **简单粗暴** 的 `镜面反射场景`，但 **不可能用贴图做到**。
  
- 提出该观点的人大可拆开他们所谓的 `贴图光影 文件`，通过找到所有 **疑似使用** 该技术的图片来 **佐证** 他们的观点，否则只能是以下两种情况：
  
  - **道听途说的错误说法；**

  - **将同样加载形式的 `纹理包` 与 `光影包` 混淆了。**

## `基岩版` 的一些有特殊效果的纹理包叫做 `伪光影` ？

- `着色器` 与 `纹理包` 是不同的概念。

- 作为纹理包，其能实现的主要功能即**纹理的替换**。

- 假若通过一些 `特殊手段`（如修改雾气）使其表现出**如同被着色器渲染出的效果**，最终结果也是极其的勉强。

- 而实际上，`着色器` 支持的功能远不止这些。要达到 `伪` 的级别，也应当将一个着色器能实现的**大部分效果**复现出来，包括`光照`、`阴影`、`大气`、`水波`等**主要场景因素**。

- 显然，想要在一个主要功能为 `替换贴图` 的纹理包去实现这些效果**并不现实**。