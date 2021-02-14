
export default {
    name: "ContactsGroup",
    props: [
        'title',
        'len'
        ]
    ,
    data: ()=> ({
        showMore: false
    }),
    methods: {
        handlerShowMore: function(){
            this.showMore = !this.showMore
        }
    }

}