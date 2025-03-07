<script lang="ts" setup>
import type { PropType } from "vue";
import Story from "~/components/pages/detail/Story.vue";

const { $api } = useNuxtApp();

const saveBookmark = ref(false);
const useToast = useToastStore();
const deleteModal = ref(false);
const useAuth = useAuthStore();

const toggleDelete = () => {
    deleteModal.value = !deleteModal.value;
};

const toggleBookmark = () => {
    if (useAuth.getUser().username) {
        saveBookmark.value = !saveBookmark.value;
        if (saveBookmark.value) {
            useToast.addToast("Successfully added story to bookmarks");
        } else {
            useToast.addToast("Successfully remove story from bookmarks");
        }
    } else {
        return navigateTo("/login");
    }
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
        type: String as PropType<"image">,
        default: "image",
    },
    genre: {
        type: Boolean,
        default: null,
    },
    hasAuthor: {
        type: String,
        default: "author",
    },
    variantIcon: {
        type: String as PropType<
            "primary" | "secondary" | "my-story" | "latest-story"
        >,
        default: "primary",
    },
});

// const getImageUrl = () => {
//     return `/${props.story.image}`;
//     // return "test";
//     // console.log(props.story.image);
// };
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
            <button
                class="bookmark-mystory story__icon-delete"
                @click="toggleDelete"
            >
                <icon name="ri:delete-bin-line" class="story__icon-logo"></icon>
            </button>
            <div class="wrapper-modal" v-if="deleteModal">
                <div
                    class="modal d-flex align-items-center justify-content-center flex-column"
                >
                    <div
                        class="d-flex gap-3 justify-content-center flex-column align-itemx-center text-center"
                    >
                        <h1 class="modal__title m-0 p-0">Delete Story</h1>
                        <p class="modal__text m-0 p-0">
                            Are you sure want to delete this story?
                        </p>
                    </div>
                    <div class="d-flex gap-4 pt-4">
                        <UiButton
                            title="Cancel"
                            variant="outlined"
                            @click="toggleDelete"
                        />
                        <UiButton title="Delete" variant="primary" />
                    </div>
                </div>
            </div>
            <NuxtLink to="/mystory/1/edit">
                <button class="bookmark-mystory story__icon-edit">
                    <icon
                        name="ri:edit-box-line"
                        class="story__icon-logo"
                    ></icon>
                </button>
            </NuxtLink>
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
                <!-- <img :src="getImageUrl()" class="gambar" alt="" /> -->
                <!-- <img :src="story.url" class="gambar" alt="" /> -->
            </NuxtLink>
        </div>

        <div class="kotak" v-if="variantIcon === 'latest-story'">
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
                <!-- <img :src="getImageUrl()" class="gambar" alt="" /> -->
                <!-- <img :src="story.url" class="gambar__story" alt="" /> -->
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
                        <!-- <img
                            :src="story.url"
                            alt=""
                            class="author__profile-image"
                        /> -->
                        <img
                            src="@/assets/icons/undraw_on_the_office_re_cxds 1.png"
                            alt=""
                            class="author__profile-image"
                        />
                        <h2 class="author__profile">{{ story.author }}</h2>
                    </div>
                    <div class="author__info">
                        <div>
                            <label class="author__date">{{ story.date }}</label>
                        </div>

                        <div v-if="genre" class="author__genre">
                            {{ story.genre }}
                        </div>
                    </div>
                </div>

                <div class="kotak__profile" v-if="hasAuthor === 'no-author'">
                    <div class="wrapper-author">
                        <div class="author__genre">
                            {{ story.genre }}
                        </div>
                        <div class="author__info-no">
                            <label class="author__date">{{ story.date }}</label>
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

.wrapper-modal {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 12;
    top: 0;
    left: 0;
    position: fixed;
    cursor: auto;
}

.modal {
    max-width: 401px;
    width: 100%;
    height: 283px;
    position: absolute;
    background-color: white;
    top: 380px;
    left: 39%;
    border-radius: 8px;

    &__title {
        font-family: "DM Sans";
        font-weight: 700;
        font-size: 36px;
        line-height: 46px;
        letter-spacing: 0%;
        color: #222222;
    }

    &__text {
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 0%;
        text-align: center;
        color: #222222;
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

        @media (max-width: 1358px) {
            top: 71%;
        }

        @media (max-width: 1101px) {
            top: 69%;
        }
    }

    &:hover .kotak__icon-black {
        top: 73%;

        @media (max-width: 1358px) {
            top: 71%;
        }

        @media (max-width: 1101px) {
            top: 69%;
        }
    }

    &:hover .circle .bookmark-secondary {
        opacity: 100%;
    }
}

.kotak {
    display: flex;
    flex-direction: column;
    width: 100%;
    // max-width: 547px;
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
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
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

        @media (max-width: 1358px) {
            width: 60px;
            height: 60px;
            top: 73%;
        }

        @media (max-width: 1101px) {
            width: 55px;
            height: 55px;
            top: 71%;
        }
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

        @media (max-width: 1358px) {
            width: 60px;
            height: 60px;
            top: 73%;
        }

        @media (max-width: 1101px) {
            width: 55px;
            height: 55px;
            top: 71%;
        }
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
        transition: 0.5s;

        @media (max-width: 1300px) {
            top: 35%;
            right: 39%;
        }

        @media (max-width: 1102px) {
            width: 50px;
            height: 50px;
        }

        @media (max-width: 930px) {
            top: 42%;
            right: 42%;
        }

        @media (max-width: 767px) {
            width: 65px;
            height: 65px;
        }

        @media (max-width: 470px) {
            width: 50px;
            height: 50px;
            top: 40%;
            right: 41%;
        }
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
        transition: 0.5s;

        @media (max-width: 1300px) {
            top: 35%;
            right: 39%;
        }

        @media (max-width: 1102px) {
            width: 50px;
            height: 50px;
        }

        @media (max-width: 930px) {
            top: 42%;
            right: 42%;
        }

        @media (max-width: 767px) {
            width: 65px;
            height: 65px;
        }

        @media (max-width: 470px) {
            width: 50px;
            height: 50px;
            top: 40%;
            right: 41%;
        }
    }
}

.story {
    width: 100%;
    position: relative;

    &__icon {
        opacity: 100%;
        max-width: 65px;
        width: 100%;
        height: 100%;
        max-height: 65px;
        border-radius: 50%;
        background-color: #466543;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 22%;
        top: 75%;
        color: white;
        transition: 0.5s;

        @media (max-width: 1448px) {
            width: 50px;
            height: 50px;
        }

        @media (max-width: 1190px) {
            width: 45px;
            height: 45px;
        }

        @media (max-width: 767px) {
            width: 60px;
            height: 60px;
        }

        @media (max-width: 573px) {
            width: 50px;
            height: 50px;
        }

        @media (max-width: 467px) {
            width: 45px;
            height: 45px;
        }
    }

    &__icon-black {
        opacity: 100%;
        max-width: 65px;
        width: 100%;
        max-height: 65px;
        height: 100%;
        color: white;
        border-radius: 50%;
        background-color: #222222;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 22%;
        top: 75%;
        transition: 0.5s;

        @media (max-width: 1448px) {
            width: 50px;
            height: 50px;
        }

        @media (max-width: 1190px) {
            width: 45px;
            height: 45px;
        }
        @media (max-width: 767px) {
            width: 60px;
            height: 60px;
        }
        @media (max-width: 573px) {
            width: 50px;
            height: 50px;
        }
        @media (max-width: 467px) {
            width: 45px;
            height: 45px;
        }
    }

    &__icon-delete {
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

        @media (max-width: 1448px) {
            width: 50px;
            height: 50px;
        }

        @media (max-width: 1190px) {
            width: 45px;
            height: 45px;
        }
        @media (max-width: 767px) {
            width: 60px;
            height: 60px;
            right: 9%;
        }
        @media (max-width: 573px) {
            width: 50px;
            height: 50px;
        }

        @media (max-width: 467px) {
            width: 45px;
            height: 45px;
            right: 7%;
        }
        &:hover {
            background-color: #334930;
        }
    }

    &__icon-edit {
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

        @media (max-width: 1448px) {
            width: 50px;
            height: 50px;
        }

        @media (max-width: 1190px) {
            width: 45px;
            height: 45px;
        }

        @media (max-width: 767px) {
            width: 60px;
            height: 60px;
            right: 35%;
        }
        @media (max-width: 573px) {
            width: 50px;
            height: 50px;
        }
        @media (max-width: 467px) {
            width: 45px;
            height: 45px;
            right: 37%;
        }
        &:hover {
            background-color: #334930;
        }
    }
}

.gambar {
    border-radius: 8px;
    transition: 0.5s;
    width: 100%;

    &__story {
        border-radius: 8px;
        transition: 0.5s;
        width: 100%;
        height: 547px;
        object-fit: fill;
    }
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

.wrapper-author {
    width: 100%;
    display: flex;
    justify-content: space-between;
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

    &__info-no {
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

@media (max-width: 1000px) {
    .kotak__profile {
        flex-direction: column;
        align-items: self-start;
    }

    .author__info {
        justify-content: space-between;
        width: 100%;
    }
}

@media (max-width: 1585px) {
    .kotak__profile {
        flex-direction: column;
        align-items: self-start;
    }

    .author__info {
        justify-content: space-between;
        width: 100%;
    }
}
</style>
