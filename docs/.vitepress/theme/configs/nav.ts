
import { DefaultTheme } from 'vitepress';

export default [
    {
        text: 'About Ops',
        link: '/pages/about-ops'
    },
    {
        text: 'Article',
        items: [
            {
                text: "Code Sea",
                link: '/pages/article/code-sea/list'
            },
            {
                text: "Life's Mumurs",
                link: '/pages/article/life-mumurs/list'
            },
            {
                text: "Miscellaneous Attempts",
                link: '/pages/article/attempts/list'
            },
        ]
    },
    {
        text: 'Resume',
        link: '/pages/resume'
    }
] as DefaultTheme.NavItem[];