import { getProducts } from "../../apis/product";

const state = () => ({
    listProducts: {
        data: [],
        error: null,
        isLoading: false,
    },
    detailProduct: {
        data: [],
        error: null,
        isLoading: false,
    },
});

const mutations = {
    getProductRequest(state) {
        state.listProducts.isLoading = true;
        state.listProducts.error = null;
    },
    getProductListSuccess(state, result) {
        state.listProducts.isLoading = false;
        state.listProducts.data = result;
    },
    getProductListFailure(state, error) {
        state.listProducts.isLoading = false;
        state.listProducts.error = error;
    },

    // SET_POSTS(state, posts) {
    //     state.posts = posts;
    // },
    // ADD_POST(state, post) {
    //     state.posts.push(post);
    // },
};

const actions = {
    async fetchProductList({ commit }, params) {
        console.log("🚀 ~ fetchProductList ~ params:", params);
        let result = await getProducts(params);
        setTimeout(() => {
            commit("getProductListSuccess", result);
        }, 3000);
    },
    createPost({ commit }, post) {
        commit("ADD_POST", post);
    },
};

const getters = {
    listProducts: (state) => state.listProducts,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
