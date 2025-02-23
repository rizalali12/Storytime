<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Import required modules
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const stories = ref<any>([]);
const saveBookmark = ref(false);
const route = useRoute();

// State untuk Swiper Thumbs
const thumbsSwiper = ref<any>(null);

// Fungsi untuk mengatur thumbs swiper
const setThumbsSwiper = (swiperInstance: any) => {
    thumbsSwiper.value = swiperInstance;
};

// State untuk Swiper Thumbs Modal
const thumbsSwiperModal = ref<any>(null);

// Fungsi untuk mengatur thumbs swiper modal
const setThumbsSwiperModal = (swiperInstance: any) => {
    thumbsSwiperModal.value = swiperInstance;
};

// Modules yang digunakan oleh Swiper
const modules = [FreeMode, Navigation, Thumbs];

const toggleBookmark = () => {
    saveBookmark.value = !saveBookmark.value;
};

// onMounted(() => {
//     setActiveIndex(1);
// });

const swiperRef = ref<any>(null);

const setActiveIndex = (index: number) => {
    if (swiperRef.value?.swiper) {
        swiperRef.value.swiper.slideTo(index);
    }
};

const initialSlide = ref(-1);

const setinitialSlide = (index: number) => {
    initialSlide.value = index;
};
</script>

<template>
    <div class="container">
        <div class="heading">
            <button
                :class="saveBookmark ? 'kotak__icon-black' : 'kotak__icon'"
                @click="toggleBookmark"
                class="bookmark"
            >
                <icon
                    :name="
                        saveBookmark
                            ? 'material-symbols:bookmark-check-sharp'
                            : 'material-symbols:bookmark-add-outline-rounded'
                    "
                    class="kotak__icon-logo"
                ></icon>
            </button>
            <div class="heading__content">
                <p class="heading__date">15 May 2023</p>
                <h1 class="heading__title">{{ route.params.idStory }}</h1>
                <div class="heading__author">
                    <img
                        src="@/assets/icons/undraw_server_down_s-4-lk 1.png"
                        alt=""
                        class="heading__author-picture"
                    />
                    <p class="heading__author-name">Juliana Putra</p>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <div class="story">
                <!-- <UiImageHighlight /> -->
                <div class="story__image">
                    <swiper
                        :navigation="true"
                        :thumbs="{ swiper: thumbsSwiper }"
                        :modules="[FreeMode, Navigation, Thumbs]"
                        class="main-swiper"
                    >
                        <swiper-slide @click="setinitialSlide(0)">
                            <img
                                src="@/assets/icons/poster.png"
                                alt="Gambar 1"
                                class="main-image"
                                data-bs-toggle="modal"
                                data-bs-target="#detailStory"
                            />
                        </swiper-slide>
                        <swiper-slide @click="setinitialSlide(1)">
                            <img
                                src="@/assets/icons/profile_picture.png"
                                alt="Thumbnail 2"
                                class="main-image"
                                data-bs-toggle="modal"
                                data-bs-target="#detailStory"
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
                <UiModal elWidth="1100" title="detailStory">
                    <div class="wrapper-close">
                        <button
                            type="button"
                            class="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <icon
                                name="ri:close-large-fill"
                                class="close__icon"
                            ></icon>
                        </button>
                    </div>
                    <!-- <pre>{{ initialSlide }}</pre> -->
                    <swiper
                        v-if="initialSlide > -1"
                        :navigation="true"
                        :thumbs="{ swiper: thumbsSwiperModal }"
                        :modules="[FreeMode, Navigation, Thumbs]"
                        :initialSlide="initialSlide"
                        class="mySwiper2"
                    >
                        <swiper-slide>
                            <img
                                src="@/assets/icons/poster.png"
                                alt="Gambar 1"
                                class="modal-image__highlight"
                            />
                        </swiper-slide>
                        <swiper-slide>
                            <img
                                src="@/assets/icons/profile_picture.png"
                                alt="Thumbnail 2"
                                class="modal-image__highlight"
                            />
                        </swiper-slide>
                        <swiper-slide>
                            <img
                                src="@/assets/icons/profile_picture.png"
                                alt="Gambar 2"
                                class="modal-image__highlight"
                            />
                        </swiper-slide>
                        <swiper-slide>
                            <img
                                src="@/assets/icons/poster.png"
                                alt="Gambar 3"
                                class="modal-image__highlight"
                            />
                        </swiper-slide>
                    </swiper>

                    <!-- Swiper Thumbnail -->
                    <swiper
                        @swiper="setThumbsSwiperModal"
                        :spaceBetween="30"
                        :slidesPerView="5"
                        :freeMode="true"
                        :centerInsufficientSlides="true"
                        :watchSlidesProgress="true"
                        :modules="[FreeMode, Navigation, Thumbs]"
                        class="mySwiper"
                    >
                        <swiper-slide>
                            <img
                                src="@/assets/icons/poster.png"
                                alt="Thumbnail 1"
                                class="modal-image"
                            />
                        </swiper-slide>
                        <swiper-slide>
                            <img
                                src="@/assets/icons/profile_picture.png"
                                alt="Thumbnail 2"
                                class="modal-image"
                            />
                        </swiper-slide>
                        <swiper-slide>
                            <img
                                src="@/assets/icons/profile_picture.png"
                                alt="Thumbnail 2"
                                class="modal-image"
                            />
                        </swiper-slide>
                        <swiper-slide>
                            <img
                                src="@/assets/icons/poster.png"
                                alt="Thumbnail 3"
                                class="modal-image"
                            />
                        </swiper-slide>
                    </swiper>
                </UiModal>

                <div class="story__text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi recusandae iure obcaecati adipisci at sunt
                        blanditiis officia saepe quas? Consequatur quia
                        inventore quibusdam, iste iure quas provident corrupti
                        exercitationem modi? Unde odio quas atque aliquid natus
                        eum facilis impedit, repellendus optio dolor consequatur
                        amet nostrum error tempore quam laboriosam debitis
                        harum. Ipsa consectetur quod illum cum autem id
                        reiciendis repudiandae.
                    </p>
                </div>
            </div>
        </div>
        <div class="wrapper-similarStory"></div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    padding-top: 60px;
}

.mySwiper2 {
    width: 100%;
    max-width: 900px;
    height: 100%;
}

.mySwiper {
    margin-top: 30px;
    width: 100%;
    padding-bottom: 60px;

    .swiper-slide {
        opacity: 0.5;
        cursor: pointer;
    }
    .swiper-slide-thumb-active {
        opacity: 1;
    }
}

.mySwiper :deep(.swiper-button-next),
:deep(.swiper-button-prev) {
    color: white !important;
}

:deep(.swiper-button-next::after) {
    padding-right: 48px;
}

:deep(.swiper-button-prev::after) {
    padding-left: 48px;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
    font-size: 40px;
    font-weight: 1000;
    color: white !important;
}

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
.modal-image {
    // max-width: 202px;
    // max-height: 200px;
    width: 202px;
    height: 200px;
    border-radius: 8px;

    &__highlight {
        width: 100%;
        height: 100%;
        max-height: 500px;
        max-width: 900px;
        border-radius: 8px;
        object-fit: cover;
    }
}

.wrapper-close {
    display: flex;
    justify-content: flex-end;
    padding-right: 15px;
    padding-top: 15px;
}

.close {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #466543;
    opacity: 1;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &__icon {
        color: white;
        font-size: 18px;
    }
}

.heading {
    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 50px;
    }

    &__date {
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        color: #4b4b4b;
    }

    &__title {
        font-family: "Playfair Display";
        font-weight: 700;
        font-size: 60px;
        line-height: 74px;
        color: #222222;
        text-transform: capitalize;
    }

    &__author {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    &__author-picture {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    &__author-name {
        font-family: "DM Sans";
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        color: #222222;
        margin: 0;
    }
}

.wrapper {
    padding-top: 60px;
}

.story {
    display: flex;

    @media (max-width: 1004px) {
        flex-direction: column;
    }
    gap: 60px;

    &__image {
        width: 100%;
        max-width: 550px;
        margin: 0 auto;
    }

    &__text {
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: #222222;
    }
}

.kotak {
    &__icon {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        background-color: #466543;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 25px;
        transition: 0.5s all;
    }

    &__icon-black {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        background-color: #222222;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 25px;
        transition: 0.5s all;
    }

    &__icon-logo {
        padding: 20px;
        color: #f0f5ed;
        transition: 0.5s all;
    }
}

.bookmark {
    border: none;
    margin-right: 80px;
}

.button-image {
    border: none;
    background-color: white;
}
</style>
