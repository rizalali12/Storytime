<script lang="ts" setup>
import { ref } from "vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Import required modules
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// State untuk Swiper Thumbs
const thumbsSwiper = ref<any>(null);

// Fungsi untuk mengatur thumbs swiper
const setThumbsSwiper = (swiperInstance: any) => {
    thumbsSwiper.value = swiperInstance;
};

// Modules yang digunakan oleh Swiper
const modules = [FreeMode, Navigation, Thumbs];
</script>

<template>
    <div class="story__image">
        <swiper
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="[FreeMode, Navigation, Thumbs]"
            class="main-swiper"
        >
            <swiper-slide>
                <img
                    src="@/assets/icons/poster.png"
                    alt="Gambar 1"
                    class="main-image"
                    data-bs-toggle="modal"
                    data-bs-target="#detailStory"
                />
            </swiper-slide>
            <swiper-slide>
                <img
                    src="@/assets/icons/profile_picture.png"
                    alt="Thumbnail 2"
                    class="main-image"
                />
            </swiper-slide>
        </swiper>

        <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="30"
            :slidesPerView="3"
            :freeMode="true"
            :centerInsufficientSlides="false"
            :watchSlidesProgress="true"
            :modules="[FreeMode, Navigation, Thumbs]"
            class="thumb-swiper"
        >
            <swiper-slide>
                <img
                    src="@/assets/icons/poster.png"
                    alt="Thumbnail 1"
                    class="thumb-image"
                />
            </swiper-slide>
            <swiper-slide>
                <img
                    src="@/assets/icons/profile_picture.png"
                    alt="Thumbnail 2"
                    class="thumb-image"
                />
            </swiper-slide>
        </swiper>
    </div>
</template>

<style lang="scss" scoped>
.main-swiper {
    width: 100%;
    margin-bottom: 1rem;
}

.story__image {
    width: 100%;
    max-width: 550px;
    margin: 0 auto;
}

.main-image {
    // width: 100%;
    width: 547px;
    height: 600px;
    // max-height: 400px;
    object-fit: cover;
    border-radius: 8px;
    background-color: red;
}

.thumb-swiper {
    width: 100%;

    .swiper-slide {
        opacity: 0.5;
        cursor: pointer;
    }
    .swiper-slide-thumb-active {
        opacity: 1;
    }
}

.thumb-image {
    width: 100%;
    height: 140px;
    // object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.3s ease;
}

.mySwiper :deep(.swiper-button-next),
:deep(.swiper-button-prev) {
    color: white !important;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
    font-size: 50px;
    font-weight: 800;
    color: white !important;
}
</style>
