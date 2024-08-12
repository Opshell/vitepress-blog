<script setup lang="ts">
    defineProps<{
        title: string
    }>();
</script>

<template>
    <section class="section-block">
        <h2 class="title">
            {{ title }}
        </h2>

        <slot />
    </section>
</template>

<style lang="scss">
    .section-block {
        @include setFlex(flex-start, stretch, 2.5rem, column);
        @include setSize(100%, auto);
        > .title {
            color: var(--vp-c-text-1);
            font-size: 1.75rem;
            line-height: 2rem;
        }
    }
</style>
