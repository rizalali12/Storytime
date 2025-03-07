<script lang="ts" setup>
import type { PropType } from "vue";
import { useDebounceFn } from "@vueuse/core";

const stories = ref<any>([]);
const route = useRoute();
const search = ref("");
const router = useRouter();

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

// const fetchData = () => {
//     stories.value = [
//         {
//             image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
//             preview:
//                 "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality. It was thicker. The trees had grown taller. The ti plants shaded the green forest a sinister red. There was no doubt about it- the jungle",
//             author: "Khrisvana (updated) 1",
//             date: "12 March 2024",
//             genre: "Comedy",
//         },
//     ];
// };

// fetchData();

const searchStory = () => {
    // const query =
    //     typeof event === "object" && event.constructor.name === "KeyboardEvent"
    //         ? search.value
    //         : event;

    const currentQuery = { ...router.currentRoute.value.query }; // Get current query params
    currentQuery.search = search.value; // Add or update search param

    if (route.query.category) {
        router.push({
            path: router.currentRoute.value.path,
            query: currentQuery,
        });
    } else {
        router.push({ query: { search: search.value } });
    }
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
</script>

<template>
    <div class="container">
        <div class="wrapper">
            <UiStoryGenreHeader :title="`9 result for ${route.query.search}`" />
        </div>
    </div>
    <UiStoryHeader variant="no-category" title="Search Result" />
    <div class="container container-content">
        <div class="heading">
            <div class="heading__dropdown">
                <UiDropdownMenu />
            </div>
            <div @keydown.enter="searchStory" class="heading__searchbar">
                <UiSearchBar variant="searchbar-mini" v-model="search" />
            </div>
        </div>
        <div class="story">
            <PagesHighlight variant="image_large" genre="true" />
            <PagesHighlight variant="image" genre="true" />
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
    margin-top: 0px;
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
    &__highlight {
        width: 100%;
    }
}

@media (max-width: 991px) {
    .heading {
        flex-direction: column-reverse;
    }

    .story {
        padding-top: 0px;
    }
}
</style>
