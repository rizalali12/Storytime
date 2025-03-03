<script lang="ts" setup>
import { Appheader } from "#components";
const route = useRoute();
definePageMeta({
    middleware: "auth",
});
</script>

<template>
    <Appheader />

    <PagesProfileBookmark />

    <!-- <PagesProfileEmptyStateBookmark /> -->

    <AppFooter />
</template>

<style lang="scss" scoped></style>
