<script lang="ts" setup>
definePageMeta({
    middleware: "auth",
});
</script>

<template>
    <Appheader />

    <PagesProfileStoryWrite />

    <AppFooter />
</template>

<style></style>
