<script lang="ts" setup></script>

<template>
    <div class="wrapper">
        <div class="content">
            <h1 class="content__title">Write your story</h1>
            <p class="content__paragraf">
                Share your unique voice with the world – start writing your
                story today!
            </p>
            <UiButton title="Write Story" url="/mystory/create" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    // z-index: 11;
    padding-top: 20px;
}
.content {
    top: 110px;
    position: sticky;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    width: 546px;
    max-height: 2000px;
    border: 1px solid #cccccc;
    padding: 80px 78px;
    border-radius: 8px;
    margin-top: 60px;

    &__title {
        font-family: "DM Sans";
        font-size: 36px;
        font-weight: 700;
        line-height: 46px;
        color: #222222;
    }

    &__paragraf {
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: #222222;
    }
}

@media (max-width: 1548px) {
    .content {
        width: 100%;
    }
}
</style>
