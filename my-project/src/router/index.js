import { createRouter, createWebHistory } from "vue-router";
import routes from "../constant/routes";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: "userLayout",
            path: routes.USER.HOME,
            component: () => import("../layouts/UserLayout/UserLayout.vue"),
            children: [
                {
                    path: routes.USER.HOME,
                    name: "userLayout.home",
                    component: () => import("../pages/user/home.vue"),
                },
                {
                    path: routes.USER.PRODUCT,
                    name: "userLayout.product",
                    component: () => import("../pages/user/listProduct.vue"),
                },
                {
                    path: routes.USER.DESIGN,
                    name: "userLayout.design",
                    component: () => import("../pages/user/design.vue"),
                },
                {
                    path: routes.USER.SERVICES,
                    name: "userLayout.services",
                    component: () => import("../pages/user/services.vue"),
                },
                {
                    path: routes.USER.CONTACT,
                    name: "userLayout.contact",
                    component: () => import("../pages/user/contact.vue"),
                },
                {
                    path: routes.USER.ABOUT,
                    name: "userLayout.about",
                    component: () => import("../pages/user/about.vue"),
                },
                {
                    path: routes.USER.ADVERTISES,
                    name: "userLayout.advertises",
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
