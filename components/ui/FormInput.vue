<script lang="ts" setup>
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
        type: String,
        default: null,
    },
    variantIcon: {
        type: String as PropType<"true" | "false">,
        default: "false",
    },
});

const togglePassword = () => {
    showPassword.value = !showPassword.value;
};
</script>

<template>
    <div>
        <div class="password" v-if="variant === 'password'">
            <label for="" class="form__title">{{ label }}</label>
            <input
                :type="showPassword ? 'text' : 'password'"
                class="password__input"
                :placeholder="placeholder"
            />
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
    </div>
    <div>
        <div v-if="variant === 'form'">
            <label for="" class="form__title">{{ label }}</label>
            <div>
                <input
                    type="text"
                    name=""
                    id=""
                    :placeholder="placeholder"
                    class="form__input"
                    :class="disabled"
                />
            </div>
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
                    :class="disabled"
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
                    :class="disabled"
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
    position: relative;
    display: flex;
    flex-direction: column;

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
        top: 50%;
        right: 30px;
        transform: translateY(-30%);
        cursor: pointer;
        font-size: 30px;
    }
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
