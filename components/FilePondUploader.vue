<!-- <script setup>
import { ref } from "vue";
import vueFilePond from "vue-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css";

// Import FilePond plugins
import FilePondPluginImageEdit from "filepond-plugin-image-edit";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";

// Register plugins
const FilePond = vueFilePond(
    FilePondPluginImagePreview,
    FilePondPluginImageEdit,
    FilePondPluginImageCrop
);

const files = ref([]);

const handleFileProcess = (error, file) => {
    if (!error) {
        console.log("Cropped Image Uploaded:", file.serverId);
    }
};
</script>

<template>
    <FilePond
        v-model="files"
        :allow-multiple="true"
        :image-edit-editor="true"
        :image-edit-allow-edit="true"
        :image-crop-aspect-ratio="'1:1'"
        :image-transform-output-quality="80"
        :server="'/api/upload'"
        @processfile="handleFileProcess"
    />
</template> -->
