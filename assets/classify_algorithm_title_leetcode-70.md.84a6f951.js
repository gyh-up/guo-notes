import{_ as s,c as n,o as a,a as l}from"./app.f8902c75.js";const F=JSON.parse('{"title":"\u95EE\u9898\uFF1A\u722C\u697C\u68AF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65B9\u6CD5\u4E00\uFF1A\u9012\u5F52\u6CD5","slug":"\u65B9\u6CD5\u4E00\uFF1A\u9012\u5F52\u6CD5","link":"#\u65B9\u6CD5\u4E00\uFF1A\u9012\u5F52\u6CD5","children":[]},{"level":2,"title":"*\u65B9\u6CD5\u4E8C\uFF1A\u81EA\u4E0B\u800C\u4E0A\u5FAA\u73AF\u8BA1\u7B97","slug":"\u65B9\u6CD5\u4E8C\uFF1A\u81EA\u4E0B\u800C\u4E0A\u5FAA\u73AF\u8BA1\u7B97","link":"#\u65B9\u6CD5\u4E8C\uFF1A\u81EA\u4E0B\u800C\u4E0A\u5FAA\u73AF\u8BA1\u7B97","children":[]}],"relativePath":"classify/algorithm/title/leetcode-70.md","lastUpdated":1667839623000}'),p={name:"classify/algorithm/title/leetcode-70.md"},o=l(`<h1 id="\u95EE\u9898\uFF1A\u722C\u697C\u68AF" tabindex="-1">\u95EE\u9898\uFF1A\u722C\u697C\u68AF <a class="header-anchor" href="#\u95EE\u9898\uFF1A\u722C\u697C\u68AF" aria-hidden="true">#</a></h1><p><a href="/guo-notes/classify/algorithm/\u7B97\u6CD5-\u9012\u5F52.html">\u9012\u5F52</a> | <a href="/guo-notes/classify/algorithm/\u7B97\u6CD5-\u52A8\u6001\u89C4\u5212.html">\u52A8\u6001\u89C4\u5212</a> | <a href="/guo-notes/classify/algorithm/\u6570\u5B66-\u6590\u6CE2\u90A3\u5951\u6570\u5217.html">\u6590\u6CE2\u90A3\u5951\u6570\u5217</a></p><p>\u5047\u8BBE\u4F60\u6B63\u5728\u722C\u697C\u68AF\u3002\u9700\u8981 n \u9636\u4F60\u624D\u80FD\u5230\u8FBE\u697C\u9876\u3002 \u6BCF\u6B21\u4F60\u53EF\u4EE5\u722C 1 \u6216 2 \u4E2A\u53F0\u9636\u3002\u4F60\u6709\u591A\u5C11\u79CD\u4E0D\u540C\u7684\u65B9\u6CD5\u53EF\u4EE5\u722C\u5230\u697C\u9876\u5462\uFF1F</p><p><strong>\u793A\u4F8B 1\uFF1A</strong></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1An = 2</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A2</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u91CA\uFF1A\u6709\u4E24\u79CD\u65B9\u6CD5\u53EF\u4EE5\u722C\u5230\u697C\u9876\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">1. 1 \u9636 + 1 \u9636</span></span>
<span class="line"><span style="color:#A6ACCD;">2. 2 \u9636</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1An = 3</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A3</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u91CA\uFF1A\u6709\u4E09\u79CD\u65B9\u6CD5\u53EF\u4EE5\u722C\u5230\u697C\u9876\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">1. 1 \u9636 + 1 \u9636 + 1 \u9636</span></span>
<span class="line"><span style="color:#A6ACCD;">2. 1 \u9636 + 2 \u9636</span></span>
<span class="line"><span style="color:#A6ACCD;">3. 2 \u9636 + 1 \u9636</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u63D0\u793A\uFF1A 1 &lt;= n &lt;= 45</p><h2 id="\u65B9\u6CD5\u4E00\uFF1A\u9012\u5F52\u6CD5" tabindex="-1">\u65B9\u6CD5\u4E00\uFF1A\u9012\u5F52\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5\u4E00\uFF1A\u9012\u5F52\u6CD5" aria-hidden="true">#</a></h2><p>\u6839\u636E <code>f(n) = f(n-1) + f(n-2)</code>\uFF0C\u4E5F\u5C31\u662F\u6590\u6CE2\u90A3\u5951\u6570\u5217\u3002</p><p>\u5B9A\u4E49\u4E00\u4E2A <code>map</code>\u8868\u6765\u8BB0\u5F55\u5DF2\u7ECF\u8BA1\u7B97\u51FA\u6765\u7684 <code>f(n)</code> \u5BF9\u5E94\u7684\u503C\uFF0C\u51CF\u5C11\u7B97\u6CD5\u7684\u8BA1\u7B97\u91CF\uFF0C\u51CF\u4F4E\u590D\u6742\u5EA6</p><p>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1A<code>O(n)</code></p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> numberMap </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u5B58\u50A8\u5DF2\u7ECF\u8BA1\u7B97\u51FA\u6765\u7684\u6570\u503C\uFF0C\u51CF\u5C11\u8BA1\u7B97\u6B21\u6570</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">climbStairs</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	numberMap </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(map[</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">climb</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u9012\u5F52\u51FD\u6570</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">climb</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> n</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> numberMap</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> numberMap</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		result </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">climb</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">climb</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		numberMap</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> result</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> result</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u65B9\u6CD5\u4E8C\uFF1A\u81EA\u4E0B\u800C\u4E0A\u5FAA\u73AF\u8BA1\u7B97" tabindex="-1">*\u65B9\u6CD5\u4E8C\uFF1A\u81EA\u4E0B\u800C\u4E0A\u5FAA\u73AF\u8BA1\u7B97 <a class="header-anchor" href="#\u65B9\u6CD5\u4E8C\uFF1A\u81EA\u4E0B\u800C\u4E0A\u5FAA\u73AF\u8BA1\u7B97" aria-hidden="true">#</a></h2><p>\u4E5F\u5C31\u662F\u52A8\u6001\u89C4\u5212</p><p>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1A<code>O(n)</code></p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">climbStairs</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> n</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> b</span></span>
<span class="line"><span style="color:#A6ACCD;">		b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> c</span></span>
<span class="line"><span style="color:#A6ACCD;">		c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> c</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,17),e=[o];function r(c,t,D,C,A,y){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{F as __pageData,b as default};
