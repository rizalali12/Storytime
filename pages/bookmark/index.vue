<script lang="ts" setup>
import { Appheader } from "#components";
const route = useRoute();
console.log(route);
</script>

<template>
    <Appheader />

    <PagesProfileBookmark />

    <!-- <PagesProfileEmptyStateBookmark /> -->

    <AppFooter />
</template>

<style lang="scss" scoped></style>
