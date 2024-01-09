# 术语表

这篇文章列出了整个文档中可能会出现的术语，这些术语或常见或罕见，我们会尽可能多地收录。
在遇到不能理解的专有名词时，可以到此文章中进行查阅。

如果你有更多想要提供的术语，或者发现了术语中的疏漏，可以在 [GitHub](https://github.com/HyperCol/MGCD/issues) 上为我们提交建议。

<!--To 其他文档编辑：如果你们有想要添加的术语，请添加到对应的板块，并在行前使用注释进行标记，我会在之后进行行文风格的统一。--亚克留-->

## 游戏相关

- **JE**：Minecraft Java Edition，即 Java 版游戏，在本文档中，也可以表示只能在**Java版的光影模组**下运行。
- **BE**：Minecraft Bedrock Edition，即基岩版游戏。
  - 这里面也包含了原本的 **PE** ，即 Pocket Edition 版本。

**自此开始无特殊说明的名词均以JE为准。**

### 模组和文件包体

- **资源包**：Resource Pack，即通俗所说的材质包，详见：[资源包 基本概念](resourcepacks.md#资源包-纹理包和材质包的称谓区别) 。
- **光影包**：Shader Pack，亦称光影，由一个或数个 [着色器](#图形基础) 组成的一套流水线工程，用以计算每个像素的颜色。
- **整合包**：Modpack，由多个模组整合而成的文件包。
  - 国内的整合包通常是**懒人包**，即：将游戏本体、启动器、模组以及其他配置和资源文件打包，玩家解压之后即可启动游玩。
  - 国外标准的整合包是 `MultiMC` 格式，这种整合包只包含了需要调用的模组的信息，顾名思义，其由 `MultiMC` 启动器发起建立，是如今很多启动器都支持的格式，在启动器上**在线安装**好后即可启动，这通常需要**正版**账户，由启动器在下载安装API、MOD和外围资源时同时下载游戏本体和资源库。
    - 国内的启动器如 `HMCL` 、 `PCL 2` 、 `BakaXL` 等启动器也均跟进支持了此格式。
    - 此外，国内论坛 `MCBBS` 还提供了自己的整合包格式。
- **模组和模组接口**：MOD 和 MOD API，模组接口也称**模组加载器**，由**第三方提供**的接口在原版游戏基础上运行**由玩家编写的扩展内容**，目前主流的接口有 `Forge` 和 `Fabric` ，此外还有 `Fabric` 的分支版本 `Quilt` 以及自 `JE 1.12.2` 停止更新的 `LiteLoader` 。
  - 早期的模组由于没有加载器，需要将文件全部**覆盖**入游戏**源文件**，因此如果出现两个模组同时需要覆盖同一文件时，这两个模组的兼容性就崩塌了。加载器的出现**缓解**了这一问题。
- **数据包**：Datapack，`JE 1.13` 加入的**由官方支持**的可以修改**世界内数据**的文件包，自 `JE 1.16-pre1` 起可以在创建世界之前加载数据包。

### 渲染模组和引擎

- **Blaze3D**<sup>JE</sup>：JE 现用的渲染引擎。
- **Render Dragon**<sup>BE</sup>：渲染龙，臭名昭著的 BE 现用的渲染引擎。
  - 它的名字引用了游戏中末地的Boss `Ender Dragon`（末影龙）的名字。

- **GLSL Shader Core**：光影核心模组，**最早**的JE光影模组。
  - 在 `OptiFine` 集成后其更新频率明显下降，不再提供新功能支持。
  - 作为一个用于运行老旧光影的备选项，Shader Core 已于 `JE 1.12.2` 停止更新。
- **OptiFine**：高清修复，**简称 OF**，老牌JE优化模组。作者为 **sp614x** 。
  - 最早是提供更大纹理分辨率支持的模组，这也是中文名被翻译为高清修复的原因。
  - 在 `JE 1.8` 之后集成了 `GLSL Shader Core` ，开始提供光影支持。
  - 在某一版本中整合了动态光源模组，让世界中所有的光源都可用于照明。
- **Sodium**<sup>Fabric</sup>：意为“钠”，伴随 `Fabric` 出现的新兴优化模组，旨在优化 `JE 1.14` 后的游戏性能。
  - 伴随钠而出现的许多优化模组开始仿效其使用化学元素来命名模组，被玩家们称为元素周期表/全家桶。
- **Iris**<sup>Fabric</sup>：伴随 `Fabric` 出现的新兴光影模组。由于 `OptiFine` 闭源导致很多**模组无法兼容**，而很多玩家想要在整合包中运行光影，Iris 由此而生。
  - 如今 Iris 已经在着手支持独占功能，并且与 `Sodium` 深度绑定，然而 `Sodium` 本身的兼容性并不好，通常需要依靠额外的模组如 `Indium`（铟）来确保其兼容性。
- **Oculus**<sup>Forge</sup>：`Iris` 的 `Forge` 分支，旨在提供与 `Iris` 一样的模组兼容性。
- **Canvas**<sup>Fabric</sup>：另一新兴渲染模组，完全独立于 `OptiFine` 之外，通过 `资源包` 进行加载。具有**极强的兼容性**和更多特性。
- **Blaze4D**<sup>Fabric</sup>：使用 `Vulkan` 的实验性渲染引擎。
  - 与 `OptiFine` 或 `Sodium` 不同，它的目的不是优化，但是也包含了一定的性能改进。
    - 其唯一真正制作的优化工作是 `baked-entity-models` （烘焙实体模型），并将其提交给了 `Sodium` 以供所有人使用。
  - 未来将允许开发者将 `DLSS` 或 `FSR` 乃至 `硬件加速光线追踪` 引入到光影开发中，但是目前来说仍旧遥遥无期。
  - 它的名字引用了目前 JE 所使用的渲染引擎 `Blaze3D` 。
- **Focal Engine**<sup>Forge / Fabric</sup>：由**Continuum团队**研发的渲染模组。
  - 目前是 `OptiFine` 的增强模组，主要用于他们自己的光影包 `Continuum` 的代码支持、加密和联网验证，同时支持 `Stratum` 的安装。
  - 更长远的目标是独立于 `OptiFine` 在 `Vulkan` 上实现光影渲染，给其他作者提供加密和联网验证及其他支持，并引入 `硬件加速光线追踪` 。
  - 它有一个前身名为 `Nova Render` ，但是由于核心开发人员的离开，这个MOD独立了出来，但是很快没了下文。
- **Advanced Shader**：是一个 `OptiFine` 辅助模组，旨在 `JE 1.12.2` 兼容更高版本的光影。

## 计算机相关

### 数学基础

- **标量**：也称数量，一个**数字**就是一个标量。
- **向量**：也称矢量，多个标量构成的具有有**方向**的量。
  - **模长**：向量的长度。
  - **单位向量**：模长为1的向量。
  - 在 `GLSL` 中，我们使用形如 `vec3(1.0, 0.2, 3.5)` 的方式来表示三维向量。
- **点乘**：**两个向量**运算为一个标量，我们使用形如 `dot(<vectorA>, <vectorB>)` 来表示点乘。
- **向量/矩阵乘法**：也称左乘，向量和矩阵之间的**有序乘法**。得出的值的类型与**最右侧**的值相同。左乘所使用的符号与**标量的普通乘法一致**。
  - 左乘的参数存在一些限制，不过这里不做深入。
- **单位化**：将一个**非零向量**转换为**单位向量**，我们使用形如 `normalize(<vector>)` 来表示单位化。
- **长度**：计算向量的**模长**，我们使用形如 `length(<vector>)` 来表示获取长度。

### 计算机基础

- **像素**：Pixel，二维位图的**最小显示**单位。
  - 在实际渲染或计算中，有**子像素**（Sub-Pixel）的概念，因此像素仅为位图的最小显示单位。
- **体素**：Voxel，对应像素的定义，作为一种三维图形的表示方法，在此类空间中定义的三维图像，体素是**最小坐标**单位。
- **位图**：也称标量图，最小单位为像素的图像。计算机中存储的图片**大多是位图**，如 `.jpg` 、 `.png` 、 `.bmp` 等。
- **矢量图**：由**顶点**位置和连接顶点的**线段**信息所组成的图像。`.svg` 就是其中一种矢量图格式。
- **颜色通道**：在 `RGBA模式` 下由 `R` 、 `G` 、 `B` 、 `A` 四个通道构成**光学三原色**和**不透明度**。在没有特别注释的情况下，我们仅讨论 `RGBA` 情况。
  - `R` ：Red，红色通道。
  - `G` ：Green，绿色通道。
  - `B` ：Blue，蓝色通道。
  - `A` ：Alpha，希腊首字母α，在计算机图形中表示不透明度通道。
- **数据类型**：在许多语言中，我们都需要在定义一个变量的时候同时定义它的数据类型。如 `int a;` 此时前面的 `int` 就是变量 `a` 的数据类型，这决定了计算机如何处理它们。
  - 这里列出了一些 **C 语言** 中常见的数据类型（不包含扩展）。
    - `int` ：整数。
    - `float` ：浮点数，计算机中可以表示小数的类型。
    - `char` ：单个字符。
- **数组**：许多数据的集合。通常在数据类型后加 `[N]` 来定义。`[]`的数量代表了数组的维度 例：`int[2]` 。
- **`代码块内容` 的阅读方法**:
  - `<尖括号>` ：由尖括号括起来的内容表示在这个区域内应该填写的内容。例：`<文件名>.jpg` ，其中 `<文件名>` 部分可以使用任意**符合尖括号内定义**的内容替换，例：`图片.jpg` 。
    - 在替换时应当将尖括号**一同替换**。
  - `[方括号]` ：由方括号括起来的内容通常是一个可填的**数字**，可能会使用字母代替，例：`vec[N]` 可以替换为 `vec3` 。
    - 在数组中，方括号不需要被一同替换，因为在数组之前的**数据类型**已经**完整**了，例：`float[a][b]` 可以替换为 `float[1][3]` 。
      - 我们约定**替换**方括号的字母使用**大写**，**不替换**方括号的字母使用**小写**。
  - `函数()` ：函数分为原型和调用两种情况。
    - 当函数内**参数**含有 `数据类型` 时，表示这是函数的**原型**。例：`floor(float num)` 。
    - 当函数内**参数**不含 `数据类型` 且含有 `<尖括号>` 时，表示我们**调用函数**时会在这个函数内填何种参数。例：`max(<numA>, <numB>)` 。
      - 有些函数有**多个**可以传入的**数据类型**，此时会在数据类型处使用 `<尖括号>` ，这种情况下仍然表示为函数的原型。例： `min(<int/float> numA, <int/float> numB)` 。
- **程序接口**：即API，程序接口提供了特定的算法，用以调用和修改该程序。
  - 具象化来说，这就好比给手机（游戏本体）扩展存储（想要达到的光影效果），需要 SD 卡（算法），并且手机需要有 SD 卡槽（接口）才能插入。

### 图形学（3D）

#### 图形基础

- **着色器**：Shader，光影中包含一个或数个着色器，在渲染中，每个**像素或顶点**会运算都会运算**所有**的**片段着色器** (Fragment Shader) 或**顶点着色器** (Vertex Shader) 代码。
  - 除此之外，还有**计算着色器** (Compute Shader)、**几何着色器** (Geometry Shader)，它们主要用以抽象计算和顶点生成。
- **光影**：我们约定，光影是指着色器、配置文件等打包而成的光影包。
- **渲染管线**：Rendering Pipeline，用以规定每个着色器处理画面的顺序。
- **三角形和法线**：Normal，除了 [前文](#计算机基础) 所述的体素，图形学中还有一种**对应矢量**的渲染方法。
  - 这种方法在渲染中更常用，其依赖于**三角形**或四边形（四边形在现代不常用）。
  - 计算机图形学约定，三角形的三个顶点以**逆时针**顺序所形成的平面就是这个形状的**正面**。
    - **垂直**于这个面**朝外**的方向就是这个三角形的**法线**。
- **平行光源**：也称无限光。距离玩家**无穷远**处的光源。
  - 太阳和月亮的光照可以近似看作平行光。
- **点光源**：从自身向所有方向发射光照的光源。
  - 在MC中不存在严格意义上的点光源，但 `OptiFine` 提供的**动态光源**和一些光影提供的**手持光源**可以被认为是点光源，`Iris` 还提供了一张额外的点阴影深度缓冲，让手持光源可以进行投影。

#### OpenGL 相关

- **OpenGL**：Open Graphics Library，**开源图形库**，JE所使用的**图形接口**。
  - **GLSL**：(Open)GL Shader Language，**OpenGL着色语言**，顾名思义，它是 `OpenGL` 的着色器所使用的语言，语法类似 C 。
  - 其它的图形接口还有如 `Vulkan` ，它的着色器语言也是 `GLSL` ； `DirectX` ，它的着色器语言是`HLSL`(High-Level Shader Language)。
- **GLSL 类型**：除了 [前文](#计算机基础) 所提到的类型外，GLSL还有新增了一些数据类型：
  - `bool` ：布尔值，可以是 `true` (`1`) 或 `false` (`0`)。
    - C 可以使用 `stdbool.h` 引入这个类型。
  - `vec[N]` ：浮点向量，N是 `[2, 4]` 的整数，表示该向量的维度。
    - `ivec[N]` 为整数向量，`bvec[N]` 为布尔值向量。
    - 例：`vec3` 。
  - `mat[N]` `mat[N]x[M]` ：浮点矩阵，N、M可以为 `[2, 4]` 的整数，表示该矩阵的大小。
    - `mat[N]` 表示 `N * N` 大小的矩阵，`mat[N]x[M]` 表示 `N * M` 大小的矩阵。
    - 例：`mat3` ，`mat2x4` 。
  - `sampler[N]D` ：样本，可以通过纹理采样函数来获取样本的信息，N可以为 `[1, 3]` ，表示该样本的维度。
    - `samplerCube` ：六面包围盒式的样本。
    - 例：`sampler2D` 。
- **GLSL 函数**：这里列出了一些常用的GLSL函数
  - `texture[N]D(sampler[N]D texture, vec[N] texcoord)` ：纹理采样函数
    1. 与函数维度相等的样本，通常是 `纹理` 。
    2. 与函数维度相等的向量，通常是 `纹理坐标` 。
    - N的范围与样本一致。

#### 贴图相关

- **灰度图**：仅由黑白灰组成的图片。
- **深度图**：Depth Map，表观为灰度图，每个像素的亮度说明了该处与过摄像机原点与朝向垂直的平面间的距离。
- **阴影贴图**：Shadow Map，其运作原理大致如下：
  1. 从**光源视角**绘制深度图并**投射到玩家视角**的整个场景作为距光源**最近距离**；
  - 这里所说的最近距离是指**该点与光源连线**上从光源出发，最近可以遇到的物体。
  2. 将其与玩家视角里每个像素**实际到光源的距离**做比较；
  3. 如果实际距离比最近距离更大，就是阴影。
  - 由于其算法特性，**阴影精度**与**阴影贴图大小**直接挂钩，同时会**大幅影响性能**。
- **法线贴图**：Normal Map，偏移物体表面的朝向，这样就可以影响每个纹理像素的光照强度，从而产生**额外的表面细节**。
  - 在计算机渲染中，我们通常使用法线信息与光源方向做**点乘** `dot(lightDir, Normal)` 来获得该像素的亮度，法线贴图在此时的作用就是偏移了前式中 `Normal` 这个量。所以实际上法线**并没有真正偏移**表面，而只是让该纹理像素的信息被改写。

#### 渲染技术相关

- **POM**：Parallax Occlusion Mapping，即视差遮蔽映射，简称**视差**。和法线相似，视差贴图通过偏移表面的**深度**来创造原本不存在的凹凸感。
  - 视差也**并没有真正扭曲**表面，只是让玩家从**不同角度**感受到纹理上某些像素被其他像素**遮挡**，从而创造凹凸的观感，这也是其名字中“映射”的含义。
- **PBR**：Physically-Based Rendering，即**基于物理的渲染**。
  - 它是一种着色和渲染的方法，更**准确**地表现**光线**如何与**材料性质**相互作用。
  - 它有一些传统着色中没有考虑到的部分，如**能量守恒**、**光电效应**等。
- **GI**：Global Illumination，即**全局光照**。是直接光照和间接光照的集合。
  - **直接光照**：由光源发射的光照。在**OptiFine光影**中，直接光照的光源**有且仅有**太阳和月亮。
    - 我们把**可以投射阴影贴图**的光源称为直接光源。
    - 更准确地说是太阳和月亮的**方向**。
    - Iris提供了一个新光影特性，让**手持光源**可以投射阴影贴图，因此手持光源也可以算作一个直接光源。
  - **间接光照**：直接光照经过反弹所照亮的不能被光源直接照射到的地方。
- **AO**：Ambient Occlusion，即**环境光遮蔽**。由于性能问题，很多游戏中通常使用了各种**欺诈和近似**来模拟全局光照。为了让**原本应该**或者**似乎应该**为暗处的地方暗下去而产生的技术。
- **SSS**：此简写包含以下两种概念
  - **次表面散射**：Sub-surface Scattering，模拟光线透过物体在其内部反射后射出的效果。
    - **散射**是漫反射、镜面反射、次表面散射的集合。
    - **折射**是散射的一个**特解**。
  - **屏幕空间阴影**：Screen-space Shadow，由于阴影贴图的**精度不足**，容易在物体与地面接触的边缘产生**锯齿和偏移**。屏幕空间阴影就是用于这些地方来**补足**阴影的效果，因此也称为**接触阴影** (Contact Shadow)。
  - **焦散**：经过**一次或数次**反射或折射后，经由漫反射表面反射最终到达观察者视角的光线，可以称之为焦散。--Tahnass
    - 通俗来说，焦散可以理解为曲面聚焦光线到漫反射表面上的效果。

##### 抗锯齿/升采样技术相关

- **DLSS**：由**英伟达**开发的一种升采样技术。通过降低分辨率并调用其**张量核心**(Tensor Core) 来猜测原始分辨率下该处像素的内容。
  - 在 `2.0` 以前，DLSS主要是靠已有画面内容来“猜”剩下的场景应该是何样
  - 自 `2.0` 开始，DLSS主要是根据场景动态变化和 **历史帧** 来判断剩下的场景是何样，其从单一空间上升到了 `时域` 。
  - **DLAA**：在原始分辨率下进行 DLSS 来平滑边缘的抗锯齿方法。
- **FSR**：由**AMD**开发的一种升采样技术。相比较 `DLSS` 来说更为常规，但效果要比其他传统升采样方法好。
- **XeSS**：由**英特尔**开发的一种升采样技术。在其他平台上和其本家含有特定核心的平台上所使用的算法有所区别，因而在其本家平台上能够获得更好的效果。