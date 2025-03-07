<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Body, NuxtLoadingIndicator } from "#components";

const stories = ref([
    {
        image: "undraw_on_the_office_re_cxds 1.png",
        title: "Gemma",
        preview:
            "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality.",
        author: "Khrisvana (updated) 1",
        date: "12 March 2024",
        genre: "Comedy",
        url: "/story/testing",
    },
    {
        image: "undraw_on_the_office_re_cxds 1.png",
        title: "Harry Potter and The Goblet of Fire Harry Potter and The Goblet of Fire Harry Potter and The Goblet of Fire",
        preview:
            "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality.",
        author: "Khrisvana (updated) 1",
        date: "12 March 2024",
        genre: "Romance",
        url: "/story/testing",
    },
    {
        image: "undraw_on_the_office_re_cxds 1.png",
        title: "Gemma",
        preview:
            "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality.",
        author: "Khrisvana (updated) 1",
        date: "12 March 2024",
        genre: "Action",
        url: "/story/testing",
    },
    {
        image: "undraw_on_the_office_re_cxds 1.png",
        title: "Gemma",
        preview:
            "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality.",
        author: "Khrisvana (updated) 1",
        date: "12 March 2024",
        genre: "Action",
        url: "/story/testing",
    },
]);

// const cat: any = ref([]);
// const { $api } = useNuxtApp();

// const image = async () => {
//     try {
//         await $api.auth.kucing();
//     } catch (error) {
//         console.error(error);
//     }
// };

// console.log("ini adalah image :", image());

// onMounted(async () => {
//     try {
//         NuxtLoadingIndicator;
//         const response = await $fetch(
//             "https://api.thecatapi.com/v1/images/search?limit=30",
//             {
//                 method: "GET",
//             }
//         );
//         cat.value = response;
//         // const map = cat.value.map((item: any) => item.image);
//         // cat.value = map;
//         // console.log(cat.value);
//         // cat.value.push({ title: "hai" });
//     } catch (error) {
//         console.log("Error fetching data:", error);
//     }
// });
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
                            <UiCardStory
                                :story="story"
                                :genre="true"
                                variantIcon="latest-story"
                            />
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
