<script lang="ts" setup>
const props = defineProps({
    elWidth: {
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
        <div class="modal-dialog" :style="'max-width:' + elWidth + 'px'">
            <div class="modal-content" :style="'max-width:' + elWidth + 'px'">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
