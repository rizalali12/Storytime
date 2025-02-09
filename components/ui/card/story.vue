<script lang="ts" setup>
import type { PropType } from "vue";

const saveBookmark = ref(false);

const toggleBookmark = () => {
    saveBookmark.value = !saveBookmark.value;
};

const props = defineProps({
    story: {
        type: Object,
        required: true,
    },
    url: {
        type: String,
        default: null,
    },
    variant: {
        type: String as PropType<"image" | "image_large">,
        default: "image",
    },
});
</script>

<template>
    <div class="wrapper">
        <div class="kotak">
            <div
                :class="saveBookmark ? 'kotak__icon-black' : 'kotak__icon'"
                @click="toggleBookmark"
            >
                <!-- //ganti jadi button -->
                <icon
                    :name="
                        saveBookmark
                            ? 'material-symbols:bookmark-check-sharp'
                            : 'material-symbols:bookmark-add-outline-rounded'
                    "
                    class="kotak__icon-logo"
                ></icon>
            </div>
            <NuxtLink :to="story.url" class="kotak">
                <img src="@/assets/icons/Group.png" class="gambar" alt="" />
            </NuxtLink>
        </div>
        <NuxtLink :to="url">
            <div class="kotak__info">
                <h1 class="kotak__title">{{ story.title }}</h1>
                <div class="wrapper__preview">
                    <p class="kotak__preview">{{ story.preview }}</p>
                </div>
                <div class="kotak__profile">
                    <div class="author">
                        <img
                            src="@/assets/icons/undraw_on_the_office_re_cxds 1.png"
                            alt=""
                            class="author__profile-image"
                        />
                        <h2 class="author__profile">{{ story.author }}</h2>
                    </div>
                    <div class="author__info">
                        <label class="author__date">{{ story.date }}</label>
                        <div v-if="story.genre" class="author__genre">
                            {{ story.genre }}
                        </div>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
.link {
    text-decoration: none;
    color: #222222;

    &kotak__title:hover {
        color: #466543;
    }
}

.wrapper {
    &__preview {
        max-height: 80px;
    }
}

.kotak {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    background-color: red;

    &__info {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__title {
        font-family: "DM Sans";
        font-weight: 700;
        font-size: 36px;
        line-height: 46px;
        color: #222222;
        padding-top: 20px;
        margin-bottom: 0;
    }

    &__preview {
        max-height: 80px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    &__profile {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

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
        top: 80%;
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
        top: 80%;
        transition: 0.5s all;
    }

    &__icon-logo {
        padding: 20px;
        color: #f0f5ed;
        transition: 0.5s all;
    }
}

// .link .kotak__title:hover {
//     color: #466543;
// }

.gambar {
    // border: 1px solid black;
    // width: 547px;
    // height: 500px;
    border-radius: 8px;
}

.author {
    display: flex;
    align-items: center;

    &__profile {
        font-family: "DM Sans";
        padding-left: 10px;
        color: #222222;
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        margin: 0;
    }

    &__date {
        display: flex;
        align-items: center;
    }

    &__profile-image {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid;
    }

    &__date {
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
    }

    &__info {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    &__genre {
        background-color: #f0f5ed;
        color: #466543;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        font-family: "DM Sans";
        border: none;
        padding: 8px 12px;
        border-radius: 8px;
    }
}
</style>
