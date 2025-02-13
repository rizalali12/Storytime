<script lang="ts" setup>
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
const stories = ref<any>([]);
const saveBookmark = ref(false);
const route = useRoute();
console.log(route);

const toggleBookmark = () => {
    saveBookmark.value = !saveBookmark.value;
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
                <div class="story__image">
                    <img
                        src="@/assets/icons/poster.png"
                        alt=""
                        class="story__image-highlight"
                    />
                    <img
                        src="@/assets/icons/poster.png"
                        alt=""
                        class="story__image-secondHighlight"
                    />
                    <img
                        src="@/assets/icons/poster.png"
                        alt=""
                        class="story__image-secondHighlight"
                    />
                </div>
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
    position: relative;
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
        font-family: 24px;
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
    gap: 60px;

    &__image-highlight {
        min-width: 547px;
        min-height: 600px;
        max-width: 600px;
        max-height: 620px;
        border-radius: 8px;
    }

    &__image-secondHighlight {
        max-width: 202px;
        max-height: 200px;
        width: 100%;
        height: 100%;
        margin-top: 30px;
        margin-right: 30px;
        border-radius: 8px;
        filter: opacity(50%);
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
}
</style>
