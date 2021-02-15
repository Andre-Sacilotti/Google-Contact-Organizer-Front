import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

import router from "@/routes/routes";

const store = new Vuex.Store({
    state: {
        loggedIn: false,
        accessToken: "",
        expire_token: 0,
        showSidebar: false,
        profile_photo: "",
        user_id: ""
    },

    mutations: {
        login(state, payload){
            console.log("Payload", payload)
            state.loggedIn = true
            state.accessToken = payload.access_token
            state.expire_token = payload.expire_token
            state.profile_photo = payload.profile_photo
            state.user_id = payload.user_id
            sessionStorage.setItem("loggedIn", "true")
            sessionStorage.setItem("access_token", payload.access_token)
            sessionStorage.setItem("expire_token", payload.expire_token)
            sessionStorage.setItem("profile_photo", payload.profile_photo)
            sessionStorage.setItem("user_id", payload.user_id)

            if (payload.push === true){
                router.push("/home")
            }
            console.log(router)
        },

        logout(state){
            state.loggedIn = false
            state.accessToken = ""
            state.expire_token = 0
            state.profile_photo = ""
            state.user_id = ""
            sessionStorage.setItem("loggedIn", "false")
            sessionStorage.setItem("access_token", "")
            sessionStorage.setItem("expire_token", 0)
            sessionStorage.setItem("profile_photo", "")
            sessionStorage.setItem("user_id", "")



        },

        handlerSideBar(state){
            state.showSidebar = !state.showSidebar

        }
    }
})

export default store