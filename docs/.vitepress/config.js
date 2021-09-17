module.exports = {
  lang: 'cn-ZH',
  title: 'Develop Note',
  description: 'Develop Notes',
  base:'/',
  // 代码块中的行高亮
  markdown: {
    lineNumbers: true,
  },
  //配置侧边目录和导航
  themeConfig: {
    // repo: 'vuejs/vitepress',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    // 导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Golang', link: '/go/index'},
      { text: 'LargeFrontEnd',link: '/frontend/vue'},
      { text: 'DevelopTool', link: '/developtool/npm' },
      
      { 
        text: 'Tools',
        items: [
          { text: '前后端开发', link: 'https://book-s.github.io/vuepres/' },
          { text: 'Golang教程', link: 'https://www.liwenzhou.com/' },
          { text: 'VitePress', link: 'https://vitepress.vuejs.org/' },
          
        ]
      },
    ],

    // 侧边栏
    sidebar: {
      '/go/': getGoSidebar(),
      '/frontend/': getFrontEndSidebar(),
      '/developtool/': getDeveloptoolSidebar(),
    }
  }
}


function getGoSidebar() {
  return [
    {
      text: 'Golang基础',
      children: [
        { text: 'MacOSXVScodeGolang', link: '/go/vscode/index' },
        { text: 'Basics', link: '/go/index' },
        { text: 'Variable', link: '/go/basics/variable' },
        { text: 'Datatype', link: '/go/basics/datatype' },
      ]
    },
    {
      text: 'Web框架',
      children: [
        { text: 'Gofiber',  
          children: [
            { text: 'Fiber', link: '/go/gofiber/index' },
          ]
        },
        { text: 'Gin',  
          children: [
            { text: 'Gin', link: '/go/gin/index' },
          ]
        },
      ]
    },
    {
      text: 'Standardlibrary',
      children: [
        { text: 'Fmt', link: '/go/standardlibrary/fmt' },
      ]
    },
  ]
}

function getDeveloptoolSidebar() {
  return [
    {
      text: '开发工具相关配置',
      children: [
        { text: 'MacOSX_NPM配置', link: '/developtool/npm' },
        { text: 'Git教程', link: '/developtool/git' },
      ]
    },
  ]
}

function getFrontEndSidebar() {
  return [
    {
      text: 'LargeFrontEnd',
      children: [
        { text: 'Vue3.0', link: '/frontend/vue' },
        { text: 'Vite', link: '/frontend/vite' },
      ]
    },
  ]
}