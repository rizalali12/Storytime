import FetchFactory from "../factory";

class CategoriesModule extends FetchFactory<any> {
    private RESOURCE = "/categories";

    async categories() {
        return super.call("/api/categories", {
            method: "GET",
        });
    }
}

export default CategoriesModule;
