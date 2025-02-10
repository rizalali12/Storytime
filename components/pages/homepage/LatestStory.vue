<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const stories = ref([
    {
        image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
        title: "Gemma",
        preview:
            "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality.",
        author: "Khrisvana (updated) 1",
        date: "12 March 2024",
        genre: "Comedy",
        url: "/login",
    },
    {
        image: "@/assets/icons/undraw_work_from_anywhere_re_s2i6 1.png",
        title: "Harry Potter and The Goblet of Fire",
        preview:
            "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality.",
        author: "Khrisvana (updated) 1",
        date: "12 March 2024",
        genre: "Romance",
    },
    {
        image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
        title: "Gemma",
        preview:
            "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality.",
        author: "Khrisvana (updated) 1",
        date: "12 March 2024",
        genre: "Action",
    },
    {
        image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
        title: "Gemma",
        preview:
            "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality.",
        author: "Khrisvana (updated) 1",
        date: "12 March 2024",
        genre: "Action",
    },
]);
</script>

<template>
    <div class="container">
        <div class="latestStory">
            <UiSectionHeader
                title="Latest Story"
                url="/allstory"
                variant="explore"
            />
        </div>
    </div>
    <div class="container">
        <swiper
            :modules="[Navigation, Pagination]"
            :space-between="20"
            :slides-per-view="1"
            :grabCursor="true"
            :breakpoints="{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }"
            class="swiper-container"
        >
            <swiper-slide v-for="(story, i) in stories" :key="i">
                <div class="story__items">
                    <UiCardStory :story="story" />
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<style lang="scss" scoped>
.latestStory {
    margin-top: 160px;
}

.container-latestStory {
    background-color: red;
    margin-right: 0px;
    padding-right: 0px;
}

.swiper-container {
    width: 100%;
    // overflow: visible;
}
</style>
