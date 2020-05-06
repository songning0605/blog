module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/blog/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: 'Group 1',   // 必要的
        path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
      {
        title:'前端1',
        collapsable: false,
        children:[
          '/frontEnd/测试1',
          '/frontEnd/测试2',
        ]
      },
      {
        title:'前端2',
        collapsable: false,
        children:[
          '/frontEnd/测试1',
          '/frontEnd/测试2',
        ]
      },
    ]
  }
}