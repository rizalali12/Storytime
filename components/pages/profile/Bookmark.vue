<script lang="ts" setup>
import { UiButton } from "#components";

// const myStory = ref(false);

// const toggleButton = () => {
//     toggleButton.value = !toggleButton.value;
// };

// toggleButton();
</script>

<template v-if="myStory === true">
    <UiProfileHeader />
    <div class="container">
        <UiButton title="My Story" variant="no-border" url="/mystory" />
        <UiButton title="Bookmark" variant="no-border" active />
        <div class="content">
            <UiWriteStory />
            <PagesHighlight
                variant="image-myStory"
                genre="story.genre"
                class="homepage"
                variantAuthor="author"
                variantIcon="secondary"
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
