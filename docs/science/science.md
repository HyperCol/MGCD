
# 一些基础问题的问答区

### 1. 问：为什么 Minecraft 的优化如此糟糕？

答：有以下几个原因：
（1）  OpenGL 本身性能不差，但是选用的版本实在是太老旧了，而且着色器代码有具有极大的优化空间；
（2）  lwjgl 封装加上 Blaze3d 封装让代码效率打了折扣；
（3） 游戏渲染和主进程绑定在一起，也就意味着虽然 GPU 可能有空闲，但是由于主进程运算阻塞，导致 FPS 降低；
（4） 部分优化完全可以达到很好的效果，但是 Mojang 没能力做（例如 Sodium 或者 OptiFine 的优化）。
换言之：
从最底层看，御三家的 OpenGL 实现做的参差不齐；
往上看 OpenGL 本身，历史包袱重，而且 Mojang 用的是旧的方法，新的用了也不会；
看引擎： lwjgl 也就 MC 在用了，小厂自研，优化一般，再加上 Java 拖累；
看游戏架构：渲染与其他操作绑定同步，只要别的地方出岔子，渲染就卡；
再看看渲染代码：优化二字完全没体现，能用就行；
最后看总体：一代不如一代。

---

# 一、着色器

### 1. 关于 Java 版渲染模组

#### 1.1.1 主要渲染模组

- **OptiFine 是 Minecraft Java 版的一个 Mod**。其主要功能是加载光影包、性能优化与一些渲染改进功能，为玩家获得更好的视觉体验。你可能也听说过 ShadersMod 或光影核心，但请勿再使用它。 ShadersMod 已经过期已久，因为 OptiFine 已经将它集成进代码，并接管了它的后续更新工作，而且现在的 OptiFine 有许多原来的 ShadersMod 所没有的新功能。几乎所有的现代光影包都使用了这些新功能（这些光影包往往不再适用于 ShadersMod） 。
- **Iris 是 OptiFine 的衍生物**。其自身开源，与 Sodium（钠）模组共同开启时可以获得更好的游玩体验，同时为了 Fabric 模组加载器社区的模组兼容性而生。但其开发方向与 OptiFine 相反（适配现有的光影，不追求新效果新光影），而光影的开发是与 Optfine 或 Canvas 同向的。因此未来一段时间内，我们仍然需要 OptiFine 或 Canvas 作为光影的主体 API，不可能直接替换为 Iris 。  
- **Canvas 是基于 Fabric API 的一个渲染 Mod**。其主要功能是为模组开发者提供更好的渲染体验，但其也适用于开发光影包。Canvas 通过深度结合 Fabric API 的独立渲染API以及原版着色器，来达到比 Optifine 更多的可能性，以及 Iris 都无法匹敌的模组兼容性。但因其主要为模组开发而生，渲染管线极为复杂，学习成本非常高，导致目前基于 Canvas 开发光影的创作者极少。

#### 1.1.2 其他渲染模组

- **Blaze4D 是一个目前基于 Fabric API 的实验性项目，使用 Vulkan API** 。与 OptiFine 或 Iris 不同，它不是一个优化mod。虽然它进行了一定的性能改进，但远不及 OptiFine 与 Iris 。值得一提的是，Blaze4D 唯一真正制作的优化工作是 baked-entity-models 烘焙实体模型，并将其提交给了 Sodium 供所有人使用**。Blaze4D 未来将允许开发者将 DLSS 或 FSR 、硬件加速光线追踪引入到光影开发中**。当然，这些功能目前还是有生之年系列。
- **Focal 是由 Continuum 光影团队开发的一个基于 Vulkan API 的独立光影渲染模组，基于 Forge 或 Fabric**。目前其专用于 Continuum 2.1/RT 光影。主要目的是借助 Vulkan 编写光影来获得更高的效率、更多的渲染空间乃至**实现硬件光追**（有生之年系列×2）。同时还可以帮助光影作者实现光影加密和联网验证。
- **Vulkan Mod是一个基于 Fabric 的模组，将 MC 的渲染API换为 Vulkan ，借此提高帧数**。目前存在较多bug与兼容性问题，并不支持光影。

### 2. 关于基岩版光影与 RenderDragon

- **首先明确一个概念，光影属于着色器，并非基岩版光影没有动态的光线与鲜明的阴影就叫着色器而非光影**。基岩版光影基于Opengl ES中的GLSL或HLSL。由于接口限制，基岩版光影可以实现的效果非常少，但仍可以通过一系列稀奇古怪的方法实现物理渲染体系。
- **什么是接口（API）？**简单来说，你需要游戏有对应接口才能接入对应算法。具象化来说，这就好比你要给你的手机（游戏本体）扩展存储（想要达到的光影效果），你需要SD卡（算法），并且手机需要有SD卡槽（接口）你才能插入。至于我们为什么不能自己加接口，因为基岩版基于C++，反编译（可以获取到游戏源码，JE的模组API就靠这个）极其困难，几乎不可能实现，没有人成功过。
- **渲染龙引擎（RenderDragon）是微软官方在基岩版Minecraft实装的渲染引擎**。目前，渲染龙已覆盖到了Windows、Xbox、Android等多平台的基岩版Minecraft上，替代了原本第三方着色器的光照方案。其中，Windows版本能够通过调用RTX或RX6000以上系列显卡的光线追踪加速单元以提升光线追踪的效率，而其他平台上的引擎能够起到优化作用。~~意外的是，渲染龙一开始是给Java版Minecraft设计的，而且渲染龙目前只会起到负优化作用。~~
- **渲染龙的引入并不一定是正向的**，渲染龙目前在多个平台上表现为负优化，例如操作、渲染延迟等，且帧数并不一定有提升。渲染龙的算法加密破坏了很多东西，除了光影还有例如区块显示、红石能量显示、亮度显示、夜视、透视、小地图等，这些都是由第三方光影实现的，这会给红石玩家等带来不少困扰。而且官方光追虽然在光追方面技术力高，但其在细节调校方面做的非常差劲，整个世界都跟涂了油一样，可能还不如第三方光影，会对主打真实风格的地图与材质作者造成很大困扰，并且手机版也无光追可用，导致直接光影灭绝。这也是我们目前为什么反对渲染龙的原因，在此希望大家可以**理性看待渲染龙，而非一味吹捧**。
- **2022下半年更新：**渲染龙及RTX已被破解，但由于破解团队收到微软的DMCA致函（你可以理解为类似律师函，只是警告），以及新的光影编写方案过于困难，目前BE版光影仍处于半死不活的状态。

#### 关于网易的BE后处理着色器

（待编写）

### 3. 光线追踪、路径追踪与 RTX

#### 1.3.1 前言：传统渲染的局限性

受限于计算机性能，早期游戏所渲染的画面都是二维的。所以我们平常看到的传统游戏的光照与反射等效果，都是在**屏幕内计算**的，只能看到屏幕内物体的反射与光线计算。但这样效果就太差了，于是我们可以利用**光栅化渲染**去**预烘焙**游戏世界，使得光线可以与预先写入程序的物体交互并返回到屏幕内，**简单说就是游戏里各种光线反射都是程序员预先写好的，比如房间里有面镜子，程序员就要告诉它这个房间里有什么内容（预先写好的），然后镜子再计算反射**。但这种方式**局限性太大**，预烘焙**制作成本极高**（一个完美的小场景远景预烘焙就需要数十小时），而且**不适用于大多动态场景**（例如 Minecraft ，受限于自由创造的游戏玩法，基本无法进行预烘焙）。于是**基于三维空间实时渲染**的光线追踪便进入了各大厂商的视野。然而，由于硬件性能不足，早期光追仅用于**离线渲染**（电影、CG等行业），直到 RTX 显卡为我们带来**光线追踪加速核心**后光线追踪才进入大众视野，应用到游戏中的**实时渲染**（ Minecraft 可以使用特殊手段来进行加速和降噪，故不算，下文会提到）。

#### 1.3.2 光线追踪的概念

      **光线追踪在1968年由 Arthur Appel 首次提出**。在上一段中我们讲到，传统渲染是基于二维的，尽管可以预烘焙三维世界，但局限和破绽仍然很大。因此，光线追踪的目的即为直接运算得出三维图像。
        目前光线追踪算法均基于**构建体素空间**，即将游戏内的内容导入三维空间进行渲染，可分为切割立方体（基本是Minecraft专用）与切割三角面两种方式。
        目前光线追踪的方式可分为两大类，**正向光线追踪**与**逆向光线追踪**。
**正向光线追踪**：在渲染时，场景中的光源会发射光线，光线在行进过程中与物体发生反射、折射等交互，最终撞击到摄像机（玩家视角）上，得出结果。
但这种方法过于消耗算力，而且物理学告诉我们**光路可逆，**于是游戏界光追采用了**逆向光线追踪**，即将上述过程反向，**从玩家视角出发发射光源**，并计算在这过程中的光线交互，最终撞击到光源或光线逸出场景后将结果返回给摄像机（玩家视角），我们将这个过程称为**求交**运算。

#### 1.3.3 何为路径追踪

路径追踪算法是基于**蒙特卡洛采样算法**的光线渲染方法，**其核心思想与逆向光线追踪一致**。
**Kajiya 于1986年提出了路径追踪算法的理念**，开创了基于蒙特卡洛采样算法的全局光照这一领域。路径追踪的基本思想是经过逆向光线追踪的一系列计算，撞击到光源后，用蒙特卡洛的方法，计算其贡献，作为像素的颜色值。
**简单来说，路径追踪 = 光线追踪+ 蒙特卡洛采样算法**。

#### 1.3.4 光线追踪在 Minecraft 中的应用

在**Minecraft：Java Edition** 中，我们**使用路径追踪**算法。在上文中提到，Minecraft 由于其动态世界，故无法大范围使用预烘焙光栅。因此在 Minecraft 中是否存在光追，对画面的影响很大。具体方法为将 Optifine 自带的 **ShadowMap**（原本用于绘制阴影）转化到**体素空间**（即三维空间）内来计算路径追踪。
而不依靠 RT CORE ，JAVA 版光追光影又是如何做到高帧的实时运算呢？在这里，我们主要利用**辐照度缓存**来优化光追运算量（实际 Bedrock 版的 RTX 光追也有用到这个技术），利用 **SVGF过滤** 进行降噪处理（ JE 和 BE 的辐照度缓存技术在 [https://www.bilibili.com/video/BV1X54y1v7za?zw](https://www.bilibili.com/video/BV1X54y1v7za?zw) 这个视频的 5:30、8:38 分别有讲到）。
下面展示一些光线追踪在MC中与传统光影不同的效果：

- 完全物理的光线追踪阴影和衔接阴影、光线追踪全局光照![2022-02-22_21.35.16.png](https://cdn.nlark.com/yuque/0/2022/png/25462013/1645539665399-a2d879b8-bccc-45fd-b735-019177c026f9.png#averageHue=%23008d00&clientId=u44f12535-e88c-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=ui&id=u9bbd05d8&margin=%5Bobject%20Object%5D&name=2022-02-22_21.35.16.png&originHeight=1080&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=true&size=3700045&status=error&style=shadow&taskId=u01023e91-b492-4d3f-82a4-7455d8da296&title=Octray "Octray")![2022-02-22_21.37.22.png](https://cdn.nlark.com/yuque/0/2022/png/25462013/1645539678668-5e19f545-61ac-4e68-ae09-aa1de854747b.png#averageHue=%230c5991&clientId=u44f12535-e88c-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=ui&id=u47550d63&margin=%5Bobject%20Object%5D&name=2022-02-22_21.37.22.png&originHeight=1080&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=true&size=1804879&status=error&style=shadow&taskId=uf5a3c95c-8947-4cd8-b69f-0ecbd137f46&title=%E4%BC%A0%E7%BB%9F%E5%85%89%E5%BD%B1 "传统光影")
- 光源被阻挡形成的软阴影、正确的光照范围、光线在不同介质中的色散、不同光源不同颜色发光、光线混色![2022-02-22_21.50.10.png](https://cdn.nlark.com/yuque/0/2022/png/25462013/1645539852349-1208cb8d-41f5-4aae-a715-abcea00e79a1.png#averageHue=%231d152b&clientId=u44f12535-e88c-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=ui&id=u9adb4a5a&margin=%5Bobject%20Object%5D&name=2022-02-22_21.50.10.png&originHeight=1080&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=true&size=3473181&status=error&style=shadow&taskId=u841373c3-75e2-43c2-88c4-d7262c49efd&title=SEUS%20PTGI%20GFME "SEUS PTGI GFME")![2022-02-22_21.51.41.png](https://cdn.nlark.com/yuque/0/2022/png/25462013/1645539903973-1e347288-6ca8-4ffa-b388-c13bd8b88f6e.png#averageHue=%23ab9272&clientId=u44f12535-e88c-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=ui&id=u4fad21dc&margin=%5Bobject%20Object%5D&name=2022-02-22_21.51.41.png&originHeight=1080&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=true&size=2201183&status=error&style=none&taskId=u118bed89-f210-42f1-b2f6-26e2ade0e49&title=%E4%BC%A0%E7%BB%9F%E5%85%89%E5%BD%B1 "传统光影")
- 可以反射/折射视野外的物体、多次反射/折射、真实的粗糙与金属质感![2022-10-26_22.39.04.png](https://cdn.nlark.com/yuque/0/2022/png/25462013/1666795467177-d2d83a0b-3a9f-45e8-946f-8326bf34f373.png#averageHue=%234c2d0e&clientId=u2833c759-124f-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=u7725a101&margin=%5Bobject%20Object%5D&name=2022-10-26_22.39.04.png&originHeight=1080&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=true&size=4509001&status=done&style=shadow&taskId=u6d58c369-8175-4664-8228-065a7ec766b&title=Kappa%20PT "Kappa PT")![2022-10-26_22.40.13.png](https://cdn.nlark.com/yuque/0/2022/png/25462013/1666795483594-8fa82b7e-cb0d-4651-955f-8cc22274ff8f.png#averageHue=%23472b0b&clientId=u2833c759-124f-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=u65e4cc16&margin=%5Bobject%20Object%5D&name=2022-10-26_22.40.13.png&originHeight=1080&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=true&size=5025902&status=done&style=shadow&taskId=u4ef62f2a-2843-4048-83db-48a7f898b52&title=%E4%BC%A0%E7%BB%9F%E5%85%89%E5%BD%B1 "传统光影")

#### 1.3.5 RTX 与光线追踪的联系、“伪光追”

        本段主要谈论 RTX 光追原理与伪光追。在阅读本段之前我们建议你先查看以下内容进行简单了解。
[MGC 歧义及观点纠正](https://mgchelp.yuque.com/docs/share/29cd3ba2-e040-4ad3-874c-2edbb7103ec3?view=doc_embed&inner=V8q0R)
RTX / RX 显卡内有一个特殊的光线追踪运算部分，叫做 **RT CORE** ，中文名称“**光线追踪加速核心**”。在光线追踪的概念里我们提到过**求交**运算，**而 RT CORE 的主要作用即为加速求交运算**。所以说**RTX 只是用于加速光线追踪运算用**，并不直接计算全部光追过程。

- 下面的第一二张图摘自英伟达20系显卡发布会

![QQ截图20221025102723.png](https://cdn.nlark.com/yuque/0/2022/png/25462013/1666676677936-0777c11a-fdcd-4904-9963-5a7a1137f92e.png#averageHue=%230a0a02&clientId=u2fa0191d-1146-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=ui&id=u9023d872&margin=%5Bobject%20Object%5D&name=QQ%E6%88%AA%E5%9B%BE20221025102723.png&originHeight=1077&originWidth=2062&originalType=binary&ratio=1&rotation=0&showTitle=true&size=388825&status=error&style=shadow&taskId=ub74b5758-fa74-4bdb-9bfc-70861f7c83c&title=%E5%8F%AF%E8%A7%81%EF%BC%8C%E5%8D%B3%E4%BD%BF%E6%98%AFGTX%E7%B3%BB%E5%88%97%E4%B9%9F%E6%9C%89%E7%9D%80%E5%85%89%E8%BF%BD%E8%AE%A1%E7%AE%97%E8%83%BD%E5%8A%9B "可见，即使是GTX系列也有着光追计算能力")
![QQ截图20221025103226.png](https://cdn.nlark.com/yuque/0/2022/png/25462013/1666676711250-69e861fb-933b-49a2-a96f-d040d6494390.png#averageHue=%2318150b&clientId=u2fa0191d-1146-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=ui&id=ud58e675e&margin=%5Bobject%20Object%5D&name=QQ%E6%88%AA%E5%9B%BE20221025103226.png&originHeight=1114&originWidth=1827&originalType=binary&ratio=1&rotation=0&showTitle=true&size=1209636&status=error&style=shadow&taskId=u190f94ac-0cf6-4885-b0e9-fe7c56c5b0f&title=%E5%9B%BE%E4%B8%AD%E6%9C%80%E4%B8%8A%E9%9D%A2%E7%9A%84%E4%B8%80%E5%8F%A5%E8%AF%9D%E2%80%9CTuring%20%E6%9E%B6%E6%9E%84%E7%9B%B8%E6%AF%94%20Volta%20%E6%9E%B6%E6%9E%84%E7%9A%84%E5%85%89%E7%BA%BF%E8%BF%BD%E8%B8%AA%E6%80%A7%E8%83%BD%E6%8F%90%E5%8D%87%E4%BA%86%E5%85%AD%E5%80%8D%E2%80%9D "图中最上面的一句话“Turing 架构相比 Volta 架构的光线追踪性能提升了六倍”")
![QQ截图20221025104558.png](https://cdn.nlark.com/yuque/0/2022/png/25462013/1666676922096-8f09118f-3f01-4500-861b-b01961dd3d36.png#averageHue=%23fbfbfa&clientId=u2fa0191d-1146-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=ui&id=u2b089075&margin=%5Bobject%20Object%5D&name=QQ%E6%88%AA%E5%9B%BE20221025104558.png&originHeight=153&originWidth=1500&originalType=binary&ratio=1&rotation=0&showTitle=true&size=12546&status=error&style=shadow&taskId=u308b35db-d483-4d3c-832c-9280a749c1d&title=TITAN%20V%20%E6%98%AF%E5%94%AF%E4%B8%80%E4%BD%BF%E7%94%A8%20Volta%20%E6%9E%B6%E6%9E%84%E7%9A%84%E6%98%BE%E5%8D%A1%EF%BC%8C%E5%85%B6%E5%B9%B6%E6%B2%A1%E6%9C%89%E6%90%AD%E8%BD%BD%E5%85%89%E8%BF%BD%E6%A0%B8%E5%BF%83 "TITAN V 是唯一使用 Volta 架构的显卡，其并没有搭载光追核心")
基于第一张图，没有什么好说的，事实就是事实。基于第二张图和第三张图，如果你认为不使用光追核心运算的就是伪光追，那么请问基于 Turing 架构的20系显卡，**光追性能六倍提升于没有光追核心**的 Volta 架构显卡 TITAN V ，提升是从哪来的呢？伪光追性能乘六，还是零乘六不等于零？这显然是说不通的。
此外，我们在上文提到过，计算机图形学的光线追踪早在**上世纪**就已经由**数学科学组织提出**了，况且，在计算机领域最早使用的光线追踪属于**离线渲染**（例如C4D、Blender和电影渲染一类），直到近年硬件飞速发展，英伟达才首次将其推广到**在线渲染**领域。但即便如此，**英伟达并不是第一个在游戏界中应用光追**的厂商。例如 **SEUS 光影作者**早在**2017年**就已经开始**路径追踪测试，**并于**18年年初**在其 Patreon 上**发布第一个开发进度贴**，而**RTX 20系显卡首次发布在2018下半年**。![QQ截图20220220224158.png](https://cdn.nlark.com/yuque/0/2022/png/25462013/1645368279299-314daf8e-64fa-4e42-a8ad-c073d1a63ac7.png#averageHue=%23d7d7d6&clientId=u4f41a58e-c5b8-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=ui&height=480&id=u184f9e77&margin=%5Bobject%20Object%5D&name=QQ%E6%88%AA%E5%9B%BE20220220224158.png&originHeight=572&originWidth=1013&originalType=binary&ratio=1&rotation=0&showTitle=true&size=293108&status=error&style=shadow&taskId=u4afd83ac-2d3e-40cb-9fde-a6d1bd90971&title=%E6%8F%B4%E5%BC%95%E8%87%AA%E8%A7%86%E9%A2%91%E3%80%8ABSL%E5%88%B0%E5%BA%95%E6%98%AF%E4%B8%8D%E6%98%AF%E5%85%89%E8%BF%BD%EF%BC%9F%E5%85%89%E8%BF%BD%E4%B8%BAmc%E5%B8%A6%E6%9D%A5%E4%BA%86%E4%BB%80%E4%B9%88%EF%BC%9F%E3%80%8B&width=850 "援引自视频《BSL到底是不是光追？光追为mc带来了什么？》")
而且，**光线追踪技术只是一系列算法，不取决于硬件是否支持**，**CPU（不依靠GPU） 也可以运行 PC 光追**。在极客湾的一期视频中，演示了手机上运行 Windows 11 on ARM 系统，并在视频末尾（约 23:40 左右开始演示）展示了用骁龙845运行 PC 端实时RTX光追 demo ，视频如下：
[点击查看【bilibili】](https://player.bilibili.com/player.html?bvid=BV1MU4y137Yi)
**所以说光线追踪并不是英伟达或 AMD 的专属名词或专利技术**。
至于 DLSS ，则是通过训练人工智能，将游戏分辨率降低后再智能放大回原分辨率，与 SEUS PTGI 的 HRR 技术相似（只不过 HRR 并没有用到人工智能的一系列功能，而是单纯采用时间性抗锯齿算法——TAA，进行多帧超采样放大），而且DLSS是依靠RTX显卡中的 **Tensor Core** 来运算，与 RT CORE 并无联系，**所以DLSS与光追技术并无直接联系**。
关于 Minecraft for Windows10 官方的 RTX 光追技术分析，详见这篇文章（纯技术性文章）：  
        关于 JAVA 版光追，详见这个视频：
[点击查看【bilibili】](https://player.bilibili.com/player.html?bvid=BV1X54y1v7za)
 至于光栅化，引用内容内已经说过，**现在绝大多数游戏的光追都是 光栅化+光追 混合**，并无混合光追就是伪光追的说法。
_**顺带一提，RTX 光追在部分 GTX 显卡上也可以开启，只是 Mojang 刻意限制罢了，一般的3A大作都有支持，甚至 GTX 1660 能在《古墓丽影：暗影》的 1080p 最高档光线追踪下取得复杂场景平均 30fps 的成绩**。_

### 4. 全局光照

#### 1.4.1 介绍

一般来说，**全局光照=直接光照+间接光照**。全局光照，表现了直接照明和间接照明的综合效果。它有多种实现方法，例如**辐射度、光线追踪、环境光遮蔽（ambient occlusion）、光子贴图、Light Probe**等。当光从光源被发射出来后，碰到障碍物就反射和折射，经过无数次的反射和折射，物体表面和角落都会有光感，像真实的自然光。
全局光照计算量很大。渲染带有全局光照效果的图片，耗时会较长（取决于场景复杂度）。渲染静态图片可以接受这较长的耗时，但渲染视频或者应用到游戏时，要求的渲染时间就要减少很多，于是便有了**反向追踪算法（即蒙特卡洛算法）**。此算法以摄像机视角为基准，仅计算可见的地方，这样就可以在不牺牲质量的情况下提高渲染效率。

#### 1.4.2 Reflective Shadow Maps

Reflective Shadow Maps，简称RSM。它是一种实现全局光照的方式，原理为：将直接光照能够照亮的像素点作为次级光源，让它们照亮以它们为中心的像素。
参考资料：

#### 1.4.3 Light Propagation Volumes

Light Propagation Volumes（光照传播体积），是CryEngine3 提出的一种实时的、无需任何预计算的全局光照技术，其在RSM和SH的基础上创造性地提出了使用体素来存储、传播间接光照的方法。
LPV首先将整个场景划分为一个个的小格子（体素），将整个场景离散开来，直接计算每个格子内的光照是不现实的，解决方法是让光照像墨滴一样在这些格子中弥散、传播，从而计算最终到达着色点的间接光照。
参考资料：

#### 1.4.4 Voxel Global Illumination

类似于LPV，Voxel Global Illumination（体素全局光照）也是一个两趟的、实时的全局光照算法，它以体积渲染作为算法核心，将场景通过体素离散化为树状结构并存储光照计算相关信息，并在渲染时通过体素圆锥追踪来计算光照，相比LPV拥有更好的效果。
参考资料：

---

# 二、纹理包

### 1. 光影与纹理联系的纽带——PBR材质

PBR（基于物理的渲染，Physics Based Render）渲染体系由光影提供渲染，纹理包提供纹理信息来表现纹理表面的物理性质（高度、光滑、金属、孔隙、环境光遮蔽、次表面散射、发光等特性）。分为法线与视差、PBR两部分，均为单独的贴图，通过不同的颜色来决定性质渲染。

#### 2.1.1 法线与视差

**法线贴图名称一般为 xxx_n.png**。

- **法线贴图（Normal Mapping）**在原纹理的凹凸表面的每个点上均作法线，通过 RGB 颜色通道来标记法线的方向，可以在纹理表面产生高细节程度的精确光照方向和反射效果；
- **视差贴图（Parallax Mapping）**主要表现物体表面大幅度的高度变化，来使纹理看着是立体的，但其实际是通过人眼的视觉差达成的，因此得名视差。所以**视差并不是真正的3D，模型才是**。在Minecraft中，视差绘制为在法线贴图上的Alpha通道，越透明代表高度越低。

#### 2.1.2 PBR

**PBR贴图名称一般为 xxx_s.png**。
PBR贴图可以通过绘制不同的颜色来表现纹理的物理特性，同时可以与法线和视差互相交互，分出不同的层次细节，来达到更惊艳的效果。
PBR有着不同的标准，例如 OldPBR 、 LabPBR 、四合一等。目前 JE 社区最适用的是 **LabPBR** 。其中 R 通道代表光滑度； G 通道代表金属度，一些特殊数值代表指定金属； B 通道代表环境光遮蔽/孔隙度（不常用）、次表面散射， A 通道代表自发光，[0,254]范围内数值越大发光越强。通过混合这些颜色通道可以表现出多彩多样的方块物理性质。 BE 最适用的是**四合一**，主要为将主贴图、法线贴图、PBR贴图，再附上单独的检测贴图拼合到一张图内，得以实现光影读取。
关于LabPBR：

**四合一标准请见BE光影：YSS 压缩包内部的开发文档**。

### 2. 模型材质

待补充

---

# 三、建模与渲染

### 建模软件列表

Minecraft 建模相关的软件较多，目前仍然可用主要有：

- Blockbench（[官网链接](https://www.blockbench.net/)）
- Blockbuster（[Minecraft百科介绍页](https://www.mcmod.cn/class/2344.html)）
- Blender（[官网链接](https://www.blender.org/)）
- C4D（[官网链接](https://www.maxon.net/zh/cinema-4d)）
- Cubik Studio（[官网链接](https://cubik.studio/)）
- Trimble SketchUp（[官网链接](https://www.sketchup.com/zh-CN/plans-and-pricing/sketchup-free)）
- Minecraft Model Maker（[Curseforge介绍页](https://www.curseforge.com/minecraft/mc-mods/model-creator-app?__cf_chl_captcha_tk__=bK64ZVC_xGHiWLhEVD0mOymH35BIUiELfJzSQTFbpks-1640959193-0-gaNycGzNDiU)）

**_参考资料_**
[Minecraft Wiki 辅助程序与编辑器/3D建模工具](https://minecraft.fandom.com/zh/wiki/%E8%BE%85%E5%8A%A9%E7%A8%8B%E5%BA%8F%E4%B8%8E%E7%BC%96%E8%BE%91%E5%99%A8/3D%E5%BB%BA%E6%A8%A1%E5%B7%A5%E5%85%B7)

### 国内主流 Minecraft 建模软件

- Blockbench**（仅适用于 Minecraft 建模）**
- Blockbuster**（仅适用于 Minecraft 建模的 MOD）**
- Blender（通用的生产力工具）
- C4D（通用的生产力工具）

#### Blockbench

Blockbench 是一款**全平台支持**的模型编辑软件，支持编辑方块、物品模型，以及基岩版支持的实体模型。
它是免费、开源的，无需担心病毒等问题，但请确认你是从正确的渠道下载的文件！

MinecraftBBS介绍页：[https://www.Minecraftbbs.net/thread-809404-1-1.html](https://www.mcbbs.net/thread-809404-1-1.html)
官网：[https://www.blockbench.net/](https://www.blockbench.net/)**（可能无法正常连接）**
Web使用官网：[https://web.blockbench.net/](https://web.blockbench.net/)
[

](<https://www.mcbbs.net/thread-809404-1-1.html>)

#### Blockbuster

**Blockbuster 其实是模组，所以请确保已经按照相应版本的 Forge！**
Blockbuster 不仅支持游戏内拍摄影片，也支持游戏内建模、调整模型、创建自定义粒子效果等功能。
我们推荐使用它，不仅因为其强大功能，更在于 Blockbuster 在中国有活跃的社区成员，能够为创作者提供灵感交流、技术支持的平台。

文件下载、中国社区文档参见：[MinecraftHorse's Mods - FAQ（常见问题解答）](https://www.yuque.com/mhmzh/faq)

#### Blender

Blender 是一款**全平台通用**的可以用于 3D 建模的软件、广泛应用于各领域的生产力工具。
重要的是，它是**免费**的！前往官网下载即可。
互联网上关于 Blender 的使用教程颇多，善用搜索，每个人都可以自学成才。

**官网：**[https://www.blender.org/](https://www.blender.org/)

#### C4D

C4D 与 Blender 一样，也是一款**全平台**、广应用的生产力工具。
可惜的是，它是**付费**的……我们在此并**不提供**相关的盗版资源**。尊重知识产权**，营造创新氛围，你我义不容辞。
互联网上的 C4D 使用教程也十分多。

官网：[https://www.maxon.net/zh/cinema-4d](https://www.maxon.net/zh/cinema-4d)

---

# 四、影视与动画

### 动画软件列表

- Blockbuster
- Mine-imator
- Blender
- C4D
- Autodesk Maya
- Autodesk 3DS Max
- Houdini
- ……

### 国内主流 Minecraft 动画软件

- Blockbuster
- Mine-imator
- Blender
- C4D

#### Blockbuster

参见：[https://www.yuque.com/mhmzh/faq](https://www.yuque.com/mhmzh/faq)
