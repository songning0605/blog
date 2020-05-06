module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  // base: '/blog/',
  themeConfig: {
    sidebar: [
      {
        title: 'Get started',
        collapsable: false,
        children: [
          ['/', 'test'],
        ]
      },
    ]
  }
}