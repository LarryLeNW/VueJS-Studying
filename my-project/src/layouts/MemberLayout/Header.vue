<script setup>
import { reactive, ref } from "vue";
import routes from "../../constant/routes";

const navigateItems = [
    {
        path: routes.USER.HOME,
        name: "Home",
        icon: "",
    },
    {
        path: routes.USER.PRODUCT,
        name: "Product",
        icon: "",
    },
    {
        path: routes.USER.DESIGN,
        name: "Design",
        icon: "",
    },
    {
        path: routes.USER.ADVERTISES,
        name: "Advertise",
        icon: "",
    },
    {
        path: routes.USER.SERVICES,
        name: "Service",
        icon: "",
    },
    {
        path: routes.USER.ABOUT,
        name: "About",
        icon: "",
    },
];

const isShowMenuUser = ref(false);

const toggleShowMenuUser = () => {
    isShowMenuUser.value = !isShowMenuUser.value;
};

let infoDataDemo = reactive({
    username: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    address: "123, Thủy Khúc, Hà Nội",
    phone: "0909090909",
    website: "https://example.com",
    avatar: "https://avatar.iran.liara.run/public/boy",
});

const handleLogoutDemo = () => {
    infoDataDemo = null;
};
</script>

<template>
    <div class="flex py-4 px-8 h-15 border-b items-center justify-between mb-2">
        <div>
            <img src="../../assets/logo.png" alt="" class="h-10 object-cover" />
        </div>
        <div class="flex gap-6 items-center">
            <div v-for="nav in navigateItems" :key="nav.id">
                <router-link
                    :to="nav.path"
                    class="text-lg font-medium hover:text-main hover:text-2xl transition-all"
                >
                    {{ nav.name }}
                </router-link>
            </div>
            <div
                v-if="infoDataDemo"
                class="relative border-l-2 px-2 flex items-center gap-2 bg-gray-100 py-1 rounded cursor-pointer"
                @click="toggleShowMenuUser()"
            >
                <img
                    :src="infoDataDemo?.avatar"
                    alt="avatar"
                    class="h-12 w-12 object-cover"
                />
                <span>{{ infoDataDemo?.username }}</span>
                <div
                    v-if="isShowMenuUser"
                    class="absolute border-2 border-main px-2 py-4 m-h-11 w-[120%] bottom-[-10rem] left-[-32px] rounded bg-gray-100"
                >
                    <div class="p-1 text-lg hover:font-bold">PROFILE</div>
                    <div class="p-1 text-lg hover:font-bold border-y-2">
                        YOUR SERVICES
                    </div>
                    <div
                        class="p-1 text-lg hover:font-bold text-red-600"
                        @click="handleLogoutDemo"
                    >
                        LOGOUT
                    </div>
                </div>
            </div>
            <div v-else>
                <!-- <router-link
                    :to="path"
                    class="text-lg font-medium hover:text-main"
                >
                    LOGIN / REGISTER
                </router-link> -->
            </div>
        </div>
    </div>
</template>

<style></style>
