import ContentDisplay from "@/components/ContentDisplay/ContentDisplay";
import ContactsGroup from "@/components/ContactsGroup/ContactsGroup.vue";
import API from "@/services/Axios";


export default {
    name: 'ContactsDisplay',
    components: {
        ContentDisplay,
        ContactsGroup
    },
    methods:{

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
                }
            ).catch(error => {
                console.log(error)
            })
        }
    },
    data(){
        return {
            contactsdata: {},
            loading: true
        }
    },
    mounted() {
        console.log('mounted hook has been called');
        console.log(this.contactsdata)
        this.getContacts()
    }
}