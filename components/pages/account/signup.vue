<script lang="ts" setup>
import { UiLogo } from "#components";
import { ErrorMessage, Form } from "vee-validate";
import * as yup from "yup";

const route = useRouter();
const errorMessage = ref("");
const authStore = useAuthStore();
const loading = ref(false);
const useToast = useToastStore();

const register = async (values: any, { resetForm }: any) => {
    try {
        loading.value = true;
        const response: any = await $fetch(
            "https://timestory.tmdsite.my.id/api/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: {
                    name: values.name,
                    username: values.username,
                    email: values.email,
                    password: values.password,
                    password_confirmation: values.password_confirmation,
                },
            }
        );
        if (response.token) {
            console.log("register berhasil", response); // Process the response
            route.push("/");
            authStore.setUser(response.user);
            useToast.addToast("You have successfully registered");
        }
    } catch (error: any) {
        console.error("fetch error");
        loading.value = false;
        console.log(error);

        if (error.response) {
            console.log(error.response);
            var result = Object.keys(error.response._data.errors).map((key) => [
                error.response._data.errors[key],
            ]);

            result.forEach((item) => {
                console.log("ini item:", item);
                item.forEach((j) => {
                    console.log("ini j:", j);
                    // errorMessage.value = j[0];
                    errorMessage.value = result
                        .map((item) => item.map((j) => j[0]).join("<br>"))
                        .join("<br>");
                });
            });
        }
    }

    console.log(values);
};

const schema = yup.object({
    password: yup
        .string()
        .required()
        .min(8)
        .matches(
            /^(?=.*\d)(?=.*[!@#$%^&*])/,
            "password must include a number and a special character"
        ),
    password_confirmation: yup
        .string()
        .required("password confirmation is required")
        .oneOf([yup.ref("password")], "password does not match"),
    email: yup.string().required().email(),
    name: yup.string().required(),
    username: yup.string().required("username is required field"),
});

const user = ref({
    name: "",
});

console.log(yup);
</script>

<template>
    <div class="container">
        <div class="container__hidden">
            <UiLogo />
        </div>
        <div class="container__kiri">
            <div class="container__heading">
                <div class="container__logo">
                    <UiLogo />
                </div>
                <h1 class="container__title">
                    Join the World’s Most-Loved Social Storytelling Platform!
                </h1>
                <p class="container__paragraf">
                    Create an account to explore interesting articles, connect
                    with like-minded people, and share your own stories.
                </p>
            </div>
            <img
                src="@/assets/icons/undraw_on_the_office_re_cxds 1.png"
                alt=""
                srcset=""
                class="container__gambar"
            />
        </div>
        <div class="heading">
            <div class="heading__form">
                <h2 class="heading__title">Create Account</h2>
            </div>

            <Form @submit="register" :validationSchema="schema">
                <div class="container__kanan">
                    <div class="form">
                        <UiFormInput
                            variant="form"
                            placeholder="Enter your name"
                            label="Name"
                            elname="name"
                        />
                    </div>
                    <div class="form">
                        <UiFormInput
                            variant="form"
                            placeholder="Enter your username"
                            label="Username"
                            elname="username"
                        />
                    </div>
                    <div class="form">
                        <UiFormInput
                            variant="form"
                            placeholder="Enter your email"
                            label="Email"
                            elname="email"
                        />
                    </div>
                    <div class="form">
                        <UiFormInput
                            variant="password"
                            placeholder="Enter your chosen password"
                            label="Password"
                            variantIcon="true"
                            elname="password"
                        />
                    </div>
                    <div class="form">
                        <UiFormInput
                            variant="password"
                            placeholder="Re-enter your chosen password"
                            label="Confirm Password"
                            variantIcon="true"
                            elname="password_confirmation"
                        />
                    </div>
                </div>
                <p v-if="errorMessage" v-html="errorMessage"></p>
                <div class="createaccount">
                    <UiButton title="Create Account" />
                </div>
                <div v-if="loading" class="wrapper-loader">
                    <div class="loader"></div>
                </div>
            </Form>

            <p class="">
                Already have an account?
                <NuxtLink to="/login" class="login">Login</NuxtLink>
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    margin: 0px;

    @media (max-width: 1500px) {
        justify-content: center;
    }

    &__hidden {
        display: none;
        position: absolute;
        top: 20px;
        left: 30px;

        @media (max-width: 1500px) {
            display: block;
        }
    }
    &__kiri {
        max-width: 960px;
        min-width: 960px;
        border-radius: 8px;
        margin-top: 20px;
        margin-left: 15px;
        background-color: #f0f5ed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media (max-width: 1500px) {
            display: none;
        }
    }

    &__heading {
        margin-left: 63px;
        margin-right: 62px;
    }

    &__logo {
        margin-top: 30px;
        margin-bottom: 70px;
    }

    &__title {
        font-size: 60px;
        font-family: "Playfair Display";
        font-weight: 700;
        line-height: 74px;
        margin-bottom: 40px;
        color: #222222;
    }

    &__paragraf {
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 28px;
        line-height: 38px;
    }

    &__gambar {
        margin-top: 15px;
        margin-left: 22px;
        margin-right: 23px;
    }

    &__kanan {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
}

.heading {
    margin-left: 144px;
    // background-color: blue;
    width: 577px;

    @media (max-width: 1500px) {
        max-width: 577px;
        width: 100%;
        margin-left: 10px;
        padding-top: 30px;
    }

    &__title {
        margin-bottom: 50px;
        font-family: "DM Sans";
        font-weight: 700;
        font-size: 44px;
        line-height: 58px;
        margin-top: 77px;
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

.form__input-container {
    position: relative;
}

.password__icon {
    position: absolute;
    right: 10px;
    top: 50%;
    cursor: pointer;
    transform: translateY(-50%);
}

.confirmPassword__icon {
    position: absolute;
    right: 10px;
    top: 50%;
    cursor: pointer;
    transform: translateY(-50%);
    font-size: 30px;
}

.createaccount {
    margin-top: 16px;
    margin-bottom: 42px;
}

.login {
    text-decoration: none;
    font-family: "DM Sans";
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #466543;
    margin-left: 10px;
}
</style>
