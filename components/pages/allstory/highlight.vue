<script lang="ts" setup>
import type { PropType } from "vue";
import { useDebounceFn } from "@vueuse/core";

const stories = ref<any>([]);
const router = useRouter();
const search = ref("");

const props = defineProps({
    title: {
        type: String,
    },
    variant: {
        type: String as PropType<"image" | "image_large">,
        default: "image",
    },
    variantExplore: {
        type: String as PropType<"explore" | "no_explore">,
        default: "no_explore",
    },
});

const fetchData = () => {
    stories.value = [
        {
            title: "Gemma",
            image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
            preview:
                "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality. It was thicker. The trees had grown taller. The ti plants shaded the green forest a sinister red. There was no doubt about it- the jungle",
            author: "Khrisvana (updated) 1",
            date: "12 March 2024",
            genre: "Comedy",
            url: "/story/testing",
        },
        {
            title: "Gemma",
            image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
            preview:
                "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality. It was thicker. The trees had grown taller. The ti plants shaded the green forest a sinister red. There was no doubt about it- the jungle",
            author: "Khrisvana (updated) 1",
            date: "12 March 2024",
            genre: "Comedy",
            url: "/story/testing",
        },
        {
            title: "Gemma",
            image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
            preview:
                "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality. It was thicker. The trees had grown taller. The ti plants shaded the green forest a sinister red. There was no doubt about it- the jungle",
            author: "Khrisvana (updated) 1",
            date: "12 March 2024",
            genre: "Comedy",
            url: "/story/testing",
        },
        {
            title: "Gemma",
            image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
            preview:
                "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality. It was thicker. The trees had grown taller. The ti plants shaded the green forest a sinister red. There was no doubt about it- the jungle",
            author: "Khrisvana (updated) 1",
            date: "12 March 2024",
            genre: "Comedy",
            url: "/story/testing",
        },
        {
            title: "Gemma",
            image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
            preview:
                "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality. It was thicker. The trees had grown taller. The ti plants shaded the green forest a sinister red. There was no doubt about it- the jungle",
            author: "Khrisvana (updated) 1",
            date: "12 March 2024",
            genre: "Comedy",
            url: "/story/testing",
        },
        {
            title: "Gemma",
            image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
            preview:
                "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality. It was thicker. The trees had grown taller. The ti plants shaded the green forest a sinister red. There was no doubt about it- the jungle",
            author: "Khrisvana (updated) 1",
            date: "12 March 2024",
            genre: "Comedy",
            url: "/story/testing",
        },
        {
            title: "Gemma",
            image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
            preview:
                "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality. It was thicker. The trees had grown taller. The ti plants shaded the green forest a sinister red. There was no doubt about it- the jungle",
            author: "Khrisvana (updated) 1",
            date: "12 March 2024",
            genre: "Comedy",
            url: "/story/testing",
        },
        {
            title: "Gemma",
            image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
            preview:
                "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality. It was thicker. The trees had grown taller. The ti plants shaded the green forest a sinister red. There was no doubt about it- the jungle",
            author: "Khrisvana (updated) 1",
            date: "12 March 2024",
            genre: "Comedy",
            url: "/story/testing",
        },
    ];
};

const searchStory = () => {
    // This line determines what to use as the search query
    // const query =
    //     typeof event === "object" && event.constructor.name === "KeyboardEvent"
    //         ? search.value // Use the reactive search value when event is passed
    //         : event; // Use the value passed directly otherwise

    router.push({ query: { search: search.value } });
};

const debounceSearchFn = useDebounceFn(() => {
    searchStory();
}, 1000);

watch(
    () => search.value,
    () => {
        debounceSearchFn();
    }
);

fetchData();
</script>

<template>
    <div class="container">
        <div class="wrapper">
            <UiStoryGenreHeader title="All Story" url="/story" />
        </div>
    </div>
    <UiStoryHeader variant="no-category" title="All Story" />
    <div class="container container-content">
        <div class="heading">
            <div class="heading__dropdown">
                <UiDropdownMenu />
            </div>
            <div @keydown.enter="searchStory" class="heading__searchbar">
                <UiSearchBar variant="searchbar-mini" v-model="search" />
            </div>
        </div>
        <div class="story" v-if="variant === 'image'">
            <div class="row">
                <div
                    class="col-12 col-md-6 col-xl-4"
                    v-for="(story, i) in stories"
                    :key="i"
                >
                    <div class="story__normal">
                        <UiCardStory :story="story" genre="true" />
                    </div>
                </div>
            </div>
        </div>
        <UiNumberPage />
    </div>
</template>

<style lang="scss" scoped>
.container {
    margin-top: 50px;

    @media (max-width: 500px) {
        margin-top: 30px;
    }
}

.wrapper {
    margin-bottom: 40px;
}

.container-content {
    margin-top: 0px;
}

.heading {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__dropdown {
        margin: 0px;
        padding: 0px;
    }
    &__searchbar {
        display: flex;
        justify-content: flex-end;
        margin: 0px;
        padding: 0px;
        width: 50%;
    }
}

.story {
    display: flex;
    gap: 24px;
    padding-top: 40px;

    &__highlight {
        width: 100%;
    }
}

@media (max-width: 991px) {
    .heading {
        flex-direction: column-reverse;
    }
}
</style>
