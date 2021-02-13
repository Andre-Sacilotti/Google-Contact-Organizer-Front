import Navbar from '../../components/Navbar/Navbar.vue'
import ContentDisplay from "@/components/ContentDisplay/ContentDisplay";
import store from "@/store/store";

export default {
    name: "LoginPage",
    components: {
        Navbar,
        ContentDisplay
    },
    data : () => (
        {
            clientId: process.env.VUE_APP_CLIENT_ID
        }
    ),
    methods: {
        handlerMenu(){

        },
        handlerGoogleButton(){
            this.$gAuth.signIn(function (user) {
                //on success
                console.log(user)
                store.commit("login", {
                    access_token: user['uc']['access_token'],
                    expire_token: user['uc']['expires_at'],
                    push: true
                })


            }, function (error) {
                console.log(error)
            })
        }
    }


}

