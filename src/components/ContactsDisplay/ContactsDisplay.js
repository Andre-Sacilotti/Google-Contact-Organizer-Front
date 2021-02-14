import ContentDisplay from "@/components/ContentDisplay/ContentDisplay";
import ContactsGroup from "@/components/ContactsGroup/ContactsGroup.vue";
import API from "@/services/Axios";
import Contact from "@/components/Contact/Contact";
import Loading from "@/components/Loading/Loading";


export default {
    name: 'ContactsDisplay',
    components: {
        ContentDisplay,
        ContactsGroup,
        Contact,
        Loading
    },

    methods:{

        handlerFilter: function(e){



            if (e.target.value === ""){
                this.auxiliarydata = this.contactsdata
            }else{
                console.log("else")
                const filtered_domains = {}

                for (let prop in this.contactsdata){

                    if(prop.toLowerCase().includes(e.target.value.toLowerCase().replace("@",""))){
                        console.log("filtered")
                        filtered_domains[prop] = this.contactsdata[prop]
                    }
                }
                this.auxiliarydata = filtered_domains
            }


        console.log(this.auxiliarydata)

        },

        addName: function(){
            console.log("teste")
        },

        getContacts: function(){

            this.showLoading = true
            API.get(
                'contact/',
                { headers: {'authorization-code': this.$store.state.accessToken}}
            ).then(
                (response) => {
                    this.showLoading = false
                    console.log(response.data.contacts)
                    this.contactsdata = response.data.contacts
                    this.auxiliarydata = this.contactsdata
                }
            ).catch(error => {
                console.log(error)
            })
        }
    },
    data(){
        return {
            contactsdata: {},
            loading: true,
            filtereddata: {},
            auxiliarydata: {},
            showLoading: false,
        }
    },
    mounted() {
        console.log('mounted hook has been called');
        console.log(this.contactsdata)
        this.getContacts()
    }
}