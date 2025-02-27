export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: {
            username: null as string | null,
            name: null as string | null,
            email: null as string | null,
            about: null as string | null,
        },
    }),
    actions: {
        setUser(user: {
            username: string | null;
            name: string | null;
            email: string | null;
            about: string | null;
        }) {
            this.user = { ...user };
        },
        clearUser() {
            this.user = {
                username: null,
                name: null,
                email: null,
                about: null,
            };
        },
        getUser() {
            return this.user;
        },
        // getters: {
        //     getUser: (state: any) => state.user,
        // },
    },
    persist: true,
});
