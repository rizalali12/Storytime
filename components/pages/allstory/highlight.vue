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
    url: {
        type: String,
        default: null,
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
            <UiSectionHeader
                :title="title"
                :url="url"
                :variant="variantExplore"
            />
        </div>
        <div class="story" v-if="variant === 'image'">
            <div class="row">
                <div class="col-12 col-md-6 col-xl-4">
                    <div class="story__normal">
                        <UiCardStory :story="stories[0]" />
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4">
                    <div class="story__normal">
                        <UiCardStory :story="stories[0]" />
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4">
                    <div class="story__normal">
                        <UiCardStory :story="stories[0]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    margin-top: 70px;
}

.story {
    display: flex;
    gap: 24px;
    padding-top: 40px;

    &__normal {
        // width: 547px;
    }

    &__highlight {
        width: 100%;
    }
}
</style>
