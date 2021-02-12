import Navbar from '../../components/Navbar/Navbar.vue'
import ContentDisplay from "@/components/ContentDisplay/ContentDisplay";

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
        handlerGoogleButton(){
            this.$gAuth.signIn(function (user) {
                //on success
                console.log(user)

            }, function (error) {
                console.log(error)
            })
        }
    }


}

