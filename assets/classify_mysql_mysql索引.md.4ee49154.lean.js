import{_ as e,c as l,o as a,a as s}from"./app.76403961.js";const n="/guo-notes/mysql/\u4E8C\u53C9\u6811_20220316153214227108.png",t="/guo-notes/mysql/\u7EA2\u9ED1\u6811_20220316163142686602.png",i="/guo-notes/mysql/B-Tree\u7ED3\u6784_20220316163813441163.png",r="/guo-notes/mysql/B+Tree\u7ED3\u6784\u56FE_20220316170700591277.png",p="/guo-notes/mysql/\u7ED3\u6784\u56FE_20220316171730865611.png",o="/guo-notes/mysql/mysql-8.png",d="/guo-notes/mysql/mysql-9.png",h="/guo-notes/mysql/image-20230224194618838.png",c="/guo-notes/mysql/image-20230224194724672.png",u="/guo-notes/mysql/mysql-12.png",D=JSON.parse('{"title":"mysql \u7D22\u5F15","description":"","frontmatter":{"typora-root-url":"..\\\\..\\\\public"},"headers":[{"level":2,"title":"\u4E00\u3001\u7D22\u5F15\u7C7B\u578B","slug":"\u4E00\u3001\u7D22\u5F15\u7C7B\u578B","link":"#\u4E00\u3001\u7D22\u5F15\u7C7B\u578B","children":[]},{"level":2,"title":"1\u3001\u4E3B\u952E\u7D22\u5F15 PRIMARY KEY","slug":"_1\u3001\u4E3B\u952E\u7D22\u5F15-primary-key","link":"#_1\u3001\u4E3B\u952E\u7D22\u5F15-primary-key","children":[]},{"level":2,"title":"2\u3001\u552F\u4E00\u7D22\u5F15 UNIQUE","slug":"_2\u3001\u552F\u4E00\u7D22\u5F15-unique","link":"#_2\u3001\u552F\u4E00\u7D22\u5F15-unique","children":[]},{"level":2,"title":"3\u3001\u666E\u901A\u7D22\u5F15 INDEX","slug":"_3\u3001\u666E\u901A\u7D22\u5F15-index","link":"#_3\u3001\u666E\u901A\u7D22\u5F15-index","children":[]},{"level":2,"title":"4\u3001\u7EC4\u5408\u7D22\u5F15 INDEX","slug":"_4\u3001\u7EC4\u5408\u7D22\u5F15-index","link":"#_4\u3001\u7EC4\u5408\u7D22\u5F15-index","children":[]},{"level":2,"title":"5\u3001\u5168\u6587\u7D22\u5F15 FULLTEXT","slug":"_5\u3001\u5168\u6587\u7D22\u5F15-fulltext","link":"#_5\u3001\u5168\u6587\u7D22\u5F15-fulltext","children":[]},{"level":2,"title":"\u4E8C\u3001\u7D22\u5F15\u7ED3\u6784","slug":"\u4E8C\u3001\u7D22\u5F15\u7ED3\u6784","link":"#\u4E8C\u3001\u7D22\u5F15\u7ED3\u6784","children":[]},{"level":2,"title":"1\u3001B- \u6811","slug":"_1\u3001b-\u6811","link":"#_1\u3001b-\u6811","children":[]},{"level":2,"title":"2\u3001B+ \u6811","slug":"_2\u3001b-\u6811","link":"#_2\u3001b-\u6811","children":[]},{"level":2,"title":"3\u3001\u5173\u4E8EB+ \u6811\u7684\u89E3\u7B54","slug":"_3\u3001\u5173\u4E8Eb-\u6811\u7684\u89E3\u7B54","link":"#_3\u3001\u5173\u4E8Eb-\u6811\u7684\u89E3\u7B54","children":[]},{"level":2,"title":"4\u3001Hash","slug":"_4\u3001hash","link":"#_4\u3001hash","children":[]},{"level":2,"title":"\u4E09\u3001\u7D22\u5F15\u539F\u7406","slug":"\u4E09\u3001\u7D22\u5F15\u539F\u7406","link":"#\u4E09\u3001\u7D22\u5F15\u539F\u7406","children":[]},{"level":2,"title":"1\u3001myisam\u7D22\u5F15\u5B9E\u73B0\u539F\u7406","slug":"_1\u3001myisam\u7D22\u5F15\u5B9E\u73B0\u539F\u7406","link":"#_1\u3001myisam\u7D22\u5F15\u5B9E\u73B0\u539F\u7406","children":[]},{"level":2,"title":"2\u3001innodb \u7D22\u5F15\u5B9E\u73B0\u539F\u7406","slug":"_2\u3001innodb-\u7D22\u5F15\u5B9E\u73B0\u539F\u7406","link":"#_2\u3001innodb-\u7D22\u5F15\u5B9E\u73B0\u539F\u7406","children":[]},{"level":2,"title":"3\u3001\u56DE\u8868\u95EE\u9898\u548C\u8986\u76D6\u7D22\u5F15","slug":"_3\u3001\u56DE\u8868\u95EE\u9898\u548C\u8986\u76D6\u7D22\u5F15","link":"#_3\u3001\u56DE\u8868\u95EE\u9898\u548C\u8986\u76D6\u7D22\u5F15","children":[]},{"level":2,"title":"4\u3001hash\u7D22\u5F15","slug":"_4\u3001hash\u7D22\u5F15","link":"#_4\u3001hash\u7D22\u5F15","children":[]},{"level":2,"title":"4.1\u3001hash\u7D22\u5F15\u7684\u7279\u70B9","slug":"_4-1\u3001hash\u7D22\u5F15\u7684\u7279\u70B9","link":"#_4-1\u3001hash\u7D22\u5F15\u7684\u7279\u70B9","children":[]},{"level":2,"title":"4.2\u3001hash \u7D22\u5F15\u7684\u9650\u5236","slug":"_4-2\u3001hash-\u7D22\u5F15\u7684\u9650\u5236","link":"#_4-2\u3001hash-\u7D22\u5F15\u7684\u9650\u5236","children":[]},{"level":2,"title":"\u56DB\u3001\u8054\u5408\u7D22\u5F15\u548C\u6700\u5DE6\u5339\u914D\u539F\u5219","slug":"\u56DB\u3001\u8054\u5408\u7D22\u5F15\u548C\u6700\u5DE6\u5339\u914D\u539F\u5219","link":"#\u56DB\u3001\u8054\u5408\u7D22\u5F15\u548C\u6700\u5DE6\u5339\u914D\u539F\u5219","children":[]},{"level":2,"title":"\u4E94\u3001\u7D22\u5F15\u5931\u6548","slug":"\u4E94\u3001\u7D22\u5F15\u5931\u6548","link":"#\u4E94\u3001\u7D22\u5F15\u5931\u6548","children":[]},{"level":2,"title":"\u516D\u3001\u524D\u7F00\u7D22\u5F15","slug":"\u516D\u3001\u524D\u7F00\u7D22\u5F15","link":"#\u516D\u3001\u524D\u7F00\u7D22\u5F15","children":[]},{"level":2,"title":"\u4E03\u3001\u8BBE\u8BA1\u539F\u5219","slug":"\u4E03\u3001\u8BBE\u8BA1\u539F\u5219","link":"#\u4E03\u3001\u8BBE\u8BA1\u539F\u5219","children":[]}],"relativePath":"classify/mysql/mysql\u7D22\u5F15.md","lastUpdated":1678273566000}'),g={name:"classify/mysql/mysql\u7D22\u5F15.md"},m=s("",119),b=[m];function _(y,f,x,B,T,A){return a(),l("div",null,b)}const I=e(g,[["render",_]]);export{D as __pageData,I as default};
