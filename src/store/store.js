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
            sessionStorage.setItem("loggedIn", "true")
            sessionStorage.setItem("token", payload.token)
        },

        logout(state){
            state.loggedIn = false
            state.token = "";
            sessionStorage.setItem("loggedIn", "false")
            sessionStorage.setItem("token", "")
        }
    }
})

export default store