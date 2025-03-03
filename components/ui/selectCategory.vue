<script lang="ts" setup>
const selectedValue = ref("");
const data: any = await $fetch(
    "https://timestory.tmdsite.my.id/api/categories"
);
</script>

<template>
    <div class="wrapper">
        <label class="label">Category</label>
        <div class="select-container">
            <select
                name="category"
                id="category"
                class="select"
                :class="{ 'select--placeholder': !selectedValue }"
            >
                <option value="" disabled selected hidden>
                    Select your category
                </option>
                <option
                    v-for="(data, index) in data.data"
                    :key="index"
                    :value="data.name"
                    :id="data.id"
                >
                    {{ data.name }}
                </option>
                <!-- <option value="Horror">Horror</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option> -->
            </select>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    padding-bottom: 30px;
}

.label {
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 18px;
    color: #4b4b4b;
    line-height: 23px;
    padding-bottom: 20px;
}

.select {
    width: 100%;
    min-height: 71px;
    border-radius: 8px;
    border: 2px solid #cccccc;
    padding: 0 30px;
    appearance: none;
    background-color: white;
    cursor: pointer;
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #4b4b4b;

    &:focus {
        // outline: none;
    }

    &--placeholder {
        color: #4b4b4b;
    }

    option {
        padding: 16px;
        min-height: 40px;
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 18px;
        background-color: white;
        color: #4b4b4b;

        &:hover {
            background-color: #f5f5f5;
        }

        &[disabled] {
            color: #8b8b8b;
        }
    }
}
</style>
