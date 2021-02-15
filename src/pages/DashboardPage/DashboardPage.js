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
        componentKey: 0,
        userStatistics: null,
        showLoading: false,
        showChart: '',
        items: ['organization', 'job', 'domain', 'city'],
        notLoaded: true,
        noContacts: true,
        per_domain_data: null,
        per_domain_label: null,

        per_city_data: null,
        per_city_label: null,

        per_organization_data: null,
        per_organization_label: null,

        per_jobtitle_data:null,
        per_jobtitle_label: null,
    }),
    beforeCreate(){
        this.Loading = true

        API.get(
            "user?userId="+this.$store.state.user_id + "&toChart=chart",
        ).then(response => {
            console.log(response.data['contacts_statistics'])
            this.userStatistics = response.data
            console.log(this.userStatistics['contacts_statistics'])
            this.Loading = false
            this.notLoaded = false
            this.noContacts = false
            this.remount()
        }).catch(error => {
            this.noContacts = true
            this.$toasted.error("Não há Usuarios nessa conta!", {
                theme: "bubble",
                position: "top-center",
                duration : 2000
            });
            console.log(error)
        })
    },

    computed: {
        getShowSideBar(){
            return this.$store.state.showSidebar
        },
    },
    methods: {
        remount(){

            console.log("AQUI", this.userStatistics)
            if(this.userStatistics === null){
                console.log("primeiro")
                this.per_domain_data=[]
                this.per_domain_label=[]
            }else{
                console.log("222222222222")
                console.log(this.userStatistics['domain']['data'])
                this.per_domain_data=this.userStatistics['domain']['data'] || []
                this.per_domain_label=this.userStatistics['domain']['label'] || []
            }

            if(this.userStatistics === null){
                this.per_city_data=[]
                this.per_city_label=[]
            }else{
                this.per_city_data=this.userStatistics['city']['data'] || []
                this.per_city_label=this.userStatistics['city']['label'] || []
            }

            if( this.userStatistics === null){
                this.per_organization_data=[]
                this.per_organization_label=[]
            }else{
                this.per_organization_data=this.userStatistics['organization']['data'] || []
                this.per_organization_label=this.userStatistics['organization']['label'] || []
            }

            if( this.userStatistics === null){
                this.per_jobtitle_data=[]
                this.per_jobtitle_label=[]
            }else{
                this.per_jobtitle_data=this.userStatistics['jobtitle']['data'] || []
                this.per_jobtitle_label=this.userStatistics['jobtitle']['label'] || []
            }

            this.$forceUpdate();
            this.componentKey =1;
            console.log( this.per_jobtitle_label)

        },
        handlerSideBar(){
            this.$store.commit("handlerSideBar")
        }
    }
}