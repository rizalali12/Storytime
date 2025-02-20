<script lang="ts" setup>
const route = useRoute();

const props = defineProps({
    title: {
        type: String,
    },
    url: {
        type: String,
        default: null,
    },
    variant: {
        type: String as PropType<"primary" | "outlined" | "no-border">,
        default: "primary",
    },
    active: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <NuxtLink :to="url">
        <button :class="variant + ' ' + (active ? 'active' : '')">
            {{ title }}
        </button>
    </NuxtLink>
</template>

<style lang="scss" scoped>
.primary {
    border-radius: 8px;
    padding: 14px 30px;
    background-color: #466543;
    font-size: 24px;
    line-height: 32px;
    font-family: "DM Sans";
    transition: 0.5s;
    color: #ffffff;
    border: 0px;

    &:hover {
        background-color: #385236;
    }
}

.outlined {
    height: 60px;
    // width: 151px;
    padding: 14px 30px;
    border-radius: 8px;
    border: 2px solid #466543;
    background: none;
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #466543;
    transition: 0.5s;

    &:hover {
        border: 2px solid black;
        color: black;
    }
}

.no-border {
    border: none;
    border-radius: 8px;
    padding: 30px;
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #222222;
    background-color: white;
    transition: 0.5s;

    &:hover {
        background-color: #f0f5ed;
    }
}

.active {
    background-color: #f0f5ed;
}
</style>
