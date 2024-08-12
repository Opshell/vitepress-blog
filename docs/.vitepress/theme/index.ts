// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ArticleLayout from '../../components/layout/article.vue';
import BlogLayout from '../../components/layout/blog.vue';
import Layoutest from '../../components/layout/layoutest.vue';

// import './scss/style.scss'
import 'virtual:svg-icons-register';

console.log(ArticleLayout);

export default {
    ...DefaultTheme,
    // Layout: ArticleLayout,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
    },
    enhanceApp({ app, router, siteData }) {
        app.component('blog', ArticleLayout);
        app.component('layoutest', Layoutest);
        // app.component('blog', BlogLayout);
    }
} satisfies Theme
