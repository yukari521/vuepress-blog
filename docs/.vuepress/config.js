module.exports = {
    title: 'Ivan Blog',

    serviceWorker: true,
    head: [
        ['link', { rel: 'icon', href: '/img/logo.jpg' }]
    ],
    markdown: {
      // 显示代码行号
      lineNumbers: false
    },
    themeConfig: {
        logo:"/img/logo.jpg",
        nav: [
          { text: '首页', link: '/timeLine/' },
          { text: '技术', link:'/technology/'},
          { text: '生活',link: '/life/' },
          { text: '思考',link: '/ponder/'},
          { text: '标签库', link: '/tags/' },
          { text: '关于', link:'/about/'},
          { text: '留言板', link:'/massage/'},
          { text: '链接',
            items: [
                {text:'博客',link: 'https://yukari521.github.io/' },
                {text:'GitHub',link: 'https://github.com/yukari521' },
                {text:'码云',link: 'https://gitee.com/yifan521' },
            ]
          }
        ],
        lastUpdated: 'Last Updated', 
      }
  }