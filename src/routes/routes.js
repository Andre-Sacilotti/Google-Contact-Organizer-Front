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

      if(sessionStorage.getItem('loggedIn') === "true"){

          if(sessionStorage.getItem('expire_token') > Math.round(new Date().getTime())){

              console.log("GT ", sessionStorage.getItem('expire_token') > Math.round(new Date().getTime()))
              console.log(sessionStorage.getItem('expire_token'))
              console.log(Math.round(new Date().getTime()))

              store.commit('login', {
                  access_token: sessionStorage.getItem('access_token'),
                  expire_token: sessionStorage.getItem('expire_token'),
              })

              if (to.path === "/"){
                  // Was logged befored, and the token wasnt expired
                  console.log('1')
                  next("/home")
              }else{
                  // Was logged befored, and the token wasnt expired
                  console.log(2)
                  next()

              }

          }else{
              // Was logged befored, but the token expired
              console.log('3')
              if(to.path !== "/") next("/")
              else next()
          }

      }else{
          // Wasnt logged befored
          console.log('4')
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