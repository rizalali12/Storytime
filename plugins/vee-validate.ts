import { defineNuxtPlugin } from "#app";
import { configure } from "vee-validate";

export default defineNuxtPlugin(() => {
    configure({
        validateOnInput: true, // Validate on input (like `validity: true`)
        validateOnBlur: true, // Validate on blur
    });
});
