// store/modules/product.js
import { getProducts } from "../../apis/product";

const state = () => ({
    listProducts: {
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
};

const actions = {
    async fetchProductList({ commit }, params) {
        commit("getProductRequest");
        try {
            const result = await getProducts(params);
            commit("getProductListSuccess", result);
        } catch (error) {
            commit("getProductListFailure", error);
        }
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
