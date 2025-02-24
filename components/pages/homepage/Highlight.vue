<script lang="ts" setup>
import type { PropType } from "vue";

const stories = ref<any>([]);

const props = defineProps({
    title: {
        type: String,
    },
    variant: {
        type: String as PropType<"image" | "image_large" | "image-myStory">,
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
    variant_title: {
        type: String,
        default: null,
    },
    genre: {
        type: String,
        default: null,
    },
    header_title: {
        type: String,
        default: null,
    },
    variantAuthor: {
        type: String as PropType<"author" | "no-author">,
        default: "author",
    },
    variantIcon: {
        type: String as PropType<"primary" | "secondary" | "my-story">,
        default: "primary",
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
            title: "Gemma",
            url: "/story/testing",
        },
    ];
};

fetchData();
</script>

<template>
    <div class="container">
        <div class="wrapper" v-if="header_title === 'true'">
            <UiSectionHeader
                :title="title"
                :url="url"
                :variant="variantExplore"
                :variantTitle="variant_title"
            />
        </div>
        <div class="story" v-if="variant === 'image'">
            <div class="row">
                <div class="col-12 col-md-6 col-xl-4">
                    <div class="story__normal">
                        <UiCardStory
                            :story="stories[0]"
                            :genre="genre"
                            :hasAuthor="variantAuthor"
                            :variantIcon="variantIcon"
                        />
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4">
                    <div class="story__normal">
                        <UiCardStory
                            :story="stories[0]"
                            :genre="genre"
                            :hasAuthor="variantAuthor"
                            :variantIcon="variantIcon"
                        />
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4">
                    <div class="story__normal">
                        <UiCardStory
                            :story="stories[0]"
                            :genre="genre"
                            :hasAuthor="variantAuthor"
                            :variantIcon="variantIcon"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="story-profile" v-if="variant === 'image-myStory'">
            <div class="row">
                <div class="col-12 col-md-6 col-xl-6 pb-3">
                    <div class="story__normal">
                        <UiCardStory
                            :story="stories[0]"
                            :genre="genre"
                            :hasAuthor="variantAuthor"
                            :variantIcon="variantIcon"
                        />
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-6 pb-3">
                    <div class="story__normal">
                        <UiCardStory
                            :story="stories[0]"
                            :genre="genre"
                            :hasAuthor="variantAuthor"
                            :variantIcon="variantIcon"
                        />
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-6 pb-3">
                    <div class="story__normal">
                        <UiCardStory
                            :story="stories[0]"
                            :genre="genre"
                            :hasAuthor="variantAuthor"
                            :variantIcon="variantIcon"
                        />
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-6 pb-3">
                    <div class="story__normal">
                        <UiCardStory
                            :story="stories[0]"
                            :genre="genre"
                            :hasAuthor="variantAuthor"
                            :variantIcon="variantIcon"
                        />
                    </div>
                </div>
                <UiNumberPage />
            </div>
        </div>
        <div class="story" v-if="variant === 'image_large'">
            <div class="row">
                <div class="col-12 col-sm-12 col-lg-12 col-xl-8">
                    <div class="story__highlight">
                        <UiCardStory
                            :story="stories[0]"
                            :genre="genre"
                            :hasAuthor="variantAuthor"
                            :variantIcon="variantIcon"
                        />
                    </div>
                </div>
                <!-- <div class="story__wrapper-small"> -->
                <div class="col-12 col-sm-12 col-lg-12 col-xl-4">
                    <div class="story__small">
                        <UiCardStory
                            :story="stories[0]"
                            :genre="genre"
                            :hasAuthor="variantAuthor"
                            :variantIcon="variantIcon"
                        />
                        <UiCardStory
                            :story="stories[0]"
                            :genre="genre"
                            :hasAuthor="variantAuthor"
                            :variantIcon="variantIcon"
                        />
                    </div>
                </div>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    margin-top: 120px;

    @media (max-width: 767px) {
        margin-top: 70px;
    }

    @media (max-width: 567px) {
        margin-top: 40px;
    }
}

.story {
    display: flex;
    gap: 24px;
    padding-top: 20px;

    @media (max-width: 740px) {
        padding-top: 0px;
    }

    &__normal {
        // width: 33%;
        padding-top: 20px;
    }

    &__highlight {
        width: 100%;
        padding-bottom: 20px;
    }

    &__wrapper-small {
        display: flex;
        flex-direction: column;
        gap: 46px;
        margin: 0;
    }

    &__small {
        margin-top: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px;

        @media (max-width: 1200px) {
            flex-direction: row;
        }
        @media (max-width: 767px) {
            flex-direction: column;
        }
    }
}

.story-profile {
    display: flex;
    gap: 24px;
}
</style>
