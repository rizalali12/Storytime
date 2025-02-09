<script setup lang="ts"></script>

<template>
    <div>
        <div>
            <input
                type="text"
                name="search-bar"
                id=""
                placeholder="Search story"
                class="searchbar"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.searchbar {
    max-width: 1062px;
    width: 100%;
    height: 80px;
    margin: 0px;
    border-radius: 8px;
    border: 2px solid #cccccc;
    font-family: "DM Sans";
    font-size: 24px;
    font-weight: 400;
    padding-left: 30px;

    &::placeholder {
        font-size: 24px;
        font-weight: 400;
        display: flex;
        background-image: url("@/assets/icons/iconoir_search.svg");
        background-repeat: no-repeat;
        background-position: right;
        margin-right: 30px;
        padding-right: 30px;
        color: black;
    }
}
</style>
