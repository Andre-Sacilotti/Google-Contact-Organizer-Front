import Navbar from '../../components/Navbar/Navbar.vue'
import ContentDisplay from "@/components/ContentDisplay/ContentDisplay";
import store from "@/store/store";
import API from "@/services/Axios";

export default {
    name: "LoginPage",
    components: {
        Navbar,
        ContentDisplay,

    },
    data : () => (
        {
            clientId: process.env.VUE_APP_CLIENT_ID,
        }
    ),
    mounted () {
        this.showLoading = false;
    },
    methods: {
        handlerMenu(){

        },
        handlerGoogleButton(){

            try{
                this.$gAuth.signIn(function (user) {
                    //on success
                    store.commit("login", {
                        access_token: user['uc']['access_token'],
                        expire_token: user['uc']['expires_at'],
                        profile_photo: user['Es']['vI'],
                        user_id: user['Es']['JR'],
                        push: true
                    })

                    API.put(
                        "user/",
                        {
                            'user_id': user['Es']['JR'],
                            'user_name': user['Es']['sd'],
                        },
                        {headers: {'authorization-code': user['uc']['access_token']}}
                    ).then(response=>{
                        console.log(response)

                    }).catch(error=>{
                        console.log(error)
                    })


                }, function (error) {
                    console.log(error)
                })
            }catch{
                this.$toasted.error("Erro ao carregar popup de login. Tente novamente.", {
                    theme: "bubble",
                    position: "top-center",
                    duration : 2000
                });

            }

        }
    }


}

