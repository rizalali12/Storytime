<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
    },
});
</script>

<template>
    <div>
        <h1 class="title">{{ title }}</h1>
    </div>
</template>

<style lang="scss" scoped>
.title {
    font-family: "Playfair Display";
    font-weight: 600;
    font-size: 44px;
    line-height: 58px;
    color: #222222;
}
</style>
