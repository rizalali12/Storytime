<script lang="ts" setup>
import { UiButton } from "#components";

// const myStory = ref(false);

// const toggleButton = () => {
//     toggleButton.value = !toggleButton.value;
// };

// toggleButton();

const useToast = useToastStore();
</script>

<template v-if="myStory === true">
    <UiProfileHeader />
    <!-- <UiToast title="Successfully post a story" /> -->
    <div class="container">
        <UiButton title="My Story" variant="no-border" active />
        <UiButton title="Bookmark" variant="no-border" url="/bookmark" />
        <div class="content">
            <UiWriteStory />
            <PagesHomepageHighlight
                variant="image-myStory"
                genre="story.genre"
                class="homepage"
                variantAuthor="no-author"
                variantIcon="my-story"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    padding-top: 60px;
}

.homepage {
    margin: 0;
}
.content {
    display: flex;

    @media (max-width: 930px) {
        flex-direction: column;
    }
}
</style>
