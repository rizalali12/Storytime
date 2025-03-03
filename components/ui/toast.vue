<script lang="ts" setup>
import { storeToRefs } from "#imports";
// const toast = ref(true);
// // const isFading;

// const toggleToast = () => {
//     toast.value = false;
// };

// const toastAppear = () => {
//     if (authStore.getUser().username) {
//         toast.value = true;
//         setTimeout(() => {
//             // toast.value = "fade-out";
//             setTimeout(() => {
//                 toast.value = false;
//             }, 4000);
//         }, 6000);
//     }
// };
// triggerToast();
// toastAppear();

// const authStore = useAuthStore();
const toastStore = useToastStore();
const { toasts } = storeToRefs(toastStore);
console.log("ini toastttttt", toasts.value);

watch(toasts.value, () => {
    console.log("ada perubahan di toast");
    if (toasts.value) {
        console.log(toasts.value);
    }
});

const props = defineProps({
    title: {
        type: String,
    },
});
</script>

<template>
    <div class="wrapper">
        <div
            class="wrapper__outside"
            v-for="(item, index) in toasts"
            :key="index"
        >
            <div
                class="wrapper__inside d-flex justify-content-center align-items-center gap-3"
            >
                <icon name="prime:check-circle" class="icon"></icon>
                <h1 class="title">{{ item }}</h1>
                <button class="button" @click="toastStore.closeToast">
                    <icon name="ri:close-large-fill" class="icon__close"></icon>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    position: fixed;
    top: 80px;
    z-index: 11;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    &__outside {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        animation: 4s appear forwards;

        @keyframes appear {
            0% {
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
    }

    &__inside {
        max-width: 600px;
        width: 100%;
        height: 70px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0px 14px 74px -25px #00000073;
        position: relative;
    }
}

.button {
    border: none;
    background-color: white;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

.icon {
    color: green;
    font-size: 40px;

    &__close {
        color: #4b4b4b;
    }
}

.title {
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #222222;
    margin: 0px;
    padding-right: 20px;
}
</style>
