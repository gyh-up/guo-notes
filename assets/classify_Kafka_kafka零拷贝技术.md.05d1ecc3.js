import{_ as a,c as e,o as t,a as p}from"./app.a231f820.js";const r="/guo-notes/kafka/kafka-13.png",o="/guo-notes/kafka/kafka-14.png",h=JSON.parse('{"title":"kafka\u96F6\u62F7\u8D1D\u6280\u672F\u8BE6\u89E3","description":"","frontmatter":{"typora-root-url":"..\\\\..\\\\public"},"headers":[],"relativePath":"classify/Kafka/kafka\u96F6\u62F7\u8D1D\u6280\u672F.md","lastUpdated":null}'),f={name:"classify/Kafka/kafka\u96F6\u62F7\u8D1D\u6280\u672F.md"},s=p('<h1 id="kafka\u96F6\u62F7\u8D1D\u6280\u672F\u8BE6\u89E3" tabindex="-1">kafka\u96F6\u62F7\u8D1D\u6280\u672F\u8BE6\u89E3 <a class="header-anchor" href="#kafka\u96F6\u62F7\u8D1D\u6280\u672F\u8BE6\u89E3" aria-hidden="true">#</a></h1><p><strong>\u6240\u8C13\u7684\u96F6\u62F7\u8D1D\u662F\u6307\u5C06\u6570\u636E\u76F4\u63A5\u4ECE\u78C1\u76D8\u6587\u4EF6\u590D\u5236\u5230\u7F51\u5361\u8BBE\u5907\u4E2D\uFF0C\u800C\u4E0D\u9700\u8981\u7ECF\u7531\u5E94\u7528\u7A0B\u5E8F\u4E4B\u624B\u3002\u96F6\u62F7\u8D1D\u5927\u5927\u63D0\u9AD8\u4E86\u5E94\u7528\u7A0B\u5E8F\u7684\u6027\u80FD\uFF0C\u51CF\u5C11\u4E86\u5185\u6838\u548C\u7528\u6237\u6A21\u5F0F\u4E4B\u95F4\u7684\u4E0A\u4E0B\u6587\u5207\u6362\u3002</strong></p><p>\u5BF9 Linux \u64CD\u4F5C\u7CFB\u7EDF\u800C\u8A00\uFF0C\u96F6\u62F7\u8D1D\u6280\u672F\u4F9D\u8D56\u4E8E\u5E95\u5C42\u7684 sendfile() \u65B9\u6CD5\u5B9E\u73B0\u3002\u5BF9\u5E94\u4E8E Java \u8BED\u8A00\uFF0CFileChannal.transferTo() \u65B9\u6CD5\u7684\u5E95\u5C42\u5B9E\u73B0\u5C31\u662F sendfile() \u65B9\u6CD5\u3002</p><p>\u5355\u7EAF\u4ECE\u6982\u5FF5\u4E0A\u7406\u89E3\u201C\u96F6\u62F7\u8D1D\u201D\u6BD4\u8F83\u62BD\u8C61\uFF0C\u8FD9\u91CC\u7B80\u5355\u5730\u4ECB\u7ECD\u4E00\u4E0B\u5B83\u3002\u8003\u8651\u8FD9\u6837\u4E00\u79CD\u5E38\u7528\u7684\u60C5\u5F62\uFF1A\u4F60\u9700\u8981\u5C06\u9759\u6001\u5185\u5BB9\uFF08\u7C7B\u4F3C\u56FE\u7247\u3001\u6587\u4EF6\uFF09\u5C55\u793A\u7ED9\u7528\u6237\u3002\u8FD9\u4E2A\u60C5\u5F62\u5C31\u610F\u5473\u7740\u9700\u8981\u5148\u5C06\u9759\u6001\u5185\u5BB9\u4ECE\u78C1\u76D8\u4E2D\u590D\u5236\u51FA\u6765\u653E\u5230\u4E00\u4E2A\u5185\u5B58 buf \u4E2D\uFF0C\u7136\u540E\u5C06\u8FD9\u4E2A buf \u901A\u8FC7\u5957\u63A5\u5B57\uFF08Socket\uFF09\u4F20\u8F93\u7ED9\u7528\u6237\uFF0C\u8FDB\u800C\u7528\u6237\u83B7\u5F97\u9759\u6001\u5185\u5BB9\u3002\u8FD9\u770B\u8D77\u6765\u518D\u6B63\u5E38\u4E0D\u8FC7\u4E86\uFF0C\u4F46\u5B9E\u9645\u4E0A\u8FD9\u662F\u5F88\u4F4E\u6548\u7684\u6D41\u7A0B\uFF0C\u6211\u4EEC\u628A\u4E0A\u9762\u7684\u8FD9\u79CD\u60C5\u5F62\u62BD\u8C61\u6210\u4E0B\u9762\u7684\u8FC7\u7A0B\uFF1Aread(file, tmp_buf, len)\uFF1Bwrite(socket, tmp_buf, len)\uFF1B</p><p>\u9996\u5148\u8C03\u7528 read() \u5C06\u9759\u6001\u5185\u5BB9\uFF08\u8FD9\u91CC\u5047\u8BBE\u4E3A\u6587\u4EF6 A \uFF09\u8BFB\u53D6\u5230 tmp_buf\uFF0C\u7136\u540E\u8C03\u7528 write() \u5C06 tmp_buf \u5199\u5165 Socket\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p><img src="'+r+'" alt="image-20210903140124288"></p><p>\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\uFF0C\u6587\u4EF6 A \u7ECF\u5386\u4E864\u6B21\u590D\u5236\u7684\u8FC7\u7A0B\uFF1A</p><p>\u8C03\u7528 read() \u65F6\uFF0C\u6587\u4EF6 A \u4E2D\u7684\u5185\u5BB9\u88AB\u590D\u5236\u5230\u4E86\u5185\u6838\u6A21\u5F0F\u4E0B\u7684 Read Buffer \u4E2D\u3002</p><p>CPU \u63A7\u5236\u5C06\u5185\u6838\u6A21\u5F0F\u6570\u636E\u590D\u5236\u5230\u7528\u6237\u6A21\u5F0F\u4E0B\u3002</p><p>\u8C03\u7528 write() \u65F6\uFF0C\u5C06\u7528\u6237\u6A21\u5F0F\u4E0B\u7684\u5185\u5BB9\u590D\u5236\u5230\u5185\u6838\u6A21\u5F0F\u4E0B\u7684 Socket Buffer \u4E2D\u3002</p><p>\u5C06\u5185\u6838\u6A21\u5F0F\u4E0B\u7684 Socket Buffer \u7684\u6570\u636E\u590D\u5236\u5230\u7F51\u5361\u8BBE\u5907\u4E2D\u4F20\u9001\u3002</p><p>\u4ECE\u4E0A\u9762\u7684\u8FC7\u7A0B\u53EF\u4EE5\u770B\u51FA\uFF0C\u6570\u636E\u5E73\u767D\u65E0\u6545\u5730\u4ECE\u5185\u6838\u6A21\u5F0F\u5230\u7528\u6237\u6A21\u5F0F\u201C\u8D70\u4E86\u4E00\u5708\u201D\uFF0C\u6D6A\u8D39\u4E862\u6B21\u590D\u5236\u8FC7\u7A0B\uFF1A\u7B2C\u4E00\u6B21\u662F\u4ECE\u5185\u6838\u6A21\u5F0F\u590D\u5236\u5230\u7528\u6237\u6A21\u5F0F\uFF1B\u7B2C\u4E8C\u6B21\u662F\u4ECE\u7528\u6237\u6A21\u5F0F\u518D\u590D\u5236\u56DE\u5185\u6838\u6A21\u5F0F\uFF0C\u5373\u4E0A\u97624\u6B21\u8FC7\u7A0B\u4E2D\u7684\u7B2C2\u6B65\u548C\u7B2C3\u6B65\u3002\u800C\u4E14\u5728\u4E0A\u9762\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5185\u6838\u548C\u7528\u6237\u6A21\u5F0F\u7684\u4E0A\u4E0B\u6587\u7684\u5207\u6362\u4E5F\u662F4\u6B21\u3002</p><p>\u5982\u679C\u91C7\u7528\u4E86\u96F6\u62F7\u8D1D\u6280\u672F\uFF0C\u90A3\u4E48\u5E94\u7528\u7A0B\u5E8F\u53EF\u4EE5\u76F4\u63A5\u8BF7\u6C42\u5185\u6838\u628A\u78C1\u76D8\u4E2D\u7684\u6570\u636E\u4F20\u8F93\u7ED9 Socket\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p><img src="'+o+'" alt="image-20210903140317673"></p><p>\u96F6\u62F7\u8D1D\u6280\u672F\u901A\u8FC7 DMA\uFF08Direct Memory Access\uFF09\u6280\u672F\u5C06\u6587\u4EF6\u5185\u5BB9\u590D\u5236\u5230\u5185\u6838\u6A21\u5F0F\u4E0B\u7684 Read Buffer \u4E2D\u3002\u4E0D\u8FC7\u6CA1\u6709\u6570\u636E\u88AB\u590D\u5236\u5230Socket Buffer\uFF0C\u76F8\u53CD\u53EA\u6709\u5305\u542B\u6570\u636E\u7684\u4F4D\u7F6E\u548C\u957F\u5EA6\u7684\u4FE1\u606F\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u88AB\u52A0\u5230 Socket Buffer \u4E2D\u3002DMA \u5F15\u64CE\u76F4\u63A5\u5C06\u6570\u636E\u4ECE\u5185\u6838\u6A21\u5F0F\u4E2D\u4F20\u9012\u5230\u7F51\u5361\u8BBE\u5907\uFF08\u534F\u8BAE\u5F15\u64CE)\u3002\u8FD9\u91CC\u6570\u636E\u53EA\u7ECF\u5386\u4E862\u6B21\u590D\u5236\u5C31\u4ECE\u78C1\u76D8\u4E2D\u4F20\u9001\u51FA\u53BB\u4E86\uFF0C\u5E76\u4E14\u4E0A\u4E0B\u6587\u5207\u6362\u4E5F\u53D8\u6210\u4E862\u6B21\u3002\u96F6\u62F7\u8D1D\u662F\u9488\u5BF9\u5185\u6838\u6A21\u5F0F\u800C\u8A00\u7684\uFF0C\u6570\u636E\u5728\u5185\u6838\u6A21\u5F0F\u4E0B\u5B9E\u73B0\u4E86\u96F6\u62F7\u8D1D\u3002</p>',15),_=[s];function c(n,i,k,d,l,u){return t(),e("div",null,_)}const S=a(f,[["render",c]]);export{h as __pageData,S as default};
