import{_ as l}from"./origin-65ed4af5.js";import{_ as t,r as a,o as c,c as h,a as i,b as n,d as s,w as v,e}from"./app-c8c740f6.js";const u="/images/instructions/itt2-天空.png",o="/images/instructions/itt3-天空.png",m="/images/instructions/2022-08-06_18.50.43.png",b="/images/instructions/2022-08-06_18.50.33.png",p="/images/instructions/itt3-体积云.png",g="/images/instructions/itt3-团雾噪声.png",_="/images/instructions/2022-08-06_19.18.24.png",x="/images/instructions/2022-08-06_19.18.36.png",f="/images/instructions/itt2-水下体积光.png",T="/images/instructions/itt3-水下体积光.png",R="/images/instructions/2022-08-06_20.19.55.png",S="/images/instructions/2022-08-06_20.19.47.png",D="/images/instructions/黑洞.png",I="/images/instructions/2022-08-06_19.58.46.png",M="/images/instructions/2022-08-06_19.58.57.png",A="/images/instructions/2022-08-06_19.35.16.png",k="/images/instructions/2022-08-06_19.35.27.png",C="/images/instructions/2022-08-06_18.57.54.png",H="/images/instructions/2022-08-06_18.58.12.png",U={},G=e('<h1 id="iterationt-3-0-0-使用手册" tabindex="-1"><a class="header-anchor" href="#iterationt-3-0-0-使用手册" aria-hidden="true">#</a> iterationT 3.0.0 使用手册</h1><h2 id="iterationt-的由来及版权信息-必读" tabindex="-1"><a class="header-anchor" href="#iterationt-的由来及版权信息-必读" aria-hidden="true">#</a> iterationT 的由来及版权信息 （必读）</h2><ul><li>在使用光影之前，我们需要先了解 iterationT 的由来。以下是关于它的起源： <img src="'+l+'" alt="origin.png"> 由于 Cody 作者本人的协议限制，其他人在获得授权前，不允许公开发布魔改文件。国内的绝大部分 SEUS 魔改版本均不符合此要求。因此我们也希望大家<strong>不要再把光影的文件或相关信息散布到国外社交平台上。</strong> 同时，我们也在逐步改进这个问题，下一代的 iterationT 4.0.0 与 iterationT RP 将会使用完全原创的代码，敬请期待。</li></ul><h2 id="使用须知-必读" tabindex="-1"><a class="header-anchor" href="#使用须知-必读" aria-hidden="true">#</a> 使用须知（必读）</h2>',4),O=i("strong",null,"部分明显功能",-1),V=e(`<li><p>启动标题可在光影设置右上角关闭</p></li><li><p>兼容的 MC 与 optifine 版本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>游戏版本   OptiFine 版本
1.16.5 ： HD_U_G7+
1.17.1 ： HD_U_G9+
1.18.1+ ： HD_U_H3+
1.19+ ： HD_U_H8+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>光影选择界面右边栏需设置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>抗锯齿 ： 关闭
阴影精细度 ： 1x
经典光效 ： 默认
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>不能保证模组的兼容性</p></li><li><p>不兼容的设备：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MAC OS
intel ARC系列显卡
GTX600 或更早的nVIDIA Geforce显卡
HD7000 或更早的AMD/ATI Radeon显卡
2012 年以前发布的显卡
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,5),B={href:"https://wj.qq.com/s2/10615335/d757",target:"_blank",rel:"noopener noreferrer"},E=i("li",null,[i("p",null,"已知问题：")],-1),F=e('<p>已修复（在 3.1.0 封闭内测版中已修复的问题）：</p><ul><li><strong>1.16.5 OptiFine G8 版本以下不兼容</strong>：因为使用了 OptiFine 新增的功能。目前（3.1.0）对 OptiFine 的兼容性已拓展至<strong>与 2.0.1 相同</strong>。</li><li><strong>Iris Shader 无法加载光影</strong>：在光影设置中关闭泛光可解决白屏问题。但内部版本实测出现了新问题（捡东西时闪屏），由于 Iris 自身原因，无法修复。</li><li><strong>AMD Radeon GPU 加载异常</strong>：为 AMD 新版显卡驱动导致的问题。现有版本（3.0.0）也可通过 <code>关闭地面大气散射</code> 和 <code>提高体积云采样/质量</code> 暂时解决偶发白屏错误和云的马赛克。</li></ul><p>无法修复（在腾讯问卷里也有提到）：</p><ul><li><strong>实体半透明渲染错误</strong>：例如史莱姆、闪电苦力怕，受制于光影架构。</li><li><strong>半透明物体无法叠加渲染</strong>：此问题受制于 OptiFine，无法修复。</li><li><strong>少数情况下存在漏光</strong>：尽力了，目前框架下难以完美解决。</li><li><strong>光源方块周围异常变暗</strong>：MC 自身的bug。</li></ul><p>拒绝修复：</p><ul><li><strong>NVIDIA 516.40 版本的光影显示错误</strong>：表现为屏幕有一道道横线，更新驱动即可解决。</li><li><strong>未关闭各向异性过滤</strong>：表现为天空撕裂，关闭游戏及显卡面板中的各向异性过滤即可解决。</li></ul><p>下面正式开始讲解更新内容。</p><hr><h2 id="大气" tabindex="-1"><a class="header-anchor" href="#大气" aria-hidden="true">#</a> 大气</h2><p><strong>· 本篇内容会附带自定义讲解，喜欢DIY的小伙伴不要错过哦 · 带“⚙️”的句段为自定义讲解</strong></p><h3 id="全新模型带来的全新的天空外观" tabindex="-1"><a class="header-anchor" href="#全新模型带来的全新的天空外观" aria-hidden="true">#</a> 全新模型带来的全新的天空外观</h3><p><img src="'+u+'" alt="itt2-天空.png"> iterationT 2.0.0 - 天空 <img src="'+o+'" alt="itt3-天空.png"> iterationT 3.0.0 - 天空</p><h3 id="基于物理模型的大气外天体渲染" tabindex="-1"><a class="header-anchor" href="#基于物理模型的大气外天体渲染" aria-hidden="true">#</a> 基于物理模型的大气外天体渲染</h3><p><img src="'+m+'" alt="2022-08-06_18.50.43.png"> iterationT 2.0.0 - 大气外天体渲染 <img src="'+b+'" alt="2022-08-06_18.50.33.png"> iterationT 3.0.0 - 大气外天体渲染</p><p>ps：这也是文件体积增大的原因</p><ul><li>新的大气散射 ，更柔和的体积云形态，可以飞上去的体积云，体验独特的天空之旅吧（此处在自定义开启了新增的天空地平线）</li></ul><p>⚙️自定义位置：体积渲染 -&gt; 杂项 -&gt; 天空地平线</p><h3 id="完整的行星大气模拟" tabindex="-1"><a class="header-anchor" href="#完整的行星大气模拟" aria-hidden="true">#</a> 完整的行星大气模拟</h3><h3 id="调整体积云形态" tabindex="-1"><a class="header-anchor" href="#调整体积云形态" aria-hidden="true">#</a> 调整体积云形态</h3><p><img src="'+p+'" alt="itt3-体积云.png"> iterationT 3.0.0 - 体积云</p><h3 id="新增局部光照选项" tabindex="-1"><a class="header-anchor" href="#新增局部光照选项" aria-hidden="true">#</a> 新增局部光照选项</h3><ul><li>使光照下的体积云更为合理</li></ul><p>⚙️自定义位置：体积渲染 -&gt; 体积云设置 -&gt; 局部光照</p><h3 id="新增适配大气模型的地面散射" tabindex="-1"><a class="header-anchor" href="#新增适配大气模型的地面散射" aria-hidden="true">#</a> 新增适配大气模型的地面散射</h3><hr><h2 id="体积雾" tabindex="-1"><a class="header-anchor" href="#体积雾" aria-hidden="true">#</a> 体积雾</h2><h3 id="更加柔和的团雾形态" tabindex="-1"><a class="header-anchor" href="#更加柔和的团雾形态" aria-hidden="true">#</a> 更加柔和的团雾形态</h3><p><img src="'+g+'" alt="itt3-团雾噪声.png"> iteration 3.0.0 - 团雾</p><h3 id="新增折射渲染选项" tabindex="-1"><a class="header-anchor" href="#新增折射渲染选项" aria-hidden="true">#</a> 新增折射渲染选项</h3><p>⚙️自定义位置：体积渲染 -&gt; 折射后渲染</p><hr><h2 id="全局光照系统" tabindex="-1"><a class="header-anchor" href="#全局光照系统" aria-hidden="true">#</a> 全局光照系统</h2><h3 id="新的rsm全局光照算法" tabindex="-1"><a class="header-anchor" href="#新的rsm全局光照算法" aria-hidden="true">#</a> 新的RSM全局光照算法</h3><p><img src="'+_+'" alt="2022-08-06_19.18.24.png"> iterationT 2.0.0 - RSM 全局光照 <img src="'+x+'" alt="2022-08-06_19.18.36.png"> iterationT 3.0.0 - RSM 全局光照</p><ul><li>重新改进的RSM全局光照，引入部分体素化成分，让世界更加鲜活，阴影拥有更多自然色彩（该效果非光追，仍会出现传统光栅光影中的漏光等现象，敬请期待RP版本的出世）</li></ul><h3 id="消除方块边缘的伪影" tabindex="-1"><a class="header-anchor" href="#消除方块边缘的伪影" aria-hidden="true">#</a> 消除方块边缘的伪影</h3><h3 id="改善超出范围时的过渡效果" tabindex="-1"><a class="header-anchor" href="#改善超出范围时的过渡效果" aria-hidden="true">#</a> 改善超出范围时的过渡效果</h3><hr><h2 id="水下渲染" tabindex="-1"><a class="header-anchor" href="#水下渲染" aria-hidden="true">#</a> 水下渲染</h2><h3 id="调整水雾、重写水下体积光" tabindex="-1"><a class="header-anchor" href="#调整水雾、重写水下体积光" aria-hidden="true">#</a> 调整水雾、重写水下体积光</h3><p><img src="'+f+'" alt="itt2-水下体积光.png"> iterationT 2.0.0 - 水雾、水下体积光 <img src="'+T+'" alt="itt3-水下体积光.png"> iteration 3.0.0 - 水雾、水下体积光</p><ul><li>全新的水下雾气渲染，加上完整的水下体积光，染色玻璃水下适应 ，给你最沉浸的水下体验</li></ul><p>⚙️自定义位置：体积渲染 -&gt; 杂项 -&gt; 水雾</p><h3 id="调整焦散形态" tabindex="-1"><a class="header-anchor" href="#调整焦散形态" aria-hidden="true">#</a> 调整焦散形态</h3><p><img src="'+R+'" alt="2022-08-06_20.19.55.png"> iterationT 2.0.0 - 水下焦散 <img src="'+S+'" alt="2022-08-06_20.19.47.png"> iterationT 3.0.0 -水下焦散</p><hr><h2 id="末地" tabindex="-1"><a class="header-anchor" href="#末地" aria-hidden="true">#</a> 末地</h2><h3 id="新天体-黑洞" tabindex="-1"><a class="header-anchor" href="#新天体-黑洞" aria-hidden="true">#</a> 新天体：黑洞</h3><p><img src="'+D+'" alt="黑洞.png"></p><h3 id="新增星环投影-动态星空与引力透镜" tabindex="-1"><a class="header-anchor" href="#新增星环投影-动态星空与引力透镜" aria-hidden="true">#</a> 新增星环投影，动态星空与引力透镜</h3><ul><li>提升视觉体验</li></ul><h3 id="调整曝光表现-优化阴影质量" tabindex="-1"><a class="header-anchor" href="#调整曝光表现-优化阴影质量" aria-hidden="true">#</a> 调整曝光表现，优化阴影质量</h3><ul><li>明暗变化不再那么强烈</li></ul><hr><h2 id="下界" tabindex="-1"><a class="header-anchor" href="#下界" aria-hidden="true">#</a> 下界</h2><h3 id="增强泛光雾-减少抖动" tabindex="-1"><a class="header-anchor" href="#增强泛光雾-减少抖动" aria-hidden="true">#</a> 增强泛光雾，减少抖动</h3><p><img src="'+I+'" alt="2022-08-06_19.58.46.png"> iterationT 2.0.0 - 下界雾 <img src="'+M+'" alt="2022-08-06_19.58.57.png"> iterationT 3.0.0 - 下界雾</p><ul><li>优化了下界雾气渲染，同时加入模糊效果，为你的下界增添一抹神秘色彩</li></ul><hr><h2 id="材质系统" tabindex="-1"><a class="header-anchor" href="#材质系统" aria-hidden="true">#</a> 材质系统</h2><h3 id="添加资源包分辨率自动检测、提升视差效果" tabindex="-1"><a class="header-anchor" href="#添加资源包分辨率自动检测、提升视差效果" aria-hidden="true">#</a> 添加资源包分辨率自动检测、提升视差效果</h3><p><img src="'+A+'" alt="2022-08-06_19.35.16.png"> iterationT 2.0.0 - 视差 <img src="'+k+'" alt="2022-08-06_19.35.27.png"> iterationT 3.0.0 - 视差</p><ul><li>完全重写SEUS原有的视差体系，使得现在视差有了正常渲染，同时支持了自适应分辨率，不需要再手动调整</li></ul><h3 id="新增各向异性过滤" tabindex="-1"><a class="header-anchor" href="#新增各向异性过滤" aria-hidden="true">#</a> 新增各向异性过滤</h3><p>⚙️自定义位置：材质 -&gt; 各向异性过滤</p><h3 id="提供pbr自发光支持" tabindex="-1"><a class="header-anchor" href="#提供pbr自发光支持" aria-hidden="true">#</a> 提供PBR自发光支持</h3><h3 id="优化潮湿效果" tabindex="-1"><a class="header-anchor" href="#优化潮湿效果" aria-hidden="true">#</a> 优化潮湿效果</h3><hr><h2 id="天气系统" tabindex="-1"><a class="header-anchor" href="#天气系统" aria-hidden="true">#</a> 天气系统</h2><h3 id="新的雨滴渲染-新增雪花判断" tabindex="-1"><a class="header-anchor" href="#新的雨滴渲染-新增雪花判断" aria-hidden="true">#</a> 新的雨滴渲染，新增雪花判断</h3><h3 id="适配新大气模型的雨天效果" tabindex="-1"><a class="header-anchor" href="#适配新大气模型的雨天效果" aria-hidden="true">#</a> 适配新大气模型的雨天效果</h3><hr><h2 id="后处理" tabindex="-1"><a class="header-anchor" href="#后处理" aria-hidden="true">#</a> 后处理</h2><h3 id="重写泛光算法、调整曝光逻辑" tabindex="-1"><a class="header-anchor" href="#重写泛光算法、调整曝光逻辑" aria-hidden="true">#</a> 重写泛光算法、调整曝光逻辑</h3><ul><li>提升视觉体验</li></ul><h3 id="新增镜头眩光" tabindex="-1"><a class="header-anchor" href="#新增镜头眩光" aria-hidden="true">#</a> 新增镜头眩光</h3><ul><li>对着太阳就能看见</li></ul><h3 id="新增黑幕" tabindex="-1"><a class="header-anchor" href="#新增黑幕" aria-hidden="true">#</a> 新增黑幕</h3><ul><li>电影级宽幕回来了</li></ul><p>⚙️自定义位置：后处理 -&gt; 杂项 -&gt;黑幕宽高比</p><h3 id="新增探窟模式" tabindex="-1"><a class="header-anchor" href="#新增探窟模式" aria-hidden="true">#</a> 新增探窟模式</h3><p><img src="'+C+'" alt="2022-08-06_18.57.54.png"> iterationT 2.0.0 <img src="'+H+`" alt="2022-08-06_18.58.12.png"> iterationT 3.0.0 - 探窟模式</p><ul><li>为生存而全新设计的探窟模式，启用后将大幅提高洞穴暗处可见度。洞穴完全照亮，同时自动屏蔽天空，免除低视距下的漏光烦恼</li></ul><p>⚙️自定义位置：快捷选项 -&gt; 探窟模式</p><hr><h2 id="tahnass-的日志原文" tabindex="-1"><a class="header-anchor" href="#tahnass-的日志原文" aria-hidden="true">#</a> Tahnass 的日志原文</h2><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>一、主要更新内容

1、大气系统
    1）全新模型带来的全新的天空外观
    2）完整的行星大气模拟
    3）基于物理模型的大气外天体渲染
    4）调整体积云
    5）新增适配大气模型的地面散射

2、全局光照系统
    1）强化了全局光照的细节与颜色表现
    2）消除方块边缘的伪影
    3）改善超出范围时的过渡效果

3、水下渲染
    1）调整水雾
    2）重写水下体积光
    3）调整焦散形态

4、体积雾
    1）更加柔和的团雾形态
    2）优化光照权重
    3）新增折射中渲染的选项
    4）大幅减少噪声图案的可见性

5、末地维度
    1）新增天体——黑洞
    2）新增星环投影，动态星空与引力透镜
    3）调整曝光表现，优化阴影质量

6、下界维度
    1）增强泛光雾，减少抖动

7、材质系统
    1）新的视差算法
    2）新增各向异性过滤支持
    3）添加PBR自发光支持
    4）优化潮湿效果

8、天气系统
    1）新的雨滴渲染，新增雪花判断
    2）适配新大气模型的雨天效果

9、后处理
    1）新增镜头炫光
    2）重写泛光算法
    3）调整曝光逻辑

10、探窟模式
    1）启用后将大幅提高洞穴暗处可见度


二、次要更改内容
 版本兼容更新至1.19
  新增多项自定义光源调整
 调整天空光照等级曲线
 调整方块光照等级曲线
 微调各种光源的亮度
  新增下界环境光照与雾气设置
 调整阴影基础模糊量，并新增相关自定义选项
 提升半影质量，并新增半影相关自定义选项
 调整植物次表面散射效果
 新增自动材质包分辨率判断
 新增模组方块兼容选项
 微调水波形态，并新增相关自定义选项
 调整方块高光强度
 新增半透明方块后水雾渲染
 新增多项雨天自定义选项
 新增水下体积雾开关
 新增天空与反射天空盒的地平线开关
 优化金属的天空反射遮蔽过渡
 新增细雪雾、岩浆雾，，尽可能接近原版
 调整失明效果，尽可能接近原版
 更改多数雾效的距离计算方式
 调整夜视效果
 优化景深采样方式
 新增曝光亮度权重的自动权重模式
 调整各维度默认的自动曝光模式
 新增黑幕选项
 调整暗光褪色效果，并新增相关自定义选项
 新增启动标题
 新增末地传送门专有渲染效果

三、修复内容
 旗帜半透明效果丢失
 手持旗帜半透明效果丢失
 雪花未渲染
 闪电未渲染
 附魔光效渲染错误
 半透明方块丢失
 ctm的overlay功能导致错误的半透明渲染
 高光材质对雨滴产生干扰
 高草丛的晃动缺失
 关闭“高光贴图”时渲染错误
 关闭“法线贴图”时渲染错误
 法线存在微小偏移误差
 法线朝向正上方时出现渲染错误
 区块边界渲染错误
 碰撞箱未渲染
 鱼竿的鱼线未渲染
 红石线发光效果未渲染
 烈焰人材质过亮
 完全光滑表面的反射中存在黑带
 半透明方块水雾层级异常
 日月光照更替时间错误
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,87);function N(P,L){const r=a("RouterLink"),d=a("ExternalLinkIcon");return c(),h("div",null,[G,i("ol",null,[i("li",null,[i("p",null,[n("本手册仅讲述与 iterationT 2.0.0 对比新增或修改的"),O,n("，完整内容需要先翻阅 "),s(r,{to:"/instructions/Java_Shaders/itt2.html"},{default:v(()=>[n("2.0.0 手册")]),_:1}),n(" 及塔纳斯的更新日志！")])]),V,i("li",null,[i("p",null,[n("反馈渠道：如有反馈问题，请填写该问卷："),i("a",B,[n("腾讯问卷"),s(d)])])]),E]),F])}const y=t(U,[["render",N],["__file","itt3.html.vue"]]);export{y as default};
