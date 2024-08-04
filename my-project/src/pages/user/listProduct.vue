<template>
    <div>
        <div class="text-3xl m-auto">PRODUCT</div>
        <div class="flex flex-wrap gap-2 justify-center items-center">
            <div
                v-for="product in listProduct"
                :key="product.id"
                class="border w-1/5 rounded"
            >
                <div>
                    {{ product.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { getProducts } from "../../apis/product";

const listProduct = ref([]);
const params = reactive({
    page: 1,
    limit: 8,
});

onMounted(async () => {
    try {
        listProduct.value = await getProducts(params);
        console.log("🚀 ~ onMounted ~ listProduct.value :", listProduct.value);
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }
});
</script>

<style>
/* Style your component here */
</style>
