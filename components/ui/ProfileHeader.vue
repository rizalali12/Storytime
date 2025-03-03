<script lang="ts" setup>
const authStore = useAuthStore();
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <div>
                <img
                    src="@/assets/icons/profile_picture.png"
                    alt=""
                    srcset=""
                    class="profile-picture"
                />
            </div>
            <div class="heading">
                <h1 class="heading__title">{{ authStore.getUser().name }}</h1>
                <p class="heading__email">{{ authStore.getUser().email }}</p>
                <p class="heading__about">
                    Avid reader and aspiring writer. Lover of mysteries,
                    thrillers, and sci-fi. Coffee enthusiast and nature
                    explorer. Always on the lookout for new stories and
                    adventures.
                </p>
            </div>
            <PagesProfileModalProfile />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    height: 400px;
    // height: 100%;
    width: 100%;
    background-color: #f0f5ed;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
        height: 100%;
    }
}

.profile-picture {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
}

.heading {
    max-width: 1000px;
    margin: 0;
    &__title {
        margin: 0;
        font-family: "DM Sans";
        font-weight: 700;
        font-size: 36px;
        line-height: 46px;
        color: #222222;
    }

    &__email {
        margin: 0;
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        padding-top: 10px;
        color: #222222;
        padding-bottom: 30px;
    }

    &__about {
        margin: 0;
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        color: #4b4b4b;
    }
}

.container {
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px) {
        flex-direction: column;
        padding-bottom: 40px;
        padding-top: 30px;
    }
}
</style>
