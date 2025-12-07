import { defineUserConfig } from "vuepress";
import panguPlugin from "markdown-it-pangu";
import theme from "./theme.js";

export default defineUserConfig({
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Morpheus",
      description: "Morpheus 的博客",
    },
  },
  theme,
  head: [
    // ...

    // 导入字体链接
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200..900&family=ZCOOL+KuaiLe&display=swap",
        rel: "stylesheet",
      },
    ],
    // 导入看版娘
    [
      "script",
      {
        src: "https://fastly.jsdelivr.net/npm/live2d-widgets@1.0.0/dist/autoload.js",
      },
    ],
  ],
  // 中英文自动空格
  extendsMarkdown: (md) => {
    md.use(panguPlugin);
  },
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
