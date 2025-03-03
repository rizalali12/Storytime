export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();
    const user = authStore.getUser().username;

    if (!user) {
        return navigateTo("/login");
    }
});
