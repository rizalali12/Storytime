<script lang="ts" setup>
import {  Icon, Title, UiButton, UiLogo } from '#components';

const showPassword = ref(false)
const stories = ref<any>([])

const fetchData = () => {
  stories.value = [
    {
      image: "1.png",
      title: "New Item"
    },
    {
      image: "2.png",
      title: "new item 2"
    }
  ]
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

fetchData()
</script>


<template>
  <div class="container">
    <div class="heading">  
      <div class="container__logo">
        <UiLogo />
      </div>
      <div class="spasi">
      </div>
      <div class="heading__form">
        <h1 class="heading__title fw-bold">Login</h1>
      </div>
        <div class="form">
          <div class="form__container">
          <label for="" class="form__title">Username/Email</label>
          <div>
            <input type="text" id="" class="form__input" placeholder="Enter your username or email">
          </div>
        </div>
        <div class="form">
          <label for="" class="form__title">Password</label>
          <div class="form__container-password">
            <input type="text" id="" class="form__input-password" placeholder="Enter your username or email">
            <Icon :name="showPassword ? 'material-symbols:visibility-off-outline' : 'material-symbols:visibility-outline-rounded'" 
            @click="togglePassword"
            class="password"></Icon>
          </div>
        </div>
        <div class="button__login">
        <UiButton v-for="(story, i) in stories" :key="i" 
        :story="story"
        title="Login"
        url="/"/>
      </div>

        <p>Don't have an account? <NuxtLink to="/signup" class="register">Register</NuxtLink></p>
      </div>
      <div >

      </div>
    </div>

    <div class="kanan">
      <div class="kanan__wrapper">
        <div class="kanan__text">
          <h2 class="kanan__title">Welcome Back to Story Time!</h2>
          <h3 class="kanan__paragraf">Dive back into captivating stories, follow your favorite authors, and continue sharing your own tales.</h3>
          <img src="@/assets/icons/undraw_work_from_anywhere_re_s2i6 1.png" alt="" srcset="" class="kanan__gambar">
        </div>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.container {
  margin: 0;
  margin-top: 20px;
  margin-right: 20px;
  display: flex;
  min-height: 100vh;

  &__logo {
    position:absolute;
    left: 78px;
    top: 50px;
  }
}

.spasi {
  margin-bottom: 100px;
}

.heading {
  margin-top: 173px;
  margin-left: 219px;

  &__form {
    font-family: 'DM Sans';
    font-weight: 700;
    font-size: 44px;
    line-height: 58px;
    color: #222222;
  }

  &__title {
    margin-bottom: 50px;
  }
}

.form {

  &__input {
    padding: 24px 30px;
    width: 577px;
    height: 71px;
    border-radius: 8px;
    border: 2px solid #CCCCCC;
    margin-top: 20px;
    margin-bottom: 24px;
  }
  
  &__input-password {
    padding: 24px 30px;
    width: 577px;
    height: 71px;
    border-radius: 8px;
    margin-top: 20px;
    border: 2px solid #CCCCCC;
  }

  &__container-password{
    position: relative;
  }
}

.password {
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-20%);
  cursor: pointer;
  font-size: 30px;
}

.button__login {
  margin-top: 23px;
  margin-bottom: 42px;
}

.register{
  text-decoration: none;
    font-family: 'DM Sans';
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #466543;
    margin-left: 10px;
}

.kanan {
  
  margin-left: 144px;

  &__wrapper {
    width: 940px;
    min-height: 100%;
    background-color: #F0F5ED;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
  }

  &__title {
    font-family: 'Playfair Display';
    margin-left: 137px;
    margin-top: 114px;
    margin-right: 274px;
    font-weight: 700;
    font-size: 60px;
    line-height: 74px;
    color: #222222;
  }

  &__paragraf {
    font-family: 'DM Sans';
    font-weight: 400;
    size: 28px;
    line-height: 38px;
    color: #4B4B4B;
    text-shadow: 0 4px 4px #00000040;
    margin-left: 137px;
    margin-right: 137px;
    margin-top: 40px;
  }

  &__gambar {
    margin-top: 62px;
    width: 90%;
  }
}
</style>