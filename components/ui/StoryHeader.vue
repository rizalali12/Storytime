<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
    },
    variant: {
        type: String as PropType<"category" | "no-category">,
        default: "category",
    },
    url: {
        type: String,
        default: null,
    },
});
</script>

<template>
    <!-- <div class="wrapper">
        <div class="container">
            <p class="section" href="/login">Home</p>
            <template v-if="variant === 'category'">
                <p class="section-slash">/</p>
                <p class="section">Categories</p>
            </template>
            <p class="section-slash">/</p>
            <p class="section">{{ title }}</p>
        </div>
    </div> -->
    <div class="wrapper">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">
                        Home
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
    max-width: 1920px;
    width: 100%;
    background-color: #f0f5ed;
    display: flex;
    align-items: center;
}

.container {
    display: flex;
    gap: 18px;
    align-items: center;
}

.link {
    text-decoration: none;
    color: #466543;
}

.breadcrump {
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: #466543;
    transition: 0.2s;

    &-item {
        font-family: "DM Sans";
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        color: #466543;
    }

    &:hover {
        border-bottom: 2px solid #466543;
        cursor: pointer;
    }
}
</style>
