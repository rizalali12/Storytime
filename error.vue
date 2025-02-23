<script setup lang="ts">
import type { NuxtError } from "#app";
import AppFooter from "./components/AppFooter.vue";

const props = defineProps({
    error: Object as () => NuxtError,
});
</script>

<template>
    <Appheader />
    <div class="container">
        <div class="wrapper-image">
            <img
                src="@/assets/icons/undraw_server_down_s-4-lk 1.png"
                alt=""
                class="image"
            />
        </div>
        <div class="error">
            <h1 class="error__title">{{ error.statusCode }}</h1>
            <div v-if="error?.statusCode === 404" class="wrapper">
                <h2 class="error__message">Pages not found</h2>
            </div>
            <p class="text">
                Oops! It looks like this page doesn't exist. Please check the
                URL or return to the homepage.
            </p>
            <NuxtLink to="/"><UiButton title="Back to Home" /></NuxtLink>
        </div>
    </div>
    <AppFooter />
</template>

<style lang="scss" scoped>
.container {
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 33px;

    @media (max-width: 620px) {
        flex-direction: column;
    }
}

.image {
    max-width: 832px;
    max-height: 519px;
    width: 100%;
    height: 100%;
}

.error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    &__title {
        font-family: "Playfair Display";
        font-weight: 700;
        font-size: 160px;
        line-height: 194px;
        color: #222222;
        text-align: center;
    }

    &__message {
        font-family: "Playfair Display";
        font-weight: 600;
        font-size: 44px;
        line-height: 58px;
        color: #222222;
    }
}

.text {
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #4b4b4b;
    padding-bottom: 70px;

    @media (max-width: 620px) {
        padding-bottom: 40px;
    }
}

.wrapper {
    padding-top: 30px;
    padding-bottom: 70px;

    @media (max-width: 620px) {
        padding-bottom: 20px;
        padding-top: 20px;
    }
}
</style>
