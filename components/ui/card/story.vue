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
    genre: {
        type: String,
        default: null,
    },
    hasAuthor: {
        type: String,
        default: "author",
    },
    variantIcon: {
        type: String as PropType<"primary" | "secondary" | "my-story">,
        default: "primary",
    },
});
</script>

<template>
    <div class="wrapper">
        <div class="circle" v-if="variantIcon === 'secondary'">
            <button
                :class="saveBookmark ? 'circle__icon' : 'circle__icon-black'"
                @click="toggleBookmark"
                class="bookmark-secondary"
            >
                <icon
                    :name="
                        saveBookmark
                            ? 'material-symbols:bookmark-add-outline-rounded'
                            : 'material-symbols:bookmark-check-sharp'
                    "
                    class="circle__icon-logo"
                ></icon>
            </button>
            <NuxtLink :to="story.url" class="kotak">
                <img src="@/assets/icons/poster.png" class="gambar" alt="" />
            </NuxtLink>
        </div>
        <div class="story" v-if="variantIcon === 'my-story'">
            <button
                :class="saveBookmark ? 'story__icon-black' : 'story__icon'"
                @click="toggleBookmark"
                class="bookmark-mystory"
            >
                <icon
                    :name="
                        saveBookmark
                            ? 'material-symbols:bookmark-check-sharp'
                            : 'material-symbols:bookmark-add-outline-rounded'
                    "
                    class="story__icon-logo"
                ></icon>
            </button>
            <button class="bookmark-mystory story__icon-delete">
                <icon name="ri:delete-bin-line" class="story__icon-logo"></icon>
            </button>
            <button class="bookmark-mystory story__icon-edit">
                <icon name="ri:edit-box-line" class="story__icon-logo"></icon>
            </button>
            <NuxtLink :to="story.url" class="kotak">
                <img src="@/assets/icons/poster.png" class="gambar" alt="" />
            </NuxtLink>
        </div>
        <div class="kotak" v-if="variantIcon === 'primary'">
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
            <NuxtLink :to="story.url" class="kotak">
                <img src="@/assets/icons/poster.png" class="gambar" alt="" />
            </NuxtLink>
        </div>
        <NuxtLink :to="url" class="link">
            <div class="kotak__info">
                <h1 class="kotak__title">{{ story.title }}</h1>
                <div class="wrapper__preview">
                    <p class="kotak__preview">{{ story.preview }}</p>
                </div>
                <div class="kotak__profile" v-if="hasAuthor === 'author'">
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
                        <div v-elseif="genre" class="author__genre">
                            {{ story.genre }}
                        </div>
                    </div>
                </div>
                <div class="kotak__profile" v-if="hasAuthor === 'no-author'">
                    <div class="author">
                        <div class="author__genre">
                            {{ story.genre }}
                        </div>
                    </div>
                    <div class="author__info">
                        <label class="author__date">{{ story.date }}</label>
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
    cursor: pointer;
    &__preview {
        max-height: 80px;
    }

    &:hover .gambar {
        opacity: 70%;
    }

    &:hover .kotak__title {
        color: #466543;
    }

    &:hover .kotak__icon {
        top: 73%;
    }

    &:hover .kotak__icon-black {
        top: 73%;
    }

    &:hover .circle .bookmark-secondary {
        opacity: 100%;
    }
}

.kotak {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;

    &__info {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__title {
        transition: 0.5s;
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
        right: 30px;
        top: 75%;
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
        right: 30px;
        top: 75%;
        transition: 0.5s all;
    }

    &__icon-logo {
        padding: 20px;
        color: #f0f5ed;
        transition: 0.5s all;
    }
}

.circle {
    width: 100%;
    position: relative;

    &__icon {
        opacity: 0%;
        width: 65px;
        height: 65px;
        border-radius: 50%;
        background-color: #466543;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 42%;
        top: 42%;
        color: white;
        transition: 0.5s all;
    }

    &__icon-black {
        opacity: 0%;
        width: 65px;
        height: 65px;
        color: white;
        border-radius: 50%;
        background-color: #222222;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 42%;
        top: 42%;
        transition: 0.5s all;
    }
}

.story {
    width: 100%;
    position: relative;

    &__icon {
        opacity: 100%;
        width: 65px;
        height: 65px;
        border-radius: 50%;
        background-color: #466543;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 22%;
        top: 75%;
        color: white;
        transition: 0.5s all;
    }

    &__icon-black {
        opacity: 100%;
        width: 65px;
        height: 65px;
        color: white;
        border-radius: 50%;
        background-color: #222222;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 22%;
        top: 75%;
        transition: 0.5s all;
    }

    &__icon-delete {
        opacity: 100%;
        width: 65px;
        height: 65px;
        border-radius: 50%;
        background-color: #466543;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 6%;
        top: 75%;
        color: white;
        transition: 0.3s;

        &:hover {
            background-color: #334930;
        }
    }

    &__icon-edit {
        opacity: 100%;
        width: 65px;
        height: 65px;
        border-radius: 50%;
        background-color: #466543;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 38%;
        top: 75%;
        color: white;
        transition: 0.3s;

        &:hover {
            background-color: #334930;
        }
    }
}

.gambar {
    border-radius: 8px;
    transition: 0.5s;
    width: 100%;
}

.bookmark {
    border: none;
    z-index: 1;
    font-size: 40px;
}

.bookmark-secondary {
    border: none;
    z-index: 1;
    font-size: 40px;
}

.bookmark-mystory {
    border: none;
    z-index: 1;
    font-size: 40px;
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
        background-repeat: no-repeat;
        background-position: center;
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
