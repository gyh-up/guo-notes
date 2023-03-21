import{_ as s,c as a,o as n,a as l}from"./app.76403961.js";const p="/guo-notes/mysql/image-20230314184304160.png",E=JSON.parse('{"title":"mysql\u8BFB\u5199\u5206\u79BB","description":"","frontmatter":{"typora-root-url":"..\\\\..\\\\public"},"headers":[{"level":2,"title":"\u4E00\u3001\u4E00\u4E3B\u4E00\u4ECE\u8BFB\u5199\u5206\u79BB","slug":"\u4E00\u3001\u4E00\u4E3B\u4E00\u4ECE\u8BFB\u5199\u5206\u79BB","link":"#\u4E00\u3001\u4E00\u4E3B\u4E00\u4ECE\u8BFB\u5199\u5206\u79BB","children":[]},{"level":2,"title":"\u4E8C\u3001\u53CC\u4E3B\u53CC\u4ECE\u8BFB\u5199\u5206\u79BB","slug":"\u4E8C\u3001\u53CC\u4E3B\u53CC\u4ECE\u8BFB\u5199\u5206\u79BB","link":"#\u4E8C\u3001\u53CC\u4E3B\u53CC\u4ECE\u8BFB\u5199\u5206\u79BB","children":[]},{"level":2,"title":"1\u3001\u53CC\u4E3B\u53CC\u4ECE\u642D\u5EFA","slug":"_1\u3001\u53CC\u4E3B\u53CC\u4ECE\u642D\u5EFA","link":"#_1\u3001\u53CC\u4E3B\u53CC\u4ECE\u642D\u5EFA","children":[]},{"level":2,"title":"2\u3001\u8BFB\u5199\u5206\u79BB\u914D\u7F6E","slug":"_2\u3001\u8BFB\u5199\u5206\u79BB\u914D\u7F6E","link":"#_2\u3001\u8BFB\u5199\u5206\u79BB\u914D\u7F6E","children":[]}],"relativePath":"classify/mysql/mysql\u8BFB\u5199\u5206\u79BB.md","lastUpdated":1678878433000}'),o={name:"classify/mysql/mysql\u8BFB\u5199\u5206\u79BB.md"},e=l(`<h1 id="mysql\u8BFB\u5199\u5206\u79BB" tabindex="-1">mysql\u8BFB\u5199\u5206\u79BB <a class="header-anchor" href="#mysql\u8BFB\u5199\u5206\u79BB" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u4E00\u4E3B\u4E00\u4ECE\u8BFB\u5199\u5206\u79BB" tabindex="-1">\u4E00\u3001\u4E00\u4E3B\u4E00\u4ECE\u8BFB\u5199\u5206\u79BB <a class="header-anchor" href="#\u4E00\u3001\u4E00\u4E3B\u4E00\u4ECE\u8BFB\u5199\u5206\u79BB" aria-hidden="true">#</a></h2><p>\u4E00\u4E3B\u4E00\u4ECE\u7684\u642D\u5EFA\u67E5\u770B<a href="/guo-notes/classify/mysql/mysql\u4E3B\u4ECE\u590D\u5236.html">mysql\u4E3B\u4ECE\u590D\u5236</a></p><p>\u901A\u8FC7\u914D\u7F6E <a href="/guo-notes/classify/mysql/mysql\u5206\u5E93\u5206\u8868.html#_3\u3001mycat-\u4E2D\u95F4\u4EF6">mycat\u4E2D\u95F4\u4EF6</a> \u7684schema.xml \u4E2D datahost \u6807\u7B7E\u5B9E\u73B0\u8BFB\u5199\u5206\u79BB\u3002</p><p>\u5176\u4E2D192.168.200.211\u4E3A\u4E3B\u8282\u70B9\uFF0C192.168.200.212\u4E3A\u4ECE\u8282\u70B9\u3002</p><div class="language-xml line-numbers-mode"><button class="copy"></button><span class="lang">xml</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dataHost</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dhost1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">maxCon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">minCon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">balance</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">writeType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">dbType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mysql</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">dbDriver</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jdbc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">heartboat</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">select user()</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">heartboat</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">writeHost</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">host</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">master</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">url</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jdbc:mysql://192.168.200.211:3306?useSSL=false</span><span style="color:#89DDFF;">&amp;</span><span style="color:#C3E88D;">amp</span><span style="color:#89DDFF;">;</span><span style="color:#C3E88D;">serverTimezone=Asia/Shanghai</span><span style="color:#89DDFF;">&amp;</span><span style="color:#C3E88D;">amp</span><span style="color:#89DDFF;">;</span><span style="color:#C3E88D;">characterEncoding=utf8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">user</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">password</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1234</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">readHost</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">host</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">slave</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">url</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jdbc:mysql://192.168.200.212:3306?useSSL=false</span><span style="color:#89DDFF;">&amp;</span><span style="color:#C3E88D;">amp</span><span style="color:#89DDFF;">;</span><span style="color:#C3E88D;">serverTimezone=Asia/Shanghai</span><span style="color:#89DDFF;">&amp;</span><span style="color:#C3E88D;">amp</span><span style="color:#89DDFF;">;</span><span style="color:#C3E88D;">characterEncoding=utf8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">user</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">password</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1234</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">writeHost</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dataHost</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u914D\u7F6E dataHost \u4E2D balance \u5C5E\u6027\uFF0C\u51B3\u5B9A\u8D1F\u8F7D\u5747\u8861\u7B56\u7565\u3002</p><p><img src="`+p+`" alt="image-20230314184304160"></p><p>\u95EE\u9898\uFF1A\u4E3B\u8282\u70B9\u5B95\u673A\u4E4B\u540E\uFF0C\u4E1A\u52A1\u7CFB\u7EDF\u5C31\u53EA\u80FD\u591F\u8BFB\uFF0C\u4E0D\u80FD\u5199\u5165\u6570\u636E\u4E86\u3002</p><h2 id="\u4E8C\u3001\u53CC\u4E3B\u53CC\u4ECE\u8BFB\u5199\u5206\u79BB" tabindex="-1">\u4E8C\u3001\u53CC\u4E3B\u53CC\u4ECE\u8BFB\u5199\u5206\u79BB <a class="header-anchor" href="#\u4E8C\u3001\u53CC\u4E3B\u53CC\u4ECE\u8BFB\u5199\u5206\u79BB" aria-hidden="true">#</a></h2><h2 id="_1\u3001\u53CC\u4E3B\u53CC\u4ECE\u642D\u5EFA" tabindex="-1">1\u3001\u53CC\u4E3B\u53CC\u4ECE\u642D\u5EFA <a class="header-anchor" href="#_1\u3001\u53CC\u4E3B\u53CC\u4ECE\u642D\u5EFA" aria-hidden="true">#</a></h2><p>\u5047\u8BBE \u5176\u4E2D192.168.200.211\u4E3A\u4E3B\u8282\u70B9\u4E00\uFF0C192.168.200.212\u4E3A\u4ECE\u8282\u70B9\u4E00\uFF0C192.168.200.213\u4E3A\u4E3B\u8282\u70B9\u4E8C\uFF0C192.168.200.214\u4E3A\u4ECE\u8282\u70B9\u4E8C\u3002</p><blockquote><p>\u4E3B\u4ECE\u590D\u5236</p></blockquote><p>\u5BF9 \u4E3B\u8282\u70B9\u4E00\u548C\u4ECE\u8282\u70B9\u4E00\uFF0C\u4E3B\u8282\u70B9\u4E8C\u548C\u4ECE\u8282\u70B9\u4E8C \u8FDB\u884C\u4E3B\u4ECE\u590D\u5236\u642D\u5EFA\uFF0C\u53C2\u8003<a href="/guo-notes/classify/mysql/mysql\u4E3B\u4ECE\u590D\u5236.html">mysql\u4E3B\u4ECE\u590D\u5236</a></p><blockquote><p>\u4E3B\u4E3B\u590D\u5236</p></blockquote><p>\u5BF9 \u4E3B\u8282\u70B9\u4E00\u548C\u4E3B\u8282\u70B9\u4E8C \u8FDB\u884C\u4E3B\u4E3B\u590D\u5236\u642D\u5EFA\uFF0C\u5B9E\u9645\u5C31\u662F\u4E24\u8282\u70B9\u8FDB\u884C\u4E92\u76F8\u590D\u5236</p><div class="language-sql line-numbers-mode"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#676E95;">-- \u4E3B\u8282\u70B9\u4E00\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">CHANGE RELICATION SOURCE </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> SOURCE_HOST</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">192.168.200.203</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,SOURCE_USER</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">itcst</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,SOURCE_PASSWORD</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Root@123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,SOURCE_LOG_FILE</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">binlog.000003</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,SOURCE_LOG_POST</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">663</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#676E95;">-- \u4E3B\u8282\u70B9\u4E8C\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">CHANGE RELICATION SOURCE </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> SOURCE_HOST</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">192.168.200.201</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,SOURCE_USER</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">itcst</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,SOURCE_PASSWORD</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Root@123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,SOURCE_LOG_FILE</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">binlog.000003</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,SOURCE_LOG_POST</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">663</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-sql line-numbers-mode"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#676E95;">-- \u5F00\u542F\u540C\u6B65\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#F78C6C;">start</span><span style="color:#A6ACCD;"> slave; </span></span>
<span class="line"><span style="color:#676E95;">-- \u67E5\u770B\u4E3B\u4ECE\u540C\u6B65\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">show slave </span><span style="color:#F78C6C;">status</span><span style="color:#A6ACCD;">; </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_2\u3001\u8BFB\u5199\u5206\u79BB\u914D\u7F6E" tabindex="-1">2\u3001\u8BFB\u5199\u5206\u79BB\u914D\u7F6E <a class="header-anchor" href="#_2\u3001\u8BFB\u5199\u5206\u79BB\u914D\u7F6E" aria-hidden="true">#</a></h2><p>mycat \u63A7\u5236\u540E\u53F0\u6570\u636E\u5E93\u7684\u8BFB\u5199\u5206\u79BB\u548C\u8D1F\u8F7D\u5747\u8861\u7531schema.xml\u6587\u4EF6dataHost\u6807\u7B7E\u5C5E\u6027\u63A7\u5236\uFF0C\u901A\u8FC7writeType\u53CASwitchType\u6765\u5B8C\u6210\u5931\u8D25\u81EA\u52A8\u5207\u6362\u3002</p><div class="language-xml line-numbers-mode"><button class="copy"></button><span class="lang">xml</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dataHost</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dhost1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">maxCon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">minCon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">balance</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">writeType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">SwitchType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">dbType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mysql</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">dbDriver</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jdbc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">heartboat</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">select user()</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">heartboat</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">writeHost</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">host</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">master1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">url</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jdbc:mysql://192.168.200.211:3306?useSSL=false</span><span style="color:#89DDFF;">&amp;</span><span style="color:#C3E88D;">amp</span><span style="color:#89DDFF;">;</span><span style="color:#C3E88D;">serverTimezone=Asia/Shanghai</span><span style="color:#89DDFF;">&amp;</span><span style="color:#C3E88D;">amp</span><span style="color:#89DDFF;">;</span><span style="color:#C3E88D;">characterEncoding=utf8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">user</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">password</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1234</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">readHost</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">host</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">slave1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">url</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jdbc:mysql://192.168.200.212:3306?useSSL=false</span><span style="color:#89DDFF;">&amp;</span><span style="color:#C3E88D;">amp</span><span style="color:#89DDFF;">;</span><span style="color:#C3E88D;">serverTimezone=Asia/Shanghai</span><span style="color:#89DDFF;">&amp;</span><span style="color:#C3E88D;">amp</span><span style="color:#89DDFF;">;</span><span style="color:#C3E88D;">characterEncoding=utf8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">user</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">password</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1234</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">writeHost</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">   	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">writeHost</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">host</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">master2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">url</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jdbc:mysql://192.168.200.213:3306?useSSL=false</span><span style="color:#89DDFF;">&amp;</span><span style="color:#C3E88D;">amp</span><span style="color:#89DDFF;">;</span><span style="color:#C3E88D;">serverTimezone=Asia/Shanghai</span><span style="color:#89DDFF;">&amp;</span><span style="color:#C3E88D;">amp</span><span style="color:#89DDFF;">;</span><span style="color:#C3E88D;">characterEncoding=utf8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">user</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">password</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1234</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">readHost</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">host</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">slave2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">url</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jdbc:mysql://192.168.200.214:3306?useSSL=false</span><span style="color:#89DDFF;">&amp;</span><span style="color:#C3E88D;">amp</span><span style="color:#89DDFF;">;</span><span style="color:#C3E88D;">serverTimezone=Asia/Shanghai</span><span style="color:#89DDFF;">&amp;</span><span style="color:#C3E88D;">amp</span><span style="color:#89DDFF;">;</span><span style="color:#C3E88D;">characterEncoding=utf8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">user</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">password</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1234</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">writeHost</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dataHost</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">balance=&quot;1&quot; \uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">	\u4EE3\u8868\u5168\u90E8\u7684 readHost \u4E0E\u5907\u7528 writeHost \u53C2\u4E0E select \u8BED\u53E5\u7684\u8D1F\u8F7D\u5747\u8861\uFF0C\u7B80\u5355\u5730\u8BF4\uFF0C\u5F53\u53CC\u4E3B\u53CC\u4ECE\u6A21\u5F0F\uFF08M1-&gt;S1,M2-&gt;S2,\u5E76\u4E14M1\u4E0EM2\u4E92\u4E3A\u4E3B\u5907\uFF09\uFF0C\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0CM2,S1,S2\u90FD\u53C2\u4E0Eselect\u8BED\u53E5\u7684\u8D1F\u8F7D\u5747\u8861\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">writeType\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">	0\uFF1A\u5199\u64CD\u4F5C\u90FD\u8F6C\u53D1\u5230\u7B2C\u4E00\u53F0writeHost\uFF0CwriteHost1\u6302\u4E86\uFF0C\u4F1A\u5207\u6362\u5230writeHost2\u4E0A\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">	1\uFF1A\u6240\u6709\u7684\u5199\u64CD\u4F5C\u90FD\u968F\u673A\u5730\u53D1\u9001\u5230\u914D\u7F6E\u7684writeHost\u4E0A\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">SwitchType\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">	-1\uFF1A\u4E0D\u81EA\u52A8\u5207\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;">	1\uFF1A\u81EA\u52A8\u5207\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,22),t=[e];function r(c,D,F,y,C,i){return n(),a("div",null,t)}const m=s(o,[["render",r]]);export{E as __pageData,m as default};
