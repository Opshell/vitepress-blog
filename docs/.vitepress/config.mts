import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-Hant',
    title: "Opshell's Blog",
    description: "A blog to share various thoughts,technologies,front-end develop, and miscellaneous topics to engage more with the world.",

    themeConfig: { // https://vitepress.dev/reference/default-theme-config
        siteTitle: "Opshell's Blog",
        logo: {
            light: '/assets/logo.jpg',
            dark: '/assets/logo-w.jpg',
            alt: 'Opshell Logo'
        },
        nav: [
            { text: 'About Ops', link: '/pages/about-ops' },
            {
                text: 'Article',
                items: [
                    { text: "Code Sea", link: '/pages/article/code-sea/list' },
                    { text: "Life's Mumurs", link: '/pages/article/life-mumurs/list' },
                    { text: "Miscellaneous Attempts", link: '/pages/article/attempts/list' },
                ]
            },
            { text: 'Resume', link: '/pages/resume' }
        ],

        sidebar: {
            '/pages/article/code-sea/': [
                {
                    text: 'Vue',
                    items: [
                        { text: 'Why Vue', link: '/pages/article/code-sea/vue/1-Why-Vue' },
                        { text: 'Components', link: '/pages/article/code-sea/vue/2-Components' }
                    ]
                },
                {
                    text: 'TypeScript',
                    items: [
                        { text: "Who's TypeScript", link: "/pages/article/code-sea/typescript/1-Who's-TypeScript" },
                        { text: 'Just Begin', link: '/pages/article/code-sea/typescript/2-Just-Begin' }
                    ]
                },
                {
                    text: 'CSS',
                    items: [
                        { text: 'Meet Css', link: '/pages/article/code-sea/vue/1-why-vue' },
                        { text: 'Runtime API Examples', link: '/pages/article/code-sea/vue/1-why-vue' }
                    ]
                },
            ],
            '/pages/article/life-mumurs/': [
                {
                    text: 'Life Mumurs',
                    item: [
                        { text: 'Life is it', link: '/pages/article-list' },
                        { text: 'Runtime API Examples', link: '/pages/api-examples' }
                    ]
                }
            ],
            '/pages/article/attempts/': [
                {
                    text: 'Miscellaneous Attempts',
                    item: [
                        { text: 'Article List', link: '/pages/article-list' },
                        { text: 'Runtime API Examples', link: '/pages/api-examples' }
                    ]
                }
            ],
        },

        aside: true,

        socialLinks: [
            { icon: 'slack', link: 'https://github.com/vuejs/vitepress', ariaLabel: 'vitepress docs' },
            { icon: 'facebook', link: 'https://www.cakeresume.com/me/Opshell', ariaLabel: "opshell's cakeresume" },
            { icon: 'github', link: 'https://github.com/Opshell', ariaLabel: "opshell's github" },
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024-present Opshell'
        },

        lastUpdated: {
            text: 'Last Updated at',
            formatOptions: {
              dateStyle: 'full',
              timeStyle: 'medium'
            }
        },

        externalLinkIcon: true,
    }
})
