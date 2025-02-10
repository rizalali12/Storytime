<script lang="ts" setup>
const showPassword = ref(false);
const props = defineProps({
    placeholder: {
        type: String,
    },
    variant: {
        type: String as PropType<"form" | "password">,
        default: "password",
    },
});

const togglePassword = () => {
    showPassword.value = !showPassword.value;
};
</script>

<template>
    <div>
        <div :class="variant" v-if="variant === 'password'">
            <input
                :type="showPassword ? 'text' : 'password'"
                class="password__input"
                :placeholder="placeholder"
            />
            <Icon
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
</template>

<style lang="scss" scoped>
.password {
    position: relative;
    &__input {
        padding: 24px 30px;
        max-width: 577px;
        width: 100%;
        height: 71px;
        border-radius: 8px;
        margin-top: 20px;
        border: 2px solid #cccccc;
    }

    &__icon {
        position: absolute;
        top: 50%;
        right: 30px;
        transform: translateY(-20%);
        cursor: pointer;
        font-size: 30px;
    }
}
</style>
