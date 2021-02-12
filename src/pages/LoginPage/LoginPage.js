import Navbar from '../../components/Navbar/Navbar.vue'

export default {
    name: "LoginPage",
    components: {
        Navbar
    },
    data : () => (
        {
            clientId: process.env.VUE_APP_CLIENT_ID
        }
    ),
    methods: {
        OnGoogleAuthSuccess(idToken){
            this.$store.commit("login", {token: idToken})
            this.$router.push({
                path: "/home"
            })

        },
        OnGoogleAuthFail(error){
            console.log(error)
        }
    }


}

