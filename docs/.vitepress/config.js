// docs/.vitepress/config.js
export default {
    title: "Starter Code",
    description: "Documentation like Angular.dev",
    themeConfig: {
      siteTitle: "📚 The Prelyst Software",
      // nav: [
      //   { text: 'Home', link: '/' },
      // ],
      sidebar: [
        {
          text: 'Introduction',
          collapsed: false,
          items: [
            { text: 'Home Page', link: '/' },
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'Dev Guide Page', link: '/guide' },
          ]
        },
        {
          text: 'Development',
          collapsed: false,
          items: [
            { text: 'OAuth 2.0 Setup', link: '/login' },
            { text: 'Dashboard Page', link: '/' },
            { text: 'Profile Page', link: '/' },
            { text: 'User Session Setup', link: '/' },
          ]
        }
      ]
    }
  }
  