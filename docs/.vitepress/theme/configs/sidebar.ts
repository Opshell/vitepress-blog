
import { DefaultTheme } from 'vitepress';

export default {
    '/article/code-sea/': [
        {
            text: 'Vue',
            items: [
                { text: 'Why Vue', link: '/article/code-sea/vue/1-Why-Vue' },
                { text: 'Components', link: '/article/code-sea/vue/2-Components' }
            ]
        },
        {
            text: 'TypeScript',
            items: [
                { text: "Who's TypeScript", link: "/article/code-sea/typescript/1-Who's-TypeScript" },
                { text: 'Just Begin', link: '/article/code-sea/typescript/2-Just-Begin' }
            ]
        },
        {
            text: 'CSS',
            items: [
                { text: 'Meet Css', link: '/article/code-sea/vue/1-why-vue' },
                { text: 'Runtime API Examples', link: '/article/code-sea/vue/1-why-vue' }
            ]
        },
    ],
    '/article/life-mumurs/': [
        {
            text: 'Life Mumurs',
            items: [
                { text: 'Life is it', link: '/article-list' },
                { text: 'Runtime API Examples', link: '/api-examples' }
            ]
        }
    ],
    '/article/attempts/': [
        {
            text: 'Miscellaneous Attempts',
            items: [
                { text: 'Article List', link: '/article-list' },
                { text: 'Runtime API Examples', link: '/api-examples' }
            ]
        }
    ],
} as DefaultTheme.Sidebar;