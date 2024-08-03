<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
</script>

<template>
    <div class="flex flex-col h-full">
        <Header></Header>
        <router-view />
        <Footer></Footer>
    </div>
</template>
