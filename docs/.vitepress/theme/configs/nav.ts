
import { DefaultTheme } from 'vitepress';

export default [
    {
        text: 'About Ops',
        link: '/about-ops'
    },
    {
        text: 'Article',
        items: [
            {
                text: "Code Sea",
                link: '/article/code-sea/list'
            },
            {
                text: "Life's Mumurs",
                link: '/article/life-mumurs/list'
            },
            {
                text: "Miscellaneous Attempts",
                link: '/article/attempts/list'
            },
        ]
    },
    {
        text: 'Resume',
        link: '/resume'
    }
] as DefaultTheme.NavItem[];