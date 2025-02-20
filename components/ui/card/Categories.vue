<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
    },
    url: {
        type: String,
        default: null,
    },
});
</script>

<template>
    <div class="wrapper">
        <NuxtLink :to="url">
            <button class="button">{{ title }}</button>
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
.button {
    padding: 60px 0px;
    width: 100%;
    border: none;
    border-radius: 8px;
    color: #466543;
    background-color: #f0f5ed;
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 28px;
    line-height: 38px;
    transition: 0.5s;

    &:hover {
        background-color: #d6dad4;
        color: #222222;
    }
}
</style>
