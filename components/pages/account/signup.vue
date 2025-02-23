<script lang="ts" setup>
import { UiLogo } from "#components";

const showPassword = ref(false);
const showPasswordConfirm = ref(false);
const password = ref("password");

const togglePassword = () => {
    showPassword.value = !showPassword.value;
};

const togglePasswordConfirm = () => {
    showPasswordConfirm.value = !showPasswordConfirm.value;
};
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

            <div class="container__kanan">
                <div class="form">
                    <UiFormInput
                        variant="form"
                        placeholder="Enter your name"
                        label="Name"
                    />
                </div>
                <div class="form">
                    <UiFormInput
                        variant="form"
                        placeholder="Enter your username"
                        label="Username"
                    />
                </div>
                <div class="form">
                    <UiFormInput
                        variant="form"
                        placeholder="Enter your email"
                        label="Email"
                    />
                </div>
                <div class="form">
                    <UiFormInput
                        variant="password"
                        placeholder="Enter your chosen password"
                        label="Password"
                        variantIcon="true"
                    />
                </div>
                <div class="form">
                    <UiFormInput
                        variant="password"
                        placeholder="Re-enter your chosen password"
                        label="Confirm Password"
                        variantIcon="true"
                    />
                </div>
            </div>

            <div class="createaccount">
                <UiButton title="Create Account" url="/" />
            </div>

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
