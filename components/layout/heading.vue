<script lang="ts" setup>
const login = ref(false);
const search = ref("");
const router = useRouter();
const route = useRoute();

const searchStory = (event: any) => {
    if (search.value === "") {
        navigateTo("/");
    } else {
        // This line determines what to use as the search query
        const query =
            typeof event === "object" &&
            event.constructor.name === "KeyboardEvent"
                ? search.value // Use the reactive search value when event is passed
                : event; // Use the value passed directly otherwise

        router.push({
            path: "/story",
            query: { search: query },
        });
    }
};

const userLogin = () => {
    if (authStore.getUser().name) {
        login.value = true;
    }
};

const authStore = useAuthStore();

userLogin();
</script>

<template>
    <div class="container">
        <div class="col-12">
            <div class="heading">
                <div class="heading__container">
                    <template v-if="login === false">
                        <h1 class="heading__title fw-bold">
                            Welcome to Storytime
                        </h1>
                        <p class="heading__paragraf">
                            The world's most-loved social storytelling platform.
                            Story time connects a global community of 90 million
                            readers and writers through the power of story
                        </p>
                    </template>
                    <template v-if="login === true">
                        <h1 class="heading__title-login fw-bold">
                            Hi, {{ authStore.getUser().name }}
                            <br />
                            Welcome to Storytime
                        </h1>
                        <p class="heading__paragraf-login">
                            The world's most-loved social storytelling platform.
                            Story time connects a global community of 90 million
                            readers and writers through the power of story
                        </p>
                    </template>
                    <div @keydown.enter="searchStory" class="searchBar">
                        <UiSearchBar v-model="search" />
                    </div>
                    <div>
                        <img
                            src="@/assets/icons/image 14.png"
                            alt=""
                            srcset=""
                            class="heading__gambar"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.heading {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;

    @media (max-width: 500px) {
        margin-top: 40px;
    }

    &__title {
        margin: 0;
        font-weight: 400;
        font-family: "Playfair Display";
        color: #222222;
        font-size: 60px;
        text-shadow: 0px 4px 4px #00000040;
        line-height: 74px;
    }

    &__title-login {
        margin: 0;
        font-weight: 400;
        font-family: "Playfair Display";
        color: #222222;
        font-size: 60px;
        line-height: 74px;
        text-transform: capitalize;
    }

    &__container {
        display: flex;
        flex-direction: column;
        gap: 30px;
        text-align: center;
    }

    &__paragraf {
        font-size: 24px;
        font-style: "DM Sans";
        text-align: center;
        font-weight: 400;
        line-height: 32px;
        max-width: 84%;
        margin: auto;
    }

    &__paragraf-login {
        font-size: 24px;
        font-style: "DM Sans";
        text-align: center;
        font-weight: 400;
        line-height: 32px;
        max-width: 99%;
        margin: auto;
    }

    &__gambar {
        margin-top: 40px;
        max-width: 600px;
        width: 100%;
    }
}

.wrapper-toast {
    display: flex;
    justify-content: center;
}
</style>
