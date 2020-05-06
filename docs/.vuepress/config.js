module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/blog/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'External', link: 'https://google.com' },
    ],
    // sidebar: {
    //   '/': [
    //     '',        /* / */
    //     'contact', /* /contact.html */
    //     'about'    /* /about.html */
    //   ],
    // }
    sidebar: 'auto'
  }
}