import{_ as s,c as a,o as n,a as l}from"./app.76403961.js";const y=JSON.parse('{"title":"RabbitMQ \u547D\u4EE4\u884C\u548C\u7BA1\u63A7\u53F0\u7684\u57FA\u7840\u64CD\u4F5C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u57FA\u7840\u670D\u52A1\u7684\u547D\u4EE4\u64CD\u4F5C","slug":"\u4E00\u3001\u57FA\u7840\u670D\u52A1\u7684\u547D\u4EE4\u64CD\u4F5C","link":"#\u4E00\u3001\u57FA\u7840\u670D\u52A1\u7684\u547D\u4EE4\u64CD\u4F5C","children":[]},{"level":2,"title":"\u4E8C\u3001\u5BF9 rabbitmq \u5177\u4F53\u7EC4\u4EF6\u7684\u547D\u4EE4","slug":"\u4E8C\u3001\u5BF9-rabbitmq-\u5177\u4F53\u7EC4\u4EF6\u7684\u547D\u4EE4","link":"#\u4E8C\u3001\u5BF9-rabbitmq-\u5177\u4F53\u7EC4\u4EF6\u7684\u547D\u4EE4","children":[]},{"level":2,"title":"1\u3001\u5BF9\u865A\u62DF\u4E3B\u673A\u64CD\u4F5C","slug":"_1\u3001\u5BF9\u865A\u62DF\u4E3B\u673A\u64CD\u4F5C","link":"#_1\u3001\u5BF9\u865A\u62DF\u4E3B\u673A\u64CD\u4F5C","children":[]},{"level":2,"title":"2\u3001\u961F\u5217\u64CD\u4F5C","slug":"_2\u3001\u961F\u5217\u64CD\u4F5C","link":"#_2\u3001\u961F\u5217\u64CD\u4F5C","children":[]},{"level":2,"title":"\u4E09\u3001\u9AD8\u7EA7\u64CD\u4F5C","slug":"\u4E09\u3001\u9AD8\u7EA7\u64CD\u4F5C","link":"#\u4E09\u3001\u9AD8\u7EA7\u64CD\u4F5C","children":[]}],"relativePath":"classify/RabbitMq/RabbitMQ\u547D\u4EE4\u884C.md","lastUpdated":1678878433000}'),e={name:"classify/RabbitMq/RabbitMQ\u547D\u4EE4\u884C.md"},p=l(`<h1 id="rabbitmq-\u547D\u4EE4\u884C\u548C\u7BA1\u63A7\u53F0\u7684\u57FA\u7840\u64CD\u4F5C" tabindex="-1">RabbitMQ \u547D\u4EE4\u884C\u548C\u7BA1\u63A7\u53F0\u7684\u57FA\u7840\u64CD\u4F5C <a class="header-anchor" href="#rabbitmq-\u547D\u4EE4\u884C\u548C\u7BA1\u63A7\u53F0\u7684\u57FA\u7840\u64CD\u4F5C" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u57FA\u7840\u670D\u52A1\u7684\u547D\u4EE4\u64CD\u4F5C" tabindex="-1">\u4E00\u3001\u57FA\u7840\u670D\u52A1\u7684\u547D\u4EE4\u64CD\u4F5C <a class="header-anchor" href="#\u4E00\u3001\u57FA\u7840\u670D\u52A1\u7684\u547D\u4EE4\u64CD\u4F5C" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">rabbitmqctl stop_app </span><span style="color:#676E95;">#\u5173\u95ED\u5E94\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmqctl start_app </span><span style="color:#676E95;">#\u542F\u52A8\u5E94\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmqctl status </span><span style="color:#676E95;">#\u8282\u70B9\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmqctl add_user username passwordi </span><span style="color:#676E95;">#\u6DFB\u52A0\u7528\u6237</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmqctl list_users </span><span style="color:#676E95;">#\u5217\u51FA\u6240\u6709\u7528\u6237</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmqctl delete_user username </span><span style="color:#676E95;">#\u5220\u9664\u7528\u6237</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmqctl clear_permissions - p vhostpath username </span><span style="color:#676E95;">#\u6E05\u9664\u7528\u6237\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmqctl list_user_permissions_username </span><span style="color:#676E95;">#\u5217\u51FA\u7528\u6237\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmqctl change_password username newpassword </span><span style="color:#676E95;">#\u4FEE\u6539\u5BC6\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmqctl set_permissions -p vhostpath username </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">#\u8BBE\u7F6E\u7528\u6237\u6743\u9650\uFF0C\u6D89\u53CA\u7684\u7528\u6237\u547D\u4EE4\u8FD8\u6709\u8BB8\u591A\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u4E00\u4E00\u5217\u4E3E\u4E86</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u4E8C\u3001\u5BF9-rabbitmq-\u5177\u4F53\u7EC4\u4EF6\u7684\u547D\u4EE4" tabindex="-1">\u4E8C\u3001\u5BF9 rabbitmq \u5177\u4F53\u7EC4\u4EF6\u7684\u547D\u4EE4 <a class="header-anchor" href="#\u4E8C\u3001\u5BF9-rabbitmq-\u5177\u4F53\u7EC4\u4EF6\u7684\u547D\u4EE4" aria-hidden="true">#</a></h2><h2 id="_1\u3001\u5BF9\u865A\u62DF\u4E3B\u673A\u64CD\u4F5C" tabindex="-1">1\u3001\u5BF9\u865A\u62DF\u4E3B\u673A\u64CD\u4F5C <a class="header-anchor" href="#_1\u3001\u5BF9\u865A\u62DF\u4E3B\u673A\u64CD\u4F5C" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">rabbitmqctl add_vhost vhostpath </span><span style="color:#676E95;">#\u521B\u5EFA\u865A\u62DF\u4E3B\u673A</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmqctl list_vhosts </span><span style="color:#676E95;">#\u5217\u51FA\u6240\u6709\u865A\u62DF\u4E3B\u673A</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmqctl list_permissions -p vhostpath </span><span style="color:#676E95;">#\u5217\u51FA\u865A\u62DF\u4E3B\u673A\u4E0A\u6240\u6709\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmqctl delete_vhost vhostpath </span><span style="color:#676E95;">#\u5220\u9664\u865A\u62DF\u4E3B\u673A</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_2\u3001\u961F\u5217\u64CD\u4F5C" tabindex="-1">2\u3001\u961F\u5217\u64CD\u4F5C <a class="header-anchor" href="#_2\u3001\u961F\u5217\u64CD\u4F5C" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">rabbitmqctl list_queues </span><span style="color:#676E95;">#\u67E5\u770B\u6240\u6709\u961F\u5217\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmqctl -p vhostpath purge_queue bule </span><span style="color:#676E95;">#\u6E05\u9664\u961F\u5217\u91CC\u7684\u6D88\u606F</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u4E09\u3001\u9AD8\u7EA7\u64CD\u4F5C" tabindex="-1">\u4E09\u3001\u9AD8\u7EA7\u64CD\u4F5C <a class="header-anchor" href="#\u4E09\u3001\u9AD8\u7EA7\u64CD\u4F5C" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">rabbitmqctl reset </span><span style="color:#676E95;">#\u79FB\u9664\u6240\u6709\u6570\u636E\uFF0C\u8981\u5728rabbitmqctl stop_app\u4E4B\u540E\u4F7F\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmqctl join_clust </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">--ram</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#\u7EC4\u6210\u96C6\u7FA4\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmqctl clustr_status </span><span style="color:#676E95;">#\u67E5\u770B\u96C6\u7FA4\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmqctl change_cluster_node_type disc</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">ram </span><span style="color:#676E95;">#\u4FEE\u6539\u96C6\u7FA4\u8282\u70B9\u7684\u5B58\u50A8\u5F62\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmqctl forget_cluster_node </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">--offline</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#\u5FD8\u8BB0\u8282\u70B9\uFF08\u6458\u9664\u8282\u70B9\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmqctl rename_cluster_node oldnode1 newnode1 </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">oldnode2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">newnode2..</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#(\u4FEE\u6539\u8282\u70B9\u540D\u79F0)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,10),r=[p];function t(o,c,i,b,d,u){return n(),a("div",null,r)}const C=s(e,[["render",t]]);export{y as __pageData,C as default};
