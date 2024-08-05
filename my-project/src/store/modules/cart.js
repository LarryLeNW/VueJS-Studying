// store/modules/product.js

const LOCAL_STORAGE_KEY = "cart_items";

const state = () => ({
    data: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [],
});

const mutations = {
    addCart(state, product) {
        const existingProductIndex = state.data.findIndex(
            (item) => item.id === product.id
        );

        if (existingProductIndex !== -1) {
            state.data[existingProductIndex].quantity += product.quantity;
        } else {
            state.data.push(product);
        }

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.data));
    },
};

const actions = {
    async addCart({ commit }, product) {
        commit("addCart", product);
    },
};

const getters = {
    carts: (state) => state.data,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
