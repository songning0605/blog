module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/blog/',
  themeConfig: {
    nav: [
      {
        text: '测试下拉',
        ariaLabel: 'Language Menu',
        items: [
          { text: '我是下拉1', link: '/' },
          { text: '我是下拉2', link: '/about' }
        ]
      },
      { text: 'Home', link: '/' },
      { text: 'foo', link: '/foo/' }, // 最后的斜杠不能少
      { text: 'bar', link: '/bar/' },
      { text: 'GitHub', link: 'https://github.com/songning0605/blog/issues' },
    ],
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four',   /* /bar/four.html */
        {
          title: 'Group 1',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 3,    // 可选的, 默认值是 1
          children: [
            '/bar/group/test',
            {
              title: 'Group 1 inner',   // 必要的
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                '/bar/group/inner/test'
              ]
            },
          ]
        },
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}