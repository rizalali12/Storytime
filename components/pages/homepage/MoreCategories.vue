<script lang="ts" setup>
const categories: any = ref([]);
const { $api } = useNuxtApp();

onMounted(async () => {
    try {
        const response = await $api.categories.categories();
        categories.value = response.data.slice(3);
        console.log(categories.value);
    } catch (error) {
        console.error("Failed to fetch categories:", error);
    }
});
</script>

<template>
    <div class="container">
        <div>
            <UiSectionHeader title="More Categories" />
        </div>
        <div class="row">
            <div
                v-for="(item, index) in categories"
                :key="index"
                class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-3"
            >
                <UiCardCategories
                    :title="item.name"
                    :url="`/story?category=${item.slug}`"
                    :id="item.id"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    margin-top: 120px;
}
</style>
