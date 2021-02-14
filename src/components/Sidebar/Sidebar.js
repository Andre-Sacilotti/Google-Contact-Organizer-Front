export default {
    name: "Sidebar",
    props:[
        'show'
],
    methods:{
        handlerClick: function(new_page){
            this.$store.commit("handlerSideBar")
            this.$router.push(new_page).catch(err => {err})


        }
    }

}