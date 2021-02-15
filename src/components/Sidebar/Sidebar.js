import API from "@/services/Axios";
import axios from "axios";
// import store from "@/store/store"

export default {
    name: "Sidebar",
    props:[
        'show'
],
    methods:{

        handlerDownloader(url) {
            axios.get(url, { responseType: 'blob' })
                .then(response => {
                    const blob = new Blob([response.data], { type: 'application/pdf' })
                    const link = document.createElement('a')
                    link.href = URL.createObjectURL(blob)
                    link.download = "report.xls"
                    link.click()
                    URL.revokeObjectURL(link.href)
                }).catch(console.error)
        },


        handlerReportGenerator: function(){
            API.get(
                'report/',
                {headers: {'authorization-code': this.$store.state.accessToken}},
            ).then(response => {

                this.$toasted.success("Baixando o Relatorio de contatos.", {
                    theme: "bubble",
                    position: "top-center",
                    duration : 2000
                });

                this.handlerDownloader(response.data.url)



            }).catch(() => {
                this.$toasted.error("Não há contatos nessa conta", {
                    theme: "bubble",
                    position: "top-center",
                    duration : 2000
                });
            })
        },
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