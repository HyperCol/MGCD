import{_ as e,o as c,c as o,e as d}from"./app.319876d8.js";const l={},i=d('<h1 id="基础问答" tabindex="-1"><a class="header-anchor" href="#基础问答" aria-hidden="true">#</a> 基础问答</h1><h2 id="为什么-mc-的光影优化如此糟糕" tabindex="-1"><a class="header-anchor" href="#为什么-mc-的光影优化如此糟糕" aria-hidden="true">#</a> 为什么 MC 的光影优化如此糟糕？</h2><p>答：有以下几个原因：</p><ul><li><code>OpenGL</code> 本身性能不差，但是选用的版本实在是太老旧了，这也导致老旧版本的着色器代码具有<strong>极大的优化空间</strong>；</li><li><code>lwjgl</code> 封装加上 <code>Blaze3d</code> 封装让代码效率打了折扣；</li><li>游戏渲染和主进程绑定在一起，也就意味着虽然 <code>GPU</code> 可能有空闲，但是由于主进程运算阻塞，导致 <code>FPS</code> 降低；</li><li>部分优化完全可以达到很好的效果，但是 Mojang 没能力做（例如 <code>Sodium</code> 或者 <code>OptiFine</code> 的优化）。</li><li>换言之： <ul><li>从最底层看，御三家的 <code>OpenGL</code> 实现做的参差不齐；</li><li>往上看 <code>OpenGL</code> 本身历史包袱重，而且 <code>Mojang</code> 用的是旧的方法，新的也不会用；</li><li>看引擎： <code>lwjgl</code> 也就 <code>MC</code> 在用了，小厂自研，优化一般，单线程运作也限制了过多东西；</li><li>看游戏架构：渲染与其他操作绑定同步，只要别的地方出岔子，渲染就卡；</li><li>再看看渲染代码：优化二字完全没体现，能用就行；</li><li>最后看总体：一代不如一代。</li></ul></li></ul>',4),a=[i];function n(t,r){return c(),o("div",null,a)}const h=e(l,[["render",n],["__file","faq.html.vue"]]);export{h as default};
