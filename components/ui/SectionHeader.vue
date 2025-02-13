<script lang="ts" setup>
import type { PropType } from "vue";

const props = defineProps({
    title: {
        type: String,
    },
    url: {
        type: String,
        default: null,
    },
    variant: {
        type: String as PropType<"explore" | "no_explore">,
        default: "no_explore",
    },
    variant_title: {
        type: String as PropType<"primary" | "title">,
        default: "title",
    },
});
</script>

<template>
    <div class="container">
        <div class="heading">
            <h1 :class="variant_title">{{ title }}</h1>
            <div v-if="variant === 'explore'">
                <NuxtLink :to="url" class="heading__explore"
                    >Explore More
                    <icon
                        name="material-symbols:arrow-forward-rounded"
                        class="heading__icon"
                    >
                    </icon>
                </NuxtLink>
            </div>
        </div>
        <hr />
    </div>
</template>

<style lang="scss" scoped>
.heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    &__explore {
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        color: #4b4b4b;
        text-decoration: none;
        padding-bottom: 15px;
        transition: 0.5s all;
        border-bottom: 1px solid white;

        &:hover {
            border-bottom: 1px solid #466543;
            color: #466543;
        }
    }

    &__icon {
        transform: translateY(12%);
    }
}

.primary {
    font-family: "Playfair Display";
    font-weight: 600;
    size: 44px;
    line-height: 58px;
    color: #222222;
}

.title {
    font-family: "Playfair Display";
    font-weight: 600;
    size: 44px;
    line-height: 58px;
    color: #222222;
    text-shadow: 0px 4px 4px #00000040;
}
</style>
