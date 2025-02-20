<script lang="ts" setup></script>

<template>
    <div class="container">
        <div class="wrapper">
            <button class="button active">1</button>
            <button class="button">2</button>
            <button class="button">3</button>
            <button class="button">...</button>
            <button class="button">10</button>
            <button class="button">Next</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.wrapper {
    display: flex;
    gap: 20px;

    @media (max-width: 600px) {
        // Jika layar kecil, jadi 1 kolom ke bawah
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}

.button {
    border: none;
    padding: 16px 30px;
    border-radius: 8px;
    background-color: #f0f5ed;
    color: #222222;
    font-family: "DM Sans";
    font-size: 28px;
    line-height: 38px;
    transition: 0.4s;

    &:hover {
        background-color: #466543;
        color: #ffffff;
    }
}

.active {
    border: none;
    padding: 16px 30px;
    border-radius: 8px;
    background-color: #466543;
    color: white;
    font-family: "DM Sans";
    font-size: 28px;
    line-height: 38px;
    transition: 0.4s;
}
</style>
