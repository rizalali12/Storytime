<script lang="ts" setup>
definePageMeta({
    middleware: "auth",
});
</script>

<template>
    <Appheader />

    <PagesProfileStoryEdit />

    <AppFooter />
</template>

<style></style>
