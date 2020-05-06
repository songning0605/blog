module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/blog/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'External', link: 'https://google.com' },
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