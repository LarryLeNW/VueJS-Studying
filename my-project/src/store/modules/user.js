const state = () => ({
    userInfo: null,
});

const mutations = {
    SET_USER(state, userInfo) {
        state.userInfo = userInfo;
    },
    LOGOUT(state) {
        state.userInfo = null;
    },
};

const actions = {
    login({ commit }, userInfo) {
        commit("SET_USER", userInfo);
    },
    logout({ commit }) {
        commit("LOGOUT");
    },
};

const getters = {
    isAuthenticated: (state) => !!state.userInfo,
    userInfo: (state) => state.userInfo,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
