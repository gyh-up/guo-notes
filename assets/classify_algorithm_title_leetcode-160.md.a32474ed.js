import{_ as s,c as n,o as a,a as l}from"./app.f8902c75.js";const i=JSON.parse('{"title":"\u95EE\u9898\uFF1A\u76F8\u4EA4\u94FE\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65B9\u6CD5\u4E00\uFF1A\u904D\u5386\u6CD5/\u54C8\u5E0C\u8868","slug":"\u65B9\u6CD5\u4E00\uFF1A\u904D\u5386\u6CD5-\u54C8\u5E0C\u8868","link":"#\u65B9\u6CD5\u4E00\uFF1A\u904D\u5386\u6CD5-\u54C8\u5E0C\u8868","children":[]},{"level":2,"title":"\u65B9\u6CD5\u4E8C\uFF1A\u53CC\u6307\u9488","slug":"\u65B9\u6CD5\u4E8C\uFF1A\u53CC\u6307\u9488","link":"#\u65B9\u6CD5\u4E8C\uFF1A\u53CC\u6307\u9488","children":[]},{"level":2,"title":"\u65B9\u6CD5\u4E09\uFF1A\u53CC\u6307\u9488II","slug":"\u65B9\u6CD5\u4E09\uFF1A\u53CC\u6307\u9488ii","link":"#\u65B9\u6CD5\u4E09\uFF1A\u53CC\u6307\u9488ii","children":[]}],"relativePath":"classify/algorithm/title/leetcode-160.md","lastUpdated":null}'),p={name:"classify/algorithm/title/leetcode-160.md"},o=l(`<h1 id="\u95EE\u9898\uFF1A\u76F8\u4EA4\u94FE\u8868" tabindex="-1">\u95EE\u9898\uFF1A\u76F8\u4EA4\u94FE\u8868 <a class="header-anchor" href="#\u95EE\u9898\uFF1A\u76F8\u4EA4\u94FE\u8868" aria-hidden="true">#</a></h1><p><a href="/guo-notes/classify/algorithm/\u57FA\u7840\u6570\u636E\u7ED3\u6784-\u54C8\u5E0C\u8868.html">\u54C8\u5E0C\u8868</a> | <a href="/guo-notes/classify/algorithm/\u57FA\u7840\u6570\u636E\u7ED3\u6784-\u94FE\u8868.html">\u94FE\u8868</a> | <a href="/guo-notes/classify/algorithm/\u6280\u5DE7-\u53CC\u6307\u9488.html">\u53CC\u6307\u9488</a></p><p>\u7ED9\u4F60\u4E24\u4E2A\u5355\u94FE\u8868\u7684\u5934\u8282\u70B9 <code>headA</code> \u548C <code>headB</code> \uFF0C\u8BF7\u4F60\u627E\u51FA\u5E76\u8FD4\u56DE\u4E24\u4E2A\u5355\u94FE\u8868\u76F8\u4EA4\u7684\u8D77\u59CB\u8282\u70B9\u3002\u5982\u679C\u4E24\u4E2A\u94FE\u8868\u4E0D\u5B58\u5728\u76F8\u4EA4\u8282\u70B9\uFF0C\u8FD4\u56DE null \u3002</p><p>\u56FE\u793A\u4E24\u4E2A\u94FE\u8868\u5728\u8282\u70B9 <code>c1</code> \u5F00\u59CB\u76F8\u4EA4\uFF1A</p><p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png" alt="img"></p><p>\u9898\u76EE\u6570\u636E <strong>\u4FDD\u8BC1</strong> \u6574\u4E2A\u94FE\u5F0F\u7ED3\u6784\u4E2D\u4E0D\u5B58\u5728\u73AF\u3002</p><p><strong>\u6CE8\u610F</strong>\uFF0C\u51FD\u6570\u8FD4\u56DE\u7ED3\u679C\u540E\uFF0C\u94FE\u8868\u5FC5\u987B <strong>\u4FDD\u6301\u5176\u539F\u59CB\u7ED3\u6784</strong> \u3002</p><h2 id="\u65B9\u6CD5\u4E00\uFF1A\u904D\u5386\u6CD5-\u54C8\u5E0C\u8868" tabindex="-1">\u65B9\u6CD5\u4E00\uFF1A\u904D\u5386\u6CD5/\u54C8\u5E0C\u8868 <a class="header-anchor" href="#\u65B9\u6CD5\u4E00\uFF1A\u904D\u5386\u6CD5-\u54C8\u5E0C\u8868" aria-hidden="true">#</a></h2><p>\u904D\u5386\u6240\u6709\u8282\u70B9\uFF0C\u5FAA\u73AF\u904D\u5386\u4E24\u4E2A\u94FE\u8868\uFF0C\u5E76\u5C06\u5F53\u524D\u8282\u70B9\u4FDD\u5B58\u5230\u4E00\u4E2A\u54C8\u5E0C\u8868\uFF0C\u6BCF\u6B21\u5FAA\u73AF\u5224\u65AD\u54C8\u5E0C\u8868\u4E2D\u662F\u5426\u5DF2\u7ECF\u51FA\u73B0\u8FC7\u8BE5\u8282\u70B9\uFF0C\u5982\u679C\u51FA\u73B0\u8FC7\uFF0C\u5219\u8BF4\u660E\u8BE5\u8282\u70B9\u4E3A\u4E24\u94FE\u8868\u7684\u76F8\u4EA4\u8282\u70B9\u3002\u5982\u679C\u4E00\u76F4\u5FAA\u73AF\u5230\u4E24\u94FE\u8868\u7684\u5C3E\u90E8\u4ECD\u672A\u51FA\u73B0\u91CD\u590D\u8282\u70B9\uFF0C\u5219\u8BF4\u660E\u4E24\u94FE\u8868\u65E0\u76F8\u4EA4\u8282\u70B9\u3002</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * Definition for singly-linked list.</span></span>
<span class="line"><span style="color:#676E95;"> * type ListNode struct {</span></span>
<span class="line"><span style="color:#676E95;"> *     Val int</span></span>
<span class="line"><span style="color:#676E95;"> *     Next *ListNode</span></span>
<span class="line"><span style="color:#676E95;"> * }</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getIntersectionNode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">headA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> headB </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u65B0\u5EFA\u54C8\u5E0C\u8868\uFF0C\u4FDD\u5B58\u5DF2\u51FA\u73B0\u8FC7\u7684\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">    node_map </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(map[*</span><span style="color:#A6ACCD;">ListNode</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">// \u5224\u65ADA\u94FE\u8868\u662F\u5426\u5FAA\u73AF\u7ED3\u675F</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> headA </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;">// \u5224\u65AD\u8282\u70B9\u662F\u5426\u5DF2\u7ECF\u51FA\u73B0\uFF0C\u51FA\u73B0\u8FC7\u5219\u8FD4\u56DE\u5F53\u524D\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> node_map</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">headA</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> headA</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;">// \u8282\u70B9\u672A\u51FA\u73B0\uFF0C\u5219\u8282\u70B9\u4FDD\u5B58\u81F3\u54C8\u5E0C\u8868\u4E2D\uFF0CA\u94FE\u8868\u6307\u9488\u4E0B\u79FB</span></span>
<span class="line"><span style="color:#A6ACCD;">            node_map</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">headA</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">            headA </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> headA</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">// \u5224\u65ADB\u94FE\u8868\u662F\u5426\u5FAA\u73AF\u7ED3\u675F</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> headB </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;">// \u5224\u65AD\u8282\u70B9\u662F\u5426\u5DF2\u7ECF\u51FA\u73B0\uFF0C\u51FA\u73B0\u8FC7\u5219\u8FD4\u56DE\u5F53\u524D\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> node_map</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">headB</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> headB</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;">// \u8282\u70B9\u672A\u51FA\u73B0\uFF0C\u5219\u8282\u70B9\u4FDD\u5B58\u81F3\u54C8\u5E0C\u8868\u4E2D\uFF0CB\u94FE\u8868\u6307\u9488\u4E0B\u79FB</span></span>
<span class="line"><span style="color:#A6ACCD;">            node_map</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">headB</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">            headB </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> headB</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">// \u4E24\u94FE\u8868\u5747\u79FB\u52A8\u5230\u5C3E\u90E8\uFF0C\u8FD4\u56DE nil</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> headA </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> headB </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="\u65B9\u6CD5\u4E8C\uFF1A\u53CC\u6307\u9488" tabindex="-1">\u65B9\u6CD5\u4E8C\uFF1A\u53CC\u6307\u9488 <a class="header-anchor" href="#\u65B9\u6CD5\u4E8C\uFF1A\u53CC\u6307\u9488" aria-hidden="true">#</a></h2><p>\u60C5\u51B5\u4E00\uFF1A\u4E24\u4E2A\u94FE\u8868\u76F8\u4EA4</p><p>\u94FE\u8868 <code>headA</code> \u548C <code>headB</code> \u7684\u957F\u5EA6\u5206\u522B\u662F <code>m</code> \u548C <code>n</code>\u3002\u5047\u8BBE\u94FE\u8868 <code>headA</code> \u7684\u4E0D\u76F8\u4EA4\u90E8\u5206\u6709 <code>a</code> \u4E2A\u8282\u70B9\uFF0C\u94FE\u8868 <code>headB</code> \u7684\u4E0D\u76F8\u4EA4\u90E8\u5206\u6709 <code>b</code> \u4E2A\u8282\u70B9\uFF0C\u4E24\u4E2A\u94FE\u8868\u76F8\u4EA4\u7684\u90E8\u5206\u6709 <code>c</code> \u4E2A\u8282\u70B9\uFF0C\u5219\u6709 <code>a+c=m</code>\uFF0C<code>b+c=n</code>\u3002</p><p>\u5982\u679C <code>a = b</code>\uFF0C\u5219\u4E24\u4E2A\u6307\u9488\u4F1A\u540C\u65F6\u5230\u8FBE\u4E24\u4E2A\u94FE\u8868\u76F8\u4EA4\u7684\u8282\u70B9\uFF0C\u6B64\u65F6\u8FD4\u56DE\u76F8\u4EA4\u7684\u8282\u70B9\uFF1B</p><p>\u5982\u679C <code>a != b</code>\uFF0C\u5219\u6307\u9488 <code>pA</code> \u4F1A\u904D\u5386\u5B8C\u94FE\u8868 <code>headA</code>\uFF0C\u6307\u9488 <code>pB</code> \u4F1A\u904D\u5386\u5B8C\u94FE\u8868 <code>headB</code>\uFF0C\u4E24\u4E2A\u6307\u9488\u4E0D\u4F1A\u540C\u65F6\u5230\u8FBE\u94FE\u8868\u7684\u5C3E\u8282\u70B9\uFF0C\u7136\u540E\u6307\u9488 <code>pA </code>\u79FB\u5230\u94FE\u8868 <code>headB</code> \u7684\u5934\u8282\u70B9\uFF0C\u6307\u9488 <code>pB</code> \u79FB\u5230\u94FE\u8868 <code>headA</code> \u7684\u5934\u8282\u70B9\uFF0C\u7136\u540E\u4E24\u4E2A\u6307\u9488\u7EE7\u7EED\u79FB\u52A8\uFF0C\u5728\u6307\u9488 <code>pA</code> \u79FB\u52A8\u4E86 <code>a+c+b</code> \u6B21\u3001\u6307\u9488 <code>pB</code> \u79FB\u52A8\u4E86 <code>b+c+a</code> \u6B21\u4E4B\u540E\uFF0C\u4E24\u4E2A\u6307\u9488\u4F1A\u540C\u65F6\u5230\u8FBE\u4E24\u4E2A\u94FE\u8868\u76F8\u4EA4\u7684\u8282\u70B9\uFF0C\u8BE5\u8282\u70B9\u4E5F\u662F\u4E24\u4E2A\u6307\u9488\u7B2C\u4E00\u6B21\u540C\u65F6\u6307\u5411\u7684\u8282\u70B9\uFF0C\u6B64\u65F6\u8FD4\u56DE\u76F8\u4EA4\u7684\u8282\u70B9\u3002</p><p>\u60C5\u51B5\u4E8C\uFF1A\u4E24\u4E2A\u94FE\u8868\u4E0D\u76F8\u4EA4</p><p>\u94FE\u8868 <code>headA</code> \u548C <code>headB</code> \u7684\u957F\u5EA6\u5206\u522B\u662F <code>m</code> \u548C <code>n</code>\u3002\u8003\u8651\u5F53 <code>m=n</code> \u548C <code>m != n</code> \u65F6\uFF0C\u4E24\u4E2A\u6307\u9488\u5206\u522B\u4F1A\u5982\u4F55\u79FB\u52A8\uFF1A</p><p>\u5982\u679C <code>m = n</code>\uFF0C\u5219\u4E24\u4E2A\u6307\u9488\u4F1A\u540C\u65F6\u5230\u8FBE\u4E24\u4E2A\u94FE\u8868\u7684\u5C3E\u8282\u70B9\uFF0C\u7136\u540E\u540C\u65F6\u53D8\u6210\u7A7A\u503C <code>null</code>\uFF0C\u6B64\u65F6\u8FD4\u56DE <code>null</code>\uFF1B</p><p>\u5982\u679C <code>m != n</code>\uFF0C\u5219\u7531\u4E8E\u4E24\u4E2A\u94FE\u8868\u6CA1\u6709\u516C\u5171\u8282\u70B9\uFF0C\u4E24\u4E2A\u6307\u9488\u4E5F\u4E0D\u4F1A\u540C\u65F6\u5230\u8FBE\u4E24\u4E2A\u94FE\u8868\u7684\u5C3E\u8282\u70B9\uFF0C\u56E0\u6B64\u4E24\u4E2A\u6307\u9488\u90FD\u4F1A\u904D\u5386\u5B8C\u4E24\u4E2A\u94FE\u8868\uFF0C\u5728\u6307\u9488 <code>pA</code> \u79FB\u52A8\u4E86 <code>m+n</code> \u6B21\u3001\u6307\u9488 <code>pB</code> \u79FB\u52A8\u4E86 <code>n+m</code> \u6B21\u4E4B\u540E\uFF0C\u4E24\u4E2A\u6307\u9488\u4F1A\u540C\u65F6\u53D8\u6210\u7A7A\u503C <code>null</code>\uFF0C\u6B64\u65F6\u8FD4\u56DE <code>null</code>\u3002</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * Definition for singly-linked list.</span></span>
<span class="line"><span style="color:#676E95;"> * type ListNode struct {</span></span>
<span class="line"><span style="color:#676E95;"> *     Val int</span></span>
<span class="line"><span style="color:#676E95;"> *     Next *ListNode</span></span>
<span class="line"><span style="color:#676E95;"> * }</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getIntersectionNode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">headA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> headB </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u7279\u6B8A\u60C5\u51B5\uFF0C\u5176\u4E2D\u6709\u4E00\u4E2A\u94FE\u8868\u4E3A\u7A7A\u7684\u65F6\u5019\uFF0C\u8FD4\u56DE nil\u3002\u4E5F\u53EF\u4EE5\u4E0D\u52A0\u4E0A\u6B64\u5224\u65AD</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> headA </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> headB </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u5B9A\u4E49pA \u548C pB</span></span>
<span class="line"><span style="color:#A6ACCD;">    pA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pB </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> headA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> headB</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">// \u540C\u65F6\u4E3A\u7A7A\u65F6\uFF0C\u8FD4\u56DE nil\u3002\u4E24\u94FE\u8868\u4E0D\u76F8\u4EA4</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> pA </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> pB </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">// pA \u8D70\u5230 headA \u94FE\u8868\u5C3E\u90E8\uFF0C\u91CD\u65B0\u6307\u5411 headB \u5934\u8282\u70B9  </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> pA </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> pB </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            pA </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> headB</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">// pB \u8D70\u5230 headB \u94FE\u8868\u5C3E\u90E8\uFF0C\u91CD\u65B0\u6307\u5411 headA \u5934\u8282\u70B9  </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> pB </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> pA </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            pB </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> headA</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> pA </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> pB </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> pA</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">        pA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pB </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pA</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pB</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="\u65B9\u6CD5\u4E09\uFF1A\u53CC\u6307\u9488ii" tabindex="-1">\u65B9\u6CD5\u4E09\uFF1A\u53CC\u6307\u9488II <a class="header-anchor" href="#\u65B9\u6CD5\u4E09\uFF1A\u53CC\u6307\u9488ii" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u5148\u8BA1\u7B97\u4E24\u94FE\u8868\u7684\u957F\u5EA6\u5DEE <code>d</code>\uFF0C\u5C06\u8F83\u957F\u7684\u94FE\u8868\u5148\u79FB\u52A8 <code>d</code>\xA0\u4E2A\u4F4D\u7F6E\uFF0C\u7136\u540E\u518D\u540C\u65F6\u79FB\u52A8\uFF0C\u5982\u679C\u4E24\u94FE\u8868\u76F8\u4EA4\uFF0C\u5219\u5FC5\u5B9A\u4F1A\u51FA\u73B0\u4E24\u6307\u9488\u76F8\u7B49\u7684\u60C5\u51B5\u3002</p><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * Definition for singly-linked list.</span></span>
<span class="line"><span style="color:#676E95;"> * type ListNode struct {</span></span>
<span class="line"><span style="color:#676E95;"> *     Val int</span></span>
<span class="line"><span style="color:#676E95;"> *     Next *ListNode</span></span>
<span class="line"><span style="color:#676E95;"> * }</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#676E95;">// \u5B9A\u4E49\u83B7\u53D6\u94FE\u8868\u957F\u5EA6\u7684\u51FD\u6570</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Length</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">node </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> node </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	i </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		i</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#A6ACCD;">		node </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> i</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getIntersectionNode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">headA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> headB </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u5206\u522B\u83B7\u53D6\u4E24\u94FE\u8868\u7684\u957F\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">    lenA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> lenB </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Length</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">headA</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Length</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">headB</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u65B0\u5EFA\u8F85\u52A9\u6307\u9488\u6307\u5411\u5934\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">    pA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pB </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> headA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> headB</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u957F\u7684\u94FE\u8868\u8FDB\u884C\u79FB\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> lenA </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> lenB </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        d </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> lenA </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> lenB</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            pA </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pA</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> lenA </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> lenB </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        d </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> lenB </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> lenA</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            pB </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pB</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u4E24\u6307\u9488\u540C\u65F6\u79FB\u52A8\uFF0C\u5B58\u5728\u76F8\u540C\u8282\u70B9\u4E3A\u76F8\u4EA4\u8282\u70B9\uFF0C\u5426\u5219\u4E24\u8282\u70B9\u90FD\u5C06\u79FB\u52A8\u5230\u94FE\u8868\u5C3E\u90E8\uFF0C\u5224\u65AD\u90FD\u4E3A nil\uFF0C\u8FD4\u56DE nil</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> pA </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> pB </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> pA</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> pA </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> pB </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        pA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pB </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pA</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pB</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Next</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div>`,23),e=[o];function c(r,t,D,A,y,C){return a(),n("div",null,e)}const b=s(p,[["render",c]]);export{i as __pageData,b as default};
