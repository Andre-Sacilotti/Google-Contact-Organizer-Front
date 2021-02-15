// import store from "@/store/store"
// import router from "@/routes/routes";

export default {
    name: "Sidebar",
    props:[
        'show'
],
    methods:{
        handlerClick: function(new_page){
            this.$store.commit("handlerSideBar")
            this.$router.push(new_page).catch(err => {err})
        },
        handlerLogout: function(){

            let commit = this.$store.commit
            let router = this.$router

            this.$gAuth.signOut(function () {
                commit("logout")
                commit("handlerSideBar")
                router.push('/').catch(err => {err})
            }, function (error) {
                console.log(error)
            })
        }
    }

}