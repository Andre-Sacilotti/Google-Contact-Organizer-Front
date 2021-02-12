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
            localStorage.setItem("loggedIn", "true")
            localStorage.setItem("token", payload.token)
        },

        logout(state){
            state.loggedIn = false
            state.token = "";
            localStorage.setItem("loggedIn", "false")
            localStorage.setItem("token", "")
        }
    }
})

export default store