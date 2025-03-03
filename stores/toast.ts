// const authStore = useAuthStore();

// export const useToastStore = defineStore("toast", () => {
//     const toast = ref(false);

//     const toggleToast = () => {
//         toast.value = false;
//     };

//     const toastAppear = () => {
//         // if (authStore.getUser().username) {
//         //     toast.value = true;
//         //     setTimeout(() => {
//         //         toast.value = false; // Hide toast after 600ms
//         //     }, 600);
//         // }
//         console.log("toat appear");
//     };

//     return { toast, toastAppear, toggleToast };
// });

export const useToastStore = defineStore("toast", () => {
    const toasts: any = ref<{ message: string }[]>([]);

    const closeToast = () => {
        toasts.value.splice([]);
    };

    const addToast = (message: string) => {
        setTimeout(() => {
            toasts.value.push(message);
            setTimeout(() => {
                toasts.value.shift();
            }, 6000);
        }, 300);
    };

    return { toasts, addToast, closeToast };
});
