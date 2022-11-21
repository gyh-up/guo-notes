import{_ as s,c as n,o as a,a as l}from"./app.7ba48979.js";const i=JSON.parse('{"title":"\u95EE\u9898\uFF1A\u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65B9\u6CD5\u4E00\uFF1A\u9012\u5F52","slug":"\u65B9\u6CD5\u4E00\uFF1A\u9012\u5F52","link":"#\u65B9\u6CD5\u4E00\uFF1A\u9012\u5F52","children":[]},{"level":2,"title":"\u65B9\u6CD5\u4E8C\uFF1A\u6808","slug":"\u65B9\u6CD5\u4E8C\uFF1A\u6808","link":"#\u65B9\u6CD5\u4E8C\uFF1A\u6808","children":[]},{"level":2,"title":"\u65B9\u6CD5\u4E09\uFF1A\u6807\u8BB0\u6CD5/ \u54C8\u5E0C\u8868","slug":"\u65B9\u6CD5\u4E09\uFF1A\u6807\u8BB0\u6CD5-\u54C8\u5E0C\u8868","link":"#\u65B9\u6CD5\u4E09\uFF1A\u6807\u8BB0\u6CD5-\u54C8\u5E0C\u8868","children":[]}],"relativePath":"classify/algorithm/title/leetcode-94.md","lastUpdated":1669029012000}'),p={name:"classify/algorithm/title/leetcode-94.md"},o=l(`<h1 id="\u95EE\u9898\uFF1A\u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386" tabindex="-1">\u95EE\u9898\uFF1A\u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386 <a class="header-anchor" href="#\u95EE\u9898\uFF1A\u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386" aria-hidden="true">#</a></h1><p><a href="/guo-notes/classify/algorithm/\u57FA\u7840\u6570\u636E\u7ED3\u6784-\u6811.html">\u6811</a> | <a href="/guo-notes/classify/algorithm/\u57FA\u7840\u6570\u636E\u7ED3\u6784-\u6808.html">\u6808</a> | <a href="/guo-notes/classify/algorithm/\u7B97\u6CD5-\u9012\u5F52.html">\u9012\u5F52</a> | <a href="/guo-notes/classify/algorithm/\u7B97\u6CD5-\u8FED\u4EE3.html">\u8FED\u4EE3</a> | <a href="/guo-notes/classify/algorithm/\u7B97\u6CD5-\u6DF1\u5EA6\u4F18\u5316\u641C\u7D22.html">\u6DF1\u5EA6\u4F18\u5316\u641C\u7D22</a> | <a href="/guo-notes/classify/algorithm/\u57FA\u7840\u6570\u636E\u7ED3\u6784-\u54C8\u5E0C\u8868.html">\u54C8\u5E0C\u8868</a></p><p>\u7ED9\u5B9A\u4E00\u4E2A\u4E8C\u53C9\u6811\u7684\u6839\u8282\u70B9 root \uFF0C\u8FD4\u56DE \u5B83\u7684 \u4E2D\u5E8F \u904D\u5386 \u3002</p><p><strong>\u793A\u4F8B 1\uFF1A</strong></p><p><img src="https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg" alt="img"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Aroot = [1,null,2,3]</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A[1,3,2]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Aroot = []</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A[]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>\u793A\u4F8B 3\uFF1A</strong></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Aroot = [1]</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A[1]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>\u63D0\u793A\uFF1A</strong></p><ul><li>\u6811\u4E2D\u8282\u70B9\u6570\u76EE\u5728\u8303\u56F4 <code>[0, 100]</code> \u5185</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><h2 id="\u65B9\u6CD5\u4E00\uFF1A\u9012\u5F52" tabindex="-1">\u65B9\u6CD5\u4E00\uFF1A\u9012\u5F52 <a class="header-anchor" href="#\u65B9\u6CD5\u4E00\uFF1A\u9012\u5F52" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#676E95;"> * type TreeNode struct {</span></span>
<span class="line"><span style="color:#676E95;"> *     Val int</span></span>
<span class="line"><span style="color:#676E95;"> *     Left *TreeNode</span></span>
<span class="line"><span style="color:#676E95;"> *     Right *TreeNode</span></span>
<span class="line"><span style="color:#676E95;"> * }</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">inorderTraversal</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">TreeNode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> inorder </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">node </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">TreeNode</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">	inorder </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">node </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">TreeNode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> node </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">return</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">// \u9012\u5F52\u5DE6\u5B50\u6811\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">inorder</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Left</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">// \u5F53\u524D\u8282\u70B9\u503C \u8FD4\u56DE\u5207\u7247\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">        result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Val</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">// \u9012\u5F52\u53F3\u5B50\u6811\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">inorder</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Right</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">inorder</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> result</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="\u65B9\u6CD5\u4E8C\uFF1A\u6808" tabindex="-1">\u65B9\u6CD5\u4E8C\uFF1A\u6808 <a class="header-anchor" href="#\u65B9\u6CD5\u4E8C\uFF1A\u6808" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#676E95;"> * type TreeNode struct {</span></span>
<span class="line"><span style="color:#676E95;"> *     Val int</span></span>
<span class="line"><span style="color:#676E95;"> *     Left *TreeNode</span></span>
<span class="line"><span style="color:#676E95;"> *     Right *TreeNode</span></span>
<span class="line"><span style="color:#676E95;"> * }</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">inorderTraversal</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">TreeNode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u521B\u5EFA\u6808</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> stack </span><span style="color:#89DDFF;">[]*</span><span style="color:#A6ACCD;">TreeNode</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u521B\u5EFA\u5207\u7247\u4FDD\u5B58\u7ED3\u70B9\u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> ret </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> root </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">// 1\u3001\u5982\u679C\u5B58\u5728\u5DE6\u5B50\u6811\uFF0C\u5219\u5F53\u524D\u8282\u70B9\u5165\u6808\uFF0C\u8FED\u4EE3\u5DE6\u5B50\u6811\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">// 2.1\u3001\u5982\u679C\u4E0D\u5B58\u5728\u5DE6\u5B50\u6811\uFF0C\u5219\u51FA\u6808\u53D6\u51FA\u8282\u70B9\uFF0C\u5F53\u524D\u8282\u70B9\u503C \u8FD4\u56DE\u5207\u7247\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">// 2.2 \u5982\u679C\u5F53\u524D\u8282\u70B9\u5B58\u5728\u53F3\u5B50\u6811\uFF0C\u8FED\u4EE3\u53F3\u5B50\u6811\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> root </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            stack </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            root </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Left</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            root </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> stack</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">)-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">            stack </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> stack</span><span style="color:#89DDFF;">[:</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">)-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">            ret </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ret</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Val</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            root </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Right</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> ret</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="\u65B9\u6CD5\u4E09\uFF1A\u6807\u8BB0\u6CD5-\u54C8\u5E0C\u8868" tabindex="-1">\u65B9\u6CD5\u4E09\uFF1A\u6807\u8BB0\u6CD5/ \u54C8\u5E0C\u8868 <a class="header-anchor" href="#\u65B9\u6CD5\u4E09\uFF1A\u6807\u8BB0\u6CD5-\u54C8\u5E0C\u8868" aria-hidden="true">#</a></h2><p>\u8BE5\u65B9\u6CD5\u9002\u7528\u4E8E\u4E8C\u53C9\u6811\u7684\u524D\u4E2D\u540E\u5E8F\u904D\u5386\uFF0C\u53EA\u9700\u4FEE\u6539\u4E00\u4E0B\u5165\u6808\u7684\u987A\u5E8F\u5373\u53EF</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#676E95;"> * type TreeNode struct {</span></span>
<span class="line"><span style="color:#676E95;"> *     Val int</span></span>
<span class="line"><span style="color:#676E95;"> *     Left *TreeNode</span></span>
<span class="line"><span style="color:#676E95;"> *     Right *TreeNode</span></span>
<span class="line"><span style="color:#676E95;"> * }</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">inorderTraversal</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">TreeNode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> ret </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> stack </span><span style="color:#89DDFF;">[]*</span><span style="color:#A6ACCD;">TreeNode</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u54C8\u5E0C\u8868\u7528\u6765\u4FDD\u5B58\u5F53\u524D\u8282\u70B9\u7684\u72B6\u6001\uFF0C\u662F\u5426\u5DF2\u7ECF\u7ECF\u8FC7\uFF1B\u7ECF\u8FC7\u5219\u4E0D\u518D\u505A\u5165\u6808\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">    nodeAccess </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(map[*</span><span style="color:#A6ACCD;">TreeNode</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    nodeAccess</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">    stack </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        node </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> stack</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">)-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">        stack </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> stack</span><span style="color:#89DDFF;">[:</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">)-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> node </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">continue</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> nodeAccess</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            nodeAccess</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">            stack </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Right</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Left</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            ret </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ret</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Val</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> ret</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,19),e=[o];function r(c,t,D,y,A,C){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{i as __pageData,b as default};
