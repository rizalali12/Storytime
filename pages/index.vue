<script></script>

<template>
    <Appheader />

    <LayoutHeading />
    <PagesHomepageLatestStory />
    <PagesHomepageHighlight
        title="Comedy"
        variant="image_large"
        url="/story?category=comedy"
        variantExplore="explore"
        header_title="true"
        variant_title="primary"
    />
    <PagesHomepageHighlight
        title="Romance"
        variant="image"
        url="/story?category=romance"
        variantExplore="explore"
        header_title="true"
        variant_title="primary"
    />
    <PagesHomepageHighlight
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
