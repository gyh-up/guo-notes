import{_ as s,c as n,o as a,d as l}from"./app.03a111fe.js";const i=JSON.parse('{"title":"redis\u6162\u67E5\u8BE2\u548C\u7BA1\u9053","description":"","frontmatter":{},"headers":[{"level":2,"title":"Redis\u6162\u67E5\u8BE2","slug":"redis\u6162\u67E5\u8BE2","link":"#redis\u6162\u67E5\u8BE2","children":[]},{"level":2,"title":"pipeline\uFF08\u7BA1\u9053\uFF09","slug":"pipeline\uFF08\u7BA1\u9053\uFF09","link":"#pipeline\uFF08\u7BA1\u9053\uFF09","children":[]}],"relativePath":"classify/redis/redis\u6162\u67E5\u8BE2\u548C\u7BA1\u9053.md","lastUpdated":1666177149000}'),p={name:"classify/redis/redis\u6162\u67E5\u8BE2\u548C\u7BA1\u9053.md"},o=l(`<h1 id="redis\u6162\u67E5\u8BE2\u548C\u7BA1\u9053" tabindex="-1">redis\u6162\u67E5\u8BE2\u548C\u7BA1\u9053 <a class="header-anchor" href="#redis\u6162\u67E5\u8BE2\u548C\u7BA1\u9053" aria-hidden="true">#</a></h1><h2 id="redis\u6162\u67E5\u8BE2" tabindex="-1">Redis\u6162\u67E5\u8BE2 <a class="header-anchor" href="#redis\u6162\u67E5\u8BE2" aria-hidden="true">#</a></h2><p>\u8BB8\u591A\u5B58\u50A8\u7CFB\u7EDF\uFF08\u4F8B\u5982 <code>MySQL</code>\uFF09\u63D0\u4F9B\u6162\u67E5\u8BE2\u65E5\u5FD7\u5E2E\u52A9\u5F00\u53D1\u548C\u8FD0\u7EF4\u4EBA\u5458\u5B9A\u4F4D\u7CFB\u7EDF\u5B58\u5728\u7684\u6162\u64CD\u4F5C\u3002</p><p>\u6240\u8C13\u6162\u67E5\u8BE2\u65E5\u5FD7\u5C31\u662F\u7CFB\u7EDF\u5728\u547D\u4EE4\u6267\u884C\u524D\u540E\u8BA1\u7B97\u6BCF\u6761\u547D\u4EE4\u7684\u6267\u884C\u65F6\u95F4\uFF0C\u5F53\u8D85\u8FC7\u9884\u8BBE\u9608\u503C\uFF0C\u5C31\u5C06\u8FD9\u6761\u547D\u4EE4\u7684\u76F8\u5173\u4FE1\u606F\uFF08\u4F8B\u5982\uFF1A\u53D1\u751F\u65F6\u95F4\u3001\u8017\u65F6\u3001\u547D\u4EE4\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF09\u8BB0\u5F55\u4E0B\u6765\uFF0C<code>Redis</code> \u4E5F\u63D0\u4F9B\u4E86\u7C7B\u4F3C\u7684\u529F\u80FD\u3002</p><blockquote><p><code>redis</code> \u547D\u4EE4\u7684\u6267\u884C\u8FC7\u7A0B\u6162\u67E5\u8BE2\u65E5\u5FD7\u7684\u53C2\u6570\uFF1A</p></blockquote><p><code>slowlog-log-slower-than</code>\uFF1A\u6307\u5B9A\u6267\u884C\u65F6\u95F4\u8D85\u8FC7\u591A\u5C11\u5FAE\u79D2( <code>1</code> \u79D2\u7B49\u4E8E <code>1000000</code> \u5FAE\u79D2) \u7684\u547D\u4EE4\u8BF7\u6C42\u4F1A\u88AB\u8BB0\u5F55\u5230\u65E5\u5FD7\u4E0A</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5982\u679C\u8FD9\u4E2A\u9009\u9879\u503C\u4E3A <code>100</code>\uFF0C\u90A3\u4E48\u6267\u884C\u65F6\u95F4\u8D85\u8FC7 <code>100</code> \u5FAE\u79D2\u7684\u547D\u4EE4\u5C31\u4F1A\u88AB\u8BB0\u5F55\u5230\u6162\u67E5\u8BE2\u65E5\u5FD7\uFF1B\u5982\u679C\u8FD9\u4E2A\u9009\u9879\u503C\u4E3A <code>500</code>\uFF0C\u90A3\u4E48\u6267\u884C\u65F6\u95F4\u8D85\u8FC7 <code>500</code> \u5FAE\u79D2\u7684\u547D\u4EE4\u5C31\u4F1A\u88AB\u8BB0\u5F55\u5230\u6162\u67E5\u8BE2\u65E5\u5FD7</p><p><code>slowlog-max-len</code>\uFF1A\u6307\u5B9A\u670D\u52A1\u5668\u6700\u591A\u4FDD\u5B58\u591A\u5C11\u6761\u6162\u67E5\u8BE2\u64CD\u4F5C\uFF0C\u670D\u52A1\u5668\u5148\u8FDB\u5148\u51FA\u7684\u65B9\u5F0F\u4FDD\u5B58\u591A\u6761\u6162\u67E5\u8BE2\u65E5\u5FD7\uFF0C\u5F53\u670D\u52A1\u5668\u5B58\u50A8\u7684\u6162\u67E5\u8BE2\u6570\u91CF\u7B49\u4E8E <code>slowlog-log-len</code> \u9009\u9879\u503C\u65F6\uFF0C\u670D\u52A1\u5668\u5728\u6DFB\u52A0\u4E00\u6761\u65B0\u7684\u6162\u67E5\u8BE2\u65E5\u5FD7\u4E4B\u524D\uFF0C\u4F1A\u5148\u5C06\u5BF9\u65E7\u7684\u4E00\u6761\u6162\u65E5\u5FD7\u5148\u5220\u9664</p><blockquote><p>\u5B9E\u9645\u73B0\u8C61\u5982\u4E0B\uFF1A</p></blockquote><p>\u5148\u4F7F\u7528 <code>config set</code> \u547D\u4EE4\u5C06 <code>slow-log-slower-than</code> \u53C2\u6570\u7684\u8BBE\u7F6E\u4E3A <code>0</code> \u5FAE\u79D2\uFF0C\u8FD9\u6837 <code>redis</code> \u670D\u52A1\u5668\u6267\u884C\u7684\u4EFB\u4F55\u547D\u4EE4\u90FD\u4F1A\u8BB0\u5F55\u5230\u6162\u67E5\u8BE2\u65E5\u5FD7\u4E2D\u3002</p><p>\u63A5\u7740\u628A <code>slowlog-max-len</code> \u53C2\u6570\u7684\u503C\u8BBE\u7F6E\u7684 <code>5</code>\uFF0C\u8BA9\u670D\u52A1\u5668\u6700\u591A\u53EA\u4FDD\u5B58 <code>5</code> \u6761\u6162\u67E5\u8BE2\u8BB0\u5F55</p><p>\u6162\u67E5\u8BE2\u65E5\u5FD7\u7684\u4FDD\u5B58</p><p>\u670D\u52A1\u5668\u72B6\u6001\u4E2D\u5305\u542B\u4E86\u51E0\u4E2A\u6162\u67E5\u8BE2\u65E5\u5FD7\u529F\u80FD\u6709\u5173\u7684\u5C5E\u6027\uFF1A</p><div class="language-c line-numbers-mode"><button class="copy"></button><span class="lang">c</span><pre><code><span class="line"><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> redisServer </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//... </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//\u4E0B\u4E00\u4E2A\u6162\u67E5\u8BE2\u65E5\u5FD7\u7684ID </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">long</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">long</span><span style="color:#F07178;"> slowlog_entry_id</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//\u4FDD\u5B58\u4E86\u6240\u6709\u67E5\u8BE2\u65E5\u5FD7\u7684\u94FE\u8868 </span></span>
<span class="line"><span style="color:#F07178;">    list </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">slowlog</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//\u670D\u52A1\u5668\u914D\u7F6Eslowlog-log-slower-than\u9009\u9879\u7684\u503C </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">long</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">long</span><span style="color:#F07178;"> slowlog_log_slower_than</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//\u670D\u52A1\u5668\u914D\u7F6Eslowlog-max-len\u7684\u503C </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">unsigned</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">long</span><span style="color:#F07178;"> slowlog_max_len</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//... </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><code>slowlog_entry_id</code> \u5C5E\u6027\u7684\u521D\u59CB\u503C\u4E3A <code>0</code>\uFF0C\u6BCF\u5F53\u521B\u5EFA\u4E00\u5929\u65B0\u7684\u6162\u67E5\u8BE2\u65E5\u5FD7\u65F6\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u503C\u5C31\u4F1A\u4F5C\u7528\u5230\u65B0\u65E5\u5FD7\u7684 <code>id</code> \u503C\uFF0C\u4E4B\u540E\u7A0B\u5E8F\u4F1A\u5BF9\u8FD9\u4E2A\u5C5E\u6027\u7684\u503C\u589E\u4E00\u3002</p><h2 id="pipeline\uFF08\u7BA1\u9053\uFF09" tabindex="-1">pipeline\uFF08\u7BA1\u9053\uFF09 <a class="header-anchor" href="#pipeline\uFF08\u7BA1\u9053\uFF09" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u77E5\u9053 <code>redis</code> \u7684\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u662F\u901A\u8FC7 <code>TCP</code> \u534F\u8BAE\u8FDE\u63A5\u7684\uFF0C\u4E0D\u8BBA\u662F\u5BA2\u6237\u7AEF\u5411 <code>redis</code> \u53D1\u9001\u547D\u4EE4\u8FD8\u662F\u5BA2\u6237\u7AEF\u63A5\u6536 <code>redis</code> \u7684\u6267\u884C\u7ED3\u679C\uFF0C\u90FD\u9700\u8981\u7F51\u7EDC\u901A\u4FE1\uFF0C\u90FD\u9700\u8981\u4E00\u5B9A\u65F6\u95F4\uFF0C\u7531\u4E8E\u7F51\u7EDC\u6027\u80FD\u7684\u4E0D\u540C\u5F80\u8FD4\u65F6\u95F4\u4E5F\u4E0D\u540C\uFF0C\u5927\u81F4\u7684\u6765\u8BF4\u8FD9\u4E2A\u65F6\u95F4\u76F8\u5F53\u4E8E <code>redis</code> \u5904\u7406\u4E00\u6761\u7B80\u5355\u547D\u4EE4\uFF08\u6BD4\u5982\u63D2\u5165\u4E00\u4E2A\u503C\u5230\u94FE\u8868\uFF09\u7684\u65F6\u95F4\u3002\u5982\u679C\u6211\u4EEC\u6267\u884C\u8F83\u591A\u7684\u547D\u4EE4\uFF0C\u4E00\u6765\u4E00\u56DE\uFF0C\u8FD9\u4E2A\u5F80\u8FD4\u65F6\u95F4\u7D2F\u52A0\u8D77\u6765\u8FD8\u662F\u5BF9\u6027\u80FD\u6709\u4E00\u5B9A\u5F71\u54CD\u7684\u3002</p><p>\u7531\u4E8E <code>redis</code> \u662F\u5355\u7EBF\u7A0B\uFF0C\u6240\u4EE5\u5728\u6267\u884C\u591A\u4E2A\u547D\u4EE4\u65F6\uFF0C\u90FD\u9700\u8981\u7B49\u5F85\u4E0A\u4E00\u6761\u547D\u4EE4\u6267\u884C\u5B8C\uFF0C\u624D\u80FD\u6267\u884C\u4E0B\u4E00\u6761\u547D\u4EE4\u3002\u56E0\u6B64\uFF0C<code>redis</code> \u5E95\u5C42\u901A\u4FE1\u534F\u8BAE\u63D0\u4F9B\u4E86\u5BF9\u7BA1\u9053\u6280\u672F\u7684\u652F\u6301\u3002<strong>\u901A\u8FC7\u7BA1\u9053\u53EF\u4EE5\u4E00\u6B21\u6027\u53D1\u9001\u591A\u6761\u547D\u4EE4\u5E76\u5728\u6267\u884C\u5B8C\u540E\u4E00\u6B21\u6027\u5C06\u7ED3\u679C\u8FD4\u56DE\uFF0C\u5F53\u4E00\u7EC4\u547D\u4EE4\u4E2D\u6BCF\u6761\u547D\u4EE4\u90FD\u4E0D\u4F9D\u8D56\u4E8E\u4E4B\u524D\u547D\u4EE4\u7684\u6267\u884C\u7ED3\u679C\u65F6\u5C31\u53EF\u4EE5\u5C06\u8FD9\u7EC4\u547D\u4EE4\u4E00\u8D77\u901A\u8FC7\u7BA1\u9053\u53D1\u51FA\u3002\u7BA1\u9053\u901A\u8FC7\u51CF\u5C11\u5BA2\u6237\u7AEF\u4E0E <code>Redis</code> \u7684\u901A\u4FE1\u6B21\u6570\u6765\u5B9E\u73B0\u964D\u4F4E\u5F80\u8FD4\u65F6\u5EF6\u7D2F\u8BA1\u503C\u7684\u76EE\u7684</strong></p><div class="language-php line-numbers-mode"><button class="copy"></button><span class="lang">php</span><pre><code><span class="line"><span style="color:#676E95;">//\u4E0D\u4F7F\u7528\u7BA1\u9053</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">stime</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">microtime</span><span style="color:#89DDFF;">(true);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//\u83B7\u53D6\u7A0B\u5E8F\u5F00\u59CB\u6267\u884C\u7684\u65F6\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5F00\u59CB\u5185\u5B58\uFF1A</span><span style="color:#89DDFF;">&#39;.</span><span style="color:#82AAFF;">memory_get_usage</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> PHP_EOL</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">redis </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Redis</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">redis</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">connect</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">192.168.29.108</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">6379</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">redis</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">auth</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">t1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">time</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">10000</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">redis</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">set</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">key::</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">str_pad</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">));</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">redis</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">key::</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">etime</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">microtime</span><span style="color:#89DDFF;">(true);</span><span style="color:#676E95;">//\u83B7\u53D6\u7A0B\u5E8F\u6267\u884C\u7ED3\u675F\u7684\u65F6\u95F4 </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">total</span><span style="color:#89DDFF;">=($</span><span style="color:#A6ACCD;">etime</span><span style="color:#89DDFF;">-$</span><span style="color:#A6ACCD;">stime</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//\u8BA1\u7B97\u5DEE\u503C </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[\u9875\u9762\u6267\u884C\u65F6\u95F4\uFF1A</span><span style="color:#89DDFF;">{$</span><span style="color:#A6ACCD;">total</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> ]s</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> PHP_EOL</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u8FD0\u884C\u540E\u5185\u5B58\uFF1A</span><span style="color:#89DDFF;">&#39;.</span><span style="color:#82AAFF;">memory_get_usage</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> PHP_EOL</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">?&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//\u4F7F\u7528\u7BA1\u9053</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">stime</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">microtime</span><span style="color:#89DDFF;">(true);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//\u83B7\u53D6\u7A0B\u5E8F\u5F00\u59CB\u6267\u884C\u7684\u65F6\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5F00\u59CB\u5185\u5B58\uFF1A</span><span style="color:#89DDFF;">&#39;.</span><span style="color:#82AAFF;">memory_get_usage</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> PHP_EOL</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">redis </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Redis</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">redis</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">connect</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">192.168.29.108</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">6379</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">redis</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">auth</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//$pipe=$redis-&gt;multi($redis::PIPELINE);//\u5C06\u591A\u4E2A\u64CD\u4F5C\u5F53\u6210\u4E00\u4E2A\u4E8B\u52A1\u6267\u884C </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">pipe</span><span style="color:#89DDFF;">=$</span><span style="color:#A6ACCD;">redis</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">pipeline</span><span style="color:#89DDFF;">();</span><span style="color:#676E95;">//\uFF08\u591A\u6761\uFF09\u6267\u884C\u547D\u4EE4\u7B80\u5355\u7684\uFF0C\u66F4\u52A0\u5FEB\u901F\u7684\u53D1\u9001\u7ED9\u670D\u52A1\u5668\uFF0C\u4F46\u662F\u6CA1\u6709\u4EFB\u4F55\u539F\u5B50\u6027\u7684\u4FDD\u8BC1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">10000</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">pipe</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">set</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">key::</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">str_pad</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">));</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">pipe</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">key::</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">replies</span><span style="color:#89DDFF;">=$</span><span style="color:#A6ACCD;">pipe</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">exec</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">etime</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">microtime</span><span style="color:#89DDFF;">(true);</span><span style="color:#676E95;">//\u83B7\u53D6\u7A0B\u5E8F\u6267\u884C\u7ED3\u675F\u7684\u65F6\u95F4 </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">total</span><span style="color:#89DDFF;">=($</span><span style="color:#A6ACCD;">etime</span><span style="color:#89DDFF;">-$</span><span style="color:#A6ACCD;">stime</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//\u8BA1\u7B97\u5DEE\u503C </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[\u9875\u9762\u6267\u884C\u65F6\u95F4\uFF1A</span><span style="color:#89DDFF;">{$</span><span style="color:#A6ACCD;">total</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> ]s</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> PHP_EOL</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u8FD0\u884C\u540E\u5185\u5B58\uFF1A</span><span style="color:#89DDFF;">&#39;.</span><span style="color:#82AAFF;">memory_get_usage</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> PHP_EOL</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">?&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>`,19),e=[o];function c(r,t,D,F,y,A){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
