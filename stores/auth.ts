export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: {
            username: null as string | null,
            name: null as string | null,
            email: null as string | null,
            about: null as string | null,
        },
        token: null as string | null,
    }),
    actions: {
        setUser(user: {
            username: string | null;
            name: string | null;
            email: string | null;
            about: string | null;
            token: string | null;
        }) {
            this.user = { ...user };
        },
        setToken(token: string) {
            this.token = token;
        },
        clearUser() {
            this.user = {
                username: null,
                name: null,
                email: null,
                about: null,
            };
            this.token = null;
        },
        getUser() {
            return this.user;
        },
        getToken() {
            return this.token;
        },
        // getters: {
        //     getUser: (state: any) => state.user,
        // },
    },
    persist: true,
});
