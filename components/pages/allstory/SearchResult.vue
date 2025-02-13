<script lang="ts" setup>
import type { PropType } from "vue";

const stories = ref<any>([]);

const props = defineProps({
    title: {
        type: String,
    },
    variant: {
        type: String as PropType<"image" | "image_large">,
        default: "image",
    },
    variantExplore: {
        type: String as PropType<"explore" | "no_explore">,
        default: "no_explore",
    },
});

const fetchData = () => {
    stories.value = [
        {
            image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
            preview:
                "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality. It was thicker. The trees had grown taller. The ti plants shaded the green forest a sinister red. There was no doubt about it- the jungle",
            author: "Khrisvana (updated) 1",
            date: "12 March 2024",
            genre: "Comedy",
        },
    ];
};

fetchData();
</script>

<template>
    <div class="container">
        <div class="wrapper">
            <UiStoryGenreHeader title="9 result for 'star'" />
        </div>
    </div>
    <UiStoryHeader variant="no-category" title="Search Result" />
    <div class="container container-content">
        <div class="heading">
            <UiDropdownMenu />
            <UiSearchBar variant="searchbar-mini" />
        </div>
        <div class="story" v-if="variant === 'image'">
            <div class="row">
                <div class="col-12" v-for="(story, i) in stories" :key="i">
                    <!-- <pre>{{ story }}</pre> -->
                    <div class="">
                        <PagesHomepageHighlight
                            :story="story"
                            variant="image_large"
                            genre="true"
                        />
                        <PagesHomepageHighlight
                            :story="story"
                            variant="image"
                            genre="true"
                        />
                    </div>
                </div>
            </div>
        </div>
        <UiNumberPage />
    </div>
</template>

<style lang="scss" scoped>
.container {
    margin-top: 50px;
}

.wrapper {
    margin-top: 0px;
    margin-bottom: 40px;
}

.container-content {
    margin-top: 0px;
}

.heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.story {
    display: flex;
    gap: 24px;
    padding-top: 40px;

    &__highlight {
        width: 100%;
    }
}
</style>
