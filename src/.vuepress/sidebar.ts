import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "星标",
      icon: "star",
      prefix: "star/",
      link: "star/",
      children: "structure",
    },
    "intro",
    {
      text:"搜集",
      icon:"grip",
      prefix: "collection/",
      link: "collection/",
      children: "structure",
    },
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "文章",
    //   icon: "book",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
