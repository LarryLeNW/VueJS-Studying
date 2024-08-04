<template>
    <div>
        <div v-if="product.isLoading" class="text-center mt-4">
            <p>Loading...</p>
        </div>

        <div v-if="product.error" class="text-center mt-4 text-red-500">
            <p>Error: {{ error.message }}</p>
        </div>

        <div v-else class="flex flex-wrap gap-2 justify-center items-center">
            <div
                v-for="product in product.data"
                :key="product.name"
                class="border w-1/5 rounded p-2 flex flex-col gap-1"
            >
                <span>Name: {{ product.name }}</span>
                <span>Price: {{ formatMoney(product.price) }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { formatMoney } from "../../utils/helper";

const store = useStore();

const product = computed(() => store.getters["product/listProducts"]);
console.log("🚀 ~ product:", product)

onMounted(() => {
    store.dispatch("product/fetchProductList", {
        page: 1,
        limit: 8,
    });
});
</script>

<style>
/* Style your component here */
</style>
