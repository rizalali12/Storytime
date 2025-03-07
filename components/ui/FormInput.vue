<script lang="ts" setup>
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import type { PropType } from "vue";

const showPassword = ref(false);
const props = defineProps({
    placeholder: {
        type: String,
    },
    variant: {
        type: String as PropType<
            "form" | "password" | "text-area" | "form-black" | "form-story"
        >,
        default: "password",
    },
    label: {
        type: String,
        default: null,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    variantIcon: {
        type: String as PropType<"true" | "false">,
        default: "false",
    },
    elname: {
        type: String,
        default: "name",
    },
});

const togglePassword = () => {
    showPassword.value = !showPassword.value;
};
</script>

<template>
    <div>
        <div v-if="variant === 'password'">
            <label for="" class="form__title">{{ label }}</label>
            <div class="password">
                <Field
                    :name="elname"
                    class="password__input"
                    :placeholder="placeholder"
                    v-slot="{ field, errorMessage }"
                >
                    <input
                        v-bind="field"
                        :placeholder="placeholder"
                        :type="showPassword ? 'text' : 'password'"
                        class="form__input"
                        :class="{ 'border-red': errorMessage }"
                        :disabled="disabled"
                    />
                </Field>
                <Icon
                    v-if="variantIcon === 'true'"
                    :name="
                        showPassword
                            ? 'material-symbols:visibility-off-outline'
                            : 'material-symbols:visibility-outline-rounded'
                    "
                    @click="togglePassword"
                    class="password__icon"
                ></Icon>
            </div>
            <ErrorMessage :name="elname" class="error-message" />
        </div>
    </div>
    <div>
        <div v-if="variant === 'form'">
            <label for="" class="form__title">{{ label }}</label>
            <div>
                <Field
                    :type="elname"
                    :name="elname"
                    class="form__input"
                    v-slot="{ field, errorMessage }"
                >
                    <input
                        v-bind="field"
                        :placeholder="placeholder"
                        class="form__input"
                        :class="{ 'border-red': errorMessage }"
                        :disabled="disabled"
                    />
                </Field>
            </div>
            <ErrorMessage :name="elname" class="error-message" />
        </div>
        <div v-if="variant === 'form-story'">
            <label for="" class="form__title">{{ label }}</label>
            <div>
                <input
                    type="text"
                    name=""
                    id=""
                    :placeholder="placeholder"
                    class="form__input-story"
                    :disabled="disabled"
                />
            </div>
        </div>
        <div v-if="variant === 'form-black'">
            <label for="" class="form__title">{{ label }}</label>
            <div>
                <input
                    type="text"
                    name=""
                    id=""
                    :placeholder="placeholder"
                    class="form__inputt black"
                    :disabled="disabled"
                />
            </div>
        </div>
        <div v-if="variant === 'text-area'">
            <label for="" class="form__title">{{ label }}</label>
            <div>
                <textarea name="" id="" class="text-area">{{
                    placeholder
                }}</textarea>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.password {
    display: flex;
    flex-direction: column;
    position: relative;

    &__input {
        padding: 24px 30px;
        max-width: 577px;
        width: 100%;
        height: 71px;
        border-radius: 8px;
        margin-top: 20px;
        border: 2px solid #cccccc;
        margin-bottom: 30px;
    }

    &__icon {
        position: absolute;
        top: 41%;
        right: 20px;
        transform: translateY(-30%);
        cursor: pointer;
        font-size: 30px;
    }
}

.error-message {
    color: red;
}

.border-red {
    border: 2px solid red !important;
}

.disabled {
    pointer-events: none;
    background-color: #f9fbf8;
}

.form {
    margin: 0px;

    &__title {
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #4b4b4b;
    }

    &__input {
        padding: 24px 30px;
        border: 2px solid #cccccc;
        max-width: 577px;
        width: 100%;
        min-height: 71px;
        border-radius: 8px;
        margin-top: 20px;
        height: 100%;
        margin-bottom: 30px;

        &:focus {
            border: 2px solid #222222 !important;
        }
    }

    &__inputt {
        padding: 24px 30px;
        border: 2px solid #cccccc;
        // max-width: 577px;
        width: 100%;
        min-height: 71px;
        border-radius: 8px;
        margin-top: 20px;
        height: 100%;
        margin-bottom: 30px;

        :focus {
            border: 2px solid #222222 !important;
        }
    }

    &__input-story {
        padding: 24px 30px;
        border: 2px solid #cccccc;
        width: 100%;
        min-height: 71px;
        border-radius: 8px;
        margin-top: 20px;
        height: 100%;
        margin-bottom: 30px;

        :focus {
            border: 2px solid #222222 !important;
        }

        &::placeholder {
            color: #4b4b4b;
            font-family: "DM Sans";
            font-weight: 400;
            font-size: 18px;
            line-height: 23px;
        }
    }

    &::placeholder {
        color: #4b4b4b;
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
    }
}

.black {
    &::placeholder {
        color: #222222;
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
    }
}

.story {
    color: #4b4b4b;
}

.text-area {
    margin-top: 20px;
    border: 2px solid #cccccc;
    max-width: 700px;
    width: 100%;
    // max-height: 400px;
    overflow: hidden;
    height: 117px;
    border-radius: 8px;
    padding: 24px 30px;
    resize: none;
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #222222;
}
</style>
