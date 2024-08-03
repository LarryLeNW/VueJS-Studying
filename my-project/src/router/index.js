import { createRouter, createWebHistory } from "vue-router";
import routes from "../constant/routes";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "userLayout",
            component: () => import("../layouts/UserLayout/UserLayout.vue"),
            children: [
                {
                    path: routes.USER.HOME,
                    component: () => import("../pages/user/home.vue"),
                },
                {
                    path: routes.USER.PRODUCT,
                    component: () => import("../pages/user/product.vue"),
                },
                {
                    path: routes.USER.DESIGN,
                    component: () => import("../pages/user/design.vue"),
                },
                {
                    path: routes.USER.SERVICES,
                    component: () => import("../pages/user/services.vue"),
                },
                {
                    path: routes.USER.CONTACT,
                    component: () => import("../pages/user/contact.vue"),
                },
                {
                    path: routes.USER.ABOUT,
                    component: () => import("../pages/user/about.vue"),
                },
                {
                    path: routes.USER.ADVERTISES,
                    component: () => import("../pages/user/advertises.vue"),
                },
            ],
        },
        {
            path: "/",
            name: "memberLayout",
            component: () => import("../layouts/MemberLayout/MemberLayout.vue"),
            children: [
                {
                    path: routes.MEMBER.LIST_ORDER,
                    component: () => import("../pages/member/list_order.vue"),
                },
                {
                    path: routes.MEMBER.DETAIL_ORDER,
                    component: () => import("../pages/member/detail_order.vue"),
                },
            ],
        },
    ],
});

export default router;
