import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "全部",
    icon: "newspaper",
    link: "/article/",
  },
  {
    text: "搜集",
    icon: "grip",
    link: "/collection/",
  },
  {
    text: "日常",
    icon: "fire",
    link: "/popular/",
  },
  {
    text: "技术",
    icon: "compass-drafting",
    link: "/technical/",
  },
  {
    text: "一键脚本",
    icon: "computer-mouse",
    link: "/one-click/",
  },
  {
    text: "其他",
    icon: "toolbox",
    children:[{
      text:"IT工具箱",
      link:"https://tools.suidx.com",
    },{
      text:"DrawIO",
      link:"https://drawio.suidx.com/?lang=zh",
    },{
      text:"订阅转换",
      link:"https://api.suidx.com",
    }]
  }
]);
