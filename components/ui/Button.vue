<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
    },
    url:{
        type: String,
        default: null
    },
    story: {
        type: Object,
        required: true,
    },
    variant: {
        type: String as PropType<"primary" | "outlined">,
        default: "primary"
    }
})

</script>

<template>
    <NuxtLink :to="url">
    <button :class="variant" >{{ title }}</button>
    </NuxtLink>
</template>

<style lang="scss" scoped>

.primary {
    border-radius: 8px;
    padding: 14px 30px;
    background-color: #466543;
    font-size: 24px;
    line-height: 32px;
    font-family: 'DM Sans';
    transition: 0.5s;
    color: #FFFFFF;
    border: 0px;

    &:hover{
        background-color: #385236;
    }
}

.outlined {

    height: 60px;
    width: 151px;
    border-radius: 8px;
    border: 2px solid #466543;
    background: none;
    font-family: 'DM Sans';
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

</style>