<script lang="ts" setup></script>

<template>
    <div class="container">
        <div>
            <UiSectionHeader title="More Categories" />
        </div>
        <div class="row">
            <div class="col-2">
                <UiCardCategories title="Adventure" />
            </div>
            <div class="col-2">
                <UiCardCategories title="Comedy" />
            </div>
            <div class="col-2">
                <UiCardCategories title="Drama" />
            </div>
            <div class="col-2">
                <UiCardCategories title="Fantasy" />
            </div>
            <div class="col-2">
                <UiCardCategories title="Horror" />
            </div>
            <div class="col-2">
                <UiCardCategories title="Romance" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    margin-top: 120px;
}

// .categories {
//     padding-top: 40px;
//     display: flex;
// gap: 30px;
// }
</style>
