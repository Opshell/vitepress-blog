<script setup lang="ts">
    import DefaultTheme from 'vitepress/theme';
    import { useData } from 'vitepress';
    import { nextTick, provide } from 'vue';

    const { Layout } = DefaultTheme

    const { frontmatter, isDark } = useData();
</script>

<template>
    <Layout>
        <template
            v-if="(frontmatter.layout === 'blog'
                || frontmatter.layout === 'doc'
                || frontmatter.layout === 'article'
                || frontmatter.layout === 'layoutest')" #doc-before
        >
            <span class="page-info">✍️{{ frontmatter.author }}</span>
            <span class="page-info">🕐{{ frontmatter.date }}</span>
            <span>
                🔗
                <span v-for="item in frontmatter.tags" :key="item" class="page-info">{{ item }}</span>
            </span>
        </template>

        <template
            v-if="(frontmatter.layout !== 'home')"
            #aside-ads-before
        >
            <div>
                sergserg
            </div>
        </template>
    </Layout>
</template>

<style lang="scss">
    .page-info{
        margin-right: 10px;
        color: #7f7f7f;
        font-size: 13px;
    }
</style>
