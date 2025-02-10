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
                    <label for="" class="form__title">Name</label>
                    <div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your name"
                            class="form__input"
                        />
                    </div>
                </div>
                <div class="form">
                    <label for="" class="form__title">Username</label>
                    <div>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter your username"
                            class="form__input"
                        />
                    </div>
                </div>
                <div class="form">
                    <label for="" class="form__title">Email</label>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your name"
                            class="form__input"
                        />
                    </div>
                </div>
                <div class="form">
                    <label for="" class="form__title">Password</label>
                    <div class="form__input-container">
                        <UiFormInput
                            placeholder="Enter your chosen password"
                            variant="password"
                        />
                    </div>
                </div>
                <div class="form">
                    <label for="" class="form__title">Confirm Password</label>
                    <div class="form__input-container">
                        <UiFormInput
                            placeholder="Re-enter your chosen password"
                            variant="password"
                        />
                    </div>
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

    &__kiri {
        width: 960px;
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
}

.heading {
    margin-left: 144px;

    &__title {
        margin-bottom: 50px;
        font-family: "DM Sans";
        font-weight: 700;
        font-size: 44px;
        line-height: 58px;
        width: 500px;
        margin-top: 77px;
    }
}

.container__kanan {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.form {
    margin: 0px;

    &__title {
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: #4b4b4b;
    }

    &__input {
        padding: 24px 30px;
        border: 2px solid #cccccc;
        width: 577px;
        height: 71px;
        border-radius: 8px;
        // margin-top: 20px;
    }

    &::placeholder {
        color: #4b4b4b;
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
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
