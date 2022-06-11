import{_ as s,c as a,o as e,a as n}from"./app.be9c8b40.js";const l='{"title":"安全","description":"","frontmatter":{},"headers":[{"level":2,"title":"报告漏洞","slug":"reporting-vulnerabilities"},{"level":2,"title":"首要规则：不要使用无法信赖的模板","slug":"rule-no-1-never-use-non-trusted-templates"},{"level":2,"title":"Vue 如何保护你","slug":"what-vue-does-to-protect-you"},{"level":3,"title":"HTML 内容","slug":"html-content"},{"level":3,"title":"Attribute 绑定","slug":"attribute-bindings"},{"level":2,"title":"潜在的危险","slug":"potential-dangers"},{"level":3,"title":"注入 HTML","slug":"injecting-html"},{"level":3,"title":"注入 URL","slug":"injecting-urls"},{"level":3,"title":"注入样式","slug":"injecting-styles"},{"level":3,"title":"注入 JavaScript","slug":"injecting-javascript"},{"level":2,"title":"最佳实践","slug":"best-practices"},{"level":2,"title":"后端协调","slug":"backend-coordination"},{"level":2,"title":"服务端渲染 (SSR)","slug":"server-side-rendering-ssr"}],"relativePath":"guide/best-practices/security.md"}',p={},t=[n('<h1 id="security" tabindex="-1">安全 <a class="header-anchor" href="#security" aria-hidden="true">#</a></h1><h2 id="reporting-vulnerabilities" tabindex="-1">报告漏洞 <a class="header-anchor" href="#reporting-vulnerabilities" aria-hidden="true">#</a></h2><p>当一个漏洞被上报时，它会立刻成为我们最关心的问题，会有全职的贡献者暂时搁置其他所有任务来解决这个问题。如需报告漏洞，请发送电子邮件至 <a href="mailto:security@vuejs.org">security@vuejs.org</a>。</p><p>虽然很少发现新的漏洞，但我们仍建议始终使用最新版本的 Vue 及其官方配套库，以确保你的应用尽可能地安全。</p><h2 id="rule-no-1-never-use-non-trusted-templates" tabindex="-1">首要规则：不要使用无法信赖的模板 <a class="header-anchor" href="#rule-no-1-never-use-non-trusted-templates" aria-hidden="true">#</a></h2><p>使用 Vue 时最基本的安全规则就是<strong>不要将无法信赖的内容作为你的组件模板</strong>。使用无法信赖的模板相当于允许任意的 JavaScript 在你的应用中执行。更糟糕的是，如果在服务端渲染时执行了这些代码，可能会导致服务器被攻击。举个例子：</p><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">&lt;div&gt;</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> userProvidedString </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">&lt;/div&gt;</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 永远不要这样做！</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p>Vue 模板会被编译成 JavaScript，而模板内的表达式将作为渲染过程的一部分被执行。尽管这些表达式在特定的渲染环境中执行，但由于全局执行环境的复杂性，Vue 作为一个开发框架，要完全避免潜在的恶意代码执行而不产生不切实际的性能开销是不现实的。避免这类问题最直接的方法是确保你的 Vue 模板始终是可信的，并且完全由你控制。</p><h2 id="what-vue-does-to-protect-you" tabindex="-1">Vue 如何保护你 <a class="header-anchor" href="#what-vue-does-to-protect-you" aria-hidden="true">#</a></h2><h3 id="html-content" tabindex="-1">HTML 内容 <a class="header-anchor" href="#html-content" aria-hidden="true">#</a></h3><p>无论是使用模板还是渲染函数，内容都是自动转义的。这意味着在这个模板中：</p><div class="language-vue-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> userProvidedString </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>如果 <code>userProvidedString</code> 包含了：</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;script&gt;alert(&quot;hi&quot;)&lt;/script&gt;</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span></code></pre></div><p>那么它将被转义为如下的 HTML：</p><div class="language-vue-html"><pre><code><span class="line"><span style="color:#A6ACCD;">&amp;lt;script&amp;gt;alert(&amp;quot;hi&amp;quot;)&amp;lt;/script&amp;gt;</span></span>\n<span class="line"></span></code></pre></div><p>从而防止脚本注入。这种转义是使用 <code>textContent</code> 这样的浏览器原生 API 完成的，所以只有当浏览器本身存在漏洞时，才会存在漏洞。</p><h3 id="attribute-bindings" tabindex="-1">Attribute 绑定 <a class="header-anchor" href="#attribute-bindings" aria-hidden="true">#</a></h3><p>同样地，动态 attribute 的绑定也会被自动转义。这意味着在这个模板中：</p><div class="language-vue-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">userProvidedString</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  hello</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>如果 <code>userProvidedString</code> 包含了：</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&quot; onclick=&quot;alert(</span><span style="color:#A6ACCD;">\\&#39;</span><span style="color:#C3E88D;">hi</span><span style="color:#A6ACCD;">\\&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span></code></pre></div><p>那么它将被转义为如下的 HTML：</p><div class="language-vue-html"><pre><code><span class="line"><span style="color:#A6ACCD;">&amp;quot; onclick=&amp;quot;alert(&#39;hi&#39;)</span></span>\n<span class="line"></span></code></pre></div><p>从而防止在 <code>title</code> attribute 解析时，注入任意的 HTML。这种转义是使用 <code>setAttribute</code> 这样的浏览器原生 API 完成的，所以只有当浏览器本身存在漏洞时，才会存在漏洞。</p><h2 id="potential-dangers" tabindex="-1">潜在的危险 <a class="header-anchor" href="#potential-dangers" aria-hidden="true">#</a></h2><p>在任何 Web 应用中，允许以 HTML、CSS 或 JavaScript 形式执行未经无害化处理的、用户提供的内容都有潜在的安全隐患，因此应尽可能避免。不过有时候一些风险或许是可以接受的。</p><p>例如，像 CodePen 和 JSFiddle 这样的服务允许执行用户提供的内容，但这是在 iframe 这样一个可预期的沙盒环境中。当一个重要的功能本身会伴随某种程度的漏洞时，就需要你自行权衡该功能的重要性和该漏洞所带来的最坏情况。</p><h3 id="injecting-html" tabindex="-1">注入 HTML <a class="header-anchor" href="#injecting-html" aria-hidden="true">#</a></h3><p>我们现在已经知道 Vue 会自动转义 HTML 内容，防止你意外地将可执行的 HTML 注入到你的应用中。然而，在你知道 HTML 安全的情况下，你还是可以显式地渲染 HTML 内容。</p><ul><li><p>使用模板：</p><div class="language-vue-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-html</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">userProvidedHtml</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div></li><li><p>使用渲染函数：</p><div class="language-js"><pre><code><span class="line"><span style="color:#82AAFF;">h</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">innerHTML</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">userProvidedHtml</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div></li><li><p>以 JSX 形式使用渲染函数：</p><div class="language-jsx"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">innerHTML</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">userProvidedHtml</span><span style="color:#89DDFF;">}&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请注意，用户提供的 HTML 永远不能被认为是 100% 安全的，除非它在 iframe 这样的沙盒环境中，或者在某个只有编写了该 HTML 的用户才能看到的地方。此外，允许用户编写自己的 Vue 模板也会带来类似的危险。</p></div><h3 id="injecting-urls" tabindex="-1">注入 URL <a class="header-anchor" href="#injecting-urls" aria-hidden="true">#</a></h3><p>在这样一个使用 URL 的场景中：</p><div class="language-vue-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">userProvidedUrl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  click me</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>如果这个 URL 允许通过 <code>javascript:</code> 执行 JavaScript，即没有进行无害化处理，那么就会有一些潜在的安全问题。可以使用一些库来解决此类问题，比如 <a href="https://www.npmjs.com/package/@braintree/sanitize-url" target="_blank" rel="noopener noreferrer">sanitize-url</a>，但请注意：</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果你只是在前端做了 URL 无害化处理，那么这个安全问题还没有彻底根除。用户提供的 URL 还应在被保存到数据库之前在后端无害化处理。这样，连接到你 API 的<em>每一个</em>客户端都可以避免这个问题，包括原生移动应用。另外，即使是经过无害化处理的 URL，Vue 也不能保证它们指向安全的目的地。</p></div><h3 id="injecting-styles" tabindex="-1">注入样式 <a class="header-anchor" href="#injecting-styles" aria-hidden="true">#</a></h3><p>我们来看这样一个例子：</p><div class="language-vue-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span></span>\n<span class="line"><span style="color:#89DDFF;">  :</span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">sanitizedUrl</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  :</span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">userProvidedStyles</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  click me</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>我们假设 <code>sanitizedUrl</code> 已进行无害化处理，它是一个正常 URL 而非 JavaScript。然而，由于 <code>userProvidedStyles</code> 的存在，恶意用户仍然能利用 CSS 进行“点击劫持”，例如，可以在“登录”按钮上方覆盖一个透明的链接。如果用户控制的页面 <code>https://user-controlled-website.com/</code> 专门仿造了你应用的登录页，那么他们就有可能捕获用户的真实登录信息。</p><p>你可以想象，如果允许在 <code>&lt;style&gt;</code> 元素中插入用户提供的内容，会造成更大的漏洞，因为这使得用户能控制整个页面的样式。因此 Vue 阻止了在模板中像这样渲染 style 标签：</p><div class="language-vue-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> userProvidedStyles </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>为了避免用户的点击被劫持，我们建议仅在沙盒环境的 iframe 中允许用户控制 CSS。或者，当用户控制样式绑定时，我们建议使用其<a href="/vue3/guide/essentials/class-and-style.html#object-syntax-2">对象值形式</a>并仅允许用户提供能够安全控制的、特定的 property，就像这样：</p><div class="language-vue-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span></span>\n<span class="line"><span style="color:#89DDFF;">  :</span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">sanitizedUrl</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  :</span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">: </span><span style="color:#A6ACCD;">userProvidedColor</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#F07178;">background</span><span style="color:#89DDFF;">: </span><span style="color:#A6ACCD;">userProvidedBackground</span></span>\n<span class="line"><span style="color:#89DDFF;">  }</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  click me</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h3 id="injecting-javascript" tabindex="-1">注入 JavaScript <a class="header-anchor" href="#injecting-javascript" aria-hidden="true">#</a></h3><p>我们强烈建议任何时候都不要在 Vue 中渲染 <code>&lt;script&gt;</code>，因为模板和渲染函数不应有其他副作用。但是，渲染 <code>&lt;script&gt;</code> 并不是插入在运行时执行的 JavaScript 字符串的唯一方法。</p><p>每个 HTML 元素都有能接受字符串形式 JavaScript 的 attribute，例如 <code>onclick</code>、<code>onfocus</code> 和 <code>onmouseenter</code>。绑定任何用户提供的 JavaScript 给这些事件 attribute 都具有潜在风险，因此需要避免这么做。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请注意，用户提供的 JavaScript 永远不能被认为是 100% 安全的，除非它在 iframe 这样的沙盒环境中，或者在某个只有编写了该 JavaScript 的用户才能看到的地方。</p></div><p>有时我们会收到漏洞报告，说在 Vue 模板中可以进行跨站脚本攻击 (XSS)。一般来说，我们不认为这种情况是真正的漏洞，因为没有切实可行的方法，能够在以下两种场景中保护开发者不受 XSS 的影响。</p><ol><li><p>开发者显式地将用户提供的、未经无害化处理的内容作为 Vue 模板渲染。这本身就是不安全的，Vue 也无从溯源。</p></li><li><p>开发者将 Vue 挂载到可能包含服务端渲染或用户提供内容的 HTML 页面上，这与 #1 的问题基本相同，但有时开发者可能会不知不觉地这样做。攻击者提供的 HTML 可能在普通 HTML 中是安全的，但在 Vue 模板中是不安全的，这就会导致漏洞。最佳实践是：不要将 Vue 挂载到可能包含服务端渲染或用户提供内容的 DOM 节点上。</p></li></ol><h2 id="best-practices" tabindex="-1">最佳实践 <a class="header-anchor" href="#best-practices" aria-hidden="true">#</a></h2><p>最基本的规则就是只要你允许执行未经无害化处理的、用户提供的内容 (无论是 HTML、JavaScript 还是 CSS)，你就可能面临攻击。无论是使用 Vue、其他框架，或是不使用框架，道理都是一样的。</p><p>除了上面为处理<a href="#potential-dangers">潜在危险</a>提供的建议，我们也建议你熟读下面这些资源：</p><ul><li><a href="https://html5sec.org/" target="_blank" rel="noopener noreferrer">HTML5 安全手册</a></li><li><a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer">OWASP 的跨站脚本攻击 (XSS) 防护手册</a></li></ul><p>接着你可以利用学到的知识，来审查依赖项的源代码，看看是否有潜在的危险，防止它们中的任何一个以第三方组件或其他方式影响 DOM 渲染的内容。</p><h2 id="backend-coordination" tabindex="-1">后端协调 <a class="header-anchor" href="#backend-coordination" aria-hidden="true">#</a></h2><p>类似跨站请求伪造 (CSRF/XSRF) 和跨站脚本引入 (XSSI) 这样的 HTTP 安全漏洞，主要由后端负责处理，因此不是 Vue 应该考虑的问题。但是，你应该与后端团队保持沟通，了解如何更好地与后端 API 进行交互，例如在提交表单时携带 CSRF 令牌。</p><h2 id="server-side-rendering-ssr" tabindex="-1">服务端渲染 (SSR) <a class="header-anchor" href="#server-side-rendering-ssr" aria-hidden="true">#</a></h2><p>在使用 SSR 时还有一些其他的安全注意事项，因此请确保遵循我们的 <a href="/vue3/guide/scaling-up/ssr.html">SSR 文档</a>给出的最佳实践来避免产生漏洞。</p>',60)];var o=s(p,[["render",function(s,n,l,p,o,r){return e(),a("div",null,t)}]]);export{l as __pageData,o as default};
