<script setup lang="ts">
    import DefaultTheme from 'vitepress/theme';
    import { useData } from 'vitepress';

    const { Layout } = DefaultTheme;

    const { frontmatter } = useData();

    console.log('DefaultTheme：', DefaultTheme);
    console.log('frontmatter：', frontmatter);
</script>

<template>
    <div>
        <div>Layout Test {{ frontmatter.title }}</div>

        <div>
            <span class="page-info">✍️{{ frontmatter.author }}</span>
            <span class="page-info">🕐{{ frontmatter.date }}</span>
            <span>
                🔗
                <span v-for="item in frontmatter.tags" :key="item" class="page-info">{{ item }}</span>
            </span>
        </div>

        <section>
            <Content />
        </section>
    </div>
</template>

<style lang="scss">

</style>