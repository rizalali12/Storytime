<script lang="ts" setup>
import { UiButton } from "#components";

const login = ref(false);
const logoutModal = ref(false);

const userLogin = () => {
    if (authStore.getUser().username) {
        login.value = true;
    }
};

const toggleLogout = () => {
    logoutModal.value = !logoutModal.value;
};

const authStore = useAuthStore();
// console.log("ini authStore data: ", authStore.getUser());

const clearUser = async () => {
    authStore.clearUser();
    window.location.reload();

    // try {
    //     const logout: any = await $fetch(
    //         "https://timestory.tmdsite.my.id/api/logout",
    //         {
    //             method: "POST",
    //             headers: {
    //                 Authorization: `Bearer 123`,
    //             },
    //             body: {},
    //         }
    //     );
    //     authStore.clearUser();
    // } catch (error) {
    //     throw new Error("error saat logout");
    // }
};

userLogin();
</script>

<template>
    <div class="wrapperr">
        <div class="container navbar-expand-lg">
            <div class="navbar">
                <UiLogo />
                <div class="navbar__login">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div
                        class="sidebar offcanvas offcanvas-end"
                        tabindex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div class="offcanvas-header border-bottom">
                            <button
                                type="button"
                                class="btn-close btn-close-black text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div
                            class="d-flex align-items-center justify-content-center gap-2"
                        >
                            <template v-if="login === false">
                                <div class="d-flex gap-4">
                                    <UiButton
                                        title="Register"
                                        variant="outlined"
                                        url="/signup"
                                    />
                                    <UiButton title="Login" url="/login" />
                                </div>
                            </template>
                            <template v-if="login === true">
                                <div class="wrapper-logout" v-if="logoutModal">
                                    <div
                                        class="modal-logout d-flex align-items-center justify-content-center flex-column"
                                    >
                                        <div
                                            class="modal__header d-flex align-items-center flex-column gap-3"
                                        >
                                            <h1 class="modal__title m-0 p-0">
                                                Logout
                                            </h1>
                                            <p class="modal__text m-0 p-0">
                                                Are you sure want to logout?
                                            </p>
                                        </div>
                                        <div
                                            class="modal__button d-flex gap-4 pt-4"
                                        >
                                            <UiButton
                                                title="Cancel"
                                                variant="outlined"
                                                @click="toggleLogout"
                                            />
                                            <UiButton
                                                title="Logout"
                                                variant="primary"
                                                @click="clearUser"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src="@/assets/icons/profile_picture.png"
                                    alt=""
                                    srcset=""
                                    class="navbar__login-picture"
                                />
                                <div class="dropdown">
                                    <button
                                        class="dropdown__button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <h1 class="navbar__login-name">
                                            {{ authStore.getUser().username }}
                                        </h1>
                                        <icon
                                            name="ri:arrow-down-s-line"
                                            class="icon"
                                        />
                                    </button>
                                    <ul
                                        class="dropdown-menu translate-middle-x"
                                    >
                                        <li>
                                            <a
                                                class="dropdown-item"
                                                href="/mystory"
                                                >My Profile</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                class="dropdown-item"
                                                @click="toggleLogout"
                                                >Logout</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
    </div>
</template>

<style lang="scss" scoped>
.wrapperr {
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
    background-color: white;
    padding: 0px;
}

.wrapper-logout {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
    top: 0;
    left: 0;
    position: fixed;
}

.modal-logout {
    max-width: 401px;
    width: 100%;
    height: 283px;
    position: absolute;
    background-color: white;
    top: 380px;
    right: 39%;
    border-radius: 8px;
}

.modal {
    &__title {
        font-family: "DM Sans";
        font-weight: 700;
        font-size: 36px;
        line-height: 46px;
        letter-spacing: 0%;
        text-align: center;
        color: #222222;
    }

    &__text {
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 0%;
        text-align: center;
        color: #222222;
    }
}

.navbar {
    padding: 20px 0px;

    &__login {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    &__login-picture {
        width: 65px;
        height: 65px;
        border-radius: 50%;
    }

    &__login-name {
        font-family: "DM Sans";
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: #222222;
    }
}

.dropdown {
    display: flex;

    &__button {
        border: none;
        background-color: white;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 5px;
    }
}

.icon {
    transform: translateY(-20%);
}

.dropdown-menu {
    border-radius: 0px 8px 8px 8px;
    border: none;
    box-shadow: 0 14px 74px -25px #00000073;
    top: 55px;
}

.dropdown-item {
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: #222222;
    padding: 16px 71px 16px 20px;
    cursor: pointer;

    &:active {
        background-color: white;
    }
}

hr {
    margin: 0;
}

@media (max-width: 991px) {
    .sidebar {
        backdrop-filter: blur(10px);
    }
    .gap-4 {
        padding-top: 20px;
    }
}
</style>
