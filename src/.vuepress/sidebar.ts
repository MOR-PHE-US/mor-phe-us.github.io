import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // 介绍
  "/": [
    {
      text: "全部",
      icon: "newspaper",
      prefix: "article/",
      link: "article/",
      children: "structure",
    },
    "intro",
  ],
  // 搜集
  "/collection/": [
    {
      text: "搜集",
      icon: "grip",
      link: "collection/",
      children: "structure",
    },
  ],
  // 常用
  "/popular/": [
    {
      text: "日常",
      icon: "fire",
      link: "popular/",
      children: "structure",
    },
  ],
  // 技术
  "/technical/": [
    {
      text: "技术",
      icon: "compass-drafting",
      link: "technical/",
      children: "structure",
    },
  ],
  // 一键
  "/one-click/": [
    {
      text: "一键脚本和工具",
      icon: "computer-mouse",
      link: "one-click/",
      children: "structure",
    },
  ],
  // 排序
  SidebarSorter: ["readme", "order", "title", "filename"],
});
