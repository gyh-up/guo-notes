import{_ as s,c as e,o as a,a as n}from"./app.f8902c75.js";const l="/guo-notes/redis/redis-\u7F13\u5B58\u7A7F\u900F.png",o="/guo-notes/redis/redis-\u7F13\u5B58\u51FB\u7A7F.png",p="/guo-notes/redis/redis-\u7F13\u5B58\u96EA\u5D29.png",y=JSON.parse('{"title":"redis\u7684\u7F13\u5B58\u51FB\u7A7F\u3001\u7F13\u5B58\u7A7F\u900F\u3001\u7F13\u5B58\u96EA\u5D29","description":"","frontmatter":{"typora-root-url":"..\\\\..\\\\public"},"headers":[{"level":2,"title":"\u7F13\u5B58\u7A7F\u900F","slug":"\u7F13\u5B58\u7A7F\u900F","link":"#\u7F13\u5B58\u7A7F\u900F","children":[{"level":3,"title":"\u6982\u5FF5","slug":"\u6982\u5FF5","link":"#\u6982\u5FF5","children":[]},{"level":3,"title":"\u89E3\u51B3\u65B9\u6848","slug":"\u89E3\u51B3\u65B9\u6848","link":"#\u89E3\u51B3\u65B9\u6848","children":[]},{"level":3,"title":"\u6269\u5C55\uFF1A\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u5B9E\u73B0","slug":"\u6269\u5C55\uFF1A\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u5B9E\u73B0","link":"#\u6269\u5C55\uFF1A\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u5B9E\u73B0","children":[]}]},{"level":2,"title":"\u7F13\u5B58\u51FB\u7A7F","slug":"\u7F13\u5B58\u51FB\u7A7F","link":"#\u7F13\u5B58\u51FB\u7A7F","children":[{"level":3,"title":"\u6982\u5FF5","slug":"\u6982\u5FF5-1","link":"#\u6982\u5FF5-1","children":[]},{"level":3,"title":"\u89E3\u51B3\u65B9\u6848","slug":"\u89E3\u51B3\u65B9\u6848-1","link":"#\u89E3\u51B3\u65B9\u6848-1","children":[]}]},{"level":2,"title":"\u7F13\u5B58\u96EA\u5D29","slug":"\u7F13\u5B58\u96EA\u5D29","link":"#\u7F13\u5B58\u96EA\u5D29","children":[{"level":3,"title":"\u6982\u5FF5","slug":"\u6982\u5FF5-2","link":"#\u6982\u5FF5-2","children":[]},{"level":3,"title":"\u89E3\u51B3\u65B9\u6848","slug":"\u89E3\u51B3\u65B9\u6848-2","link":"#\u89E3\u51B3\u65B9\u6848-2","children":[]}]}],"relativePath":"classify/redis/redis\u7F13\u5B58\u51FB\u7A7F\u3001\u7A7F\u900F\u3001\u96EA\u5D29.md","lastUpdated":1666177149000}'),r={name:"classify/redis/redis\u7F13\u5B58\u51FB\u7A7F\u3001\u7A7F\u900F\u3001\u96EA\u5D29.md"},c=n('<h1 id="redis\u7684\u7F13\u5B58\u51FB\u7A7F\u3001\u7F13\u5B58\u7A7F\u900F\u3001\u7F13\u5B58\u96EA\u5D29" tabindex="-1">redis\u7684\u7F13\u5B58\u51FB\u7A7F\u3001\u7F13\u5B58\u7A7F\u900F\u3001\u7F13\u5B58\u96EA\u5D29 <a class="header-anchor" href="#redis\u7684\u7F13\u5B58\u51FB\u7A7F\u3001\u7F13\u5B58\u7A7F\u900F\u3001\u7F13\u5B58\u96EA\u5D29" aria-hidden="true">#</a></h1><h2 id="\u7F13\u5B58\u7A7F\u900F" tabindex="-1">\u7F13\u5B58\u7A7F\u900F <a class="header-anchor" href="#\u7F13\u5B58\u7A7F\u900F" aria-hidden="true">#</a></h2><h3 id="\u6982\u5FF5" tabindex="-1">\u6982\u5FF5 <a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a></h3><p>\u7F13\u5B58\u548C\u6570\u636E\u5E93\u4E2D\u90FD\u6CA1\u6709\u7684\u6570\u636E\uFF0C\u53EF\u7528\u6237\u8FD8\u662F\u6E90\u6E90\u4E0D\u65AD\u7684\u53D1\u8D77\u8BF7\u6C42\uFF0C\u5BFC\u81F4\u6BCF\u6B21\u8BF7\u6C42\u90FD\u4F1A\u5230\u6570\u636E\u5E93\uFF0C\u4ECE\u800C\u538B\u57AE\u6570\u636E\u5E93\u3002</p><p>\u6BD4\u5982\u5BA2\u6237\u67E5\u8BE2\u4E00\u4E2A\u6839\u672C\u4E0D\u5B58\u5728\u7684\u4E1C\u897F\uFF0C\u9996\u5148\u4ECE <code>Redis</code> \u4E2D\u67E5\u4E0D\u5230\uFF0C\u7136\u540E\u4F1A\u53BB\u6570\u636E\u5E93\u4E2D\u67E5\u8BE2\uFF0C\u6570\u636E\u5E93\u4E2D\u4E5F\u67E5\u8BE2\u4E0D\u5230\uFF0C\u90A3\u4E48\u5C31\u4E0D\u4F1A\u5C06\u6570\u636E\u653E\u5165\u5230\u7F13\u5B58\u4E2D\uFF0C\u540E\u9762\u5982\u679C\u8FD8\u6709\u7C7B\u4F3C\u6E90\u6E90\u4E0D\u65AD\u7684\u8BF7\u6C42\uFF0C\u6700\u540E\u90FD\u4F1A\u538B\u5230\u6570\u636E\u5E93\u6765\u5904\u7406\uFF0C\u4ECE\u800C\u7ED9\u6570\u636E\u5E93\u9020\u6210\u5DE8\u5927\u7684\u538B\u529B\u3002</p><p><img src="'+l+`" alt=""></p><h3 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1">\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a></h3><h4 id="\u65B9\u6848\u4E00\u3001\u4E1A\u52A1\u5C42\u6821\u9A8C" tabindex="-1">\u65B9\u6848\u4E00\u3001\u4E1A\u52A1\u5C42\u6821\u9A8C <a class="header-anchor" href="#\u65B9\u6848\u4E00\u3001\u4E1A\u52A1\u5C42\u6821\u9A8C" aria-hidden="true">#</a></h4><p>\u7528\u6237\u53D1\u8FC7\u6765\u7684\u8BF7\u6C42\uFF0C\u6839\u636E\u8BF7\u6C42\u53C2\u6570\u8FDB\u884C\u6821\u9A8C\uFF0C\u5BF9\u4E8E\u660E\u663E\u9519\u8BEF\u7684\u53C2\u6570\uFF0C\u76F4\u63A5\u62E6\u622A\u8FD4\u56DE\u3002</p><p>\u6BD4\u5982\uFF0C\u8BF7\u6C42\u53C2\u6570\u4E3A\u4E3B\u952E\u81EA\u589E <code>id</code>\uFF0C\u90A3\u4E48\u5BF9\u4E8E\u8BF7\u6C42\u5C0F\u4E8E <code>0</code> \u7684 <code>id</code> \u53C2\u6570\uFF0C\u660E\u663E\u4E0D\u7B26\u5408\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8FD4\u56DE\u9519\u8BEF\u8BF7\u6C42\u3002</p><h4 id="\u65B9\u6848\u4E8C\u3001\u4E0D\u5B58\u5728\u6570\u636E\u8BBE\u7F6E\u77ED\u8FC7\u671F\u65F6\u95F4" tabindex="-1">\u65B9\u6848\u4E8C\u3001\u4E0D\u5B58\u5728\u6570\u636E\u8BBE\u7F6E\u77ED\u8FC7\u671F\u65F6\u95F4 <a class="header-anchor" href="#\u65B9\u6848\u4E8C\u3001\u4E0D\u5B58\u5728\u6570\u636E\u8BBE\u7F6E\u77ED\u8FC7\u671F\u65F6\u95F4" aria-hidden="true">#</a></h4><p>\u5BF9\u4E8E\u67D0\u4E2A\u67E5\u8BE2\u4E3A\u7A7A\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E2A\u7A7A\u7ED3\u679C\u8FDB\u884C <code>Redis</code> \u7F13\u5B58\uFF0C\u4F46\u662F\u8BBE\u7F6E\u5F88\u77ED\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u6BD4\u5982 <code>30s</code>\uFF0C\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u4E1A\u52A1\u8BBE\u5B9A\u3002\u6CE8\u610F\u4E00\u5B9A\u4E0D\u8981\u5F71\u54CD\u6B63\u5E38\u4E1A\u52A1\u3002</p><h4 id="\u65B9\u6848\u4E09\u3001\u5E03\u9686\u8FC7\u6EE4\u5668" tabindex="-1">\u65B9\u6848\u4E09\u3001\u5E03\u9686\u8FC7\u6EE4\u5668 <a class="header-anchor" href="#\u65B9\u6848\u4E09\u3001\u5E03\u9686\u8FC7\u6EE4\u5668" aria-hidden="true">#</a></h4><p>\u5173\u4E8E\u5E03\u9686\u8FC7\u6EE4\u5668\uFF0C\u540E\u9762\u4F1A\u8BE6\u7EC6\u4ECB\u7ECD\u3002\u5E03\u9686\u8FC7\u6EE4\u5668\u662F\u4E00\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u5229\u7528\u6781\u5C0F\u7684\u5185\u5B58\uFF0C\u53EF\u4EE5\u5224\u65AD\u5927\u91CF\u7684\u6570\u636E<strong>\u4E00\u5B9A\u4E0D\u5B58\u5728\u6216\u8005\u53EF\u80FD\u5B58\u5728</strong>\u3002</p><p>\u5BF9\u4E8E\u7F13\u5B58\u7A7F\u900F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u67E5\u8BE2\u7684\u6570\u636E\u6761\u4EF6\u90FD\u54C8\u5E0C\u5230\u4E00\u4E2A\u8DB3\u591F\u5927\u7684\u5E03\u9686\u8FC7\u6EE4\u5668\u4E2D\uFF0C\u7528\u6237\u53D1\u9001\u7684\u8BF7\u6C42\u4F1A\u5148\u88AB\u5E03\u9686\u8FC7\u6EE4\u5668\u62E6\u622A\uFF0C\u4E00\u5B9A\u4E0D\u5B58\u5728\u7684\u6570\u636E\u5C31\u76F4\u63A5\u62E6\u622A\u8FD4\u56DE\u4E86\uFF0C\u4ECE\u800C\u907F\u514D\u4E0B\u4E00\u6B65\u5BF9\u6570\u636E\u5E93\u7684\u538B\u529B\u3002</p><h4 id="\u65B9\u6848\u56DB\u3001\u7528\u6237\u9ED1\u540D\u5355\u9650\u5236" tabindex="-1">\u65B9\u6848\u56DB\u3001\u7528\u6237\u9ED1\u540D\u5355\u9650\u5236 <a class="header-anchor" href="#\u65B9\u6848\u56DB\u3001\u7528\u6237\u9ED1\u540D\u5355\u9650\u5236" aria-hidden="true">#</a></h4><p>\u5F53\u53D1\u751F\u5F02\u5E38\u60C5\u51B5\u65F6\uFF0C\u5B9E\u65F6\u76D1\u63A7\u8BBF\u95EE\u7684\u5BF9\u8C61\u548C\u6570\u636E\uFF0C\u5206\u6790\u7528\u6237\u884C\u4E3A\uFF0C\u9488\u5BF9\u6545\u610F\u8BF7\u6C42\u3001\u722C\u866B\u6216\u653B\u51FB\u8005\uFF0C\u8FDB\u884C\u7279\u5B9A\u7528\u6237\u7684\u9650\u5236\uFF1B</p><h3 id="\u6269\u5C55\uFF1A\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u5B9E\u73B0" tabindex="-1">\u6269\u5C55\uFF1A\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u5B9E\u73B0 <a class="header-anchor" href="#\u6269\u5C55\uFF1A\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u5B9E\u73B0" aria-hidden="true">#</a></h3><p>\u4F5C\u4E3A\u4E00\u4E2A\u8FC7\u6EE4\u5668\u9700\u8981\u6EE1\u8DB3\u4EC0\u4E48\u6761\u4EF6\uFF1F</p><ul><li>\u901F\u5EA6\u5F97\u5FEB\uFF0C\u5F97\u4ECE\u5185\u5B58\u67E5\uFF0C\u5982\u679C\u4ECE\u786C\u76D8\u67E5\u7684\u8BDD\u8FD8\u4E0D\u5982\u76F4\u63A5\u67E5\u6570\u636E\u5E93</li><li>\u56E0\u4E3A\u8FC7\u6EE4\u5668\u91CC\u9762\u5F97\u5B58\u5165\u6570\u636E\u5E93\u6240\u6709\u7684\u6570\u636E\uFF0C\u6240\u4EE5\u5185\u5B58\u52BF\u5FC5\u662F\u6BD4\u8F83\u7D27\u5F20\u7684\uFF0C\u6240\u4EE5\u5185\u5B58\u8981\u505A\u5230\u7EDD\u5BF9\u7684\u8282\u7701\uFF0C\u8BF4\u5230\u8282\u7701\u5185\u5B58\uFF0C\u5927\u5BB6\u5E94\u8BE5\u5F88\u5BB9\u6613\u80FD\u60F3\u5230 <code>redis</code> \u91CC\u9762\u7684 <code>setbit</code> \u64CD\u4F5C</li></ul><h4 id="\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u5B9E\u73B0" tabindex="-1">\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u5B9E\u73B0 <a class="header-anchor" href="#\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u5B9E\u73B0" aria-hidden="true">#</a></h4><p>\u5199\u5165\u8FC7\u7A0B</p><ul><li>\u901A\u8FC7 <code>bit</code> \u6570\u7EC4\u6765\u6807\u8BC6\u6570\u636E</li><li>\u6BD4\u5982 <code>id=10</code> \u7684\u6570\u636E\uFF0C\u901A\u8FC7 <code>hash</code> \u7B97\u6CD5\u7B97\u51FA\u6765\u7ED3\u679C\u4E3A <code>1</code></li><li>\u628A <code>bit</code> \u6570\u7EC4\u4E0B\u8868\u4E3A <code>1</code> \u7684\u4F4D\u7F6E\u7684\u503C\u6807\u8BB0\u4E3A <code>1</code></li></ul><p>\u67E5\u8BE2\u8FC7\u7A0B</p><ul><li>\u5C06 <code>id=10</code> \u505A <code>hash</code> \u8FD0\u7B97\uFF0C\u5F97\u5230\u7ED3\u679C <code>1</code></li><li>\u770B <code>bit</code> \u6570\u7EC4\u4E0B\u6807\u4E3A <code>1</code> \u7684\u6570\u636E\u6807\u8BC6\u4E3A <code>1</code>\uFF0C\u5219\u8BF4\u660E\u6570\u636E\u5B58\u5728</li></ul><p><strong>\u5176\u5B9E\u6211\u4EEC\u770B\u4E0A\u9762\u7684\u7B97\u6CD5\u662F\u5B58\u5728\u4E00\u5B9A\u7684\u95EE\u9898\u7684</strong></p><ol><li>\u53EA\u8981\u662F <code>hash</code> \u8FD0\u7B97\uFF0C\u5C31\u4F1A\u5B58\u5728 <code>hash</code> \u78B0\u649E\u95EE\u9898\uFF0C\u6BD4\u5982 <code>id=10</code> \u548C <code>id=100</code> \u53EF\u80FD\u7ECF\u8FC7 <code>hash</code> \u8FD0\u7B97\u4E4B\u540E\u7ED3\u679C\u90FD\u4E3A <code>1</code>\uFF0C\u90A3\u4E48 <code>id=10</code> \u5199\u5165\u4E4B\u540E\u67E5\u8BE2 <code>id=100</code> \u662F\u5426\u5B58\u5728\u4F1A\u8BEF\u5224\u4E3A <code>id=100</code> \u4E5F\u5B58\u5728</li><li>\u5F53 <code>bit</code> \u6570\u7EC4\u6EE1\u4E86\u4E4B\u540E\uFF0C\u67E5\u8BE2\u7684\u9519\u8BEF\u7387\u80AF\u5B9A\u662F\u767E\u5206\u4E4B\u767E\uFF0C\u56E0\u4E3A\u6BCF\u4E2A\u6570\u636E\u90FD\u5B58\u5728</li></ol><p>\u8FD9\u4E9B\u5176\u5B9E\u90FD\u662F\u5BFC\u81F4\u9519\u8BEF\u7387\u7684\u539F\u56E0\uFF0C\u9519\u8BEF\u7387\u662F\u4E0D\u53EF\u80FD\u907F\u514D\u7684\uFF0C\u4F46\u662F\u54B1\u4EEC\u53EF\u4EE5\u51CF\u5C11\u9519\u8BEF\u7387\uFF0C<strong>\u51CF\u5C11\u9519\u8BEF\u7387\u7684\u65B9\u6CD5\u6709\u4E24\u4E2A\uFF1A</strong></p><ol><li>\u52A0\u5927 <code>bit</code> \u6570\u7EC4\u7684\u957F\u5EA6\uFF0C\u5BF9\u4E8E <code>bit</code> \u6570\u7EC4\u7684\u957F\u5EA6\u7684\u589E\u52A0\u662F\u4E0D\u7528\u62C5\u5FC3\u7684\uFF0C\u56E0\u4E3A\u662F <code>bit</code> \u64CD\u4F5C\uFF0C\u6240\u4EE5\u53EF\u4EE5\u52A0\u5230\u5F88\u5927\u7684\u503C</li><li>\u589E\u52A0 <code>hash</code> \u51FD\u6570\u7684\u4E2A\u6570\uFF0C<code>hash</code> \u51FD\u6570\u7684\u4E2A\u6570\u589E\u52A0\u4E86\uFF0C\u8BF4\u660E\u6807\u8BC6\u4E00\u4E2A\u6570\u7EC4\u9700\u8981\u7684\u4F4D\u7F6E\u5C31\u4F1A\u53D8\u591A\u3002\u8FD9\u6837\u4F1A\u964D\u4F4E\u53D1\u751F <code>hash</code> \u78B0\u649E\u7684\u6982\u7387\u3002\u4F46\u662F <code>hash</code> \u7684\u51FD\u6570\u4E5F\u4E0D\u662F\u8D8A\u591A\u8D8A\u597D\uFF0C\u9700\u8981\u53C2\u7167\u6570\u7EC4\u7684\u957F\u5EA6\u6765\u5B9A</li></ol><p><strong><code>hash</code> \u9519\u8BEF\u7387\uFF1A</strong></p><p><strong>\u5E03\u9686\u7B97\u6CD5\u8BF4\u6570\u636E\u5B58\u5728\uFF0C\u90A3\u4E48\u5B9E\u9645\u6709\u53EF\u80FD\u4E0D\u5B58\u5728</strong></p><p><strong>\u5982\u679C\u6570\u636E\u4E0D\u5B58\u5728\u3002\u90A3\u4E48\u4E00\u5B9A\u4E0D\u5B58\u5728</strong></p><h4 id="\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u4F7F\u7528" tabindex="-1">\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u4F7F\u7528 <a class="header-anchor" href="#\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u4F7F\u7528" aria-hidden="true">#</a></h4><p>1\u3001\u4E0B\u8F7D <code>redisbloom</code> \u63D2\u4EF6\uFF08<code>redis</code> \u5B98\u7F51\u4E0B\u8F7D\u5373\u53EF\uFF09</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">wget https://github.com/RedisLabsModules/rebloom/archive/v1.1.1.tar.gz</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>2\u3001\u89E3\u538B\u5E76\u5B89\u88C5\uFF0C\u751F\u6210 <code>.so</code> \u6587\u4EF6</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[root@redis]# tar -zxvf v1.1.1.tar.gz</span></span>
<span class="line"><span style="color:#A6ACCD;">[root@redis]# cd Redisbloom-1.1.1/</span></span>
<span class="line"><span style="color:#A6ACCD;">[root@redisbloom-1.1.1]# make</span></span>
<span class="line"><span style="color:#A6ACCD;">[root@redisbloom-1.1.1]# ls</span></span>
<span class="line"><span style="color:#A6ACCD;">contrib  Dockerfile  docs  LICENSE  Makefile  mkdocs.yml  ramp.yml  README.md  rebloom.so  src  test</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>3\u3001\u5728 <code>redis</code> \u914D\u7F6E\u6587\u4EF6 <code>redis.conf</code> \u4E2D\u52A0\u5165\u8BE5\u6A21\u5757\u5373\u53EF</p><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@redis</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># vim redis.conf</span></span>
<span class="line"><span style="color:#676E95;">#####################MODULES#################                                                      # Load modules at startup. If the server is not able to load modules</span></span>
<span class="line"><span style="color:#676E95;"># it will abort. It is possible to use multiple loadmodule directives.</span></span>
<span class="line"><span style="color:#A6ACCD;">loadmodule /usr/local/redis/redisbloom-1.1.1/rebloom.so</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>4\u3001\u91CD\u65B0\u542F\u52A8 <code>redis</code></p><div class="language-php line-numbers-mode"><button class="copy"></button><span class="lang">php</span><pre><code><span class="line"><span style="color:#A6ACCD;">redis</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">.</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">redis</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">conf</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>5\u3001\u6D4B\u8BD5\u5B89\u88C5\u662F\u5426\u6210\u529F</p><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">127.0.0.1:</span><span style="color:#89DDFF;">6379&gt;</span><span style="color:#A6ACCD;"> bf.add users user2  //\u5199\u5165\u6570\u636Euser2</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">integer</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 1</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:</span><span style="color:#89DDFF;">6379&gt;</span><span style="color:#A6ACCD;"> bf.add users user1  //\u5199\u5165\u6570\u636Euser1</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">integer</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 1</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:</span><span style="color:#89DDFF;">6379&gt;</span><span style="color:#A6ACCD;"> bf.exists users user1  //\u67E5\u8BE2user1\u5B58\u5728</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">integer</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 1</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:</span><span style="color:#89DDFF;">6379&gt;</span><span style="color:#A6ACCD;"> bf.exists users user3   //\u67E5\u8BE2user3\u4E0D\u5B58\u5728</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">integer</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4E0A\u9762\u8BF4\u8FC7\u5E03\u9686\u8FC7\u6EE4\u5668\u5B58\u5728\u8BEF\u5224\u7684\u60C5\u51B5\uFF0C\u5728 <code>redis</code> \u4E2D\u6709\u4E24\u4E2A\u503C\u51B3\u5B9A\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u51C6\u786E\u7387\uFF1A</p><ul><li><code>error_rate</code> \uFF1A\u5141\u8BB8\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u9519\u8BEF\u7387\uFF0C\u8FD9\u4E2A\u503C\u8D8A\u4F4E\u8FC7\u6EE4\u5668\u7684\u4F4D\u6570\u7EC4\u7684\u5927\u5C0F\u8D8A\u5927\uFF0C\u5360\u7528\u7A7A\u95F4\u4E5F\u5C31\u8D8A\u5927\u3002</li><li><code>initial_size</code> \uFF1A\u5E03\u9686\u8FC7\u6EE4\u5668\u53EF\u4EE5\u50A8\u5B58\u7684\u5143\u7D20\u4E2A\u6570\uFF0C\u5F53\u5B9E\u9645\u5B58\u50A8\u7684\u5143\u7D20\u4E2A\u6570\u8D85\u8FC7\u8FD9\u4E2A\u503C\u4E4B\u540E\uFF0C\u8FC7\u6EE4\u5668\u7684\u51C6\u786E\u7387\u4F1A\u4E0B\u964D\u3002<code>redis</code> \u4E2D\u6709\u4E00\u4E2A\u547D\u4EE4\u53EF\u4EE5\u6765\u8BBE\u7F6E\u8FD9\u4E24\u4E2A\u503C\uFF1A</li></ul><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">bf.reserve users 0.01 100</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4E09\u4E2A\u53C2\u6570\u7684\u542B\u4E49\uFF1A</p><p>\u7B2C\u4E00\u4E2A\u503C\u662F\u8FC7\u6EE4\u5668\u7684\u540D\u5B57\u3002</p><p>\u7B2C\u4E8C\u4E2A\u503C\u4E3A <code>error_rate</code> \u7684\u503C\u3002</p><p>\u7B2C\u4E09\u4E2A\u503C\u4E3A <code>initial_size</code> \u7684\u503C\u3002</p><h2 id="\u7F13\u5B58\u51FB\u7A7F" tabindex="-1">\u7F13\u5B58\u51FB\u7A7F <a class="header-anchor" href="#\u7F13\u5B58\u51FB\u7A7F" aria-hidden="true">#</a></h2><h3 id="\u6982\u5FF5-1" tabindex="-1">\u6982\u5FF5 <a class="header-anchor" href="#\u6982\u5FF5-1" aria-hidden="true">#</a></h3><p><code>Redis</code> \u4E2D\u4E00\u4E2A\u70ED\u70B9 <code>key</code> \u5728\u5931\u6548\u7684\u540C\u65F6\uFF0C\u5927\u91CF\u7684\u8BF7\u6C42\u8FC7\u6765\uFF0C\u4ECE\u800C\u4F1A\u5168\u90E8\u5230\u8FBE\u6570\u636E\u5E93\uFF0C\u538B\u57AE\u6570\u636E\u5E93\u3002</p><p>\u8FD9\u91CC\u8981\u6CE8\u610F\u7684\u662F\u8FD9\u662F\u67D0\u4E00\u4E2A\u70ED\u70B9 <code>key</code> \u8FC7\u671F\u5931\u6548\uFF0C\u548C\u540E\u9762\u4ECB\u7ECD\u7F13\u5B58\u96EA\u5D29\uFF08\u5927\u91CF\u7684 <code>key</code> \u503C\uFF09\u662F\u6709\u533A\u522B\u7684\u3002\u6BD4\u5982\u6DD8\u5B9D\u53CC\u5341\u4E00\uFF0C\u5BF9\u4E8E\u67D0\u4E2A\u7279\u4EF7\u70ED\u95E8\u7684\u5546\u54C1\u4FE1\u606F\uFF0C\u7F13\u5B58\u5728 <code>Redis</code> \u4E2D\uFF0C\u521A\u597D <code>0</code> \u70B9\uFF0C\u8FD9\u4E2A\u5546\u54C1\u4FE1\u606F\u5728 <code>Redis</code> \u4E2D\u8FC7\u671F\u67E5\u4E0D\u5230\u4E86\uFF0C\u8FD9\u65F6\u5019\u5927\u91CF\u7684\u7528\u6237\u53C8\u540C\u65F6\u6B63\u597D\u8BBF\u95EE\u8FD9\u4E2A\u5546\u54C1\uFF0C\u5C31\u4F1A\u9020\u6210\u5927\u91CF\u7684\u8BF7\u6C42\u540C\u65F6\u5230\u8FBE\u6570\u636E\u5E93\u3002</p><p><img src="`+o+`" alt="img"></p><h3 id="\u89E3\u51B3\u65B9\u6848-1" tabindex="-1">\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848-1" aria-hidden="true">#</a></h3><h4 id="\u65B9\u6848\u4E00\u3001\u8BBE\u7F6E\u70ED\u70B9\u6570\u636E\u6C38\u4E0D\u8FC7\u671F" tabindex="-1">\u65B9\u6848\u4E00\u3001\u8BBE\u7F6E\u70ED\u70B9\u6570\u636E\u6C38\u4E0D\u8FC7\u671F <a class="header-anchor" href="#\u65B9\u6848\u4E00\u3001\u8BBE\u7F6E\u70ED\u70B9\u6570\u636E\u6C38\u4E0D\u8FC7\u671F" aria-hidden="true">#</a></h4><p>\u5BF9\u4E8E\u67D0\u4E2A\u9700\u8981\u9891\u7E41\u83B7\u53D6\u7684\u4FE1\u606F\uFF0C\u7F13\u5B58\u5728 <code>Redis</code> \u4E2D\uFF0C\u5E76\u8BBE\u7F6E\u5176\u6C38\u4E0D\u8FC7\u671F\u3002\u5F53\u7136\u8FD9\u79CD\u65B9\u5F0F\u6BD4\u8F83\u7C97\u66B4\uFF0C\u5BF9\u4E8E\u67D0\u4E9B\u4E1A\u52A1\u573A\u666F\u662F\u4E0D\u9002\u5408\u7684\u3002</p><h4 id="\u65B9\u6848\u4E8C\u3001\u5B9A\u65F6\u66F4\u65B0" tabindex="-1">\u65B9\u6848\u4E8C\u3001\u5B9A\u65F6\u66F4\u65B0 <a class="header-anchor" href="#\u65B9\u6848\u4E8C\u3001\u5B9A\u65F6\u66F4\u65B0" aria-hidden="true">#</a></h4><p>\u6BD4\u5982\u8FD9\u4E2A\u70ED\u70B9\u6570\u636E\u7684\u8FC7\u671F\u65F6\u95F4\u662F <code>1h</code>\uFF0C\u90A3\u4E48\u6BCF\u5230 <code>59minutes</code> \u65F6\uFF0C\u901A\u8FC7\u5B9A\u65F6\u4EFB\u52A1\u53BB\u66F4\u65B0\u8FD9\u4E2A\u70ED\u70B9 <code>key</code>\uFF0C\u5E76\u91CD\u65B0\u8BBE\u7F6E\u5176\u8FC7\u671F\u65F6\u95F4\u3002</p><h4 id="\u65B9\u6848\u4E09\u3001\u4E92\u65A5\u9501" tabindex="-1">\u65B9\u6848\u4E09\u3001\u4E92\u65A5\u9501 <a class="header-anchor" href="#\u65B9\u6848\u4E09\u3001\u4E92\u65A5\u9501" aria-hidden="true">#</a></h4><p><strong>\u8FD9\u662F\u89E3\u51B3\u7F13\u5B58\u51FB\u7A7F\u6BD4\u8F83\u5E38\u7528\u7684\u65B9\u6CD5\u3002</strong></p><p>\u4E92\u65A5\u9501\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u5728 <code>Redis</code> \u4E2D\u6839\u636Ekey\u83B7\u5F97\u7684 <code>value</code> \u503C\u4E3A\u7A7A\u65F6\uFF0C\u5148\u9501\u4E0A\uFF0C\u7136\u540E\u4ECE\u6570\u636E\u5E93\u52A0\u8F7D\uFF0C\u52A0\u8F7D\u5B8C\u6BD5\uFF0C\u91CA\u653E\u9501\u3002\u82E5\u5176\u4ED6\u7EBF\u7A0B\u4E5F\u5728\u8BF7\u6C42\u8BE5 <code>key</code> \u65F6\uFF0C\u53D1\u73B0\u83B7\u53D6\u9501\u5931\u8D25\uFF0C\u5219\u7761\u7720\u4E00\u6BB5\u65F6\u95F4\uFF08\u6BD4\u5982 <code>100ms</code>\uFF09\u540E\u91CD\u8BD5\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">public String get(key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    String value = redis.get(key);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (value == null) { //\u4EE3\u8868\u7F13\u5B58\u503C\u8FC7\u671F</span></span>
<span class="line"><span style="color:#A6ACCD;">        //\u8BBE\u7F6E3min\u7684\u8D85\u65F6\uFF0C\u9632\u6B62del\u64CD\u4F5C\u5931\u8D25\u7684\u65F6\u5019\uFF0C\u4E0B\u6B21\u7F13\u5B58\u8FC7\u671F\u4E00\u76F4\u4E0D\u80FDload db</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (redis.setnx(key_mutex, 1, 3 * 60) == 1) {  //\u4EE3\u8868\u8BBE\u7F6E\u6210\u529F</span></span>
<span class="line"><span style="color:#A6ACCD;">            value = db.get(key);</span></span>
<span class="line"><span style="color:#A6ACCD;">            redis.set(key, value, expire_secs);</span></span>
<span class="line"><span style="color:#A6ACCD;">            redis.del(key_mutex);</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {  //\u8FD9\u4E2A\u65F6\u5019\u4EE3\u8868\u540C\u65F6\u5019\u7684\u5176\u4ED6\u7EBF\u7A0B\u5DF2\u7ECFload db\u5E76\u56DE\u8BBE\u5230\u7F13\u5B58\u4E86\uFF0C\u8FD9\u65F6\u5019\u91CD\u8BD5\u83B7\u53D6\u7F13\u5B58\u503C\u5373\u53EF</span></span>
<span class="line"><span style="color:#A6ACCD;">            sleep(50);</span></span>
<span class="line"><span style="color:#A6ACCD;">            get(key);  //\u91CD\u8BD5</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    	return value;      </span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="\u65B9\u6848\u56DB\u3001\u201D\u63D0\u524D\u201C\u4F7F\u7528\u4E92\u65A5\u9501" tabindex="-1">\u65B9\u6848\u56DB\u3001\u201D\u63D0\u524D\u201C\u4F7F\u7528\u4E92\u65A5\u9501 <a class="header-anchor" href="#\u65B9\u6848\u56DB\u3001\u201D\u63D0\u524D\u201C\u4F7F\u7528\u4E92\u65A5\u9501" aria-hidden="true">#</a></h4><p>\u5728 <code>value</code> \u5185\u90E8\u8BBE\u7F6E\u4E00\u4E2A\u6BD4\u7F13\u5B58\uFF08<code>Redis</code>\uFF09\u8FC7\u671F\u65F6\u95F4\u77ED\u7684\u8FC7\u671F\u65F6\u95F4\u6807\u8BC6\uFF0C\u5F53\u5F02\u6B65\u7EBF\u7A0B\u53D1\u73B0\u8BE5\u503C\u5FEB\u8FC7\u671F\u65F6\uFF0C\u9A6C\u4E0A\u5EF6\u957F\u5185\u7F6E\u7684\u8FD9\u4E2A\u65F6\u95F4\uFF0C\u5E76\u91CD\u65B0\u4ECE\u6570\u636E\u5E93\u52A0\u8F7D\u6570\u636E\uFF0C\u8BBE\u7F6E\u5230\u7F13\u5B58\u4E2D\u53BB\u3002</p><h2 id="\u7F13\u5B58\u96EA\u5D29" tabindex="-1">\u7F13\u5B58\u96EA\u5D29 <a class="header-anchor" href="#\u7F13\u5B58\u96EA\u5D29" aria-hidden="true">#</a></h2><h3 id="\u6982\u5FF5-2" tabindex="-1">\u6982\u5FF5 <a class="header-anchor" href="#\u6982\u5FF5-2" aria-hidden="true">#</a></h3><p><code>Redis</code> \u4E2D\u7F13\u5B58\u7684\u6570\u636E\u5927\u9762\u79EF\u540C\u65F6\u5931\u6548\uFF0C\u6216\u8005 <code>Redis</code> \u5B95\u673A\uFF0C\u4ECE\u800C\u4F1A\u5BFC\u81F4\u5927\u91CF\u8BF7\u6C42\u76F4\u63A5\u5230\u6570\u636E\u5E93\uFF0C\u538B\u57AE\u6570\u636E\u5E93\u3002</p><p>\u5BF9\u4E8E\u4E00\u4E2A\u4E1A\u52A1\u7CFB\u7EDF\uFF0C<strong>\u5982\u679C <code>Redis</code> \u5B95\u673A\u6216\u5927\u9762\u79EF\u7684 <code>key</code> \u540C\u65F6\u8FC7\u671F</strong>\uFF0C\u4F1A\u5BFC\u81F4\u5927\u91CF\u8BF7\u6C42\u540C\u65F6\u6253\u5230\u6570\u636E\u5E93\uFF0C\u8FD9\u662F\u707E\u96BE\u6027\u7684\u95EE\u9898\u3002</p><p><img src="`+p+'" alt="img"></p><h3 id="\u89E3\u51B3\u65B9\u6848-2" tabindex="-1">\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848-2" aria-hidden="true">#</a></h3><h4 id="\u65B9\u6848\u4E00\u3001\u8BBE\u7F6E\u6709\u6548\u671F\u5747\u5300\u5206\u5E03" tabindex="-1">\u65B9\u6848\u4E00\u3001\u8BBE\u7F6E\u6709\u6548\u671F\u5747\u5300\u5206\u5E03 <a class="header-anchor" href="#\u65B9\u6848\u4E00\u3001\u8BBE\u7F6E\u6709\u6548\u671F\u5747\u5300\u5206\u5E03" aria-hidden="true">#</a></h4><p>\u907F\u514D\u7F13\u5B58\u8BBE\u7F6E\u76F8\u8FD1\u7684\u6709\u6548\u671F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u8BBE\u7F6E\u6709\u6548\u671F\u65F6\u589E\u52A0\u968F\u673A\u503C\uFF1B\u6216\u8005\u7EDF\u4E00\u89C4\u5212\u6709\u6548\u671F\uFF0C\u4F7F\u5F97\u8FC7\u671F\u65F6\u95F4\u5747\u5300\u5206\u5E03\u3002</p><h4 id="\u65B9\u6848\u4E8C\u3001\u6570\u636E\u9884\u70ED" tabindex="-1">\u65B9\u6848\u4E8C\u3001\u6570\u636E\u9884\u70ED <a class="header-anchor" href="#\u65B9\u6848\u4E8C\u3001\u6570\u636E\u9884\u70ED" aria-hidden="true">#</a></h4><p>\u5BF9\u4E8E\u5373\u5C06\u6765\u4E34\u7684\u5927\u91CF\u8BF7\u6C42\uFF0C\u6211\u4EEC\u53EF\u4EE5\u63D0\u524D\u8D70\u4E00\u904D\u7CFB\u7EDF\uFF0C\u5C06\u6570\u636E\u63D0\u524D\u7F13\u5B58\u5728 <code>Redis</code> \u4E2D\uFF0C\u5E76\u8BBE\u7F6E\u4E0D\u540C\u7684\u8FC7\u671F\u65F6\u95F4\u3002</p><h4 id="\u65B9\u6848\u4E09\u3001\u4FDD\u8BC1-redis-\u670D\u52A1\u9AD8\u53EF\u7528" tabindex="-1">\u65B9\u6848\u4E09\u3001\u4FDD\u8BC1 <code>Redis</code> \u670D\u52A1\u9AD8\u53EF\u7528 <a class="header-anchor" href="#\u65B9\u6848\u4E09\u3001\u4FDD\u8BC1-redis-\u670D\u52A1\u9AD8\u53EF\u7528" aria-hidden="true">#</a></h4><p><code>Redis</code> \u7684\u54E8\u5175\u6A21\u5F0F\u548C\u96C6\u7FA4\u6A21\u5F0F\uFF0C\u4E3A\u9632\u6B62 <code>Redis</code> \u96C6\u7FA4\u5355\u8282\u70B9\u6545\u969C\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E24\u79CD\u6A21\u5F0F\u5B9E\u73B0\u9AD8\u53EF\u7528\u3002</p><h4 id="\u65B9\u6848\u56DB\u3001\u70ED\u70B9\u6570\u636E\u4E0D\u5931\u6548" tabindex="-1">\u65B9\u6848\u56DB\u3001\u70ED\u70B9\u6570\u636E\u4E0D\u5931\u6548 <a class="header-anchor" href="#\u65B9\u6848\u56DB\u3001\u70ED\u70B9\u6570\u636E\u4E0D\u5931\u6548" aria-hidden="true">#</a></h4><p>\u70ED\u70B9\u6570\u636E\u53EF\u4EE5\u8003\u8651\u4E0D\u5931\u6548\uFF0C\u540E\u53F0\u5F02\u6B65\u66F4\u65B0\u7F13\u5B58\uFF0C\u9002\u7528\u4E8E\u4E0D\u4E25\u683C\u8981\u6C42\u7F13\u5B58\u4E00\u81F4\u6027\u7684\u573A\u666F\u3002</p>',80),d=[c];function i(t,h,b,u,A,C){return a(),e("div",null,d)}const D=s(r,[["render",i]]);export{y as __pageData,D as default};
