import { defineConfig } from 'vitepress';

import nav from './theme/configs/nav';
import sidebar from './theme/configs/sidebar';
import socialLinks from './theme/configs/socialLinks';
import search from './theme/configs/search';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-Hant',
    title: "Opshell's Blog",
    description: "A blog to share various thoughts,technologies,front-end develop, and miscellaneous topics to engage more with the world.",
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
        nav,

        sidebar,

        aside: true,

        socialLinks,

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
        search,
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
