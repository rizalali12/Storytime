<script setup lang="ts">
const route = useRoute();

const getText = () => {
    switch (route.query.category) {
        case "comedy":
            return "Comedy";
            break;
        case "romance":
            return "Romance";
            break;
        case "horror":
            return "Horror";
            break;
        case "adventure":
            return "Adventure";
            break;
        case "fiction":
            return "Fiction";
            break;
        case "fantasy":
            return "Fantasy";
            break;
        case "drama":
            return "Drama";
            break;
        case "heartfelt":
            return "Heartfelt";
            break;
        case "mystery":
            return "Mystery";
            break;
        default:
            return navigateTo("/error.vue");
            break;
    }
};
</script>
<template>
    <div>
        <Appheader />
        <template v-if="route.query.category">
            <PagesCategoriesHighlight :title="getText()" />
        </template>
        <template v-else>
            <PagesAllstoryHighlight title="All Story" />
        </template>

        <AppFooter />
    </div>
</template>

<style lang="ts" scoped></style>
