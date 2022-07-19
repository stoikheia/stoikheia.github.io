"use strict";(self.webpackChunkSrcGithubPages=self.webpackChunkSrcGithubPages||[]).push([[477],{10:function(t){t.exports=JSON.parse('{"blogPosts":[{"id":"/2022/07/19/","metadata":{"permalink":"/blog/2022/07/19/","source":"@site/blog/2022/07-19.md","title":"golang\u306b\u30d7\u30ed\u30d5\u30a1\u30a4\u30e9\u3092\u4ed5\u8fbc\u3080","description":"\u30d7\u30ed\u30d5\u30a1\u30a4\u30e9","date":"2022-07-19T00:00:00.000Z","formattedDate":"July 19, 2022","tags":[{"label":"tech","permalink":"/blog/tags/tech"},{"label":"golang","permalink":"/blog/tags/golang"}],"readingTime":1.29,"truncated":false,"authors":[{"name":"Stoikheia","title":"Maintainer of This Site","url":"https://github.com/stoikheia/","imageURL":"https://github.com/stoikheia.png","key":"stoikheia"}],"frontMatter":{"title":"golang\u306b\u30d7\u30ed\u30d5\u30a1\u30a4\u30e9\u3092\u4ed5\u8fbc\u3080","authors":"stoikheia","tags":["tech","golang"]},"nextItem":{"title":"docusaurus\u3067twitter\u306e\u57cb\u3081\u8fbc\u307f","permalink":"/blog/2022/06/16/"}},"content":"## \u30d7\u30ed\u30d5\u30a1\u30a4\u30e9\\n\\n- runtime/pprof\\n  - \u30d5\u30a1\u30a4\u30eb\u3067\u30ed\u30b0\u3092\u51fa\u529b\u3059\u308b\\n  - \u7d71\u8a08\u8868\u793a\u306f\u30c4\u30fc\u30eb\u3092\u4f7f\u3046\\n- net/http/pprof\\n  - \u30c7\u30fc\u30bf\u3092http\u3067\u30b5\u30fc\u30d6\u3059\u308b\\n    - \u5b9f\u884c\u4e2d\u3057\u304b\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3067\u304d\u306a\u3044\\n    - \u5b9f\u884c\u5f8c10\u79d2\u9593\u306f\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u4ed5\u7d44\u307f\u306b\u306a\u3063\u3066\u3044\u308b\\n  - \u30b5\u30fc\u30d0\u30fc\u3092\u7acb\u3061\u4e0a\u3052\u3066\u3044\u308b\u5834\u5408\u306b\u306f\u7d99\u7d9a\u7684\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u306e\u3067\u4fbf\u5229\\n\\n\u3044\u305a\u308c\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4f7f\u3046\u5834\u5408\u3082\u3001\u30b3\u30fc\u30c9\u306b\u30d7\u30ed\u30d5\u30a1\u30a4\u30e9\u306e\u57cb\u3081\u8fbc\u307f\u304c\u5fc5\u8981\\n\u4eca\u56de\u306fnet/http/pprof\u306e\u5834\u5408\u306e\u30e1\u30e2\\n\\n### net/http/pprof\\n\\nurl\u306bpprof\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u516c\u958b\u3055\u308c\u308b\\n\\nhttps://pkg.go.dev/net/http/pprof\\n\\n\\n- heap\u30e1\u30e2\u30ea\u306e\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\\n  - `http://localhost:6060/debug/pprof/heap`\\n- 30\u79d2\u5206\u306eCPU\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\\n  - `http://localhost:6060/debug/pprof/profile?seconds=30`\\n- runtime.SetBlockProfileRate\u3092\u547c\u3073\u51fa\u3057\u305f\u5f8c\u306egoroutine\u306e\u30d6\u30ed\u30c3\u30af\u306b\u95a2\u3059\u308b\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\\n  - `http://localhost:6060/debug/pprof/block`\\n- runtime.SetMutexProfileFraction\u3092\u547c\u3073\u51fa\u3057\u305f\u5f8c\u306emutex\u306e\u7af6\u5408\\n  - `http://localhost:6060/debug/pprof/mutex`\\n\\n#### go-chi\u306b\u7d44\u307f\u8fbc\u3080\u5834\u5408\\n\\nrouter\u306bhandler\u3092\u767b\u9332\u3059\u308b\\n\u30b5\u30f3\u30d7\u30eb\u304c\u516c\u958b\u3055\u308c\u3066\u3044\u308b\\n\\nhttps://github.com/go-chi/chi/blob/master/middleware/profiler.go\\n\\n\\n\\n## \u30c4\u30fc\u30eb\\n\\n\u6a19\u6e96\u3067\u4ed8\u5c5e\u3059\u308bpprof\u30c4\u30fc\u30eb\\n\\nwebUI\u3092\u4f7f\u3046\u5834\u5408\u3001graphbitz\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308b\\n\\n```sh\\nsudo go tool pprof -http=\\":80\\" http://<\u30a2\u30c9\u30ec\u30b9>/pprof/profile\\n```\\n\\n\u30d6\u30e9\u30a6\u30b6\u304c\u81ea\u52d5\u7684\u306b\u7acb\u3061\u4e0a\u304c\u308b"},{"id":"/2022/06/16/","metadata":{"permalink":"/blog/2022/06/16/","source":"@site/blog/2022/06-16.mdx","title":"docusaurus\u3067twitter\u306e\u57cb\u3081\u8fbc\u307f","description":"react-twitter-embed","date":"2022-06-16T00:00:00.000Z","formattedDate":"June 16, 2022","tags":[{"label":"tech","permalink":"/blog/tags/tech"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.285,"truncated":false,"authors":[{"name":"Stoikheia","title":"Maintainer of This Site","url":"https://github.com/stoikheia/","imageURL":"https://github.com/stoikheia.png","key":"stoikheia"}],"frontMatter":{"title":"docusaurus\u3067twitter\u306e\u57cb\u3081\u8fbc\u307f","authors":"stoikheia","tags":["tech","docusaurus"]},"prevItem":{"title":"golang\u306b\u30d7\u30ed\u30d5\u30a1\u30a4\u30e9\u3092\u4ed5\u8fbc\u3080","permalink":"/blog/2022/07/19/"},"nextItem":{"title":"MySQL\u3067UUID\u306ebulk insert\u306e\u7d50\u679c\u30ec\u30b3\u30fc\u30c9\u304c\u3069\u3046\u306b\u3082\u53d6\u5f97\u3067\u304d\u306a\u3044\u4ef6","permalink":"/blog/2022/06/10/"}},"content":"import { TwitterTimelineEmbed, TwitterTweetEmbed } from \'react-twitter-embed\';\\n\\n## react-twitter-embed\\n\\nhttps://github.com/saurabhnemade/react-twitter-embed\\n\\n```bash\\nnpm install react-twitter-embed\\n```\\n\\n## Timeline\\n\\n```html\\nimport { TwitterTimelineEmbed } from \'react-twitter-embed\';\\n\\n<TwitterTimelineEmbed\\n  sourceType={\'profile\'}\\n  screenName={\'docusaurus\'}\\n  options={{height: 400, width: 400}}\\n/>\\n```\\n\\n<TwitterTimelineEmbed\\n  sourceType={\'profile\'}\\n  screenName={\'docusaurus\'}\\n  options={{height: 400, width: 400}}\\n/>\\n\\n## Tweet\\n\\n```html\\nimport { TwitterTweetEmbed } from \'react-twitter-embed\';\\n\\n<TwitterTweetEmbed\\n  tweetId={\'941369886214778880\'}\\n/>\\n```\\n\\n<TwitterTweetEmbed\\n  tweetId={\'941369886214778880\'}\\n/>"},{"id":"/2022/06/10/","metadata":{"permalink":"/blog/2022/06/10/","source":"@site/blog/2022/06-10.md","title":"MySQL\u3067UUID\u306ebulk insert\u306e\u7d50\u679c\u30ec\u30b3\u30fc\u30c9\u304c\u3069\u3046\u306b\u3082\u53d6\u5f97\u3067\u304d\u306a\u3044\u4ef6","description":"MySQL\u306b\u304a\u3051\u308b\u633f\u5165\u7d50\u679c\u306eID(PK)\u53d6\u5f97\u306e\u96e3","date":"2022-06-10T00:00:00.000Z","formattedDate":"June 10, 2022","tags":[{"label":"tech","permalink":"/blog/tags/tech"},{"label":"database","permalink":"/blog/tags/database"},{"label":"mysql","permalink":"/blog/tags/mysql"}],"readingTime":1.65,"truncated":false,"authors":[{"name":"Stoikheia","title":"Maintainer of This Site","url":"https://github.com/stoikheia/","imageURL":"https://github.com/stoikheia.png","key":"stoikheia"}],"frontMatter":{"title":"MySQL\u3067UUID\u306ebulk insert\u306e\u7d50\u679c\u30ec\u30b3\u30fc\u30c9\u304c\u3069\u3046\u306b\u3082\u53d6\u5f97\u3067\u304d\u306a\u3044\u4ef6","authors":"stoikheia","tags":["tech","database","mysql"]},"prevItem":{"title":"docusaurus\u3067twitter\u306e\u57cb\u3081\u8fbc\u307f","permalink":"/blog/2022/06/16/"},"nextItem":{"title":"Docusourus\u3067\u6570\u5f0f\u3092\u8868\u793a\u3059\u308b\u8a2d\u5b9a","permalink":"/blog/2022/06/09/"}},"content":"## MySQL\u306b\u304a\u3051\u308b\u633f\u5165\u7d50\u679c\u306eID(PK)\u53d6\u5f97\u306e\u96e3\\n\\nMySQL\u306b\u306fPostgres\u3067\u8a00\u3046RETURNING\u53e5\u76f8\u5f53\u306e\u3082\u306e\u304c\u7121\u3044\u3053\u3068\u306f\u77e5\u3089\u308c\u3066\u3044\u308b\u3002\\n\\n\u3053\u306eRETURNING\u53e5\u3068\u306f\u3001INSERT\u306e\u7d50\u679c\u306e\u30ec\u30b3\u30fc\u30c9\u3092\u8fd4\u3059\u3082\u306e\u3002\\n\\nMySQL\u3067\u306f\u4ee3\u308f\u308a\u306bLAST_INSERTED_ID()\u3068\u3044\u3046\u95a2\u6570\u304c\u3042\u308b\u304c\u3001\u3053\u308c\u306f\u305d\u306e\u540d\u306e\u901a\u308a\u6700\u5f8c\u306b\u633f\u5165\u3055\u308c\u305f\u884c\u306eID\u3092\u8fd4\u3059\u3002\\n\\n\u305d\u306e\u540d\u306e\u901a\u308a\u3068\u8a00\u3063\u305f\u304c\u3001\u3053\u306eLAST_INSERTED_ID()\u306fbulk insert\u3092\u884c\u3063\u305f\u3068\u304d\u306b\u305d\u306e\u540d\u306e\u901a\u308a\u306b\u306f\u306a\u3089\u306a\u3044\u3002\\n\\nbulk insert\u304c\u6210\u529f\u3057\u305f\u6700\u521d\u306e\u884c\u306eID\u3092\u8fd4\u3059\u3068\u3044\u3046\u6319\u52d5\u3068\u306a\u308b\u3002\\n\\n\u3053\u308c\u306f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u3082\u66f8\u3044\u3066\u3042\u308b\u3002\uff08\u3089\u3057\u3044\uff09\\n\\nhttps://dev.mysql.com/doc/refman/5.6/ja/innodb-auto-increment-configurable.html\\n\\n## UUID\u306e\u6642\u306b\u306f\u3055\u3089\u306b\u3069\u3046\u3057\u3088\u3046\u3082\u7121\u3044\\n\\nMySQL8.0.13\u4ee5\u964d\u306eInnoDB\u3067\u306fUUID()\u95a2\u6570\u304cDEFAULT\u6307\u5b9a\u3067\u4f7f\u3048\u308b\u3002\\n\\n```sql\\nCREATE TABLE `book` (\\n   `id` binary(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID(), TRUE)),\\n   `count` int not null,\\n   PRIMARY KEY (`id`)\\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;\\n\\nINSERT INTO book (count) VALUES (1);\\n```\\n\\n\u3053\u308c\u306b\u3088\u308aINSERT\u6642\u306b\u81ea\u52d5\u7684\u306bUUID\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u308b\u3088\u3046\u306b\u306a\u3042\u308b\u306e\u3060\u304c\u3001\\n\\nPK\u306bUUID\u3092\u4f7f\u3044\u81ea\u52d5\u3067\u632f\u3089\u308c\u308b\u3088\u3046\u306b\u3057\u3088\u3046\u3068\u3059\u308b\u3068INSERT\u6642\u306b\u633f\u5165\u3057\u305f\u30ec\u30b3\u30fc\u30c9\u304c\u3069\u308c\u304b\u8a8d\u8b58\u3067\u304d\u306a\u304f\u306a\u308b\u3002\\n\\n\u3053\u308c\u306fLAST_INSERTED_ID()\u304c\u6570\u5024\u3057\u304b\u6a5f\u80fd\u3057\u306a\u3044\u305f\u3081\u3060\u3002"},{"id":"/2022/06/09/","metadata":{"permalink":"/blog/2022/06/09/","source":"@site/blog/2022/06-09.md","title":"Docusourus\u3067\u6570\u5f0f\u3092\u8868\u793a\u3059\u308b\u8a2d\u5b9a","description":"remark-math\u3068rehype-katex\u3092\u4f7f\u3046","date":"2022-06-09T00:00:00.000Z","formattedDate":"June 9, 2022","tags":[{"label":"tech","permalink":"/blog/tags/tech"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":1.01,"truncated":false,"authors":[{"name":"Stoikheia","title":"Maintainer of This Site","url":"https://github.com/stoikheia/","imageURL":"https://github.com/stoikheia.png","key":"stoikheia"}],"frontMatter":{"title":"Docusourus\u3067\u6570\u5f0f\u3092\u8868\u793a\u3059\u308b\u8a2d\u5b9a","authors":"stoikheia","tags":["tech","docusaurus"]},"prevItem":{"title":"MySQL\u3067UUID\u306ebulk insert\u306e\u7d50\u679c\u30ec\u30b3\u30fc\u30c9\u304c\u3069\u3046\u306b\u3082\u53d6\u5f97\u3067\u304d\u306a\u3044\u4ef6","permalink":"/blog/2022/06/10/"},"nextItem":{"title":"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0","permalink":"/blog/2022/06/08/"}},"content":"## remark-math\u3068rehype-katex\u3092\u4f7f\u3046\\n\\n\u3053\u3053\u3092\u53c2\u8003\u306b\u3057\u305f\\nhttps://theochu.com/docusaurus/latex/\\n\\n\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u66f2\u8005\u3067\u3001\u304b\u306a\u308a\u53e4\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u52d5\u304b\u3059\u3053\u3068\u306b\u306a\u3063\u305f\u3002\\n```\\n  \\"rehype-katex\\": \\"^4.0.0\\",\\n  \\"remark-math\\": \\"^3.0.1\\",\\n```\\n\\n\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f7f\u3046\u5834\u5408\u3001\\n\\ndocusaurus\u306epackage.json\u306e\u8a2d\u5b9a\u304cmodule:\'commonJs\'\u306b\u5bfe\u3057\u3066\u3001remark-math\u306e\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306fES\u30e2\u30b8\u30e5\u30fc\u30eb\u306a\u306e\u3067\u975e\u540c\u671f\u8aad\u307f\u8fbc\u307f\u304c\u5fc5\u8981\u3060\u3063\u305f\u3002\\n\\n\u3055\u3089\u306b\u3001\u305d\u308c\u3067\u578b\u6ce8\u91c8\u3068\u30e2\u30b8\u30e5\u30fc\u30eb\u8aad\u307f\u8fbc\u307f\u3092\u89e3\u6c7a\u4e0b\u306b\u3082\u304b\u304b\u308f\u3089\u305a\u52d5\u4f5c\u3057\u306a\u304b\u3063\u305f\u3002\\n\\n\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8\u3092\u30d8\u30c3\u30c0\u306b\u52a0\u3048\u308b\u8a2d\u5b9a\u3082\u5fc5\u8981\u3060\u3063\u305f\u3002\\n(\u4e0a\u8a18\u30ea\u30f3\u30af\u53c2\u7167)\\n\\n### \u7d50\u679c\\n\\n\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8868\u793a\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u305f\u3002\\n\\n```\\nLift($L$) can be determined by Lift Coefficient ($C_L$) like the following\\nequation.\\n\\n$$\\nL = \\\\frac{1}{2} \\\\rho v^2 S C_L\\n$$\\n```\\n\\nLift($L$) can be determined by Lift Coefficient ($C_L$) like the following\\nequation.\\n\\n$$\\nL = \\\\frac{1}{2} \\\\rho v^2 S C_L\\n$$"},{"id":"/2022/06/08/","metadata":{"permalink":"/blog/2022/06/08/","source":"@site/blog/2022/06-08.md","title":"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0","description":"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0","date":"2022-06-08T00:00:00.000Z","formattedDate":"June 8, 2022","tags":[{"label":"tech","permalink":"/blog/tags/tech"}],"readingTime":1.77,"truncated":false,"authors":[{"name":"Stoikheia","title":"Maintainer of This Site","url":"https://github.com/stoikheia/","imageURL":"https://github.com/stoikheia.png","key":"stoikheia"}],"frontMatter":{"title":"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0","authors":"stoikheia","tags":["tech"]},"prevItem":{"title":"Docusourus\u3067\u6570\u5f0f\u3092\u8868\u793a\u3059\u308b\u8a2d\u5b9a","permalink":"/blog/2022/06/09/"}},"content":"## \u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\\n\\nISUCON\u672c\u6279\u5224\u306e\u30c4\u30a4\u30fc\u30c8\u304b\u3089\u3059\u3053\u3057\u8abf\u3079\u305f\u3002\\n\\ntop\u30b3\u30de\u30f3\u30c9\u306f\u5b9f\u969b\u306e\u4f7f\u7528\u7387\u3092\u8868\u3055\u306a\u3044\u3068\u3044\u3046\u3082\u306e\u3002\\n\u4ee5\u4e0b\u306e\u30ea\u30f3\u30af\u3092\u53c2\u8003\u306b\u8cbc\u3063\u3066\u3042\u3063\u305f\u3002\\n\\n[CPU\u4f7f\u7528\u7387\u306f\u9593\u9055\u3063\u3066\u3044\u308b](https://yakst.com/ja/posts/4575)\\n\\n- pref\u30b3\u30de\u30f3\u30c9\u3067\u30b9\u30c8\u30fc\u30eb\u7387\u3092\u898b\u308b\u3068\u3044\u3044\u3089\u3057\u3044\\n- tiptop\u304cIPC\u3092\u51fa\u529b\u3057\u3066\u304f\u308c\u308b\u306e\u3067top\u306e\u4ee3\u308f\u308a\u306b\u4f7f\u3046\u3068\u3088\u3044\u3002\\n\\n\u8a18\u4e8b\u306b\u306f\u305d\u3082\u305d\u3082\u30b9\u30c8\u30fc\u30eb\u7387\u3092\u8003\u616e\u3057\u306a\u3044\u3068\u3044\u3046\u306e\u306f\u7121\u3044\u306e\u3067\u306f\uff1f\u3068\u3044\u3046\u8a18\u4e8b\u306e\u524d\u63d0\u3068\u3057\u3066\u3044\u308b\u30ec\u30d9\u30eb\u306e\u4f4e\u3055\u306b\u5bfe\u3059\u308b\u6307\u6458\u3082\u3042\u3063\u305f\u3002\\n\\n\u79c1\u898b\u3068\u3057\u3066\u306f\u305f\u3060\u3061\u306btop\u304c\u4e0d\u8981\u3068\u3044\u3046\u8003\u3048\u306b\u306a\u308b\u3082\u306e\u3067\u306f\u306a\u3044\u3068\u601d\u3063\u305f\u3002\\n\\n### tiptop\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u307f\u308b\\n\\n\u74b0\u5883\uff1aubuntu\\n\\n```bash\\n$ sudo apt-get install -y tiptop\\n```\\n\\n\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306f\u6210\u529f\u3057\u305f\u304c\u5b9f\u884c\u3057\u3088\u3046\u3068\u3059\u308b\u3068\\n\\n```bash\\n$ sudo tiptop\\nsyscall: Operation not permitted\\nCould not perform syscall.\\nDon\'t know why...\\n```\\n\\nWSL\u4e0a\u3067\u306f\u3067\u304d\u306a\u3044\uff1f\\n\\n[Docker\u304c\u63a1\u7528\u3059\u308b\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u6a5f\u69cb\u300cSeccomp\u300d\u3068\u306f\u4f55\u304b\uff1f ](https://www.creationline.com/lab/46861)\\n\\nseccomp\u304c\u539f\u56e0\u304b\uff1f\\n\\n```bash\\n$ docker system info\\n...\\n Security Options:\\n  seccomp\\n   Profile: default\\n```\\n\\n\u5c11\u3057\u89e6\u3063\u3066\u6c17\u3065\u3044\u305f\u304c\u3001\\n\u73fe\u5728\u306e\u74b0\u5883\u306eWSL2\u306fDocker\u4e0a\u3067\u306f\u306a\u304f\u9006\u306bDocker\u304cWSL2\u4e0a\u306b\u3042\u308b\u306e\u3067\u3053\u306e\u8a2d\u5b9a\u3067\u306f\u306a\u3044\u3002\\n\\n\\n**\u89e3\u6c7a\u305b\u305a\u3002**\\n\\n\\n#### htop\\n\\n\u7528\u9014\u304c\u82e5\u5e72\u7570\u306a\u308b\u306e\u3067\u4ee3\u308f\u308a\u3067\u306f\u306a\u3044\u304c\u3001\u3053\u306e\u624b\u306e\u78ba\u8a8d\u306b\u306fhtop\u3092\u4f7f\u3063\u3066\u3044\u304f\u3002"}]}')}}]);