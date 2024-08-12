<script setup lang="ts">
    import DefaultTheme from 'vitepress/theme';
    import { useData } from 'vitepress';

    const { Layout } = DefaultTheme;

    const { frontmatter, page } = useData();

    console.log(frontmatter);
</script>

<template>
    <div v-if="page.isNotFound">
        Custom 404 page!
    </div>
    <Layout v-else>
        <h1>test</h1>

        <template #doc-before>
            <span class="page-info">✍️{{ frontmatter.author }}</span>
            <span class="page-info">🕐{{ frontmatter.date }}</span>
            <span>
                🔗
                <span v-for="item in frontmatter.tags" :key="item" class="page-info">{{ item }}</span>
            </span>
        </template>

        <Content />
    </Layout>
</template>

<style lang="scss">

</style>
