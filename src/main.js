import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faHome, faFilePdf, faChartPie, faEllipsisH, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import GAuth from 'vue-google-oauth2-gapi'
import GoogleSignInButton from 'vue-google-signin-button-directive'
import VueRouter from 'vue-router'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

import store from "./store/store.js"
import router from "./routes/routes.js"

import Toasted from 'vue-toasted';

Vue.use(Toasted)

Vue.use(Toasted, {
  position: 'top-center', duration: 2000, keepOnHover: true,  theme: "outline",
})

const gauthOption = {
  clientId: process.env.VUE_APP_CLIENT_ID + ".apps.googleusercontent.com",
  scope: "https://www.googleapis.com/auth/contacts.readonly https://www.googleapis.com/auth/contacts.other.readonly profile",
  prompt: 'select_account'
}

Vue.use(GAuth, gauthOption)
Vue.use(VueRouter)

library.add(faBars)
library.add(faEllipsisH)
library.add(faHome)
library.add(faFilePdf)
library.add(faChartPie)
library.add(faSignOutAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.component('v-select', vSelect)

Vue.config.productionTip = false


new Vue({
  store,
  router,
  GoogleSignInButton,
  render: h => h(App),
}).$mount('#app')
