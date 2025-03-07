import { defu } from "defu";
import type { UseFetchOptions } from "nuxt/app";

class FetchFactory<T> {
    async call(
        url: MaybeRefOrGetter<string>,
        options: UseFetchOptions<T> = {}
    ): Promise<T> {
        const useAuth = useAuthStore();

        const headers: any = {
            Accept: "application/json",
            Origin: "http://localhost:3000",
        };

        const defaults: UseFetchOptions<T> = {
            key: toValue(url),
            headers,
        };

        console.log("ini use Auth :", useAuth.getToken());

        const token = useAuth.getToken();
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        const params = defu(options, defaults);

        try {
            return await $fetch<T>(url, params);
        } catch (error: any) {
            console.error(error);

            return await $fetch<T>(url, params);
        }
    }
}

export default FetchFactory;
