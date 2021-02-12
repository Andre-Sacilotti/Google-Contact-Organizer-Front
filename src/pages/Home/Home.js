import Navbar from '../../components/Navbar/Navbar.vue'
import Sidebar from "../../components/Sidebar/Sidebar.vue"
import ContactsDisplay from "@/components/ContactsDisplay/ContactsDisplay.vue";

export default {

    name: 'Home',
    components: {
        Navbar,
        Sidebar,
        ContactsDisplay
    },
    ready(){

    },
    computed: {
        getShowSideBar(){
            return this.$store.state.showSidebar
        },
    },
    methods: {
        handlerSideBar(){
            this.$store.commit("handlerSideBar")
        }
    }
}