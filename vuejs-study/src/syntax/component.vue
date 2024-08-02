<script setup>
import Button from "../components/Button.vue";

const handleClick = () => {
    alert("happy :))");
};
</script>

<template>
    <div>
        <Button name="Button1" :handleClick="handleClick" />
        <Button name="Button2" />
        <Button name="Button3" />
        <Button name="Button4" />
    </div>
</template>

<style></style>
