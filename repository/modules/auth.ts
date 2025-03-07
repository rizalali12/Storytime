import FetchFactory from "../factory";

class AuthModule extends FetchFactory<any> {
    private RESOURCE = "/auth";

    async login(payload: any) {
        const { body } = payload;

        // const body = payload.body

        return super.call("/api/login", {
            method: "POST",
            body,
        });
    }

    async register(payload: any) {
        const { body } = payload;

        return super.call("/api/register", {
            method: "POST",
            body,
        });
    }
}

export default AuthModule;
