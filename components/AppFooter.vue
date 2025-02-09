<script setup lang="ts">
import { Icon } from "#components";
</script>

<template>
    <hr />
    <div class="container">
        <div class="footer">
            <h1 class="footer__title">
                © 2024. Timedoor Indonesia. All rights reserved.
            </h1>
        </div>
        <div class="footer__logo">
            <icon name="ri:facebook-box-fill" class="footer__icon"></icon>
            <icon name="uil:instagram-alt" class="footer__icon"></icon>
            <icon
                name="tdesign:logo-youtube-filled"
                class="footer__icon"
            ></icon>
        </div>
    </div>
</template>

<style lang="scss" scoped>
hr {
    margin-top: 120px;
    color: #4b4b4b;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer {
    padding-top: 32px;
    padding-bottom: 42px;

    &__logo {
        display: flex;
        gap: 10px;
    }

    &__title {
        font-family: "DM Sans";
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        color: #4b4b4b;
    }

    &__icon {
        font-size: 40px;
        background-color: #222222;
        transform: translateY(-20%);
        transition: 0.5s;

        &:hover {
            background-color: #466543;
        }
    }
}
</style>
