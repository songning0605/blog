module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/blog/',
  themeConfig: {
    nav: [
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
        'four'   /* /bar/four.html */
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