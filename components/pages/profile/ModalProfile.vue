<script setup lang="ts"></script>

<template>
    <div class="wrapperr">
        <UiButton
            title="Edit Profile"
            variant="primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
        />
        <UiModal elWidth="1400" title="exampleModal">
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
            ></button>

            <h1 class="title">Edit Profile</h1>
            <div class="container">
                <div class="wrapper">
                    <div class="profile">
                        <div class="profile__picture">
                            <img
                                src="@/assets/icons/profile_picture.png"
                                alt=""
                                srcset=""
                                class="profile__picture-icon"
                            />
                            <UiButton
                                variant="outlined"
                                title="Change Picture"
                            />
                        </div>
                        <div class="profile__form">
                            <UiFormInput
                                variant="form-black"
                                placeholder="Iswara"
                                label="Name"
                            />
                            <UiFormInput
                                variant="form"
                                placeholder="email@gmail.com"
                                label="Email"
                                :disabled="true"
                            />
                            <UiFormInput
                                variant="text-area"
                                placeholder="Avid reader and aspiring writer. Lover of mysteries, thrillers, and sci-fi. Coffee enthusiast and nature explorer. Always on the lookout for new stories and adventures."
                                label="About Me"
                            />
                        </div>
                    </div>
                    <div class="profile__password-wrapper">
                        <div class="profile__password">
                            <h2>Change Password</h2>
                            <div class="profile__form">
                                <UiFormInput
                                    variant="password"
                                    placeholder="Enter your old password"
                                    label="Old Password"
                                />
                                <UiFormInput
                                    variant="password"
                                    placeholder="Enter your new password"
                                    label="New Password"
                                />
                                <UiFormInput
                                    variant="password"
                                    placeholder="Re-enter your new password"
                                    label="Confirm New Password"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button">
                <UiButton
                    variant="outlined"
                    title="Cancel"
                    data-bs-dismiss="modal"
                />
                <UiButton variant="primary" title="Update Profile" />
            </div>
        </UiModal>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    // background-color: red;

    @media (max-width: 1206px) {
        flex-direction: column;
        align-items: flex-start;
        padding-left: 50px;
    }

    @media (max-width: 612px) {
        flex-direction: column;
        align-items: flex-start;
        padding-left: 0px;
    }
}

.title {
    font-family: "DM Sans";
    font-weight: 700;
    font-size: 36px;
    line-height: 46px;
    color: #222222;
    padding-top: 40px;
    padding-left: 105px;

    @media (max-width: 1506px) {
        padding-left: 60px;
    }
}

.btn-close {
    position: absolute;
    right: 60px;
    top: 40px;

    @media (max-width: 587px) {
        top: 20px;
        right: 40px;
    }
}

.button {
    display: flex;
    justify-content: start;
    gap: 44px;
    padding-top: 54px;
    padding-bottom: 40px;
    padding-left: 100px;

    @media (max-width: 1308px) {
        padding-left: 170px;
    }

    @media (max-width: 1225px) {
        padding-left: 265px;
    }

    @media (max-width: 1206px) {
        padding-left: 100px;
    }

    @media (max-width: 578px) {
        padding-left: 35px;
    }

    @media (max-width: 481px) {
        flex-direction: column;
        padding-top: 10px;
        gap: 20px;
        padding-left: 10px;
    }
}

.profile {
    width: 577px;

    @media (max-width: 714px) {
        width: 100%;
    }

    &__picture {
        display: flex;
        gap: 30px;
        align-items: center;

        @media (max-width: 586px) {
            flex-direction: column;
        }
    }

    &__picture-icon {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-position: center;
        background-repeat: none;
    }

    &__form {
        margin-top: 30px;
        max-width: 577px;
    }

    &__password-wrapper {
        max-width: 577px;
        width: 100%;
    }
}
</style>
