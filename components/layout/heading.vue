<script>

</script>

<template>
    <div class="container">
    <div class="heading">
        <div class="heading__container">
        <h1 class="heading__title fw-bold">Welcome to Storytime</h1>
        <p class="heading__paragraf">The world's most-loved social storytelling platform. Story time connects a global community of 90 million readers and writers through the power of story  </p>
        </div>
        <div>
            <input type="text" name="search-bar" id="" placeholder="Search story" class="searchbar">
        </div>
        <div>
            <img src="@/assets/icons/image 14.png" alt="" srcset="" class="heading__gambar">
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.heading {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    max-width: 1412px;

    &__title{
        margin: 0;
        font-weight: 400;
        font-family: 'Playfair Display';
        color: #222222;
        font-size: 60px;
        text-shadow: 0px 4px 4px #00000040;
        line-height: 74px;
    }

    &__container{
        display: flex;
        flex-direction: column;
        gap: 30px;
        text-align: center;
    }

    &__paragraf{
        font-size: 24px;
        font-style: 'DM Sans';
        text-align: center;
        font-weight: 400;
        line-height: 32px;
        margin-bottom: 40px;
    }

    &__gambar{
    margin-top: 40px;
    }
}

.searchbar {
    width: 1062px;
    height: 80px;
    margin: 0px;
    border-radius: 8px;
    border: 2px solid #CCCCCC;
    font-family: 'DM Sans';
    font-size: 24px;
    font-weight: 400;
    padding-left: 30px;
    
    &::placeholder{
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