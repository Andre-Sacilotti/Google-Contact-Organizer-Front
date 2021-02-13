import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

import router from "@/routes/routes";

const store = new Vuex.Store({
    state: {
        loggedIn: false,
        accessToken: "",
        expire_token: 0,
        showSidebar: false
    },

    mutations: {
        login(state, payload){
            state.loggedIn = true
            state.accessToken = payload.access_token
            state.expire_token = payload.expire_token
            sessionStorage.setItem("loggedIn", "true")
            sessionStorage.setItem("access_token", payload.access_token)
            sessionStorage.setItem("expire_token", payload.expire_token)

            if (payload.push === true){
                router.push("/home")
            }
            console.log(router)
        },

        logout(state){
            state.loggedIn = false
            state.accessToken = ""
            state.expire_token = 0
            sessionStorage.setItem("loggedIn", "false")
            sessionStorage.setItem("access_token", "")
            sessionStorage.setItem("expire_token", 0)



        },

        handlerSideBar(state){
            state.showSidebar = !state.showSidebar

        }
    }
})

export default store