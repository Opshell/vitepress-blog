<script setup lang="ts">
    defineProps<{
        title: string
    }>();
</script>

<template>
    <section class="skill-block">
        <h2 class="title">
            {{ title }}
        </h2>

        <slot />
    </section>
</template>

<style lang="scss">
    .skill-block {
        @include setFlex(flex-start, stretch, 1.563rem, column);
        @include setSize(100%, auto);
        .title {
            color: #000;
            font-size: 1.75rem;
            line-height: 2rem;
        }
    }
</style>
