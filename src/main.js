import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import GoogleSignInButton from 'vue-google-signin-button-directive'
import VueRouter from 'vue-router'

import store from "./store/store.js"
import router from "./routes/routes.js"

Vue.use(VueRouter)
library.add(faBars)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false



new Vue({

  store,
  router,
  GoogleSignInButton,
  render: h => h(App),
}).$mount('#app')



