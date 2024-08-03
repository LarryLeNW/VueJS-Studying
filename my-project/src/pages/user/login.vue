<script setup>
import { reactive } from "vue";

const auth = reactive({
    userInfo: {
        isLoading: false,
        data: null,
        errorMessage: null,
    },
    loginData: {
        isLoading: false,
        errorMessage: null,
    },
});

const handleLogin = async () => {};
</script>

<template>
    <div class="flex items-center justify-center h-[100vh]">
        <div class="w-[50%] h-[50%] border-2 rounded p-4">
            <h1
                class="border-b-2 border-blue-600 text-lg font-bold text-blue-600"
            >
                Login
            </h1>
        </div>
    </div>
</template>

<style></style>
