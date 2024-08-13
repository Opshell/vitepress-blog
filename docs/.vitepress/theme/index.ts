// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import OpshellLayout from '../theme/OpshellLayout.vue';

import BlogLayout from '../../components/layout/blog.vue';
import Layoutest from '../../components/layout/layoutest.vue';

import 'virtual:svg-icons-register';

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
        app.component('layoutest', Layoutest);
        // app.component('blog', BlogLayout);
    }
} satisfies Theme
