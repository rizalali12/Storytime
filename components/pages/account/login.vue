<script lang="ts" setup>
import { Icon, Title, UiButton, UiLogo } from "#components";
import { Form } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const errorMessage = ref("");
const loading = ref(false);
const useToast = useToastStore();
const { $api } = useNuxtApp();
const useAuth = useAuthStore();
const formElem = document.getElementById("formElem");

console.log(formElem);

const login = async (values: any, { resetForm }: any) => {
    try {
        loading.value = true;
        const response = await $api.auth.login({
            body: {
                username_or_email: values.username_or_email,
                password: values.password,
            },
        });
        if (response.token) {
            // console.log("login berhasil", response);
            // console.log("authStore: ", authStore);

            useAuth.setUser(response.user);
            useAuth.setToken(response.token);
            router.push("/");
            useToast.addToast("You have successfully logged in");
        }
    } catch (error: any) {
        console.error(error.response);
        if (error.response) {
            const messageError = error.response._data.message
                ? "Wrong username/email or password"
                : "";
            errorMessage.value = messageError;
        }
        loading.value = false;

        //todo map error message
    }
};

const schema = yup.object({
    password: yup.string().required(),
    username_or_email: yup
        .string()
        .required("username or email is a required field"),
});
</script>

<template>
    <div class="containerr">
        <div class="heading">
            <div class="container__logo">
                <UiLogo />
            </div>
            <div class="spasi"></div>
            <div class="heading__form">
                <h1 class="heading__title fw-bold">Login</h1>
            </div>

            <Form @submit="login" :validationSchema="schema" id="formElem">
                <div class="form">
                    <div class="form__container">
                        <UiFormInput
                            variant="form"
                            placeholder="Enter your username or email"
                            label="Username/Email"
                            elname="username_or_email"
                        />
                    </div>
                    <br />
                    <div class="form">
                        <UiFormInput
                            variannt="password"
                            placeholder="Enter your chosen password"
                            label="Password"
                            variantIcon="true"
                            elname="password"
                        />
                    </div>
                    <p class="text-danger" v-if="errorMessage">
                        {{ errorMessage }}
                    </p>
                    <div class="button__login">
                        <UiButton title="Login" :isLoading="loading" />
                        <div v-if="loading" class="wrapper-loader">
                            <div class="loader"></div>
                        </div>
                    </div>
                </div>
            </Form>
            <p>
                Don't have an account?
                <NuxtLink to="/signup" class="register">Register</NuxtLink>
            </p>
        </div>

        <div class="kanan">
            <div class="kanan__wrapper">
                <div class="kanan__text">
                    <h2 class="kanan__title">Welcome Back to Story Time!</h2>
                    <h3 class="kanan__paragraf">
                        Dive back into captivating stories, follow your favorite
                        authors, and continue sharing your own tales.
                    </h3>
                    <img
                        src="@/assets/icons/undraw_work_from_anywhere_re_s2i6 1.png"
                        alt=""
                        srcset=""
                        class="kanan__gambar"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.containerr {
    margin: 0;
    padding-top: 20px;
    padding-right: 20px;
    padding-left: 219px;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    gap: 200px;
    width: 100%;

    @media (max-width: 1371px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    @media (max-width: 1000px) {
        padding-left: 30px;
    }
}

.wrapper-loader {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
    top: 0;
    left: 0;
    position: fixed;
}

.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid rgb(211, 208, 208);
    border-top: 4px solid blue;
    animation: 1s spin linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.container {
    &__logo {
        position: absolute;
        left: 78px;
        top: 50px;

        @media (max-width: 647px) {
            top: 65px;
            left: 40px;
        }
    }
}

.form {
    max-width: 577px;
    &__container {
        max-width: 577px;
    }
}
.spasi {
    margin-bottom: 100px;
}

.heading {
    margin-top: 173px;
    // padding-left: 219px;
    // background-color: red;
    width: 577px;

    @media (max-width: 1371px) {
        margin-top: 50px;
    }

    @media (max-width: 647px) {
        width: 100%;
    }

    &__form {
        font-family: "DM Sans";
        font-weight: 700;
        font-size: 44px;
        line-height: 58px;
        color: #222222;
    }

    &__title {
        margin-bottom: 50px;
    }
}

.button__login {
    margin-top: 23px;
    margin-bottom: 42px;
    display: flex;
    gap: 40px;
    align-items: center;
}

.register {
    text-decoration: none;
    font-family: "DM Sans";
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #466543;
    margin-left: 10px;
}

.kanan {
    @media (max-width: 1371px) {
        display: none;
    }
    &__wrapper {
        max-width: 940px;
        min-height: 100%;
        background-color: #f0f5ed;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
    }

    &__title {
        font-family: "Playfair Display";
        margin-left: 137px;
        margin-top: 114px;
        margin-right: 274px;
        font-weight: 700;
        font-size: 60px;
        line-height: 74px;
        color: #222222;
    }

    &__paragraf {
        font-family: "DM Sans";
        font-weight: 400;
        size: 28px;
        line-height: 38px;
        color: #4b4b4b;
        text-shadow: 0 4px 4px #00000040;
        margin-left: 137px;
        margin-right: 137px;
        margin-top: 40px;
    }

    &__gambar {
        margin-top: 62px;
        width: 90%;
    }
}
</style>
