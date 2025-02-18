<script>
import { UiButton } from "#components";
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <div class="navbar">
                <UiLogo />
                <div class="navbar__login">
                    <!-- <UiButton title="Register" variant="outlined" url="/signup" />
                  <UiButton title="Login" url="/login" /> -->

                    <img
                        src="@/assets/icons/profile_picture.png"
                        alt=""
                        srcset=""
                        class="navbar__login-picture"
                    />
                    <div class="dropdown">
                        <h1 class="navbar__login-name">Iswara</h1>
                        <button
                            class="dropdown__button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <icon name="ri:arrow-down-s-line" class="icon" />
                        </button>
                        <ul class="dropdown-menu translate-middle-x">
                            <li>
                                <a class="dropdown-item" href="/mystory"
                                    >My Profile</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <hr />
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
    background-color: white;
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
    }
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

    &:active {
        background-color: white;
    }
}

hr {
    margin: 0;
}
</style>
