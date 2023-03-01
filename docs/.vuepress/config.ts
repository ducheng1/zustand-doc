import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  locales: {
    '/zh/': {
      lang: 'zh-CN',
      title: 'Zustand',
      description: '一个小而快的状态管理解决方案'
    },
    '/': {
      lang: 'en-US',
      title: 'Zustand',
      description: 'Bear necessities for state management'
    }
  },
  theme: defaultTheme({
    // 文档github地址
    docsRepo: 'https://github.com/ducheng1/zustand-doc',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/tree/:branch/:path',
    // github地址
    repo: 'https://github.com/pmndrs/zustand',
    repoLabel: 'Github',
    // 本地化和导航栏配置
    locales: {
      '/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        navbar: [
          {
            text: 'Home',
            link: '/'
          },
          {
            text: 'Document',
            link: '/doc/'
          }
        ]
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        notFound: ['这儿什么也没有'],
        backToHome: '回到首页',
        navbar: [
          {
            text: '首页',
            link: '/zh/'
          },
          {
            text: '文档',
            link: '/zh/doc/'
          }
        ]
      }
    }
  })
})
