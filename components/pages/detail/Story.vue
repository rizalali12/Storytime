<script lang="ts" setup>
const route = useRoute();
</script>

<template>
    <div class="header">
        <UiStoryHeader :title="route.params.idStory" variant="no-category" />
        <UiDetailStory />
        <PagesHomepageHighlight
            variant="image"
            title="Simillar Story"
            variant_title="primary"
            genre="story.genre"
            header_title="true"
        />
    </div>
</template>

<style lang="scss" scoped>
.header {
    margin: 0;
}
</style>
