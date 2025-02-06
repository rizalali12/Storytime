<script lang="ts" setup>
import { Title } from '#components';
import { generateCodeFrame } from 'vue/compiler-sfc';



const stories = ref<any>([])

const fetchData = () => {
    stories.value = [{
        image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
        title: "Gemma",
        preview: "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality. It was thicker. The trees had grown taller. The ti plants shaded the green forest a sinister red. There was no doubt about it- the jungle",
        author: "Khrisvana (updated) 1",
        date: "12 March 2024",
        genre: "Comedy"
    },
    {
        image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
        title: "Harry Potter and The Goblet of Fire",
        preview: "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality. It was thicker. The trees had grown taller. The ti plants shaded the green forest a sinister red. There was no doubt about it- the jungle",
        author: "Khrisvana (updated) 1",
        date: "12 March 2024",
        genre: "Romance"
    },
    {
        image: "@/assets/icons/undraw_on_the_office_re_cxds 1.png",
        title: "Gemma",
        preview: "1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality. It was thicker. The trees had grown taller. The ti plants shaded the green forest a sinister red. There was no doubt about it- the jungle",
        author: "Khrisvana (updated) 1",
        date: "12 March 2024",
        genre: "ction"
    }
]
}
fetchData()
</script>

<template>
<div class="container">
    <div class="latestStory">
        <UiSectionHeader 
        title="Latest Story"
        url="/login"
        />
        <div class="story">
            <template  v-for="(story, i) in stories" :key="i">
        <UiCardStory :story="story"/>
    </template>
</div>
    </div>
</div>
</template>


<style lang="scss" scoped>
.latestStory {
    margin-top: 160px;
}

.story {
    // background-color: red;
    // overflow: hidden;
    // overflow-x: auto;
    display: flex;
    gap: 29px;
}
</style>