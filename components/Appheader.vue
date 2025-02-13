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
                    <h1 class="navbar__login-name">Iswara</h1>
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

hr {
    margin: 0;
}
</style>
