// Import repository modules

import AuthModule from "~/repository/modules/auth";
import CategoriesModule from "~/repository/modules/categories";

// interface IApiInstance {
//   auth: AuthModule
//   profile: ProfileModule
//   admin: AdminModule
// }

export default defineNuxtPlugin(() => {
    // An object containing all repositories we need to expose
    const modules = {
        auth: new AuthModule(),
        categories: new CategoriesModule(),
    };

    return {
        provide: {
            api: modules,
        },
    };
});
