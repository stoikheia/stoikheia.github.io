"use strict";(self.webpackChunkSrcGithubPages=self.webpackChunkSrcGithubPages||[]).push([[477],{10:function(t){t.exports=JSON.parse('{"blogPosts":[{"id":"diary","metadata":{"permalink":"/blog/diary","source":"@site/blog/2022/06-08.md","title":"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0","description":"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0","date":"2022-06-08T00:00:00.000Z","formattedDate":"June 8, 2022","tags":[{"label":"tech","permalink":"/blog/tags/tech"}],"readingTime":1.6,"truncated":false,"authors":[{"name":"Stoikheia","title":"Maintainer of This Site","url":"https://github.com/stoikheia/","imageURL":"https://github.com/stoikheia.png","key":"stoikheia"}],"frontMatter":{"slug":"diary","title":"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0","authors":"stoikheia","tags":["tech"]}},"content":"## \u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\\n\\nISUCON\u672c\u6279\u5224\u306e\u30c4\u30a4\u30fc\u30c8\u304b\u3089\u3059\u3053\u3057\u8abf\u3079\u305f\u3002\\n\\ntop\u30b3\u30de\u30f3\u30c9\u306f\u5b9f\u969b\u306e\u4f7f\u7528\u7387\u3092\u8868\u3055\u306a\u3044\u3068\u3044\u3046\u3082\u306e\u3002\\n\u4ee5\u4e0b\u306e\u30ea\u30f3\u30af\u3092\u53c2\u8003\u306b\u8cbc\u3063\u3066\u3042\u3063\u305f\u3002\\n\\n[CPU\u4f7f\u7528\u7387\u306f\u9593\u9055\u3063\u3066\u3044\u308b](https://yakst.com/ja/posts/4575)\\n\\n- pref\u30b3\u30de\u30f3\u30c9\u3067\u30b9\u30c8\u30fc\u30eb\u7387\u3092\u898b\u308b\u3068\u3044\u3044\u3089\u3057\u3044\\n- tiptop\u304cIPC\u3092\u51fa\u529b\u3057\u3066\u304f\u308c\u308b\u306e\u3067top\u306e\u4ee3\u308f\u308a\u306b\u4f7f\u3046\u3068\u3088\u3044\u3002\\n\\n\u8a18\u4e8b\u306b\u306f\u305d\u3082\u305d\u3082\u30b9\u30c8\u30fc\u30eb\u7387\u3092\u8003\u616e\u3057\u306a\u3044\u3068\u3044\u3046\u306e\u306f\u7121\u3044\u306e\u3067\u306f\uff1f\u3068\u3044\u3046\u8a18\u4e8b\u306e\u524d\u63d0\u3068\u3057\u3066\u3044\u308b\u30ec\u30d9\u30eb\u306e\u4f4e\u3055\u306b\u5bfe\u3059\u308b\u6307\u6458\u3082\u3042\u3063\u305f\u3002\\n\\n\u79c1\u898b\u3068\u3057\u3066\u306f\u305f\u3060\u3061\u306btop\u304c\u4e0d\u8981\u3068\u3044\u3046\u8003\u3048\u306b\u306a\u308b\u3082\u306e\u3067\u306f\u306a\u3044\u3068\u601d\u3063\u305f\u3002\\n\\n### tiptop\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u307f\u308b\\n\\n\u74b0\u5883\uff1aubuntu\\n\\n```bash\\n$ sudo apt-get install -y tiptop\\n```\\n\\n\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306f\u6210\u529f\u3057\u305f\u304c\u5b9f\u884c\u3057\u3088\u3046\u3068\u3059\u308b\u3068\\n\\n```bash\\n$ sudo tiptop\\nsyscall: Operation not permitted\\nCould not perform syscall.\\nDon\'t know why...\\n```\\n\\nWSL\u4e0a\u3067\u306f\u3067\u304d\u306a\u3044\uff1f\\n\\n[Docker\u304c\u63a1\u7528\u3059\u308b\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u6a5f\u69cb\u300cSeccomp\u300d\u3068\u306f\u4f55\u304b\uff1f ](https://www.creationline.com/lab/46861)\\n\\nseccomp\u304c\u539f\u56e0\u304b\uff1f\\n\\n```bash\\n$ docker system info\\n...\\n Security Options:\\n  seccomp\\n   Profile: default\\n```\\n\\n\u5c11\u3057\u89e6\u3063\u3066\u6c17\u3065\u3044\u305f\u304c\u3001\\n\u73fe\u5728\u306e\u74b0\u5883\u306eWSL2\u306fDocker\u4e0a\u3067\u306f\u306a\u304f\u9006\u306bDocker\u304cWSL2\u4e0a\u306b\u3042\u308b\u306e\u3067\u3053\u306e\u8a2d\u5b9a\u3067\u306f\u306a\u3044\u3002\\n\\n\\n**\u89e3\u6c7a\u305b\u305a\u3002**"}]}')}}]);