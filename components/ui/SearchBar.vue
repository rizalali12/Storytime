<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";

const props = defineProps({
    variant: {
        type: String as PropType<"searchbar" | "searchbar-mini">,
        default: "searchbar",
    },
    modelValue: {
        type: String,
        default: "",
    },
});

const router = useRouter();
const search = defineModel("modelValue", { required: true });
const debounceSearch: any = ref("");
const debounceSearchFn = useDebounceFn(() => {
    debounceSearch.value = search.value;
}, 1000);

watch(
    () => search.value,
    () => {
        debounceSearchFn();
    }
);
</script>

<template>
    <input
        type="text"
        name="search-bar"
        id=""
        placeholder="Search story"
        :class="variant"
        v-model="search"
    />
</template>

<style lang="scss" scoped>
.searchbar {
    max-width: 1062px;
    width: 100%;
    height: 80px;
    margin: 0px;
    border-radius: 8px;
    border: 2px solid #cccccc;
    font-family: "DM Sans";
    font-size: 24px;
    font-weight: 400;
    padding-left: 30px;

    &::placeholder {
        font-size: 24px;
        font-weight: 400;
        display: flex;
        background-image: url("@/assets/icons/iconoir_search.svg");
        background-repeat: no-repeat;
        background-position: right;
        margin-right: 30px;
        padding-right: 30px;
        color: black;
    }
}

.searchbar-mini {
    max-width: 547px;
    width: 100%;
    height: 80px;
    border-radius: 8px;
    border: 2px solid #cccccc;
    font-family: "DM Sans";
    font-size: 24px;
    font-weight: 400;
    padding-left: 30px;

    &::placeholder {
        font-size: 24px;
        font-weight: 400;
        display: flex;
        background-image: url("@/assets/icons/iconoir_search.svg");
        background-repeat: no-repeat;
        background-position: right;
        margin-right: 30px;
        padding-right: 30px;
        color: black;
    }
}
</style>
