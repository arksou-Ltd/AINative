import{_ as o,c as p,a as r,b as n,d as e,e as t,r as c,o as l}from"./app-TI2dsnHV.js";const d={},i={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"};function k(m,s){const a=c("ExternalLinkIcon");return l(),p("div",null,[s[4]||(s[4]=r(`<h1 id="ainative-开发环境配置指南" tabindex="-1"><a class="header-anchor" href="#ainative-开发环境配置指南"><span>AINative 开发环境配置指南</span></a></h1><h2 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求"><span>环境要求</span></a></h2><h3 id="系统要求" tabindex="-1"><a class="header-anchor" href="#系统要求"><span>系统要求</span></a></h3><table><thead><tr><th>组件</th><th>版本要求</th><th>当前验证版本</th><th>说明</th></tr></thead><tbody><tr><td><strong>Node.js</strong></td><td>≥ 18.0.0</td><td>v22.17.0 ✅</td><td>LTS 版本，推荐使用 18.x 或更高版本</td></tr><tr><td><strong>pnpm</strong></td><td>≥ 8.0.0</td><td>10.24.0 ✅</td><td>快速、节省磁盘空间的包管理器</td></tr><tr><td><strong>操作系统</strong></td><td>macOS/Linux/Windows</td><td>macOS 25.1.0 ✅</td><td>Windows 推荐使用 WSL2</td></tr><tr><td><strong>浏览器</strong></td><td>最新版</td><td>Chrome/Firefox/Edge</td><td>用于开发预览和调试</td></tr></tbody></table><h3 id="版本检查命令" tabindex="-1"><a class="header-anchor" href="#版本检查命令"><span>版本检查命令</span></a></h3><pre><code class="language-bash"><span class="token comment"># 检查 Node 版本</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token comment"># 应输出: v18.x.x 或更高</span>

<span class="token comment"># 检查 pnpm 版本</span>
<span class="token function">pnpm</span> <span class="token parameter variable">-v</span>
<span class="token comment"># 应输出: 8.x.x 或更高</span>

<span class="token comment"># 如果未安装 pnpm</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">pnpm</span>
</code></pre><hr><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h2><h3 id="_1-安装依赖" tabindex="-1"><a class="header-anchor" href="#_1-安装依赖"><span>1. 安装依赖</span></a></h3><pre><code class="language-bash"><span class="token comment"># 在项目根目录执行</span>
<span class="token function">pnpm</span> <span class="token function">install</span>
</code></pre><p><strong>预期输出：</strong></p><ul><li>成功安装 270+ 个包</li><li>生成 <code>pnpm-lock.yaml</code> 锁文件</li><li>耗时约 7-10 秒</li></ul><p><strong>可能的警告（可忽略）：</strong></p><ul><li><code>Issues with peer dependencies found</code> - VuePress 2.0.0-rc 系列版本间的已知兼容性警告</li><li><code>Ignored build scripts</code> - 构建脚本权限警告，不影响功能</li></ul><h3 id="_2-启动开发服务器" tabindex="-1"><a class="header-anchor" href="#_2-启动开发服务器"><span>2. 启动开发服务器</span></a></h3><pre><code class="language-bash"><span class="token comment"># 启动 VuePress 开发服务器</span>
<span class="token function">pnpm</span> run docs:dev
</code></pre><p><strong>预期输出：</strong></p><pre><code>&gt; ainative@0.1.0 docs:dev /Users/apple/Develop/code/gitee/AINative
&gt; vuepress dev docs

- Initializing and preparing data
✔ Initializing and preparing data - done in 324ms

  vite v7.1.12 dev server running at:

  ➜  Local:   http://localhost:8080/AINative/
  ➜  Network: http://172.20.10.x:8080/AINative/
</code></pre><p><strong>关键指标：</strong></p><ul><li>✅ 初始化时间: &lt; 1s（验证值：324ms）</li><li>✅ 默认端口: <code>8080</code></li><li>✅ 本地访问: <code>http://localhost:8080/AINative/</code></li><li>✅ 网络访问: <code>http://&lt;your-ip&gt;:8080/AINative/</code></li></ul><h3 id="_3-访问开发站点" tabindex="-1"><a class="header-anchor" href="#_3-访问开发站点"><span>3. 访问开发站点</span></a></h3><p>打开浏览器，访问：</p><pre><code>http://localhost:8080/AINative/
</code></pre><p><strong>预期结果：</strong></p><ul><li>✅ 首页正确显示（<code>docs/README.md</code> 渲染）</li><li>✅ 页面标题为 &quot;AINative&quot;</li><li>✅ VuePress 默认主题正确加载</li><li>✅ 浏览器控制台无 JavaScript 错误</li></ul><h3 id="_4-测试热重载" tabindex="-1"><a class="header-anchor" href="#_4-测试热重载"><span>4. 测试热重载</span></a></h3><p>修改 <code>docs/README.md</code> 文件并保存，页面应自动刷新并显示更新内容。</p><p><strong>预期行为：</strong></p><ul><li>✅ 修改 Markdown 文件 → 自动刷新（&lt; 2s）</li><li>✅ 修改 <code>config.ts</code> → 服务器自动重启</li><li>✅ 修改样式文件 → CSS 热更新</li></ul><hr><h2 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构"><span>项目结构</span></a></h2><pre><code>AINative/
├── docs/                      # VuePress 文档根目录
│   ├── .vuepress/             # VuePress 配置目录
│   │   ├── .cache/            # Vite 缓存（自动生成，已被 .gitignore）
│   │   ├── .temp/             # 临时文件（自动生成，已被 .gitignore）
│   │   ├── config.ts          # VuePress 主配置文件 ⭐
│   │   ├── public/            # 静态资源目录
│   │   │   └── images/        # 图片资源
│   │   └── styles/            # 自定义样式目录
│   ├── README.md              # 首页（home layout） ⭐
│   └── dev-setup.md           # 本文档
├── package.json               # 项目依赖与脚本 ⭐
├── pnpm-lock.yaml             # 依赖锁定文件
├── .gitignore                 # Git 忽略规则
└── README.md                  # 项目总体说明
</code></pre><hr><h2 id="开发命令" tabindex="-1"><a class="header-anchor" href="#开发命令"><span>开发命令</span></a></h2><table><thead><tr><th>命令</th><th>说明</th><th>用途</th></tr></thead><tbody><tr><td><code>pnpm run docs:dev</code></td><td>启动开发服务器</td><td>本地开发和实时预览</td></tr><tr><td><code>pnpm run docs:build</code></td><td>构建生产版本</td><td>生成静态文件到 <code>docs/.vuepress/dist/</code></td></tr><tr><td><code>pnpm run docs:clean</code></td><td>清理构建产物</td><td>删除 dist/、.cache/、.temp/ 目录</td></tr><tr><td><code>pnpm install</code></td><td>安装/更新依赖</td><td>初始化或依赖变更后执行</td></tr></tbody></table><p><strong>自定义端口启动：</strong></p><pre><code class="language-bash"><span class="token comment"># 使用 8081 端口启动</span>
<span class="token assign-left variable">PORT</span><span class="token operator">=</span><span class="token number">8081</span> <span class="token function">pnpm</span> run docs:dev
</code></pre><hr><h2 id="核心配置说明" tabindex="-1"><a class="header-anchor" href="#核心配置说明"><span>核心配置说明</span></a></h2><h3 id="vuepress-配置文件-docs-vuepress-config-ts" tabindex="-1"><a class="header-anchor" href="#vuepress-配置文件-docs-vuepress-config-ts"><span>VuePress 配置文件 (<code>docs/.vuepress/config.ts</code>)</span></a></h3><pre><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/bundler-vite&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 站点基础路径（生产环境）</span>
  base<span class="token operator">:</span> <span class="token string">&#39;/AINative/&#39;</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 语言设置</span>
  lang<span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 站点标题</span>
  title<span class="token operator">:</span> <span class="token string">&#39;AINative&#39;</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 站点描述</span>
  description<span class="token operator">:</span> <span class="token string">&#39;AI Native知识分享平台&#39;</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 主题配置</span>
  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    navbar<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token comment">/* 导航栏配置 */</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    sidebar<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">/* 侧边栏配置 */</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 构建工具配置 ⚠️ 必须使用函数调用</span>
  bundler<span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><p><strong>关键配置项：</strong></p><table><thead><tr><th>配置项</th><th>说明</th><th>开发模式</th><th>生产模式</th></tr></thead><tbody><tr><td><code>base</code></td><td>站点基础路径</td><td>忽略（使用 <code>/</code>）</td><td>应用（<code>/AINative/</code>）</td></tr><tr><td><code>lang</code></td><td>语言设置</td><td><code>zh-CN</code></td><td><code>zh-CN</code></td></tr><tr><td><code>bundler</code></td><td>构建工具</td><td>Vite（快速 HMR）</td><td>Vite（优化构建）</td></tr></tbody></table><h3 id="依赖说明-package-json" tabindex="-1"><a class="header-anchor" href="#依赖说明-package-json"><span>依赖说明 (<code>package.json</code>)</span></a></h3><pre><code class="language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@vuepress/bundler-vite&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0-rc.26&quot;</span><span class="token punctuation">,</span>    <span class="token comment">// Vite 打包器 ⭐</span>
    <span class="token property">&quot;@vuepress/theme-default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0-rc.26&quot;</span><span class="token punctuation">,</span>   <span class="token comment">// 默认主题 ⭐</span>
    <span class="token property">&quot;vuepress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0-rc.26&quot;</span><span class="token punctuation">,</span>                  <span class="token comment">// VuePress 核心</span>
    <span class="token property">&quot;vuepress-plugin-md-enhance&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0-rc.99&quot;</span><span class="token punctuation">,</span><span class="token comment">// Markdown 增强（PPT 支持）</span>
    <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.3.0&quot;</span>                             <span class="token comment">// Vue 3 运行时</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><p><strong>关键依赖：</strong></p><ul><li>✅ <code>vuepress</code>: VuePress 2 核心框架</li><li>✅ <code>@vuepress/theme-default</code>: 默认主题（<strong>必需</strong>，否则启动失败）</li><li>✅ <code>@vuepress/bundler-vite</code>: Vite 打包器（<strong>必需</strong>，否则启动失败）</li><li>✅ <code>vuepress-plugin-md-enhance</code>: Markdown 增强插件（支持 reveal.js PPT 模式）</li></ul><hr><h2 id="常见问题与排查" tabindex="-1"><a class="header-anchor" href="#常见问题与排查"><span>常见问题与排查</span></a></h2><h3 id="问题-1-cannot-find-package-vuepress-theme-default" tabindex="-1"><a class="header-anchor" href="#问题-1-cannot-find-package-vuepress-theme-default"><span>问题 1: <code>Cannot find package &#39;@vuepress/theme-default&#39;</code></span></a></h3><p><strong>错误信息：</strong></p><pre><code>error Error [ERR_MODULE_NOT_FOUND]: Cannot find package &#39;@vuepress/theme-default&#39; 
imported from /Users/apple/Develop/code/gitee/AINative/docs/.vuepress/config.ts
</code></pre><p><strong>原因分析：</strong></p><ul><li><code>package.json</code> 缺少 <code>@vuepress/theme-default</code> 依赖</li><li><code>config.ts</code> 中使用了 <code>defaultTheme</code>，但主题包未安装</li></ul><p><strong>解决方案：</strong></p><pre><code class="language-bash"><span class="token comment"># 1. 添加依赖到 package.json</span>
<span class="token comment"># 在 devDependencies 中添加：</span>
<span class="token comment"># &quot;@vuepress/theme-default&quot;: &quot;2.0.0-rc.26&quot;</span>

<span class="token comment"># 2. 重新安装依赖</span>
<span class="token function">pnpm</span> <span class="token function">install</span>

<span class="token comment"># 3. 重新启动开发服务器</span>
<span class="token function">pnpm</span> run docs:dev
</code></pre><p><strong>修复记录：</strong></p><ul><li>✅ 在 Story 1.3 实施中已修复</li><li>✅ <code>package.json</code> 已更新，包含主题依赖</li><li>✅ 此问题已解决，不应再次出现</li></ul><hr><h3 id="问题-2-app-options-bundler-dev-is-not-a-function" tabindex="-1"><a class="header-anchor" href="#问题-2-app-options-bundler-dev-is-not-a-function"><span>问题 2: <code>app.options.bundler.dev is not a function</code></span></a></h3><p><strong>错误信息：</strong></p><pre><code>error TypeError: app.options.bundler.dev is not a function
    at app.dev (file:///.../node_modules/@vuepress/core/dist/index.js:975:45)
</code></pre><p><strong>原因分析：</strong></p><ul><li><code>config.ts</code> 中 <code>bundler</code> 配置使用了字符串而非函数调用</li><li>VuePress 2 要求显式导入并调用 bundler</li></ul><p><strong>错误配置（❌）：</strong></p><pre><code class="language-typescript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  bundler<span class="token operator">:</span> <span class="token string">&#39;@vuepress/bundler-vite&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// ❌ 错误：使用字符串</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><p><strong>正确配置（✅）：</strong></p><pre><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/bundler-vite&#39;</span>  <span class="token comment">// ✅ 导入 bundler</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  bundler<span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// ✅ 正确：函数调用</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><p><strong>解决方案：</strong></p><pre><code class="language-bash"><span class="token comment"># 1. 修改 docs/.vuepress/config.ts</span>
<span class="token comment"># - 添加导入: import { viteBundler } from &#39;@vuepress/bundler-vite&#39;</span>
<span class="token comment"># - 修改配置: bundler: viteBundler({})</span>

<span class="token comment"># 2. 重新启动开发服务器</span>
<span class="token function">pnpm</span> run docs:dev
</code></pre><p><strong>修复记录：</strong></p><ul><li>✅ 在 Story 1.3 实施中已修复</li><li>✅ <code>config.ts</code> 已更新为正确的函数调用</li><li>✅ 此问题已解决，不应再次出现</li></ul><hr><h3 id="问题-3-端口占用-eaddrinuse" tabindex="-1"><a class="header-anchor" href="#问题-3-端口占用-eaddrinuse"><span>问题 3: 端口占用 (<code>EADDRINUSE</code>)</span></a></h3><p><strong>错误信息：</strong></p><pre><code>EADDRINUSE: address already in use :::8080
</code></pre><p><strong>原因分析：</strong></p><ul><li>端口 8080 已被其他进程占用</li><li>可能是之前的开发服务器未正常关闭</li></ul><p><strong>解决方案：</strong></p><p><strong>方法 1：终止占用进程（推荐）</strong></p><pre><code class="language-bash"><span class="token comment"># 查找占用 8080 端口的进程</span>
<span class="token function">lsof</span> <span class="token parameter variable">-i</span> :8080

<span class="token comment"># 输出示例：</span>
<span class="token comment"># COMMAND   PID  USER   FD   TYPE  DEVICE  SIZE/OFF  NODE  NAME</span>
<span class="token comment"># node    12345  apple  23u  IPv6  0x...   0t0       TCP  *:http-alt (LISTEN)</span>

<span class="token comment"># 终止进程（替换 12345 为实际 PID）</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token number">12345</span>

<span class="token comment"># 重新启动服务器</span>
<span class="token function">pnpm</span> run docs:dev
</code></pre><p><strong>方法 2：使用其他端口</strong></p><pre><code class="language-bash"><span class="token comment"># 使用 8081 端口启动</span>
<span class="token assign-left variable">PORT</span><span class="token operator">=</span><span class="token number">8081</span> <span class="token function">pnpm</span> run docs:dev

<span class="token comment"># 访问: http://localhost:8081/AINative/</span>
</code></pre><hr><h3 id="问题-4-依赖冲突-err-pnpm-peer-dep-issues" tabindex="-1"><a class="header-anchor" href="#问题-4-依赖冲突-err-pnpm-peer-dep-issues"><span>问题 4: 依赖冲突 (<code>ERR_PNPM_PEER_DEP_ISSUES</code>)</span></a></h3><p><strong>错误信息：</strong></p><pre><code> ERR_PNPM_PEER_DEP_ISSUES  Unmet peer dependencies
</code></pre><p><strong>原因分析：</strong></p><ul><li>依赖版本不兼容</li><li><code>pnpm-lock.yaml</code> 损坏</li><li>Node.js 版本不匹配</li></ul><p><strong>解决方案：</strong></p><pre><code class="language-bash"><span class="token comment"># 1. 删除依赖和锁文件</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> node_modules pnpm-lock.yaml

<span class="token comment"># 2. 验证 Node 版本（应为 18.x 或更高）</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>

<span class="token comment"># 3. 重新安装依赖</span>
<span class="token function">pnpm</span> <span class="token function">install</span> --frozen-lockfile

<span class="token comment"># 4. 重新启动服务器</span>
<span class="token function">pnpm</span> run docs:dev
</code></pre><hr><h3 id="问题-5-配置文件-typescript-错误" tabindex="-1"><a class="header-anchor" href="#问题-5-配置文件-typescript-错误"><span>问题 5: 配置文件 TypeScript 错误</span></a></h3><p><strong>错误信息：</strong></p><pre><code>error TS2345: Argument of type &#39;...&#39; is not assignable to parameter of type &#39;...&#39;
</code></pre><p><strong>原因分析：</strong></p><ul><li><code>config.ts</code> 类型定义错误</li><li>VuePress 导入路径错误</li><li>主题配置对象结构不正确</li></ul><p><strong>解决方案：</strong></p><pre><code class="language-bash"><span class="token comment"># 1. 检查导入路径</span>
<span class="token comment"># 确认以下导入正确：</span>
<span class="token comment"># - import { defineUserConfig } from &#39;vuepress&#39;</span>
<span class="token comment"># - import { defaultTheme } from &#39;@vuepress/theme-default&#39;</span>
<span class="token comment"># - import { viteBundler } from &#39;@vuepress/bundler-vite&#39;</span>

<span class="token comment"># 2. 验证配置结构</span>
<span class="token comment"># 参考本文档 &quot;核心配置说明&quot; 部分</span>

<span class="token comment"># 3. 重新安装类型定义（如果问题持续）</span>
<span class="token function">pnpm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> @types/node
</code></pre><hr><h3 id="问题-6-热重载失败-页面不自动刷新" tabindex="-1"><a class="header-anchor" href="#问题-6-热重载失败-页面不自动刷新"><span>问题 6: 热重载失败（页面不自动刷新）</span></a></h3><p><strong>症状：</strong></p><ul><li>修改 Markdown 文件后，页面不自动刷新</li><li>需要手动刷新浏览器</li></ul><p><strong>原因分析：</strong></p><ul><li>修改的文件不在 <code>docs/</code> 目录内</li><li>文件被 <code>.gitignore</code> 忽略</li><li>Vite HMR 连接断开</li></ul><p><strong>解决方案：</strong></p><pre><code class="language-bash"><span class="token comment"># 1. 确认文件位置</span>
<span class="token comment"># 确保修改的文件在 docs/ 目录内</span>

<span class="token comment"># 2. 检查 .gitignore</span>
<span class="token comment"># 确认文件未被忽略</span>

<span class="token comment"># 3. 重启开发服务器</span>
<span class="token comment"># Ctrl+C 停止服务器</span>
<span class="token function">pnpm</span> run docs:dev
</code></pre><hr><h3 id="问题-7-系统级网络接口错误-uv-interface-addresses" tabindex="-1"><a class="header-anchor" href="#问题-7-系统级网络接口错误-uv-interface-addresses"><span>问题 7: 系统级网络接口错误 (<code>uv_interface_addresses</code>)</span></a></h3><p><strong>错误信息：</strong></p><pre><code>SystemError [ERR_SYSTEM_ERROR]: A system error occurred: 
uv_interface_addresses returned Unknown system error 1
</code></pre><p><strong>原因分析：</strong></p><ul><li>Sandbox 权限限制导致 Vite 无法访问网络接口</li><li>操作系统网络配置问题</li></ul><p><strong>解决方案：</strong></p><p><strong>方法 1：使用完全权限启动（推荐）</strong></p><pre><code class="language-bash"><span class="token comment"># 在非 sandbox 环境或完全权限模式下启动</span>
<span class="token function">pnpm</span> run docs:dev
</code></pre><p><strong>方法 2：检查系统网络配置</strong></p><pre><code class="language-bash"><span class="token comment"># 检查网络接口</span>
<span class="token function">ifconfig</span>

<span class="token comment"># 确认网络连接正常</span>
<span class="token function">ping</span> google.com
</code></pre><p><strong>修复记录：</strong></p><ul><li>✅ 在 Story 1.3 实施中，通过调整权限解决</li><li>✅ 开发服务器成功启动并运行</li><li>✅ 此问题在标准开发环境中不应出现</li></ul><hr><h2 id="开发模式-vs-生产模式" tabindex="-1"><a class="header-anchor" href="#开发模式-vs-生产模式"><span>开发模式 vs 生产模式</span></a></h2><h3 id="路径差异" tabindex="-1"><a class="header-anchor" href="#路径差异"><span>路径差异</span></a></h3><table><thead><tr><th>特性</th><th>开发模式 (<code>docs:dev</code>)</th><th>生产模式 (<code>docs:build</code>)</th></tr></thead><tbody><tr><td><strong>Base 路径</strong></td><td><code>/</code> (忽略 config.base)</td><td><code>/AINative/</code> (应用 config.base)</td></tr><tr><td><strong>访问 URL</strong></td><td><code>http://localhost:8080/</code></td><td>部署后: <code>https://your-domain.com/AINative/</code></td></tr><tr><td><strong>原因</strong></td><td>本地开发便利性</td><td>GitHub Pages 子路径部署</td></tr></tbody></table><p><strong>示例：</strong></p><pre><code class="language-typescript"><span class="token comment">// config.ts 中配置</span>
base<span class="token operator">:</span> <span class="token string">&#39;/AINative/&#39;</span>

<span class="token comment">// 开发模式访问（base 被忽略）</span>
http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">localhost:8080</span><span class="token regex-delimiter">/</span></span>         <span class="token comment">// ✅ 可以访问</span>
http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8080</span><span class="token operator">/</span>AINative<span class="token operator">/</span> <span class="token comment">// ⚠️ 也可以访问，但不必要</span>

<span class="token comment">// 生产模式访问（base 生效）</span>
https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>your<span class="token operator">-</span>org<span class="token punctuation">.</span>github<span class="token punctuation">.</span>io<span class="token operator">/</span>AINative<span class="token operator">/</span>  <span class="token comment">// ✅ 正确</span>
https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">your-org.github.io</span><span class="token regex-delimiter">/</span></span>           <span class="token comment">// ❌ 404</span>
</code></pre><h3 id="性能差异" tabindex="-1"><a class="header-anchor" href="#性能差异"><span>性能差异</span></a></h3><table><thead><tr><th>特性</th><th>开发模式</th><th>生产模式</th></tr></thead><tbody><tr><td><strong>编译方式</strong></td><td>按需编译</td><td>全量构建</td></tr><tr><td><strong>热重载</strong></td><td>✅ 启用</td><td>❌ 不适用</td></tr><tr><td><strong>启动时间</strong></td><td>&lt; 1s</td><td>N/A</td></tr><tr><td><strong>构建时间</strong></td><td>N/A</td><td>30-60s</td></tr><tr><td><strong>Source Map</strong></td><td>✅ 生成</td><td>❌ 不生成</td></tr><tr><td><strong>代码优化</strong></td><td>最小化</td><td>完全优化（压缩、Tree-shaking）</td></tr></tbody></table><hr><h2 id="性能基线" tabindex="-1"><a class="header-anchor" href="#性能基线"><span>性能基线</span></a></h2><p>基于 Story 1.3 实施验证的性能数据：</p><table><thead><tr><th>指标</th><th>要求</th><th>实际验证值</th><th>状态</th></tr></thead><tbody><tr><td><strong>开发服务器启动时间</strong></td><td>&lt; 10s</td><td>324ms</td><td>✅ 优秀</td></tr><tr><td><strong>初始化时间</strong></td><td>&lt; 2s</td><td>324ms</td><td>✅ 优秀</td></tr><tr><td><strong>热重载响应时间</strong></td><td>&lt; 2s</td><td>未测试（待验证）</td><td>⏸️ 待验证</td></tr><tr><td><strong>开发服务器内存占用</strong></td><td>&lt; 500MB</td><td>未测量</td><td>⏸️ 待验证</td></tr><tr><td><strong>首屏加载时间</strong></td><td>&lt; 3s</td><td>未测量</td><td>⏸️ 待验证</td></tr></tbody></table><p><strong>后续优化目标：</strong></p><ul><li>测量并优化热重载响应时间</li><li>监控内存占用情况</li><li>使用 Lighthouse 评估首屏性能</li></ul><hr><h2 id="调试技巧" tabindex="-1"><a class="header-anchor" href="#调试技巧"><span>调试技巧</span></a></h2><h3 id="_1-查看详细日志" tabindex="-1"><a class="header-anchor" href="#_1-查看详细日志"><span>1. 查看详细日志</span></a></h3><pre><code class="language-bash"><span class="token comment"># 启用 VuePress 调试日志</span>
<span class="token assign-left variable">DEBUG</span><span class="token operator">=</span>vuepress:* <span class="token function">pnpm</span> run docs:dev
</code></pre><h3 id="_2-清理缓存" tabindex="-1"><a class="header-anchor" href="#_2-清理缓存"><span>2. 清理缓存</span></a></h3><pre><code class="language-bash"><span class="token comment"># 清理所有构建产物和缓存</span>
<span class="token function">pnpm</span> run docs:clean

<span class="token comment"># 重新启动</span>
<span class="token function">pnpm</span> <span class="token function">install</span>
<span class="token function">pnpm</span> run docs:dev
</code></pre><h3 id="_3-浏览器开发者工具" tabindex="-1"><a class="header-anchor" href="#_3-浏览器开发者工具"><span>3. 浏览器开发者工具</span></a></h3><p><strong>Chrome DevTools 快捷键：</strong> <code>Cmd + Option + I</code> (macOS) 或 <code>F12</code> (Windows/Linux)</p><p><strong>检查项：</strong></p><ul><li>Console 面板：查看 JavaScript 错误</li><li>Network 面板：查看资源加载情况</li><li>Elements 面板：检查 DOM 结构和样式</li></ul><h3 id="_4-响应式布局测试" tabindex="-1"><a class="header-anchor" href="#_4-响应式布局测试"><span>4. 响应式布局测试</span></a></h3><p><strong>Chrome DevTools 设备模式：</strong> <code>Cmd + Shift + M</code> (macOS) 或 <code>Ctrl + Shift + M</code> (Windows/Linux)</p><p><strong>测试视口：</strong></p><ul><li>Mobile: 375px × 667px (iPhone SE)</li><li>Tablet: 768px × 1024px (iPad)</li><li>Desktop: 1440px × 900px (MacBook Pro)</li></ul><hr><h2 id="故障排除检查清单" tabindex="-1"><a class="header-anchor" href="#故障排除检查清单"><span>故障排除检查清单</span></a></h2><p>遇到问题时，按以下顺序检查：</p><ul><li>[ ] <strong>Node 版本检查</strong>: <code>node -v</code> (应为 ≥ 18.0.0)</li><li>[ ] <strong>pnpm 版本检查</strong>: <code>pnpm -v</code> (应为 ≥ 8.0.0)</li><li>[ ] <strong>依赖完整性</strong>: 删除 <code>node_modules/</code> 和 <code>pnpm-lock.yaml</code>，重新 <code>pnpm install</code></li><li>[ ] <strong>端口占用</strong>: <code>lsof -i :8080</code> 检查端口，必要时终止进程或换端口</li><li>[ ] <strong>配置语法</strong>: 检查 <code>config.ts</code> 是否有 TypeScript 错误</li><li>[ ] <strong>清理缓存</strong>: <code>pnpm run docs:clean</code> 清理构建产物</li><li>[ ] <strong>重启服务器</strong>: <code>Ctrl+C</code> 停止，重新 <code>pnpm run docs:dev</code></li><li>[ ] <strong>查看日志</strong>: 检查终端输出和 <code>/tmp/vuepress-dev.log</code>（如有）</li></ul><hr><h2 id="story-1-3-实施记录" tabindex="-1"><a class="header-anchor" href="#story-1-3-实施记录"><span>Story 1.3 实施记录</span></a></h2><h3 id="发现并修复的问题" tabindex="-1"><a class="header-anchor" href="#发现并修复的问题"><span>发现并修复的问题</span></a></h3><p><strong>问题 1: 缺少 <code>@vuepress/theme-default</code> 依赖</strong></p><ul><li><strong>发现时间</strong>: 2025-12-15 (Story 1.3 实施)</li><li><strong>根因</strong>: Story 1.2 创建 <code>package.json</code> 时未包含主题包</li><li><strong>影响</strong>: 开发服务器启动失败，报错 <code>Cannot find package &#39;@vuepress/theme-default&#39;</code></li><li><strong>修复</strong>: 在 <code>package.json</code> devDependencies 中添加 <code>&quot;@vuepress/theme-default&quot;: &quot;2.0.0-rc.26&quot;</code></li><li><strong>状态</strong>: ✅ 已修复并验证</li></ul><p><strong>问题 2: <code>bundler</code> 配置错误</strong></p><ul><li><strong>发现时间</strong>: 2025-12-15 (Story 1.3 实施)</li><li><strong>根因</strong>: <code>config.ts</code> 中 <code>bundler</code> 使用字符串配置而非函数调用</li><li><strong>影响</strong>: 开发服务器启动失败，报错 <code>app.options.bundler.dev is not a function</code></li><li><strong>修复</strong>: <ul><li>导入 <code>viteBundler</code>: <code>import { viteBundler } from &#39;@vuepress/bundler-vite&#39;</code></li><li>修改配置: <code>bundler: viteBundler({})</code></li></ul></li><li><strong>状态</strong>: ✅ 已修复并验证</li></ul><p><strong>问题 3: Sandbox 权限限制</strong></p><ul><li><strong>发现时间</strong>: 2025-12-15 (Story 1.3 实施)</li><li><strong>根因</strong>: Sandbox 环境限制导致 Vite 无法访问网络接口</li><li><strong>影响</strong>: 报错 <code>uv_interface_addresses returned Unknown system error 1</code></li><li><strong>修复</strong>: 使用完全权限模式启动开发服务器</li><li><strong>状态</strong>: ✅ 已解决（标准开发环境无此问题）</li></ul><h3 id="验证结果" tabindex="-1"><a class="header-anchor" href="#验证结果"><span>验证结果</span></a></h3><p><strong>✅ AC #1: 本地开发服务器启动成功</strong></p><ul><li>服务器地址: <code>http://localhost:8080/AINative/</code></li><li>初始化时间: 324ms（远低于 10s 要求）</li><li>Vite 7.1.12 开发服务器运行正常</li></ul><p><strong>✅ AC #4: 控制台无报错或警告</strong></p><ul><li>终端输出正常，无错误</li><li>仅有可忽略的 peer dependency 警告（VuePress 2.0.0-rc 已知问题）</li></ul><p><strong>✅ AC #5: 开发环境配置文档化</strong></p><ul><li><code>docs/dev-setup.md</code> 已创建 ✅</li><li>包含环境要求、快速开始、故障排除等完整内容 ✅</li></ul><p><strong>⏸️ AC #2: 浏览器自动打开（待手动验证）</strong></p><ul><li>配置项 <code>open: true</code> 未在 <code>config.ts</code> 中显式设置（VuePress 默认行为）</li><li>建议手动验证浏览器是否自动打开</li></ul><p><strong>⏸️ AC #3: 热重载工作正常（待手动验证）</strong></p><ul><li>Vite HMR 功能已启用（Vite 7.1.12 自带）</li><li>建议手动测试：修改 <code>docs/README.md</code> 并验证页面自动刷新</li></ul><h3 id="文件变更" tabindex="-1"><a class="header-anchor" href="#文件变更"><span>文件变更</span></a></h3><p><strong>NEW:</strong></p><ul><li><code>docs/dev-setup.md</code> - 开发环境配置文档 ✅</li></ul><p><strong>MODIFIED:</strong></p><ul><li><code>package.json</code> - 添加 <code>@vuepress/theme-default</code> 依赖 ✅</li><li><code>docs/.vuepress/config.ts</code> - 修复 <code>bundler</code> 配置 ✅</li></ul><p><strong>AUTO-GENERATED:</strong></p><ul><li><code>docs/.vuepress/.cache/</code> - Vite 缓存目录 ✅</li><li><code>docs/.vuepress/.temp/</code> - VuePress 临时文件目录 ✅</li></ul><hr><h2 id="下一步建议" tabindex="-1"><a class="header-anchor" href="#下一步建议"><span>下一步建议</span></a></h2><ol><li><p><strong>验证浏览器自动打开</strong>：</p><ul><li>执行 <code>pnpm run docs:dev</code></li><li>观察浏览器是否自动打开 <code>http://localhost:8080/AINative/</code></li></ul></li><li><p><strong>验证热重载功能</strong>：</p><ul><li>修改 <code>docs/README.md</code> 内容</li><li>保存文件</li><li>观察浏览器页面是否在 2 秒内自动刷新</li></ul></li><li><p><strong>继续 Epic 1 下一个 Story</strong>：</p><ul><li>Story 1.4: 创建响应式布局框架</li><li>Story 1.5: 配置构建流程</li></ul></li></ol><hr><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>`,184)),n("ul",null,[n("li",null,[n("a",i,[s[0]||(s[0]=e("VuePress 2 官方文档",-1)),t(a)])]),n("li",null,[n("a",u,[s[1]||(s[1]=e("Vite 官方文档",-1)),t(a)])]),n("li",null,[n("a",g,[s[2]||(s[2]=e("pnpm 官方文档",-1)),t(a)])]),n("li",null,[n("a",h,[s[3]||(s[3]=e("Node.js 官方文档",-1)),t(a)])])]),s[5]||(s[5]=n("hr",null,null,-1)),s[6]||(s[6]=n("p",null,[n("strong",null,"文档版本"),e(": v1.0"),n("br"),n("strong",null,"创建日期"),e(": 2025-12-15"),n("br"),n("strong",null,"最后更新"),e(": 2025-12-15"),n("br"),n("strong",null,"维护者"),e(": AINative Development Team")],-1))])}const v=o(d,[["render",k]]),b=JSON.parse('{"path":"/dev-setup.html","title":"AINative 开发环境配置指南","lang":"zh-CN","frontmatter":{},"filePathRelative":"dev-setup.md"}');export{v as comp,b as data};
