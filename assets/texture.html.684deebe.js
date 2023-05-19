import{_ as o,o as e,c as r,e as d}from"./app.3e068ef4.js";const c={},t=d('<h1 id="纹理包篇" tabindex="-1"><a class="header-anchor" href="#纹理包篇" aria-hidden="true">#</a> 纹理包篇</h1><h2 id="xx-显卡-cpu-内存-电脑型号-推荐用什么纹理包" tabindex="-1"><a class="header-anchor" href="#xx-显卡-cpu-内存-电脑型号-推荐用什么纹理包" aria-hidden="true">#</a> （<code>XX 显卡 / CPU / 内存 / 电脑型号</code>）推荐用什么纹理包？</h2><ul><li><p><strong>不会有绝对确定的答案：</strong></p><ul><li><p>不同纹理包的 <strong>具体配置需求</strong> 一般 <strong>不可能完全一致</strong>。</p></li><li><p>一般建议自己试。</p></li></ul></li></ul><h2 id="纹理包是吃-cpu-还是吃-gpu" tabindex="-1"><a class="header-anchor" href="#纹理包是吃-cpu-还是吃-gpu" aria-hidden="true">#</a> 纹理包是吃 <code>CPU</code> 还是吃 <code>GPU</code>？</h2><ul><li><p><strong>一般来说：</strong></p><ul><li><p>加载纹理包可能遇到的 <code>瓶颈顺序</code> 是：<code>运行内存（RAM）</code> &gt; <code>显卡（GPU）</code> &gt; <code>处理器（CPU）</code>。</p></li><li><p>当游戏帧数 <strong>明显低于</strong> 你的预期时，可使用 <code>任务管理器</code> 等工具判断 <code>独显</code> <strong>是否工作</strong>，随后再按照 <code>瓶颈顺序</code> 依次检查可能出现瓶颈的部件。</p></li></ul></li></ul><h2 id="加载一个纹理包需要多少内存" tabindex="-1"><a class="header-anchor" href="#加载一个纹理包需要多少内存" aria-hidden="true">#</a> 加载一个纹理包需要多少内存？</h2><ul><li><p><strong>并非单一变量，无法解答：</strong></p><ul><li><p>纹理包除了 <code>分辨率</code>，还有很多 <strong>其他参数</strong>，</p></li><li><p>如 <code>原版贴图覆盖率</code>、<code>法线贴图</code>、<code>视差贴图</code> 等。</p></li><li><p>它们作为 <strong>不同参数</strong> 参与到纹理包的加载过程中，你可以理解为 <strong>每一个纹理包</strong> 的 <strong>要求</strong> 都是 <strong>唯一</strong> 的。</p></li></ul></li></ul><h2 id="光追纹理包是什么" tabindex="-1"><a class="header-anchor" href="#光追纹理包是什么" aria-hidden="true">#</a> 光追纹理包是什么？</h2><ul><li><p><strong>光追是 <code>着色器（光影）</code>所使用的技术，与 <code>纹理包</code> 无关：</strong></p><ul><li><p>现在市面上的所谓 <strong>光追纹理包</strong> 大概率是指 <code>PBR纹理包</code>，其 <strong>包含</strong> 更多 <code>其它纹理包信息</code>，</p></li><li><p>而不是 <strong>传统反射纹理包</strong> 仅有的 <code>粗糙度</code> 和 <code>反射率</code>。</p></li><li><p>借由该技术可使物体 <strong>表现出</strong> 该纹理包表面应有的 <code>物理效果</code>（如 <code>金属</code> 和 <code>玻璃</code> 的 <strong>反射区别</strong>，<code>塑料</code> 和 <code>泥土</code> 的 <strong>反射区别</strong>），有效降低了光滑面反射的“油腻感”，使反射更真实（但不是光追效果）。</p></li></ul></li><li><p>少部分人将 <code>光追纹理包</code> 当作贴图 <strong>事先离线渲染好</strong> 再 <strong>一张张贴</strong> 上去看着像光追效果的纹理包，其原因有可能有两点：</p><ol><li><p><strong>道听途说的错误说法</strong>；</p></li><li><p><code>1.17</code> 之后的 <code>纹理包</code> 能够添加 <code>水反</code> 等效果，看起来有 <strong>光追效果</strong>：</p><ul><li><p>然而这些反射只是因为 <code>1.17</code> <strong>开始添加</strong> 了<code>纹理包形式的着色器</code>，<strong>没有着色器支持</strong> 我们 <strong>不可能</strong> 添加任何反射。</p></li><li><p><code>Minecraft</code> 不存在 <code>纯纹理包</code> 达到 <code>光追效果</code> 的技术，也请不要再用这个 <strong>道听途说</strong> 的错误说法去误导别人！</p></li></ul></li></ol></li></ul><h2 id="纹理包的部分贴图还是原版的" tabindex="-1"><a class="header-anchor" href="#纹理包的部分贴图还是原版的" aria-hidden="true">#</a> 纹理包的部分贴图还是原版的？</h2><ul><li><p><strong>很多纹理包都属于个人作品，制作速度很慢，而 <code>Minecraft 的纹理包贴图</code> 可以达到上万张：</strong>、</p><ul><li><p>如果你发现纹理包 <strong>有此类问题</strong>，需要 <strong>自行检查</strong> 作者发布的 <code>纹理包</code> 是 <code>叠加包</code> 的形式，还是 <code>只需要使用最新版本号的包</code>。</p></li><li><p>如果是 <code>叠加包</code>，开发者一定会在 <strong>公告</strong> 等地方 <strong>标明</strong>；</p></li><li><p>如果没有，那就是 <strong>没做完</strong>。</p></li><li><p>请不要再拿这个问题去 <strong>困扰</strong> 纹理包作者，更不要 <strong>盲目要求</strong> 作者制作你想要的贴图！</p></li></ul></li></ul>',11),n=[t];function s(l,i){return e(),r("div",null,n)}const a=o(c,[["render",s],["__file","texture.html.vue"]]);export{a as default};