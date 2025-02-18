<script lang="ts" setup>
const props = defineProps({
    width: {
        type: String,
    },
    title: {
        type: String,
    },
});
</script>

<template>
    <!-- Button trigger modal -->

    <!-- Modal -->
    <div
        class="modal fade"
        :id="title"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog" :style="'max-width:' + width + 'px'">
            <div class="modal-content" :style="'width:' + width + 'px'">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
