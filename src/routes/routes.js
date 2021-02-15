import VueRouter from 'vue-router';
import LoginPage from "@/pages/LoginPage/LoginPage.vue";
import Home from "@/pages/Home/Home.vue"
import DashboardPage from  "@/pages/DashboardPage/DashboardPage.vue"

import store from "@/store/store.js"


const routes = [

    {
        path: "/dashboard", component: DashboardPage, exact: true, meta:{need_auth: true}
    },

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

      if(sessionStorage.getItem('loggedIn') === "true"){

          if(sessionStorage.getItem('expire_token') > Math.round(new Date().getTime())){

              store.commit('login', {
                  access_token: sessionStorage.getItem('access_token'),
                  expire_token: sessionStorage.getItem('expire_token'),
                  profile_photo: sessionStorage.getItem('profile_photo'),
                  user_id: sessionStorage.getItem('user_id'),
              })

              if (to.path === "/"){
                  // Was logged befored, and the token wasnt expired
                  next("/home")
              }else{
                  // Was logged befored, and the token wasnt expired
                  next()

              }

          }else{
              // Was logged befored, but the token expired
              if(to.path !== "/") next("/")
              else next()
          }

      }else{
          // Wasnt logged befored
          if(to.path === "/"){
              next()
          }else{
              next("/")
          }


      }


});

// router.afterEach((to, from) => {
//
// })

export default router