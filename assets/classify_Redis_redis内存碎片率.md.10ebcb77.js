import{_ as e,c as s,o as n,a}from"./app.867b012f.js";const y=JSON.parse('{"title":"redis \u5185\u5B58\u788E\u7247\u7387","description":"","frontmatter":{},"headers":[],"relativePath":"classify/Redis/redis\u5185\u5B58\u788E\u7247\u7387.md","lastUpdated":null}'),o={name:"classify/Redis/redis\u5185\u5B58\u788E\u7247\u7387.md"},c=a(`<h1 id="redis-\u5185\u5B58\u788E\u7247\u7387" tabindex="-1">redis \u5185\u5B58\u788E\u7247\u7387 <a class="header-anchor" href="#redis-\u5185\u5B58\u788E\u7247\u7387" aria-hidden="true">#</a></h1><p><code>Redis</code> \u7684\u4E00\u4E2A\u5F88\u91CD\u8981\u7684\u6027\u80FD\u6307\u6807 \u2014\u2014 <code>mem_fragmentation_ratio</code><strong>\uFF08\u5185\u5B58\u788E\u7247\u7387\uFF09</strong><code>mem_fragmentation_ratio</code> \u662F\u901A\u8FC7\u4EE5\u4E0B\u7684\u516C\u5F0F\u8BA1\u7B97\u51FA\u6765\u7684</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mem_fragmentation_ratio = used_memory_rss / used_memory</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u53EF\u4EE5\u76F4\u63A5\u7528\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B\u5F97\u5230</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># redis-cli -h localhost -p 6379 info</span></span>
<span class="line"><span style="color:#A6ACCD;">used_memory:1949752</span></span>
<span class="line"><span style="color:#A6ACCD;">used_memory_human:1.86M</span></span>
<span class="line"><span style="color:#A6ACCD;">used_memory_rss:9281536</span></span>
<span class="line"><span style="color:#A6ACCD;">used_memory_peak:1994224</span></span>
<span class="line"><span style="color:#A6ACCD;">used_memory_peak_human:1.90M</span></span>
<span class="line"><span style="color:#A6ACCD;">mem_fragmentation_ratio:4.76</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\u5185\u5B58\u788E\u7247\u7387\u5DF2\u7ECF\u8FBE\u5230\u4E86 <code>4.76</code>\uFF0C<strong>\u5185\u5B58\u788E\u7247\u7387\u7565\u9AD8\u4E8E <code>1</code> \u662F\u5C5E\u4E8E\u6B63\u5E38\uFF0C\u4F46\u8D85\u51FA <code>1.5</code> \u7684\u65F6\u5019\u5C31\u8BF4\u660E <code>redis</code> \u7684\u5185\u5B58\u7BA1\u7406\u53D8\u5DEE\u4E86</strong>\u3002</p><p><strong>\u5185\u5B58\u788E\u7247\u7387\u9AD8\u7684\u539F\u56E0</strong></p><p>\u5206\u6790\u5B9E\u9645\u73AF\u5883\uFF0C\u56E0\u4E3A\u8BE5 <code>redis</code> \u4E3B\u8981\u662F\u5B58\u50A8\u9891\u7E41\u66F4\u65B0\u7684\u6570\u636E\uFF0C\u6BCF\u6B21\u66F4\u65B0\u6570\u636E\u4E4B\u524D\uFF0C<code>redis</code> \u4F1A\u5220\u9664\u65E7\u7684\u6570\u636E\uFF0C\u5B9E\u9645\u4E0A\uFF0C\u7531\u4E8E <code>redis</code> \u91CA\u653E\u4E86\u5185\u5B58\u5757\uFF0C<strong>\u4F46\u5185\u5B58\u5206\u914D\u5668\u5E76\u6CA1\u6709\u8FD4\u56DE\u5185\u5B58\u7ED9\u64CD\u4F5C\u7CFB\u7EDF</strong>\uFF0C\u8FD9\u4E2A\u5185\u5B58\u5206\u914D\u5668\u662F\u5728\u7F16\u8BD1\u65F6\u6307\u5B9A\u7684\uFF0C\u53EF\u4EE5\u662F <code>libc</code>\u3001<code>jemalloc</code> \u6216\u8005 <code>tcmalloc</code>\u3002<code>used_memory_rss</code> \u4F1A\u8D8A\u6765\u8D8A\u5927\uFF0C\u5BFC\u81F4 <code>mem_fragmentation_ratio</code> \u8D8A\u6765\u8D8A\u9AD8</p><p><strong>\u9047\u5230\u53D8\u957F <code>key-value</code> \u8D1F\u8F7D\uFF1A</strong> \u5B58\u50A8\u7684\u6570\u636E\u957F\u77ED\u5DEE\u5F02\u8F83\u5927\uFF0C\u9891\u7E41\u66F4\u65B0\uFF0C<code>redis</code> \u7684\u6BCF\u4E2A <code>k-v</code> \u5BF9\u521D\u59CB\u5316\u7684\u5185\u5B58\u5927\u5C0F\u662F\u6700\u9002\u5408\u7684\uFF0C\u5F53\u4FEE\u6539\u7684 <code>value</code> \u6539\u53D8\u7684\u5E76\u4E14\u539F\u6765\u5185\u5B58\u5927\u5C0F\u4E0D\u9002\u7528\u7684\u65F6\u5019\uFF0C\u5C31\u9700\u8981\u91CD\u65B0\u5206\u914D\u5185\u5B58\u3002\u91CD\u65B0\u5206\u914D\u4E4B\u540E\uFF0C\u5C31\u4F1A\u6709\u4E00\u90E8\u5206\u5185\u5B58 <code>redis</code> \u65E0\u6CD5\u6B63\u5E38\u56DE\u6536\uFF0C\u4E00\u76F4\u5360\u7528\u7740\u3002</p><p><strong><code>maxmemory</code> \u9650\u5236\u5BFC\u81F4key\u88AB\u56DE\u6536\u5220\u9664\uFF1A</strong> redis \u5199\u5165\u5927\u91CF\u6570\u636E\uFF0C\u8FD9\u4E9B\u6570\u636E\u7684 key \u548C\u539F\u6765\u7684\u6570\u636E\u5F88\u591A\u4E0D\u4E00\u81F4\uFF0C\u6570\u636E\u8D85\u8FC7 <code>maxmemory</code> \u9650\u5236\u540E redis \u4F1A\u901A\u8FC7 key \u7684\u56DE\u6536\u7B56\u7565\u5C06\u90E8\u5206\u65E7\u6570\u636E\u6DD8\u6C70\uFF0C\u800C\u88AB\u6DD8\u6C70\u7684\u6570\u636E\u672C\u8EAB\u5360\u7528\u7684\u5185\u5B58\u5374\u6CA1\u6709\u88AB redis \u8FDB\u7A0B\u91CA\u653E\uFF0C\u5BFC\u81F4 redis \u5185\u5B58\u7684\u6709\u6548\u6570\u636E\u867D\u7136\u6CA1\u6709\u8D85\u8FC7\u6700\u5927\u5185\u5B58\uFF0C\u4F46\u662F\u6574\u4E2A\u8FDB\u7A0B\u7684\u5185\u5B58\u5728\u4E00\u76F4\u589E\u957F\u3002</p><p><strong>\u89E3\u51B3\u65B9\u6CD5</strong></p><p>1\u3001\u91CD\u542F <code>Redis</code> \u670D\u52A1\u5668\u53EF\u4EE5\u8BA9\u989D\u5916\u4EA7\u751F\u7684\u5185\u5B58\u788E\u7247\u5931\u6548\u5E76\u91CD\u65B0\u4F5C\u4E3A\u65B0\u5185\u5B58\u6765\u4F7F\u7528\uFF0C\u4F7F\u64CD\u4F5C\u7CFB\u7EDF\u6062\u590D\u9AD8\u6548\u7684\u5185\u5B58\u7BA1\u7406\u4FEE\u6539\u5185\u5B58\u5206\u914D\u5668\u3002</p><p>2\u3001<code>redis</code> \u652F\u6301 <code>glibc\u2019s malloc</code>\u3001<code>jemalloc11</code>\u3001<code>tcmalloc</code> \u51E0\u79CD\u4E0D\u540C\u7684\u5185\u5B58\u5206\u914D\u5668\uFF0C\u6BCF\u4E2A\u5206\u914D\u5668\u5728\u5185\u5B58\u5206\u914D\u548C\u788E\u7247\u4E0A\u90FD\u6709\u4E0D\u540C\u7684\u5B9E\u73B0\u3002\u4E0D\u5EFA\u8BAE\u666E\u901A\u7BA1\u7406\u5458\u4FEE\u6539 <code>Redis</code> \u9ED8\u8BA4\u5185\u5B58\u5206\u914D\u5668\uFF0C\u56E0\u4E3A\u8FD9\u9700\u8981\u5B8C\u5168\u7406\u89E3\u8FD9\u51E0\u79CD\u5185\u5B58\u5206\u914D\u5668\u7684\u5DEE\u5F02\uFF0C\u4E5F\u8981\u91CD\u65B0\u7F16\u8BD1 <code>Redis</code></p><p>3\u3001<code>redis4.0</code> \u4EE5\u4E0A\u53EF\u4EE5\u4F7F\u7528\u65B0\u589E\u6307\u4EE4\u6765\u624B\u52A8\u56DE\u6536\u5185\u5B58\u788E\u7247\uFF0C\u914D\u7F6E\u76D1\u63A7\u4F7F\u7528\u6027\u80FD\u66F4\u4F73\u3002\u8B66\u544A\u6B64\u529F\u80FD\u662F\u5B9E\u9A8C\u6027\u7684\u3002\u7136\u800C\uFF0C\u5373\u4F7F\u5728\u751F\u4EA7\u4E2D\u4E5F\u8FDB\u884C\u4E86\u538B\u529B\u6D4B\u8BD5\uFF0C\u5E76\u4E14\u7531\u591A\u4E2A\u5DE5\u7A0B\u5E08\u624B\u52A8\u6D4B\u8BD5\u4E86\u4E00\u6BB5\u65F6\u95F4\u3002</p>`,14),d=[c];function r(p,l,i,t,m,_){return n(),s("div",null,d)}const b=e(o,[["render",r]]);export{y as __pageData,b as default};
