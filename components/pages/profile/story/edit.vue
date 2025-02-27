<script lang="ts" setup></script>

<template>
    <div class="container">
        <div class="header d-flex align-items-center">
            <NuxtLink to="/mystory" class="link">
                <Icon name="ri:arrow-left-line" class="header__icon" />
            </NuxtLink>
            <h1 class="header__title">Edit Story</h1>
        </div>
        <div class="form">
            <UiFormInput
                variant="form-black"
                placeholder="Enter a story title"
                label="Title"
            />
            <UiFormInput
                variant="form-black"
                placeholder="Select a category"
                label="Category"
            />
        </div>
        <div class="d-flex flex-column">
            <ClientOnly>
                <CKEditor />
            </ClientOnly>
        </div>

        <label class="label-image">Cover Image</label>
        <div class="wrapper-image">
            <input
                type="file"
                class="wrapper-image__input"
                style="display: none"
                id="image"
                accept="image/png, image/jpg"
            />
            <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
            >
                <icon name="ri:close-large-fill" class="close__icon"></icon>
            </button>
            <img
                src="@/assets/icons/photo-edit.png"
                class="wrapper-image__photo"
                alt=""
            />
            <!-- <img src="@/assets/icons/Vector (1).png" alt="" />
            <p class="wrapper-image__text">Choose Image</p> -->
        </div>

        <div class="wrapper-button">
            <UiButton title="Cancel" variant="outlined" />
            <UiButton title="Update Story" variant="primary" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.link {
    text-decoration: none;
}

.header {
    padding-top: 115px;
    padding-bottom: 60px;
    gap: 96px;

    @media (max-width: 900px) {
        gap: 20px;
    }

    @media (max-width: 500px) {
        padding-top: 30px;
        padding-bottom: 40px;
    }

    &__icon {
        font-size: 50px;
        color: #222222;
    }
    &__title {
        color: #222222;
        font-family: "Playfair Display";
        font-weight: 600;
        font-size: 44px;
        line-height: 58px;
    }
}

.form {
    width: 100%;
}

.close {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #466543;
    opacity: 1;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 18px;
    right: 18px;

    &__icon {
        color: white;
        font-size: 18px;
    }
}

.wrapper-button {
    display: flex;
    gap: 41px;
    padding-top: 60px;
}

.label {
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #4b4b4b;
    padding-bottom: 20px;
}

.label-image {
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #4b4b4b;
    padding-bottom: 20px;
    padding-top: 30px;
}

.wrapper-image {
    max-width: 500px;
    height: 400px;
    border-radius: 8px;
    border: 2px solid #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    position: relative;

    &__text {
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #4b4b4b;
        margin: 0;
    }

    &__photo {
        max-width: 500px;
        width: 100%;
        height: 400px;
        border-radius: 8px;
    }
}
</style>
