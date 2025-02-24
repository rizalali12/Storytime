<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const stories = ref([
    {
        image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
        title: "Gemma",
        preview:
            "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality.",
        author: "Khrisvana (updated) 1",
        date: "12 March 2024",
        genre: "Comedy",
        url: "/story/testing",
    },
    {
        image: "@/assets/icons/undraw_work_from_anywhere_re_s2i6 1.png",
        title: "Harry Potter and The Goblet of Fire",
        preview:
            "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality.",
        author: "Khrisvana (updated) 1",
        date: "12 March 2024",
        genre: "Romance",
        url: "/story/testing",
    },
    {
        image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
        title: "Gemma",
        preview:
            "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality.",
        author: "Khrisvana (updated) 1",
        date: "12 March 2024",
        genre: "Action",
        url: "/story/testing",
    },
    {
        image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
        title: "Gemma",
        preview:
            "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality.",
        author: "Khrisvana (updated) 1",
        date: "12 March 2024",
        genre: "Action",
        url: "/story/testing",
    },
]);
</script>

<template>
    <div class="pembungkus">
        <div class="container">
            <div class="latestStory">
                <UiSectionHeader
                    title="Latest Story"
                    url="/story"
                    variant="explore"
                />
            </div>
            <div class="wrapper__swiper">
                <swiper
                    :modules="[FreeMode]"
                    :space-between="20"
                    :slides-per-view="1"
                    :freeMode="true"
                    :breakpoints="{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }"
                    class="swiper-container"
                >
                    <swiper-slide v-for="(story, i) in stories" :key="i">
                        <div class="story__items">
                            <UiCardStory :story="story" genre="story.genre" />
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.latestStory {
    margin-top: 160px;

    @media (max-width: 567px) {
        margin-top: 60px;
    }
}

.pembungkus {
    width: 100%;
    overflow: hidden;
}

.swiper-container {
    width: 100%;
    overflow: visible;
}

.wrapper {
    &__swiper {
        padding-top: 20px;

        @media (max-width: 740px) {
            padding-top: 0px;
        }
    }
}
</style>
