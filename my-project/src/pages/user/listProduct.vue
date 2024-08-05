<template>
    <div v-if="product.isLoading" class="text-center mt-4">
        <p>Loading...</p>
    </div>

    <div v-else="product.data">
        <div class="flex justify-center my-2 gap-2 items-center">
            <button
                @click="changePage('prev')"
                :disabled="page === 1"
                class="border border-gray-300 px-4 py-2 rounded-md text-gray-700"
            >
                <
            </button>
            <span>{{ params.page }}</span>
            <button
                @click="changePage('next')"
                :disabled="page === 1"
                class="border border-gray-300 px-4 py-2 rounded-md text-gray-700"
            >
                >
            </button>
        </div>
        <div>
            <div
                class="flex flex-wrap gap-5 justify-center items-center cursor-pointer"
            >
                <div
                    v-for="productItem in product.data"
                    :key="productItem.name"
                    class="relative border w-1/5 rounded p-2 flex flex-col gap-1 group"
                >
                    <img
                        src="https://procrate.com/wp-content/uploads/2018/01/crating.png"
                        height="50px"
                        class="object-cover mx-auto"
                        alt=""
                    />
                    <span class="font-bold"> {{ productItem.name }}</span>
                    <div class="flex justify-between items-center">
                        <span class="text-green-700"
                            >Price:
                            {{
                                (productItem?.price / 25)?.toLocaleString(3)
                            }}$</span
                        >
                        <em class="font-semibold text-orange-500 text-sm"
                            >Sold: {{ productItem.sold }}</em
                        >
                    </div>
                    <!-- Add to Cart Button -->
                    <button
                        @click="addToCart(productItem)"
                        class="add-to-cart-button"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

        <div v-if="product.error" class="text-center mt-4 text-red-500">
            <p>Error: {{ product.error.message }}</p>
        </div>
    </div>
</template>

<script setup>
import { notify } from "@kyvg/vue3-notification";
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();

const product = computed(() => store.getters["product/listProducts"]);

const params = reactive({
    page: 1,
    limit: 8,
});

onMounted(() => {
    store.dispatch("product/fetchProductList", params);
});

const changePage = async (direction) => {
    if (direction === "prev" && params.page > 1) {
        params.page--;
    } else if (direction === "next") {
        params.page++;
    }
    await store.dispatch("product/fetchProductList", params);
    if (product.value.data.length <= 0) {
        params.page--;
        await store.dispatch("product/fetchProductList", params);

        notify({
            text: "No more products found.",
            type: "info",
        });
    }
};

const addToCart = (productItem) => {
    store.dispatch("cart/addCart", { ...productItem, quantity: 1 });
    notify({
        text: `${productItem.name} has been added to your cart!`,
        type: "success",
    });
};
</script>

<style>
.relative {
    position: relative;
}

.add-to-cart-button {
    position: absolute;
    bottom: 50%;
    right: 50%;
    background-color: #ff5722;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    transform: translateY(100%);
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0;
}

.group:hover .add-to-cart-button {
    transform: translateY(50%);
    transform: translateX(50%);
    opacity: 1;
}

.group:hover {
    background-color: rgba(83, 71, 71, 0.3);
}

.add-to-cart-button:hover {
    background-color: #e64a19;
}
</style>
