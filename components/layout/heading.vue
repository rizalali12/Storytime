<script></script>

<template>
    <div class="container">
        <div class="col-12">
            <div class="heading">
                <div class="heading__container">
                    <h1 class="heading__title fw-bold">Welcome to Storytime</h1>
                    <p class="heading__paragraf">
                        The world's most-loved social storytelling platform.
                        Story time connects a global community of 90 million
                        readers and writers through the power of story
                    </p>
                    <div class="searchBar">
                        <UiSearchBar />
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

    &__title {
        margin: 0;
        font-weight: 400;
        font-family: "Playfair Display";
        color: #222222;
        font-size: 60px;
        text-shadow: 0px 4px 4px #00000040;
        line-height: 74px;
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
    }

    &__gambar {
        margin-top: 40px;
        max-width: 600px;
        width: 100%;
    }
}
</style>
