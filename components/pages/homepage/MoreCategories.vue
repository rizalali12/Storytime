<script lang="ts" setup></script>

<template>
    <div class="container">
        <div>
            <UiSectionHeader title="More Categories" />
        </div>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-3">
                <UiCardCategories
                    title="Adventure"
                    url="/story?category=adventure"
                />
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-3">
                <UiCardCategories
                    title="Fiction"
                    url="/story?category=fiction"
                />
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-3">
                <UiCardCategories
                    title="Fantasy"
                    url="/story?category=fantasy"
                />
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-3">
                <UiCardCategories title="Drama" url="/story?category=drama" />
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-3">
                <UiCardCategories
                    title="Heartfelt"
                    url="/story?category=heartfelt"
                />
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-3">
                <UiCardCategories
                    title="Mystery"
                    url="/story?category=mystery"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    margin-top: 120px;
}
</style>
