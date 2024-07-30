import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-Hant',
    title: "Opshell's Blog",
    description: "A blog to share various thoughts,technologies,front-end develop, and miscellaneous topics to engage more with the world.",
    author: 'Opshell',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    rewrites: { // 我们在nav設定的連結應該要是重寫後的路徑
        'pages/(.*)': '(.*)',
    },
    // srcDir: './pages',
    themeConfig: { // https://vitepress.dev/reference/default-theme-config
        siteTitle: "Opshell's Blog",

        logo: {
            light: '/logo.jpg',
            dark: '/logo-w.jpg',
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
              dateStyle: 'medium',
              timeStyle: 'medium'
            }
        },

        externalLinkIcon: true,
        search: { // 搜索
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜尋文章",
                        buttonAriaLabel: "搜尋文章",
                    },
                    modal: {
                        noResultsText: "找不到相關內容",
                        resetButtonTitle: "清除搜尋條件",
                        footer: {
                            selectText: "選擇",
                            navigateText: "切換",
                        },
                    },
                },
            },
        },
        notFound:{ // 404
            title: 'Page Not Found ~!!',
            quote: '請檢查網址或目前頁面不開放觀看，使用下方按鈕回到首頁。',
            linkText: '回到首頁'
        },
    },
    markdown: { // markdown 特殊樣式 擴展
        // 主题选择：https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
        // 主题预览：https://vscodethemes.com/
        // 添加自定义的主题(加载主题)：https://github.com/shikijs/shiki/blob/main/docs/themes.md#loading-theme
        theme: "one-dark-pro",
        lineNumbers: true, // 显示代码行数

        container: {
            tipLabel: '提示',
            warningLabel: '警告',
            dangerLabel: '危險',
            infoLabel: '簡述',
            detailsLabel: '詳細'
        }
    },

})
