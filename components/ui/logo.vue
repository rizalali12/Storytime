<script lang="ts" setup>
const useToast = useToastStore();

const deleteToast = () => {
    useToast.closeToast();
};
</script>

<template>
    <div class="navbar__logo">
        <NuxtLink to="/" @click="deleteToast">
            <img src="@/assets/icons/image 12.png" alt="logo" />
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped></style>
