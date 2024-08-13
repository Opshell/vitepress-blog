// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'

import OpshellLayout from './layout/OpshellLayout.vue';

import BlogLayout from '../../components/layout/blog.vue';

import 'virtual:svg-icons-register';

// [-]字體引用
import '@/public/fonts/font.css';

// import './scss/style.scss'

export default {
    ...DefaultTheme,
    Layout: OpshellLayout,
    // Layout: () => {
    //     return h(DefaultTheme.Layout, null, {
    //         // https://vitepress.dev/guide/extending-default-theme#layout-slots
    //     })
    // },
    enhanceApp({ app, router, siteData }) {
        app.component('blog', BlogLayout);
    }
} satisfies Theme
