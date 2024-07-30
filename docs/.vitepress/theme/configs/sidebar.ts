
import { DefaultTheme } from 'vitepress';

export default {
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
} as DefaultTheme.Sidebar;