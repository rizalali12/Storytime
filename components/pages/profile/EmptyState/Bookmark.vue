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
        <UiButton title="My Story" variant="no-border" />
        <UiButton title="Bookmark" variant="no-border" active />
        <div class="content">
            <UiWriteStory />
            <div class="content__story">
                <h1 class="content__title">No Stories Yet</h1>
                <p class="content__paragraf">
                    You haven't saved any bookmarks yet. Explore and bookmark
                    your top workouts!
                </p>
                <img
                    src="@/assets/icons/undraw_save_to_bookmarks_re_8ajf 1.png"
                    alt=""
                    class="content__image"
                />
            </div>
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
    // align-items: center;
    // gap: 300px;
    justify-content: space-between;
    padding-right: 180px;

    &__story {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    &__title {
        font-family: "Playfair Display";
        font-weight: 600;
        font-size: 44px;
        line-height: 58px;
        text-align: center;
        color: #222222;
        padding-bottom: 30px;
    }

    &__paragraf {
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        color: #222222;
        padding-bottom: 60px;
        margin: 0;
    }

    &__image {
    }
}
</style>
