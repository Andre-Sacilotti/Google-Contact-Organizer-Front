import Navbar from '../../components/Navbar/Navbar.vue'
import Sidebar from "../../components/Sidebar/Sidebar.vue"
import ContactsDisplay from "@/components/ContactsDisplay/ContactsDisplay.vue";
import Dashboard from "@/components/Dashboard/Dashboard.vue";
import API from "@/services/Axios";
import Loading from "@/components/Loading/Loading.vue";



export default {

    name: 'Home',
    components: {
        Navbar,
        Sidebar,
        ContactsDisplay,
        Dashboard,
        Loading
    },
    data: () => ({
        userStatistics: {},
        showLoading: false,
        showChart: 'domain',
        items: ['organization', 'job', 'domain', 'city'],
        showMenu: false
    }),
    beforeCreate(){
        console.log("user?userId="+this.$store.state.user_id)
        this.Loading = true
        API.get(
            "user?userId="+this.$store.state.user_id + "&toChart=true",
            ).then(response => {
                console.log(response)
                this.userStatistics = {...response.data}
                this.Loading = false
        }).catch(error => {
            console.log(error)
        })
    },
    // mounted(){
    //     console.log(this.userStatistics)
    // },
    computed: {
        getShowSideBar(){
            return this.$store.state.showSidebar
        },
    },
    methods: {
        handlerDropdown(){

        },
        handlerSideBar(){
            this.$store.commit("handlerSideBar")
        }
    }
}