<script lang="ts" setup>
import { Title } from "#components";
import { generateCodeFrame } from "vue/compiler-sfc";

const stories = ref<any>([]);

const fetchData = () => {
    stories.value = [
        {
            image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
            title: "Gemma",
            preview:
                "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality. It was thicker. The trees had grown taller. The ti plants shaded the green forest a sinister red. There was no doubt about it- the jungle",
            author: "Khrisvana (updated) 1",
            date: "12 March 2024",
            genre: "Comedy",
            url: "/login",
        },
        {
            image: "@/assets/icons/undraw_work_from_anywhere_re_s2i6 1.png",
            title: "Harry Potter and The Goblet of Fire",
            preview:
                "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality. It was thicker. The trees had grown taller. The ti plants shaded the green forest a sinister red. There was no doubt about it- the jungle",
            author: "Khrisvana (updated) 1",
            date: "12 March 2024",
            genre: "Romance",
        },
        {
            image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
            title: "Gemma",
            preview:
                "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality. It was thicker. The trees had grown taller. The ti plants shaded the green forest a sinister red. There was no doubt about it- the jungle",
            author: "Khrisvana (updated) 1",
            date: "12 March 2024",
            genre: "ction",
        },
    ];
};
fetchData();
</script>

<template>
    <div class="container">
        <div class="latestStory">
            <UiSectionHeader
                title="Latest Story"
                url="/allstory"
                variant="explore"
            />
            <div class="story">
                <template v-for="(story, i) in stories" :key="i">
                    <div class="story__items">
                        <UiCardStory :story="story" />
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.latestStory {
    margin-top: 160px;
}

.story {
    // background-color: red;
    // overflow: hidden;
    // overflow-x: auto;
    display: flex;
    gap: 29px;
    padding-top: 40px;

    &__items {
        width: 547px;
        // max-height: 500px;
    }
}
</style>
