const { getChildren } = require('../../utils')
const { nav } = require('./config/nav.config')

module.exports = {
  title: '前端进阶',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/x-icon' }] // 在head中插入标签
  ],
  base: '/blog/',
  themeConfig: {
    logo: '/favicon.png',
    nav,
    sidebar: getChildren()
  }
}