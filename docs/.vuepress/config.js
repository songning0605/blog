const { getChildren } = require('../../utils')

console.log(getChildren());

module.exports = {
  title: '前端进阶',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/x-icon' }] // 在head中插入标签
  ],
  base: '/blog/',
  themeConfig: {
    logo: '/favicon.png',
    nav: [
      {
        text: '测试下拉',
        ariaLabel: 'Language Menu',
        items: [
          { text: '我是下拉', link: '/' },
        ]
      },
      { text: 'Home', link: '/' },
      { text: 'foo', link: '/foo/' }, // 最后的斜杠不能少
      { text: 'bar', link: '/bar/' },
      { text: 'GitHub', link: 'https://github.com/songning0605/blog/issues' },
    ],
    sidebar: getChildren()
  }
}