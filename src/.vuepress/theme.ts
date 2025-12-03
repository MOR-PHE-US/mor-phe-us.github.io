import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import "dotenv/config";

export default hopeTheme({
  hostname: "https://suidx.com",

  author: {
    name: "Morpheus",
    url: "https://github.com/MOR-PHE-US",
  },

  // logo: "https://s3.bmp.ovh/imgs/2025/10/15/53a2dd8eec9f8f09.png",
  logo: "logo.svg",
  repo: "MOR-PHE-US/mor-phe-us.github.io",

  docsDir: "src",

  // 打印按钮
  print: false,

  // 全屏按钮
  fullscreen: false,

  // 导航栏
  navbar,
  navbarTitle: "",
  navbarLayout: {
    start: ["Brand"],
    center: ["Search"],
    end: ["Links", "Outlook", "Repo"],
  },
  // 侧边栏
  sidebar,
  // 页脚
  footer: "Morpheus",
  displayFooter: true,

  // 博客相关
  blog: {
    // description: "一个前端开发者",
    intro: "/intro.html",
    // medias: {
    //   Baidu: "https://example.com",
    //   BiliBili: "https://example.com",
    //   Bitbucket: "https://example.com",
    //   Dingding: "https://example.com",
    //   Discord: "https://example.com",
    //   Dribbble: "https://example.com",
    //   Email: "mailto:info@example.com",
    //   Evernote: "https://example.com",
    //   Facebook: "https://example.com",
    //   Flipboard: "https://example.com",
    //   Gitee: "https://example.com",
    //   GitHub: "https://example.com",
    //   Gitlab: "https://example.com",
    //   Gmail: "mailto:info@example.com",
    //   Instagram: "https://example.com",
    //   Lark: "https://example.com",
    //   Lines: "https://example.com",
    //   Linkedin: "https://example.com",
    //   Pinterest: "https://example.com",
    //   Pocket: "https://example.com",
    //   QQ: "https://example.com",
    //   Qzone: "https://example.com",
    //   Reddit: "https://example.com",
    //   Rss: "https://example.com",
    //   Steam: "https://example.com",
    //   Twitter: "https://example.com",
    //   Wechat: "https://example.com",
    //   Weibo: "https://example.com",
    //   Whatsapp: "https://example.com",
    //   Youtube: "https://example.com",
    //   Zhihu: "https://example.com",
    //   VuePressThemeHope: {
    //     icon: "https://theme-hope-assets.vuejs.press/logo.svg",
    //     link: "https://theme-hope.vuejs.press",
    //   },
    // },
  },

  // 加密配置
  encrypt: {
    config: {
      "/collection/proxyclient.html": {
        hint: "内容被加密",
        password: process.env.PASSWORD!,
      },
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    // 思维导图
    markmap: true,
    // 流程图
    flowchart: true,
    // 自定义对齐
    align: true,
    // 属性自定义支持
    attrs: false,
    // 代码选项卡支持
    codeTabs: true,
    // 选项卡支持
    tabs: true,
    // vuepress 组件支持
    component: true,
    // 支持代码演示
    demo: true,
    // 图片展示上下文
    figure: true,
    // 使 Markdown 行为与 GitHub 保持一致
    gfm: true,
    // 启用图片懒加载
    imgLazyload: true,
    // 启用图片大小
    imgSize: true,
    // 使用 <!-- @include: filename --> 导入文件
    include: true,
    // 高亮支持
    mark: true,
    // 支持Plantuml语法
    plantuml: true,
    // 添加剧透文字
    spoiler: true,
    // 创建行内 snippet，对内联标记进行样式化，包括更改标签、添加属性和修改内容
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    // 启用下角标
    sub: true,
    // 启用上角标
    sup: true,
    // 支持任务列表
    tasklist: true,

    // 取消注释它们如果你需要数学公式 TeX 支持
    math: {
      // 启用前安装 katex
      type: "katex",
      // 或者安装 mathjax-full
      // type: "mathjax",
    },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    // 搜索框
    docsearch: {
      appId: "D0EDLIVJNY",
      apiKey: "cbf220f5c48a78ce7b873c1a72975afa",
      indexName: "suidx_com_d0edlivjny_pages",
    },
    // 评论区
    comment: {
      provider: "Giscus",
      repo: "MOR-PHE-US/mor-phe-us.github.io",
      repoId: "R_kgDOQCZfEg",
      category: "Announcements",
      categoryId: "DIC_kwDOQCZfEs4Cwqs_",
    },
    components: {
      components: ["Badge", "VPCard"],
    },
    icon: {
      assets: "fontawesome-with-brands"
    },
    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
