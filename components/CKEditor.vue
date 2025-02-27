<script lang="ts" setup>
// CKEditor element and the styling
import { Ckeditor } from "@ckeditor/ckeditor5-vue";
import "ckeditor5/ckeditor5.css";

// CKEditor plugins
import {
    ClassicEditor,
    Essentials,
    Paragraph,
    Bold,
    Italic,
    Underline,
    Heading,
    Link,
    RemoveFormat,
    List,
} from "ckeditor5";

// CKEditor configuration
const config = ref({
    licenseKey: "GPL",
    plugins: [
        Essentials,
        Paragraph,
        Bold,
        Italic,
        Underline,
        Heading,
        Link,
        RemoveFormat,
        List,
    ],
    toolbar: [
        "heading",
        "bold",
        "italic",
        "underline",
        "link",
        "numberedList",
        "bulletedList",
        "removeFormat",
    ],
    placeholder: "Enter a content here",
    heading: {
        options: [
            {
                model: "paragraph",
                title: "Normal",
                class: "ck-heading_paragraph",
            },
            {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
            },
            {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
            },
            {
                model: "heading3",
                view: "h3",
                title: "Heading 3",
                class: "ck-heading_heading3",
            },
        ],
        defaultHeading: "paragraph", // Set default to "Normal"
    },
});
</script>

<template>
    <Ckeditor :editor="ClassicEditor" :config="config" />
</template>
