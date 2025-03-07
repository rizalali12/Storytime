<script lang="ts" setup>
import FilePondUploader from "~/components/FilePondUploader.vue";

const inputImage = ref<any>(null);
// const previewImage = ref<any>(null);
const useToast = useToastStore();
const previewImages = ref<string[]>([]);

const uploadImage = () => {
    if (inputImage.value) {
        inputImage.value.click();
    }
};

const toast = () => {
    useToast.addToast("Successfully post a story");
};

const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    console.log("ini addalah target :", target.files);

    if (files) {
        if (files.length) {
            previewImages.value = [];
            console.log("ini jalan", FileList);
        }
        Array.from(files).forEach((file: File) => {
            // Explicitly define file as 'File'
            previewImages.value.push(URL.createObjectURL(file));
        });
    }
};
</script>

<template>
    <div class="container">
        <div class="header d-flex align-items-center">
            <NuxtLink to="/mystory" class="link">
                <Icon name="ri:arrow-left-line" class="header__icon" />
            </NuxtLink>
            <h1 class="header__title">Write Story</h1>
        </div>

        <UiFormInput
            variant="form-story"
            placeholder="Enter a story title"
            label="Title"
        />

        <UiSelectCategory />

        <div class="d-flex flex-column">
            <label class="label">Content</label>
            <ClientOnly>
                <CKEditor />
            </ClientOnly>
        </div>

        <label class="label-image">Cover Image</label>
        <div class="wrapper-image" @click="uploadImage">
            <input
                type="file"
                class="wrapper-image__input"
                style="display: none"
                ref="inputImage"
                accept="image/png, image/jpg"
                @change="handleFileChange"
                multiple
            />
            <div v-if="previewImages.length" class="preview-image">
                <img
                    v-for="(image, index) in previewImages"
                    :key="index"
                    :src="image"
                    alt="Preview Image"
                    class="preview"
                />
            </div>
            <template v-else>
                <img src="@/assets/icons/Vector (1).png" alt="" />
                <p class="wrapper-image__text">Choose Image</p>
            </template>
        </div>

        <div class="wrapper-button">
            <UiButton title="Cancel" variant="outlined" url="/mystory" />
            <UiButton
                title="Post Story"
                variant="primary"
                url="/mystory"
                @click="toast"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.link {
    text-decoration: none;
}

.preview {
    max-width: 500px;
    height: 400px;
    border-radius: 8px;
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
    cursor: pointer;

    &__text {
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #4b4b4b;
        margin: 0;
    }

    &__image-else {
        display: flex;
        flex-direction: column;
        gap: 25px;
        background-color: red;
    }
}

.preview-image {
    display: flex;
    gap: 30px;
    width: 100%;
}
</style>
