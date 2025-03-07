<script lang="ts" setup>
const useAuth = useAuthStore();
</script>

<template>
    <Appheader />

    <LayoutHeading />
    {{ useAuth.getToken() }}
    <PagesHomepageLatestStory />
    <PagesHighlight
        title="Comedy"
        variant="image_large"
        url="/story?category=comedy"
        variantExplore="explore"
        header_title="true"
        variant_title="primary"
    />
    <PagesHighlight
        title="Romance"
        variant="image"
        url="/story?category=romance"
        variantExplore="explore"
        header_title="true"
        variant_title="primary"
    />
    <PagesHighlight
        title="Horror"
        variant="image_large"
        url="story?category=horror"
        variantExplore="explore"
        header_title="true"
        variant_title="primary"
    />
    <PagesHomepageMoreCategories />

    <AppFooter />
</template>

<style lang="scss" scoped></style>
