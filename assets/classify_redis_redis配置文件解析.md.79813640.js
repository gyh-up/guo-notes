import{_ as e,c as s,o as i,a}from"./app.6bd15930.js";const r="/guo-notes/redis/wps1.jpg",p="/guo-notes/redis/wps2.jpg",t="/guo-notes/redis/wps3.jpg",n="/guo-notes/redis/wps5.jpg",l="/guo-notes/redis/wps6.jpg",d="/guo-notes/redis/wps7.jpg",o="/guo-notes/redis/wps8.jpg",c="/guo-notes/redis/wps9.jpg",m="/guo-notes/redis/wps10.jpg",h="/guo-notes/redis/wps11.jpg",_="/guo-notes/redis/wps12.jpg",u="/guo-notes/redis/wps13.jpg",x=JSON.parse('{"title":"redis \u914D\u7F6E\u6587\u4EF6\u89E3\u6790","description":"","frontmatter":{"typora-root-url":"..\\\\..\\\\public"},"headers":[{"level":2,"title":"1\u3001\u5F00\u5934","slug":"_1\u3001\u5F00\u5934","link":"#_1\u3001\u5F00\u5934","children":[]},{"level":2,"title":"2\u3001INCLUDES","slug":"_2\u3001includes","link":"#_2\u3001includes","children":[]},{"level":2,"title":"3\u3001MODULES","slug":"_3\u3001modules","link":"#_3\u3001modules","children":[]},{"level":2,"title":"4\u3001NETWORK","slug":"_4\u3001network","link":"#_4\u3001network","children":[]},{"level":2,"title":"5\u3001GENERAL","slug":"_5\u3001general","link":"#_5\u3001general","children":[]},{"level":2,"title":"6\u3001SNAPSHOTTING","slug":"_6\u3001snapshotting","link":"#_6\u3001snapshotting","children":[]},{"level":2,"title":"7\u3001REPLICATION","slug":"_7\u3001replication","link":"#_7\u3001replication","children":[]},{"level":2,"title":"8\u3001SECURITY","slug":"_8\u3001security","link":"#_8\u3001security","children":[]},{"level":2,"title":"9\u3001CLIENTS","slug":"_9\u3001clients","link":"#_9\u3001clients","children":[]},{"level":2,"title":"10\u3001MEMORY MANAGEMENT","slug":"_10\u3001memory-management","link":"#_10\u3001memory-management","children":[]},{"level":2,"title":"11\u3001APPEND ONLY MODE","slug":"_11\u3001append-only-mode","link":"#_11\u3001append-only-mode","children":[]},{"level":2,"title":"12\u3001LUA SCRIPTING","slug":"_12\u3001lua-scripting","link":"#_12\u3001lua-scripting","children":[]},{"level":2,"title":"13\u3001REDIS CLUSTER","slug":"_13\u3001redis-cluster","link":"#_13\u3001redis-cluster","children":[]}],"relativePath":"classify/redis/redis\u914D\u7F6E\u6587\u4EF6\u89E3\u6790.md","lastUpdated":1676891297000}'),g={name:"classify/redis/redis\u914D\u7F6E\u6587\u4EF6\u89E3\u6790.md"},f=a('<h1 id="redis-\u914D\u7F6E\u6587\u4EF6\u89E3\u6790" tabindex="-1">redis \u914D\u7F6E\u6587\u4EF6\u89E3\u6790 <a class="header-anchor" href="#redis-\u914D\u7F6E\u6587\u4EF6\u89E3\u6790" aria-hidden="true">#</a></h1><h2 id="_1\u3001\u5F00\u5934" tabindex="-1">1\u3001\u5F00\u5934 <a class="header-anchor" href="#_1\u3001\u5F00\u5934" aria-hidden="true">#</a></h2><p><img src="'+r+'" alt="img"></p><p><strong>\u6307\u660Eredis\u542F\u52A8\u65F6\u5FC5\u987B\u628A\u914D\u7F6E\u6587\u4EF6\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u547D\u4EE4\u53C2\u6570\uFF0C</strong> \u9700\u8981\u6CE8\u610F\u7684\u662F\u540E\u9762\u9700\u8981\u4F7F\u7528\u5185\u5B58\u5927\u5C0F\u65F6\uFF0C\u53EF\u4EE5\u6307\u5B9A\u5355\u4F4D\uFF0C\u901A\u5E38\u662F\u4EE5 k\uFF0Cgb\uFF0Cm\u7684\u5F62\u5F0F\u51FA\u73B0\uFF0C\u5E76\u4E14<strong>\u5355\u4F4D\u4E0D\u533A\u5206\u5927\u5C0F\u5199</strong>\u3002</p><h2 id="_2\u3001includes" tabindex="-1">2\u3001INCLUDES <a class="header-anchor" href="#_2\u3001includes" aria-hidden="true">#</a></h2><p><img src="'+p+'" alt="img"></p><p>\u6211\u4EEC\u77E5\u9053Redis\u53EA\u6709\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u5982\u679C\u591A\u4E2A\u4EBA\u8FDB\u884C\u5F00\u53D1\u7EF4\u62A4\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u591A\u4E2A\u8FD9\u6837\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u65F6\u5019\u591A\u4E2A\u914D\u7F6E\u6587\u4EF6\u5C31\u53EF\u4EE5\u5728\u6B64\u901A\u8FC7 include /path/to/local.conf \u914D\u7F6E\u8FDB\u6765\uFF0C\u800C\u539F\u672C\u7684 redis.conf \u914D\u7F6E\u6587\u4EF6\u5C31\u4F5C\u4E3A\u4E00\u4E2A\u603B\u95F8\u3002</p><p>ps:\u5982\u679C\u7528\u8FC7struts2 \u5F00\u53D1\u7684\u540C\u5B66\uFF0C\u5728\u9879\u76EE\u7EC4\u4E2D\u591A\u4EBA\u5F00\u53D1\u7684\u60C5\u51B5\u4E0B\uFF0C\u901A\u5E38\u4F1A\u6709\u591A\u4E2Astruts2.xml \u6587\u4EF6\uFF0C\u8FD9\u65F6\u5019\u4E5F\u4F1A\u901A\u8FC7\u7C7B\u65F6\u7684\u914D\u7F6E\u5F15\u5165\u8FDB\u6765\u3002</p><p>\u53E6\u5916\u9700\u8981\u6CE8\u610F\u7684\u65F6\uFF0C\u5982\u679C\u5C06\u6B64\u914D\u7F6E\u5199\u5728redis.conf \u6587\u4EF6\u7684\u5F00\u5934\uFF0C\u90A3\u4E48\u540E\u9762\u7684\u914D\u7F6E\u4F1A\u8986\u76D6\u5F15\u5165\u6587\u4EF6\u7684\u914D\u7F6E\uFF0C\u5982\u679C\u60F3\u4EE5\u5F15\u5165\u6587\u4EF6\u7684\u914D\u7F6E\u4E3A\u4E3B\uFF0C\u90A3\u4E48\u9700\u8981\u5C06 include \u914D\u7F6E\u5199\u5728 redis.conf \u6587\u4EF6\u7684\u672B\u5C3E\u3002</p><h2 id="_3\u3001modules" tabindex="-1">3\u3001MODULES <a class="header-anchor" href="#_3\u3001modules" aria-hidden="true">#</a></h2><p><img src="'+t+'" alt="img"></p><p>redis3.0\u7684\u7206\u70B8\u529F\u80FD\u662F\u65B0\u589E\u4E86\u96C6\u7FA4\uFF0C\u800Credis4.0\u5C31\u662F\u57283.0\u7684\u57FA\u7840\u4E0A\u65B0\u589E\u4E86\u8BB8\u591A\u529F\u80FD\uFF0C\u5176\u4E2D\u8FD9\u91CC\u7684 \u81EA\u5B9A\u4E49\u6A21\u5757\u914D\u7F6E\u5C31\u662F\u5176\u4E2D\u4E4B\u4E00\u3002\u901A\u8FC7\u8FD9\u91CC\u7684 loadmodule \u914D\u7F6E\u5C06\u5F15\u5165\u81EA\u5B9A\u4E49\u6A21\u5757\u6765\u65B0\u589E\u4E00\u4E9B\u529F\u80FD\u3002</p><h2 id="_4\u3001network" tabindex="-1">4\u3001NETWORK <a class="header-anchor" href="#_4\u3001network" aria-hidden="true">#</a></h2><p>![img](/redis/wps4.jpg</p><p>ps:\u8FD9\u91CC\u7684\u914D\u7F6E\u8F83\u957F\uFF0C\u6211\u53EA\u622A\u53D6\u4E86\u4E00\u90E8\u5206\uFF0C\u4E0B\u540C\u3002</p><p>\u2460\u3001bind:\u7ED1\u5B9Aredis\u670D\u52A1\u5668\u7F51\u5361IP\uFF0C\u9ED8\u8BA4\u4E3A127.0.0.1,\u5373\u672C\u5730\u56DE\u73AF\u5730\u5740\u3002\u8FD9\u6837\u7684\u8BDD\uFF0C\u8BBF\u95EEredis\u670D\u52A1\u53EA\u80FD\u901A\u8FC7\u672C\u673A\u7684\u5BA2\u6237\u7AEF\u8FDE\u63A5\uFF0C\u800C\u65E0\u6CD5\u901A\u8FC7\u8FDC\u7A0B\u8FDE\u63A5\u3002\u5982\u679Cbind\u9009\u9879\u4E3A\u7A7A\u7684\u8BDD\uFF0C\u90A3\u4F1A\u63A5\u53D7\u6240\u6709\u6765\u81EA\u4E8E\u53EF\u7528\u7F51\u7EDC\u63A5\u53E3\u7684\u8FDE\u63A5\u3002</p><p>\u2461\u3001port\uFF1A\u6307\u5B9Aredis\u8FD0\u884C\u7684\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u662F6379\u3002\u7531\u4E8ERedis\u662F\u5355\u7EBF\u7A0B\u6A21\u578B\uFF0C\u56E0\u6B64\u5355\u673A\u5F00\u591A\u4E2ARedis\u8FDB\u7A0B\u7684\u65F6\u5019\u4F1A\u4FEE\u6539\u7AEF\u53E3\u3002</p><p>\u2462\u3001timeout\uFF1A\u8BBE\u7F6E\u5BA2\u6237\u7AEF\u8FDE\u63A5\u65F6\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002\u5F53\u5BA2\u6237\u7AEF\u5728\u8FD9\u6BB5\u65F6\u95F4\u5185\u6CA1\u6709\u53D1\u51FA\u4EFB\u4F55\u6307\u4EE4\uFF0C\u90A3\u4E48\u5173\u95ED\u8BE5\u8FDE\u63A5\u3002\u9ED8\u8BA4\u503C\u4E3A0\uFF0C\u8868\u793A\u4E0D\u5173\u95ED\u3002</p><p>\u2463\u3001tcp-keepalive \uFF1A\u5355\u4F4D\u662F\u79D2\uFF0C\u8868\u793A\u5C06\u5468\u671F\u6027\u7684\u4F7F\u7528SO_KEEPALIVE\u68C0\u6D4B\u5BA2\u6237\u7AEF\u662F\u5426\u8FD8\u5904\u4E8E\u5065\u5EB7\u72B6\u6001\uFF0C\u907F\u514D\u670D\u52A1\u5668\u4E00\u76F4\u963B\u585E\uFF0C\u5B98\u65B9\u7ED9\u51FA\u7684\u5EFA\u8BAE\u503C\u662F300s\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E3A0\uFF0C\u5219\u4E0D\u4F1A\u5468\u671F\u6027\u7684\u68C0\u6D4B\u3002</p><h2 id="_5\u3001general" tabindex="-1">5\u3001GENERAL <a class="header-anchor" href="#_5\u3001general" aria-hidden="true">#</a></h2><p><img src="'+n+'" alt="img"></p><p>\u5177\u4F53\u914D\u7F6E\u8BE6\u89E3\uFF1A</p><p>\u2460\u3001daemonize:\u8BBE\u7F6E\u4E3Ayes\u8868\u793A\u6307\u5B9ARedis\u4EE5\u5B88\u62A4\u8FDB\u7A0B\u7684\u65B9\u5F0F\u542F\u52A8\uFF08\u540E\u53F0\u542F\u52A8\uFF09\u3002\u9ED8\u8BA4\u503C\u4E3A no</p><p>\u2461\u3001pidfile:\u914D\u7F6EPID\u6587\u4EF6\u8DEF\u5F84\uFF0C\u5F53redis\u4F5C\u4E3A\u5B88\u62A4\u8FDB\u7A0B\u8FD0\u884C\u7684\u65F6\u5019\uFF0C\u5B83\u4F1A\u628A pid \u9ED8\u8BA4\u5199\u5230 /var/redis/run/redis_6379.pid \u6587\u4EF6\u91CC\u9762</p><p>\u2462\u3001loglevel \uFF1A\u5B9A\u4E49\u65E5\u5FD7\u7EA7\u522B\u3002\u9ED8\u8BA4\u503C\u4E3Anotice\uFF0C\u6709\u5982\u4E0B4\u79CD\u53D6\u503C\uFF1A</p><p>debug\uFF08\u8BB0\u5F55\u5927\u91CF\u65E5\u5FD7\u4FE1\u606F\uFF0C\u9002\u7528\u4E8E\u5F00\u53D1\u3001\u6D4B\u8BD5\u9636\u6BB5\uFF09</p><p>verbose\uFF08\u8F83\u591A\u65E5\u5FD7\u4FE1\u606F\uFF09</p><p>notice\uFF08\u9002\u91CF\u65E5\u5FD7\u4FE1\u606F\uFF0C\u4F7F\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\uFF09</p><p>warning\uFF08\u4EC5\u6709\u90E8\u5206\u91CD\u8981\u3001\u5173\u952E\u4FE1\u606F\u624D\u4F1A\u88AB\u8BB0\u5F55\uFF09</p><p>\u2463\u3001logfile \uFF1A\u914D\u7F6Elog\u6587\u4EF6\u5730\u5740,\u9ED8\u8BA4\u6253\u5370\u5728\u547D\u4EE4\u884C\u7EC8\u7AEF\u7684\u7A97\u53E3\u4E0A</p><p>\u2464\u3001databases\uFF1A\u8BBE\u7F6E\u6570\u636E\u5E93\u7684\u6570\u76EE\u3002\u9ED8\u8BA4\u7684\u6570\u636E\u5E93\u662FDB 0 \uFF0C\u53EF\u4EE5\u5728\u6BCF\u4E2A\u8FDE\u63A5\u4E0A\u4F7F\u7528 <code>select &lt;dbid&gt;</code> \u547D\u4EE4\u9009\u62E9\u4E00\u4E2A\u4E0D\u540C\u7684\u6570\u636E\u5E93\uFF0Cdbid\u662F\u4E00\u4E2A\u4ECB\u4E8E0\u5230databases - 1 \u4E4B\u95F4\u7684\u6570\u503C\u3002\u9ED8\u8BA4\u503C\u662F 16\uFF0C\u4E5F\u5C31\u662F\u8BF4\u9ED8\u8BA4Redis\u670916\u4E2A\u6570\u636E\u5E93\u3002</p><h2 id="_6\u3001snapshotting" tabindex="-1">6\u3001SNAPSHOTTING <a class="header-anchor" href="#_6\u3001snapshotting" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u7684\u914D\u7F6E\u4E3B\u8981\u7528\u6765\u505A\u6301\u4E45\u5316\u64CD\u4F5C\u3002</p><p><img src="'+l+'" alt="img"></p><p>\u2460\u3001save\uFF1A\u8FD9\u91CC\u662F\u7528\u6765\u914D\u7F6E\u89E6\u53D1 Redis\u7684\u6301\u4E45\u5316\u6761\u4EF6\uFF0C\u4E5F\u5C31\u662F\u4EC0\u4E48\u65F6\u5019\u5C06\u5185\u5B58\u4E2D\u7684\u6570\u636E\u4FDD\u5B58\u5230\u786C\u76D8\u3002\u9ED8\u8BA4\u5982\u4E0B\u914D\u7F6E\uFF1A</p><p>save 900 1\uFF1A\u8868\u793A900 \u79D2\u5185\u5982\u679C\u81F3\u5C11\u6709 1 \u4E2A key \u7684\u503C\u53D8\u5316\uFF0C\u5219\u4FDD\u5B58</p><p>save 300 10\uFF1A\u8868\u793A300 \u79D2\u5185\u5982\u679C\u81F3\u5C11\u6709 10 \u4E2A key \u7684\u503C\u53D8\u5316\uFF0C\u5219\u4FDD\u5B58</p><p>save 60 10000\uFF1A\u8868\u793A60 \u79D2\u5185\u5982\u679C\u81F3\u5C11\u6709 10000 \u4E2A key \u7684\u503C\u53D8\u5316\uFF0C\u5219\u4FDD\u5B58</p><p>\u5F53\u7136\u5982\u679C\u4F60\u53EA\u662F\u7528Redis\u7684\u7F13\u5B58\u529F\u80FD\uFF0C\u4E0D\u9700\u8981\u6301\u4E45\u5316\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u6CE8\u91CA\u6389\u6240\u6709\u7684 save \u884C\u6765\u505C\u7528\u4FDD\u5B58\u529F\u80FD\u3002\u53EF\u4EE5\u76F4\u63A5\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32\u6765\u5B9E\u73B0\u505C\u7528\uFF1Asave &quot;&quot;</p><p>\u2461\u3001stop-writes-on-bgsave-error \uFF1A\u9ED8\u8BA4\u503C\u4E3Ayes\u3002\u5F53\u542F\u7528\u4E86RDB\u4E14\u6700\u540E\u4E00\u6B21\u540E\u53F0\u4FDD\u5B58\u6570\u636E\u5931\u8D25\uFF0CRedis\u662F\u5426\u505C\u6B62\u63A5\u6536\u6570\u636E\u3002\u8FD9\u4F1A\u8BA9\u7528\u6237\u610F\u8BC6\u5230\u6570\u636E\u6CA1\u6709\u6B63\u786E\u6301\u4E45\u5316\u5230\u78C1\u76D8\u4E0A\uFF0C\u5426\u5219\u6CA1\u6709\u4EBA\u4F1A\u6CE8\u610F\u5230\u707E\u96BE\uFF08disaster\uFF09\u53D1\u751F\u4E86\u3002\u5982\u679CRedis\u91CD\u542F\u4E86\uFF0C\u90A3\u4E48\u53C8\u53EF\u4EE5\u91CD\u65B0\u5F00\u59CB\u63A5\u6536\u6570\u636E\u4E86</p><p>\u2462\u3001rdbcompression \uFF1B\u9ED8\u8BA4\u503C\u662Fyes\u3002\u5BF9\u4E8E\u5B58\u50A8\u5230\u78C1\u76D8\u4E2D\u7684\u5FEB\u7167\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u662F\u5426\u8FDB\u884C\u538B\u7F29\u5B58\u50A8\u3002\u5982\u679C\u662F\u7684\u8BDD\uFF0Credis\u4F1A\u91C7\u7528LZF\u7B97\u6CD5\u8FDB\u884C\u538B\u7F29\u3002\u5982\u679C\u4F60\u4E0D\u60F3\u6D88\u8017CPU\u6765\u8FDB\u884C\u538B\u7F29\u7684\u8BDD\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u5173\u95ED\u6B64\u529F\u80FD\uFF0C\u4F46\u662F\u5B58\u50A8\u5728\u78C1\u76D8\u4E0A\u7684\u5FEB\u7167\u4F1A\u6BD4\u8F83\u5927\u3002</p><p>\u2463\u3001rdbchecksum \uFF1A\u9ED8\u8BA4\u503C\u662Fyes\u3002\u5728\u5B58\u50A8\u5FEB\u7167\u540E\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u8BA9redis\u4F7F\u7528CRC64\u7B97\u6CD5\u6765\u8FDB\u884C\u6570\u636E\u6821\u9A8C\uFF0C\u4F46\u662F\u8FD9\u6837\u505A\u4F1A\u589E\u52A0\u5927\u7EA610%\u7684\u6027\u80FD\u6D88\u8017\uFF0C\u5982\u679C\u5E0C\u671B\u83B7\u53D6\u5230\u6700\u5927\u7684\u6027\u80FD\u63D0\u5347\uFF0C\u53EF\u4EE5\u5173\u95ED\u6B64\u529F\u80FD\u3002</p><p>\u2464\u3001dbfilename \uFF1A\u8BBE\u7F6E\u5FEB\u7167\u7684\u6587\u4EF6\u540D\uFF0C\u9ED8\u8BA4\u662F dump.rdb</p><p>\u2465\u3001dir\uFF1A\u8BBE\u7F6E\u5FEB\u7167\u6587\u4EF6\u7684\u5B58\u653E\u8DEF\u5F84\uFF0C\u8FD9\u4E2A\u914D\u7F6E\u9879\u4E00\u5B9A\u662F\u4E2A\u76EE\u5F55\uFF0C\u800C\u4E0D\u80FD\u662F\u6587\u4EF6\u540D\u3002\u4F7F\u7528\u4E0A\u9762\u7684 dbfilename \u4F5C\u4E3A\u4FDD\u5B58\u7684\u6587\u4EF6\u540D\u3002</p><h2 id="_7\u3001replication" tabindex="-1">7\u3001REPLICATION <a class="header-anchor" href="#_7\u3001replication" aria-hidden="true">#</a></h2><p><img src="'+d+'" alt="img"></p><p>\u2460\u3001slave-serve-stale-data\uFF1A\u9ED8\u8BA4\u503C\u4E3Ayes\u3002\u5F53\u4E00\u4E2A slave \u4E0E master \u5931\u53BB\u8054\u7CFB\uFF0C\u6216\u8005\u590D\u5236\u6B63\u5728\u8FDB\u884C\u7684\u65F6\u5019\uFF0Cslave \u53EF\u80FD\u4F1A\u6709\u4E24\u79CD\u8868\u73B0\uFF1A</p><p>1) \u5982\u679C\u4E3A yes \uFF0Cslave \u4ECD\u7136\u4F1A\u5E94\u7B54\u5BA2\u6237\u7AEF\u8BF7\u6C42\uFF0C\u4F46\u8FD4\u56DE\u7684\u6570\u636E\u53EF\u80FD\u662F\u8FC7\u65F6\uFF0C\u6216\u8005\u6570\u636E\u53EF\u80FD\u662F\u7A7A\u7684\u5728\u7B2C\u4E00\u6B21\u540C\u6B65\u7684\u65F6\u5019</p><p>2) \u5982\u679C\u4E3A no \uFF0C\u5728\u4F60\u6267\u884C\u9664\u4E86 info he salveof \u4E4B\u5916\u7684\u5176\u4ED6\u547D\u4EE4\u65F6\uFF0Cslave \u90FD\u5C06\u8FD4\u56DE\u4E00\u4E2A &quot;SYNC with master in progress&quot; \u7684\u9519\u8BEF</p><p>\u2461\u3001slave-read-only\uFF1A\u914D\u7F6ERedis\u7684Slave\u5B9E\u4F8B\u662F\u5426\u63A5\u53D7\u5199\u64CD\u4F5C\uFF0C\u5373Slave\u662F\u5426\u4E3A\u53EA\u8BFBRedis\u3002\u9ED8\u8BA4\u503C\u4E3Ayes\u3002</p><p>\u2462\u3001repl-diskless-sync\uFF1A\u4E3B\u4ECE\u6570\u636E\u590D\u5236\u662F\u5426\u4F7F\u7528\u65E0\u786C\u76D8\u590D\u5236\u529F\u80FD\u3002\u9ED8\u8BA4\u503C\u4E3Ano\u3002</p><p>\u2463\u3001repl-diskless-sync-delay\uFF1A\u5F53\u542F\u7528\u65E0\u786C\u76D8\u5907\u4EFD\uFF0C\u670D\u52A1\u5668\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\u540E\u624D\u4F1A\u901A\u8FC7\u5957\u63A5\u5B57\u5411\u4ECE\u7AD9\u4F20\u9001RDB\u6587\u4EF6\uFF0C\u8FD9\u4E2A\u7B49\u5F85\u65F6\u95F4\u662F\u53EF\u914D\u7F6E\u7684\u3002 \u8FD9\u4E00\u70B9\u5F88\u91CD\u8981\uFF0C\u56E0\u4E3A\u4E00\u65E6\u4F20\u9001\u5F00\u59CB\uFF0C\u5C31\u4E0D\u53EF\u80FD\u518D\u4E3A\u4E00\u4E2A\u65B0\u5230\u8FBE\u7684\u4ECE\u7AD9\u670D\u52A1\u3002\u4ECE\u7AD9\u5219\u8981\u6392\u961F\u7B49\u5F85\u4E0B\u4E00\u6B21RDB\u4F20\u9001\u3002\u56E0\u6B64\u670D\u52A1\u5668\u7B49\u5F85\u4E00\u6BB5 \u65F6\u95F4\u4EE5\u671F\u66F4\u591A\u7684\u4ECE\u7AD9\u5230\u8FBE\u3002\u5EF6\u8FDF\u65F6\u95F4\u4EE5\u79D2\u4E3A\u5355\u4F4D\uFF0C\u9ED8\u8BA4\u4E3A5\u79D2\u3002\u8981\u5173\u6389\u8FD9\u4E00\u529F\u80FD\uFF0C\u53EA\u9700\u5C06\u5B83\u8BBE\u7F6E\u4E3A0\u79D2\uFF0C\u4F20\u9001\u4F1A\u7ACB\u5373\u542F\u52A8\u3002\u9ED8\u8BA4\u503C\u4E3A5\u3002</p><p>\u2464\u3001repl-disable-tcp-nodelay\uFF1A\u540C\u6B65\u4E4B\u540E\u662F\u5426\u7981\u7528\u4ECE\u7AD9\u4E0A\u7684TCP_NODELAY \u5982\u679C\u4F60\u9009\u62E9yes\uFF0Credis\u4F1A\u4F7F\u7528\u8F83\u5C11\u91CF\u7684TCP\u5305\u548C\u5E26\u5BBD\u5411\u4ECE\u7AD9\u53D1\u9001\u6570\u636E\u3002\u4F46\u8FD9\u4F1A\u5BFC\u81F4\u5728\u4ECE\u7AD9\u589E\u52A0\u4E00\u70B9\u6570\u636E\u7684\u5EF6\u65F6\u3002 Linux\u5185\u6838\u9ED8\u8BA4\u914D\u7F6E\u60C5\u51B5\u4E0B\u6700\u591A40\u6BEB\u79D2\u7684\u5EF6\u65F6\u3002\u5982\u679C\u9009\u62E9no\uFF0C\u4ECE\u7AD9\u7684\u6570\u636E\u5EF6\u65F6\u4E0D\u4F1A\u90A3\u4E48\u591A\uFF0C\u4F46\u5907\u4EFD\u9700\u8981\u7684\u5E26\u5BBD\u76F8\u5BF9\u8F83\u591A\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6211\u4EEC\u5C06\u6F5C\u5728\u56E0\u7D20\u4F18\u5316\uFF0C\u4F46\u5728\u9AD8\u8D1F\u8F7D\u60C5\u51B5\u4E0B\u6216\u8005\u5728\u4E3B\u4ECE\u7AD9\u90FD\u8DF3\u7684\u60C5\u51B5\u4E0B\uFF0C\u628A\u5B83\u5207\u6362\u4E3Ayes\u662F\u4E2A\u597D\u4E3B\u610F\u3002\u9ED8\u8BA4\u503C\u4E3Ano\u3002</p><h2 id="_8\u3001security" tabindex="-1">8\u3001SECURITY <a class="header-anchor" href="#_8\u3001security" aria-hidden="true">#</a></h2><p><img src="'+o+'" alt="img"></p><p>\u2460\u3001rename-command\uFF1A\u547D\u4EE4\u91CD\u547D\u540D\uFF0C\u5BF9\u4E8E\u4E00\u4E9B\u5371\u9669\u547D\u4EE4\u4F8B\u5982\uFF1A</p><p>flushdb\uFF08\u6E05\u7A7A\u6570\u636E\u5E93\uFF09</p><p>flushall\uFF08\u6E05\u7A7A\u6240\u6709\u8BB0\u5F55\uFF09</p><p>config\uFF08\u5BA2\u6237\u7AEF\u8FDE\u63A5\u540E\u53EF\u914D\u7F6E\u670D\u52A1\u5668\uFF09</p><p>keys\uFF08\u5BA2\u6237\u7AEF\u8FDE\u63A5\u540E\u53EF\u67E5\u770B\u6240\u6709\u5B58\u5728\u7684\u952E\uFF09</p><p>\u4F5C\u4E3A\u670D\u52A1\u7AEFredis-server\uFF0C\u5E38\u5E38\u9700\u8981\u7981\u7528\u4EE5\u4E0A\u547D\u4EE4\u6765\u4F7F\u5F97\u670D\u52A1\u5668\u66F4\u52A0\u5B89\u5168\uFF0C\u7981\u7528\u7684\u5177\u4F53\u505A\u6CD5\u662F\u662F\uFF1A</p><p>\xB7 rename-command FLUSHALL &quot;&quot;</p><p>\u4E5F\u53EF\u4EE5\u4FDD\u7559\u547D\u4EE4\u4F46\u662F\u4E0D\u80FD\u8F7B\u6613\u4F7F\u7528\uFF0C\u91CD\u547D\u540D\u8FD9\u4E2A\u547D\u4EE4\u5373\u53EF\uFF1A</p><p>\xB7 rename-command FLUSHALL abcdefg</p><p>\u8FD9\u6837\uFF0C\u91CD\u542F\u670D\u52A1\u5668\u540E\u5219\u9700\u8981\u4F7F\u7528\u65B0\u547D\u4EE4\u6765\u6267\u884C\u64CD\u4F5C\uFF0C\u5426\u5219\u670D\u52A1\u5668\u4F1A\u62A5\u9519unknown command\u3002</p><p>\u2461\u3001requirepass:\u8BBE\u7F6Eredis\u8FDE\u63A5\u5BC6\u7801</p><p>\u6BD4\u5982: requirepass 123 \u8868\u793Aredis\u7684\u8FDE\u63A5\u5BC6\u7801\u4E3A123.#_labelTop)</p><h2 id="_9\u3001clients" tabindex="-1">9\u3001CLIENTS <a class="header-anchor" href="#_9\u3001clients" aria-hidden="true">#</a></h2><p><img src="'+c+'" alt="img"></p><p>\u2460\u3001maxclients \uFF1A\u8BBE\u7F6E\u5BA2\u6237\u7AEF\u6700\u5927\u5E76\u53D1\u8FDE\u63A5\u6570\uFF0C\u9ED8\u8BA4\u65E0\u9650\u5236\uFF0CRedis\u53EF\u4EE5\u540C\u65F6\u6253\u5F00\u7684\u5BA2\u6237\u7AEF\u8FDE\u63A5\u6570\u4E3ARedis\u8FDB\u7A0B\u53EF\u4EE5\u6253\u5F00\u7684\u6700\u5927\u6587\u4EF6\u3002 \u63CF\u8FF0\u7B26\u6570-32\uFF08redis server\u81EA\u8EAB\u4F1A\u4F7F\u7528\u4E00\u4E9B\uFF09\uFF0C\u5982\u679C\u8BBE\u7F6E maxclients\u4E3A0 \u3002\u8868\u793A\u4E0D\u4F5C\u9650\u5236\u3002\u5F53\u5BA2\u6237\u7AEF\u8FDE\u63A5\u6570\u5230\u8FBE\u9650\u5236\u65F6\uFF0CRedis\u4F1A\u5173\u95ED\u65B0\u7684\u8FDE\u63A5\u5E76\u5411\u5BA2\u6237\u7AEF\u8FD4\u56DEmax number of clients reached\u9519\u8BEF\u4FE1\u606F</p><h2 id="_10\u3001memory-management" tabindex="-1">10\u3001MEMORY MANAGEMENT <a class="header-anchor" href="#_10\u3001memory-management" aria-hidden="true">#</a></h2><p><img src="'+m+'" alt="img"></p><p>\u2460\u3001maxmemory\uFF1A\u8BBE\u7F6ERedis\u7684\u6700\u5927\u5185\u5B58\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E3A0 \u3002\u8868\u793A\u4E0D\u4F5C\u9650\u5236\u3002\u901A\u5E38\u662F\u914D\u5408\u4E0B\u9762\u4ECB\u7ECD\u7684maxmemory-policy\u53C2\u6570\u4E00\u8D77\u4F7F\u7528\u3002</p><p>\u2461\u3001maxmemory-policy \uFF1A\u5F53\u5185\u5B58\u4F7F\u7528\u8FBE\u5230maxmemory\u8BBE\u7F6E\u7684\u6700\u5927\u503C\u65F6\uFF0Credis\u4F7F\u7528\u7684\u5185\u5B58\u6E05\u9664\u7B56\u7565\u3002\u6709\u4EE5\u4E0B\u51E0\u79CD\u53EF\u4EE5\u9009\u62E9\uFF1A</p><p>1\uFF09volatile-lru \u5229\u7528LRU\u7B97\u6CD5\u79FB\u9664\u8BBE\u7F6E\u8FC7\u8FC7\u671F\u65F6\u95F4\u7684key (LRU:\u6700\u8FD1\u4F7F\u7528 Least Recently Used )</p><p>2\uFF09allkeys-lru \u5229\u7528LRU\u7B97\u6CD5\u79FB\u9664\u4EFB\u4F55key</p><p>3\uFF09volatile-random \u79FB\u9664\u8BBE\u7F6E\u8FC7\u8FC7\u671F\u65F6\u95F4\u7684\u968F\u673Akey</p><p>4\uFF09allkeys-random \u79FB\u9664\u968F\u673Ake</p><p>5\uFF09volatile-ttl \u79FB\u9664\u5373\u5C06\u8FC7\u671F\u7684key(minor TTL)</p><p>6\uFF09noeviction noeviction \u4E0D\u79FB\u9664\u4EFB\u4F55key\uFF0C\u53EA\u662F\u8FD4\u56DE\u4E00\u4E2A\u5199\u9519\u8BEF \uFF0C\u9ED8\u8BA4\u9009\u9879</p><p>\u2462\u3001maxmemory-samples \uFF1ALRU \u548C minimal TTL \u7B97\u6CD5\u90FD\u4E0D\u662F\u7CBE\u51C6\u7684\u7B97\u6CD5\uFF0C\u4F46\u662F\u76F8\u5BF9\u7CBE\u786E\u7684\u7B97\u6CD5(\u4E3A\u4E86\u8282\u7701\u5185\u5B58)\u3002\u968F\u610F\u4F60\u53EF\u4EE5\u9009\u62E9\u6837\u672C\u5927\u5C0F\u8FDB\u884C\u68C0\uFF0Credis\u9ED8\u8BA4\u9009\u62E93\u4E2A\u6837\u672C\u8FDB\u884C\u68C0\u6D4B\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7maxmemory-samples\u8FDB\u884C\u8BBE\u7F6E\u6837\u672C\u6570\u3002</p><h2 id="_11\u3001append-only-mode" tabindex="-1">11\u3001APPEND ONLY MODE <a class="header-anchor" href="#_11\u3001append-only-mode" aria-hidden="true">#</a></h2><p><img src="'+h+'" alt="img"></p><p>\u2460\u3001appendonly\uFF1A\u9ED8\u8BA4redis\u4F7F\u7528\u7684\u662Frdb\u65B9\u5F0F\u6301\u4E45\u5316\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5728\u8BB8\u591A\u5E94\u7528\u4E2D\u5DF2\u7ECF\u8DB3\u591F\u7528\u4E86\u3002\u4F46\u662Fredis\u5982\u679C\u4E2D\u9014\u5B95\u673A\uFF0C\u4F1A\u5BFC\u81F4\u53EF\u80FD\u6709\u51E0\u5206\u949F\u7684\u6570\u636E\u4E22\u5931\uFF0C\u6839\u636Esave\u6765\u7B56\u7565\u8FDB\u884C\u6301\u4E45\u5316\uFF0CAppend Only File\u662F\u53E6\u4E00\u79CD\u6301\u4E45\u5316\u65B9\u5F0F\uFF0C \u53EF\u4EE5\u63D0\u4F9B\u66F4\u597D\u7684\u6301\u4E45\u5316\u7279\u6027\u3002Redis\u4F1A\u628A\u6BCF\u6B21\u5199\u5165\u7684\u6570\u636E\u5728\u63A5\u6536\u540E\u90FD\u5199\u5165appendonly.aof\u6587\u4EF6\uFF0C\u6BCF\u6B21\u542F\u52A8\u65F6Redis\u90FD\u4F1A\u5148\u628A\u8FD9\u4E2A\u6587\u4EF6\u7684\u6570\u636E\u8BFB\u5165\u5185\u5B58\u91CC\uFF0C\u5148\u5FFD\u7565RDB\u6587\u4EF6\u3002\u9ED8\u8BA4\u503C\u4E3Ano\u3002</p><p>\u2461\u3001appendfilename \uFF1Aaof\u6587\u4EF6\u540D\uFF0C\u9ED8\u8BA4\u662F&quot;appendonly.aof&quot;</p><p>\u2462\u3001appendfsync\uFF1Aaof\u6301\u4E45\u5316\u7B56\u7565\u7684\u914D\u7F6E\uFF1Bno\u8868\u793A\u4E0D\u6267\u884Cfsync\uFF0C\u7531\u64CD\u4F5C\u7CFB\u7EDF\u4FDD\u8BC1\u6570\u636E\u540C\u6B65\u5230\u78C1\u76D8\uFF0C\u901F\u5EA6\u6700\u5FEB\uFF1Balways\u8868\u793A\u6BCF\u6B21\u5199\u5165\u90FD\u6267\u884Cfsync\uFF0C\u4EE5\u4FDD\u8BC1\u6570\u636E\u540C\u6B65\u5230\u78C1\u76D8\uFF1Beverysec\u8868\u793A\u6BCF\u79D2\u6267\u884C\u4E00\u6B21fsync\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4E22\u5931\u8FD91s\u6570\u636E</p><p>\u2463\u3001no-appendfsync-on-rewrite\uFF1A\u5728aof\u91CD\u5199\u6216\u8005\u5199\u5165rdb\u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u4F1A\u6267\u884C\u5927\u91CFIO\uFF0C\u6B64\u65F6\u5BF9\u4E8Eeverysec\u548Calways\u7684aof\u6A21\u5F0F\u6765\u8BF4\uFF0C\u6267\u884Cfsync\u4F1A\u9020\u6210\u963B\u585E\u8FC7\u957F\u65F6\u95F4\uFF0Cno-appendfsync-on-rewrite\u5B57\u6BB5\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u8BBE\u7F6E\u4E3Ano\u3002\u5982\u679C\u5BF9\u5EF6\u8FDF\u8981\u6C42\u5F88\u9AD8\u7684\u5E94\u7528\uFF0C\u8FD9\u4E2A\u5B57\u6BB5\u53EF\u4EE5\u8BBE\u7F6E\u4E3Ayes\uFF0C\u5426\u5219\u8FD8\u662F\u8BBE\u7F6E\u4E3Ano\uFF0C\u8FD9\u6837\u5BF9\u6301\u4E45\u5316\u7279\u6027\u6765\u8BF4\u8FD9\u662F\u66F4\u5B89\u5168\u7684\u9009\u62E9\u3002 \u8BBE\u7F6E\u4E3Ayes\u8868\u793Arewrite\u671F\u95F4\u5BF9\u65B0\u5199\u64CD\u4F5C\u4E0Dfsync,\u6682\u65F6\u5B58\u5728\u5185\u5B58\u4E2D,\u7B49rewrite\u5B8C\u6210\u540E\u518D\u5199\u5165\uFF0C\u9ED8\u8BA4\u4E3Ano\uFF0C\u5EFA\u8BAEyes\u3002Linux\u7684\u9ED8\u8BA4fsync\u7B56\u7565\u662F30\u79D2\u3002\u53EF\u80FD\u4E22\u593130\u79D2\u6570\u636E\u3002\u9ED8\u8BA4\u503C\u4E3Ano\u3002</p><p>\u2464\u3001auto-aof-rewrite-percentage\uFF1A\u9ED8\u8BA4\u503C\u4E3A100\u3002aof\u81EA\u52A8\u91CD\u5199\u914D\u7F6E\uFF0C\u5F53\u76EE\u524Daof\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7\u4E0A\u4E00\u6B21\u91CD\u5199\u7684aof\u6587\u4EF6\u5927\u5C0F\u7684\u767E\u5206\u4E4B\u591A\u5C11\u8FDB\u884C\u91CD\u5199\uFF0C\u5373\u5F53aof\u6587\u4EF6\u589E\u957F\u5230\u4E00\u5B9A\u5927\u5C0F\u7684\u65F6\u5019\uFF0CRedis\u80FD\u591F\u8C03\u7528bgrewriteaof\u5BF9\u65E5\u5FD7\u6587\u4EF6\u8FDB\u884C\u91CD\u5199\u3002\u5F53\u524DAOF\u6587\u4EF6\u5927\u5C0F\u662F\u4E0A\u6B21\u65E5\u5FD7\u91CD\u5199\u5F97\u5230AOF\u6587\u4EF6\u5927\u5C0F\u7684\u4E8C\u500D\uFF08\u8BBE\u7F6E\u4E3A100\uFF09\u65F6\uFF0C\u81EA\u52A8\u542F\u52A8\u65B0\u7684\u65E5\u5FD7\u91CD\u5199\u8FC7\u7A0B\u3002</p><p>\u2465\u3001auto-aof-rewrite-min-size\uFF1A64mb\u3002\u8BBE\u7F6E\u5141\u8BB8\u91CD\u5199\u7684\u6700\u5C0Faof\u6587\u4EF6\u5927\u5C0F\uFF0C\u907F\u514D\u4E86\u8FBE\u5230\u7EA6\u5B9A\u767E\u5206\u6BD4\u4F46\u5C3A\u5BF8\u4ECD\u7136\u5F88\u5C0F\u7684\u60C5\u51B5\u8FD8\u8981\u91CD\u5199\u3002</p><p>\u2466\u3001aof-load-truncated\uFF1Aaof\u6587\u4EF6\u53EF\u80FD\u5728\u5C3E\u90E8\u662F\u4E0D\u5B8C\u6574\u7684\uFF0C\u5F53redis\u542F\u52A8\u7684\u65F6\u5019\uFF0Caof\u6587\u4EF6\u7684\u6570\u636E\u88AB\u8F7D\u5165\u5185\u5B58\u3002\u91CD\u542F\u53EF\u80FD\u53D1\u751F\u5728redis\u6240\u5728\u7684\u4E3B\u673A\u64CD\u4F5C\u7CFB\u7EDF\u5B95\u673A\u540E\uFF0C\u5C24\u5176\u5728ext4\u6587\u4EF6\u7CFB\u7EDF\u6CA1\u6709\u52A0\u4E0Adata=ordered\u9009\u9879\uFF0C\u51FA\u73B0\u8FD9\u79CD\u73B0\u8C61 redis\u5B95\u673A\u6216\u8005\u5F02\u5E38\u7EC8\u6B62\u4E0D\u4F1A\u9020\u6210\u5C3E\u90E8\u4E0D\u5B8C\u6574\u73B0\u8C61\uFF0C\u53EF\u4EE5\u9009\u62E9\u8BA9redis\u9000\u51FA\uFF0C\u6216\u8005\u5BFC\u5165\u5C3D\u53EF\u80FD\u591A\u7684\u6570\u636E\u3002\u5982\u679C\u9009\u62E9\u7684\u662Fyes\uFF0C\u5F53\u622A\u65AD\u7684aof\u6587\u4EF6\u88AB\u5BFC\u5165\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u53D1\u5E03\u4E00\u4E2Alog\u7ED9\u5BA2\u6237\u7AEF\u7136\u540Eload\u3002\u5982\u679C\u662Fno\uFF0C\u7528\u6237\u5FC5\u987B\u624B\u52A8redis-check-aof\u4FEE\u590DAOF\u6587\u4EF6\u624D\u53EF\u4EE5\u3002\u9ED8\u8BA4\u503C\u4E3A yes\u3002</p><h2 id="_12\u3001lua-scripting" tabindex="-1">12\u3001LUA SCRIPTING <a class="header-anchor" href="#_12\u3001lua-scripting" aria-hidden="true">#</a></h2><p><img src="'+_+'" alt="img"></p><p>\u2460\u3001lua-time-limit\uFF1A\u4E00\u4E2Alua\u811A\u672C\u6267\u884C\u7684\u6700\u5927\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3Ams\u3002\u9ED8\u8BA4\u503C\u4E3A5000.#_labelTop)</p><h2 id="_13\u3001redis-cluster" tabindex="-1">13\u3001REDIS CLUSTER <a class="header-anchor" href="#_13\u3001redis-cluster" aria-hidden="true">#</a></h2><p><img src="'+u+'" alt="img"></p><p>\u2460\u3001cluster-enabled\uFF1A\u96C6\u7FA4\u5F00\u5173\uFF0C\u9ED8\u8BA4\u662F\u4E0D\u5F00\u542F\u96C6\u7FA4\u6A21\u5F0F\u3002</p><p>\u2461\u3001cluster-config-file\uFF1A\u96C6\u7FA4\u914D\u7F6E\u6587\u4EF6\u7684\u540D\u79F0\uFF0C\u6BCF\u4E2A\u8282\u70B9\u90FD\u6709\u4E00\u4E2A\u96C6\u7FA4\u76F8\u5173\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6301\u4E45\u5316\u4FDD\u5B58\u96C6\u7FA4\u7684\u4FE1\u606F\u3002 \u8FD9\u4E2A\u6587\u4EF6\u5E76\u4E0D\u9700\u8981\u624B\u52A8\u914D\u7F6E\uFF0C\u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u6709Redis\u751F\u6210\u5E76\u66F4\u65B0\uFF0C\u6BCF\u4E2ARedis\u96C6\u7FA4\u8282\u70B9\u9700\u8981\u4E00\u4E2A\u5355\u72EC\u7684\u914D\u7F6E\u6587\u4EF6\u3002\u8BF7\u786E\u4FDD\u4E0E\u5B9E\u4F8B\u8FD0\u884C\u7684\u7CFB\u7EDF\u4E2D\u914D\u7F6E\u6587\u4EF6\u540D\u79F0\u4E0D\u51B2\u7A81\u3002\u9ED8\u8BA4\u914D\u7F6E\u4E3Anodes-6379.conf\u3002</p><p>\u2462\u3001cluster-node-timeout \uFF1A\u53EF\u4EE5\u914D\u7F6E\u503C\u4E3A15000\u3002\u8282\u70B9\u4E92\u8FDE\u8D85\u65F6\u7684\u9600\u503C\uFF0C\u96C6\u7FA4\u8282\u70B9\u8D85\u65F6\u6BEB\u79D2\u6570</p><p>\u2463\u3001cluster-slave-validity-factor \uFF1A\u53EF\u4EE5\u914D\u7F6E\u503C\u4E3A10\u3002\u5728\u8FDB\u884C\u6545\u969C\u8F6C\u79FB\u7684\u65F6\u5019\uFF0C\u5168\u90E8slave\u90FD\u4F1A\u8BF7\u6C42\u7533\u8BF7\u4E3Amaster\uFF0C\u4F46\u662F\u6709\u4E9Bslave\u53EF\u80FD\u4E0Emaster\u65AD\u5F00\u8FDE\u63A5\u4E00\u6BB5\u65F6\u95F4\u4E86\uFF0C \u5BFC\u81F4\u6570\u636E\u8FC7\u4E8E\u9648\u65E7\uFF0C\u8FD9\u6837\u7684slave\u4E0D\u5E94\u8BE5\u88AB\u63D0\u5347\u4E3Amaster\u3002\u8BE5\u53C2\u6570\u5C31\u662F\u7528\u6765\u5224\u65ADslave\u8282\u70B9\u4E0Emaster\u65AD\u7EBF\u7684\u65F6\u95F4\u662F\u5426\u8FC7\u957F\u3002\u5224\u65AD\u65B9\u6CD5\u662F\uFF1A\u6BD4\u8F83slave\u65AD\u5F00\u8FDE\u63A5\u7684\u65F6\u95F4\u548C(node-timeout * slave-validity-factor) + repl-ping-slave-period \u5982\u679C\u8282\u70B9\u8D85\u65F6\u65F6\u95F4\u4E3A\u4E09\u5341\u79D2, \u5E76\u4E14slave-validity-factor\u4E3A10,\u5047\u8BBE\u9ED8\u8BA4\u7684repl-ping-slave-period\u662F10\u79D2\uFF0C\u5373\u5982\u679C\u8D85\u8FC7310\u79D2slave\u5C06\u4E0D\u4F1A\u5C1D\u8BD5\u8FDB\u884C\u6545\u969C\u8F6C\u79FB</p><p>\u2464\u3001cluster-migration-barrier \uFF1A\u53EF\u4EE5\u914D\u7F6E\u503C\u4E3A1\u3002master\u7684slave\u6570\u91CF\u5927\u4E8E\u8BE5\u503C\uFF0Cslave\u624D\u80FD\u8FC1\u79FB\u5230\u5176\u4ED6\u5B64\u7ACBmaster\u4E0A\uFF0C\u5982\u8FD9\u4E2A\u53C2\u6570\u82E5\u88AB\u8BBE\u4E3A2\uFF0C\u90A3\u4E48\u53EA\u6709\u5F53\u4E00\u4E2A\u4E3B\u8282\u70B9\u62E5\u67092 \u4E2A\u53EF\u5DE5\u4F5C\u7684\u4ECE\u8282\u70B9\u65F6\uFF0C\u5B83\u7684\u4E00\u4E2A\u4ECE\u8282\u70B9\u4F1A\u5C1D\u8BD5\u8FC1\u79FB\u3002</p><p>\u2465\u3001cluster-require-full-coverage\uFF1A\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u96C6\u7FA4\u5168\u90E8\u7684slot\u6709\u8282\u70B9\u8D1F\u8D23\uFF0C\u96C6\u7FA4\u72B6\u6001\u624D\u4E3Aok\uFF0C\u624D\u80FD\u63D0\u4F9B\u670D\u52A1\u3002 \u8BBE\u7F6E\u4E3Ano\uFF0C\u53EF\u4EE5\u5728slot\u6CA1\u6709\u5168\u90E8\u5206\u914D\u7684\u65F6\u5019\u63D0\u4F9B\u670D\u52A1\u3002\u4E0D\u5EFA\u8BAE\u6253\u5F00\u8BE5\u914D\u7F6E\uFF0C\u8FD9\u6837\u4F1A\u9020\u6210\u5206\u533A\u7684\u65F6\u5019\uFF0C\u5C0F\u5206\u533A\u7684master\u4E00\u76F4\u5728\u63A5\u53D7\u5199\u8BF7\u6C42\uFF0C\u800C\u9020\u6210\u5F88\u957F\u65F6\u95F4\u6570\u636E\u4E0D\u4E00\u81F4\u3002</p>',101),y=[f];function v(R,b,k,E,L,T){return i(),s("div",null,y)}const N=e(g,[["render",v]]);export{x as __pageData,N as default};
