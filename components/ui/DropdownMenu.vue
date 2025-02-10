<script lang="ts" setup>
import { Title } from "#components";

const props = defineProps({
    title: {
        type: String,
    },
});
</script>

<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <div class="text" id="navbarNavDarkDropdown">
                <p>Sort by</p>
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <button
                            class="btn btn-white"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Newest
                            <icon
                                name="ri-arrow-down-s-line"
                                class="icon"
                            ></icon>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-white">
                            <li>
                                <a class="dropdown-item active" href="#"
                                    >Newest</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Popular</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">A - Z</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Z - A</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p>Category</p>
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <button
                            class="btn btn-white"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {{ title }}
                            <icon
                                name="ri-arrow-down-s-line"
                                class="icon"
                            ></icon>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-white">
                            <li>
                                <a
                                    class="dropdown-item`"
                                    href="/categories/comedy"
                                    >Comedy</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Romance</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Horror</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Adventure</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Fiction</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Fantasy</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Drama</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Heartfelt</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Mystery</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.text {
    display: flex;
    align-items: center;
    font-family: "DM Sans";
    color: #4b4b4b;
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
    gap: 30px;
}

.btn {
    transform: translateY(-18%);
    border: none;
    color: #222222;
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
}

.dropdown-menu {
    color: #222222;
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
}

.dropdown-item {
    border-left: 3px solid white;
    padding: 15px;
    padding-right: 70px;
    background-color: white;

    &:hover {
        border-left: 3px solid #466543;
        color: #466543;
    }
}

.active {
    background-color: white;
    color: #222222;
    border-left: 3px solid #466543;
}

.navbar-expand-lg {
    display: flex;
    align-items: center;
}

.icon {
    transform: translateY(20%);
}
</style>
