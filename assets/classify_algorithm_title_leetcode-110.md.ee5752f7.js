import{_ as s,c as n,o as a,a as l}from"./app.8b9870fe.js";const i=JSON.parse('{"title":"\u95EE\u9898\uFF1A\u5BF9\u79F0\u4E8C\u53C9\u6811","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65B9\u6CD5\u4E00\uFF1A\u81EA\u5E95\u5411\u4E0A\u7684\u9012\u5F52","slug":"\u65B9\u6CD5\u4E00\uFF1A\u81EA\u5E95\u5411\u4E0A\u7684\u9012\u5F52","link":"#\u65B9\u6CD5\u4E00\uFF1A\u81EA\u5E95\u5411\u4E0A\u7684\u9012\u5F52","children":[]},{"level":2,"title":"\u65B9\u6CD5\u4E8C\uFF1A\u81EA\u9876\u5411\u4E0B\u7684\u9012\u5F52","slug":"\u65B9\u6CD5\u4E8C\uFF1A\u81EA\u9876\u5411\u4E0B\u7684\u9012\u5F52","link":"#\u65B9\u6CD5\u4E8C\uFF1A\u81EA\u9876\u5411\u4E0B\u7684\u9012\u5F52","children":[]}],"relativePath":"classify/algorithm/title/leetcode-110.md","lastUpdated":1669291316000}'),p={name:"classify/algorithm/title/leetcode-110.md"},o=l(`<h1 id="\u95EE\u9898\uFF1A\u5BF9\u79F0\u4E8C\u53C9\u6811" tabindex="-1">\u95EE\u9898\uFF1A\u5BF9\u79F0\u4E8C\u53C9\u6811 <a class="header-anchor" href="#\u95EE\u9898\uFF1A\u5BF9\u79F0\u4E8C\u53C9\u6811" aria-hidden="true">#</a></h1><p><a href="/guo-notes/classify/algorithm/\u57FA\u7840\u6570\u636E\u7ED3\u6784-\u6811.html">\u6811</a> | <a href="/guo-notes/classify/algorithm/\u7B97\u6CD5-\u9012\u5F52.html">\u9012\u5F52</a> | <a href="/guo-notes/classify/algorithm/\u7B97\u6CD5-\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22.html">\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22</a></p><p>\u7ED9\u5B9A\u4E00\u4E2A\u4E8C\u53C9\u6811\uFF0C\u5224\u65AD\u5B83\u662F\u5426\u662F\u9AD8\u5EA6\u5E73\u8861\u7684\u4E8C\u53C9\u6811\u3002</p><p>\u672C\u9898\u4E2D\uFF0C\u4E00\u68F5\u9AD8\u5EA6\u5E73\u8861\u4E8C\u53C9\u6811\u5B9A\u4E49\u4E3A\uFF1A</p><p>\u4E00\u4E2A\u4E8C\u53C9\u6811\u6BCF\u4E2A\u8282\u70B9 \u7684\u5DE6\u53F3\u4E24\u4E2A\u5B50\u6811\u7684\u9AD8\u5EA6\u5DEE\u7684\u7EDD\u5BF9\u503C\u4E0D\u8D85\u8FC7 1 \u3002</p><p><strong>\u793A\u4F8B 1\uFF1A</strong></p><p><img src="https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg" alt="img"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Aroot = [3,9,20,null,null,15,7]</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1Atrue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><p><img src="https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg" alt="img"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Aroot = [1,2,2,3,3,null,null,4,4]</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1Afalse</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>\u793A\u4F8B 3\uFF1A</strong></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Aroot = []</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1Atrue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>\u63D0\u793A\uFF1A</strong></p><ul><li>\u6811\u4E2D\u7684\u8282\u70B9\u6570\u5728\u8303\u56F4 <code>[0, 5000]</code> \u5185</li><li><code>-104 &lt;= Node.val &lt;= 104</code></li></ul><h2 id="\u65B9\u6CD5\u4E00\uFF1A\u81EA\u5E95\u5411\u4E0A\u7684\u9012\u5F52" tabindex="-1">\u65B9\u6CD5\u4E00\uFF1A\u81EA\u5E95\u5411\u4E0A\u7684\u9012\u5F52 <a class="header-anchor" href="#\u65B9\u6CD5\u4E00\uFF1A\u81EA\u5E95\u5411\u4E0A\u7684\u9012\u5F52" aria-hidden="true">#</a></h2><p>\u5E73\u8861\u4E8C\u53C9\u6811\u6BCF\u4E2A\u5B50\u6811\u90FD\u662F\u5E73\u8861\u4E8C\u53C9\u6811\uFF0C\u6240\u4EE5\u53EF\u4EE5\u7528\u9012\u5F52\u7684\u65B9\u5F0F\u6765\u89E3\u51B3\u3002\u9012\u5F52\u5230\u540E\u9762\u7684\u8282\u70B9\uFF0C\u7136\u540E\u4ECE\u4E0B\u5F80\u4E0A\u5224\u65AD\uFF0C\u5982\u679C\u6709\u4E3A\u975E\u5E73\u8861\u4E8C\u53C9\u6811\uFF0C\u5219\u8FD4\u56DE -1</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#676E95;"> * type TreeNode struct {</span></span>
<span class="line"><span style="color:#676E95;"> *     Val int</span></span>
<span class="line"><span style="color:#676E95;"> *     Left *TreeNode</span></span>
<span class="line"><span style="color:#676E95;"> *     Right *TreeNode</span></span>
<span class="line"><span style="color:#676E95;"> * }</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isBalanced</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">TreeNode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">depthDiff</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// 1\u3001\u9012\u5F52\u5DE6\u53F3\u5B50\u6811</span></span>
<span class="line"><span style="color:#676E95;">// 2\u3001\u5982\u679C\u5DE6\u53F3\u5B50\u6811\u9AD8\u5EA6\u5DEE\u5927\u4E8E1\uFF0C\u5219\u8FD4\u56DE-1</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">depthDiff</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">TreeNode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> root </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    ld </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">depthDiff</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Left</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    rd </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">depthDiff</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Right</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> ld </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> rd </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> rd </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ld </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> ld </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> rd </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">max</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ld</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> rd</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">max</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> a</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> b</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="\u65B9\u6CD5\u4E8C\uFF1A\u81EA\u9876\u5411\u4E0B\u7684\u9012\u5F52" tabindex="-1">\u65B9\u6CD5\u4E8C\uFF1A\u81EA\u9876\u5411\u4E0B\u7684\u9012\u5F52 <a class="header-anchor" href="#\u65B9\u6CD5\u4E8C\uFF1A\u81EA\u9876\u5411\u4E0B\u7684\u9012\u5F52" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isBalanced</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">TreeNode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> root </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">abs</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">height</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Left</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">height</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Right</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isBalanced</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Left</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isBalanced</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Right</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">height</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">TreeNode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> root </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">max</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">height</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Left</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">height</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Right</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">max</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> y </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> x</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> y</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">abs</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> x</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> x</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,20),e=[o];function r(c,t,D,y,A,C){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{i as __pageData,b as default};
