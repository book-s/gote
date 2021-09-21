module.exports = {
  lang: 'cn-ZH',
  title: 'Develop Note',
  description: 'Develop Notes',
  base:'/',
  head: [],
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
    { text: 'Golang基础',
      children: [
        { text: '第一章 环境配置',  
          children: [
            { text: '1-1 MacOSXVScodeGolang', link: '/go/vscode/index' },
          ]
        },
        { text: '第二章 基础语法',  
          children: [
            { text: '2-1 变量定义', link: '/go/index' },
            { text: '2-2 内建变量类型', link: '/go/index' },
            { text: '2-3 常量与枚举', link: '/go/index' },
            { text: '2-4 条件语句', link: '/go/index' },
            { text: '2-5 循环', link: '/go/index' },
            { text: '2-6 函数', link: '/go/index' },
            { text: '2-7 指针', link: '/go/index' },
            { text: 'Variable', link: '/go/basics/variable' },
            { text: 'Datatype', link: '/go/basics/datatype' },
          ]
        },
        { text: '第三章 内建容器',  
          children: [
            { text: '3-1 数组', link: '/go/gin/index' },
            { text: '3-2 切片的概念', link: '/go/gin/index' },
            { text: '3-3 切片的操作', link: '/go/gin/index' },
            { text: '3-4 Map', link: '/go/gin/index' },
            { text: '3-5 Map例题', link: '/go/gin/index' },
            { text: '3-6 字符和字符串处理', link: '/go/gin/index' },
          ]
        },
        { text: '第四章 面向“对象”',  
          children: [
            { text: '4-1 结构体和方法', link: '/go/gin/index' },
            { text: '4-2 包和封装', link: '/go/gin/index' },
            { text: '4-3 扩展已有类型', link: '/go/gin/index' },
            { text: '4-4 GOPATH以及目录结构', link: '/go/gin/index' },
          ]
        },
        { text: '第五章 面向接口',  
          children: [
            { text: '5-1 duck typing的概念', link: '/go/gin/index' },
            { text: '5-2 接口的定义和实现', link: '/go/gin/index' },
            { text: '5-3 接口的值类型', link: '/go/gin/index' },
            { text: '5-4 接口的组合', link: '/go/gin/index' },
            { text: '5-5 常用系统接口', link: '/go/gin/index' },
          ]
        },
        { text: '第六章 函数式编程',  
          children: [
            { text: '6-1 函数式编程', link: '/go/gin/index' },
            { text: '6-2 函数式编程例一', link: '/go/gin/index' },
            { text: '6-3 函数式编程例二', link: '/go/gin/index' },
          ]
        },
        { text: '第七章 错误处理和资源管理',  
          children: [
            { text: '7-1 defer调用', link: '/go/gin/index' },
            { text: '7-2 错误处理概念', link: '/go/gin/index' },
            { text: '7-3 服务器统一出错处理', link: '/go/gin/index' },
            { text: '7-4 panic和recover', link: '/go/gin/index' },
            { text: '7-5 服务器统一出错处理2', link: '/go/gin/index' },
          ]
        },
        { text: '第八章 测试与性能调优',  
          children: [
            { text: '8-1 测试', link: '/go/gin/index' },
            { text: '8-2 代码覆盖率和性能测试', link: '/go/gin/index' },
            { text: '8-3 使用pprof进行性能调优', link: '/go/gin/index' },
            { text: '8-4 测试http服务器(上)', link: '/go/gin/index' },
            { text: '8-5 测试http服务器(下)', link: '/go/gin/index' },
            { text: '8-6 生成文档和示例代码', link: '/go/gin/index' },
            { text: '8-7 测试总结', link: '/go/gin/index' },
          ]
        },
        { text: '第九章 Goroutine',  
          children: [
            { text: '9-1 goroutine', link: '/go/gin/index' },
            { text: '9-2 go语言的调度器', link: '/go/gin/index' },
          ]
        },
        { text: '第十章 Channel',  
          children: [
            { text: '10-1 channel', link: '/go/gin/index' },
            { text: '10-2 使用Channel等待任务结束', link: '/go/gin/index' },
            { text: '10-3 使用Channel进行树的遍历', link: '/go/gin/index' },
            { text: '10-4 用select进行调度', link: '/go/gin/index' },
            { text: '10-5 传统同步机制', link: '/go/gin/index' },
          ]
        },
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