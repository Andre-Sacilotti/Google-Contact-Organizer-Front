import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        loggedIn: false,
        token: ""
    },

    mutations: {
        login(state, payload){
            state.loggedIn = true
            state.token = payload.token;
        }
    }
})

export default store