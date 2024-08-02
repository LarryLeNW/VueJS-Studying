<script setup>
const props = defineProps({
    name: String,
    style: String,
    handleClick: Function,
});

const emit = defineEmits("")
</script>

<template>
    <button :style="style" @click="handleClick">{{ name }}</button>
</template>

<style></style>
