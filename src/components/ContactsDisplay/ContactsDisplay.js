import ContentDisplay from "@/components/ContentDisplay/ContentDisplay";
import ContactsGroup from "@/components/ContactsGroup/ContactsGroup.vue";
import API from "@/services/Axios";
import Contact from "@/components/Contact/Contact";


export default {
    name: 'ContactsDisplay',
    components: {
        ContentDisplay,
        ContactsGroup,
        Contact
    },

    methods:{

        handlerFilter: function(e){



            if (e.target.value === ""){
                this.auxiliarydata = this.contactsdata
            }else{
                console.log("else")
                const filtered_domains = {}

                for (let prop in this.contactsdata){

                    if(prop.toLowerCase().includes(e.target.value.toLowerCase())){
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
            API.get(
                'contact/',
                { headers: {'authorization-code': this.$store.state.accessToken}}
            ).then(
                (response) => {
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
            auxiliarydata: {}
        }
    },
    mounted() {
        console.log('mounted hook has been called');
        console.log(this.contactsdata)
        this.getContacts()
    }
}