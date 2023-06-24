import{_ as l,r as i,o as n,c as t,a as o,b as r,d as c,e}from"./app-6ad11edc.js";const s={},g=e('<h1 id="光线追踪误区" tabindex="-1"><a class="header-anchor" href="#光线追踪误区" aria-hidden="true">#</a> 光线追踪误区</h1><h2 id="误区介绍" tabindex="-1"><a class="header-anchor" href="#误区介绍" aria-hidden="true">#</a> 误区介绍</h2><ul><li>此部分用于提升大众对光线追踪该技术的理解，同时记录了多种反例并逐一纠正。</li><li>观看此部分内容，可以避免被 <code>光线追踪</code> 这个 <strong>噱头</strong> <code>迷惑认知</code>、<code>蒙蔽双眼</code>， 在充斥着错误说法的角落里仍能 <code>保持清醒</code>。</li></ul><h2 id="概念普及" tabindex="-1"><a class="header-anchor" href="#概念普及" aria-hidden="true">#</a> 概念普及</h2><h3 id="光线追踪" tabindex="-1"><a class="header-anchor" href="#光线追踪" aria-hidden="true">#</a> 光线追踪</h3><blockquote><ul><li>从微软在 <code>DirectX 10 渲染引擎</code> 中为游戏添加 <code>光线追踪</code> 的 <code>新接口</code> 开始，光线追踪技术 <strong>正式</strong> 进入了游戏。</li><li>光线追踪是一种 <code>来自几何光学的通用技术</code>（它通过 <strong>追踪</strong> 与 <code>光学表面发生交互作用的光线</code>，得到 <strong>光线经过路径</strong> 的 <code>模型</code>）。</li><li>该技术可 <strong>提升</strong> 游戏画面的 <code>真实性</code>，但同时也 <strong>耗费</strong> 更多的 <code>性能</code> 用于光线的 <code>模拟计算</code>。</li><li>需要强调的是，这种技术 <strong>并不是</strong> 在 <code>DirectX 10 时代</code> 才诞生的，它被提出、被研究已经 <strong>超过</strong> <code>30 年</code>了。</li><li>近些年来也常被应用于 <code>电影 3D 特效</code> 中。不过应用于电脑游戏中，还是从 <code>DirectX 10</code> 开始的。</li><li>—— 百度百科 · 《光线追踪》</li></ul></blockquote><hr>',7),a=e("<li>在三维计算机图形学中，光线追踪是一种<code>对光线传输进行建模</code>的技术，用于生成数字图像的各种渲染算法。</li><li>在计算成本和视觉保真度方面，基于光线追踪的渲染技术，如<code>光线投射</code>、<code>递归光线追踪</code>、<code>分布光线追踪</code>、<code>光子映射</code>和<code>路径追踪</code>，通常比扫描线渲染方法更慢，保真度更高。 因此，<strong>光线追踪首先被部署在可以花费相对较长的时间进行渲染的应用中</strong>，如静态渲染的计算机图像，以及电影和电视视觉效果（VFX），但不太适合实时应用，如视频游戏，因为在渲染每一帧时，<strong>速度</strong>是至关重要的。</li><li>然而，自2018年以来，实时光线追踪的硬件加速已成为新的商业显卡的标准，图形API也紧随其后，允许开发人员在游戏和其他实时应用中<code>使用混合光线追踪</code>和<code>基于光栅化的渲染</code>，对帧渲染时间的冲击较小。</li><li>光线追踪能够模拟各种光学效果，如<strong>反射、折射、软阴影、散射、景深、运动模糊、黄昏、环境遮蔽和色散现象（如色差）</strong>。它还可以用来追踪声波的路径，其方式与光波类似，通过渲染逼真的混响和回声，使其成为视频游戏中更具沉浸感的声音设计的可行选择。事实上，<strong>任何具有近似线性运动的物理波或粒子现象都可以用光线追踪来模拟。</strong></li><li>基于光线追踪的渲染技术，涉及到在一个领域内<code>对光线进行采样</code>，会产生<strong>图像噪音伪影</strong>，可以通过<code>追踪大量的光线</code>或<code>使用去噪技术</code>来解决。</li>",5),p={href:"https://en.wikipedia.org/wiki/Ray_tracing_(graphics)",target:"_blank",rel:"noopener noreferrer"},h=e('<h3 id="混合光线追踪" tabindex="-1"><a class="header-anchor" href="#混合光线追踪" aria-hidden="true">#</a> 混合光线追踪</h3><ul><li><p>也叫 <strong>部分光线追踪</strong>。</p><ul><li><p>现阶段的 <code>实时光线追踪技术</code> 处于 <strong>初步开发阶段</strong>，</p></li><li><p>而 <code>传统的屏幕空间技术</code> 已达到 <strong>炉火纯青</strong> 的境界。</p></li></ul></li><li><p>实际上，<strong>大部分</strong> 支持实时光线追踪的 <code>3A 游戏</code> 都 <strong>未采用</strong> <code>完全光线追踪</code> 的渲染方案，</p></li><li><p>而是 <strong>采用</strong> <code>传统 + 光追互补</code> 的 <strong>思路</strong> 构成画面：</p><ul><li><p>这样既能有 <strong>光追的效果</strong>，</p></li><li><p>也不至于因为 <strong>效率太低</strong> 导致 <code>帧数</code> 过于不合理。</p></li></ul></li><li><p><code>PTGI</code> 的思路也与此类似：</p><ul><li><p>将 <strong>整个着色器</strong> 的 <strong>部分渲染方案</strong> 用 <code>光线追踪技术</code> 替代 <code>传统反射</code>，</p></li><li><p>做到 <strong>兼顾足够流畅</strong> 的 <code>帧率</code> 与 <code>画质</code> 的 <strong>提升</strong>。</p></li></ul></li></ul><h3 id="完全光线追踪" tabindex="-1"><a class="header-anchor" href="#完全光线追踪" aria-hidden="true">#</a> 完全光线追踪</h3><ul><li><p>与 <code>混合光线追踪技术</code> 不同，<code>完全光线追踪技术</code> 只使用 <code>Compute Shader （计算着色器）</code> 渲染画面，<strong>抛弃</strong> <code>传统的光栅化</code> 流程。</p></li><li><p>目前该技术的 <strong>主要意义</strong> 在于 开创新的 <code>图形开发思路</code>。</p></li></ul><h3 id="路径追踪" tabindex="-1"><a class="header-anchor" href="#路径追踪" aria-hidden="true">#</a> 路径追踪</h3><ul><li>路径追踪算法是基于<strong>蒙特卡洛采样算法</strong>的光线渲染方法，<strong>其核心思想与逆向光线追踪一致</strong>。</li><li><strong><code>Kajiya</code> 于 <code>1986</code> 年提出了路径追踪算法的理念</strong>，开创了基于蒙特卡洛采样算法的全局光照这一领域。路径追踪的基本思想是经过逆向光线追踪的一系列计算，撞击到光源后，用蒙特卡洛的方法，计算其<code>贡献</code>，作为像素的<code>颜色值</code>。</li><li><strong>简单来说，<code>路径追踪</code> = <code>光线追踪</code>+ <code>蒙特卡洛采样算法</code></strong>。</li></ul><h3 id="屏幕空间路径跟踪" tabindex="-1"><a class="header-anchor" href="#屏幕空间路径跟踪" aria-hidden="true">#</a> 屏幕空间路径跟踪</h3><ul><li><p>屏幕空间路径跟踪即 <code>SSPT</code> ，是在路径跟踪技术的基础上<strong>加以限制</strong>，使其只计算屏幕中的三角面以达到减轻性能负载的目的，是一种<strong>廉价的</strong>实时光线追踪解决方案。</p></li><li><p>SSPT 表现出来的效果酷似<code>屏幕空间反射（SSR）</code>。因为两者在算法与最终效果上都<strong>有许多相似之处</strong>。</p></li></ul><h2 id="误区与解释" tabindex="-1"><a class="header-anchor" href="#误区与解释" aria-hidden="true">#</a> 误区与解释</h2><h3 id="windows10-rtx-光影" tabindex="-1"><a class="header-anchor" href="#windows10-rtx-光影" aria-hidden="true">#</a> Windows10 RTX 光影</h3><ul><li><p>有一部分玩家会对 <code>Microsoft</code> 与 <code>NVIDIA</code> 合作出品的 <code>Windows 10 Bedrock 版 RTX 光影</code> 持 <strong>过于乐观</strong> 的态度，</p></li><li><p>而对民间开发者编写的 <code>Java Edition 光追光影</code> 缺乏关注甚至认为它们 <strong>并非</strong> <code>真光追</code> 而<strong>抱有抵触</strong>态度，我们也对此观点进行了纠正。</p></li><li><p>对于 <code>真伪光追</code> 说法，我们在下方 <a href="#%E4%BC%AA%E5%85%89%E8%BF%BD">伪光追</a> 中有说明。对于 <code>RTX 光影</code>，我们有以下研究结果：</p><ul><li><p>经部分破译微软宣传的 <code>渲染龙（ Render Dragon ）引擎</code>，已知现在的 <code>Windows 10 版 RTX 光影</code> 调用了 <code>37</code> 个 <code>着色器</code>，均属于 <code>Compute Shader （计算着色器）</code>，</p></li><li><p>这也意味着 <code>Windows 10 版 RTX 光影</code> <strong>完全使用</strong> 了 <code>RTX 显卡</code> 的 <code>光追核心</code> 计算渲染 <strong>所有</strong> 的画面效果，没有采用 <strong>任何光栅化</strong> 流程。</p></li><li><p>从目前的结果分析来看，我们认为 <code>Win10 版 RTX 光影</code> 使用的 <code>基础技术</code> <strong>优于</strong> <code>软件光追光影（采用完全光线追踪渲染方案）</code>，</p></li><li><p>但由于该光影编写组的 <strong>水平问题</strong>，代码中含有 <strong>非常多</strong> 的 <strong>不合理</strong> 的甚至 <strong>自相矛盾</strong> 的部分。</p></li><li><p>这也导致部分渲染 <strong>效果不合理</strong>，整体呈现的 <strong>画风诡异</strong>，也不被 <strong>大部分</strong> 光影爱好者认同。</p></li><li><p>当然，我们并非在此倡导 <code>捧一踩一</code> 的饭圈文化，而是 <strong>阐述</strong> 我们 <strong>研究的结果</strong>。</p></li></ul></li><li><p>光影的喜好 <strong>完全由个人决定</strong>，错误的渲染效果 <strong>并不意味着</strong> 一定是糟糕的，<strong>提升</strong> 现今着色器的 <strong>图形技术</strong> 才是我们的追求目标。</p></li></ul><h3 id="伪光追" tabindex="-1"><a class="header-anchor" href="#伪光追" aria-hidden="true">#</a> 伪光追</h3><ul><li><p><code>伪光追</code> 或称 <code>假光追</code>：</p><ul><li><p>该词条仅解释 <code>Minecraft</code> 中的 <strong>“伪光追”</strong> 说法，其他游戏尚对其有不同解释。</p></li><li><p>是在国内光影界流行的涉及光线追踪技术所谓 <strong>真伪问题</strong> 的多种 <strong>错误说法</strong> 的总称。</p></li><li><p>该词语在 <code>图形学术语</code> 中 <strong>尚无明确的</strong> 定义与解释；</p></li><li><p>多数认为 <strong>伪光追</strong> 存在的玩家认为该词代指下方第一个说法，但 <strong>至今未有任何成果能够佐证该说法</strong>。</p></li></ul></li><li><p><code>伪光追</code> 的来源：</p><ul><li>该概念其最早用于国内某技术成果的 <strong>包装宣传</strong>，遂成一种 <strong>没有实际意义</strong> 的但 <strong>具有宣传效果</strong> 的营销手段。</li></ul></li><li><p>调查表明，持错误观点的玩家可能受以下几种混淆说法及因素影响：</p><ul><li><p><strong>认为可以使用非光追手段实现光线追踪效果：</strong></p><ul><li><code>光线追踪技术</code> 可作为实现 <strong>全局光照</strong> 或一些其它效果（如<strong>高光、PBR、丁达尔效应、体积光，阴影</strong>）的一种手段，这些效果使用 <code>非光线追踪一类技术</code> 确实也能实现。</li><li>但按照这种说法走下去，非光线追踪技术也理应实现一些后者 <code>独有</code> 的现象，如小孔成像、光的色散等。</li><li>因此只能够说 <code>非光线追踪技术同样能够实现全局光照等一些效果</code> ，而非<strong>错误地认为</strong>实现光线追踪技术能够做到的部分效果=伪光追。</li></ul></li><li><p><strong>认为可以<code>用真假区分 软 / 硬件光线追踪</code>：</strong></p><ul><li>这种说法一般认为 <code>基岩版 RTX</code> 才是真光追，其他的都是假的。</li><li>如之前内容所述，<strong>光线追踪</strong> 由 <strong>是否采用算法</strong> 决定，与所用 <strong>GPU</strong> 无关，甚至与是否使用GPU无关，区别的只是性能表现。 硬件光线追踪的 <strong>优势</strong> 在于 <strong>效率更高</strong>，而非 <strong>独有技术</strong>，因此该说法是错误的；</li></ul></li></ul></li><li><p><strong>将<code>使用代码模拟光线追踪</code>定为 伪光追：</strong></p><ul><li>目前光线追踪技术的实现方法只有一种：通过 <strong>在着色器内编写代码</strong> 实现*。</li><li>无论是使用了 <strong>光追加速核心</strong> 的 <code>硬件实时光线追踪技术</code>，还是 <strong>最初应用于电影</strong> 的 <strong>离线渲染技术</strong>，都依靠了该方法。</li><li>直接将 <strong>代码模拟光线追踪</strong> 定为 <code>伪光追</code>，这种说法是完全错误的；</li></ul></li><li><p><strong>将<code>贴图光追</code>认定为“伪光追”：</strong></p><ul><li>关于“贴图光追”，下文有一份关于它的记载。</li><li>在这里只需要知道它们两个概念不等同即可。</li></ul></li><li><p><strong>认为构建 MC 所用的编程语言（如Java 、 C++）无法实现光线追踪效果：</strong></p><ul><li>MC 使用的图形渲染引擎为 OpenGL （Java 版与携带版）、 DirectX （基岩版），与构建它们所使用的编程语言无关。</li></ul></li><li><p><strong>其他更多的错误说法。</strong></p></li><li><p>如果你想要从更深层的角度去了解“伪光追”这个说法，可以观看下面的有关视频。</p></li></ul>',13),u={href:"https://player.bilibili.com/player.html?bvid=BV1X54y1v7za",target:"_blank",rel:"noopener noreferrer"},_=e('<h3 id="屏幕空间路径跟踪-sspt" tabindex="-1"><a class="header-anchor" href="#屏幕空间路径跟踪-sspt" aria-hidden="true">#</a> 屏幕空间路径跟踪（SSPT）</h3><ul><li><p>SSPT 的效果不及其它光线追踪解决方案，有说法由此认为 <strong><em>“ SSPT 并非光线追踪技术”</em></strong>。</p></li><li><p>然而，SSPT 的目的是<strong>在节省性能的前提下做到光线追踪渲染</strong>，而非实现一些更好的效果。</p></li><li><p>而且，判定与光线追踪技术有关的标准应是 <code>是否使用光线追踪相关算法</code> ，仅仅通过最终效果简单粗暴地断言是<strong>非常不严谨</strong>的。</p></li></ul><h3 id="贴图光追" tabindex="-1"><a class="header-anchor" href="#贴图光追" aria-hidden="true">#</a> 贴图光追</h3><ul><li><p><strong>该说法来源已不可考，</strong> 笃信者的理由是：</p><ul><li><p>Java 版光追光影可以不使用 <code>RTX 系列</code> 或 <code>RX6000 系列以上</code> 显卡。</p></li><li><p>然而，<code>实时光线追踪技术</code> 的 <strong>本质</strong> 是<code>算法</code>，与是否使用 <code>硬件光追</code> <strong>没有关系</strong>，核显能运行光影也并不能推论出该光影是否含有光追算法。</p></li><li><p>而且 <code>贴图光追</code> 这个技术不存在于 <code>Minecraft</code> 。</p></li><li><p>如果你想要知道一个光影有没有光追算法，可以通过下面的方法来检查。</p></li></ul></li></ul><h2 id="区分是否存在光追" tabindex="-1"><a class="header-anchor" href="#区分是否存在光追" aria-hidden="true">#</a> 区分是否存在光追</h2><ul><li><p>如果你身边有一些研究 <code>Minecraft 图形学</code> 的（最好是自己写过光影或做过纹理包的）朋友，你可以拿着 <strong>光影包名称</strong> 去询问他们。</p></li><li><p>如果你身边没有这类朋友，你可以 <strong>直接在社区提问</strong>，了解的人自然会来解答。</p></li><li><p>如果你想通过自己的努力去检测，从 <strong>光的性质</strong> 入手是一个很好的检验手段。</p></li><li><p>你可以去观察光影是否有 <code>小孔成像</code>，或是研究光线是否存在 <code>二次以上的反弹</code>。</p></li><li><p>但注意，<strong>由于当前技术水平限制</strong>，我们所谓的 <code>光线追踪</code> 并不能模拟出光的<strong>所有物理性质</strong>（例如不能模拟出 <code>双缝干涉</code> 现象）。</p></li></ul><h2 id="java-版的那些事" tabindex="-1"><a class="header-anchor" href="#java-版的那些事" aria-hidden="true">#</a> Java 版的那些事</h2><ul><li><p>累计下来，有几个光影发生了一些有趣的事，在此整理一下：</p><ul><li><p><code>Sildurs Vibrant Shaders</code> - <strong>田园光追级光影</strong></p><ul><li><p>该光影由国外作者 <code>Sildur</code> 编写，效果不输于很多高端光影，帧数十分舒服，属于 <code>传统光影</code>。</p></li><li><p>但在某论坛中被打上了 <code>田园光追级光影</code> 的标签，理由是 <code>体验达到了光追光影的水准</code>，至今仍存在。</p></li></ul></li><li><p><code>BSL</code> - <strong>（伪）光追光影</strong></p><ul><li><p>该光影作者为 <code>CaptTatsu</code> ，同样也属于 <code>传统光影</code>。</p></li><li><p>但在B站某宣传视频中被强行扣上 <code>最棒的室内伪光追光影</code> 的帽子，在评论区快变成光追普及区后，去掉了 <code>伪</code> 字。</p></li></ul></li><li><p><code>BSL_Edit_Pasquale</code> - <strong>伪光追光影</strong></p><ul><li><p>BSL 早期的一个魔改版本，作者 <code>Pasquale</code> 。</p></li><li><p>2019 年 7 月 13 日，Pasquale 在推特宣布已获取到 BSL 作者的的 <code>魔改授权</code> 。</p></li><li><p>同年 9 月 23 日，Pasquale 在自己的 Discord 上 <code>正式发布</code> 该光影。</p></li><li><p>从发布至今，这位作者都<strong>并未提及自己的光影与光线追踪技术有任何关联</strong>。而国外也并不流行“伪光追”这种说法。</p></li></ul></li><li><p><code>SEUS_PTGI_E13</code></p><ul><li><p>这个光影出现的原因大部分人都不清楚，它并 <strong>不存在</strong> 于作者发布的 <strong>任何帖子</strong> 上，但又好像有着一定的信服力。</p></li><li><p>其实它来自一个国外翻版网站（现已被关闭）。</p></li><li><p>最明显的标志是：这个网站出来的文件名往往是以下划线_为分隔，而 <code>Patreon</code> 那边获取到的都是空格分隔。</p></li><li><p>据分析，它应该是 <code>E11 版本</code> 的轻度修改，并未有很大变动。</p></li></ul></li><li><p><code>Complementary Shaders</code></p><ul><li><p>由 <code>BSL</code> 魔改而来，属于中规中矩的一个光影，在 <code>CurseForge</code> 上有发布。</p></li><li><p>然而在某论坛的搬运帖里再次被打上 <code>光追</code> 标签，原因在于：该光影宣传时 <strong>提到</strong> 它的场景色调是 <strong>模仿</strong> <code>Windows10 Bedrock 版 RTX 光影</code>，被 <strong>误以为</strong> <code>引入了光线追踪渲染技术</code>。</p></li><li><p>现该帖子已修改内容，避免了进一步的误导。</p></li></ul></li></ul></li></ul>',8);function f(S,b){const d=i("ExternalLinkIcon");return n(),t("div",null,[g,o("blockquote",null,[o("ul",null,[a,o("li",null,[o("a",p,[r("—— 维基百科 · 《Ray Tracing》"),c(d)])])])]),h,o("p",null,[o("a",u,[r("【BSL到底是不是光追？光追为mc带来了什么？【素影之下 #2】×【光影实验室 #3】】"),c(d)])]),_])}const T=l(s,[["render",f],["__file","RT_mistakes.html.vue"]]);export{T as default};