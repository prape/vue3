import{M as s,o as n,c as a,d as l,j as p,w as o,F as e,n as t,t as c,u as r,N as i,r as F,h as D,C,D as y,a as g}from"./app.be9c8b40.js";import{g as A}from"./chunks/index.31797bf8.js";const d={class:"demo"},I={setup(F){const D=s([1,2,3,4,5]);let C=D.length+1;function y(){D.splice(A(),0,C++)}function g(){D.splice(A(),1)}function A(){return Math.floor(Math.random()*D.length)}return(s,F)=>(n(),a("div",d,[l("button",{onClick:y},"在任意位置添加一项"),l("button",{onClick:g},"移除任意位置上的一项"),p(i,{name:"list",tag:"ul",style:{"margin-top":"20px"}},{default:o((()=>[(n(!0),a(e,null,t(r(D),(s=>(n(),a("li",{key:s},c(s),1)))),128))])),_:1})]))}};const b={class:"demo"},u={setup(s){let r=F([1,2,3,4,5]),D=r.value.length+1;function C(){r.value.splice(g(),0,D++)}function y(){r.value.splice(g(),1)}function g(){return Math.floor(Math.random()*r.value.length)}return(s,F)=>(n(),a("div",b,[l("button",{onClick:C},"添加"),l("button",{onClick:y},"删除"),l("button",{onClick:F[0]||(F[0]=s=>function(s){let n,a=s.length;for(;0!=a;)n=Math.floor(Math.random()*a),a--,[s[a],s[n]]=[s[n],s[a]];return s}(r.value))},"重新排序"),p(i,{name:"list2",tag:"ul",style:{"margin-top":"20px"}},{default:o((()=>[(n(!0),a(e,null,t(r.value,(s=>(n(),a("li",{class:"list-item",key:s},c(s),1)))),128))])),_:1})]))}},h={class:"demo",style:{height:"265px"}},G=["data-index"],X={setup(s){const r=[{msg:"Bruce Lee"},{msg:"Jackie Chan"},{msg:"Chuck Norris"},{msg:"Jet Li"},{msg:"Kung Fury"}];let g=F("");const d=D((()=>r.filter((s=>s.msg.toLowerCase().includes(g.value)))));function I(s){s.style.opacity=0,s.style.height=0}function b(s,n){A.to(s,{opacity:1,height:"1.6em",delay:.15*s.dataset.index,onComplete:n})}function u(s,n){A.to(s,{opacity:0,height:0,delay:.15*s.dataset.index,onComplete:n})}return(s,r)=>(n(),a("div",h,[C(l("input",{"onUpdate:modelValue":r[0]||(r[0]=s=>g.value=s),style:{"margin-bottom":"20px"}},null,512),[[y,g.value]]),p(i,{tag:"ul",css:!1,onBeforeEnter:I,onEnter:b,onLeave:u},{default:o((()=>[(n(!0),a(e,null,t(d.value,((s,l)=>(n(),a("li",{key:s.msg,"data-index":l},c(s.msg),9,G)))),128))])),_:1})]))}},v=g('<h1 id="transitiongroup" tabindex="-1">TransitionGroup·过渡组 <a class="header-anchor" href="#transitiongroup" aria-hidden="true">#</a></h1><p><code>&lt;TransitionGroup&gt;</code> 是一个内置组件，设计用于呈现一个列表中的元素或组件的插入、移除和顺序改变的动画效果。</p><h2 id="differences-from-transition" tabindex="-1">和 <code>&lt;Transition&gt;</code> 的区别 <a class="header-anchor" href="#differences-from-transition" aria-hidden="true">#</a></h2><p><code>&lt;TransitionGroup&gt;</code> 支持和 <code>&lt;Transition&gt;</code> 基本相同的 prop、CSS 过渡 class 和 JavaScript 钩子监听器，但有以下几点区别：</p><ul><li><p>默认情况下，它不会渲染一个包装器元素。但你可以通过传入 <code>tag</code> prop 来指定一个元素作为包装器元素来渲染。</p></li><li><p><a href="./transition.html#transition-modes">过渡模式</a>在这里不可用，因为我们不再是在互斥的元素之间进行切换。</p></li><li><p>其中的元素<strong>总是必须</strong>有一个独一无二的 <code>key</code> attribute。</p></li><li><p>CSS 过渡 class 会被应用在其中的每一个元素上，<strong>而不是</strong>这个组的容器上。</p></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>当你是在 <a href="/vue3/guide/essentials/component-basics.html#dom-template-parsing-caveats">DOM 模板</a>中使用时，组件名需要写为 <code>&lt;transition-group&gt;</code>。</p></div><h2 id="enter-leave-transitions" tabindex="-1">进入 / 离开过渡 <a class="header-anchor" href="#enter-leave-transitions" aria-hidden="true">#</a></h2><p>这里是 <code>&lt;TransitionGroup&gt;</code> 对一个 <code>v-for</code> 列表应用进入 / 离开过渡的示例：</p><div class="language-vue-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TransitionGroup</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tag</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ul</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;"> in </span><span style="color:#A6ACCD;">items</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">}}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">TransitionGroup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><div class="language-css"><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-enter-active</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-leave-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> all </span><span style="color:#F78C6C;">0.5s</span><span style="color:#A6ACCD;"> ease</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-enter-from</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-leave-to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translateX</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">30px</span><span style="color:#89DDFF;">);</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div>',10),m=g('<h2 id="move-transitions" tabindex="-1">移动过渡 <a class="header-anchor" href="#move-transitions" aria-hidden="true">#</a></h2><p>上面的示例有一些明显的缺陷：当某一项被插入或移除时，它周围的元素会立即发生“跳跃”而不是平稳地移动。我们可以通过添加一些额外的 CSS 规则来解决这个问题：</p><div class="language-css"><div class="highlight-lines"><div class="highlighted"> </div><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><br></div><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-move</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 对移动中的元素应用的过渡 */</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-enter-active</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-leave-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> all </span><span style="color:#F78C6C;">0.5s</span><span style="color:#A6ACCD;"> ease</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-enter-from</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-leave-to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translateX</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">30px</span><span style="color:#89DDFF;">);</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">/* 确保将离开的元素从布局流中删除</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">  以便能够正确地计算移动的动画。 */</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-leave-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>现在它看起来好多了，甚至对整个列表执行洗牌的动画也都非常流畅：</p>',4),Z=g('<p><a href="/vue3/examples/#list-transition">完整的示例</a></p><h2 id="staggering-list-transitions" tabindex="-1">交错的列表过渡 <a class="header-anchor" href="#staggering-list-transitions" aria-hidden="true">#</a></h2><p>如果通过 data attribute 用 JavaScript 来执行过渡时，那么我们也可以实现列表中的交错过渡。首先，我们把某一项的索引作为 DOM 元素上的一个 data attribute 呈现出来。</p><div class="language-vue-html"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlighted"> </div><br><br><br><br><br></div><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TransitionGroup</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">tag</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ul</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  :</span><span style="color:#C792EA;">css</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  @</span><span style="color:#C792EA;">before-enter</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">onBeforeEnter</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  @</span><span style="color:#C792EA;">enter</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">onEnter</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  @</span><span style="color:#C792EA;">leave</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">onLeave</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">, </span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">) in </span><span style="color:#A6ACCD;">computedList</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">    :</span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">msg</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">    :</span><span style="color:#C792EA;">data-index</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  &gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">msg </span><span style="color:#89DDFF;">}}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">TransitionGroup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>接着，在 JavaScript 钩子中，我们基于这个 data attribute 对该元素执行一个延迟动画：</p><div class="language-js"><div class="highlight-lines"><br><br><br><br><div class="highlighted"> </div><br><br><br><br></div><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">onEnter</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> done</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">to</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    opacity</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    height</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1.6em</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    delay</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dataset</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.15</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    onComplete</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">done</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div>',6),B=g('<div class="composition-api"><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuXG5jb25zdCBsaXN0ID0gW1xuICB7IG1zZzogJ0JydWNlIExlZScgfSxcbiAgeyBtc2c6ICdKYWNraWUgQ2hhbicgfSxcbiAgeyBtc2c6ICdDaHVjayBOb3JyaXMnIH0sXG4gIHsgbXNnOiAnSmV0IExpJyB9LFxuICB7IG1zZzogJ0t1bmcgRnVyeScgfVxuXVxuXG5jb25zdCBxdWVyeSA9IHJlZignJylcblxuY29uc3QgY29tcHV0ZWRMaXN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gbGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubXNnLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudmFsdWUpKVxufSlcblxuZnVuY3Rpb24gb25CZWZvcmVFbnRlcihlbCkge1xuICBlbC5zdHlsZS5vcGFjaXR5ID0gMFxuICBlbC5zdHlsZS5oZWlnaHQgPSAwXG59XG5cbmZ1bmN0aW9uIG9uRW50ZXIoZWwsIGRvbmUpIHtcbiAgZ3NhcC50byhlbCwge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgaGVpZ2h0OiAnMS42ZW0nLFxuICAgIGRlbGF5OiBlbC5kYXRhc2V0LmluZGV4ICogMC4xNSxcbiAgICBvbkNvbXBsZXRlOiBkb25lXG4gIH0pXG59XG5cbmZ1bmN0aW9uIG9uTGVhdmUoZWwsIGRvbmUpIHtcbiAgZ3NhcC50byhlbCwge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIGRlbGF5OiBlbC5kYXRhc2V0LmluZGV4ICogMC4xNSxcbiAgICBvbkNvbXBsZXRlOiBkb25lXG4gIH0pXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8aW5wdXQgdi1tb2RlbD1cInF1ZXJ5XCIgLz5cbiAgPFRyYW5zaXRpb25Hcm91cFxuICAgIHRhZz1cInVsXCJcbiAgICA6Y3NzPVwiZmFsc2VcIlxuICAgIEBiZWZvcmUtZW50ZXI9XCJvbkJlZm9yZUVudGVyXCJcbiAgICBAZW50ZXI9XCJvbkVudGVyXCJcbiAgICBAbGVhdmU9XCJvbkxlYXZlXCJcbiAgPlxuICAgIDxsaVxuICAgICAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGNvbXB1dGVkTGlzdFwiXG4gICAgICA6a2V5PVwiaXRlbS5tc2dcIlxuICAgICAgOmRhdGEtaW5kZXg9XCJpbmRleFwiXG4gICAgPlxuICAgICAge3sgaXRlbS5tc2cgfX1cbiAgICA8L2xpPlxuICA8L1RyYW5zaXRpb25Hcm91cD5cbjwvdGVtcGxhdGU+XG4iLCJpbXBvcnQtbWFwLmpzb24iOiJ7XG4gIFwiaW1wb3J0c1wiOiB7XG4gICAgXCJnc2FwXCI6IFwiaHR0cHM6Ly91bnBrZy5jb20vZ3NhcD9tb2R1bGVcIixcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiXG4gIH1cbn0ifQ==" target="_blank" rel="noopener noreferrer">在演练场中查看完整示例</a></p></div><div class="options-api"><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdD5cbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5cbmNvbnN0IGxpc3QgPSBbXG4gIHsgbXNnOiAnQnJ1Y2UgTGVlJyB9LFxuICB7IG1zZzogJ0phY2tpZSBDaGFuJyB9LFxuICB7IG1zZzogJ0NodWNrIE5vcnJpcycgfSxcbiAgeyBtc2c6ICdKZXQgTGknIH0sXG4gIHsgbXNnOiAnS3VuZyBGdXJ5JyB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlcnk6ICcnXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkTGlzdCgpIHtcbiAgICAgIHJldHVybiBsaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5tc2cudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnF1ZXJ5KSlcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkJlZm9yZUVudGVyKGVsKSB7XG4gICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gMFxuICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gMFxuICAgIH0sXG4gICAgb25FbnRlcihlbCwgZG9uZSkge1xuICAgICAgZ3NhcC50byhlbCwge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBoZWlnaHQ6ICcxLjZlbScsXG4gICAgICAgIGRlbGF5OiBlbC5kYXRhc2V0LmluZGV4ICogMC4xNSxcbiAgICAgICAgb25Db21wbGV0ZTogZG9uZVxuICAgICAgfSlcbiAgICB9LFxuICAgIG9uTGVhdmUoZWwsIGRvbmUpIHtcbiAgICAgIGdzYXAudG8oZWwsIHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBkZWxheTogZWwuZGF0YXNldC5pbmRleCAqIDAuMTUsXG4gICAgICAgIG9uQ29tcGxldGU6IGRvbmVcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8aW5wdXQgdi1tb2RlbD1cInF1ZXJ5XCIgLz5cbiAgPFRyYW5zaXRpb25Hcm91cFxuICAgIHRhZz1cInVsXCJcbiAgICA6Y3NzPVwiZmFsc2VcIlxuICAgIEBiZWZvcmUtZW50ZXI9XCJvbkJlZm9yZUVudGVyXCJcbiAgICBAZW50ZXI9XCJvbkVudGVyXCJcbiAgICBAbGVhdmU9XCJvbkxlYXZlXCJcbiAgPlxuICAgIDxsaVxuICAgICAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGNvbXB1dGVkTGlzdFwiXG4gICAgICA6a2V5PVwiaXRlbS5tc2dcIlxuICAgICAgOmRhdGEtaW5kZXg9XCJpbmRleFwiXG4gICAgPlxuICAgICAge3sgaXRlbS5tc2cgfX1cbiAgICA8L2xpPlxuICA8L1RyYW5zaXRpb25Hcm91cD5cbjwvdGVtcGxhdGU+XG4iLCJpbXBvcnQtbWFwLmpzb24iOiJ7XG4gIFwiaW1wb3J0c1wiOiB7XG4gICAgXCJnc2FwXCI6IFwiaHR0cHM6Ly91bnBrZy5jb20vZ3NhcD9tb2R1bGVcIixcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiXG4gIH1cbn0ifQ==" target="_blank" rel="noopener noreferrer">在演练场中查看完整示例</a></p></div><hr><p><strong>参考</strong></p><ul><li><a href="/vue3/api/built-in-components.html#transitiongroup"><code>&lt;TransitionGroup&gt;</code> API 参考</a></li></ul>',5),x='{"title":"TransitionGroup·过渡组","description":"","frontmatter":{},"headers":[{"level":2,"title":"和 <Transition> 的区别","slug":"differences-from-transition"},{"level":2,"title":"进入 / 离开过渡","slug":"enter-leave-transitions"},{"level":2,"title":"移动过渡","slug":"move-transitions"},{"level":2,"title":"交错的列表过渡","slug":"staggering-list-transitions"}],"relativePath":"guide/built-ins/transition-group.md"}',V={},f=Object.assign(V,{setup:s=>(s,l)=>(n(),a("div",null,[v,p(I),m,p(u),Z,p(X),B]))});export{x as __pageData,f as default};
