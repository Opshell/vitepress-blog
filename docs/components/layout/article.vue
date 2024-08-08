<script setup lang="ts">
    import DefaultTheme from 'vitepress/theme'
    import { useData } from "vitepress";

    const { Layout } = DefaultTheme;

    const { frontmatter } = useData();
</script>

<template>
    <Layout>
        <template #doc-before>
            <span class="page-info">✍️{{ frontmatter.author }}</span>
            <span class="page-info">🕐{{ frontmatter.date }}</span>
            <span>
                🔗
                <span class="page-info" v-for="item in frontmatter.tags" :key="item">{{ item }}</span>
            </span>
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