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
  ],
  // 排序
  SidebarSorter:["readme", "order", "title", "filename"]
});
