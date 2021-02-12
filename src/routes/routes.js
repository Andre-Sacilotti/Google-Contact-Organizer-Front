import VueRouter from 'vue-router';
import LoginPage from "@/pages/LoginPage/LoginPage.vue";
import Home from "@/pages/Home/Home.vue"

import store from "@/store/store.js"


const routes = [

    {
        path: "/home", component: Home, exact: true, meta:{need_auth: true}
    },

    {
        path: "/", component: LoginPage, exact: true, meta:{need_auth: false}
    },
]


const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    console.log(store.state)
    console.log( sessionStorage.getItem("loggedIn"))

    if (to.meta.need_auth === true){

        if (store.state.loggedIn === true || sessionStorage.getItem("loggedIn") === "true"){
            console.log("Autenticado")
            next();
        }else{
            next("/");
        }
    }else{

        // if(from.path === "/"){
        //     if (store.state.loggedIn === true || sessionStorage.getItem("loggedIn") === "true"){
        //         console.log("Autenticado 2")
        //         next("/home")
        //     }
        // }

        next()
    }



});

router.afterEach((to, from) => {
    console.log(to, from)
})

export default router