<script setup>
import { onMounted, ref } from "vue";
import { getUserOrders } from "../../apis/orders";

let listOrder = ref([]);

onMounted(async () => {
    listOrder.value = await getUserOrders();
    console.log("🚀 ~ onMounted ~ listOrder:", listOrder);
});
</script>

<template>
    <div class="w-full">
        <table
            class="table-auto border-collapse border border-slate-500 w-full text-center"
        >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>USERNAME</th>
                    <th>STATE</th>
                    <th>AMOUNT</th>
                    <th>SUB AMOUNT</th>
                    <th>SHIPPING FEE</th>
                    <th>CREATED DATE</th>
                    <th>PAYMENT DATE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ listOrder?.id }}</td>
                    <td>{{ listOrder?.name }}</td>
                    <td>{{ listOrder?.state }}</td>
                    <td>{{ listOrder?.amount }}</td>
                    <td>{{ listOrder?.sub_amount }}</td>
                    <td>{{ listOrder?.shipping_fee }}</td>
                    <td>{{ listOrder?.created_date }}</td>
                    <td>{{ listOrder?.payment_date }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style></style>
