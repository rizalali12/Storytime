<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
        default: null,
    },
    variant: {
        type: String as PropType<"category" | "no-category" | "detail-story">,
        default: "category",
    },
    url: {
        type: String,
        default: null,
    },
});
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">
                        <NuxtLink to="/" class="link">Home</NuxtLink>
                    </li>
                    <template v-if="variant === 'detail-story'">
                        <li class="breadcrumb-item active" aria-current="page">
                            <NuxtLink to="" class="link">nama story</NuxtLink>
                        </li>
                    </template>
                    <template v-if="variant === 'category'">
                        <li class="breadcrumb-item active" aria-current="page">
                            <NuxtLink to="" class="link">Category</NuxtLink>
                        </li>
                    </template>
                    <li class="breadcrumb-item active" aria-current="page">
                        <NuxtLink to="" class="link">{{ title }}</NuxtLink>
                    </li>
                </ol>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    min-height: 82px;
    height: 100%;
    width: 100%;
    background-color: #f0f5ed;
    display: flex;
    align-items: center;
}

.container {
    // display: flex;
    // gap: 18px;
    // align-items: center;
}

.link {
    text-decoration: none;
    color: #466543;
    transition: 0.1s;
    padding-bottom: 5px;
    text-transform: capitalize;

    &:hover {
        border-bottom: 2px solid #466543;
        cursor: pointer;
    }
}

.breadcrumb {
    margin-bottom: 0;
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: #466543;
    display: flex;
    gap: 18px;

    &-item {
        display: flex;
        gap: 18px;
        font-family: "DM Sans";
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        color: #466543;
    }
}
</style>
