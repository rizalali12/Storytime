<template>
    <div class="container">
    <div class="navbar">
        <UiLogo />
        <div class="navbar__login">
            <UiButton
            title="Register"
            variant="outlined"
            url="/signup" />
            <UiButton
            title="Login" 
            url="/login"
            />
        </div>
    </div>
</div>
    <hr>
</template>

<script>
import { UiButton } from '#components';



</script>
<style lang="scss" scoped>
.navbar {

    &__login {
        display: flex;
        gap: 30px;
    }
}
</style>