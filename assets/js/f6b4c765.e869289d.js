"use strict";(self.webpackChunkSrcGithubPages=self.webpackChunkSrcGithubPages||[]).push([[171],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,b=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5991:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={title:"MySQL\u3067UUID\u306ebulk insert\u306e\u7d50\u679c\u30ec\u30b3\u30fc\u30c9\u304c\u3069\u3046\u306b\u3082\u53d6\u5f97\u3067\u304d\u306a\u3044\u4ef6",authors:"stoikheia",tags:["tech","database","mysql"]},u=void 0,c={permalink:"/blog/2022/06/10/",source:"@site/blog/2022/06-10.md",title:"MySQL\u3067UUID\u306ebulk insert\u306e\u7d50\u679c\u30ec\u30b3\u30fc\u30c9\u304c\u3069\u3046\u306b\u3082\u53d6\u5f97\u3067\u304d\u306a\u3044\u4ef6",description:"MySQL\u306b\u304a\u3051\u308b\u633f\u5165\u7d50\u679c\u306eID(PK)\u53d6\u5f97\u306e\u96e3",date:"2022-06-10T00:00:00.000Z",formattedDate:"June 10, 2022",tags:[{label:"tech",permalink:"/blog/tags/tech"},{label:"database",permalink:"/blog/tags/database"},{label:"mysql",permalink:"/blog/tags/mysql"}],readingTime:1.65,truncated:!1,authors:[{name:"Stoikheia",title:"Maintainer of This Site",url:"https://github.com/stoikheia/",imageURL:"https://github.com/stoikheia.png",key:"stoikheia"}],frontMatter:{title:"MySQL\u3067UUID\u306ebulk insert\u306e\u7d50\u679c\u30ec\u30b3\u30fc\u30c9\u304c\u3069\u3046\u306b\u3082\u53d6\u5f97\u3067\u304d\u306a\u3044\u4ef6",authors:"stoikheia",tags:["tech","database","mysql"]},prevItem:{title:"docusaurus\u3067twitter\u306e\u57cb\u3081\u8fbc\u307f",permalink:"/blog/2022/06/16/"},nextItem:{title:"Docusourus\u3067\u6570\u5f0f\u3092\u8868\u793a\u3059\u308b\u8a2d\u5b9a",permalink:"/blog/2022/06/09/"}},s={authorsImageUrls:[void 0]},p=[{value:"MySQL\u306b\u304a\u3051\u308b\u633f\u5165\u7d50\u679c\u306eID(PK)\u53d6\u5f97\u306e\u96e3",id:"mysql\u306b\u304a\u3051\u308b\u633f\u5165\u7d50\u679c\u306eidpk\u53d6\u5f97\u306e\u96e3",level:2},{value:"UUID\u306e\u6642\u306b\u306f\u3055\u3089\u306b\u3069\u3046\u3057\u3088\u3046\u3082\u7121\u3044",id:"uuid\u306e\u6642\u306b\u306f\u3055\u3089\u306b\u3069\u3046\u3057\u3088\u3046\u3082\u7121\u3044",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"mysql\u306b\u304a\u3051\u308b\u633f\u5165\u7d50\u679c\u306eidpk\u53d6\u5f97\u306e\u96e3"},"MySQL\u306b\u304a\u3051\u308b\u633f\u5165\u7d50\u679c\u306eID(PK)\u53d6\u5f97\u306e\u96e3"),(0,a.kt)("p",null,"MySQL\u306b\u306fPostgres\u3067\u8a00\u3046RETURNING\u53e5\u76f8\u5f53\u306e\u3082\u306e\u304c\u7121\u3044\u3053\u3068\u306f\u77e5\u3089\u308c\u3066\u3044\u308b\u3002"),(0,a.kt)("p",null,"\u3053\u306eRETURNING\u53e5\u3068\u306f\u3001INSERT\u306e\u7d50\u679c\u306e\u30ec\u30b3\u30fc\u30c9\u3092\u8fd4\u3059\u3082\u306e\u3002"),(0,a.kt)("p",null,"MySQL\u3067\u306f\u4ee3\u308f\u308a\u306bLAST_INSERTED_ID()\u3068\u3044\u3046\u95a2\u6570\u304c\u3042\u308b\u304c\u3001\u3053\u308c\u306f\u305d\u306e\u540d\u306e\u901a\u308a\u6700\u5f8c\u306b\u633f\u5165\u3055\u308c\u305f\u884c\u306eID\u3092\u8fd4\u3059\u3002"),(0,a.kt)("p",null,"\u305d\u306e\u540d\u306e\u901a\u308a\u3068\u8a00\u3063\u305f\u304c\u3001\u3053\u306eLAST_INSERTED_ID()\u306fbulk insert\u3092\u884c\u3063\u305f\u3068\u304d\u306b\u305d\u306e\u540d\u306e\u901a\u308a\u306b\u306f\u306a\u3089\u306a\u3044\u3002"),(0,a.kt)("p",null,"bulk insert\u304c\u6210\u529f\u3057\u305f\u6700\u521d\u306e\u884c\u306eID\u3092\u8fd4\u3059\u3068\u3044\u3046\u6319\u52d5\u3068\u306a\u308b\u3002"),(0,a.kt)("p",null,"\u3053\u308c\u306f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u3082\u66f8\u3044\u3066\u3042\u308b\u3002\uff08\u3089\u3057\u3044\uff09"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.6/ja/innodb-auto-increment-configurable.html"},"https://dev.mysql.com/doc/refman/5.6/ja/innodb-auto-increment-configurable.html")),(0,a.kt)("h2",{id:"uuid\u306e\u6642\u306b\u306f\u3055\u3089\u306b\u3069\u3046\u3057\u3088\u3046\u3082\u7121\u3044"},"UUID\u306e\u6642\u306b\u306f\u3055\u3089\u306b\u3069\u3046\u3057\u3088\u3046\u3082\u7121\u3044"),(0,a.kt)("p",null,"MySQL8.0.13\u4ee5\u964d\u306eInnoDB\u3067\u306fUUID()\u95a2\u6570\u304cDEFAULT\u6307\u5b9a\u3067\u4f7f\u3048\u308b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `book` (\n   `id` binary(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID(), TRUE)),\n   `count` int not null,\n   PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;\n\nINSERT INTO book (count) VALUES (1);\n")),(0,a.kt)("p",null,"\u3053\u308c\u306b\u3088\u308aINSERT\u6642\u306b\u81ea\u52d5\u7684\u306bUUID\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u308b\u3088\u3046\u306b\u306a\u3042\u308b\u306e\u3060\u304c\u3001"),(0,a.kt)("p",null,"PK\u306bUUID\u3092\u4f7f\u3044\u81ea\u52d5\u3067\u632f\u3089\u308c\u308b\u3088\u3046\u306b\u3057\u3088\u3046\u3068\u3059\u308b\u3068INSERT\u6642\u306b\u633f\u5165\u3057\u305f\u30ec\u30b3\u30fc\u30c9\u304c\u3069\u308c\u304b\u8a8d\u8b58\u3067\u304d\u306a\u304f\u306a\u308b\u3002"),(0,a.kt)("p",null,"\u3053\u308c\u306fLAST_INSERTED_ID()\u304c\u6570\u5024\u3057\u304b\u6a5f\u80fd\u3057\u306a\u3044\u305f\u3081\u3060\u3002"))}f.isMDXComponent=!0}}]);